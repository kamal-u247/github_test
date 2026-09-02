# Aurelia Hotel & Resort — site build

Static site generated from TypeScript template functions. Source lives in `src/`; the
compiled output (plain HTML + `images/`) lives at the repo root and is what actually
gets served.

## Build

```sh
npm install
npm run build   # one-off build
npm run dev     # rebuild on change
```

`npm run build` compiles `src/**/*.ts` and `build.ts` with `tsc`, then runs the
compiled `dist/build.js`. It renders each page function in `src/pages/` (composed
from the shared partials in `src/partials/` and the room dataset in
`src/data/rooms.ts`) into a plain `.html` file at the repo root, and copies
`src/images/` into `images/` alongside the legacy photo/logo assets.

## Structure

- `src/lib/layout.ts` — shared page shell: `renderLayout(ctx, slots)` (head, toast,
  header, main content, modals, footer) plus the `PageContext` type every page and
  partial renders against.
- `src/lib/html.ts` — `escapeHtml`, `jsonAttr`, `withDefault` helpers used throughout.
- `src/partials/{header,footer,toast,reservationModal,rootData}.ts` — the individual
  shared pieces `renderLayout` assembles.
- `src/pages/*.ts` — one template function per page, calling `renderLayout` and
  supplying its own `<main>` content plus any page-specific Alpine state
  (`extraState`) or modal copy (`modalBody`).
- `src/data/rooms.ts` — single source of truth for room data (`Room` interface +
  `ROOMS` array). Each room carries a `featured` flag; the homepage teaser renders
  only `featured` rooms, `rooms.html` renders all of them.
- `src/images/logo.svg` — logo master (wave monogram + wordmark). Favicon PNGs
  (`favicon-16/32/48.png`, `apple-touch-icon.png`) were rasterized from it once via
  `sharp` (not a build-time dependency — regenerate manually if the logo master
  changes).
- `build.ts` — walks `src/pages/`, renders each page's HTML, copies `src/images/`,
  and writes `sitemap.xml`. Compiles to `dist/build.js` (gitignored); `--watch`
  recompiles and re-renders on any change under `src/`.

## Known `html-validate` exceptions

Running `npx html-validate "*.html"` reports 3 findings in `rooms.html` that are
expected, not bugs: an `<h3>` bound via `x-text="room.name"` / `x-text="detailRoom.name"`
and a close `<button>` whose only content is an `x-text`-bound `<span>` are empty in
the static markup because Alpine.js populates them at runtime, after mount. This is
the same pattern the site used before this rebuild (e.g. `room.name`, `faq.q`) — the
validator can't see the client-side binding, so these three lines are safe to ignore.
