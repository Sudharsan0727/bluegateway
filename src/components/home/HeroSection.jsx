import React, { useState } from 'react';
import {
  MapPin,
  Calendar,
  Compass,
  Users,
  Star,
  Zap,
  Search,
  ChevronRight
} from 'lucide-react';
import heroBg from '../../assets/hero-bg.png';

const HeroSection = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [activeSearchCategory, setActiveSearchCategory] = useState(null);

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
    <div className="relative h-screen flex items-center justify-center pt-32">
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
  );
};

export default HeroSection;
