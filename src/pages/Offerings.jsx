import React from 'react';
import { ShieldCheck, Compass, Plane, CreditCard, Headphones, Star } from 'lucide-react';
import imgHeroBg from '../assets/2.jpg'; 

const Offerings = () => {
  const services = [
    { title: 'Global Concierge', icon: <Headphones size={32}/>, desc: 'Our 24/7 dedicated concierge service ensures that your every requirement is met with precision and discretion, globally.' },
    { title: 'Private Aviation', icon: <Plane size={32}/>, desc: 'Access to an elite fleet of private jets ensuring you travel in utter privacy, comfort, and securely on your own schedule.' },
    { title: 'Bespoke Itineraries', icon: <Compass size={32}/>, desc: 'Every journey is crafted exactly to your preferences. No templates, just deeply personalized travel experiences.' },
    { title: 'Financial Security', icon: <CreditCard size={32}/>, desc: 'Your bookings are fully protected. We ensure absolute transaction security and comprehensive insurance options.' },
    { title: 'Premium Access', icon: <Star size={32}/>, desc: 'Gain exclusive entry to private events, sold-out shows, and members-only clubs across our destination network.' },
    { title: 'Visa Processing', icon: <ShieldCheck size={32}/>, desc: 'As our motto says, "Get the visa. Without any stress." Our in-house legal team handles all documentation for seamless entry.' },
  ];

  return (
    <div className="pb-20 min-h-screen bg-gray-50 flex flex-col">
      {/* Curved Inner Banner Design */}
      <div className="relative pt-24 min-h-[75vh] flex flex-col items-center justify-center bg-[#0a1d37]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img src={imgHeroBg} alt="Offerings Banner" className="w-full h-full object-cover animate-slow-zoom" />
        </div>

        {/* SVG Bottom Upward Curve */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10" style={{ transform: 'translateY(1px)' }}>
          <svg viewBox="0 0 1440 120" className="w-full h-24 md:h-32 lg:h-40 text-gray-50 fill-current" preserveAspectRatio="none">
             <path d="M0,120 L1440,120 L1440,80 Q720,0 0,80 Z" />
          </svg>
        </div>
      </div>

      {/* Below Curve Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 text-center mt-4 mb-12">
          <h1 className="font-['Bellefair'] text-5xl md:text-6xl lg:text-[70px] text-[#2a5da8] mb-2 relative z-20 drop-shadow-sm whitespace-nowrap">
            Premium
          </h1>
          <h2 className="font-['Bellefair'] text-4xl md:text-6xl lg:text-[75px] leading-tight text-brand-orange mb-8 uppercase tracking-wider relative z-10 inline-block drop-shadow-lg">
            Offerings
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
            Beyond mere travel, we provide a holistic suite of luxury lifestyle services tailored for the world's most discerning individuals.
          </p>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-20 flex-grow w-full">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
           {services.map((srv, i) => (
             <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                  {srv.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-['Cinzel']">{srv.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">{srv.desc}</p>
             </div>
           ))}
         </div>
      </div>

      {/* Luxury Standards Section */}
      <div className="bg-[#0a1d37] text-white py-24 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-full md:w-1/2 h-full opacity-20">
          <img src={imgHeroBg} className="w-full h-full object-cover" alt="Luxury Asset" />
          <div className="absolute inset-0 bg-gradient-to-l from-[#0a1d37] to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="hidden lg:block relative">
               <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
                 <img src={imgHeroBg} alt="Luxury Background" className="w-full h-80 object-cover" />
               </div>
               <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-orange rounded-3xl -z-0 animate-float-gentle"></div>
            </div>
            
            <div className="space-y-8">
              <div>
                <span className="text-brand-orange font-semibold tracking-widest text-xs uppercase block mb-4">The Blue Gateway Standard</span>
                <h2 className="font-['Bellefair'] text-4xl md:text-5xl mb-6 leading-tight">Elite Travel, Refined <br/>For Perfection</h2>
                <div className="w-20 h-1 bg-brand-orange rounded-full mb-8"></div>
              </div>
              
              <div className="space-y-6">
                {[
                  { q: "Unrivaled Privacy", a: "Your identity and travel details are shielded with military-grade discretion." },
                  { q: "Global Network", a: "Access exclusive properties and events that aren't available on the open market." },
                  { q: "Personal Advocacy", a: "Our team serves as your global representative, handling every detail on your behalf." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                    <div>
                      <h4 className="font-['Cinzel'] text-lg font-bold mb-1 text-white">{item.q}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Membership Tiers Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <span className="font-['Bellefair'] text-4xl md:text-5xl text-[#0a1d37] block mb-2 text-center">Service Levels</span>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full mt-6"></div>
          <p className="text-gray-500 max-w-2xl mx-auto mt-6 text-lg text-center font-medium">Select the level of care and exclusivity that fits your global lifestyle requirements.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              name: "Elite", 
              price: "5k", 
              features: ["Personal Travel Advisor", "Premium Hotel Perks", "Standard Visa Support", "Economy/Business Upgrades"],
              popular: false
            },
            { 
              name: "Prestige", 
              price: "15k", 
              features: ["24/7 Dedicated Concierge", "Private Lounge Access", "Full Visa Management", "Private Yacht Charters"],
              popular: true
            },
            { 
              name: "Vanguard", 
              price: "50k", 
              features: ["Unlimited Private Jets", "Invite-only Events", "Personal Security Detail", "Global Estate Management"],
              popular: false
            }
          ].map((tier, i) => (
            <div key={i} className={`relative p-10 rounded-[2.5rem] border ${tier.popular ? 'bg-[#0a1d37] text-white border-transparent shadow-2xl scale-105 z-10' : 'bg-white text-gray-900 border-gray-100 shadow-sm hover:shadow-xl'} transition-all duration-500 flex flex-col`}>
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-orange text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1 rounded-full">
                  Recommended
                </div>
              )}
              <h3 className="font-['Cinzel'] text-2xl font-bold mb-4">{tier.name}</h3>
              <div className="mb-8">
                <span className="text-4xl font-black">${tier.price}</span>
                <span className={`${tier.popular ? 'text-gray-400' : 'text-gray-400'} text-xs font-bold uppercase ml-2 tracking-widest`}>/ annual</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feat, fi) => (
                  <li key={fi} className="flex items-center gap-3 text-sm font-medium">
                    <div className={`w-1.5 h-1.5 rounded-full ${tier.popular ? 'bg-brand-orange' : 'bg-brand-blue'}`}></div>
                    {feat}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all ${tier.popular ? 'bg-white text-[#0a1d37] hover:bg-brand-orange hover:text-white' : 'bg-gray-50 text-[#0a1d37] hover:bg-brand-blue hover:text-white border border-gray-100'}`}>
                Apply for {tier.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offerings;
