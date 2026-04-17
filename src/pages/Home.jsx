import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  MapPin,
  Calendar,
  Users,
  Search,
  ArrowRight,
  Star,
  Plus,
  Phone,
  Mail,
  ChevronRight,
  ChevronDown,
  Globe,
  Clock,
  Compass,
  Zap,
  Plane,
  Ship,
  CheckCircle2,
  ChevronLeft,
  ShieldCheck,
} from 'lucide-react';

import { tours } from '../data/tours';
import heroBg from '../assets/hero-bg.png';
import galleryAlps from '../assets/gallery-alps.png';
import galleryBali from '../assets/gallery-bali.png';
import galleryParis from '../assets/gallery-paris.png';
import gallerySafari from '../assets/gallery-safari.png';
import galleryTokyo from '../assets/gallery-tokyo.png';
import galleryAmalfi from '../assets/gallery-amalfi.png';
import logo from '../assets/logo.png';

const FLIGHT_IMG = 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop';
const CRUISE_IMG = 'https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=3648&auto=format&fit=crop';

const VIDEO_DESTINATIONS = [
  {
    id: 1,
    title: 'GREAT WALL',
    location: 'China',
    price: '55,000',
    features: ['Mountain View Stay', 'Group Activities', '6 Nights 5 Days Trip'],
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=2000&auto=format&fit=crop',
    video: 'https://youtu.be/2AR0EnEzaj4?si=3ou9kxT1r4kIOxO5',
    videoId: '2AR0EnEzaj4'
  },
  {
    id: 2,
    title: 'DUBAI SKYLINES',
    location: 'Dubai',
    price: '1,299',
    features: ['Burj Khalifa View Stay', 'Desert Safari Included', '5 Nights 6 Days Trip'],
    image: 'https://images.unsplash.com/photo-1512453979798-5ea904ac66de?q=80&w=2000&auto=format&fit=crop',
    video: 'https://youtu.be/ahy5o5nT4oI?si=jUWc8fVDsUtKkICF',
    videoId: 'ahy5o5nT4oI'
  },
  {
    id: 3,
    title: 'EIFFEL TOWER',
    location: 'Paris',
    price: '1,499',
    features: ['Seine River Cruise', 'Eiffel Tower Summit', 'City of Love Tour'],
    image: 'https://images.unsplash.com/photo-1543349689-9a4d426bee8e?q=80&w=2000&auto=format&fit=crop',
    video: 'https://youtu.be/ORfbeJHAifs?si=VPTWiecA7cPz97He',
    videoId: 'ORfbeJHAifs'
  }
];

const VanguardShowcase = () => {
  const [active, setActive] = useState(0);
  const data = [
    { title: "Matterhorn Grand Retreat", tag: "Summit Luxury", img: galleryAlps, desc: "A architectural masterpiece built into the cliffside of the Swiss Alps." },
    { title: "Ubud Spiritual Voyage", tag: "Tropical Zen", img: galleryBali, desc: "An immersive journey into the lush emerald heart of Bali's jungle sanctuaries." },
    { title: "Ginza Future Pulse", tag: "Cyber Luxury", img: galleryTokyo, desc: "Experience the neon-lit apex of modern living in the heart of Tokyo." },
    { title: "Amalfi Azure Dreams", tag: "Mediterranean", img: galleryAmalfi, desc: "Sun-drenched terraces overlooking the shimmer of the deep Italian blue." }
  ];

  return (
    <div className="vanguard-container">
      <div className="vanguard-nav">
        {data.map((item, idx) => (
          <div
            key={idx}
            className={`case-item ${active === idx ? 'active' : ''}`}
            onMouseEnter={() => setActive(idx)}
          >
            <span className="case-num">0{idx + 1}</span>
            <h3 className="case-title">{item.title}</h3>
          </div>
        ))}
      </div>
      <div className="vanguard-display">
        <div className="vanguard-overlay"></div>
        <div className="vanguard-img-reel">
          {data.map((item, idx) => (
            <div key={idx} className={`vanguard-item ${active === idx ? 'block' : 'hidden'}`}>
              <img
                src={item.img}
                className={`active`}
                alt={item.title}
              />
              <div className="vanguard-info-box">
                <span className="text-brand-orange text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">{item.tag}</span>
                <h4 className="font-['Cinzel'] text-2xl text-[#0a1d37] mb-4">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                <button className="flex items-center gap-2 text-[#0a1d37] font-black uppercase tracking-widest text-[10px] hover:text-brand-orange transition-colors">
                  Explore Adventure <ArrowRight size={14} className="text-brand-orange" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AuroraSuiteSection = () => {
  const [activeColor, setActiveColor] = useState('#2a5da8');

  const data = [
    { id: 'alps', img: galleryAlps, title: "Alps", color: "#b3e5fc" },
    { id: 'bali', img: galleryBali, title: "Bali", color: "#a5d6a7" },
    { id: 'paris', img: galleryParis, title: "Paris", color: "#ffe082" },
    { id: 'safari', img: gallerySafari, title: "Safari", color: "#ffab91" },
    { id: 'tokyo', img: galleryTokyo, title: "Tokyo", color: "#ce93d8" }
  ];

  return (
    <section className="aurora-container bg-[#050b14]" style={{ '--aurora-color': activeColor }}>
      <div className="aurora-bg-flare"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-20 mb-24 text-center">
        <span className="text-brand-orange text-[10px] font-black uppercase tracking-[1em] mb-6 block">Environmental Discovery</span>
        <h2 className="font-['Cinzel'] text-6xl md:text-8xl text-white">The <span className="italic font-light text-brand-orange">Aurora</span></h2>
      </div>

      <div className="aurora-grid">
        {data.map((item) => (
          <div
            key={item.id}
            className="aurora-card group"
            onMouseEnter={() => setActiveColor(item.color)}
            onMouseLeave={() => setActiveColor('#2a5da8')}
          >
            <span className="aurora-label">{item.title}</span>
            <img src={item.img} alt={item.title} />
            <div className="aurora-content">
              <span className="text-brand-orange text-[10px] font-black uppercase tracking-widest mb-3 block">Bespoke Suite</span>
              <h3 className="font-['Cinzel'] text-4xl text-white mb-6 leading-none">{item.title} <br />Edition</h3>
              <button className="flex items-center gap-4 text-white font-black text-[10px] uppercase tracking-[0.4em] hover:text-brand-orange transition-colors">
                Open Gallery <ArrowRight size={14} className="text-brand-orange" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    { q: "Do you offer customizable travel packages?", a: "Absolutely. Every journey we design is bespoke. We start with a consultation to understand your preferences, then curate a specialized itinerary just for you." },
    { q: "What is included in the Luxury Tier pricing?", a: "Our Luxury Tier includes business/first-class flights, 5-star accommodation, private transfers, exclusive access to landmarks, and a dedicated 24/7 concierge." },
    { q: "Can I make changes to my itinerary after booking?", a: "Yes, we understand plans change. We offer flexible modification policies up to 14 days before departure for most of our destinations." },
    { q: "Do you provide travel insurance?", a: "We partner with premium insurers to offer comprehensive coverage. While optional, we highly recommend it for complete peace of mind." },
    { q: "How are visa processes handled?", a: "Our dedicated concierge team manages the entire visa application process for you, providing document checklists and appointment scheduling." }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] -right-[5%] w-[800px] h-[800px] rounded-full bg-orange-50/50 blur-3xl opacity-60"></div>
        <div className="absolute bottom-[10%] -left-[5%] w-[600px] h-[600px] rounded-full bg-blue-50/50 blur-3xl opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Left Column: Heading */}
          <div className="lg:col-span-5 space-y-10 lg:sticky static top-24">
            <div className="space-y-4">
              <span className="font-['Bellefair'] text-4xl md:text-7xl text-[#2a5da8] block mb-2">The Fine Print</span>
              <h2 className="font-['Bellefair'] text-2xl md:text-6xl leading-tight text-brand-orange mb-6 uppercase tracking-wider">
                Curated Clarity
              </h2>
            </div>

            <p className="text-gray-500 text-lg leading-relaxed font-light max-w-md">
              Transparency is the ultimate luxury. We've gathered the details discerning travelers seek most often, allowing you to dream without hesitation.
            </p>

            <div className="flex flex-col gap-4">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <Mail size={18} />
                  </div>
                  <span className="font-['Cinzel'] font-bold text-[#0a1d37]">Still have questions?</span>
                </div>
                <p className="text-sm text-gray-500 mb-4 md:pl-14">Our concierge team is available 24/7 to provide personalized answers.</p>
                <button className="md:ml-14 text-xs font-black uppercase tracking-widest text-brand-orange flex items-center gap-2 hover:gap-4 transition-all">
                  Contact Concierge <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {faqs.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className={`group border-b border-gray-100 pb-6 transition-all duration-500 cursor-pointer ${activeIndex === index ? 'pb-10 pt-4' : 'pt-4 hover:border-brand-orange/30'}`}
              >
                <div className="flex justify-between items-center gap-6">
                  <span className={`font-['Cinzel'] text-xl lg:text-2xl transition-colors duration-300 ${activeIndex === index ? 'text-brand-orange' : 'text-[#0a1d37] group-hover:text-brand-blue'}`}>
                    0{index + 1}. <span className="ml-2 font-sans font-bold tracking-tight text-lg lg:text-xl text-[#0a1d37] group-hover:text-brand-blue transition-colors">{item.q}</span>
                  </span>

                  <span className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-500 ${activeIndex === index ? 'bg-brand-orange text-white rotate-45' : 'bg-gray-50 text-gray-400 group-hover:bg-brand-blue group-hover:text-white'}`}>
                    <Plus size={16} />
                  </span>
                </div>

                <div className={`grid transition-all duration-500 ease-in-out ${activeIndex === index ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                  <div className="overflow-hidden pl-0 lg:pl-[1.5rem]">
                    <p className="text-gray-500 leading-relaxed text-base border-l-2 border-brand-orange/20 pl-6">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Trending');
  const [trendingSliderIndex, setTrendingSliderIndex] = useState(0);
  const trendingSliderRef = useRef(null);
  const [isSearching, setIsSearching] = useState(false);
  const [activeSearchCategory, setActiveSearchCategory] = useState(null);
  const [effortlessImage, setEffortlessImage] = useState(FLIGHT_IMG);
  const [activeDestination, setActiveDestination] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(4);

  const nextDestination = () => {
    setActiveDestination((prev) => (prev + 1) % VIDEO_DESTINATIONS.length);
  };

  const prevDestination = () => {
    setActiveDestination((prev) => (prev - 1 + VIDEO_DESTINATIONS.length) % VIDEO_DESTINATIONS.length);
  };

  useEffect(() => {
    setIsVideoPlaying(false);
    const timer = setTimeout(() => {
      setIsVideoPlaying(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [activeDestination]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextDestination();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextDestination]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsPerView(1.2);
      else if (window.innerWidth < 1024) setCardsPerView(2.5);
      else setCardsPerView(4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const tourGrid = {
    Trending: tours.filter(t => t.tag === 'Best Seller' || t.tag === 'Limited Offer' || t.tag === 'Trending' || t.tag === 'Top Rated' || t.tag === 'New Arrival'),
    Adventure: tours.filter(t => t.type === 'Adventure'),
    Honeymoon: tours.filter(t => t.type === 'Honeymoon')
  };

  const currentTours = tourGrid[activeTab];
  const maxSliderIndex = Math.max(0, currentTours.length - Math.floor(cardsPerView));

  const slidePrev = () => setTrendingSliderIndex((i) => Math.max(0, i - 1));
  const slideNext = () => setTrendingSliderIndex((i) => Math.min(maxSliderIndex, i + 1));

  useEffect(() => { setTrendingSliderIndex(0); }, [activeTab]);

  const handleSearch = (e) => {
    e.stopPropagation();
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      const discoverSection = document.getElementById('discover-tours');
      if (discoverSection) {
        discoverSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={heroBg}
            alt="Hero Background"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <span className="banner-tagline inline-block bg-brand-orange/90 backdrop-blur-md text-white px-5 py-1.5 rounded-full text-sm mb-6 shadow-lg">
              Explore the Extraordinary
            </span>
            <h1 className="banner-heading text-4xl md:text-8xl text-white mb-8 drop-shadow-2xl font-black italic leading-[1.1]">
              GET THE VISA. <br />
              <span className="banner-subtext text-3xl md:text-7xl text-brand-orange">Without Any Stress.</span>
            </h1>
            <p className="text-base md:text-xl text-white/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Tailored adventures designed for the discerning traveler. No templates, just memories.
            </p>
          </div>

          {/* Minimalist Ether Search Widget */}
          <div className="max-w-5xl mx-auto mt-6 md:mt-12 animate-fade-in-up transition-all" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white/95 backdrop-blur-md rounded-2xl md:rounded-[50px] shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] py-4 md:py-3 px-4 md:px-6 border border-gray-100/50">
              <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-2 relative">

                {/* Destination */}
                <div
                  className={`flex-1 flex items-center gap-3 pl-4 md:border-r border-gray-100 group cursor-pointer py-2 md:py-1 transition-all rounded-xl md:rounded-full relative ${activeSearchCategory === 'destination' ? 'bg-gray-50' : ''}`}
                  onClick={() => setActiveSearchCategory(activeSearchCategory === 'destination' ? null : 'destination')}
                >
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#2a5da8]">
                    <MapPin size={16} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Destination</span>
                    <input
                      className="bg-transparent font-medium text-gray-700 border-none p-0 outline-none text-base placeholder:text-gray-300 w-full"
                      placeholder="Where to go?"
                      onChange={(e) => e.stopPropagation()}
                    />
                  </div>
                  {activeSearchCategory === 'destination' && (
                    <div className={`absolute left-0 md:left-4 w-full md:w-80 bg-white/95 backdrop-blur-xl rounded-2xl p-4 z-50 animate-fade-in border border-white/20 transition-all duration-300 top-full mt-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)]`}>
                      <div className={`absolute w-3 h-3 bg-white/95 rotate-45 transition-all duration-300 -top-1.5 left-6 border-l border-t border-white/20`}></div>
                      <p className="text-[10px] font-bold uppercase text-gray-400 mb-3 ml-2 tracking-widest">Top Destinations</p>
                      <div className="grid grid-cols-1 gap-1">
                        {[
                          { name: 'Switzerland', type: 'Luxury Alps', icon: '🇨🇭' },
                          { name: 'Bali, Indonesia', type: 'Tropical Bliss', icon: '🇮🇩' },
                          { name: 'Paris, France', type: 'Romantic Escape', icon: '🇫🇷' },
                          { name: 'Santorini, Greece', type: 'Island Wonders', icon: '🇬🇷' }
                        ].map(dest => (
                          <div key={dest.name} className="flex items-center justify-between px-3 py-2.5 hover:bg-blue-50/50 rounded-xl transition-all group/item cursor-pointer">
                            <div className="flex items-center gap-3">
                              <span className="text-xl">{dest.icon}</span>
                              <div className="flex flex-col">
                                <span className="text-sm font-bold text-gray-800">{dest.name}</span>
                                <span className="text-[10px] text-gray-400 font-medium uppercase">{dest.type}</span>
                              </div>
                            </div>
                            <ChevronRight size={14} className="text-gray-300 group-hover/item:text-[#2a5da8] transition-all transform group-hover/item:translate-x-1" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* When */}
                <div
                  className={`flex-1 flex items-center gap-3 px-6 md:border-r border-gray-100 group cursor-pointer py-2 md:py-1 transition-all rounded-xl md:rounded-full relative ${activeSearchCategory === 'when' ? 'bg-gray-50' : ''}`}
                  onClick={() => setActiveSearchCategory(activeSearchCategory === 'when' ? null : 'when')}
                >
                  <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-[#f58232]">
                    <Calendar size={16} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">When</span>
                    <span className="font-medium text-gray-700 text-base">Anytime</span>
                  </div>
                  {activeSearchCategory === 'when' && (
                    <div className={`absolute left-0 md:left-6 w-full md:w-72 bg-white/95 backdrop-blur-xl rounded-2xl p-4 z-50 animate-fade-in border border-white/20 transition-all duration-300 top-full mt-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)]`}>
                      <div className={`absolute w-3 h-3 bg-white/95 rotate-45 transition-all duration-300 -top-1.5 left-10 border-l border-t border-white/20`}></div>
                      <p className="text-[10px] font-bold uppercase text-gray-400 mb-3 ml-2 tracking-widest">Recommended Seasons</p>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { m: 'Jan - Mar', label: 'Winter Bliss' },
                          { m: 'Apr - Jun', label: 'Spring Bloom' },
                          { m: 'Jul - Sep', label: 'Summer Sun' },
                          { m: 'Oct - Dec', label: 'Autumn Gold' }
                        ].map(m => (
                          <button key={m.m} className="px-3 py-3 text-xs font-semibold text-gray-600 hover:bg-orange-50 hover:text-[#f58232] rounded-xl transition-all border border-transparent hover:border-orange-100/50 text-left flex flex-col gap-0.5">
                            <span className="font-bold">{m.m}</span>
                            <span className="text-[9px] opacity-60 uppercase">{m.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Travel Style */}
                <div
                  className={`flex-1 flex items-center gap-3 px-6 group cursor-pointer py-2 md:py-1 transition-all rounded-xl md:rounded-full relative ${activeSearchCategory === 'style' ? 'bg-gray-50' : ''}`}
                  onClick={() => setActiveSearchCategory(activeSearchCategory === 'style' ? null : 'style')}
                >
                  <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-[#6366f1]">
                    <Compass size={16} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Travel Style</span>
                    <span className="font-medium text-gray-700 text-base">Luxury Adventure</span>
                  </div>
                  {activeSearchCategory === 'style' && (
                    <div className={`absolute left-0 md:left-6 w-full md:w-72 bg-white/95 backdrop-blur-xl rounded-2xl p-4 z-50 animate-fade-in border border-white/20 transition-all duration-300 top-full mt-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)]`}>
                      <div className={`absolute w-3 h-3 bg-white/95 rotate-45 transition-all duration-300 -top-1.5 left-10 border-l border-t border-white/20`}></div>
                      <p className="text-[10px] font-bold uppercase text-gray-400 mb-3 ml-2 tracking-widest">Select Your Vibe</p>
                      <div className="space-y-1">
                        {[
                          { name: 'Solo Backpacking', color: 'bg-emerald-50 text-emerald-600', icon: <Compass size={14} /> },
                          { name: 'Family Holiday', color: 'bg-blue-50 text-blue-600', icon: <Users size={14} /> },
                          { name: 'Luxury Escape', color: 'bg-amber-50 text-amber-600', icon: <Star size={14} /> },
                          { name: 'Adventure Trek', color: 'bg-rose-50 text-rose-600', icon: <Zap size={14} /> }
                        ].map(style => (
                          <button key={style.name} className="w-full flex items-center gap-3 px-3 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 rounded-xl transition-all text-left group/style">
                            <div className={`w-8 h-8 rounded-lg ${style.color} flex items-center justify-center transition-transform group-hover/style:scale-110`}>
                              {style.icon}
                            </div>
                            {style.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Search Button */}
                <div className="flex-shrink-0">
                  <button
                    onClick={handleSearch}
                    disabled={isSearching}
                    className="bg-[#2a5da8] hover:bg-[#1e40af] text-white rounded-full px-8 py-4 flex items-center gap-3 transition-all duration-300 shadow-lg shadow-blue-500/10 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSearching ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        <span className="font-semibold text-xs uppercase tracking-widest">Searching...</span>
                      </>
                    ) : (
                      <>
                        <Search size={18} />
                        <span className="font-semibold text-xs uppercase tracking-widest">Find Gateway</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust & Reassurance Bar */}
      <section className="bg-white border-b border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <Globe size={24} />, title: "50+ Countries", desc: "Expert local knowledge" },
            { icon: <Star size={24} />, title: "4.9/5 Rating", desc: "Based on 12k reviews" },
            { icon: <ShieldCheck size={24} />, title: "Full Protection", desc: "100% Secure bookings" },
            { icon: <Clock size={24} />, title: "24/7 Concierge", desc: "Always by your side" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <div className="text-brand-blue p-3 bg-gray-50 rounded-2xl group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 leading-none mb-1">{item.title}</h4>
                <p className="text-xs text-gray-500 font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Discover Section with Tabs */}
      <section id="discover-tours" className="py-24 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <div className="max-w-4xl">
              <span className="font-['Bellefair'] text-4xl md:text-7xl text-[#2a5da8] block mb-2">Handpicked Handcrafted</span>
              <h2 className="font-['Bellefair'] text-2xl md:text-6xl leading-tight text-brand-orange mb-6 uppercase tracking-wider">Trending Now</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Skip the tourists, meet the locals. Our current most popular curated experiences that you won't find in guidebooks.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex bg-gray-100 p-1.5 rounded-2xl self-start lg:self-end">
              {['Trending', 'Adventure', 'Honeymoon'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 md:px-8 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === tab
                    ? 'bg-white text-brand-blue shadow-lg'
                    : 'text-gray-500 hover:text-gray-800'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <button
              onClick={slidePrev}
              disabled={trendingSliderIndex === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-brand-blue"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="overflow-hidden">
              <div
                ref={trendingSliderRef}
                className="flex gap-4 md:gap-8 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(calc(-${trendingSliderIndex} * (100% / ${cardsPerView} + ${window.innerWidth < 768 ? '1rem' : '2rem'} / ${cardsPerView})))` }}
              >
                {currentTours.map((tour) => (
                  <Link
                    to={`/tour/${tour.id}`}
                    key={tour.id}
                    className="group bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 transition-all hover:shadow-[0_40px_80px_rgba(42,93,168,0.15)] hover:-translate-y-2 flex flex-col h-full flex-shrink-0"
                    style={{ width: `calc((100% - ${(cardsPerView - 1)} * ${window.innerWidth < 768 ? '1rem' : '2rem'}) / ${cardsPerView})` }}
                  >
                    <div className="relative h-80 overflow-hidden shrink-0">
                      <img src={tour.img} alt={tour.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                      <div className="absolute top-5 left-5">
                        <span className="bg-brand-blue/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                          {tour.tag}
                        </span>
                      </div>
                      <div className="absolute bottom-5 right-5">
                        <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-xl flex items-center gap-1.5">
                          <Clock size={14} className="text-brand-orange" />
                          <span className="text-xs font-bold text-gray-800">{tour.duration}</span>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="p-7 flex flex-col flex-grow">
                      <div className="flex items-center justify-between mb-4">
                        <span className="flex items-center gap-1 text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                          <MapPin size={12} className="text-brand-orange" /> {tour.location}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star size={14} className="text-brand-orange fill-brand-orange" />
                          <span className="text-sm font-bold">{tour.rating}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-gray-900 mb-6 leading-tight group-hover:text-brand-blue transition-colors line-clamp-2">{tour.title}</h3>

                      <div className="flex items-center justify-between mt-auto border-t border-gray-50 pt-5">
                        <div>
                          <span className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Starting From</span>
                          <div className="flex items-end gap-2">
                            <span className="text-2xl font-bold text-brand-blue leading-none">${tour.price}</span>
                            <span className="text-sm font-bold text-gray-300 line-through mb-0.5">${tour.oldPrice}</span>
                          </div>
                        </div>
                        <div className="bg-gray-100 text-gray-900 w-11 h-11 rounded-full flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg hover:scale-110">
                          <ChevronRight size={20} />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <button
              onClick={slideNext}
              disabled={trendingSliderIndex >= maxSliderIndex}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-12 h-12 rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-brand-blue"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {currentTours.length > cardsPerView && (
            <div className="flex justify-center gap-2 mt-10">
              {Array.from({ length: maxSliderIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTrendingSliderIndex(i)}
                  className={`transition-all duration-300 rounded-full ${
                    trendingSliderIndex === i
                      ? 'w-8 h-2.5 bg-brand-blue'
                      : 'w-2.5 h-2.5 bg-gray-300 hover:bg-brand-orange'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Effortless Travel Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <div className="bg-[#dbeafe] p-10 rounded-3xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-[#0a1d37] mb-3">We Take Care of Everything</h3>
                  <p className="text-[#0a1d37]/70 font-medium leading-relaxed max-w-sm">
                    From private rides to group excursions, we ensure smooth and comfortable travel from beginning to end.
                  </p>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
              </div>

              <div className="rounded-3xl overflow-hidden h-[400px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative group">
                <img
                  src={effortlessImage}
                  alt="Effortless Travel"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1d37]/40 to-transparent"></div>
              </div>
            </div>

            <div>
              <div className="mb-12">
                <span className="font-['Bellefair'] text-6xl md:text-7xl text-[#2a5da8] block mb-2">Effortless</span>
                <h2 className="font-['Bellefair'] text-3xl md:text-6xl leading-tight text-brand-orange mb-6 uppercase tracking-wider">Travel</h2>
                <h3 className="text-2xl font-semibold text-gray-800">Transport</h3>
              </div>

              <div className="space-y-4">
                <div
                  onMouseEnter={() => setEffortlessImage(CRUISE_IMG)}
                  onMouseLeave={() => setEffortlessImage(FLIGHT_IMG)}
                  className="group bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-300 flex gap-6 items-start cursor-pointer hover:border-brand-orange/20"
                >
                  <div className="w-16 h-16 rounded-xl bg-orange-50 flex items-center justify-center shrink-0 group-hover:bg-brand-orange transition-colors duration-300">
                    <Ship size={28} className="text-brand-orange group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Cruise</h4>
                    <p className="text-gray-500 text-sm leading-relaxed font-medium">
                      Sail in style—choose from perfectly timed voyages aligned with port schedules, offering seamless boarding and smooth sailing from shore to sea.
                    </p>
                  </div>
                </div>

                <div
                  onMouseEnter={() => setEffortlessImage(FLIGHT_IMG)}
                  className="group bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-300 flex gap-6 items-start cursor-pointer hover:border-brand-blue/20"
                >
                  <div className="w-16 h-16 rounded-xl bg-orange-50 flex items-center justify-center shrink-0 group-hover:bg-brand-orange transition-colors duration-300">
                    <Plane size={28} className="text-brand-orange group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Flight Booking</h4>
                    <p className="text-gray-500 text-sm leading-relaxed font-medium">
                      Fly with ease—choose from perfectly timed flights aligned with airport schedules, ensuring smooth check-ins, swift connections, and stress-free travel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic Journey Section */}
      <section
        className="relative h-[500px] flex items-center justify-center overflow-hidden bg-fixed bg-center bg-cover py-12"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(245,130,50,0.35),transparent_60%)] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.8),transparent_70%)] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(245,130,50,0.25),transparent_50%)] pointer-events-none"></div>

        <div className="relative z-10 text-center px-4 w-full max-w-7xl flex flex-col items-center">
          <h2 className="font-['Bellefair'] text-3xl md:text-5xl text-white font-normal mb-6 leading-tight uppercase tracking-[0.15em] drop-shadow-xl">
            MAKE EVERY JOURNEY <br /> MEMORABLE
          </h2>
          <p className="text-white/80 text-xs md:text-sm font-light mb-8 max-w-xl leading-relaxed">
            Every journey with us is an experience you'll cherish—adventure, comfort, and memories all in one.
          </p>
          <div className="w-full max-w-3xl h-px bg-white/30 mb-8"></div>
          <button 
            onClick={() => navigate('/contact')}
            className="px-10 py-3 bg-[#f58232] text-white font-bold rounded-full hover:bg-white hover:text-[#f58232] transition-colors duration-300 shadow-lg"
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* Travel Destinations Section */}
      <section className="pt-16 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative mb-12 flex flex-col items-center justify-center">
            <span className="font-['Bellefair'] text-6xl md:text-7xl text-[#2a5da8] block mb-2 text-center">Explore Our</span>
            <h2 className="font-['Bellefair'] text-3xl md:text-6xl leading-tight text-brand-orange mb-6 uppercase tracking-wider text-center">Destinations</h2>
            <p className="text-gray-500 font-medium text-center">Trips for 18-35s across 6 continents</p>

            <div className="hidden md:flex gap-4 absolute right-0 bottom-0">
              <button
                onClick={() => {
                  const container = document.getElementById('destinations-scroll-container');
                  if (container) container.scrollBy({ left: -300, behavior: 'smooth' });
                }}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all z-10 bg-white"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => {
                  const container = document.getElementById('destinations-scroll-container');
                  if (container) container.scrollBy({ left: 300, behavior: 'smooth' });
                }}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all z-10 bg-white"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div
            id="destinations-scroll-container"
            className="flex gap-5 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[
              { title: "Europe", img: "https://images.unsplash.com/photo-1491557345352-5929e343eb89?q=80&w=600&auto=format&fit=crop" },
              { title: "Asia", img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=600&auto=format&fit=crop" },
              { title: "New Zealand", img: "https://images.unsplash.com/photo-1589802829985-817e51171b92?q=80&w=600&auto=format&fit=crop" },
              { title: "USA & Canada", img: "https://images.unsplash.com/photo-1516934024742-b461fba47600?q=80&w=600&auto=format&fit=crop" },
              { title: "Africa & The Middle East", img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=600&auto=format&fit=crop" },
              { title: "Latin America", img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=600&auto=format&fit=crop" },
            ].map((dest, i) => (
              <div key={i} className="w-[140px] md:w-[170px] lg:w-[190px] group relative aspect-[5/6] rounded-2xl overflow-hidden cursor-pointer snap-start shrink-0">
                <img
                  src={dest.img}
                  alt={dest.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 pt-20 pb-6 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center">
                  <span className="text-white font-bold text-base drop-shadow-md text-center px-1 leading-tight">{dest.title}</span>
                </div>
              </div>
            ))}

            <div className="w-[140px] md:w-[170px] lg:w-[190px] bg-[#f58232] rounded-2xl aspect-[5/6] flex flex-col items-center justify-center cursor-pointer hover:bg-[#d9732b] transition-colors group relative overflow-hidden snap-start shrink-0">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl -mr-10 -mt-10"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-black/10 rounded-full blur-lg -ml-10 -mb-5"></div>
              <span className="text-white font-bold text-lg relative z-10 group-hover:scale-105 transition-transform">See all trips</span>
            </div>
          </div>

          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-black"></div>
          </div>
        </div>
      </section>

      {/* Featured Highlights Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-8 relative">
            <div className="max-w-full relative z-10">
              <span className="font-['Bellefair'] text-6xl md:text-7xl text-[#2a5da8] block mb-2">Seasonal Selection</span>
              <h2 className="font-['Bellefair'] text-3xl md:text-6xl leading-tight text-brand-orange mb-6 uppercase tracking-wider md:whitespace-nowrap">Featured Destinations</h2>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 hidden xl:block z-0 pointer-events-none opacity-20">
              <svg className="w-full h-full" viewBox="0 0 400 100" fill="none" preserveAspectRatio="none">
                <path d="M10,50 Q100,0 200,50 T400,50" stroke="#2a5da8" strokeWidth="2" strokeDasharray="10 10" className="flight-path-path" />
              </svg>
              <div className="absolute top-0 left-0 plane-animation">
                <Plane size={24} className="text-brand-blue rotate-45" />
              </div>
            </div>

            <button className="flex items-center gap-3 text-[#0a1d37] font-black uppercase tracking-widest text-xs border-b-2 border-brand-orange pb-2 hover:text-brand-orange transition-colors relative z-10 group">
              Explore Full Archive
              <div className="relative overflow-hidden w-4 h-4">
                <ArrowRight size={16} className="text-brand-orange transform transition-transform group-hover:translate-x-full" />
                <ArrowRight size={16} className="text-brand-orange absolute top-0 -left-full transform transition-transform group-hover:left-0" />
              </div>
            </button>
          </div>

          <div className="explorer-layout">
            <div className="featured-card group">
              <img src={gallerySafari} alt="Featured" />
              <div className="featured-overlay">
                <span className="featured-tag w-fit">Adventure of the Month</span>
                <h3 className="font-['Cinzel'] text-4xl md:text-5xl text-white mb-6 leading-tight">Serengeti <br />Heritage Expedition</h3>
                <p className="text-gray-300 max-w-lg mb-8 text-lg font-medium">A once-in-a-lifetime journey through the heart of the wild. Experience the majesty of the Great Migration from our private luxury camps.</p>
                <div className="flex gap-6">
                  <button className="px-8 py-4 bg-brand-orange rounded-xl text-white font-black uppercase tracking-widest text-xs hover:bg-[#d9732b] transition-all">Book Now</button>
                  <button className="px-8 py-4 bg-white/10 backdrop-blur rounded-xl text-white font-black uppercase tracking-widest text-xs hover:bg-white/20 transition-all">View Itinerary</button>
                </div>
              </div>
            </div>

            <div className="mini-grid">
              {[
                { title: "Alpine soul", img: galleryAlps },
                { title: "Ubud Zen", img: galleryBali },
                { title: "Ginza Pulse", img: galleryTokyo },
                { title: "Azure Coast", img: galleryAmalfi }
              ].map((item, idx) => (
                <div key={idx} className="mini-card group">
                  <img src={item.img} alt={item.title} />
                  <div className="mini-overlay">
                    <span className="mini-title text-center px-4">{item.title}</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest text-[#0a1d37]">Exclusive</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic Text-Clipping */}
      <section className="text-clip-container">
        <div className="text-clip-canvas">
          BLUE GATEWAYS
        </div>
      </section>

      <VanguardShowcase />
      <AuroraSuiteSection />
      <FAQSection />

      {/* Testimonials Section */}
      <section className="py-24 bg-[#f9fafb] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="font-['Bellefair'] text-6xl md:text-7xl text-[#2a5da8] block mb-2">Reflections</span>
            <h2 className="font-['Bellefair'] text-3xl md:text-6xl leading-tight text-brand-orange mb-6 uppercase tracking-wider">Traveler Stories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "The attention to detail was unparalleled. Every transfer, every hotel, every experience felt personally curated just for us.",
                author: "Sarah Jenkins",
                location: "New York, USA",
                trip: "Swiss Alps Retreat",
                img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
              },
              {
                text: "Blue Gateways didn't just book a trip; they crafted a memory. The private sunset cruise in Santorini was the highlight of our year.",
                author: "David Chen",
                location: "Toronto, Canada",
                trip: "Santorini Luxury",
                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
              },
              {
                text: "From the moment we landed in Bali to our departure, everything was seamless. Truly the best travel agency we've ever worked with.",
                author: "Emma Wilson",
                location: "London, UK",
                trip: "Bali Jungle Trek",
                img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100 relative group transition-all hover:-translate-y-2 hover:shadow-[0_20px_60px_-10px_rgba(42,93,168,0.1)]">
                <div className="absolute top-6 right-8 text-6xl text-brand-orange/10 font-serif leading-none">"</div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-orange p-0.5">
                    <img src={testimonial.img} alt={testimonial.author} className="w-full h-full rounded-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0a1d37]">{testimonial.author}</h4>
                    <span className="text-xs text-brand-orange font-bold uppercase tracking-wider block">{testimonial.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic relative z-10">
                  "{testimonial.text}"
                </p>
                <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Trip Verified</span>
                  <span className="text-xs font-bold text-[#2a5da8] bg-blue-50 px-3 py-1 rounded-full">{testimonial.trip}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gray-100 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-orange/5 rounded-full blur-[100px]"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="font-['Bellefair'] text-6xl md:text-7xl text-[#2a5da8] block mb-2">Adventure Awaits</span>
            <h2 className="font-['Bellefair'] text-3xl md:text-6xl leading-tight text-brand-orange mb-6 uppercase tracking-wider">Book Your Consultation</h2>
          </div>

          <div className="relative group">
            <div className="bg-white rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] flex flex-col lg:flex-row relative transition-transform duration-500 group-hover:-translate-y-2 overflow-hidden border border-gray-100">
              <div className="flex-grow p-8 lg:p-12 relative">
                <div className="flex justify-between items-start mb-12">
                  <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-4">Boarding Pass</h3>
                    <img src={logo} alt="Blue Gateway" className="h-16 md:h-20 object-contain" />
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-3 text-brand-orange">
                      <Plane size={20} />
                      <span className="font-black italic uppercase tracking-widest text-sm">BG-INTERNATL</span>
                    </div>
                  </div>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-orange">Passenger Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-gray-200 py-2 font-bold text-gray-800 focus:outline-none focus:border-brand-orange text-lg placeholder:text-gray-500" placeholder="ENTER NAME" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-orange">Destination</label>
                    <div className="relative">
                      <select className="w-full bg-transparent border-b border-gray-200 py-2 font-bold text-gray-800 focus:outline-none focus:border-brand-orange text-lg appearance-none cursor-pointer">
                        <option>PARIS, FRANCE</option>
                        <option>BALI, INDONESIA</option>
                        <option>AMALFI, ITALY</option>
                        <option>ALPS, SWITZERLAND</option>
                        <option>OTHER WORLDWIDE</option>
                      </select>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <ChevronDown size={16} />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-orange">Email Address</label>
                    <input type="email" className="w-full bg-transparent border-b border-gray-200 py-2 font-bold text-gray-800 focus:outline-none focus:border-brand-orange text-lg uppercase placeholder:text-gray-500" placeholder="NAME@EMAIL.COM" />
                  </div>
                  <div className="md:col-span-3 space-y-1 pt-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-orange">Travel Details / Message</label>
                    <textarea rows="1" className="w-full bg-transparent border-b border-gray-200 py-2 font-bold text-gray-800 focus:outline-none focus:border-brand-orange text-lg resize-none placeholder:text-gray-500" placeholder="TELL US ABOUT YOUR DREAM JOURNEY..."></textarea>
                  </div>
                </form>

                <div className="hidden lg:block absolute right-0 top-0 bottom-0 pointer-events-none">
                  <div className="h-full w-px border-r-2 border-dashed border-gray-100 relative">
                    <div className="absolute top-0 -translate-y-1/2 left-0 -translate-x-1/2 w-8 h-8 rounded-full bg-gray-100 shadow-inner"></div>
                    <div className="absolute bottom-0 translate-y-1/2 left-0 -translate-x-1/2 w-8 h-8 rounded-full bg-gray-100 shadow-inner"></div>
                  </div>
                </div>
              </div>

              <div className="lg:w-80 bg-gray-50/50 p-8 lg:p-12 relative flex flex-col justify-between border-l border-gray-50">
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-8 text-center underline underline-offset-8 decoration-dashed decoration-gray-200">Inquiry Stub</h3>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                      <div>
                        <span className="text-[9px] font-black text-gray-400 uppercase block leading-none mb-1">Status</span>
                        <span className="font-mono font-bold text-brand-orange text-xs">AWAITING</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[9px] font-black text-gray-400 uppercase block leading-none mb-1">Priority</span>
                        <span className="font-mono font-bold text-brand-orange text-xs">GOLD</span>
                      </div>
                    </div>
                    <button className="w-full bg-[#0a1d37] p-8 rounded-2xl text-white relative overflow-hidden group/btn flex flex-col items-center justify-center gap-2 hover:bg-[#1a2d47] transition-all">
                      <div className="absolute top-0 right-0 p-2 opacity-5 scale-150 rotate-12 transition-transform group-hover/btn:scale-[2] pointer-events-none">
                        <Globe size={100} />
                      </div>
                      <span className="block text-[10px] font-black uppercase tracking-widest text-brand-orange mb-1 relative z-10">Boarding Path</span>
                      <span className="text-xl font-black uppercase tracking-tighter flex items-center justify-center gap-2 group-hover/btn:gap-4 transition-all relative z-10">
                        SUBMIT <ArrowRight size={20} className="text-brand-orange" />
                      </span>
                    </button>
                  </div>
                </div>

                <div className="mt-12 text-center opacity-80">
                  <div className="flex justify-center gap-1.5 mb-2">
                    {Array(15).fill(0).map((_, i) => (
                      <div key={i} className="w-1 h-10 bg-gray-800 rounded-full"></div>
                    ))}
                  </div>
                  <p className="text-[8px] font-black text-gray-700 uppercase tracking-[0.4em]">2026-BOARDING-PASS</p>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-[#0a1d37]/5 -z-10 blur-3xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-x-16 gap-y-6">
            <a href="tel:18001234567" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-orange transition-all duration-300 shadow-sm">
                <Phone size={18} className="text-brand-orange group-hover:text-white transition-colors" />
              </div>
              <div>
                <span className="block text-[9px] font-black uppercase tracking-widest text-gray-400">Concierge Desk</span>
                <span className="text-sm font-bold text-gray-700">+1 (800) 123-4567</span>
              </div>
            </a>
            <a href="mailto:concierge@bluegateways.com" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-orange transition-all duration-300 shadow-sm">
                <Mail size={18} className="text-brand-orange group-hover:text-white transition-colors" />
              </div>
              <div>
                <span className="block text-[9px] font-black uppercase tracking-widest text-gray-400">Direct Email</span>
                <span className="text-sm font-bold text-gray-700">concierge@bluegateways.com</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
