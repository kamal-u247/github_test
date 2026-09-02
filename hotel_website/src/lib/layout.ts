import type { Room } from '../data/rooms';
import { escapeHtml } from './html';
import { rootDataScript } from '../partials/rootData';
import { renderToast } from '../partials/toast';
import { renderHeader } from '../partials/header';
import { renderFooter } from '../partials/footer';
import { renderReservationModal } from '../partials/reservationModal';

// Shared per-page render context — was ad-hoc Nunjucks context vars set via
// {% set %} in each page template plus the vars build.js passed in directly.
export interface PageContext {
    siteUrl: string;
    path: string; // e.g. "about.html"
    slug: string; // e.g. "about" — used in id attrs
    activeNav: 'home' | 'rooms' | 'services' | 'about' | 'contact' | 'terms' | 'privacy';
    title: string;
    description: string;
    modalBody?: string; // was {% set modalBody = "..." %}
    extraState?: string; // raw Alpine object-literal fragment, was {% set extraState %}...{% endset %}
    extraModals?: string; // raw HTML fragment, was {% block extraModals %}...{% endblock %} (rooms page only today)
    rooms?: Room[];
    featuredRooms?: Room[];
    structuredData?: object; // index page only
}

export interface LayoutSlots {
    main: string;
    structuredData?: string; // was {% block structuredData %}...{% endblock %} (index page only)
    extraModals?: string; // was {% block extraModals %}...{% endblock %} (rooms page only)
}

// Was src/_partials/base.njk (page shell) + src/_partials/head.njk (<head> contents).
export function renderLayout(ctx: PageContext, slots: LayoutSlots): string {
    const title = escapeHtml(ctx.title);
    const description = escapeHtml(ctx.description);
    const canonical = `${escapeHtml(ctx.siteUrl)}/${escapeHtml(ctx.path)}`;
    const ogImage = `${escapeHtml(ctx.siteUrl)}/images/apple-touch-icon.png`;

    // x-data is a double-quoted HTML attribute, and rootDataScript()'s output
    // (including any page's ctx.extraState) is spliced in with no escaping —
    // so every extraState value must use single-quoted JS strings only, never
    // double-quoted, or it will prematurely close this attribute.
    return `<!DOCTYPE html>
<html lang="en" x-data="${rootDataScript(ctx)}" :class="{ 'dark': darkMode }">
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

${renderToast()}
${renderHeader(ctx)}

${slots.main}

${slots.extraModals ?? ''}
${renderReservationModal(ctx)}
${renderFooter(ctx)}

</body>
</html>
`;
}
