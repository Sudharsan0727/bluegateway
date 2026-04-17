import switzerlandImg from '../assets/switzerland.png';
import baliImg from '../assets/bali.png';
import parisImg from '../assets/paris.png';
import santoriniImg from '../assets/santorini.png';
import galleryTokyo from '../assets/gallery-tokyo.png';
import gallerySafari from '../assets/gallery-safari.png';

export const tours = [
  { 
    id: 1, 
    title: 'Grand Tour of Switzerland', 
    location: 'Swiss Alps', 
    price: 2499, 
    oldPrice: 2899, 
    rating: 4.9, 
    reviews: 128, 
    img: switzerlandImg, 
    duration: '10 Days', 
    tag: 'Best Seller',
    type: 'Luxury',
    description: 'Experience the pinnacle of Swiss hospitality and natural beauty. This journey takes you through the snow-capped peaks of the Alps, pristine lakeside towns, and vibrant cities. Enjoy luxury accommodations and private excursions that capture the essence of Switzerland.',
    highlights: ['Scenic train rides on the Glacier Express', 'Private boutique chocolate tasting', 'Summit stay at Matterhorn glacier paradise', 'Guided tour of Old Town Zurich'],
    itinerary: [
      { day: 1, title: 'Arrival in Zurich', desc: 'Welcome to Switzerland. Private transfer to your hotel and evening welcome dinner.' },
      { day: 2, title: 'Lucerne Exploration', desc: 'Explore the Chapel Bridge and enjoy a private cruise on Lake Lucerne.' },
      { day: 3, title: 'Mount Titlis Adventure', desc: 'Ascend to the summit for breathtaking 360-degree views of the Alps.' },
      { day: 4, title: 'Interlaken & Jungfrau', desc: 'Journey to the "Top of Europe" and stay in the heart of Interlaken.' },
      { day: 5, title: 'Bernese Oberland', desc: 'Hike through Alpine meadows and visit traditional mountain villages.' },
      { day: 6, title: 'Zermatt & Matterhorn', desc: 'Private transfer to car-free Zermatt and sunset views of the Matterhorn.' },
      { day: 7, title: 'Glacier Express', desc: 'Full day on the world\'s slowest express train with panoramic views.' },
      { day: 8, title: 'St. Moritz Luxury', desc: 'Indulge in high-end shopping and world-class spa treatments.' },
      { day: 9, title: 'Lugano & Italian Lakes', desc: 'Experience the Mediterranean flair of southern Switzerland.' },
      { day: 10, title: 'Departure', desc: 'Final breakfast and private transfer to Milan or Zurich for your flight.' }
    ],
    inclusions: ['Luxury 5-star hotel stays', 'Daily gourmet breakfast', 'Private English-speaking guides', 'All first-class train transfers', 'Entrance fees to all attractions'],
    gallery: [switzerlandImg, galleryTokyo, gallerySafari] // Placeholders for now
  },
  { 
    id: 2, 
    title: 'Tropical Paradise Escape', 
    location: 'Bali, Indonesia', 
    price: 1299, 
    oldPrice: 1599, 
    rating: 4.8, 
    reviews: 245, 
    img: baliImg, 
    duration: '7 Days', 
    tag: 'Limited Offer',
    type: 'Honeymoon',
    description: 'Immerse yourself in the spiritual and natural wonders of Bali. From the lush jungles of Ubud to the pristine beaches of Seminyak, this tour offers a perfect blend of relaxation and adventure.',
    highlights: ['Spiritual healing ceremony in Ubud', 'Sunrise trek to Mount Batur', 'Private infinity pool villa stay', 'Traditional Balinese cooking class'],
    itinerary: [
      { day: 1, title: 'Ubud Welcome', desc: 'Arrival and transfer to your jungle villa in Ubud.' },
      { day: 2, title: 'Temple Wonders', desc: 'Visit Tirta Empul and the Tegalalang Rice Terraces.' },
      { day: 3, title: 'Jungle Adventure', desc: 'White water rafting and afternoon spa treatment.' },
      { day: 4, title: 'Seminyak Sands', desc: 'Transfer to the coast and sunset at Tanah Lot.' },
      { day: 5, title: 'Island Hopping', desc: 'Private boat trip to Nusa Penida for snorkeling.' },
      { day: 6, title: 'Leisure Day', desc: 'Optional surf lessons or beach club relaxation.' },
      { day: 7, title: 'Farewell', desc: 'Last tropical breakfast and airport transfer.' }
    ],
    inclusions: ['Boutique villa accommodations', 'Private driver/guide', 'Daily breakfast and select lunches', 'All activities in itinerary'],
    gallery: [baliImg, galleryTokyo, gallerySafari]
  },
  { 
    id: 3, 
    title: 'European Romance Tour', 
    location: 'Paris, France', 
    price: 1899, 
    oldPrice: 2199, 
    rating: 4.9, 
    reviews: 312, 
    img: parisImg, 
    duration: '5 Days', 
    tag: 'Trending',
    type: 'Romantic',
    description: 'Fall in love with the City of Lights all over again. Explore hidden gems, enjoy gourmet dining, and experience the timeless elegance of Paris.',
    highlights: ['Sunset Seine River cruise with dinner', 'Private tour of the Louvre after hours', 'Macaron making workshop', 'Montmartre artist walk'],
    itinerary: [
      { day: 1, title: 'Parisian Arrival', desc: 'Transfer to your hotel near the Eiffel Tower.' },
      { day: 2, title: 'Art & History', desc: 'Guided tour of the Louvre and Tuileries Garden.' },
      { day: 3, title: 'Bohemian Spirit', desc: 'Explore Montmartre and Sacré-Cœur.' },
      { day: 4, title: 'Palace of Versailles', desc: 'Full day trip to the royal gardens and palace.' },
      { day: 5, title: 'Au Revoir', desc: 'Morning shopping at Galeries Lafayette and flight home.' }
    ],
    inclusions: ['4-star boutique hotel stays', 'Gourmet daily breakfast', 'Seine River dinner cruise', 'Paris Pass for attractions'],
    gallery: [parisImg, galleryTokyo, gallerySafari]
  },
  { 
    id: 4, 
    title: 'Aegean Sunset Wonders', 
    location: 'Santorini, Greece', 
    price: 1499, 
    oldPrice: 1799, 
    rating: 5.0, 
    reviews: 89, 
    img: santoriniImg, 
    duration: '6 Days', 
    tag: 'Top Rated',
    type: 'Trending',
    description: 'Discover the iconic blue domes and volcanic landscapes of Santorini. This tour captures the most picturesque spots and offers authentic Greek experiences.',
    highlights: ['Private catamaran caldera cruise', 'Oia sunset viewpoint access', 'Wine tasting at volcanic vineyards', 'Ancient Akrotiri tour'],
    itinerary: [
      { day: 1, title: 'Arrival in Fira', desc: 'Transfer to your cliffside hotel with caldera views.' },
      { day: 2, title: 'Oia Exploration', desc: 'Guided walk through Oia and sunset viewing.' },
      { day: 3, title: 'Volcanic History', desc: 'Boat trip to the volcano and hot springs.' },
      { day: 4, title: 'Beach & Wine', desc: 'Visit Perissa Black Sand Beach and local winery.' },
      { day: 5, title: 'Leisure Day', desc: 'Enjoy the pool or explore the shops in Fira.' },
      { day: 6, title: 'Departure', desc: 'Final Greek coffee and transfer to the airport.' }
    ],
    inclusions: ['Cave hotel accommodations', 'Private transfers', 'Daily Greek breakfast', 'Catamaran sunset cruise'],
    gallery: [santoriniImg, galleryTokyo, gallerySafari]
  },
  { 
    id: 9, 
    title: 'Tokyo Neon Escape', 
    location: 'Tokyo, Japan', 
    price: 2199, 
    oldPrice: 2599, 
    rating: 4.8, 
    reviews: 174, 
    img: galleryTokyo, 
    duration: '8 Days', 
    tag: 'New Arrival',
    type: 'Adventure',
    description: 'Dive into the buzzing energy of Tokyo. From ancient temples to futuristic districts, this tour reveals the many faces of the world\'s largest metropolis.',
    highlights: ['Robot Restaurant dinner show', 'Harajuku street food crawl', 'Tsukiji Outer Market tour', 'Shibuya Crossing vantage point'],
    itinerary: [
      { day: 1, title: 'Hello Tokyo', desc: 'Arrival at Narita/Haneda and hotel check-in in Shinjuku.' },
      { day: 2, title: 'Tradition Meets Future', desc: 'Senso-ji Temple and Tokyo Skytree.' },
      { day: 3, title: 'Pop Culture Day', desc: 'Harajuku, Takeshita Street, and Shibuya.' },
      { day: 4, title: 'Mount Fuji Day Trip', desc: 'Scenic bus tour to Hakone and Lake Ashi.' },
      { day: 5, title: 'Cyberpunk Evening', desc: 'Electric Town Akihabara and themed cafes.' },
      { day: 6, title: 'Luxury Ginza', desc: 'High-end shopping and Michelin-star sushi lunch.' },
      { day: 7, title: 'Digital Art', desc: 'Visit TeamLab Borderless immersive museum.' },
      { day: 8, title: 'Sayonara', desc: 'Final souvenir shopping and airport transfer.' }
    ],
    inclusions: ['Central Tokyo hotel stays', 'Pocket Wi-Fi rental', 'Suica card with initial credit', 'Expert local guide for select days'],
    gallery: [galleryTokyo, switzerlandImg, gallerySafari]
  }
];
