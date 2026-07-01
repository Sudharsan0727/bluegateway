import React from 'react';
import { Globe, Star, ShieldCheck, Clock } from 'lucide-react';

const TrustBar = () => {
  return (
    <section className="bg-white border-b border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { icon: <Globe size={24} />, title: "50+ Countries", desc: "Expert local knowledge" },
          { icon: <Star size={24} />, title: "4.9/5 Rating", desc: "Based on 12k reviews" },
          { icon: <ShieldCheck size={24} />, title: "Full Protection", desc: "100% Secure bookings" },
          { icon: <Clock size={24} />, title: "24/7 Concierge", desc: "Always by your side" }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 group">
            <div className="text-brand-blue p-3 bg-gray-50 rounded-2xl group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
              {item.icon}
            </div>
            <div>
              <h4 className="font-bold text-gray-900 leading-none mb-1">{item.title}</h4>
              <p className="text-xs text-gray-500 font-medium">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
