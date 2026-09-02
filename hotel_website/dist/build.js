#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = build;
/**
 * Aurelia Hotel & Resort — static site build.
 *
 * Renders each page function in src/pages/ (composed from shared partials in
 * src/partials/ and shared data in src/data/) into plain static HTML files
 * at the repo root (sample_01/), and copies images/ alongside them.
 *
 * Usage:
 *   node dist/build.js          one-off build
 *   node dist/build.js --watch  rebuild on any change under src/
 *
 * Run via `npm run build` / `npm run dev`, which compile this (and everything
 * under src/) with tsc first.
 */
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const child_process_1 = require("child_process");
const rooms_1 = require("./src/data/rooms");
const index_1 = require("./src/pages/index");
const rooms_2 = require("./src/pages/rooms");
const about_1 = require("./src/pages/about");
const services_1 = require("./src/pages/services");
const contact_1 = require("./src/pages/contact");
const terms_1 = require("./src/pages/terms");
const privacy_1 = require("./src/pages/privacy");
// With rootDir: ".", this file compiles to dist/build.js while everything
// under src/ compiles to dist/src/... — so __dirname here resolves to
// sample_01/dist, not sample_01. Go one level up so generated output
// (*.html, sitemap.xml, images/) still lands at the sample_01/ repo root.
const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'src');
const SRC_IMAGES_DIR = path.join(SRC, 'images');
const OUT_IMAGES_DIR = path.join(ROOT, 'images');
const SITE_URL = 'https://www.aurelia-hotel.com';
const PAGES = [
    {
        slug: 'index',
        activeNav: 'home',
        title: 'Aurelia Hotel & Resort',
        description: 'A refined oceanfront retreat offering elegant rooms, world-class amenities, and warm, attentive hospitality. Discover your oceanfront escape at Aurelia Hotel & Resort.',
        render: index_1.renderIndex,
    },
    {
        slug: 'rooms',
        activeNav: 'rooms',
        title: 'Rooms & Suites - Aurelia Hotel & Resort',
        description: 'Explore all 6 room categories at Aurelia Hotel & Resort, from garden-view retreats to the panoramic Presidential Penthouse.',
        render: rooms_2.renderRooms,
    },
    {
        slug: 'about',
        activeNav: 'about',
        title: 'About Us - Aurelia Hotel & Resort',
        description: 'Learn the story behind Aurelia Hotel & Resort, meet our leadership team, and discover the values that shape every guest experience.',
        render: about_1.renderAbout,
    },
    {
        slug: 'services',
        activeNav: 'services',
        title: 'Amenities & Rates - Aurelia Hotel & Resort',
        description: "Explore Aurelia's amenities — infinity pool, full-service spa, signature restaurants, and more — plus nightly room rates for standard and peak season.",
        render: services_1.renderServices,
    },
    {
        slug: 'contact',
        activeNav: 'contact',
        title: 'Contact & Reservations - Aurelia Hotel & Resort',
        description: 'Get in touch with the Aurelia Hotel & Resort reservations team — email, phone, location, and directions, or send us a message directly.',
        render: contact_1.renderContact,
    },
    {
        slug: 'terms',
        activeNav: 'terms',
        title: 'Terms of Service - Aurelia Hotel & Resort',
        description: 'The terms governing reservations, payment, cancellations, and guest conduct at Aurelia Hotel & Resort.',
        render: terms_1.renderTerms,
    },
    {
        slug: 'privacy',
        activeNav: 'privacy',
        title: 'Privacy Policy - Aurelia Hotel & Resort',
        description: 'How Aurelia Hotel & Resort collects, uses, and protects guest information, including your rights under GDPR and CCPA.',
        render: privacy_1.renderPrivacy,
    },
];
function copyDir(from, to) {
    fs.mkdirSync(to, { recursive: true });
    for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
        const src = path.join(from, entry.name);
        const dest = path.join(to, entry.name);
        if (entry.isDirectory()) {
            copyDir(src, dest);
        }
        else {
            fs.copyFileSync(src, dest);
        }
    }
}
function buildSitemap(outNames) {
    const urls = outNames.map(name => {
        const loc = `${SITE_URL}/${name}`;
        return `  <url>\n    <loc>${loc}</loc>\n  </url>`;
    }).join('\n');
    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}
function build() {
    const start = Date.now();
    const featuredRooms = rooms_1.ROOMS.filter(r => r.featured);
    const outNames = [];
    for (const page of PAGES) {
        const outName = page.slug + '.html';
        const ctx = {
            siteUrl: SITE_URL,
            path: outName,
            slug: page.slug, // dot-free page identifier, safe to use inside HTML `id` attributes
            activeNav: page.activeNav,
            title: page.title,
            description: page.description,
            rooms: rooms_1.ROOMS,
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
        let rebuildTimer = null;
        const DEBOUNCE_MS = 50;
        function scheduleRebuild(label) {
            console.log(`[${label}]`);
            if (rebuildTimer)
                clearTimeout(rebuildTimer);
            rebuildTimer = setTimeout(() => {
                try {
                    // Recompile TS -> dist/ first (tsc alone can't re-run the
                    // build step itself), then re-require the freshly-compiled
                    // build module so we pick up the new build() export rather
                    // than the stale one already in this process' closure.
                    (0, child_process_1.execSync)('npx tsc', { cwd: ROOT, stdio: 'inherit' });
                    const buildModulePath = path.join(__dirname, 'build.js');
                    delete require.cache[require.resolve(buildModulePath)];
                    const fresh = require(buildModulePath);
                    fresh.build();
                }
                catch (err) {
                    console.error('Build failed:', err.message);
                }
            }, DEBOUNCE_MS);
        }
        fs.watch(SRC, { recursive: true }, (event, filename) => {
            const label = filename ? path.join('src', filename) : `${event} (unknown file)`;
            scheduleRebuild(label);
        });
    }
}
