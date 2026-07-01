import React from 'react';
import { Plane, ChevronDown, Globe, ArrowRight, Phone, Mail } from 'lucide-react';
import logo from '../../assets/logo.png';

const ContactFormSection = () => {
  return (
    <section className="py-24 bg-gray-100 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-96 h-96 bg-brand-orange/5 rounded-full blur-[100px]"></div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="font-['Bellefair'] text-6xl md:text-7xl text-[#2a5da8] block mb-2">Adventure Awaits</span>
          <h2 className="font-['Bellefair'] text-3xl md:text-6xl leading-tight text-brand-orange mb-6 uppercase tracking-wider">Book Your Consultation</h2>
        </div>

        <div className="relative group">
          <div className="bg-white rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] flex flex-col lg:flex-row relative transition-transform duration-500 group-hover:-translate-y-2 overflow-hidden border border-gray-100">
            <div className="flex-grow p-8 lg:p-12 relative">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-4">Boarding Pass</h3>
                  <img src={logo} alt="Blue Gateway" className="h-16 md:h-20 object-contain" />
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-3 text-brand-orange">
                    <Plane size={20} />
                    <span className="font-black italic uppercase tracking-widest text-sm">BG-INTERNATL</span>
                  </div>
                </div>
              </div>

              <form className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-orange">Passenger Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-gray-200 py-2 font-bold text-gray-800 focus:outline-none focus:border-brand-orange text-lg placeholder:text-gray-500" placeholder="ENTER NAME" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-orange">Destination</label>
                  <div className="relative">
                    <select className="w-full bg-transparent border-b border-gray-200 py-2 font-bold text-gray-800 focus:outline-none focus:border-brand-orange text-lg appearance-none cursor-pointer">
                      <option>PARIS, FRANCE</option>
                      <option>BALI, INDONESIA</option>
                      <option>AMALFI, ITALY</option>
                      <option>ALPS, SWITZERLAND</option>
                      <option>OTHER WORLDWIDE</option>
                    </select>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <ChevronDown size={16} />
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-orange">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-gray-200 py-2 font-bold text-gray-800 focus:outline-none focus:border-brand-orange text-lg uppercase placeholder:text-gray-500" placeholder="NAME@EMAIL.COM" />
                </div>
                <div className="md:col-span-3 space-y-1 pt-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-orange">Travel Details / Message</label>
                  <textarea rows="1" className="w-full bg-transparent border-b border-gray-200 py-2 font-bold text-gray-800 focus:outline-none focus:border-brand-orange text-lg resize-none placeholder:text-gray-500" placeholder="TELL US ABOUT YOUR DREAM JOURNEY..."></textarea>
                </div>
              </form>

              <div className="hidden lg:block absolute right-0 top-0 bottom-0 pointer-events-none">
                <div className="h-full w-px border-r-2 border-dashed border-gray-100 relative">
                  <div className="absolute top-0 -translate-y-1/2 left-0 -translate-x-1/2 w-8 h-8 rounded-full bg-gray-100 shadow-inner"></div>
                  <div className="absolute bottom-0 translate-y-1/2 left-0 -translate-x-1/2 w-8 h-8 rounded-full bg-gray-100 shadow-inner"></div>
                </div>
              </div>
            </div>

            <div className="lg:w-80 bg-gray-50/50 p-8 lg:p-12 relative flex flex-col justify-between border-l border-gray-50">
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-8 text-center underline underline-offset-8 decoration-dashed decoration-gray-200">Inquiry Stub</h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <div>
                      <span className="text-[9px] font-black text-gray-400 uppercase block leading-none mb-1">Status</span>
                      <span className="font-mono font-bold text-brand-orange text-xs">AWAITING</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] font-black text-gray-400 uppercase block leading-none mb-1">Priority</span>
                      <span className="font-mono font-bold text-brand-orange text-xs">GOLD</span>
                    </div>
                  </div>
                  <button className="w-full bg-[#0a1d37] p-8 rounded-2xl text-white relative overflow-hidden group/btn flex flex-col items-center justify-center gap-2 hover:bg-[#1a2d47] transition-all">
                    <div className="absolute top-0 right-0 p-2 opacity-5 scale-150 rotate-12 transition-transform group-hover/btn:scale-[2] pointer-events-none">
                      <Globe size={100} />
                    </div>
                    <span className="block text-[10px] font-black uppercase tracking-widest text-brand-orange mb-1 relative z-10">Boarding Path</span>
                    <span className="text-xl font-black uppercase tracking-tighter flex items-center justify-center gap-2 group-hover/btn:gap-4 transition-all relative z-10">
                      SUBMIT <ArrowRight size={20} className="text-brand-orange" />
                    </span>
                  </button>
                </div>
              </div>

              <div className="mt-12 text-center opacity-80">
                <div className="flex justify-center gap-1.5 mb-2">
                  {Array(15).fill(0).map((_, i) => (
                    <div key={i} className="w-1 h-10 bg-gray-800 rounded-full"></div>
                  ))}
                </div>
                <p className="text-[8px] font-black text-gray-700 uppercase tracking-[0.4em]">2026-BOARDING-PASS</p>
              </div>
            </div>
          </div>
          <div className="absolute -inset-4 bg-[#0a1d37]/5 -z-10 blur-3xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-x-16 gap-y-6">
          <a href="tel:18001234567" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-orange transition-all duration-300 shadow-sm">
              <Phone size={18} className="text-brand-orange group-hover:text-white transition-colors" />
            </div>
            <div>
              <span className="block text-[9px] font-black uppercase tracking-widest text-gray-400">Concierge Desk</span>
              <span className="text-sm font-bold text-gray-700">+1 (800) 123-4567</span>
            </div>
          </a>
          <a href="mailto:concierge@bluegateways.com" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-orange transition-all duration-300 shadow-sm">
              <Mail size={18} className="text-brand-orange group-hover:text-white transition-colors" />
            </div>
            <div>
              <span className="block text-[9px] font-black uppercase tracking-widest text-gray-400">Direct Email</span>
              <span className="text-sm font-bold text-gray-700">concierge@bluegateways.com</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
