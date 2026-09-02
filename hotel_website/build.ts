#!/usr/bin/env node
/**
 * Aurelia Hotel & Resort — static site build.
 *
 * Renders each page function in src/pages/ (composed from shared partials in
 * src/partials/ and shared data in src/data/) into plain static HTML files
 * at the repo root (hotel_website/), and copies images/ alongside them.
 *
 * Usage:
 *   node dist/build.js          one-off build
 *   node dist/build.js --watch  rebuild on any change under src/
 *
 * Run via `npm run build` / `npm run dev`, which compile this (and everything
 * under src/) with tsc first.
 */
import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

import type { PageContext } from './src/lib/layout';
import { ROOMS } from './src/data/rooms';
import { renderIndex } from './src/pages/index';
import { renderRooms } from './src/pages/rooms';
import { renderAbout } from './src/pages/about';
import { renderServices } from './src/pages/services';
import { renderContact } from './src/pages/contact';
import { renderTerms } from './src/pages/terms';
import { renderPrivacy } from './src/pages/privacy';

// With rootDir: ".", this file compiles to dist/build.js while everything
// under src/ compiles to dist/src/... — so __dirname here resolves to
// hotel_website/dist, not hotel_website. Go one level up so generated output
// (*.html, sitemap.xml, images/) still lands at the hotel_website/ repo root.
const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'src');
const SRC_IMAGES_DIR = path.join(SRC, 'images');
const OUT_IMAGES_DIR = path.join(ROOT, 'images');

const SITE_URL = 'https://www.aurelia-hotel.com';

interface PageDef {
    slug: string;
    activeNav: PageContext['activeNav'];
    title: string;
    description: string;
    render: (ctx: PageContext) => string;
}

const PAGES: PageDef[] = [
    {
        slug: 'index',
        activeNav: 'home',
        title: 'Aurelia Hotel & Resort',
        description: 'A refined oceanfront retreat offering elegant rooms, world-class amenities, and warm, attentive hospitality. Discover your oceanfront escape at Aurelia Hotel & Resort.',
        render: renderIndex,
    },
    {
        slug: 'rooms',
        activeNav: 'rooms',
        title: 'Rooms & Suites - Aurelia Hotel & Resort',
        description: 'Explore all 6 room categories at Aurelia Hotel & Resort, from garden-view retreats to the panoramic Presidential Penthouse.',
        render: renderRooms,
    },
    {
        slug: 'about',
        activeNav: 'about',
        title: 'About Us - Aurelia Hotel & Resort',
        description: 'Learn the story behind Aurelia Hotel & Resort, meet our leadership team, and discover the values that shape every guest experience.',
        render: renderAbout,
    },
    {
        slug: 'services',
        activeNav: 'services',
        title: 'Amenities & Rates - Aurelia Hotel & Resort',
        description: "Explore Aurelia's amenities — infinity pool, full-service spa, signature restaurants, and more — plus nightly room rates for standard and peak season.",
        render: renderServices,
    },
    {
        slug: 'contact',
        activeNav: 'contact',
        title: 'Contact & Reservations - Aurelia Hotel & Resort',
        description: 'Get in touch with the Aurelia Hotel & Resort reservations team — email, phone, location, and directions, or send us a message directly.',
        render: renderContact,
    },
    {
        slug: 'terms',
        activeNav: 'terms',
        title: 'Terms of Service - Aurelia Hotel & Resort',
        description: 'The terms governing reservations, payment, cancellations, and guest conduct at Aurelia Hotel & Resort.',
        render: renderTerms,
    },
    {
        slug: 'privacy',
        activeNav: 'privacy',
        title: 'Privacy Policy - Aurelia Hotel & Resort',
        description: 'How Aurelia Hotel & Resort collects, uses, and protects guest information, including your rights under GDPR and CCPA.',
        render: renderPrivacy,
    },
];

function copyDir(from: string, to: string): void {
    fs.mkdirSync(to, { recursive: true });
    for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
        const src = path.join(from, entry.name);
        const dest = path.join(to, entry.name);
        if (entry.isDirectory()) {
            copyDir(src, dest);
        } else {
            fs.copyFileSync(src, dest);
        }
    }
}

function buildSitemap(outNames: string[]): string {
    const urls = outNames.map(name => {
        const loc = `${SITE_URL}/${name}`;
        return `  <url>\n    <loc>${loc}</loc>\n  </url>`;
    }).join('\n');
    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function build(): void {
    const start = Date.now();
    const featuredRooms = ROOMS.filter(r => r.featured);

    const outNames: string[] = [];
    for (const page of PAGES) {
        const outName = page.slug + '.html';
        const ctx: PageContext = {
            siteUrl: SITE_URL,
            path: outName,
            slug: page.slug, // dot-free page identifier, safe to use inside HTML `id` attributes
            activeNav: page.activeNav,
            title: page.title,
            description: page.description,
            rooms: ROOMS,
            featuredRooms,
        };

        // index page's JSON-LD structured data is built here as a plain JS
        // value. description/siteUrl must match what index.ts itself sets.
        if (page.slug === 'index') {
            ctx.structuredData = {
                '@context': 'https://schema.org',
                '@type': 'Resort',
                name: 'Aurelia Hotel & Resort',
                description: page.description,
                url: SITE_URL + '/',
                telephone: '+1-305-555-0134',
                email: 'reservations@aurelia-hotel.com',
                image: SITE_URL + '/images/apple-touch-icon.png',
                priceRange: '$189-$899',
                starRating: { '@type': 'Rating', ratingValue: '4.9' },
            };
        }

        const html = page.render(ctx);
        fs.writeFileSync(path.join(ROOT, outName), html);
        outNames.push(outName);
    }

    // Copy compiled images (logo SVG + favicon rasters) into the site's images/ folder,
    // alongside the existing (untouched) legacy photo assets.
    copyDir(SRC_IMAGES_DIR, OUT_IMAGES_DIR);

    // Keep sitemap.xml in sync with whatever pages actually got built, rather than
    // hand-maintaining a page list that can drift from PAGES.
    fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), buildSitemap(outNames));

    console.log(`Built ${outNames.length} pages + images/ + sitemap.xml in ${Date.now() - start}ms`);
}

if (require.main === module) {
    build();

    if (process.argv.includes('--watch')) {
        console.log('Watching src/ for changes...');

        // Native fs.watch (recursive) replaces chokidar. On Windows this is known
        // to be less reliable than chokidar: a single save can fire multiple
        // 'change'/'rename' events in quick succession, and `filename` can
        // occasionally be null. Debounce so a burst of events (or an editor's
        // autosave/format-on-save firing several times) collapses into a single
        // rebuild instead of racing or erroring.
        let rebuildTimer: NodeJS.Timeout | null = null;
        const DEBOUNCE_MS = 50;

        function scheduleRebuild(label: string): void {
            console.log(`[${label}]`);
            if (rebuildTimer) clearTimeout(rebuildTimer);
            rebuildTimer = setTimeout(() => {
                try {
                    // Recompile TS -> dist/ first (tsc alone can't re-run the
                    // build step itself), then re-require the freshly-compiled
                    // build module so we pick up the new build() export rather
                    // than the stale one already in this process' closure.
                    execSync('npx tsc', { cwd: ROOT, stdio: 'inherit' });
                    const buildModulePath = path.join(__dirname, 'build.js');
                    delete require.cache[require.resolve(buildModulePath)];
                    const fresh = require(buildModulePath) as { build: () => void };
                    fresh.build();
                } catch (err) {
                    console.error('Build failed:', (err as Error).message);
                }
            }, DEBOUNCE_MS);
        }

        fs.watch(SRC, { recursive: true }, (event, filename) => {
            const label = filename ? path.join('src', filename) : `${event} (unknown file)`;
            scheduleRebuild(label);
        });
    }
}
