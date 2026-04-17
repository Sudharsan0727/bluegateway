import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Star, Clock, MapPin, ChevronRight, CheckCircle2, 
  Calendar, Users, ShieldCheck, Heart, Share2, 
  Info, Image, List, MessageSquare, ArrowLeft,
  Plane, Bed, Coffee, Map
} from 'lucide-react';
import { tours } from '../data/tours';

const TourDetails = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const foundTour = tours.find(t => t.id === parseInt(id));
    setTour(foundTour);
    window.scrollTo(0, 0);
  }, [id]);

  if (!tour) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Tour Not Found</h2>
        <Link to="/" className="text-brand-blue font-bold flex items-center gap-2">
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <Info size={18} /> },
    { id: 'itinerary', label: 'Itinerary', icon: <List size={18} /> },
    { id: 'gallery', label: 'Gallery', icon: <Image size={18} /> },
    { id: 'reviews', label: 'Reviews', icon: <MessageSquare size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-[#fcfcfd] pb-20">
      {/* Hero Section */}
      <div className="relative h-[65vh] md:h-[75vh] w-full overflow-hidden">
        <img 
          src={tour.img} 
          alt={tour.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        {/* Top Controls */}
        <div className="absolute top-28 left-0 w-full px-4 md:px-12 flex justify-between items-center z-10">
          <Link to="/" className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-brand-blue transition-all border border-white/20 shadow-xl">
            <ArrowLeft size={24} />
          </Link>
          <div className="flex gap-4">
            <button 
              onClick={() => setIsFavorite(!isFavorite)}
              className={`w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center transition-all border border-white/20 shadow-xl ${isFavorite ? 'bg-red-500 text-white border-red-500' : 'bg-white/20 text-white hover:bg-white hover:text-red-500'}`}
            >
              <Heart size={24} fill={isFavorite ? 'currentColor' : 'none'} />
            </button>
            <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-brand-blue transition-all border border-white/20 shadow-xl">
              <Share2 size={24} />
            </button>
          </div>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-12 left-0 w-full px-4 md:px-12 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-brand-orange text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                {tour.tag}
              </span>
              <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/20">
                {tour.type}
              </span>
            </div>
            <h1 className="text-4xl md:text-7xl font-['Bellefair'] text-white mb-6 drop-shadow-2xl">
              {tour.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <MapPin size={18} className="text-brand-orange" />
                </div>
                <span className="font-semibold">{tour.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Clock size={18} className="text-brand-orange" />
                </div>
                <span className="font-semibold">{tour.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Star size={18} className="text-brand-orange fill-brand-orange" />
                </div>
                <span className="font-semibold">{tour.rating} ({tour.reviews} Reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column */}
          <div className="lg:col-span-8">
            {/* Navigation Tabs */}
            <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-2 mb-10 flex border border-gray-100 overflow-x-auto no-scrollbar scroll-smooth">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
                    activeTab === tab.id 
                    ? 'bg-[#0a1d37] text-white shadow-lg shadow-blue-900/20' 
                    : 'text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-100/50 border border-gray-50">
              {activeTab === 'overview' && (
                <div className="animate-fade-in">
                  <h3 className="text-3xl font-['Bellefair'] text-[#0a1d37] mb-6">About the Journey</h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-10">
                    {tour.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                      <h4 className="font-bold text-[#0a1d37] mb-4 flex items-center gap-2">
                        <CheckCircle2 size={20} className="text-brand-orange" /> Highlights
                      </h4>
                      <ul className="space-y-3">
                        {tour.highlights.map((h, i) => (
                          <li key={i} className="text-gray-600 text-sm flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0"></div>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50/30 rounded-2xl p-6 border border-blue-100/50">
                      <h4 className="font-bold text-[#0a1d37] mb-4 flex items-center gap-2">
                        <Bed size={20} className="text-brand-blue" /> What's Included
                      </h4>
                      <ul className="space-y-3">
                        {tour.inclusions.map((inc, i) => (
                          <li key={i} className="text-gray-600 text-sm flex items-start gap-3">
                            <CheckCircle2 size={16} className="text-brand-blue mt-0.5 shrink-0" />
                            {inc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Icon Info Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                      { icon: <Map size={24} />, label: "Full Itinerary" },
                      { icon: <Plane size={24} />, label: "Flight Included" },
                      { icon: <Bed size={24} />, label: "Luxury Stay" },
                      { icon: <Coffee size={24} />, label: "Gourmet Food" }
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                        <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-brand-orange">
                          {item.icon}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'itinerary' && (
                <div className="animate-fade-in">
                  <h3 className="text-3xl font-['Bellefair'] text-[#0a1d37] mb-8">Detailed Itinerary</h3>
                  <div className="space-y-0">
                    {tour.itinerary.map((day, i) => (
                      <div key={i} className="flex gap-6 md:gap-10 group">
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-lg shrink-0 z-10 shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform">
                            {day.day}
                          </div>
                          {i !== tour.itinerary.length - 1 && (
                            <div className="w-0.5 h-full bg-gray-100 group-hover:bg-brand-orange/30 transition-colors"></div>
                          )}
                        </div>
                        <div className="pb-12 pt-1 flex-grow">
                          <h4 className="text-xl font-bold text-[#0a1d37] mb-3 group-hover:text-brand-blue transition-colors">Day {day.day}: {day.title}</h4>
                          <p className="text-gray-600 leading-relaxed font-medium bg-gray-50/50 p-6 rounded-2xl border border-gray-100 group-hover:bg-white group-hover:shadow-xl group-hover:shadow-gray-100 transition-all">
                            {day.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'gallery' && (
                <div className="animate-fade-in">
                  <h3 className="text-3xl font-['Bellefair'] text-[#0a1d37] mb-8">Moment Captured</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tour.gallery.map((img, i) => (
                      <div key={i} className={`relative rounded-2xl overflow-hidden group cursor-pointer ${i === 0 ? 'md:col-span-2 aspect-video' : 'aspect-square'}`}>
                        <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

                {activeTab === 'reviews' && (
                <div className="animate-fade-in text-center py-12">
                  <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center text-brand-orange mx-auto mb-6">
                    <MessageSquare size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0a1d37] mb-4">Guest Reviews Coming Soon</h3>
                  <p className="text-gray-500 max-w-md mx-auto">We are currently migrating our guest feedback to our new platform. Check back shortly to read about their amazing experiences!</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
            <div className="bg-white rounded-[32px] p-8 shadow-[0_30px_100px_rgba(10,29,55,0.1)] border border-gray-100">
              <div className="flex items-end justify-between mb-8">
                <div>
                  <span className="block text-xs font-bold text-gray-400 uppercase mb-1">Total Price</span>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold text-brand-blue leading-none">${tour.price}</span>
                    <span className="text-sm font-bold text-gray-300 line-through mb-1">${tour.oldPrice}</span>
                  </div>
                </div>
                <div className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-bold">15% OFF</div>
              </div>

              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-4 border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-brand-orange shadow-sm">
                    <Calendar size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-400 uppercase">Departure Date</span>
                    <span className="text-sm font-bold text-gray-800">Select Date</span>
                  </div>
                  <ChevronRight size={16} className="ml-auto text-gray-300" />
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-4 border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-brand-orange shadow-sm">
                    <Users size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-400 uppercase">Travelers</span>
                    <span className="text-sm font-bold text-gray-800">2 Persons</span>
                  </div>
                  <ChevronRight size={16} className="ml-auto text-gray-300" />
                </div>
              </div>

              <button className="w-full bg-[#0a1d37] hover:bg-brand-blue text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-900/20 transition-all hover:-translate-y-1 mb-6">
                Reserve My Spot
              </button>

              <p className="text-center text-xs text-gray-400 font-medium mb-8">No payment required now. Pay later.</p>

              <div className="space-y-4 pt-8 border-t border-gray-50">
                <div className="flex items-center gap-3 text-sm font-semibold text-gray-600">
                  <ShieldCheck size={18} className="text-emerald-500" />
                  Free Cancellation up to 48h
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-gray-600">
                   <ShieldCheck size={18} className="text-emerald-500" />
                  Best Price Guarantee
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-gray-600">
                   <ShieldCheck size={18} className="text-emerald-500" />
                  24/7 Local Assistance
                </div>
              </div>
            </div>

            {/* Support Box */}
            <div className="mt-8 bg-brand-blue/5 rounded-3xl p-6 border border-brand-blue/10">
              <h5 className="font-bold text-[#0a1d37] mb-2">Need Help?</h5>
              <p className="text-sm text-gray-500 mb-4">Our travel experts are ready to help you customize this journey.</p>
              <button className="text-brand-orange font-bold text-sm uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                Speak to Expert <ArrowLeft size={16} className="rotate-180" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TourDetails;
