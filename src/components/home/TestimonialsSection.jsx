import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-[#f9fafb] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="font-['Bellefair'] text-6xl md:text-7xl text-[#2a5da8] block mb-2">Reflections</span>
          <h2 className="font-['Bellefair'] text-3xl md:text-6xl leading-tight text-brand-orange mb-6 uppercase tracking-wider">Traveler Stories</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              text: "The attention to detail was unparalleled. Every transfer, every hotel, every experience felt personally curated just for us.",
              author: "Sarah Jenkins",
              location: "New York, USA",
              trip: "Swiss Alps Retreat",
              img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
            },
            {
              text: "Blue Gateways didn't just book a trip; they crafted a memory. The private sunset cruise in Santorini was the highlight of our year.",
              author: "David Chen",
              location: "Toronto, Canada",
              trip: "Santorini Luxury",
              img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
            },
            {
              text: "From the moment we landed in Bali to our departure, everything was seamless. Truly the best travel agency we've ever worked with.",
              author: "Emma Wilson",
              location: "London, UK",
              trip: "Bali Jungle Trek",
              img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
            }
          ].map((testimonial, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100 relative group transition-all hover:-translate-y-2 hover:shadow-[0_20px_60px_-10px_rgba(42,93,168,0.1)]">
              <div className="absolute top-6 right-8 text-6xl text-brand-orange/10 font-serif leading-none">"</div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-orange p-0.5">
                  <img src={testimonial.img} alt={testimonial.author} className="w-full h-full rounded-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0a1d37]">{testimonial.author}</h4>
                  <span className="text-xs text-brand-orange font-bold uppercase tracking-wider block">{testimonial.location}</span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 italic relative z-10">
                "{testimonial.text}"
              </p>
              <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Trip Verified</span>
                <span className="text-xs font-bold text-[#2a5da8] bg-blue-50 px-3 py-1 rounded-full">{testimonial.trip}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
