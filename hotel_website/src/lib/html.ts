/**
 * Small HTML/JSON helpers used across pages and partials — the TS equivalent
 * of the filters the old hand-rolled template engine (render.js) implemented
 * (`escape`/autoescape, `jsonattr`, `default`).
 */

export function escapeHtml(value: unknown): string {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// Same escaping as `escapeHtml`, applied to a JSON-serialized value — safe to
// splice into either an HTML attribute (the old `jsonattr` filter's use case)
// or `<script>` tag content (JSON-LD), since plain `JSON.stringify` alone
// does not escape `<`/`>` and could otherwise let a `</script>` substring in
// string data prematurely close the tag.
export function jsonAttr(value: unknown): string {
    return JSON.stringify(value)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

// Mirrors Nunjucks' `default` filter semantics: falsy-empty-string/null/undefined
// fall back to `fallback`, but other falsy values (0, false) are kept as-is.
export function withDefault<T>(value: T | null | undefined | '', fallback: T): T {
    return value === undefined || value === null || value === '' ? fallback : value;
}
