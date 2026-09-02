// Room dataset — ported verbatim from src/_data/rooms.json.

export interface Room {
    id: string;
    name: string;
    tagline: string;
    category: string;
    img: string;
    imageUrl: string;
    gradient: string;
    price: number;
    peakPrice: number;
    size: string;
    beds: string;
    capacity: number;
    view: string;
    description: string;
    amenities: string[];
    popular: boolean;
    featured: boolean;
}

export const ROOMS: Room[] = [
    {
        id: 'garden',
        name: 'Deluxe Garden Room',
        tagline: 'Ideal for couples & solo travelers',
        category: 'standard',
        img: '🌿',
        imageUrl: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80',
        gradient: 'from-emerald-400 to-teal-600',
        price: 189,
        peakPrice: 219,
        size: '380 sq ft',
        beds: '1 King or 2 Queen',
        capacity: 2,
        view: 'Garden view',
        description: 'A calm retreat surrounded by lush tropical landscaping, the Deluxe Garden Room pairs understated elegance with everyday comfort — perfect for a quiet getaway or a first visit to Aurelia.',
        amenities: ['Private garden-view balcony', 'Complimentary breakfast for two', 'Free high-speed Wi-Fi & smart TV', 'Rainfall shower & premium bath amenities', 'Nespresso machine & minibar', 'Daily housekeeping'],
        popular: false,
        featured: true,
    },
    {
        id: 'executive',
        name: 'Executive Suite',
        tagline: 'Great for families & extended stays',
        category: 'suite',
        img: '🛎️',
        imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
        gradient: 'from-amber-400 to-orange-600',
        price: 289,
        peakPrice: 339,
        size: '620 sq ft',
        beds: '1 King + Sofa Bed',
        capacity: 3,
        view: 'Partial ocean view',
        description: 'Spread out in a separate living area with partial ocean views. The Executive Suite is designed for families and longer stays, with extra space, thoughtful amenities, and priority access to resort experiences.',
        amenities: ['Separate living & dining area', 'Partial ocean-view balcony', 'Daily housekeeping & stocked minibar', 'Priority spa & restaurant booking', 'Walk-in closet & work desk', 'Bathrobe & slipper set for two'],
        popular: true,
        featured: true,
    },
    {
        id: 'oceanfront',
        name: 'Oceanfront Suite',
        tagline: 'For a truly indulgent escape',
        category: 'suite',
        img: '🌊',
        imageUrl: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
        gradient: 'from-sky-400 to-blue-600',
        price: 379,
        peakPrice: 449,
        size: '850 sq ft',
        beds: '1 King',
        capacity: 4,
        view: 'Floor-to-ceiling ocean view',
        description: 'Wake up to uninterrupted horizon views in our signature Oceanfront Suite. Floor-to-ceiling windows, a private terrace, and dedicated butler service make this our most indulgent accommodation.',
        amenities: ['Floor-to-ceiling ocean views', 'Private terrace & soaking tub', 'Dedicated butler service', 'Complimentary sunset canapés', 'Premium in-room dining menu', 'Late check-out on request'],
        popular: false,
        featured: true,
    },
    {
        id: 'family',
        name: 'Family Oceanview Room',
        tagline: 'Space and comfort for the whole family',
        category: 'family',
        img: '🏖️',
        imageUrl: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80',
        gradient: 'from-cyan-400 to-sky-600',
        price: 259,
        peakPrice: 299,
        size: '540 sq ft',
        beds: '2 Queen + Bunk Nook',
        capacity: 5,
        view: 'Partial ocean view',
        description: "Purpose-built for families, with a kid-friendly bunk nook, connecting-room options, and easy access to the pool deck and kids' club — without compromising on ocean views.",
        amenities: ['Connecting room option', 'Bunk nook for children', "Pool deck & kids' club access", 'Board games & streaming library', 'Mini fridge stocked with snacks', 'Stroller & crib on request'],
        popular: false,
        featured: false,
    },
    {
        id: 'penthouse',
        name: 'Presidential Penthouse',
        tagline: 'The pinnacle of the Aurelia experience',
        category: 'suite',
        img: '👑',
        imageUrl: 'https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?auto=format&fit=crop&w=800&q=80',
        gradient: 'from-purple-400 to-indigo-600',
        price: 749,
        peakPrice: 899,
        size: '1,650 sq ft',
        beds: '2 King + Study',
        capacity: 6,
        view: '360° panoramic ocean & city view',
        description: 'Occupying the top floor of the resort, the Presidential Penthouse offers a private rooftop plunge pool, panoramic views in every direction, and round-the-clock personal service for a truly unforgettable stay.',
        amenities: ['Private rooftop plunge pool', 'Two king bedrooms + private study', 'Personal butler & chauffeur service', 'In-suite dining by our Executive Chef', 'Complimentary airport transfer', 'Dedicated check-in & check-out lounge'],
        popular: false,
        featured: false,
    },
    {
        id: 'accessible',
        name: 'Accessible Garden Room',
        tagline: 'Thoughtfully designed for every guest',
        category: 'standard',
        img: '♿',
        imageUrl: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=800&q=80',
        gradient: 'from-lime-400 to-emerald-600',
        price: 189,
        peakPrice: 219,
        size: '400 sq ft',
        beds: '1 King',
        capacity: 2,
        view: 'Garden view',
        description: 'Fully accessible from entry to bath, this ground-floor garden room features roll-in showers, widened doorways, and lowered fixtures — all without sacrificing the comfort and style found across Aurelia.',
        amenities: ['Roll-in accessible shower', 'Widened doorways & turning space', 'Lowered closet & bathroom fixtures', 'Visual & vibrating alert kit available', 'Ground-floor, near main entrance', 'Free Wi-Fi & smart TV'],
        popular: false,
        featured: false,
    },
];
