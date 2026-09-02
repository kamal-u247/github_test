"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootDataScript = rootDataScript;
/**
 * Shared Alpine root state, spliced into the <html x-data="..."> attribute on
 * every page. Page-specific state (e.g. contact.html's `form` object,
 * services.html's `seasonRate`) is merged in via `ctx.extraState` (a
 * trailing comma-terminated Alpine object-literal fragment set by the page).
 *
 * Was src/_partials/root-data.njk.
 */
function rootDataScript(ctx) {
    return `{
    darkMode: false,
    mobileMenuOpen: false,
    modalOpen: false,
    reserveName: '',
    toast: { show: false, message: '' },
    showToast(msg) {
        this.toast.message = msg;
        this.toast.show = true;
        setTimeout(() => { this.toast.show = false; }, 3000);
    },
    ${ctx.extraState ? ctx.extraState : ''}
}`;
}
