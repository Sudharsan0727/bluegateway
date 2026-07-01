import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import galleryAlps from '../../assets/gallery-alps.png';
import galleryBali from '../../assets/gallery-bali.png';
import galleryParis from '../../assets/gallery-paris.png';
import gallerySafari from '../../assets/gallery-safari.png';
import galleryTokyo from '../../assets/gallery-tokyo.png';

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

export default AuroraSuiteSection;
