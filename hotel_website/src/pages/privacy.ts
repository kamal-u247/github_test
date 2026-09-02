import { renderLayout, type PageContext } from '../lib/layout';

// Was src/pages/privacy.njk

export function renderPrivacy(ctx: PageContext): string {
    const main = `
    <!-- Main Content -->
    <main class="flex-grow">
        <!-- Hero Section -->
        <section class="py-12 bg-white dark:bg-slate-800/40 border-b border-slate-200 dark:border-slate-800">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <span class="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">Legal Document</span>
                <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">Privacy Policy</h1>
                <p class="text-sm text-slate-500 dark:text-slate-400 mt-2">Last updated: September 1, 2026</p>
            </div>
        </section>

        <!-- Document Body -->
        <section class="py-16">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700/80 shadow-sm space-y-8 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">

                    <div>
                        <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-3">1. Information We Collect</h2>
                        <p class="mb-3">
                            When you make a reservation, contact our front desk, or use our website, we may collect information you voluntarily provide (e.g. name, email, phone number, payment details, and stay preferences).
                        </p>
                        <ul class="list-disc pl-5 space-y-1 text-xs text-slate-500 dark:text-slate-400">
                            <li><strong>Reservation &amp; Contact Data:</strong> Name, email address, phone number, billing information, and message contents.</li>
                            <li><strong>Stay Data:</strong> Room preferences, special requests, loyalty program details.</li>
                            <li><strong>Usage Data:</strong> Anonymized interaction metrics and theme preferences (stored in browser local storage).</li>
                        </ul>
                    </div>

                    <div>
                        <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-3">2. How We Use Information</h2>
                        <p>
                            We use the collected information to process reservations, personalize your stay, respond to inquiries, manage loyalty benefits, and send booking confirmations or promotional offers if subscribed.
                        </p>
                    </div>

                    <div>
                        <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-3">3. Cookies &amp; Storage</h2>
                        <p>
                            Our website uses standard HTML5 LocalStorage to remember preferences like Dark Mode (\`darkMode\`). We do not use intrusive tracking cookies or sell guest data to third parties.
                        </p>
                    </div>

                    <div>
                        <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-3">4. Your Privacy Rights (GDPR &amp; CCPA)</h2>
                        <p class="mb-3">
                            You have the right to request access to your personal data, request correction or deletion, or opt out of marketing communications at any time.
                        </p>
                        <a href="contact.html" class="inline-flex items-center space-x-1 font-semibold text-amber-600 dark:text-amber-400 hover:underline">
                            <span>Contact our Data Protection Officer</span>
                            <span>→</span>
                        </a>
                    </div>

                    <div>
                        <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-3">5. Contact Us</h2>
                        <p>
                            If you have questions regarding this Privacy Policy, please reach out to <a href="mailto:privacy@aurelia-hotel.com" class="text-amber-600 dark:text-amber-400 font-semibold hover:underline">privacy@aurelia-hotel.com</a> or visit our <a href="contact.html" class="text-amber-600 dark:text-amber-400 font-semibold hover:underline">Contact Page</a>.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    </main>`;

    return renderLayout(ctx, { main });
}
