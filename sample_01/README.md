# Aurelia Hotel & Resort — site build

Static site generated from Nunjucks templates. Source lives in `src/`; the compiled
output (plain HTML + `images/`) lives at the repo root and is what actually gets served.

## Build

```sh
npm install
npm run build   # one-off build
npm run dev     # rebuild on change
```

`build.js` renders every `src/pages/*.njk` template (using the shared partials in
`src/_partials/` and the room dataset in `src/_data/rooms.json`) into a plain
`.html` file at the repo root, and copies `src/images/` into `images/` alongside
the legacy photo/logo assets.

## Structure

- `src/_partials/base.njk` — shared page shell (head, toast, header, footer, reservation modal).
- `src/_partials/head.njk`, `header.njk`, `footer.njk`, `reservation-modal.njk`, `toast.njk`, `root-data.njk` — the individual shared pieces `base.njk` assembles.
- `src/pages/*.njk` — one template per page, extending `base.njk` and filling in its own `<main>` content plus any page-specific Alpine state (`extraState`) or modal copy (`modalBody`).
- `src/_data/rooms.json` — single source of truth for room data. Each room carries a `featured` flag; the homepage teaser renders only `featured` rooms, `rooms.html` renders all of them.
- `src/images/logo.svg` — logo master (wave monogram + wordmark). Favicon PNGs (`favicon-16/32/48.png`, `apple-touch-icon.png`) were rasterized from it once via `sharp` (not a build-time dependency — regenerate manually if the logo master changes).

## Known `html-validate` exceptions

Running `npx html-validate "*.html"` reports 3 findings in `rooms.html` that are
expected, not bugs: an `<h3>` bound via `x-text="room.name"` / `x-text="detailRoom.name"`
and a close `<button>` whose only content is an `x-text`-bound `<span>` are empty in
the static markup because Alpine.js populates them at runtime, after mount. This is
the same pattern the site used before this rebuild (e.g. `room.name`, `faq.q`) — the
validator can't see the client-side binding, so these three lines are safe to ignore.
