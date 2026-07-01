import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Globe,
  ArrowRight,
  Facebook,
  Instagram,
  Twitter,
} from 'lucide-react';

import logo from '../assets/logo.png';
import galleryAlps from '../assets/gallery-alps.png';

function Footer() {
  return (
    <footer className="relative font-sans">
      <div className="relative py-32 flex flex-col items-center justify-center text-center px-4 overflow-hidden rounded-t-[3rem]">
        <div className="absolute inset-0 z-0">
          <img src={galleryAlps} alt="Mountain Landscape" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0a1d37]/60"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h2 className="font-['Cinzel'] text-2xl md:text-3xl lg:text-4xl text-white font-bold leading-tight drop-shadow-lg">
            Ready to Explore The World? Let's Turn Your Travel Dreams Into Reality!
          </h2>
          <p className="text-gray-100 text-lg md:text-xl font-medium max-w-3xl mx-auto drop-shadow-md">
            From dream escapes to unforgettable adventures, Blue Gateway brings every journey to life.
          </p>
          <div className="pt-6">
            <button className="bg-brand-orange text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-orange-600 transition-all duration-300 shadow-xl hover:shadow-orange-500/30 transform hover:-translate-y-1">
              Explore Now
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#111827] text-white pt-20 rounded-t-[3rem] -mt-12 relative z-20 shadow-[0_-20px_60px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            <div className="space-y-6 pr-4">
              <div className="flex flex-col items-start gap-4">
                <img src={logo} alt="Blue Gateway" className="h-12 w-auto" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  We are a reliable travel partner committed to crafting unforgettable trips. From customized holiday deals to guided experiences, we promise safety, comfort, and cherished memories at every destination.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-brand-orange">
                  <Phone size={18} />
                  <span className="text-white text-sm font-medium hover:text-brand-orange transition-colors cursor-pointer">+1 (800) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-brand-orange">
                  <Mail size={18} />
                  <span className="text-white text-sm font-medium hover:text-brand-orange transition-colors cursor-pointer">info@bluegateways.com</span>
                </div>
                <div className="flex items-start gap-3 text-brand-orange">
                  <MapPin size={18} className="shrink-0 mt-1" />
                  <span className="text-white text-sm font-medium leading-tight">123 Travel Blvd, Suite 400,<br />New York, NY 10001</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="flex items-center gap-2 text-brand-orange font-bold text-lg mb-6">
                <span className="w-1 h-5 bg-brand-orange rounded-full"></span> Quick Links
              </h4>
              <ul className="space-y-3">
                {['Home', 'About Us', 'Packages', 'Contact Us', 'Travel Guide'].map(link => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-brand-orange hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2">
                      <ChevronRight size={14} className="opacity-0 group-hover:opacity-100" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="flex items-center gap-2 text-brand-orange font-bold text-lg mb-6">
                <Globe size={18} /> Our Packages
              </h4>
              <ul className="space-y-3">
                {['Luxury Holidays', 'Budget Stays', 'Special Offers', 'Honeymoon Deals', 'Group Tours'].map(link => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-brand-orange hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2">
                      <ChevronRight size={14} className="opacity-0 group-hover:opacity-100" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-brand-orange font-bold text-lg mb-2">Subscribe to Our Newsletter</h4>
              <p className="text-gray-400 text-xs font-medium">Get the latest travel news and exclusive offers delivered to your inbox.</p>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-brand-orange transition-all font-medium"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-brand-orange text-white px-4 rounded-lg transform group-hover:scale-105 transition-all shadow-lg shadow-orange-500/20 active:scale-95">
                  <ArrowRight size={18} />
                </button>
              </div>

              <div className="flex gap-3 mt-6">
                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-brand-orange transition-all duration-300 shadow-md transform hover:scale-110">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-brand-orange py-5 px-6 relative mt-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-white text-sm font-bold">
              Copyright &copy; {new Date().getFullYear()}. BLUE GATEWAY. All rights reserved.
            </p>
            <p className="text-white/80 text-xs font-medium tracking-widest uppercase">
              Powered by <a href="https://nextodigital.in" target="_blank" rel="noopener noreferrer" className="font-black text-white hover:underline transition-all">NEXTO DIGITAL</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
