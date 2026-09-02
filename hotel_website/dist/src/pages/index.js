"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderIndex = renderIndex;
const layout_1 = require("../lib/layout");
const html_1 = require("../lib/html");
// Was src/pages/index.njk
function renderIndex(ctx) {
    const featuredRooms = ctx.featuredRooms ?? [];
    const featuredRoomsHtml = featuredRooms.map((room) => `
                        <div class="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800">
                            <div class="flex items-center space-x-4">
                                <div class="w-14 h-14 rounded-xl bg-amber-100 dark:bg-amber-950 flex items-center justify-center text-2xl">${(0, html_1.escapeHtml)(room.img)}</div>
                                <div>
                                    <h3 class="font-bold text-slate-900 dark:text-white">${(0, html_1.escapeHtml)(room.name)}</h3>
                                    <p class="text-xs text-slate-500 dark:text-slate-400">Sleeps ${(0, html_1.escapeHtml)(room.capacity)} guests</p>
                                </div>
                            </div>
                            <div class="text-right">
                                <div class="text-lg font-black text-amber-600 dark:text-amber-400">$${(0, html_1.escapeHtml)(room.price)}</div>
                                <div class="text-xs text-slate-400">per night</div>
                            </div>
                        </div>`).join('');
    const main = `
    <!-- Main Content -->
    <main class="flex-grow">
        <!-- Hero Section -->
        <section class="relative overflow-hidden py-24 lg:py-36">
            <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=2000&q=80" alt="" aria-hidden="true" class="absolute inset-0 w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80"></div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div class="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-amber-100/95 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs font-semibold tracking-wide uppercase mb-6">
                    <span>✨ Welcome to Aurelia Hotel &amp; Resort</span>
                </div>
                <div class="flex justify-center mb-6">
                    <img src="images/logo.svg" alt="Aurelia Hotel & Resort" width="96" height="96" class="w-24 h-24 hover:scale-105 transition-transform duration-300 drop-shadow-lg">
                </div>
                <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight drop-shadow-sm">
                    Your Oceanfront <span class="text-amber-400">Escape Awaits</span>
                </h1>
                <p class="mt-6 text-lg sm:text-xl text-slate-100 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                    Indulge in refined comfort, panoramic ocean views, and effortless hospitality. Discover a stay designed around you.
                </p>
                <div class="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <button type="button" @click="modalOpen = true" class="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-white bg-amber-600 hover:bg-amber-700 transition shadow-lg shadow-amber-600/30 flex items-center justify-center space-x-2">
                        <span>Reserve Your Stay</span>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </button>
                    <a href="rooms.html" class="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-slate-800 bg-white/95 hover:bg-white transition flex items-center justify-center">
                        Explore Rooms
                    </a>
                </div>
            </div>
        </section>

        <!-- Trust / Stats Strip -->
        <section class="py-10 bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                    <div>
                        <div class="text-2xl sm:text-3xl font-extrabold text-amber-500">4.9<span class="text-lg">★</span></div>
                        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">2,400+ Guest Reviews</p>
                    </div>
                    <div>
                        <div class="text-2xl sm:text-3xl font-extrabold text-amber-500">120+</div>
                        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Rooms &amp; Suites</p>
                    </div>
                    <div>
                        <div class="text-2xl sm:text-3xl font-extrabold text-amber-500">18</div>
                        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Years of Hospitality</p>
                    </div>
                    <div>
                        <div class="text-2xl sm:text-3xl font-extrabold text-amber-500">24/7</div>
                        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Concierge &amp; Room Service</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Hotel Highlights Grid -->
        <section id="features" class="py-16 bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Why Stay With Us?</h2>
                    <p class="mt-2 text-slate-600 dark:text-slate-400">Comfort, service, and setting — all in perfect balance.</p>
                </div>

                <div class="grid md:grid-cols-3 gap-8">
                    <!-- Highlight 1 -->
                    <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 transition hover:shadow-md">
                        <div class="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xl font-bold mb-4">
                            🌊
                        </div>
                        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Oceanfront Views</h3>
                        <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            Every room is positioned to capture sweeping views of the coastline and sunrise.
                        </p>
                    </div>

                    <!-- Highlight 2 -->
                    <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 transition hover:shadow-md">
                        <div class="w-12 h-12 rounded-xl bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-400 flex items-center justify-center text-xl font-bold mb-4">
                            🍽️
                        </div>
                        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Award-Winning Dining</h3>
                        <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            Savor locally sourced cuisine crafted by our in-house culinary team at three signature restaurants.
                        </p>
                    </div>

                    <!-- Highlight 3 -->
                    <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 transition hover:shadow-md">
                        <div class="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 flex items-center justify-center text-xl font-bold mb-4">
                            💆
                        </div>
                        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Full-Service Spa</h3>
                        <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            Unwind with signature treatments, a thermal pool circuit, and private cabana relaxation lounges.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Booking & Rooms Section -->
        <section id="rooms" class="py-20">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-10">
                    <h2 class="text-3xl font-bold text-slate-900 dark:text-white">Check Availability &amp; Browse Rooms</h2>
                    <p class="mt-2 text-slate-600 dark:text-slate-400">Find the perfect room for your stay, then explore our favorites below.</p>
                </div>

                <!-- Tab Controls -->
                <div class="flex justify-center space-x-2 p-1.5 bg-slate-200/70 dark:bg-slate-800 rounded-xl mb-8">
                    <button type="button" @click="activeTab = 'rooms'"
                            :class="{ 'bg-white dark:bg-slate-900 text-amber-600 dark:text-amber-400 shadow-sm': activeTab === 'rooms', 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white': activeTab !== 'rooms' }"
                            class="px-5 py-2.5 rounded-lg text-sm font-semibold transition">
                        Featured Rooms
                    </button>
                    <button type="button" @click="activeTab = 'availability'"
                            :class="{ 'bg-white dark:bg-slate-900 text-amber-600 dark:text-amber-400 shadow-sm': activeTab === 'availability', 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white': activeTab !== 'availability' }"
                            class="px-5 py-2.5 rounded-lg text-sm font-semibold transition">
                        Check Availability
                    </button>
                </div>

                <!-- Demo Card Box -->
                <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8">

                    <!-- Tab 1: Featured Rooms -->
                    <div x-show="activeTab === 'rooms'" class="space-y-4">${featuredRoomsHtml}
                        <a href="rooms.html" class="block text-center text-sm font-semibold text-amber-600 dark:text-amber-400 hover:underline pt-2">View all rooms &amp; suites →</a>
                    </div>

                    <!-- Tab 2: Availability -->
                    <div x-cloak x-show="activeTab === 'availability'" class="space-y-6">
                        <div class="flex items-center justify-between">
                            <h3 class="font-bold text-lg text-slate-900 dark:text-white">Check-In / Check-Out</h3>
                        </div>

                        <div class="grid sm:grid-cols-3 gap-4">
                            <div>
                                <label for="home-checkin" class="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">Check-In</label>
                                <input type="date" id="home-checkin" x-model="checkIn" class="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm">
                            </div>
                            <div>
                                <label for="home-checkout" class="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">Check-Out</label>
                                <input type="date" id="home-checkout" x-model="checkOut" class="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm">
                            </div>
                            <div>
                                <label for="home-guests" class="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">Guests</label>
                                <select id="home-guests" x-model="guests" class="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm">
                                    <option value="1">1 Guest</option>
                                    <option value="2">2 Guests</option>
                                    <option value="3">3 Guests</option>
                                    <option value="4">4 Guests</option>
                                </select>
                            </div>
                        </div>

                        <button type="button" @click="checkAvailability()" class="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm transition shadow-md shadow-amber-600/30">
                            Search Availability
                        </button>
                    </div>

                </div>
            </div>
        </section>

        <!-- Resort Gallery Teaser -->
        <section class="py-20 bg-white dark:bg-slate-800/40 border-y border-slate-200 dark:border-slate-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-slate-900 dark:text-white">A Glimpse of Aurelia</h2>
                    <p class="mt-2 text-slate-600 dark:text-slate-400">A few favorite moments from around the resort.</p>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div class="aspect-square rounded-2xl overflow-hidden shadow-md relative group">
                        <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80" alt="Sunrise over the ocean from the resort terrace" loading="lazy" class="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-300">
                    </div>
                    <div class="aspect-square rounded-2xl overflow-hidden shadow-md relative group">
                        <img src="https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=600&q=80" alt="Signature cocktail served at the resort bar" loading="lazy" class="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-300">
                    </div>
                    <div class="aspect-square rounded-2xl overflow-hidden shadow-md relative group">
                        <img src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=600&q=80" alt="Resort swimming pool surrounded by loungers" loading="lazy" class="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-300">
                    </div>
                    <div class="aspect-square rounded-2xl overflow-hidden shadow-md relative group">
                        <img src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=600&q=80" alt="Hotel lobby and concierge desk" loading="lazy" class="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-300">
                    </div>
                    <div class="aspect-square rounded-2xl overflow-hidden shadow-md relative group hidden md:block">
                        <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80" alt="Tropical flowers in the resort garden" loading="lazy" class="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-300">
                    </div>
                    <div class="aspect-square rounded-2xl overflow-hidden shadow-md relative group hidden md:block">
                        <img src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=600&q=80" alt="Seashells on the resort's private beach" loading="lazy" class="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-300">
                    </div>
                    <div class="aspect-square rounded-2xl overflow-hidden shadow-md relative group hidden md:block">
                        <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=80" alt="Palm trees lining the resort grounds" loading="lazy" class="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-300">
                    </div>
                    <div class="aspect-square rounded-2xl overflow-hidden shadow-md relative group hidden md:block">
                        <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80" alt="Fine dining table setting at the resort restaurant" loading="lazy" class="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-300">
                    </div>
                </div>
                <div class="text-center mt-8">
                    <a href="services.html" class="text-sm font-semibold text-amber-600 dark:text-amber-400 hover:underline">Explore all amenities →</a>
                </div>
            </div>
        </section>

        <!-- Guest Testimonial Teaser -->
        <section class="py-20">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div class="text-amber-400 text-2xl mb-4" aria-hidden="true">★★★★★</div>
                <blockquote class="text-xl sm:text-2xl font-medium text-slate-800 dark:text-slate-100 leading-relaxed">
                    "From the moment we arrived, every detail felt intentional. The Oceanfront Suite, the sunset dinner on the beach, the staff who remembered our names — Aurelia set a new standard for what a resort stay should feel like."
                </blockquote>
                <div class="mt-6 flex items-center justify-center space-x-3">
                    <div class="w-10 h-10 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center text-sm">SK</div>
                    <div class="text-left">
                        <p class="text-sm font-bold text-slate-900 dark:text-white">Sarah Jenkins</p>
                        <p class="text-xs text-slate-500 dark:text-slate-400">Verified Guest · Anniversary Trip</p>
                    </div>
                </div>
                <a href="services.html" class="inline-block mt-8 text-sm font-semibold text-amber-600 dark:text-amber-400 hover:underline">Read more guest stories →</a>
            </div>
        </section>
    </main>`;
    const extraState = `
    activeTab: 'rooms',
    checkIn: '',
    checkOut: '',
    guests: 2,
    checkAvailability() {
        if (this.checkIn && this.checkOut) {
            this.showToast('Searching availability for ' + this.guests + ' guest(s)... ✨');
        } else {
            this.showToast('Please select check-in and check-out dates.');
        }
    },
`;
    // JSON-LD structured data. Plain JSON.stringify does not escape `<`, so a
    // future edit to any string field (e.g. description) that happens to
    // contain the literal substring `</script>` could prematurely close this
    // script tag — use jsonAttr (not bare JSON.stringify) since it's safe for
    // script-tag content too, not just attributes.
    const structuredData = ctx.structuredData
        ? `<script type="application/ld+json">${(0, html_1.jsonAttr)(ctx.structuredData)}</script>`
        : '';
    return (0, layout_1.renderLayout)({ ...ctx, extraState }, { main, structuredData });
}
