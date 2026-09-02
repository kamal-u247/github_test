import { renderLayout, type PageContext } from '../lib/layout';

// Was src/pages/about.njk

export function renderAbout(ctx: PageContext): string {
    const main = `
    <!-- Main Content -->
    <main class="flex-grow">
        <!-- Hero Section -->
        <section class="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-b from-amber-50/50 to-transparent dark:from-slate-800/40 dark:to-transparent border-b border-slate-200/60 dark:border-slate-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div class="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs font-semibold tracking-wide uppercase mb-4">
                    <span>💡 Our Story &amp; Values</span>
                </div>
                <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-3xl mx-auto leading-tight">
                    Hospitality Rooted in <span class="text-amber-500">Genuine Care</span>
                </h1>
                <p class="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    We believe every stay should feel personal. Explore our story, our team, and the values that shape every guest experience.
                </p>
            </div>
        </section>

        <!-- Core Mission & Vision Cards -->
        <section class="py-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid md:grid-cols-3 gap-8">
                    <div class="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition">
                        <div class="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 flex items-center justify-center text-2xl font-bold mb-5">
                            🎯
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">Our Mission</h3>
                        <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            To provide every guest with a seamless, memorable stay through attentive service, elegant spaces, and genuine warmth.
                        </p>
                    </div>

                    <div class="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition">
                        <div class="w-12 h-12 rounded-xl bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl font-bold mb-5">
                            🔭
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">Our Vision</h3>
                        <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            To be the coast's most beloved retreat — where luxury feels effortless and every detail is thoughtfully considered.
                        </p>
                    </div>

                    <div class="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition">
                        <div class="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 flex items-center justify-center text-2xl font-bold mb-5">
                            💎
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">Core Values</h3>
                        <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            Genuine hospitality, sustainable practices, respect for local culture, and an unwavering attention to detail.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Hotel Milestones / Timeline -->
        <section class="py-16 bg-white dark:bg-slate-800/40 border-y border-slate-200 dark:border-slate-800">
            <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-slate-900 dark:text-white">Our Journey &amp; Milestones</h2>
                    <p class="mt-2 text-slate-600 dark:text-slate-400">From a boutique inn to a beloved coastal resort.</p>
                </div>

                <div class="relative border-l-2 border-amber-500/30 ml-4 md:ml-32 space-y-10">
                    <!-- Milestone 1 -->
                    <div class="relative pl-8">
                        <div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-amber-500 ring-4 ring-white dark:ring-slate-900"></div>
                        <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                            <span class="font-bold text-lg text-slate-900 dark:text-white">Aurelia Opens Its Doors</span>
                            <span class="text-xs px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-semibold w-fit mt-1 sm:mt-0">2008</span>
                        </div>
                        <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            Founded as a 40-room boutique inn overlooking the harbor, built on a promise of personal service.
                        </p>
                    </div>

                    <!-- Milestone 2 -->
                    <div class="relative pl-8">
                        <div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-amber-500 ring-4 ring-white dark:ring-slate-900"></div>
                        <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                            <span class="font-bold text-lg text-slate-900 dark:text-white">Spa &amp; Wellness Wing</span>
                            <span class="text-xs px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-semibold w-fit mt-1 sm:mt-0">2014</span>
                        </div>
                        <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            Expanded with a full-service spa, thermal pool circuit, and dedicated wellness programming.
                        </p>
                    </div>

                    <!-- Milestone 3 -->
                    <div class="relative pl-8">
                        <div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-amber-500 ring-4 ring-white dark:ring-slate-900"></div>
                        <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                            <span class="font-bold text-lg text-slate-900 dark:text-white">Oceanfront Suite Tower</span>
                            <span class="text-xs px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-semibold w-fit mt-1 sm:mt-0">2019</span>
                        </div>
                        <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            Added 60 new oceanfront suites, a rooftop lounge, and three signature dining venues.
                        </p>
                    </div>

                    <!-- Milestone 4 -->
                    <div class="relative pl-8">
                        <div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-amber-500 ring-4 ring-white dark:ring-slate-900"></div>
                        <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                            <span class="font-bold text-lg text-slate-900 dark:text-white">A New Era of Guest Experience</span>
                            <span class="text-xs px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-semibold w-fit mt-1 sm:mt-0">2026</span>
                        </div>
                        <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            Launched digital concierge tools, refreshed interiors, and expanded event and wedding spaces.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Team Showcase Section -->
        <section class="py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl font-bold text-slate-900 dark:text-white">Meet Our Leadership Team</h2>
                    <p class="mt-2 text-slate-600 dark:text-slate-400">Dedicated professionals shaping every guest's experience.</p>
                </div>

                <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <!-- Member 1 -->
                    <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center hover:shadow-lg transition group">
                        <div class="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-amber-400 to-orange-600 flex items-center justify-center text-3xl font-extrabold text-white mb-4 shadow-md group-hover:scale-105 transition">
                            JS
                        </div>
                        <h3 class="text-lg font-bold text-slate-900 dark:text-white">Jane Sinclair</h3>
                        <p class="text-xs text-amber-600 dark:text-amber-400 font-semibold mb-2">General Manager</p>
                        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">Oversees daily operations and ensures every guest's stay exceeds expectations.</p>
                    </div>

                    <!-- Member 2 -->
                    <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center hover:shadow-lg transition group">
                        <div class="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-sky-400 to-indigo-600 flex items-center justify-center text-3xl font-extrabold text-white mb-4 shadow-md group-hover:scale-105 transition">
                            AD
                        </div>
                        <h3 class="text-lg font-bold text-slate-900 dark:text-white">Alex Devereaux</h3>
                        <p class="text-xs text-sky-600 dark:text-sky-400 font-semibold mb-2">Executive Chef</p>
                        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">Leads our culinary team, crafting seasonal menus from locally sourced ingredients.</p>
                    </div>

                    <!-- Member 3 -->
                    <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center hover:shadow-lg transition group">
                        <div class="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-purple-400 to-pink-600 flex items-center justify-center text-3xl font-extrabold text-white mb-4 shadow-md group-hover:scale-105 transition">
                            MC
                        </div>
                        <h3 class="text-lg font-bold text-slate-900 dark:text-white">Marcus Chen</h3>
                        <p class="text-xs text-purple-600 dark:text-purple-400 font-semibold mb-2">Director of Guest Relations</p>
                        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">Ensures every request, from early check-in to special occasions, is handled with care.</p>
                    </div>

                    <!-- Member 4 -->
                    <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center hover:shadow-lg transition group">
                        <div class="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-emerald-400 to-teal-600 flex items-center justify-center text-3xl font-extrabold text-white mb-4 shadow-md group-hover:scale-105 transition">
                            EP
                        </div>
                        <h3 class="text-lg font-bold text-slate-900 dark:text-white">Elena Petrova</h3>
                        <p class="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mb-2">Spa &amp; Wellness Director</p>
                        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">Curates our treatment menu and wellness programming for a restorative stay.</p>
                    </div>
                </div>
            </div>
        </section>
    </main>`;

    return renderLayout(ctx, { main });
}
