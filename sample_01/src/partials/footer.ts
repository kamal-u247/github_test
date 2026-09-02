import type { PageContext } from '../lib/layout';
import { escapeHtml } from '../lib/html';

// Was src/_partials/footer.njk

export function renderFooter(ctx: PageContext): string {
    const privacyClass = ctx.activeNav === 'privacy'
        ? 'font-semibold text-amber-600 dark:text-amber-400'
        : 'hover:text-amber-500 dark:hover:text-amber-400';
    const termsClass = ctx.activeNav === 'terms'
        ? 'font-semibold text-amber-600 dark:text-amber-400'
        : 'hover:text-amber-500 dark:hover:text-amber-400';

    return `
    <!-- Detailed & User-Friendly Footer -->
    <footer class="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">

                <!-- Column 1: Brand & Overview -->
                <div class="lg:col-span-2 space-y-4">
                    <div class="flex items-center space-x-3">
                        <img src="images/logo.svg" alt="Aurelia Hotel & Resort" width="36" height="36" class="w-9 h-9">
                        <span class="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">
                            Aurelia <span class="text-amber-500">Hotel &amp; Resort</span>
                        </span>
                    </div>
                    <p class="text-sm leading-relaxed text-slate-600 dark:text-slate-400 max-w-sm">
                        A refined oceanfront retreat offering elegant rooms, world-class amenities, and warm, attentive hospitality for every kind of traveler.
                    </p>
                    <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 text-xs font-semibold">
                        <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse" aria-hidden="true"></span>
                        <span>Now Booking — Limited Rooms Available</span>
                    </div>
                    <!-- Social Links -->
                    <div class="flex items-center space-x-3 pt-2">
                        <!-- TODO: real social URL -->
                        <a href="#" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition" aria-label="Aurelia Hotel & Resort on Instagram">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                        </a>
                        <!-- TODO: real social URL -->
                        <a href="#" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition" aria-label="Aurelia Hotel & Resort on Facebook">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                        </a>
                        <!-- TODO: real social URL -->
                        <a href="#" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition" aria-label="Aurelia Hotel & Resort on Twitter / X">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                        </a>
                    </div>
                </div>

                <!-- Column 2: Navigation -->
                <div>
                    <h3 class="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">Quick Navigation</h3>
                    <ul class="space-y-2.5 text-sm">
                        <li><a href="index.html" class="hover:text-amber-500 dark:hover:text-amber-400 transition">Home</a></li>
                        <li><a href="rooms.html" class="hover:text-amber-500 dark:hover:text-amber-400 transition">Rooms</a></li>
                        <li><a href="services.html" class="hover:text-amber-500 dark:hover:text-amber-400 transition">Amenities &amp; Rates</a></li>
                        <li><a href="about.html" class="hover:text-amber-500 dark:hover:text-amber-400 transition">About Us</a></li>
                        <li><a href="contact.html" class="hover:text-amber-500 dark:hover:text-amber-400 transition">Contact Us</a></li>
                    </ul>
                </div>

                <!-- Column 3: Guest Info -->
                <div>
                    <h3 class="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">Guest Info</h3>
                    <ul class="space-y-2.5 text-sm">
                        <li><a href="contact.html" class="hover:text-amber-500 dark:hover:text-amber-400 transition">Check-In / Check-Out</a></li>
                        <li><a href="services.html" class="hover:text-amber-500 dark:hover:text-amber-400 transition">Hotel Amenities</a></li>
                        <li><a href="rooms.html" class="hover:text-amber-500 dark:hover:text-amber-400 transition">Room Booking FAQs</a></li>
                        <li><a href="contact.html" class="hover:text-amber-500 dark:hover:text-amber-400 transition">Group &amp; Event Bookings</a></li>
                    </ul>
                </div>

                <!-- Column 4: Newsletter / Stay Connected -->
                <div>
                    <h3 class="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">Stay Connected</h3>
                    <p class="text-xs leading-relaxed text-slate-600 dark:text-slate-400 mb-3">
                        Subscribe for seasonal offers, exclusive packages, and resort updates.
                    </p>
                    <form action="https://formspree.io/f/PLACEHOLDER_FORM_ID" method="POST" class="space-y-2">
                        <!-- TODO: replace PLACEHOLDER_FORM_ID with the real Formspree form ID once created -->
                        <label for="newsletter-email-${escapeHtml(ctx.slug)}" class="sr-only">Email address</label>
                        <div class="relative">
                            <input type="email"
                                   id="newsletter-email-${escapeHtml(ctx.slug)}"
                                   name="email"
                                   placeholder="Enter your email"
                                   required
                                   class="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition">
                        </div>
                        <button type="submit"
                                class="w-full py-2 px-3 text-xs font-semibold rounded-xl text-white bg-amber-600 hover:bg-amber-700 transition shadow-sm">
                            Subscribe
                        </button>
                    </form>
                </div>

            </div>

            <!-- Bottom Divider & Links -->
            <div class="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                <div class="flex items-center space-x-2">
                    <p>© 2026 Aurelia Hotel &amp; Resort. All rights reserved.</p>
                </div>

                <div class="flex items-center space-x-6">
                    <a href="privacy.html" class="transition ${privacyClass}">Privacy Policy</a>
                    <a href="terms.html" class="transition ${termsClass}">Terms of Service</a>

                    <!-- Back to Top Button -->
                    <button type="button" @click="window.scrollTo({top: 0, behavior: 'smooth'})"
                            class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-600 text-slate-500 transition"
                            aria-label="Back to top">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </footer>`;
}
