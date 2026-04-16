import React from 'react';
import { Users, Globe, Award } from 'lucide-react';
import imgHeroBg from '../assets/4.jpg';
import imgStory from '../assets/5.jpg';

const AboutUs = () => {
  return (
    <div className="pb-0 min-h-screen bg-gray-50 flex flex-col">
      {/* Curved Inner Banner Design */}
      <div className="relative pt-24 min-h-[75vh] flex flex-col items-center justify-center bg-[#0a1d37]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img src={imgHeroBg} alt="About Us Banner" className="w-full h-full object-cover animate-slow-zoom" />
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
            Personalized Luxury
          </h1>
          <h2 className="font-['Bellefair'] text-4xl md:text-6xl lg:text-[75px] leading-tight text-brand-orange mb-8 uppercase tracking-wider relative z-10 inline-block drop-shadow-lg">
            About Us
          </h2>
          <p className="text-gray-600 font-medium max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            A legacy of crafting extraordinary travel experiences that redefine the boundaries of luxury and exploration. Discover the hearts behind Blue Gateway.
          </p>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid lg:grid-cols-2 gap-16 items-center flex-grow">
        <div>
          <span className="text-brand-orange font-black uppercase tracking-widest text-xs mb-4 block">Our Story</span>
          <h3 className="font-['Cinzel'] text-4xl md:text-5xl text-[#0a1d37] mb-8 leading-tight">Redefining <br/>The Art Of <span className="text-brand-orange italic">Travel</span></h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">
            Blue Gateway was founded on a simple premise: travel should be as seamless as it is spectacular. We noticed a gap in the market for truly personalized, stress-free luxury travel planning. 
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium">
            Today, we are proud to be the trusted travel partners for thousands of explorers, delivering unforgettable experiences across 50+ countries.
          </p>
          
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
             <div>
               <h4 className="text-4xl text-brand-blue font-black mb-2">10k+</h4>
               <span className="text-sm text-gray-500 font-bold uppercase tracking-wider">Journeys Curated</span>
             </div>
             <div>
               <h4 className="text-4xl text-brand-orange font-black mb-2">99%</h4>
               <span className="text-sm text-gray-500 font-bold uppercase tracking-wider">Client Satisfaction</span>
             </div>
          </div>
        </div>
        
        <div className="relative">
          <img src={imgStory} alt="About Us Story" className="rounded-3xl shadow-2xl relative z-10 w-full h-[500px] object-cover" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-orange-50 rounded-full z-0"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-50 rounded-full z-0"></div>
        </div>
      </div>
      
      {/* Values */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-['Bellefair'] text-4xl md:text-5xl text-[#0a1d37]">Our Core Principles</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: <Globe size={40}/>, title: 'Global Network', desc: 'Deep relationships with properties worldwide.' },
              { icon: <Users size={40}/>, title: 'Client First', desc: 'Your preferences dictate every decision we make.' },
              { icon: <Award size={40}/>, title: 'Excellence', desc: 'Uncompromising standard of service and quality.' }
            ].map((v, i) => (
              <div key={i} className="text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
                 <div className="w-20 h-20 mx-auto bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center mb-6">
                   {v.icon}
                 </div>
                 <h3 className="text-2xl font-bold text-gray-900 mb-4">{v.title}</h3>
                 <p className="text-gray-500 font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
