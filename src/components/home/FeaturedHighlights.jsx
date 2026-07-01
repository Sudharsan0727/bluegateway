import React from 'react';
import { Plane, ArrowRight } from 'lucide-react';
import gallerySafari from '../../assets/gallery-safari.png';
import galleryAlps from '../../assets/gallery-alps.png';
import galleryBali from '../../assets/gallery-bali.png';
import galleryTokyo from '../../assets/gallery-tokyo.png';
import galleryAmalfi from '../../assets/gallery-amalfi.png';

const FeaturedHighlights = () => {
  return (
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
  );
};

export default FeaturedHighlights;
