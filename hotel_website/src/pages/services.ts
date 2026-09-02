import { renderLayout, type PageContext } from '../lib/layout';

// Was src/pages/services.njk

export function renderServices(ctx: PageContext): string {
    const main = `
    <!-- Main Content -->
    <main class="flex-grow">
        <!-- Hero Section -->
        <section class="relative overflow-hidden py-16 lg:py-24 border-b border-slate-200/60 dark:border-slate-800">
            <img src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80" alt="" aria-hidden="true" class="absolute inset-0 w-full h-full object-cover">
            <div class="absolute inset-0 bg-white/85 dark:bg-slate-900/85"></div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div class="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs font-semibold tracking-wide uppercase mb-4">
                    <span>🏨 Rooms, Amenities &amp; Rates</span>
                </div>
                <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-3xl mx-auto leading-tight">
                    Every Detail Designed for <span class="text-amber-500">Your Comfort</span>
                </h1>
                <p class="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    From ocean-view suites to a full-service spa, explore what makes an Aurelia stay unforgettable — and find the rate that fits your trip.
                </p>
            </div>
        </section>

        <!-- Amenities Grid -->
        <section class="py-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-slate-900 dark:text-white">Hotel Amenities</h2>
                    <p class="mt-2 text-slate-600 dark:text-slate-400">Everything you need for a relaxing, memorable stay.</p>
                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Amenity 1 -->
                    <div class="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition">
                        <div class="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center text-2xl font-bold mb-5">
                            🏊
                        </div>
                        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Infinity Pool &amp; Sun Deck</h3>
                        <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                            A heated oceanfront infinity pool, private cabanas, and a poolside bar open year-round.
                        </p>
                        <a href="contact.html" class="text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline">Learn more →</a>
                    </div>

                    <!-- Amenity 2 -->
                    <div class="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition">
                        <div class="w-12 h-12 rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl font-bold mb-5">
                            💆
                        </div>
                        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Full-Service Spa</h3>
                        <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                            Signature massages, facials, and a thermal circuit designed for total relaxation.
                        </p>
                        <a href="contact.html" class="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline">Learn more →</a>
                    </div>

                    <!-- Amenity 3 -->
                    <div class="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition">
                        <div class="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center text-2xl font-bold mb-5">
                            🍽️
                        </div>
                        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Signature Restaurants</h3>
                        <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                            Three distinct dining venues serving coastal cuisine, tapas, and a rooftop cocktail bar.
                        </p>
                        <a href="contact.html" class="text-xs font-semibold text-purple-600 dark:text-purple-400 hover:underline">Learn more →</a>
                    </div>

                    <!-- Amenity 4 -->
                    <div class="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition">
                        <div class="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center text-2xl font-bold mb-5">
                            🏋️
                        </div>
                        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">24-Hour Fitness Center</h3>
                        <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                            A fully equipped gym with ocean views, plus daily yoga and guided beach runs.
                        </p>
                        <a href="contact.html" class="text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline">Learn more →</a>
                    </div>

                    <!-- Amenity 5 -->
                    <div class="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition">
                        <div class="w-12 h-12 rounded-xl bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 flex items-center justify-center text-2xl font-bold mb-5">
                            🎉
                        </div>
                        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Weddings &amp; Events</h3>
                        <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                            Oceanfront lawns and elegant ballrooms for weddings, conferences, and private celebrations.
                        </p>
                        <a href="contact.html" class="text-xs font-semibold text-rose-600 dark:text-rose-400 hover:underline">Learn more →</a>
                    </div>

                    <!-- Amenity 6 -->
                    <div class="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition">
                        <div class="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-2xl font-bold mb-5">
                            🛎️
                        </div>
                        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">24/7 Concierge &amp; Valet</h3>
                        <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                            Round-the-clock concierge service, valet parking, and airport transfer arrangements.
                        </p>
                        <a href="contact.html" class="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">Learn more →</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Room Rates Section with Interactive Alpine Toggle -->
        <section class="py-16 bg-white dark:bg-slate-800/40 border-y border-slate-200 dark:border-slate-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-10">
                    <h2 class="text-3xl font-bold text-slate-900 dark:text-white">Room Types &amp; Nightly Rates</h2>
                    <p class="mt-2 text-slate-600 dark:text-slate-400">Choose the accommodation that fits your trip.</p>

                    <!-- Season Toggle -->
                    <div class="mt-6 inline-flex items-center space-x-3 p-1.5 bg-slate-200/70 dark:bg-slate-900 rounded-xl">
                        <button type="button" @click="seasonRate = 'standard'"
                                :class="{ 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm': seasonRate === 'standard', 'text-slate-600 dark:text-slate-400': seasonRate !== 'standard' }"
                                class="px-4 py-2 rounded-lg text-xs font-bold transition">
                            Standard Season
                        </button>
                        <button type="button" @click="seasonRate = 'peak'"
                                :class="{ 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm': seasonRate === 'peak', 'text-slate-600 dark:text-slate-400': seasonRate !== 'peak' }"
                                class="px-4 py-2 rounded-lg text-xs font-bold transition flex items-center space-x-1.5">
                            <span>Peak Season</span>
                            <span class="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-extrabold text-[10px]">JUN – AUG</span>
                        </button>
                    </div>
                </div>

                <!-- Rate Cards -->
                <div class="grid lg:grid-cols-3 gap-8">
                    <!-- Deluxe Garden Room -->
                    <div class="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
                        <div>
                            <h3 class="text-lg font-bold text-slate-900 dark:text-white">Deluxe Garden Room</h3>
                            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-6">Ideal for couples &amp; solo travelers</p>

                            <div class="flex items-baseline mb-6">
                                <span class="text-4xl font-extrabold text-slate-900 dark:text-white" x-text="seasonRate === 'peak' ? '$219' : '$189'"></span>
                                <span class="text-xs text-slate-500 dark:text-slate-400 ml-1">/ night</span>
                            </div>

                            <ul class="space-y-3 text-xs text-slate-600 dark:text-slate-300 mb-8">
                                <li class="flex items-center space-x-2"><span class="text-amber-500">✓</span><span>Sleeps up to 2 guests</span></li>
                                <li class="flex items-center space-x-2"><span class="text-amber-500">✓</span><span>Garden view balcony</span></li>
                                <li class="flex items-center space-x-2"><span class="text-amber-500">✓</span><span>Complimentary breakfast</span></li>
                                <li class="flex items-center space-x-2"><span class="text-amber-500">✓</span><span>Free Wi-Fi &amp; smart TV</span></li>
                            </ul>
                        </div>
                        <button type="button" @click="showToast('Deluxe Garden Room selected! 🌿')" class="w-full py-3 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold text-xs hover:bg-slate-300 dark:hover:bg-slate-600 transition">Select Room</button>
                    </div>

                    <!-- Executive Suite (Featured) -->
                    <div class="p-8 rounded-2xl bg-white dark:bg-slate-900 border-2 border-amber-500 shadow-xl flex flex-col justify-between relative">
                        <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-amber-500 text-white font-extrabold text-[10px] tracking-wider uppercase shadow-md">
                            Most Popular
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-slate-900 dark:text-white">Executive Suite</h3>
                            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-6">Great for families &amp; extended stays</p>

                            <div class="flex items-baseline mb-6">
                                <span class="text-4xl font-extrabold text-amber-600 dark:text-amber-400" x-text="seasonRate === 'peak' ? '$339' : '$289'"></span>
                                <span class="text-xs text-slate-500 dark:text-slate-400 ml-1">/ night</span>
                            </div>

                            <ul class="space-y-3 text-xs text-slate-600 dark:text-slate-300 mb-8">
                                <li class="flex items-center space-x-2"><span class="text-amber-500">✓</span><span>Sleeps up to 3 guests</span></li>
                                <li class="flex items-center space-x-2"><span class="text-amber-500">✓</span><span>Separate living area</span></li>
                                <li class="flex items-center space-x-2"><span class="text-amber-500">✓</span><span>Partial ocean view</span></li>
                                <li class="flex items-center space-x-2"><span class="text-amber-500">✓</span><span>Daily housekeeping &amp; minibar</span></li>
                                <li class="flex items-center space-x-2"><span class="text-amber-500">✓</span><span>Priority spa booking</span></li>
                            </ul>
                        </div>
                        <button type="button" @click="showToast('Executive Suite selected! 🛎️')" class="w-full py-3 rounded-xl bg-amber-600 text-white font-semibold text-xs hover:bg-amber-700 transition shadow-md shadow-amber-600/30">Select Suite</button>
                    </div>

                    <!-- Oceanfront Suite -->
                    <div class="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
                        <div>
                            <h3 class="text-lg font-bold text-slate-900 dark:text-white">Oceanfront Suite</h3>
                            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-6">For a truly indulgent escape</p>

                            <div class="flex items-baseline mb-6">
                                <span class="text-4xl font-extrabold text-slate-900 dark:text-white" x-text="seasonRate === 'peak' ? '$449' : '$379'"></span>
                                <span class="text-xs text-slate-500 dark:text-slate-400 ml-1">/ night</span>
                            </div>

                            <ul class="space-y-3 text-xs text-slate-600 dark:text-slate-300 mb-8">
                                <li class="flex items-center space-x-2"><span class="text-amber-500">✓</span><span>Sleeps up to 4 guests</span></li>
                                <li class="flex items-center space-x-2"><span class="text-amber-500">✓</span><span>Floor-to-ceiling ocean views</span></li>
                                <li class="flex items-center space-x-2"><span class="text-amber-500">✓</span><span>Private terrace &amp; soaking tub</span></li>
                                <li class="flex items-center space-x-2"><span class="text-amber-500">✓</span><span>Dedicated butler service</span></li>
                            </ul>
                        </div>
                        <a href="contact.html" class="w-full py-3 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold text-xs text-center hover:bg-slate-300 dark:hover:bg-slate-600 transition block">Contact Reservations</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section class="py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-slate-900 dark:text-white">Loved by Our Guests</h2>
                    <p class="mt-2 text-slate-600 dark:text-slate-400">See what travelers say about their stay at Aurelia.</p>
                </div>

                <div class="grid md:grid-cols-3 gap-8">
                    <!-- Review 1 -->
                    <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                        <div class="flex text-amber-400 text-sm mb-3" aria-hidden="true">★★★★★</div>
                        <p class="text-sm text-slate-600 dark:text-slate-300 italic mb-6">"The Oceanfront Suite exceeded every expectation. Waking up to that view with coffee on the terrace was unforgettable."</p>
                        <div class="flex items-center space-x-3">
                            <div class="w-9 h-9 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center text-xs">SK</div>
                            <div>
                                <h4 class="text-xs font-bold text-slate-900 dark:text-white">Sarah Jenkins</h4>
                                <p class="text-[11px] text-slate-500">Anniversary Trip</p>
                            </div>
                        </div>
                    </div>

                    <!-- Review 2 -->
                    <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                        <div class="flex text-amber-400 text-sm mb-3" aria-hidden="true">★★★★★</div>
                        <p class="text-sm text-slate-600 dark:text-slate-300 italic mb-6">"Staff went above and beyond arranging a surprise dinner on the beach. The spa treatments were the highlight of our stay."</p>
                        <div class="flex items-center space-x-3">
                            <div class="w-9 h-9 rounded-full bg-sky-500 text-white font-bold flex items-center justify-center text-xs">DR</div>
                            <div>
                                <h4 class="text-xs font-bold text-slate-900 dark:text-white">David Rivera</h4>
                                <p class="text-[11px] text-slate-500">Family Vacation</p>
                            </div>
                        </div>
                    </div>

                    <!-- Review 3 -->
                    <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                        <div class="flex text-amber-400 text-sm mb-3" aria-hidden="true">★★★★★</div>
                        <p class="text-sm text-slate-600 dark:text-slate-300 italic mb-6">"We hosted our wedding on the oceanfront lawn and the events team made every detail effortless. Highly recommended!"</p>
                        <div class="flex items-center space-x-3">
                            <div class="w-9 h-9 rounded-full bg-purple-500 text-white font-bold flex items-center justify-center text-xs">MA</div>
                            <div>
                                <h4 class="text-xs font-bold text-slate-900 dark:text-white">Michael Adams</h4>
                                <p class="text-[11px] text-slate-500">Wedding Party</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>`;

    const extraState = `
    seasonRate: 'standard',
`;

    return renderLayout(
        { ...ctx, modalBody: 'Choose a room type or request a custom package for your trip.', extraState },
        { main },
    );
}
