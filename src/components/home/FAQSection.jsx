import React, { useState } from 'react';
import { Mail, Plus, ArrowRight } from 'lucide-react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    { q: "Do you offer customizable travel packages?", a: "Absolutely. Every journey we design is bespoke. We start with a consultation to understand your preferences, then curate a specialized itinerary just for you." },
    { q: "What is included in the Luxury Tier pricing?", a: "Our Luxury Tier includes business/first-class flights, 5-star accommodation, private transfers, exclusive access to landmarks, and a dedicated 24/7 concierge." },
    { q: "Can I make changes to my itinerary after booking?", a: "Yes, we understand plans change. We offer flexible modification policies up to 14 days before departure for most of our destinations." },
    { q: "Do you provide travel insurance?", a: "We partner with premium insurers to offer comprehensive coverage. While optional, we highly recommend it for complete peace of mind." },
    { q: "How are visa processes handled?", a: "Our dedicated concierge team manages the entire visa application process for you, providing document checklists and appointment scheduling." }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] -right-[5%] w-[800px] h-[800px] rounded-full bg-orange-50/50 blur-3xl opacity-60"></div>
        <div className="absolute bottom-[10%] -left-[5%] w-[600px] h-[600px] rounded-full bg-blue-50/50 blur-3xl opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Left Column: Heading */}
          <div className="lg:col-span-5 space-y-10 lg:sticky static top-24">
            <div className="space-y-4">
              <span className="font-['Bellefair'] text-4xl md:text-7xl text-[#2a5da8] block mb-2">The Fine Print</span>
              <h2 className="font-['Bellefair'] text-2xl md:text-6xl leading-tight text-brand-orange mb-6 uppercase tracking-wider">
                Curated Clarity
              </h2>
            </div>

            <p className="text-gray-500 text-lg leading-relaxed font-light max-w-md">
              Transparency is the ultimate luxury. We've gathered the details discerning travelers seek most often, allowing you to dream without hesitation.
            </p>

            <div className="flex flex-col gap-4">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <Mail size={18} />
                  </div>
                  <span className="font-['Cinzel'] font-bold text-[#0a1d37]">Still have questions?</span>
                </div>
                <p className="text-sm text-gray-500 mb-4 md:pl-14">Our concierge team is available 24/7 to provide personalized answers.</p>
                <button className="md:ml-14 text-xs font-black uppercase tracking-widest text-brand-orange flex items-center gap-2 hover:gap-4 transition-all">
                  Contact Concierge <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {faqs.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className={`group border-b border-gray-100 pb-6 transition-all duration-500 cursor-pointer ${activeIndex === index ? 'pb-10 pt-4' : 'pt-4 hover:border-brand-orange/30'}`}
              >
                <div className="flex justify-between items-center gap-6">
                  <span className={`font-['Cinzel'] text-xl lg:text-2xl transition-colors duration-300 ${activeIndex === index ? 'text-brand-orange' : 'text-[#0a1d37] group-hover:text-brand-blue'}`}>
                    0{index + 1}. <span className="ml-2 font-sans font-bold tracking-tight text-lg lg:text-xl text-[#0a1d37] group-hover:text-brand-blue transition-colors">{item.q}</span>
                  </span>

                  <span className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-500 ${activeIndex === index ? 'bg-brand-orange text-white rotate-45' : 'bg-gray-50 text-gray-400 group-hover:bg-brand-blue group-hover:text-white'}`}>
                    <Plus size={16} />
                  </span>
                </div>

                <div className={`grid transition-all duration-500 ease-in-out ${activeIndex === index ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                  <div className="overflow-hidden pl-0 lg:pl-[1.5rem]">
                    <p className="text-gray-500 leading-relaxed text-base border-l-2 border-brand-orange/20 pl-6">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
