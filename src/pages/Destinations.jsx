import React from 'react';
import { MapPin, Search, ChevronRight, Star } from 'lucide-react';

import imgHeroBg from '../assets/3.jpg';
import imgEurope from '../assets/paris.png';
import imgAsia from '../assets/gallery-tokyo.png';
import imgOceania from '../assets/bali.png';
import imgAmericas from '../assets/switzerland.png'; // using placeholder
import imgAfrica from '../assets/gallery-safari.png';

const Destinations = () => {
  const regions = [
    { title: "Europe", subtitle: "Old World Charm", img: imgEurope },
    { title: "Asia", subtitle: "Mystical Lands", img: imgAsia },
    { title: "Oceania", subtitle: "Untamed Beauty", img: imgOceania },
    { title: "Americas", subtitle: "Diverse Horizons", img: imgAmericas },
    { title: "Africa", subtitle: "Wild Heart", img: imgAfrica },
  ];

  return (
    <div className="pb-20 min-h-screen bg-gray-50 flex flex-col">
      {/* Curved Inner Banner Design */}
      <div className="relative pt-24 min-h-[75vh] flex flex-col items-center justify-center bg-[#0a1d37]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img src={imgHeroBg} alt="Destinations Banner" className="w-full h-full object-cover animate-slow-zoom" />
        </div>

        {/* SVG Bottom Upward Curve */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10" style={{ transform: 'translateY(1px)' }}>
          <svg viewBox="0 0 1440 120" className="w-full h-24 md:h-32 lg:h-40 text-gray-50 fill-current" preserveAspectRatio="none">
             <path d="M0,120 L1440,120 L1440,80 Q720,0 0,80 Z" />
          </svg>
        </div>
      </div>
      
      {/* Below Curve Content (Creative Typography) */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 text-center mt-4 mb-20">
          <h1 className="font-['Bellefair'] text-5xl md:text-6xl lg:text-[70px] text-[#2a5da8] mb-2 relative z-20 drop-shadow-sm whitespace-nowrap">
            Explore All
          </h1>
          <h2 className="font-['Bellefair'] text-4xl md:text-6xl lg:text-[75px] leading-tight text-brand-orange mb-8 uppercase tracking-wider relative z-10 inline-block drop-shadow-lg">
            Destinations
          </h2>
          <p className="text-gray-600 font-medium max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            At Blue Gateway, we believe travel is more than just visiting places—it's about discovering stories, building connections, and creating memories that last a lifetime.
          </p>
      </div>

      {/* Regions Grid */}
      <div className="max-w-7xl mx-auto px-4 py-24 flex-grow">
        <div className="text-center mb-16">
          <span className="font-['Bellefair'] text-4xl md:text-5xl text-[#2a5da8] block mb-2">Discover By Region</span>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regions.map((region, i) => (
            <div key={i} className={`group relative h-96 rounded-3xl overflow-hidden cursor-pointer shadow-xl ${i === 0 || i === 3 ? 'md:col-span-2 lg:col-span-2' : ''}`}>
               <img src={region.img} alt={region.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <span className="text-brand-orange font-bold tracking-widest text-xs uppercase mb-2">{region.subtitle}</span>
                  <h3 className="font-['Cinzel'] text-3xl text-white flex justify-between items-center">
                    {region.title}
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                      <ChevronRight size={20} className="text-white" />
                    </div>
                  </h3>
               </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Featured Destination Strip */}
      <div className="bg-[#0a1d37] text-white py-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-full md:w-3/4 h-full opacity-80">
          <img src={imgAfrica} className="w-full h-full object-cover" alt="Featured" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1d37] via-[#0a1d37]/60 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 grid md:grid-cols-2">
          <div>
            <span className="text-brand-orange text-xs font-black uppercase tracking-widest mb-4 block">Destinations of the Month</span>
            <h2 className="font-['Bellefair'] text-5xl mb-6">The Caribbean <br/>Escapade</h2>
            <p className="text-gray-300 mb-8 max-w-md">Experience sun-drenched coves, vibrant cultural hubs, and unparalleled serenity on the high seas.</p>
            <button className="border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-8 py-3 rounded-full font-bold transition-colors">
              Explore Caribbean
            </button>
          </div>
        </div>
      </div>

      {/* Travel Styles Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <span className="font-['Bellefair'] text-4xl md:text-5xl text-[#0a1d37] block mb-2">Tailored Experiences</span>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full mt-6"></div>
          <p className="text-gray-500 max-w-2xl mx-auto mt-6 text-lg">Whether you seek thrill or tranquility, filter our handpicked destinations by your preferred style of travel.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { tag: "Adventure", img: imgAfrica },
            { tag: "Honeymoon", img: imgOceania },
            { tag: "Culture", img: imgEurope },
            { tag: "Wellness", img: imgAsia }
          ].map((style, i) => (
            <div key={i} className="group relative h-64 md:h-80 rounded-2xl overflow-hidden cursor-pointer shadow-md">
              <img src={style.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={style.tag} />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-['Cinzel'] text-xl md:text-2xl font-semibold tracking-wider drop-shadow-md group-hover:translate-y-[-5px] transition-transform">{style.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
