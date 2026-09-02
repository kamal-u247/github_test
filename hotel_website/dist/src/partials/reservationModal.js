"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderReservationModal = renderReservationModal;
const html_1 = require("../lib/html");
// Was src/_partials/reservation-modal.njk
function renderReservationModal(ctx) {
    const modalBody = (0, html_1.withDefault)(ctx.modalBody, 'Enter your name and our reservations team will follow up to confirm your dates and room preference.');
    const slug = (0, html_1.escapeHtml)(ctx.slug);
    return `
    <!-- Reservation Modal Component -->
    <div x-cloak
         x-show="modalOpen"
         class="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4"
         role="dialog"
         aria-modal="true"
         aria-labelledby="reservation-modal-title"
         @keydown.escape.window="modalOpen = false">
        <!-- Backdrop -->
        <div x-show="modalOpen"
             x-transition:enter="ease-out duration-300"
             x-transition:enter-start="opacity-0"
             x-transition:enter-end="opacity-100"
             x-transition:leave="ease-in duration-200"
             x-transition:leave-start="opacity-100"
             x-transition:leave-end="opacity-0"
             @click="modalOpen = false"
             class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"></div>

        <!-- Modal Dialog -->
        <div x-show="modalOpen"
             x-transition:enter="ease-out duration-300"
             x-transition:enter-start="opacity-0 scale-95"
             x-transition:enter-end="opacity-100 scale-100"
             x-transition:leave="ease-in duration-200"
             x-transition:leave-start="opacity-100 scale-100"
             x-transition:leave-end="opacity-0 scale-95"
             class="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full p-6 border border-slate-200 dark:border-slate-700 z-10">
            <div class="flex justify-between items-center mb-4">
                <h3 id="reservation-modal-title" class="text-xl font-bold text-slate-900 dark:text-white">Reserve Your Stay</h3>
                <button type="button" @click="modalOpen = false" class="text-slate-400 hover:text-slate-600 dark:hover:text-white transition" aria-label="Close dialog">
                    ✕
                </button>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-400 mb-6">
                ${(0, html_1.escapeHtml)(modalBody)}
            </p>
            <div class="space-y-3">
                <label for="reserve-name-${slug}" class="sr-only">Your full name</label>
                <input type="text" id="reserve-name-${slug}" x-model="reserveName" placeholder="Your full name" class="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm">
                <button type="button" @click="modalOpen = false; showToast((reserveName ? reserveName + ', your' : 'Your') + ' request was received! Our team will be in touch. 🏨')" class="w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-medium transition">
                    Confirm &amp; Request Booking
                </button>
                <button type="button" @click="modalOpen = false" class="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition">
                    Close
                </button>
            </div>
        </div>
    </div>`;
}
