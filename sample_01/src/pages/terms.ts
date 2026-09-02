import { renderLayout, type PageContext } from '../lib/layout';

// Was src/pages/terms.njk

export function renderTerms(ctx: PageContext): string {
    const main = `
    <!-- Main Content -->
    <main class="flex-grow">
        <!-- Hero Section -->
        <section class="py-12 bg-white dark:bg-slate-800/40 border-b border-slate-200 dark:border-slate-800">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <span class="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">Legal Agreement</span>
                <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">Terms of Service</h1>
                <p class="text-sm text-slate-500 dark:text-slate-400 mt-2">Last updated: September 1, 2026</p>
            </div>
        </section>

        <!-- Document Body -->
        <section class="py-16">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700/80 shadow-sm space-y-8 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">

                    <div>
                        <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-3">1. Acceptance of Terms</h2>
                        <p>
                            By booking a room, using our website, or visiting Aurelia Hotel &amp; Resort, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                        </p>
                    </div>

                    <div>
                        <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-3">2. Reservations &amp; Payment</h2>
                        <p>
                            A valid credit card is required to guarantee all reservations. Rates are quoted per room, per night, and are subject to applicable taxes and resort fees unless stated otherwise.
                        </p>
                    </div>

                    <div>
                        <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-3">3. Cancellation Policy</h2>
                        <p>
                            Reservations may be cancelled free of charge up to 48 hours before the scheduled check-in date. Cancellations made within 48 hours of arrival, or no-shows, may be charged the equivalent of one night's stay.
                        </p>
                    </div>

                    <div>
                        <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-3">4. Guest Conduct</h2>
                        <p>
                            Guests agree to respect hotel property, fellow guests, and staff. The hotel reserves the right to refuse service or remove guests engaging in unlawful, unsafe, or disruptive behavior without refund.
                        </p>
                    </div>

                    <div>
                        <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-3">5. Limitation of Liability</h2>
                        <p>
                            Aurelia Hotel &amp; Resort is not liable for loss, theft, or damage to personal belongings except where required by law. Guests are encouraged to use in-room safes for valuables.
                        </p>
                    </div>

                    <div>
                        <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-3">6. Governing Law</h2>
                        <p>
                            These terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    </main>`;

    return renderLayout(ctx, { main });
}
