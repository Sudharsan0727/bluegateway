import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TravelDestinations = () => {
  return (
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
  );
};

export default TravelDestinations;
