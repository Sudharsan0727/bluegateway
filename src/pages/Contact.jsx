import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import imgHeroBg from '../assets/6.jpg';

const Contact = () => {
  return (
    <div className="pb-20 min-h-screen bg-gray-50 flex flex-col">
      {/* Curved Inner Banner Design */}
      <div className="relative pt-24 min-h-[75vh] flex flex-col items-center justify-center bg-[#0a1d37]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img src={imgHeroBg} alt="Contact Banner" className="w-full h-full object-cover animate-slow-zoom" />
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
            Concierge &
          </h1>
          <h2 className="font-['Bellefair'] text-4xl md:text-6xl lg:text-[75px] leading-tight text-brand-orange mb-8 uppercase tracking-wider relative z-10 inline-block drop-shadow-lg">
            Support
          </h2>
          <p className="text-gray-600 font-medium max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Our dedicated concierge team is available 24/7 to assist with your inquiries and travel arrangements. Experience unparalleled support at every step.
          </p>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-16 w-full grid lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div className="space-y-10">
          <div>
            <span className="font-['Bellefair'] text-4xl text-[#0a1d37] mb-2 block">Get In Touch</span>
            <p className="text-gray-500 font-medium">Whether you're ready to book or simply exploring ideas, we'd love to hear from you.</p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
               <div className="w-12 h-12 bg-orange-50 text-brand-orange rounded-xl flex items-center justify-center shrink-0">
                 <MapPin size={24} />
               </div>
               <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">Headquarters</h4>
                  <p className="text-gray-600 font-medium leading-relaxed">123 Travel Blvd, Suite 400<br/>New York, NY 10001</p>
               </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
               <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center shrink-0">
                 <Phone size={24} />
               </div>
               <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600 font-medium leading-relaxed">+1 (800) 123-4567<br/>+1 (212) 555-8901</p>
               </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
               <div className="w-12 h-12 bg-orange-50 text-brand-orange rounded-xl flex items-center justify-center shrink-0">
                 <Mail size={24} />
               </div>
               <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600 font-medium leading-relaxed">info@bluegateways.com<br/>concierge@bluegateways.com</p>
               </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100 relative">
          <h3 className="font-['Cinzel'] text-3xl text-[#0a1d37] mb-8">Send a Message</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">First Name</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange font-medium" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Last Name</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange font-medium" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email Address</label>
              <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange font-medium" />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Message</label>
              <textarea rows="4" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange font-medium resize-none"></textarea>
            </div>
            
            <button className="w-full bg-brand-orange hover:bg-orange-600 text-white rounded-xl py-4 font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-orange-500/30">
              <Send size={18} /> Send Inquiry
            </button>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
