import { renderLayout, type PageContext } from '../lib/layout';

// Was src/pages/contact.njk

export function renderContact(ctx: PageContext): string {
    const main = `
    <!-- Main Content -->
    <main class="flex-grow">
        <!-- Hero Section -->
        <section class="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-b from-amber-50/50 to-transparent dark:from-slate-800/40 dark:to-transparent border-b border-slate-200/60 dark:border-slate-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div class="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs font-semibold tracking-wide uppercase mb-4">
                    <span>💬 We're Here to Help</span>
                </div>
                <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-3xl mx-auto leading-tight">
                    Get in Touch with <span class="text-amber-500">Our Reservations Team</span>
                </h1>
                <p class="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    Questions about booking, special requests, or upcoming events? Send us a message and our team will respond within 24 hours.
                </p>
            </div>
        </section>

        <!-- Main Contact Form & Details Section -->
        <section class="py-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid lg:grid-cols-12 gap-12">

                    <!-- Column 1: Contact Details & Hotel info -->
                    <div class="lg:col-span-5 space-y-8">
                        <div>
                            <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">Let's plan your stay</h2>
                            <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                Reach out directly via email or phone, or visit us at the front desk — we're available around the clock.
                            </p>
                        </div>

                        <!-- Info Cards -->
                        <div class="space-y-4">
                            <!-- Card 1: Email -->
                            <div class="flex items-start space-x-4 p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                                <div class="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center flex-shrink-0 text-xl font-bold">
                                    ✉️
                                </div>
                                <div>
                                    <h3 class="text-sm font-bold text-slate-900 dark:text-white">Email Reservations</h3>
                                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Bookings &amp; inquiries</p>
                                    <a href="mailto:reservations@aurelia-hotel.com" class="text-sm font-semibold text-amber-600 dark:text-amber-400 hover:underline mt-1 inline-block">reservations@aurelia-hotel.com</a>
                                </div>
                            </div>

                            <!-- Card 2: Phone -->
                            <div class="flex items-start space-x-4 p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                                <div class="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center flex-shrink-0 text-xl font-bold">
                                    📞
                                </div>
                                <div>
                                    <h3 class="text-sm font-bold text-slate-900 dark:text-white">Front Desk</h3>
                                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Available 24 hours a day</p>
                                    <a href="tel:+18005550199" class="text-sm font-semibold text-sky-600 dark:text-sky-400 hover:underline mt-1 inline-block">+1&nbsp;(800)&nbsp;555&#8209;0199</a>
                                </div>
                            </div>

                            <!-- Card 3: Location -->
                            <div class="flex items-start space-x-4 p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                                <div class="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0 text-xl font-bold">
                                    📍
                                </div>
                                <div>
                                    <h3 class="text-sm font-bold text-slate-900 dark:text-white">Our Location</h3>
                                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Oceanfront, Santa Marina Bay</p>
                                    <p class="text-sm text-slate-700 dark:text-slate-300 mt-1">100 Harborview Drive<br>Santa Marina, CA 94107</p>
                                </div>
                            </div>

                            <!-- Card 4: Check-in/out -->
                            <div class="flex items-start space-x-4 p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                                <div class="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 text-xl font-bold">
                                    🕒
                                </div>
                                <div>
                                    <h3 class="text-sm font-bold text-slate-900 dark:text-white">Check-In / Check-Out</h3>
                                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Standard hotel policy</p>
                                    <p class="text-sm text-slate-700 dark:text-slate-300 mt-1">Check-in from 3:00 PM · Check-out by 11:00 AM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Column 2: Interactive Contact Form -->
                    <div class="lg:col-span-7">
                        <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8">
                            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-6">Send a Message</h3>

                            <!-- TODO: replace PLACEHOLDER_FORM_ID with the real Formspree form ID once created -->
                            <!-- TODO: submitContactForm is undefined — pre-existing bug, out of scope for this port -->
                            <form action="https://formspree.io/f/PLACEHOLDER_FORM_ID" method="POST" @submit.prevent="submitContactForm()" class="space-y-6">
                                <div class="grid md:grid-cols-2 gap-6">
                                    <!-- Full Name -->
                                    <div>
                                        <label for="contact-name" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Full Name *</label>
                                        <input type="text"
                                               id="contact-name"
                                               name="name"
                                               x-model="form.name"
                                               required
                                               placeholder="John Doe"
                                               class="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm">
                                    </div>

                                    <!-- Email Address -->
                                    <div>
                                        <label for="contact-email" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address *</label>
                                        <input type="email"
                                               id="contact-email"
                                               name="email"
                                               x-model="form.email"
                                               required
                                               placeholder="john@example.com"
                                               class="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm">
                                    </div>
                                </div>

                                <!-- Subject Dropdown -->
                                <div>
                                    <label for="contact-subject" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                                    <select id="contact-subject" name="subject" x-model="form.subject" class="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm">
                                        <option value="General Inquiry">General Inquiry</option>
                                        <option value="Reservation Request">Reservation Request</option>
                                        <option value="Group & Event Booking">Group &amp; Event Booking</option>
                                        <option value="Feedback">Feedback / Suggestions</option>
                                    </select>
                                </div>

                                <!-- Message Text Area -->
                                <div>
                                    <div class="flex justify-between items-center mb-2">
                                        <label for="contact-message" class="block text-sm font-medium text-slate-700 dark:text-slate-300">Message *</label>
                                        <span class="text-xs text-slate-400" x-text="form.message.length + ' / 500'"></span>
                                    </div>
                                    <textarea id="contact-message"
                                              name="message"
                                              x-model="form.message"
                                              maxlength="500"
                                              rows="5"
                                              required
                                              placeholder="How can we help you?"
                                              class="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"></textarea>
                                </div>

                                <!-- Submit Button -->
                                <button type="submit"
                                        class="w-full py-3.5 px-6 rounded-xl text-white bg-amber-600 hover:bg-amber-700 font-semibold transition shadow-md shadow-amber-600/30 flex items-center justify-center space-x-2">
                                    <span>Send Message</span>
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Directions / Getting Here Grid -->
        <section class="py-16 bg-white dark:bg-slate-800/40 border-y border-slate-200 dark:border-slate-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-slate-900 dark:text-white">Getting Here</h2>
                    <p class="mt-2 text-slate-600 dark:text-slate-400">Arriving by air, car, or train? Here's how to reach Aurelia.</p>
                </div>

                <div class="grid md:grid-cols-3 gap-8">
                    <!-- Option 1 -->
                    <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                        <div class="text-2xl mb-3">✈️</div>
                        <h3 class="text-lg font-bold text-slate-900 dark:text-white">By Air</h3>
                        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-3">Santa Marina Regional Airport (SMB)</p>
                        <p class="text-sm text-slate-600 dark:text-slate-300">25 minutes by car · Complimentary shuttle available on request</p>
                    </div>

                    <!-- Option 2 -->
                    <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                        <div class="text-2xl mb-3">🚗</div>
                        <h3 class="text-lg font-bold text-slate-900 dark:text-white">By Car</h3>
                        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-3">Coastal Highway 1, Exit 12</p>
                        <p class="text-sm text-slate-600 dark:text-slate-300">Valet and self-parking available onsite, 24/7</p>
                    </div>

                    <!-- Option 3 -->
                    <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                        <div class="text-2xl mb-3">🚆</div>
                        <h3 class="text-lg font-bold text-slate-900 dark:text-white">By Train</h3>
                        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-3">Santa Marina Central Station</p>
                        <p class="text-sm text-slate-600 dark:text-slate-300">10 minute taxi ride to the hotel entrance</p>
                    </div>
                </div>
            </div>
        </section>
    </main>`;

    // Pre-existing bug, ported as-is: submitContactForm() is called by the
    // form's @submit.prevent but is not defined anywhere (not in rootData.ts,
    // not here) — this throws a ReferenceError in the browser today. Not
    // fixed here; see the TODO comment at the form tag above.
    const extraState = `
    form: {
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: '',
        submitted: false
    },
`;

    return renderLayout(
        { ...ctx, modalBody: 'Need a custom package or group rate? Reach out directly via the form or email us.', extraState },
        { main },
    );
}
