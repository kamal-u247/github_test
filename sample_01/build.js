#!/usr/bin/env node
/**
 * Aurelia Hotel & Resort — static site build.
 *
 * Compiles Nunjucks templates in src/pages/*.njk (using shared partials in
 * src/_partials/ and shared data in src/_data/) into plain static HTML files
 * at the repo root (sample_01/), and copies images/ alongside them.
 *
 * Usage:
 *   node build.js          one-off build
 *   node build.js --watch  rebuild on any change under src/
 */
const fs = require('fs');
const path = require('path');
const nunjucks = require('nunjucks');

const ROOT = __dirname;
const SRC = path.join(ROOT, 'src');
const PAGES_DIR = path.join(SRC, 'pages');
const PARTIALS_DIR = path.join(SRC, '_partials');
const DATA_DIR = path.join(SRC, '_data');
const SRC_IMAGES_DIR = path.join(SRC, 'images');
const OUT_IMAGES_DIR = path.join(ROOT, 'images');

const SITE_URL = 'https://www.aurelia-hotel.com';

const env = nunjucks.configure(PARTIALS_DIR, {
    autoescape: true, // HTML-escape all {{ }} interpolation by default; templates opt into
                       // raw output with `| safe` only where they intentionally inject
                       // markup/script (e.g. extraState, jsonattr-escaped JSON).
    trimBlocks: true,
    lstripBlocks: true,
});
// Pages live in a different directory than partials; add it as a second search path.
env.loaders[0].searchPaths.push(PAGES_DIR);

// Safely embed a JSON value inside a double-quoted HTML attribute (e.g. x-data="...").
// `dump` alone emits raw `"` and `&` which would prematurely terminate the attribute
// value or produce invalid HTML — escape those (and `<`/`>` for good measure) after
// stringifying, instead of using `| safe`.
env.addFilter('jsonattr', function (value) {
    return JSON.stringify(value)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
});

function loadData() {
    const data = {};
    for (const file of fs.readdirSync(DATA_DIR)) {
        if (!file.endsWith('.json')) continue;
        const key = path.basename(file, '.json');
        data[key] = JSON.parse(fs.readFileSync(path.join(DATA_DIR, file), 'utf8'));
    }
    return data;
}

function copyDir(from, to) {
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

function buildSitemap(outNames) {
    const urls = outNames.map(name => {
        const loc = `${SITE_URL}/${name}`;
        return `  <url>\n    <loc>${loc}</loc>\n  </url>`;
    }).join('\n');
    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

function build() {
    const start = Date.now();
    const data = loadData();
    const pageFiles = fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.njk'));

    const outNames = [];
    for (const file of pageFiles) {
        const slug = path.basename(file, '.njk');
        const outName = slug + '.html';
        const context = {
            siteUrl: SITE_URL,
            path: outName,
            slug, // dot-free page identifier, safe to use inside HTML `id` attributes
            rooms: data.rooms,
            featuredRooms: data.rooms.filter(r => r.featured),
        };
        const html = env.render(file, context);
        fs.writeFileSync(path.join(ROOT, outName), html);
        outNames.push(outName);
    }

    // Copy compiled images (logo SVG + favicon rasters) into the site's images/ folder,
    // alongside the existing (untouched) legacy photo assets.
    copyDir(SRC_IMAGES_DIR, OUT_IMAGES_DIR);

    // Keep sitemap.xml in sync with whatever pages actually got built, rather than
    // hand-maintaining a page list that can drift from src/pages/.
    fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), buildSitemap(outNames));

    console.log(`Built ${outNames.length} pages + images/ + sitemap.xml in ${Date.now() - start}ms`);
}

build();

if (process.argv.includes('--watch')) {
    const chokidar = require('chokidar');
    console.log('Watching src/ for changes...');
    chokidar.watch(SRC, { ignoreInitial: true }).on('all', (event, changedPath) => {
        console.log(`[${event}] ${path.relative(ROOT, changedPath)}`);
        try {
            build();
        } catch (err) {
            console.error('Build failed:', err.message);
        }
    });
}
