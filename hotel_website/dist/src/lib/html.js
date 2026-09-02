"use strict";
/**
 * Small HTML/JSON helpers used across pages and partials — the TS equivalent
 * of the filters the old hand-rolled template engine (render.js) implemented
 * (`escape`/autoescape, `jsonattr`, `default`).
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.escapeHtml = escapeHtml;
exports.jsonAttr = jsonAttr;
exports.withDefault = withDefault;
function escapeHtml(value) {
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
function jsonAttr(value) {
    return JSON.stringify(value)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}
// Mirrors Nunjucks' `default` filter semantics: falsy-empty-string/null/undefined
// fall back to `fallback`, but other falsy values (0, false) are kept as-is.
function withDefault(value, fallback) {
    return value === undefined || value === null || value === '' ? fallback : value;
}
