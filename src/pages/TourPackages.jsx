import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, MapPin, ChevronRight, Filter } from 'lucide-react';
import { tours } from '../data/tours';
import imgHeroBg from '../assets/hero-bg.png';

const TourPackages = () => {
  const packages = tours;

  return (
    <div className="pb-20 min-h-screen bg-gray-50 flex flex-col">
      {/* Curved Inner Banner Design */}
      <div className="relative pt-24 min-h-[75vh] flex flex-col items-center justify-center bg-[#0a1d37]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img src={imgHeroBg} alt="Tour Packages Banner" className="w-full h-full object-cover animate-slow-zoom" />
        </div>

        {/* SVG Bottom Upward Curve */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10" style={{ transform: 'translateY(1px)' }}>
          <svg viewBox="0 0 1440 120" className="w-full h-24 md:h-32 lg:h-40 text-gray-50 fill-current" preserveAspectRatio="none">
             <path d="M0,120 L1440,120 L1440,80 Q720,0 0,80 Z" />
          </svg>
        </div>
      </div>

      {/* Below Curve Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 text-center mt-4 mb-8">
          <h1 className="font-['Bellefair'] text-5xl md:text-6xl lg:text-[70px] text-[#2a5da8] mb-2 relative z-20 drop-shadow-sm whitespace-nowrap">
            Featured
          </h1>
          <h2 className="font-['Bellefair'] text-4xl md:text-6xl lg:text-[75px] leading-tight text-brand-orange mb-8 uppercase tracking-wider relative z-10 inline-block drop-shadow-lg">
            Packages
          </h2>
          <p className="text-gray-600 font-medium max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Curated itineraries designed to immerse you in the culture, beauty, and excitement of the world's finest destinations.
          </p>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-12 flex-grow w-full">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
           <h2 className="text-2xl font-bold text-gray-800">Showing {packages.length} Packages</h2>
           <div className="flex gap-4">
             <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xl text-gray-600 font-medium hover:bg-gray-50">
               <Filter size={18} /> Filters
             </button>
             <select className="bg-white border border-gray-200 px-4 py-2 rounded-xl text-gray-600 font-medium outline-none">
               <option>Sort by: Recommended</option>
               <option>Price: Low to High</option>
               <option>Price: High to Low</option>
             </select>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <Link 
              key={i} 
              to={`/tour/${pkg.id}`}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
               <div className="relative h-64 overflow-hidden">
                 <img src={pkg.img} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-[#0a1d37]">{pkg.tag || pkg.type}</div>
                 <div className="absolute bottom-4 right-4 bg-brand-orange text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                   <Clock size={12} /> {pkg.duration}
                 </div>
               </div>
               <div className="p-6">
                 <div className="flex justify-between items-center mb-3">
                   <span className="flex items-center gap-1 text-xs font-semibold text-gray-400 uppercase"><MapPin size={14} className="text-brand-orange"/> {pkg.location}</span>
                   <span className="flex items-center gap-1 text-sm font-semibold text-[#0a1d37]"><Star size={14} className="text-brand-orange fill-brand-orange"/> {pkg.rating}</span>
                 </div>
                 <h3 className="text-xl font-semibold text-gray-900 mb-4 h-14">{pkg.title}</h3>
                 <div className="flex justify-between items-end border-t border-gray-100 pt-4">
                   <div>
                     <span className="text-xs text-gray-400 font-semibold uppercase block mb-1">Starting From</span>
                     <span className="text-2xl font-bold text-brand-blue">${pkg.price}</span>
                   </div>
                   <div className="bg-gray-100 text-[#0a1d37] w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-colors">
                     <ChevronRight size={20} />
                   </div>
                 </div>
               </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourPackages;
