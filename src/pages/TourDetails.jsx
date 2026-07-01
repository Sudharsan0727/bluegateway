import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Star, Clock, MapPin, ChevronRight, CheckCircle2,
  Calendar, Users, ShieldCheck, Heart, Share2,
  Info, Image, List, MessageSquare, ArrowLeft,
  Plane, Bed, Hotel, Coffee, Map, ChevronDown, Download, Printer,
  Utensils, Globe, Compass, Camera, Zap, Award, Sparkles, X, Plus, Minus,
  ChevronUp, HelpCircle, ArrowRight, MousePointer2, AlertCircle,
  TrendingUp, Leaf, Lock, Check, ExternalLink, Play, Mail, Phone, Quote
} from 'lucide-react';
import { tours } from '../data/tours';
import tourMapImage from '../assets/japanmap.jpeg';

const TourDetails = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [activeTab, setActiveTab] = useState('itinerary');
  const [isFavorite, setIsFavorite] = useState(false);
  const [personCount, setPersonCount] = useState(2);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isCustomizeModalOpen, setIsCustomizeModalOpen] = useState(false);
  const getLocalYYYYMMDD = (date) => {
    const offset = date.getTimezoneOffset() * 60000;
    return new Date(date.getTime() - offset).toISOString().split('T')[0];
  };
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  const [customDates, setCustomDates] = useState({ start: getLocalYYYYMMDD(today), end: getLocalYYYYMMDD(tomorrow) });
  const [customPeople, setCustomPeople] = useState(2);
  const [travelerType, setTravelerType] = useState('Couple');
  const [expandedDay, setExpandedDay] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [showStickyActions, setShowStickyActions] = useState(false);
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedMonth, setSelectedMonth] = useState('Jun');

  useEffect(() => {
    const foundTour = tours.find(t => t.id === parseInt(id));
    setTour(foundTour);
    window.scrollTo(0, 0);

    const handleScroll = () => {
        // Show sticky buttons when scrolled past the hero/header section
        if (window.scrollY > 450) {
            setShowStickyActions(true);
        } else {
            setShowStickyActions(false);
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [id]);

  if (!tour) return <div className="min-h-screen bg-white flex items-center justify-center font-['Poppins']"><div className="w-10 h-10 border-2 border-[#2a5da8] border-t-transparent rounded-full animate-spin" /></div>;

  const totalPrice = tour.price * personCount;

  const tabs = [
    { id: 'itinerary', label: 'Itinerary' },
    { id: 'reviews', label: 'Reviews' },
  ];

  const departures = [
    { date: "02 Jun — 07 Jun 2026", status: "Guaranteed", price: tour.price, savings: "Early Bird" },
    { date: "16 Jun — 21 Jun 2026", status: "Selling Fast", price: tour.price, savings: "10% Discount" },
    { date: "07 Jul — 12 Jul 2026", status: "Available", price: tour.price + 100, savings: "-" },
    { date: "15 Aug — 20 Aug 2026", status: "Guaranteed", price: tour.price, savings: "Best Value" },
  ];

  return (
    <div className="min-h-screen bg-white font-['Poppins'] text-[#1a1a1a] selection:bg-[#2a5da8]/10 selection:text-[#2a5da8] pb-20 lg:pb-0">
      
      {/* 1. CINEMATIC HERO HEADER */}
      <div className="relative min-h-[500px] flex items-center pt-32 lg:pt-40 pb-20 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={tour.img} 
            alt={tour.title} 
            className="w-full h-full object-cover"
          />
          {/* Multi-layered overlays for maximum readability and mood */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          {/* Breadcrumbs - Light version */}
          <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/60 mb-10 animate-fade-in">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={10} className="text-white/30" />
            <Link to="/tours" className="hover:text-white transition-colors">Tours</Link>
            <ChevronRight size={10} className="text-white/30" />
            <span className="text-white/30">{tour.location}</span>
            <ChevronRight size={10} className="text-white/30" />
            <span className="text-white truncate max-w-[200px]">{tour.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
            <div className="animate-fade-in-up flex-1 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-brand-orange">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                </div>
                <span className="text-sm font-bold text-white">{tour.rating}</span>
                <span className="h-4 w-px bg-white/20"></span>
                <Link to="#reviews" className="text-xs text-white/80 font-medium underline underline-offset-4 decoration-white/20 hover:decoration-white transition-all">
                  {tour.reviews} reviews
                </Link>
              </div>
              <h1 className="font-['Bellefair'] text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] max-w-4xl drop-shadow-lg">
                {tour.title}
              </h1>
            </div>

            {/* Pricing & CTA Card - Glassmorphism style */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20 min-w-[360px] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                  Best of Summer Sale <HelpCircle size={12} className="text-white/40" />
                </div>
                <div className="bg-brand-orange text-white text-[9px] font-bold px-2.5 py-1 rounded-sm uppercase tracking-widest shadow-lg">
                  Limited Offer
                </div>
              </div>

              <div className="space-y-1 mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs text-white/50 font-semibold uppercase tracking-widest">From</span>
                  <span className="text-5xl font-bold text-white tracking-tighter">${tour.price}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-white/40 line-through font-bold">Was ${Math.round(tour.price * 1.15)}</span>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-brand-orange">
                    <Zap size={10} fill="currentColor" /> Save ${Math.round(tour.price * 0.15)}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full bg-brand-orange text-white py-4 rounded-sm text-xs font-bold uppercase tracking-[0.2em] hover:bg-orange-600 transition-all shadow-xl hover:shadow-orange-900/30 active:scale-[0.98]"
                >
                  Get a Quote
                </button>
                <button 
                  onClick={() => setIsCustomizeModalOpen(true)}
                  className="w-full bg-white text-[#2a5da8] border border-[#2a5da8] py-4 rounded-sm text-xs font-bold uppercase tracking-[0.2em] hover:bg-blue-50 transition-all active:scale-95"
                >
                  Customize Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. FULL WIDTH STICKY NAVIGATION BAR WITH CTA */}
      <div className="bg-white border-y border-gray-100 sticky top-[72px] z-[1000] shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between">
                {/* Left: Navigation Tabs */}
                <div className="flex gap-8">
                    {[
                        { id: 'itinerary', label: 'Your itinerary' },
                        { id: 'dates-prices', label: 'Dates & prices' },
                        { id: 'reviews', label: 'Reviews' },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => {
                                setActiveTab(tab.id);
                                setTimeout(() => {
                                    let targetId = tab.id;
                                    if (tab.id === 'itinerary') targetId = 'tab-content-start';
                                    
                                    const el = document.getElementById(targetId);
                                    if (el) {
                                        const offset = 140;
                                        window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' });
                                    } else {
                                        // Fallback to top of content area
                                        const fallback = document.getElementById('tab-content-start');
                                        if (fallback) window.scrollTo({ top: fallback.offsetTop - 140, behavior: 'smooth' });
                                    }
                                }, 50);
                            }}
                            className={`py-5 text-[13px] font-bold uppercase tracking-wider transition-all relative ${activeTab === tab.id ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                        >
                            {tab.label}
                            {activeTab === tab.id && (
                                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-orange" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Right: Persistent CTA Buttons (Shown only when sticky) */}
                <div className={`hidden md:flex items-center gap-3 transition-all duration-500 ${showStickyActions ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                    <button 
                        onClick={() => setIsQuoteModalOpen(true)}
                        className="bg-brand-orange text-white px-8 py-2.5 rounded-sm text-[11px] font-black uppercase tracking-widest hover:bg-orange-600 transition-all active:scale-95"
                    >
                        Get a Quote
                    </button>
                    <button 
                        onClick={() => setIsCustomizeModalOpen(true)}
                        className="bg-white text-[#2a5da8] border border-[#2a5da8] px-8 py-2.5 rounded-sm text-[11px] font-black uppercase tracking-widest hover:bg-blue-50 transition-all active:scale-95"
                    >
                        Customize Quote
                    </button>
                </div>
            </div>
        </div>
      </div>
      
      {/* Anchor for scroll positioning */}
      <div id="tab-content-start" className="absolute w-full h-px" style={{ top: 'auto' }} />
      {/* 3. MAIN CONTENT SECTION - LEFT IMAGE, RIGHT DETAILS */}
      {activeTab === 'itinerary' && (
        <>
            <div className="w-full py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-start">
            
            {/* Left: Featured Action Image (Edge-to-edge) */}
            <div className="lg:col-span-6 sticky top-32">
                <div className="overflow-hidden shadow-xl h-[550px] md:h-[750px] lg:rounded-r-3xl group relative">
                    <img src={tour.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={tour.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                    
                    {/* Floating Badge over image */}
                    <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white animate-fade-in-up">
                        <div className="flex items-center gap-6">
                            <div className="flex flex-col">
                                <span className="text-[9px] font-black uppercase tracking-widest opacity-60">Duration</span>
                                <span className="text-lg font-black">{tour.duration}</span>
                            </div>
                            <div className="w-px h-8 bg-white/20" />
                            <div className="flex flex-col">
                                <span className="text-[9px] font-black uppercase tracking-widest opacity-60">Group Size</span>
                                <span className="text-lg font-black">Max 24 Guests</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right: Detailed Information (Compact) */}
            <div className="lg:col-span-6 space-y-6 animate-fade-in-up px-10 md:px-16 lg:pl-16 lg:pr-24">
                
                {/* Trip Year Selection */}
                <div className="space-y-3">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-[0.1em] block">Trip Year</span>
                    <div className="flex border border-gray-100 rounded-xl overflow-hidden inline-flex shadow-sm">
                        {['2026', '2027', '2028'].map(year => (
                            <button 
                                key={year}
                                className={`px-10 py-2.5 text-sm font-bold transition-all ${year === '2026' ? 'bg-brand-dark text-white' : 'bg-white text-gray-400 hover:bg-gray-50'}`}
                            >
                                {year}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Title & Introduction */}
                <div className="space-y-4">
                    <h2 className="font-['Bellefair'] text-4xl md:text-5xl text-[#0a1d37] leading-[1.1]">
                        {tour.title}
                    </h2>
                    <p className="text-gray-600 text-base leading-relaxed font-medium max-w-lg">
                        {tour.description}
                    </p>
                </div>

                {/* Minimalist Feature Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 pt-4">
                    {/* 1. Travel & Accommodation */}
                    <div className="space-y-1">
                        <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-brand-blue shrink-0"><Map size={15} /></div>
                            <div className="flex items-center gap-1.5 relative group/tooltip">
                                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest">Travel & Accommodation</h4>
                                <HelpCircle size={14} className="text-gray-400 cursor-help" />
                                {/* Tooltip Content */}
                                <div className="absolute z-50 left-0 bottom-full mb-2 w-64 p-3 bg-white border border-gray-100 shadow-2xl rounded-xl text-[11px] text-gray-500 font-medium leading-relaxed opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-300">
                                    {tour.title.includes('Switzerland') ? 'Zurich, Lucerne, Interlaken, Zermatt, St. Moritz' : 'India, Kochi, Periyar National Park, Kumarakom, Alleppey Backwater'}
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 font-medium leading-snug pl-1">
                            6 days, 1 country and 4 cities<br/>
                            5 nights accommodation
                        </p>
                    </div>

                    {/* 2. Meals */}
                    <div className="space-y-1">
                        <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-brand-orange shrink-0"><Utensils size={15} /></div>
                            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest">Meals</h4>
                        </div>
                        <p className="text-sm text-gray-500 font-medium leading-snug pl-1">5 Breakfasts, 1 Lunch, 4 Dinners</p>
                    </div>

                    {/* 3. Activity Level */}
                    <div className="space-y-1">
                        <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-emerald-600 shrink-0"><Users size={15} /></div>
                            <div className="flex items-center gap-1.5 relative group/tooltip">
                                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest">Activity Level</h4>
                                <HelpCircle size={14} className="text-gray-400 cursor-help" />
                                {/* Tooltip Content */}
                                <div className="absolute z-50 left-0 bottom-full mb-2 w-48 p-3 bg-white border border-gray-100 shadow-2xl rounded-xl text-[11px] text-gray-500 font-medium leading-relaxed opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-300">
                                    Suitable for all fitness levels. Light walking and comfortable travel.
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 font-medium leading-snug pl-1">Leisurely</p>
                    </div>

                    {/* 4. Itinerary */}
                    <div className="space-y-1">
                        <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-purple-600 shrink-0"><List size={15} /></div>
                            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest">Itinerary</h4>
                        </div>
                        <button className="text-sm text-brand-blue font-bold hover:underline block text-left pl-1">View day-by-day trip itinerary</button>
                    </div>
                </div>

                {/* Group Booking Call to Action (Replacing Highlights/Brochure) */}
                <div className="pt-6">
                    <div 
                        onClick={() => setIsQuoteModalOpen(true)}
                        className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 flex items-center justify-between group cursor-pointer hover:bg-white hover:shadow-xl hover:shadow-gray-100/50 transition-all duration-500"
                    >
                        <div className="flex items-center gap-5">
                            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-blue shrink-0 group-hover:scale-110 transition-transform"><Users size={20} /></div>
                            <div>
                                <h4 className="text-[13px] font-bold text-gray-900 mb-1">Looking to book in a group of 9 or more?</h4>
                                <p className="text-[11px] text-gray-400 font-medium leading-relaxed max-w-xs">
                                    Deals, savings and exclusive private touring options available. Contact us for more details.
                                </p>
                            </div>
                        </div>
                        <ArrowRight size={18} className="text-gray-300 group-hover:text-brand-blue group-hover:translate-x-1 transition-all" />
                    </div>
                </div>

                {/* Main Action Button */}
                <div className="pt-4">
                    <button 
                        onClick={() => setIsQuoteModalOpen(true)}
                        className="w-full bg-[#0a1d37] text-white py-4 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#1a2d47] transition-all active:scale-95 shadow-md"
                    >
                        Request Availability
                    </button>
                </div>
            </div>
        </div>
      </div>

      {/* 4. DETAILS SECTIONS */}
      <div className="max-w-[1500px] mx-auto px-6 lg:px-16 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        
        {/* Main Body */}
        <div className="lg:col-span-12 space-y-24">
            
            {/* 3. TRIP OVERVIEW - MODERN EDITORIAL LAYOUT */}
            <section id="overview" className="scroll-mt-36 lg:scroll-mt-48">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                    
                    {/* Left Side: The Narrative */}
                    <div className="lg:col-span-7 space-y-12">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <span className="w-10 h-[1px] bg-brand-orange" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-orange">The Journey Begins</span>
                            </div>
                            <h2 className="font-['Bellefair'] text-6xl lg:text-7xl text-[#0a1d37] leading-[1.1] tracking-tight">
                                Trip Overview
                            </h2>
                        </div>
                        
                        <div className="prose prose-xl max-w-none">
                            <p className="text-gray-500 leading-relaxed text-xl font-light italic border-l-4 border-brand-orange/20 pl-8 py-2 mb-10">
                                "{tour.description.split('.')[0]}."
                            </p>
                            <p className="text-gray-600 leading-[1.8] text-lg first-letter:text-6xl first-letter:font-['Bellefair'] first-letter:text-brand-blue first-letter:mr-4 first-letter:float-left first-letter:leading-[1]">
                                {tour.description.split('.').slice(1).join('.')}
                            </p>
                        </div>

                        {/* 2x2 Highlights Grid */}
                        <div className="pt-12 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-center gap-5 p-6 rounded-2xl bg-blue-50/50 border border-blue-100/50 group hover:bg-white hover:shadow-xl transition-all duration-300">
                                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                                    <Clock size={20} />
                                </div>
                                <div className="space-y-0.5">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block">Pace</span>
                                    <p className="text-[14px] font-bold text-[#0a1d37]">Leisurely & Immersive</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 p-6 rounded-2xl bg-orange-50/50 border border-orange-100/50 group hover:bg-white hover:shadow-xl transition-all duration-300">
                                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                                    <Hotel size={20} />
                                </div>
                                <div className="space-y-0.5">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block">Stay</span>
                                    <p className="text-[14px] font-bold text-[#0a1d37]">4-5 Star Luxury</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100/50 group hover:bg-white hover:shadow-xl transition-all duration-300">
                                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                                    <Users size={20} />
                                </div>
                                <div className="space-y-0.5">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block">Group Size</span>
                                    <p className="text-[14px] font-bold text-[#0a1d37]">Max 24 Guests</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 p-6 rounded-2xl bg-purple-50/50 border border-purple-100/50 group hover:bg-white hover:shadow-xl transition-all duration-300">
                                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                                    <Utensils size={20} />
                                </div>
                                <div className="space-y-0.5">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block">Meals</span>
                                    <p className="text-[14px] font-bold text-[#0a1d37]">Daily Breakfast & 4 Dinners</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Trust & Visual Impact */}
                    <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-48">
                        {/* Trust Module 1 */}
                        <div className="relative p-8 rounded-2xl bg-gray-50 border border-gray-100 group transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5">
                            <div className="flex gap-6">
                                <div className="shrink-0 w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-blue">
                                    <Sparkles size={20} />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0a1d37]">Expert Curation</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed font-light">
                                        Hand-picked experiences and hidden gems curated by our global experts to show you the real {tour.location}.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Trust Module 2 */}
                        <div className="relative p-8 rounded-2xl bg-gray-50 border border-gray-100 group transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-emerald-900/5">
                            <div className="flex gap-6">
                                <div className="shrink-0 w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-emerald-600">
                                    <ShieldCheck size={20} />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0a1d37]">Secure Booking</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed font-light">
                                        100% financial protection and 24/7 on-ground assistance for total peace of mind throughout your journey.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Cinematic Image w/ Rating */}
                        <div className="relative pt-6">
                            <div className="overflow-hidden rounded-3xl shadow-2xl">
                                <img src={tour.img} className="w-full h-72 object-cover transform transition-transform duration-700 hover:scale-110" alt="Swiss Alps" />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-50">
                                <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white text-xl font-black">5.0</div>
                                <div>
                                    <div className="flex gap-0.5 text-brand-orange mb-0.5"><Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" /><Star size={10} fill="currentColor" /></div>
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Guest Rating</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

                    {/* 4. TRIP MAP & ITINERARY SECTION */}
                    <section id="itinerary" className="scroll-mt-36 lg:scroll-mt-48">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-brand-orange" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-orange">The Route</span>
                        </div>
                        <h2 className="font-['Bellefair'] text-5xl lg:text-6xl text-[#0a1d37] leading-tight">
                            Trip Map & Itinerary
                        </h2>
                    </div>
                    <button className="text-[10px] font-bold text-[#2a5da8] flex items-center justify-center gap-2 uppercase tracking-[0.2em] bg-blue-50 px-8 py-4 rounded-xl hover:bg-blue-100 transition-all w-full md:w-auto shadow-sm">
                        <Download size={14} /> Download Brochure
                    </button>
                </div>

                {/* Seamless Split Map Display */}
                <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden mb-20">
                    <div className="flex flex-col lg:flex-row h-auto lg:h-[500px]">
                        
                        {/* Map Image Area (Seamless) */}
                        <div className="flex-1 relative bg-[#eaf2f8]">
                            <img 
                                src={tourMapImage} 
                                alt="Tour Route Map" 
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Solid Legend Column */}
                        <div className="w-full lg:w-[450px] bg-white border-l border-gray-100 p-10 flex flex-col justify-center shrink-0">
                            <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">Legend</h5>
                            
                            <div className="space-y-6">
                                <div className="flex items-center gap-5">
                                    <div className="w-4 h-4 rounded-full bg-[#2d6a4f] shrink-0" />
                                    <span className="text-sm font-medium text-gray-700 uppercase tracking-wider">Start Location</span>
                                </div>
                                <div className="flex items-center gap-5">
                                    <div className="w-4 h-4 rounded-full bg-[#e63946] shrink-0" />
                                    <span className="text-sm font-medium text-gray-700 uppercase tracking-wider">End Location</span>
                                </div>
                                <div className="flex items-center gap-5">
                                    <div className="w-4 h-4 rounded-full bg-[#4a5568] flex items-center justify-center text-[7px] text-white font-black shrink-0">1</div>
                                    <span className="text-sm font-medium text-gray-700 uppercase tracking-wider">Overnight</span>
                                </div>
                                <div className="flex items-center gap-5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mx-1 shrink-0" />
                                    <span className="text-sm font-medium text-gray-700 uppercase tracking-wider">Visited Location</span>
                                </div>
                                <div className="flex items-center gap-5">
                                    <div className="w-4 h-4 rounded-full bg-[#2a5da8] shrink-0" />
                                    <span className="text-sm font-medium text-gray-700 uppercase tracking-wider">Optional Location</span>
                                </div>
                                
                                <div className="pt-6 mt-2 border-t border-gray-50 space-y-6">
                                    <div className="flex items-center gap-5 text-gray-500">
                                        <Plane size={18} />
                                        <span className="text-sm font-medium text-gray-700 uppercase tracking-wider">Plane</span>
                                    </div>
                                    <div className="flex items-center gap-5 text-gray-500">
                                        <Coffee size={18} />
                                        <span className="text-sm font-medium text-gray-700 uppercase tracking-wider">Cruise</span>
                                    </div>
                                    <div className="flex items-center gap-5 text-gray-500">
                                        <Zap size={18} />
                                        <span className="text-sm font-medium text-gray-700 uppercase tracking-wider">Train</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="mb-12 mt-28">
                    <div className="space-y-6 mb-8">
                        <div className="flex items-center gap-3">
                            <span className="w-10 h-[1px] bg-brand-orange" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-orange">Detailed Itinerary</span>
                        </div>
                        <h2 className="font-['Bellefair'] text-6xl lg:text-7xl text-[#0a1d37] leading-[1.1] tracking-tight">
                            Day by day itinerary
                        </h2>
                        <p className="text-gray-500 text-lg font-medium tracking-wide">
                            {tour.duration} days itinerary trip visiting multiple destinations
                        </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-t border-b border-gray-100 mb-6">
                        <div className="flex flex-wrap items-center gap-6">
                            <button className="flex items-center gap-2 text-sm font-bold text-[#1e5399] hover:underline">
                                <Download size={16} /> Download itinerary
                            </button>
                            <button className="flex items-center gap-2 text-sm font-bold text-[#1e5399] hover:underline">
                                <Printer size={16} /> Print itinerary
                            </button>
                        </div>
                        <button 
                            onClick={() => setExpandedDay(expandedDay === -1 ? 0 : -1)}
                            className="flex items-center gap-2 text-sm font-medium text-gray-700"
                        >
                            {expandedDay !== -1 ? 'Collapse all days' : 'Expand all days'} 
                            <ChevronDown size={16} className={`transition-transform ${expandedDay !== -1 ? 'rotate-180' : ''}`} />
                        </button>
                    </div>
                </div>

                <div className="space-y-3">
                    {tour.itinerary.map((day, i) => (
                        <div key={i} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                            
                            {/* Collapsed/Header View */}
                            <button 
                                onClick={() => setExpandedDay(expandedDay === i ? -1 : i)}
                                className={`w-full flex md:items-center flex-col md:flex-row justify-between text-left transition-colors ${expandedDay === i ? 'bg-[#f8fafd]' : 'bg-white hover:bg-gray-50'}`}
                            >
                                <div className="flex flex-col md:flex-row md:items-center flex-1">
                                    {/* Thumbnail (Hidden when expanded) */}
                                    {expandedDay !== i && (
                                        <div className="w-full md:w-56 h-40 md:h-32 shrink-0 border-b md:border-b-0 md:border-r border-gray-100">
                                            <img 
                                                src={tour.gallery[i+1] || tour.img} 
                                                className="w-full h-full object-cover" 
                                                alt={day.title} 
                                            />
                                        </div>
                                    )}
                                    
                                    <div className={`p-6 flex-1 ${expandedDay !== i ? 'md:pl-8' : ''}`}>
                                        <p className="text-gray-500 text-sm mb-2 font-medium">Day {day.day}</p>
                                        <div className="flex md:items-center flex-col md:flex-row gap-2 md:gap-4 mb-3">
                                            <h4 className="font-['Bellefair'] font-normal text-3xl text-[#0a1d37]">{day.title}</h4>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                                            <Users size={16} className="opacity-70" /> 
                                            <span>Welcome</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="px-6 pb-6 md:pb-0 flex items-center gap-2 text-sm font-bold text-[#222] shrink-0 self-start md:self-auto">
                                    {expandedDay === i ? 'See less' : 'See more'}
                                    <ChevronDown size={16} className={`transition-transform ${expandedDay === i ? 'rotate-180' : ''}`} />
                                </div>
                            </button>

                            {/* Expanded Body View (Smooth Grid Transition) */}
                            <div className={`grid transition-all duration-500 ease-in-out ${expandedDay === i ? 'grid-rows-[1fr] opacity-100 border-t border-gray-200' : 'grid-rows-[0fr] opacity-0 border-t-0'}`}>
                                <div className="overflow-hidden">
                                    <div className="p-8 flex flex-col md:flex-row gap-12">
                                        
                                        {/* Left Content */}
                                        <div className="flex-1">
                                            <p className="text-gray-500 text-sm mb-2 font-medium">Day {day.day}</p>
                                            <h4 className="font-['Bellefair'] font-normal text-4xl md:text-5xl text-[#0a1d37] mb-6 leading-tight">
                                                {day.title}
                                            </h4>
                                            <p className="text-gray-500 text-[15px] leading-relaxed mb-10 font-medium">
                                                {day.desc}
                                            </p>
                                            
                                            <div className="space-y-5">
                                                <div className="flex items-start gap-4">
                                                    <Users size={22} className="text-gray-400 shrink-0 mt-0.5" />
                                                    <div className="text-[15px]">
                                                        <strong className="text-[#222] font-bold">Welcome </strong>
                                                        <span className="text-gray-500">Meet your Travel Director and fellow travelers for local appetizers.</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-4">
                                                    <Bed size={22} className="text-gray-400 shrink-0 mt-0.5" />
                                                    <div className="text-[15px]">
                                                        <strong className="text-[#222] font-bold">Accommodation </strong>
                                                        <span className="text-gray-500">Luxury Hotel</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Right Image */}
                                        <div className="w-full md:w-[420px] h-[280px] shrink-0 rounded-lg overflow-hidden shadow-sm">
                                            <img 
                                                src={tour.gallery[i+1] || tour.img} 
                                                className="w-full h-full object-cover" 
                                                alt={day.title} 
                                            />
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </section>



                    {/* About Trip & Travel Highlights Section */}
            <section id="about-trip" className="py-20 border-t border-gray-100 space-y-14">
                
                {/* Main Title */}
                <h2 className="font-['Bellefair'] text-5xl lg:text-6xl text-[#0a1d37] leading-[1.1] tracking-tight">
                    About this trip
                </h2>

                {/* Row 1: Sightseeing Highlights */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-gray-100">
                    {/* Left Label */}
                    <div className="lg:col-span-3">
                        <h3 className="font-['Bellefair'] text-2xl text-[#2a5da8] leading-tight">
                            Sightseeing highlights
                        </h3>
                    </div>
                    {/* Right: 2-col pin list */}
                    <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                        {(tour.highlights || []).slice(0, 6).map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-[#2a5da8] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                                </svg>
                                <span className="text-[15px] text-gray-700 leading-relaxed">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2: Travel Highlights */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Label + button */}
                    <div className="lg:col-span-3 space-y-4">
                        <h3 className="font-['Bellefair'] text-2xl text-brand-orange leading-tight">
                            Travel highlights
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Everything included in your journey for a seamless experience.
                        </p>
                        <button 
                            onClick={() => setIsQuoteModalOpen(true)}
                            className="bg-[#2a5da8] text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-lg hover:bg-[#1e4d8c] transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
                        >
                            Get a Quote
                        </button>
                    </div>
                    {/* Right: 2-col checklist */}
                    <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                        {(tour.inclusions || []).map((item, i) => (
                            <div key={i} className="flex items-start gap-3 group">
                                <svg className="w-5 h-5 text-[#2a5da8] shrink-0 mt-0.5 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-[15px] text-gray-700 leading-relaxed">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-20 border-t border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                    
                    {/* Left: Header */}
                    <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-48">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-brand-orange" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-orange">Got Questions?</span>
                        </div>
                        <h2 className="font-['Bellefair'] text-5xl lg:text-6xl text-[#0a1d37] leading-[1.1] tracking-tight">
                            Frequently Asked
                        </h2>
                        <p className="text-gray-500 text-base leading-relaxed font-light">
                            Everything you need to know before booking your dream journey.
                        </p>
                        <button
                            onClick={() => setIsQuoteModalOpen(true)}
                            className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2a5da8] hover:text-brand-orange transition-colors duration-300"
                        >
                            Still have questions? Contact us →
                        </button>
                    </div>

                    {/* Right: Accordion */}
                    <div className="lg:col-span-8 divide-y divide-gray-100">
                        {[
                            {
                                q: "What is included in this tour package?",
                                a: "The package includes accommodation in 4-5 star hotels, daily breakfast, guided sightseeing tours, all transfers between destinations, and a dedicated travel director throughout the trip. Flights are not included unless specified."
                            },
                            {
                                q: "How do I book and what is the payment process?",
                                a: "You can book directly by clicking 'Book Now' on your preferred departure date. We require a deposit at the time of booking, with the remaining balance due 60 days before departure. We accept all major credit/debit cards and bank transfers."
                            },
                            {
                                q: "What is the cancellation and refund policy?",
                                a: "Cancellations made 60+ days before departure receive a full refund minus the deposit. Cancellations between 30-59 days receive a 50% refund. Cancellations within 30 days of departure are non-refundable. We strongly recommend travel insurance."
                            },
                            {
                                q: "Is travel insurance required?",
                                a: "Travel insurance is not mandatory but is strongly recommended. It protects you against unexpected trip cancellations, medical emergencies, and loss of personal belongings during your journey."
                            },
                            {
                                q: "What is the group size for this tour?",
                                a: "Our tours are kept small and exclusive, with a maximum of 24 guests per group. This ensures a personalized experience, easier navigation at sites, and a more immersive connection with your destination."
                            },
                            {
                                q: "Are flights included in the tour price?",
                                a: "International flights are not included in the listed price. However, our travel concierge team can assist you in finding the best flight options to match your chosen departure date. Domestic transfers between destinations are included."
                            }
                        ].map((faq, i) => (
                            <div
                                key={i}
                                className="group cursor-pointer"
                                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                            >
                                <div className="flex justify-between items-center gap-6 py-6">
                                    <h4 className={`font-['Bellefair'] text-xl lg:text-2xl leading-snug transition-colors duration-300 ${activeFaq === i ? 'text-[#2a5da8]' : 'text-[#0a1d37] group-hover:text-[#2a5da8]'}`}>
                                        {faq.q}
                                    </h4>
                                    <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${activeFaq === i ? 'bg-[#2a5da8] text-white rotate-45' : 'bg-gray-100 text-gray-500 group-hover:bg-[#2a5da8] group-hover:text-white'}`}>
                                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                        </svg>
                                    </span>
                                    </div>
                                    <div className={`grid transition-all duration-500 ease-in-out ${activeFaq === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden">
                                            <p className="text-gray-500 text-[15px] leading-relaxed pb-6 border-l-2 border-brand-orange/30 pl-5 ml-1">
                                                {faq.a}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                            </div>
                        </section>
                    </div>
                </div>

                {/* Embedded Reviews Section in Itinerary Tab - 3-Column Model */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        
                        {/* Section Header */}
                        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-[1px] bg-brand-orange" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-orange">Guest Feedback</span>
                                </div>
                                <h2 className="font-['Bellefair'] text-5xl lg:text-6xl text-[#0a1d37]">What Our Guests Say</h2>
                            </div>
                            <button 
                                onClick={() => setActiveTab('reviews')}
                                className="text-sm font-bold text-[#2a5da8] hover:text-brand-orange transition-colors flex items-center gap-2 group"
                            >
                                Read All {tour.reviews} Reviews 
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                        
                        {/* The 3-Column Trust Block - Image 2 Model */}
                        <div className="bg-white shadow-xl shadow-gray-200/40 border border-gray-100 overflow-hidden mb-16 rounded-none">
                            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
                                
                                {/* Column 1: Overall Trip Rating */}
                                <div className="p-8 lg:p-10 space-y-8">
                                    <h3 className="font-['Bellefair'] text-2xl text-[#0a1d37] flex items-center gap-3">
                                        Overall Rating <Award size={20} className="text-brand-orange" />
                                    </h3>
                                    <div className="space-y-6">
                                        <div className="flex items-end gap-3">
                                            <span className="text-6xl font-black text-[#0a1d37] tracking-tighter leading-none">4.9</span>
                                            <div className="pb-1">
                                                <div className="text-yellow-400 flex gap-1 mb-1">
                                                    {[1,2,3,4,5].map(s => <Star key={s} size={18} fill="currentColor" />)}
                                                </div>
                                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Out of 5 Stars</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-8 border-t border-gray-50 space-y-4">
                                        <p className="text-[12px] text-gray-500 font-medium italic leading-relaxed">Based on {tour.reviews} independently verified reviews from travelers like you.</p>
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center gap-1.5 bg-blue-50 px-3 py-1.5 rounded-none">
                                                <span className="text-[10px] font-black text-[#2a5da8] uppercase tracking-widest">Feefo</span>
                                                <div className="flex gap-0.5 text-yellow-400">
                                                    {[1,2,3,4,5].map(s => <Star key={s} size={8} fill="currentColor" />)}
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1.5 bg-emerald-50 px-3 py-1.5 rounded-none">
                                                <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest text-xs">★</span>
                                                <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">Trustpilot</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 2: Itinerary Rating */}
                                <div className="p-8 lg:p-10 space-y-8">
                                    <div className="space-y-2">
                                        <h3 className="font-['Bellefair'] text-2xl text-[#0a1d37]">Itinerary Excellence</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed font-medium">Independent scores on the quality and flow of our curated journeys.</p>
                                    </div>
                                    <div className="space-y-4">
                                        {[
                                            { s: 5, w: '85%', c: 45 },
                                            { s: 4, w: '12%', c: 6 },
                                            { s: 3, w: '3%', c: 1 },
                                            { s: 2, w: '0%', c: 0 },
                                            { s: 1, w: '0%', c: 0 }
                                        ].map((item) => (
                                            <div key={item.s} className="flex items-center gap-4">
                                                <div className="flex items-center gap-1 min-w-[30px]">
                                                    <span className="text-xs font-bold text-gray-600">{item.s}</span>
                                                    <Star size={10} fill="currentColor" className="text-yellow-400" />
                                                </div>
                                                <div className="flex-1 h-2 bg-gray-50 rounded-none overflow-hidden">
                                                    <div className="h-full bg-[#0a1d37] rounded-none" style={{ width: item.w }} />
                                                </div>
                                                <span className="text-xs font-bold text-gray-400 min-w-[20px] text-right">{item.c}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Column 3: Global Experience */}
                                <div className="p-8 lg:p-10 space-y-8">
                                    <div className="space-y-2">
                                        <h3 className="font-['Bellefair'] text-2xl text-[#0a1d37]">Guest Experience</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed font-medium">How our customers rate the standard of service across all journeys.</p>
                                    </div>
                                    <div className="space-y-4">
                                        {[
                                            { s: 5, w: '92%', c: '112K+' },
                                            { s: 4, w: '6%', c: '28K' },
                                            { s: 3, w: '1%', c: '7K' },
                                            { s: 2, w: '0.5%', c: '2K' },
                                            { s: 1, w: '0.5%', c: '1K' }
                                        ].map((item) => (
                                            <div key={item.s} className="flex items-center gap-4">
                                                <div className="flex items-center gap-1 min-w-[30px]">
                                                    <span className="text-xs font-bold text-gray-600">{item.s}</span>
                                                    <Star size={10} fill="currentColor" className="text-yellow-400" />
                                                </div>
                                                <div className="flex-1 h-2 bg-gray-50 rounded-none overflow-hidden">
                                                    <div className="h-full bg-brand-orange rounded-none" style={{ width: item.w }} />
                                                </div>
                                                <span className="text-xs font-bold text-gray-400 min-w-[40px] text-right">{item.c}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Read More Button */}
                        <div className="flex flex-col items-center gap-6 mt-12">
                            <button 
                                onClick={() => setActiveTab('reviews')}
                                className="group relative px-12 py-4 bg-[#0a1d37] text-white rounded-none text-xs font-bold uppercase tracking-[0.3em] overflow-hidden transition-all hover:shadow-2xl hover:shadow-blue-900/30 active:scale-95 shadow-xl"
                            >
                                <span className="relative z-10">Read All Guest Reviews</span>
                                <div className="absolute inset-0 bg-[#2a5da8] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                            </button>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                <CheckCircle2 size={12} className="text-emerald-500" /> Verified by Feefo & Trustpilot
                            </p>
                        </div>

                    </div>
                </section>



                </>
            )}

                {activeTab === 'dates-prices' && (
                    <section id="dates-prices" className="py-24 border-t border-gray-100 max-w-7xl mx-auto px-6">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <span className="w-10 h-[1px] bg-brand-orange" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-orange">Availability</span>
                                </div>
                                <h2 className="font-['Bellefair'] text-6xl lg:text-7xl text-[#0a1d37] leading-[1.1] tracking-tight">
                                    Dates & Prices
                                </h2>
                                <p className="text-gray-500 text-lg font-medium tracking-wide">
                                    Choose your preferred departure and secure your place with a deposit.
                                </p>
                            </div>

                            {/* User-Friendly Filter */}
                            <div className="bg-white p-5 md:p-6 rounded-none border border-gray-100 shadow-sm mb-8 flex flex-col md:flex-row items-center justify-between gap-6 relative font-['Poppins']">
                                <div className="hidden lg:block absolute -top-3 right-6 bg-brand-orange text-white px-4 py-1 rounded-none text-[10px] font-medium uppercase tracking-wider shadow-sm">
                                    Lowest Price ${tour.price}
                                </div>

                                <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
                                    <label className="font-medium text-[#0a1d37] text-sm">Year:</label>
                                    <select 
                                        value={selectedYear} 
                                        onChange={(e) => setSelectedYear(e.target.value)}
                                        className="border border-gray-200 rounded-none bg-gray-50 px-4 py-2 font-normal text-[#0a1d37] focus:ring-2 focus:ring-[#2a5da8] outline-none w-full md:w-32 cursor-pointer text-sm"
                                    >
                                        <option value="2026">2026</option>
                                        <option value="2027">2027</option>
                                        <option value="2028">2028</option>
                                    </select>
                                </div>
                                
                                <div className="flex items-center gap-2 overflow-x-auto w-full pb-2 md:pb-0 hide-scrollbar">
                                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(month => {
                                        const hasDepartures = ['Jun', 'Jul', 'Aug', 'Oct', 'Nov', 'Dec'].includes(month); 
                                        return (
                                            <button
                                                key={month}
                                                onClick={() => setSelectedMonth(month)}
                                                className={`shrink-0 px-4 py-2 rounded-none text-[13px] font-medium transition-all ${
                                                    selectedMonth === month 
                                                        ? 'bg-[#2a5da8] text-white shadow-sm' 
                                                        : hasDepartures 
                                                            ? 'bg-blue-50 text-[#2a5da8] hover:bg-blue-100' 
                                                            : 'bg-transparent text-gray-400 hover:text-gray-600'
                                                }`}
                                            >
                                                {month}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="space-y-4">
                                {(() => {
                                    const filtered = departures.filter(d => d.date.includes(selectedYear) && d.date.includes(selectedMonth));
                                    
                                    if (filtered.length === 0) {
                                        return (
                                            <div className="text-center py-16 bg-gray-50/50 rounded-none border border-gray-100 font-['Poppins']">
                                                <Calendar size={32} className="mx-auto text-gray-400 mb-4" />
                                                <h3 className="text-[#0a1d37] font-medium text-lg mb-2">No departures found</h3>
                                                <p className="text-gray-500 text-sm">We couldn't find any available dates for {selectedMonth} {selectedYear}. Please select another date.</p>
                                            </div>
                                        );
                                    }

                                    return filtered.map((d, i) => {
                                        const parts = d.date.split(' ');
                                        const startDay = parts[0];
                                        const startMonth = parts[1];
                                        
                                        return (
                                        <div key={i} className="bg-white rounded-none border border-gray-100 p-5 md:p-6 flex flex-col md:flex-row items-center gap-6 shadow-sm hover:shadow-md transition-shadow font-['Poppins']">
                                            {/* Date Calendar Block */}
                                            <div className="bg-blue-50/60 rounded-none p-4 text-center min-w-[110px] w-full md:w-auto">
                                                <span className="block text-xs text-[#2a5da8] font-medium uppercase tracking-widest">{startMonth}</span>
                                                <span className="block text-3xl font-bold text-[#0a1d37] my-0.5">{startDay}</span>
                                                <span className="block text-[11px] text-gray-500 font-normal whitespace-nowrap">{d.date}</span>
                                            </div>

                                            {/* Details */}
                                            <div className="flex-1 text-center md:text-left space-y-2">
                                                <h4 className="text-lg font-medium text-[#0a1d37]">Standard Departure</h4>
                                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                                                    <span className={`px-2 py-1 rounded-none text-[10px] font-medium uppercase tracking-wider ${
                                                        d.status === 'Guaranteed' ? 'bg-emerald-100 text-emerald-700' : 
                                                        d.status === 'Selling Fast' ? 'bg-orange-100 text-brand-orange' : 
                                                        'bg-blue-100 text-brand-blue'
                                                    }`}>
                                                        {d.status}
                                                    </span>
                                                    <span className="text-gray-500 text-xs font-normal">Twin Share</span>
                                                </div>
                                                {d.savings && d.savings !== '-' && (
                                                    <div className="inline-flex items-center gap-1.5 text-[10px] font-medium text-brand-orange uppercase tracking-wider bg-orange-50 px-2 py-1 rounded-none">
                                                        <Sparkles size={10} /> {d.savings}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Price & Action */}
                                            <div className="text-center md:text-right w-full md:w-auto shrink-0 mt-4 md:mt-0 pt-6 md:pt-0 border-t md:border-t-0 border-gray-100">
                                                <div className="text-gray-400 text-[10px] font-medium uppercase tracking-widest mb-1">From</div>
                                                <div className="text-2xl font-bold text-[#0a1d37] mb-3">${d.price}</div>
                                                <button 
                                                    onClick={() => setIsQuoteModalOpen(true)} 
                                                    className="w-full md:w-auto bg-[#2a5da8] text-white px-8 py-3 rounded-none text-sm font-medium hover:bg-[#1e447a] transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
                                                >
                                                    Book Now
                                                </button>
                                            </div>
                                        </div>
                                        );
                                    });
                                })()}
                            </div>
                        </div>
                    </section>
                )}

        {/* Full Width Sections */}
        <div className="space-y-0">
                {activeTab === 'reviews' && (
                    <section id="reviews" className="py-24 bg-[#fafafa]">
                    <div className="max-w-7xl mx-auto px-6">
                        
                        {/* Main Header */}
                        <div className="text-center mb-16 space-y-4">
                            <div className="flex items-center justify-center gap-3">
                                <span className="w-10 h-[1px] bg-brand-orange" />
                                <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-brand-orange">Authentic Guest Feedback</span>
                                <span className="w-10 h-[1px] bg-brand-orange" />
                            </div>
                            <h2 className="font-['Bellefair'] text-6xl lg:text-7xl text-[#0a1d37] leading-tight">What Our Guests Say</h2>
                            <p className="text-gray-500 text-lg font-medium tracking-wide max-w-2xl mx-auto">
                                Real stories from travelers who have explored the world with us.
                            </p>
                        </div>
                        
                        {/* The 3-Column Trust Block - Refined */}
                        <div className="bg-white shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden mb-20 rounded-none">
                            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
                                
                                {/* Column 1: Overall Trip Rating */}
                                <div className="p-8 lg:p-12 space-y-10">
                                    <h3 className="font-['Bellefair'] text-2xl text-[#0a1d37] flex items-center gap-3">
                                        Overall Rating <Award size={20} className="text-brand-orange" />
                                    </h3>
                                    <div className="space-y-6">
                                        <div className="flex items-end gap-3">
                                            <span className="text-7xl font-black text-[#0a1d37] tracking-tighter leading-none">4.9</span>
                                            <div className="pb-1">
                                                <div className="text-yellow-400 flex gap-1 mb-1">
                                                    {[1,2,3,4,5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                                                </div>
                                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Out of 5 Stars</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-10 border-t border-gray-50 space-y-4">
                                        <p className="text-[13px] text-gray-500 font-medium italic leading-relaxed">Based on {tour.reviews} independently verified reviews from travelers like you.</p>
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center gap-1.5 bg-blue-50 px-3 py-1.5 rounded-none">
                                                <span className="text-[11px] font-black text-[#2a5da8] uppercase tracking-widest">Feefo</span>
                                                <div className="flex gap-0.5 text-yellow-400">
                                                    {[1,2,3,4,5].map(s => <Star key={s} size={8} fill="currentColor" />)}
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1.5 bg-emerald-50 px-3 py-1.5 rounded-none">
                                                <span className="text-[11px] font-black text-emerald-700 uppercase tracking-widest text-xs">★</span>
                                                <span className="text-[11px] font-black text-emerald-700 uppercase tracking-widest">Trustpilot</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Column 2: Itinerary Rating */}
                                <div className="p-8 lg:p-12 space-y-10">
                                    <div className="space-y-2">
                                        <h3 className="font-['Bellefair'] text-2xl text-[#0a1d37]">Itinerary Excellence</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed font-medium">Independent scores on the quality and flow of our curated journeys.</p>
                                    </div>
                                    <div className="space-y-4">
                                        {[
                                            { s: 5, w: '85%', c: 45 },
                                            { s: 4, w: '12%', c: 6 },
                                            { s: 3, w: '3%', c: 1 },
                                            { s: 2, w: '0%', c: 0 },
                                            { s: 1, w: '0%', c: 0 }
                                        ].map((item) => (
                                            <div key={item.s} className="flex items-center gap-4">
                                                <div className="flex items-center gap-1 min-w-[35px]">
                                                    <span className="text-xs font-bold text-gray-600">{item.s}</span>
                                                    <Star size={10} fill="currentColor" className="text-yellow-400" />
                                                </div>
                                                <div className="flex-1 h-2 bg-gray-50 rounded-none overflow-hidden">
                                                    <div className="h-full bg-[#0a1d37] rounded-none" style={{ width: item.w }} />
                                                </div>
                                                <span className="text-xs font-bold text-gray-400 min-w-[20px] text-right">{item.c}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Column 3: Global Experience */}
                                <div className="p-8 lg:p-12 space-y-10">
                                    <div className="space-y-2">
                                        <h3 className="font-['Bellefair'] text-2xl text-[#0a1d37]">Guest Experience</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed font-medium">How our customers rate the standard of service across all journeys.</p>
                                    </div>
                                    <div className="space-y-4">
                                        {[
                                            { s: 5, w: '92%', c: '112K+' },
                                            { s: 4, w: '6%', c: '28K' },
                                            { s: 3, w: '1%', c: '7K' },
                                            { s: 2, w: '0.5%', c: '2K' },
                                            { s: 1, w: '0.5%', c: '1K' }
                                        ].map((item) => (
                                            <div key={item.s} className="flex items-center gap-4">
                                                <div className="flex items-center gap-1 min-w-[35px]">
                                                    <span className="text-xs font-bold text-gray-600">{item.s}</span>
                                                    <Star size={10} fill="currentColor" className="text-yellow-400" />
                                                </div>
                                                <div className="flex-1 h-2 bg-gray-50 rounded-none overflow-hidden">
                                                    <div className="h-full bg-brand-orange rounded-none" style={{ width: item.w }} />
                                                </div>
                                                <span className="text-xs font-bold text-gray-400 min-w-[40px] text-right">{item.c}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Detailed Review List */}
                    <div className="max-w-5xl mx-auto px-6">
                        
                        {/* Filters - Glassmorphism style */}
                        <div className="bg-white/50 backdrop-blur-sm p-2 rounded-none border border-gray-100 flex flex-col md:flex-row items-center gap-2 mb-16 shadow-sm">
                            <div className="flex-1 flex flex-col md:flex-row gap-2 w-full">
                                <div className="relative flex-1 group">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#2a5da8] transition-colors">
                                        <TrendingUp size={16} />
                                    </div>
                                    <select className="w-full bg-white border border-transparent group-hover:border-gray-200 focus:border-[#2a5da8] rounded-none py-4 pl-12 pr-10 text-sm font-semibold text-[#0a1d37] outline-none transition-all appearance-none cursor-pointer">
                                        <option>Sort by: Newest First</option>
                                        <option>Sort by: Highest Rated</option>
                                        <option>Sort by: Most Helpful</option>
                                    </select>
                                    <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                </div>
                                <div className="relative flex-1 group">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#2a5da8] transition-colors">
                                        <List size={16} />
                                    </div>
                                    <select className="w-full bg-white border border-transparent group-hover:border-gray-200 focus:border-[#2a5da8] rounded-none py-4 pl-12 pr-10 text-sm font-semibold text-[#0a1d37] outline-none transition-all appearance-none cursor-pointer">
                                        <option>Filter: All Ratings</option>
                                        <option>Filter: 5 Stars Only</option>
                                        <option>Filter: 4 Stars & Up</option>
                                        <option>Filter: Verified Only</option>
                                    </select>
                                    <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                </div>
                            </div>
                            <button className="bg-[#0a1d37] text-white px-8 py-4 rounded-none text-sm font-bold hover:bg-[#1a2d47] transition-all w-full md:w-auto shadow-lg shadow-blue-900/10 active:scale-95">
                                Update Results
                            </button>
                        </div>

                        {/* Review Items */}
                        <div className="space-y-10">
                            {[
                                {
                                    id: 1,
                                    author: "Trusted Customer",
                                    date: "about 2 months ago",
                                    rating: 4,
                                    title: "A journey worth every penny",
                                    comment: "I was hesitant at first due to the price point, but every single detail was handled with such precision. From the luxury transfers to the hidden gem dining spots, it was truly a world-class experience.",
                                    verified: true,
                                    response: {
                                        author: "Mantombi, Guest Relations",
                                        text: "We are so pleased to hear that the attention to detail met your expectations! Our team works tirelessly to ensure every moment is seamless. Looking forward to welcoming you back soon."
                                    }
                                },
                                {
                                    id: 2,
                                    author: "Edward Starling",
                                    date: "6 months ago",
                                    rating: 5,
                                    title: "Breathtaking Kerala Solo Trip",
                                    comment: "As a solo traveler, safety and organization are my top priorities. BlueGateway exceeded both. Kerala is stunning, but the local guides made it unforgettable. Highly recommend to anyone looking for an authentic Indian experience.",
                                    verified: true,
                                    response: null
                                },
                                {
                                    id: 3,
                                    author: "Sarah Jenkins",
                                    date: "1 year ago",
                                    rating: 5,
                                    title: "The Highlight of our Year",
                                    comment: "This tour was the perfect mix of adventure and relaxation. The hotels were some of the best I've ever stayed in, and the group size was just right. We've already started looking at our next trip with you guys!",
                                    verified: true,
                                    response: {
                                        author: "James, Destination Manager",
                                        text: "It was a pleasure having you with us, Sarah! We're glad you enjoyed the hotels—we spend a lot of time hand-picking them for each itinerary. Can't wait to see where you go next!"
                                    }
                                }
                            ].map((review) => (
                                <div key={review.id} className="bg-white rounded-none p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-8">
                                        <div className="flex items-center gap-5">
                                            <div className="w-16 h-16 rounded-none bg-gradient-to-br from-[#2a5da8] to-[#1a3a6a] flex items-center justify-center text-white text-2xl font-bold font-['Bellefair'] shadow-lg group-hover:rotate-3 transition-transform">
                                                {review.author.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="flex flex-wrap items-center gap-3">
                                                    <h4 className="font-['Bellefair'] text-2xl text-[#0a1d37]">{review.author}</h4>
                                                    {review.verified && (
                                                        <span className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-none border border-emerald-100/50">
                                                            <CheckCircle2 size={12} strokeWidth={3} /> Verified Traveler
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-400 text-xs mt-1.5 font-medium">
                                                    <Clock size={14} className="text-gray-300" /> Reviewed {review.date}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-start md:items-end gap-2 bg-gray-50/50 md:bg-transparent p-4 md:p-0 rounded-none">
                                            <div className="flex gap-1 text-yellow-400">
                                                {[1, 2, 3, 4, 5].map(s => (
                                                    <Star key={s} size={16} fill={s <= review.rating ? "currentColor" : "transparent"} className={s <= review.rating ? "drop-shadow-sm" : "text-gray-200"} />
                                                ))}
                                            </div>
                                            <span className="text-[10px] font-bold text-[#2a5da8] uppercase tracking-[0.2em]">
                                                {review.rating === 5 ? 'Exceptional' : review.rating === 4 ? 'Excellent' : 'Good'}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="space-y-4 relative">
                                        <Quote size={40} className="absolute -left-4 -top-4 text-gray-50 opacity-50 group-hover:text-blue-50 transition-colors" fill="currentColor" />
                                        <h3 className="text-xl font-bold text-[#0a1d37] leading-snug relative z-10 group-hover:text-[#2a5da8] transition-colors">{review.title}</h3>
                                        <p className="text-gray-600 text-[16px] leading-relaxed font-medium relative z-10">
                                            "{review.comment}"
                                        </p>
                                    </div>

                                    {review.response && (
                                        <div className="mt-10 pt-10 border-t border-gray-50 relative">
                                            <div className="bg-[#f0f7ff]/40 rounded-none p-6 md:p-8 border border-blue-100/30">
                                                <div className="flex items-center gap-4 mb-4">
                                                    <div className="w-10 h-10 rounded-none bg-white shadow-sm flex items-center justify-center text-[#2a5da8] border border-blue-50">
                                                        <MessageSquare size={20} />
                                                    </div>
                                                    <div>
                                                        <h5 className="font-bold text-[#0a1d37] text-sm">{review.response.author}</h5>
                                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Brand Ambassador</span>
                                                    </div>
                                                </div>
                                                <p className="text-gray-600 text-sm leading-relaxed font-medium pl-0 md:pl-14">
                                                    {review.response.text}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                    </div>
                    </section>
                )}

        </div>

      {/* LEAD MODAL - TRAFALGAR STYLE EASY QUOTE */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-[3000] flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={() => setIsQuoteModalOpen(false)} />
            <div className="relative bg-white w-full max-w-6xl rounded-sm shadow-2xl overflow-hidden animate-slide-in-up max-h-[95vh] flex flex-col text-gray-700">
                
                {/* Header: Tour Info */}
                <div className="px-8 py-5 border-b border-gray-100 flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-5">
                        <img src={tour.img} alt="Tour" className="w-20 h-12 object-cover rounded-sm shadow-md" />
                        <h3 className="text-xl md:text-2xl font-['Bellefair'] font-bold text-gray-900 tracking-tight">{tour.title}</h3>
                    </div>
                    <button onClick={() => setIsQuoteModalOpen(false)} className="text-gray-400 hover:text-gray-900 transition-all">
                        <X size={22} />
                    </button>
                </div>

                {/* Body: Two Column Form */}
                <div className="flex-1 overflow-y-auto p-8 pt-6 custom-scrollbar">
                    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsQuoteModalOpen(false); alert('Quote Request Submitted!'); }}>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                            
                            {/* Left Column: Trip & Personal Details */}
                            <div className="space-y-4">
                                {/* Travel Date */}
                                <div className="space-y-2">
                                    <div className="flex justify-between items-end">
                                        <label className="text-[13px] font-bold text-gray-700">Travel Date</label>
                                        <span className="text-[10px] text-gray-400 font-medium italic">*Required</span>
                                    </div>
                                    <select required className="w-full border border-gray-200 rounded-sm p-2.5 text-sm outline-none focus:border-brand-blue transition-all appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22%239ca3af%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22m19%209-7%207-7-7%22%2F%3E%3C%2Fsvg%3E')] bg-[length:18px] bg-[right_10px_center] bg-no-repeat">
                                        <option value="">Select your preferred travel date *</option>
                                        {['June 2026', 'July 2026', 'August 2026'].map(m => <option key={m}>{m}</option>)}
                                    </select>
                                </div>

                                {/* Number of Guests */}
                                <div className="space-y-2">
                                    <label className="text-[13px] font-bold text-gray-700">Number of Guests</label>
                                    <input type="number" min="1" placeholder="Enter number of travelers" className="w-full border border-gray-200 rounded-sm p-2.5 text-sm outline-none focus:border-brand-blue" />
                                </div>

                                {/* Include Air Quote */}
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input type="checkbox" className="w-4 h-4 border-gray-200 rounded-sm checked:bg-brand-blue transition-all" />
                                    <span className="text-[13px] font-medium text-gray-600">Include air quote</span>
                                </label>

                                {/* Personal Details Header */}
                                <div className="pt-2 space-y-3">
                                    <div className="flex justify-between items-end border-b border-gray-100 pb-1.5">
                                        <h4 className="text-[13px] font-bold text-gray-700 uppercase tracking-wide">Personal Details</h4>
                                        <span className="text-[10px] text-gray-400 font-medium italic">*Required</span>
                                    </div>
                                    <div className="space-y-2.5">
                                        <input required placeholder="First Name *" className="w-full border border-gray-200 rounded-sm p-2.5 text-sm outline-none focus:border-brand-blue" />
                                        <input required placeholder="Last Name *" className="w-full border border-gray-200 rounded-sm p-2.5 text-sm outline-none focus:border-brand-blue" />
                                        <input required type="email" placeholder="Email *" className="w-full border border-gray-200 rounded-sm p-2.5 text-sm outline-none focus:border-brand-blue" />
                                        <div className="relative group">
                                            <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2 pr-3 border-r border-gray-100">
                                                <span className="text-base">🇮🇳</span>
                                                <span className="text-[10px] font-bold text-gray-400">+91</span>
                                            </div>
                                            <input required type="tel" placeholder="Phone number" className="w-full border border-gray-200 rounded-sm p-2.5 pl-20 text-sm outline-none focus:border-brand-blue" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Additional Info & Checkboxes */}
                            <div className="space-y-5">
                                {/* Additional Information */}
                                <div className="space-y-2">
                                    <label className="text-[13px] font-bold text-gray-700">Additional Information</label>
                                    <textarea rows={4} className="w-full border border-gray-200 rounded-sm p-3 text-sm outline-none focus:border-brand-blue resize-none leading-relaxed" placeholder="Share any extra nights or special requests..."></textarea>
                                </div>

                                {/* Tick All That Apply */}
                                <div className="space-y-3">
                                    <div className="flex justify-between items-end border-b border-gray-100 pb-1.5">
                                        <h4 className="text-[13px] font-bold text-gray-700 uppercase tracking-wide">Please tick all that apply</h4>
                                        <span className="text-[10px] text-gray-400 font-medium italic">*Required</span>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <input type="checkbox" className="w-4 h-4 border-gray-200 rounded-sm" />
                                            <span className="text-[13px] text-gray-600 font-medium">I have travelled with BlueGateway before</span>
                                        </label>
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <input type="checkbox" className="w-4 h-4 border-gray-200 rounded-sm" />
                                            <span className="text-[13px] text-gray-600 font-medium">I am currently working with a travel agent</span>
                                        </label>
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <input type="checkbox" className="w-4 h-4 border-gray-200 rounded-sm" />
                                            <span className="text-[13px] text-gray-600 font-medium">I am a travel agent</span>
                                        </label>
                                    </div>
                                </div>

                                {/* Consent Checkboxes */}
                                <div className="pt-1 space-y-2">
                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input type="checkbox" defaultChecked className="w-4 h-4 border-gray-200 rounded-sm" />
                                        <span className="text-[13px] text-gray-600 font-medium">Keep me updated on latest news & deals</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input required type="checkbox" className="w-4 h-4 border-gray-200 rounded-sm" />
                                        <span className="text-[13px] text-gray-600 font-medium italic">I accept the privacy policy *</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Footer: Submit only */}
                        <div className="pt-6 border-t border-gray-100 flex items-center justify-end">
                            <button className="bg-brand-orange text-white px-14 py-3 rounded-sm text-sm font-black uppercase tracking-widest hover:bg-orange-600 transition-all shadow-lg active:scale-95">
                                Submit Request
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      )}

      {/* CUSTOMIZE MODAL */}
      {isCustomizeModalOpen && (
        <div className="fixed inset-0 z-[3000] flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={() => setIsCustomizeModalOpen(false)} />
            <div className="relative bg-white w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden animate-slide-in-up max-h-[95vh] flex flex-col text-gray-700">
                
                {/* Header */}
                <div className="px-8 py-6 bg-gradient-to-r from-[#0a1d37] to-[#2a5da8] flex items-center justify-between shrink-0">
                    <div className="flex flex-col">
                        <h3 className="text-2xl md:text-3xl font-['Bellefair'] text-white">Customize Your Journey</h3>
                        <p className="text-blue-100 text-sm font-medium">{tour.title}</p>
                    </div>
                    <button onClick={() => setIsCustomizeModalOpen(false)} className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all">
                        <X size={20} />
                    </button>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto p-8 pt-8 custom-scrollbar">
                    <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); setIsCustomizeModalOpen(false); alert('Customization Request Submitted!'); }}>
                        
                        {/* Dates Section */}
                        <div className="space-y-4 border-b border-gray-100 pb-8">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-orange flex items-center gap-2">
                                <Calendar size={16} /> 1. When do you want to travel?
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 mb-1">Start Date</label>
                                    <input type="date" className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:border-[#2a5da8] focus:ring-1 focus:ring-[#2a5da8] outline-none transition-all cursor-pointer" required value={customDates.start} onChange={e => setCustomDates({...customDates, start: e.target.value})} onClick={(e) => { try { e.target.showPicker(); } catch(err) {} }} />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 mb-1">End Date</label>
                                    <input type="date" className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:border-[#2a5da8] focus:ring-1 focus:ring-[#2a5da8] outline-none transition-all cursor-pointer" required value={customDates.end} onChange={e => setCustomDates({...customDates, end: e.target.value})} onClick={(e) => { try { e.target.showPicker(); } catch(err) {} }} />
                                </div>
                            </div>
                        </div>

                        {/* Guests Section */}
                        <div className="space-y-4 border-b border-gray-100 pb-8">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-orange flex items-center gap-2">
                                <Users size={16} /> 2. Who is traveling?
                            </h4>
                            <div className="flex flex-col md:flex-row md:items-center gap-8">
                                <div className="flex items-center gap-4 bg-gray-50 p-2 rounded-lg border border-gray-100">
                                    <button type="button" onClick={() => setCustomPeople(Math.max(1, customPeople - 1))} className="w-10 h-10 flex items-center justify-center bg-white rounded-md shadow-sm text-gray-600 hover:text-brand-orange transition-colors">
                                        <Minus size={16} />
                                    </button>
                                    <span className="w-8 text-center font-bold text-lg">{customPeople}</span>
                                    <button type="button" onClick={() => setCustomPeople(customPeople + 1)} className="w-10 h-10 flex items-center justify-center bg-white rounded-md shadow-sm text-gray-600 hover:text-brand-orange transition-colors">
                                        <Plus size={16} />
                                    </button>
                                </div>
                                
                                <div className="flex flex-wrap gap-3">
                                    {['Solo', 'Couple', 'Family', 'Group'].map(type => (
                                        <button 
                                            key={type} 
                                            type="button"
                                            onClick={() => {
                                                setTravelerType(type);
                                                if (type === 'Solo') setCustomPeople(1);
                                                else if (type === 'Couple') setCustomPeople(2);
                                                else if (type === 'Family') setCustomPeople(5);
                                                else if (type === 'Group') setCustomPeople(10);
                                            }}
                                            className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all border ${travelerType === type ? 'bg-[#2a5da8] text-white border-[#2a5da8] shadow-md' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'}`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Customizations Section */}
                        <div className="space-y-4 border-b border-gray-100 pb-8">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-orange flex items-center gap-2">
                                <Sparkles size={16} /> 3. How can we make it yours?
                            </h4>
                            <p className="text-xs text-gray-500 font-medium">Add extra nights, upgrade hotels, request private guides, or include specific experiences.</p>
                            <textarea 
                                rows={4} 
                                className="w-full border border-gray-200 rounded-lg p-4 text-sm focus:border-[#2a5da8] focus:ring-1 focus:ring-[#2a5da8] outline-none transition-all resize-none bg-gray-50/50" 
                                placeholder="E.g., We'd love to add 2 days in Paris and upgrade our hotel to a suite..."
                            ></textarea>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-4">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-orange flex items-center gap-2">
                                <Mail size={16} /> 4. Where should we send your custom plan?
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="First Name *" required className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:border-[#2a5da8] focus:ring-1 focus:ring-[#2a5da8] outline-none transition-all" />
                                <input type="text" placeholder="Last Name *" required className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:border-[#2a5da8] focus:ring-1 focus:ring-[#2a5da8] outline-none transition-all" />
                                <input type="email" placeholder="Email Address *" required className="w-full md:col-span-2 border border-gray-200 rounded-lg p-3 text-sm focus:border-[#2a5da8] focus:ring-1 focus:ring-[#2a5da8] outline-none transition-all" />
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="pt-4 flex justify-end">
                            <button type="submit" className="bg-[#2a5da8] hover:bg-[#1e4682] text-white px-10 py-4 rounded-lg text-sm font-bold uppercase tracking-widest transition-all shadow-xl hover:shadow-blue-900/20 active:scale-95 flex items-center gap-2">
                                Get Custom Plan <ArrowRight size={16} />
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
      )}
    </div>

  );
};

export default TourDetails;
