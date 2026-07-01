import React, { useState } from 'react';
import { Ship, Plane } from 'lucide-react';

const FLIGHT_IMG = 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop';
const CRUISE_IMG = 'https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=3648&auto=format&fit=crop';

const EffortlessTravel = () => {
  const [effortlessImage, setEffortlessImage] = useState(FLIGHT_IMG);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <div className="bg-[#dbeafe] p-10 rounded-3xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-[#0a1d37] mb-3">We Take Care of Everything</h3>
                <p className="text-[#0a1d37]/70 font-medium leading-relaxed max-w-sm">
                  From private rides to group excursions, we ensure smooth and comfortable travel from beginning to end.
                </p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
            </div>

            <div className="rounded-3xl overflow-hidden h-[400px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative group">
              <img
                src={effortlessImage}
                alt="Effortless Travel"
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1d37]/40 to-transparent"></div>
            </div>
          </div>

          <div>
            <div className="mb-12">
              <span className="font-['Bellefair'] text-6xl md:text-7xl text-[#2a5da8] block mb-2">Effortless</span>
              <h2 className="font-['Bellefair'] text-3xl md:text-6xl leading-tight text-brand-orange mb-6 uppercase tracking-wider">Travel</h2>
              <h3 className="text-2xl font-semibold text-gray-800">Transport</h3>
            </div>

            <div className="space-y-4">
              <div
                onMouseEnter={() => setEffortlessImage(CRUISE_IMG)}
                onMouseLeave={() => setEffortlessImage(FLIGHT_IMG)}
                className="group bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-300 flex gap-6 items-start cursor-pointer hover:border-brand-orange/20"
              >
                <div className="w-16 h-16 rounded-xl bg-orange-50 flex items-center justify-center shrink-0 group-hover:bg-brand-orange transition-colors duration-300">
                  <Ship size={28} className="text-brand-orange group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Cruise</h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">
                    Sail in style—choose from perfectly timed voyages aligned with port schedules, offering seamless boarding and smooth sailing from shore to sea.
                  </p>
                </div>
              </div>

              <div
                onMouseEnter={() => setEffortlessImage(FLIGHT_IMG)}
                className="group bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-300 flex gap-6 items-start cursor-pointer hover:border-brand-blue/20"
              >
                <div className="w-16 h-16 rounded-xl bg-orange-50 flex items-center justify-center shrink-0 group-hover:bg-brand-orange transition-colors duration-300">
                  <Plane size={28} className="text-brand-orange group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Flight Booking</h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">
                    Fly with ease—choose from perfectly timed flights aligned with airport schedules, ensuring smooth check-ins, swift connections, and stress-free travel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EffortlessTravel;
