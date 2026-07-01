import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import galleryAlps from '../../assets/gallery-alps.png';
import galleryBali from '../../assets/gallery-bali.png';
import galleryTokyo from '../../assets/gallery-tokyo.png';
import galleryAmalfi from '../../assets/gallery-amalfi.png';

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

export default VanguardShowcase;
