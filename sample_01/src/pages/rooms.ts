import { renderLayout, type PageContext } from '../lib/layout';
import { jsonAttr } from '../lib/html';
import { ROOMS } from '../data/rooms';

// Was src/pages/rooms.njk

export function renderRooms(ctx: PageContext): string {
    const main = `
    <!-- Main Content -->
    <main class="flex-grow">
        <!-- Hero Section -->
        <section class="relative overflow-hidden py-16 lg:py-24 border-b border-slate-200/60 dark:border-slate-800">
            <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=80" alt="" aria-hidden="true" class="absolute inset-0 w-full h-full object-cover">
            <div class="absolute inset-0 bg-white/85 dark:bg-slate-900/85"></div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div class="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs font-semibold tracking-wide uppercase mb-4">
                    <span>🛏️ Rooms &amp; Suites</span>
                </div>
                <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-3xl mx-auto leading-tight">
                    A Room for Every <span class="text-amber-500">Kind of Stay</span>
                </h1>
                <p class="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    From garden-view retreats to our panoramic Presidential Penthouse, explore every accommodation at Aurelia and find the one that fits your trip.
                </p>

                <!-- Quick Stats -->
                <div class="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
                    <div class="p-4 rounded-2xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60 backdrop-blur">
                        <div class="text-2xl font-extrabold text-amber-500">6</div>
                        <div class="text-xs text-slate-600 dark:text-slate-400 mt-1">Room Categories</div>
                    </div>
                    <div class="p-4 rounded-2xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60 backdrop-blur">
                        <div class="text-2xl font-extrabold text-amber-500">120+</div>
                        <div class="text-xs text-slate-600 dark:text-slate-400 mt-1">Total Rooms</div>
                    </div>
                    <div class="p-4 rounded-2xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60 backdrop-blur">
                        <div class="text-2xl font-extrabold text-amber-500">4.9★</div>
                        <div class="text-xs text-slate-600 dark:text-slate-400 mt-1">Average Rating</div>
                    </div>
                    <div class="p-4 rounded-2xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60 backdrop-blur">
                        <div class="text-2xl font-extrabold text-amber-500">24/7</div>
                        <div class="text-xs text-slate-600 dark:text-slate-400 mt-1">Front Desk &amp; Concierge</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Filter Bar (not sticky — scrolls away normally with the page) -->
        <section class="py-10 bg-slate-50 dark:bg-slate-900 border-b border-slate-200/60 dark:border-slate-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <h2 class="text-lg font-bold text-slate-900 dark:text-white">Browse by Category</h2>
                    <div class="flex flex-wrap justify-center gap-2 p-1.5 bg-slate-200/70 dark:bg-slate-800 rounded-xl">
                        <button type="button" @click="activeFilter = 'all'"
                                :class="{ 'bg-white dark:bg-slate-900 text-amber-600 dark:text-amber-400 shadow-sm': activeFilter === 'all', 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white': activeFilter !== 'all' }"
                                class="px-4 py-2 rounded-lg text-xs font-bold transition">All Rooms</button>
                        <button type="button" @click="activeFilter = 'standard'"
                                :class="{ 'bg-white dark:bg-slate-900 text-amber-600 dark:text-amber-400 shadow-sm': activeFilter === 'standard', 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white': activeFilter !== 'standard' }"
                                class="px-4 py-2 rounded-lg text-xs font-bold transition">Standard</button>
                        <button type="button" @click="activeFilter = 'suite'"
                                :class="{ 'bg-white dark:bg-slate-900 text-amber-600 dark:text-amber-400 shadow-sm': activeFilter === 'suite', 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white': activeFilter !== 'suite' }"
                                class="px-4 py-2 rounded-lg text-xs font-bold transition">Suites</button>
                        <button type="button" @click="activeFilter = 'family'"
                                :class="{ 'bg-white dark:bg-slate-900 text-amber-600 dark:text-amber-400 shadow-sm': activeFilter === 'family', 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white': activeFilter !== 'family' }"
                                class="px-4 py-2 rounded-lg text-xs font-bold transition">Family</button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Rooms Grid -->
        <section class="py-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <template x-for="room in rooms.filter(r => activeFilter === 'all' || r.category === activeFilter)" :key="room.id">
                        <div class="group rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition overflow-hidden flex flex-col relative">
                            <div x-show="room.popular" class="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-amber-500 text-white font-extrabold text-[10px] tracking-wider uppercase shadow-md">
                                Most Popular
                            </div>
                            <!-- Photo Banner -->
                            <div class="h-44 relative overflow-hidden bg-gradient-to-tr" :class="room.gradient">
                                <img :src="room.imageUrl" :alt="room.name" loading="lazy" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                                <span class="absolute bottom-3 left-3 w-9 h-9 rounded-full bg-white/90 dark:bg-slate-900/80 flex items-center justify-center text-lg shadow-md" x-text="room.img"></span>
                            </div>
                            <div class="p-6 flex flex-col flex-grow">
                                <h3 class="text-lg font-bold text-slate-900 dark:text-white" x-text="room.name"></h3>
                                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-4" x-text="room.tagline"></p>

                                <div class="grid grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300 mb-4">
                                    <div class="flex items-center space-x-1.5"><span aria-hidden="true">📐</span><span x-text="room.size"></span></div>
                                    <div class="flex items-center space-x-1.5"><span aria-hidden="true">🛏️</span><span x-text="room.beds"></span></div>
                                    <div class="flex items-center space-x-1.5"><span aria-hidden="true">👥</span><span x-text="'Sleeps ' + room.capacity"></span></div>
                                    <div class="flex items-center space-x-1.5"><span aria-hidden="true">🖼️</span><span x-text="room.view"></span></div>
                                </div>

                                <div class="flex items-baseline mb-4 mt-auto pt-2">
                                    <span class="text-3xl font-extrabold text-slate-900 dark:text-white" x-text="'$' + room.price"></span>
                                    <span class="text-xs text-slate-500 dark:text-slate-400 ml-1">/ night</span>
                                </div>

                                <div class="flex gap-2">
                                    <button type="button" @click="openDetail(room)" class="flex-1 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold text-xs hover:bg-slate-200 dark:hover:bg-slate-600 transition">
                                        View Details
                                    </button>
                                    <button type="button" @click="modalOpen = true" class="flex-1 py-2.5 rounded-xl bg-amber-600 text-white font-semibold text-xs hover:bg-amber-700 transition shadow-md shadow-amber-600/30">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </section>

        <!-- Shared Room Amenities -->
        <section class="py-16 bg-white dark:bg-slate-800/40 border-y border-slate-200 dark:border-slate-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-slate-900 dark:text-white">Included in Every Room</h2>
                    <p class="mt-2 text-slate-600 dark:text-slate-400">Comfort essentials, standard across every category.</p>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
                    <div class="p-4">
                        <div class="text-3xl mb-2" aria-hidden="true">📶</div>
                        <p class="text-xs font-semibold text-slate-700 dark:text-slate-300">Free High-Speed Wi-Fi</p>
                    </div>
                    <div class="p-4">
                        <div class="text-3xl mb-2" aria-hidden="true">❄️</div>
                        <p class="text-xs font-semibold text-slate-700 dark:text-slate-300">Climate Control</p>
                    </div>
                    <div class="p-4">
                        <div class="text-3xl mb-2" aria-hidden="true">📺</div>
                        <p class="text-xs font-semibold text-slate-700 dark:text-slate-300">Smart TV &amp; Streaming</p>
                    </div>
                    <div class="p-4">
                        <div class="text-3xl mb-2" aria-hidden="true">☕</div>
                        <p class="text-xs font-semibold text-slate-700 dark:text-slate-300">Nespresso &amp; Minibar</p>
                    </div>
                    <div class="p-4">
                        <div class="text-3xl mb-2" aria-hidden="true">🧴</div>
                        <p class="text-xs font-semibold text-slate-700 dark:text-slate-300">Luxury Bath Amenities</p>
                    </div>
                    <div class="p-4">
                        <div class="text-3xl mb-2" aria-hidden="true">🧹</div>
                        <p class="text-xs font-semibold text-slate-700 dark:text-slate-300">Daily Housekeeping</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <section class="py-20">
            <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-slate-900 dark:text-white">Room Booking FAQs</h2>
                    <p class="mt-2 text-slate-600 dark:text-slate-400">Answers to the questions we hear most often.</p>
                </div>

                <div class="space-y-4" x-data="{ open: 0 }">
                    <template x-for="(faq, i) in [
                        { q: 'What time is check-in and check-out?', a: 'Check-in begins at 3:00 PM and check-out is by 11:00 AM. Early check-in and late check-out can be arranged based on availability — just ask our front desk or concierge.' },
                        { q: 'Can I request a connecting room for my family?', a: 'Yes. The Family Oceanview Room offers a connecting-room option, and our reservations team can pair any two rooms on request, subject to availability.' },
                        { q: 'Is breakfast included with my room?', a: 'Complimentary breakfast for two is included with the Deluxe Garden and Accessible Garden Rooms. Suite categories include a full breakfast credit redeemable at any of our three restaurants.' },
                        { q: 'Do you offer accessible accommodations?', a: 'Yes, our Accessible Garden Room is a ground-floor room with a roll-in shower, widened doorways, and lowered fixtures. Please note any accessibility needs when booking so we can prepare accordingly.' },
                        { q: 'What is your cancellation policy?', a: 'Standard reservations can be cancelled free of charge up to 48 hours before arrival. Peak-season and package bookings may carry different terms — see our Terms of Service for full details.' }
                    ]" :key="i">
                        <div class="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden">
                            <button type="button" @click="open = (open === i ? -1 : i)" class="w-full flex items-center justify-between p-5 text-left" :aria-expanded="(open === i).toString()">
                                <span class="font-semibold text-sm text-slate-900 dark:text-white" x-text="faq.q"></span>
                                <svg class="w-5 h-5 text-amber-500 flex-shrink-0 ml-4 transition-transform" :class="{ 'rotate-180': open === i }" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                                </svg>
                            </button>
                            <div x-show="open === i" x-collapse class="px-5 pb-5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed" x-text="faq.a"></div>
                        </div>
                    </template>
                </div>
            </div>
        </section>

        <!-- CTA Banner -->
        <section class="py-16">
            <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="rounded-3xl bg-gradient-to-r from-amber-600 to-orange-600 p-10 sm:p-14 text-center shadow-xl">
                    <h2 class="text-2xl sm:text-3xl font-extrabold text-white mb-3">Ready to Find Your Room?</h2>
                    <p class="text-amber-50 max-w-xl mx-auto mb-8">Reserve directly with us for the best rate guarantee, free cancellation, and complimentary room upgrades when available.</p>
                    <div class="flex flex-col sm:flex-row justify-center gap-4">
                        <button type="button" @click="modalOpen = true" class="px-8 py-3.5 rounded-xl font-semibold text-amber-700 bg-white hover:bg-amber-50 transition shadow-lg">
                            Reserve Your Stay
                        </button>
                        <a href="contact.html" class="px-8 py-3.5 rounded-xl font-semibold text-white border-2 border-white/70 hover:bg-white/10 transition">
                            Talk to Reservations
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </main>`;

    const extraModals = `
    <!-- Room Detail Modal -->
    <div x-cloak
         x-show="detailRoom !== null"
         class="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4"
         role="dialog"
         aria-modal="true"
         aria-labelledby="room-detail-title"
         @keydown.escape.window="detailRoom = null">
        <div x-show="detailRoom !== null"
             x-transition:enter="ease-out duration-300"
             x-transition:enter-start="opacity-0"
             x-transition:enter-end="opacity-100"
             x-transition:leave="ease-in duration-200"
             x-transition:leave-start="opacity-100"
             x-transition:leave-end="opacity-0"
             @click="detailRoom = null"
             class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"></div>

        <div x-show="detailRoom !== null"
             x-transition:enter="ease-out duration-300"
             x-transition:enter-start="opacity-0 scale-95"
             x-transition:enter-end="opacity-100 scale-100"
             x-transition:leave="ease-in duration-200"
             x-transition:leave-start="opacity-100 scale-100"
             x-transition:leave-end="opacity-0 scale-95"
             class="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full border border-slate-200 dark:border-slate-700 z-10 overflow-hidden max-h-[90vh] flex flex-col">
            <template x-if="detailRoom">
                <div class="overflow-y-auto">
                    <div class="h-48 relative overflow-hidden bg-gradient-to-tr" :class="detailRoom.gradient">
                        <img :src="detailRoom.imageUrl" :alt="detailRoom.name" class="absolute inset-0 w-full h-full object-cover">
                        <span class="absolute bottom-4 left-4 w-11 h-11 rounded-full bg-white/90 dark:bg-slate-900/80 flex items-center justify-center text-2xl shadow-md" x-text="detailRoom.img"></span>
                        <button type="button" @click="detailRoom = null" class="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/40 text-white transition" aria-label="Close dialog">
                            ✕
                        </button>
                    </div>
                    <div class="p-6 sm:p-8">
                        <div class="flex items-start justify-between mb-1">
                            <h3 id="room-detail-title" class="text-2xl font-bold text-slate-900 dark:text-white" x-text="detailRoom.name"></h3>
                            <div class="text-right flex-shrink-0 ml-4">
                                <div class="text-2xl font-extrabold text-amber-600 dark:text-amber-400" x-text="'$' + detailRoom.price"></div>
                                <div class="text-[11px] text-slate-400">per night (standard)</div>
                            </div>
                        </div>
                        <p class="text-sm text-slate-500 dark:text-slate-400 mb-5" x-text="detailRoom.tagline"></p>

                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                            <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-center">
                                <div class="text-lg" aria-hidden="true">📐</div>
                                <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-1" x-text="detailRoom.size"></div>
                            </div>
                            <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-center">
                                <div class="text-lg" aria-hidden="true">🛏️</div>
                                <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-1" x-text="detailRoom.beds"></div>
                            </div>
                            <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-center">
                                <div class="text-lg" aria-hidden="true">👥</div>
                                <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-1" x-text="'Sleeps ' + detailRoom.capacity"></div>
                            </div>
                            <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-center">
                                <div class="text-lg" aria-hidden="true">🖼️</div>
                                <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-1" x-text="detailRoom.view"></div>
                            </div>
                        </div>

                        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6" x-text="detailRoom.description"></p>

                        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">Room Amenities</h4>
                        <ul class="grid sm:grid-cols-2 gap-2.5 text-xs text-slate-600 dark:text-slate-300 mb-6">
                            <template x-for="a in detailRoom.amenities" :key="a">
                                <li class="flex items-center space-x-2"><span class="text-amber-500" aria-hidden="true">✓</span><span x-text="a"></span></li>
                            </template>
                        </ul>

                        <div class="flex gap-3">
                            <button type="button" @click="detailRoom = null" class="flex-1 py-3 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold text-sm hover:bg-slate-200 dark:hover:bg-slate-600 transition">
                                Close
                            </button>
                            <button type="button" @click="detailRoom = null; modalOpen = true" class="flex-1 py-3 rounded-xl bg-amber-600 text-white font-semibold text-sm hover:bg-amber-700 transition shadow-md shadow-amber-600/30">
                                Book This Room
                            </button>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>`;

    // rooms.njk's extraState block embeds a live Nunjucks expression
    // (`{{ rooms | jsonattr | safe }}`), not literal text — actually evaluate
    // jsonAttr(ROOMS) here rather than copying that line verbatim.
    const extraState = `
    activeFilter: 'all',
    detailRoom: null,
    openDetail(room) {
        this.detailRoom = room;
    },
    rooms: ${jsonAttr(ROOMS)},
`;

    return renderLayout(
        { ...ctx, extraState },
        { main, extraModals },
    );
}
