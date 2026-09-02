"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderLayout = renderLayout;
const html_1 = require("./html");
const rootData_1 = require("../partials/rootData");
const toast_1 = require("../partials/toast");
const header_1 = require("../partials/header");
const footer_1 = require("../partials/footer");
const reservationModal_1 = require("../partials/reservationModal");
// Was src/_partials/base.njk (page shell) + src/_partials/head.njk (<head> contents).
function renderLayout(ctx, slots) {
    const title = (0, html_1.escapeHtml)(ctx.title);
    const description = (0, html_1.escapeHtml)(ctx.description);
    const canonical = `${(0, html_1.escapeHtml)(ctx.siteUrl)}/${(0, html_1.escapeHtml)(ctx.path)}`;
    const ogImage = `${(0, html_1.escapeHtml)(ctx.siteUrl)}/images/apple-touch-icon.png`;
    // x-data is a double-quoted HTML attribute, and rootDataScript()'s output
    // (including any page's ctx.extraState) is spliced in with no escaping —
    // so every extraState value must use single-quoted JS strings only, never
    // double-quoted, or it will prematurely close this attribute.
    return `<!DOCTYPE html>
<html lang="en" x-data="${(0, rootData_1.rootDataScript)(ctx)}" :class="{ 'dark': darkMode }">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${description}">
    <link rel="canonical" href="${canonical}">

    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Aurelia Hotel & Resort">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${ogImage}">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="${ogImage}">

    <!-- Favicons -->
    <link rel="icon" type="image/svg+xml" href="images/logo.svg">
    <link rel="icon" type="image/png" sizes="48x48" href="images/favicon-48.png">
    <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16.png">
    <link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png">

    ${slots.structuredData ?? ''}

    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        brand: {
                            50: '#fffbeb',
                            100: '#fef3c7',
                            500: '#d4a017',
                            600: '#b8860b',
                            700: '#946908',
                        }
                    }
                }
            }
        }
    </script>
    <!-- Alpine.js CDN (pinned) -->
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js"></script>
    <style>
        [x-cloak] { display: none !important; }
    </style>
</head>
<body class="bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-300 min-h-screen flex flex-col font-sans">

${(0, toast_1.renderToast)()}
${(0, header_1.renderHeader)(ctx)}

${slots.main}

${slots.extraModals ?? ''}
${(0, reservationModal_1.renderReservationModal)(ctx)}
${(0, footer_1.renderFooter)(ctx)}

</body>
</html>
`;
}
