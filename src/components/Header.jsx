import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Search,
  Menu,
  X,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  ChevronRight,
  ChevronDown,
} from 'lucide-react';

import logo from '../assets/logo.png';

function Header({ isScrolled }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const navScrolled = isScrolled || !isHomePage;
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Tour Packages', path: '/packages' },
    { name: 'Offerings', path: '/offerings' },
    { name: 'About Us', path: '/about' }
  ];
  const mobileNavItems = [...navItems, { name: 'Contact', path: '/contact' }];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-[100] top-0 flex flex-col">
      {/* Utility Top Bar */}
      <div className={`bg-[#0a1d37] text-white px-4 hidden lg:block border-b border-white/5 transition-all duration-500 overflow-hidden ${navScrolled ? 'h-0 py-0 opacity-0' : 'h-[33px] py-2 opacity-100'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium">
          <div className="flex gap-6">
            <span className="flex items-center gap-1.5 hover:text-brand-orange transition-colors cursor-pointer"><Phone size={14} className="text-brand-orange" /> +1 (800) 123-4567</span>
            <span className="flex items-center gap-1.5 hover:text-brand-orange transition-colors cursor-pointer"><Mail size={14} className="text-brand-orange" /> support@bluegateways.com</span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-gray-400">Follow us:</span>
            <Facebook size={14} className="hover:text-brand-orange cursor-pointer" />
            <Instagram size={14} className="hover:text-brand-orange cursor-pointer" />
            <Twitter size={14} className="hover:text-brand-orange cursor-pointer" />
            <div className="h-4 w-[1px] bg-white/10 mx-2"></div>
            <span className="bg-brand-orange/20 text-brand-orange px-2 py-0.5 rounded">New Year Sale: Save 15%</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`w-full transition-all duration-500 bg-white ${navScrolled
          ? 'shadow-[0_10px_30px_rgba(0,0,0,0.1)] py-2'
          : 'shadow-sm py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center group">
              <Link to="/" className="flex items-center gap-2">
                <img
                  className={`h-20 w-auto transition-all duration-300 ${navScrolled ? 'scale-95' : 'scale-105'}`}
                  src={logo}
                  alt="Blue Gateway"
                  style={{ mixBlendMode: 'multiply', filter: 'brightness(1.1)' }}
                />
              </Link>
            </div>

            <div className="hidden lg:flex items-center space-x-10">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className={`text-[15px] font-semibold flex items-center gap-1 transition-all duration-300 text-gray-800 hover:text-brand-orange`}
                  >
                    {item.name} {item.name === 'Destinations' || item.name === 'Tour Packages' ? <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" /> : null}
                  </Link>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
                  
                  {item.name === 'Destinations' && (
                    <div className="absolute top-[100%] pt-6 left-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="bg-white shadow-[0_15px_40px_-5px_rgba(0,0,0,0.1)] rounded-2xl overflow-hidden border border-gray-100 p-2">
                        {['Europe', 'Asia', 'Oceania', 'Americas', 'Africa'].map((region) => (
                          <Link 
                            key={region} 
                            to={`/destinations/${region.toLowerCase()}`}
                            className="flex items-center justify-between px-4 py-3 text-sm text-gray-600 hover:bg-orange-50 hover:text-brand-orange font-semibold rounded-xl transition-colors group/link"
                          >
                            {region}
                            <ChevronRight size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {item.name === 'Tour Packages' && (
                    <div className="absolute top-[100%] pt-6 left-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="bg-white shadow-[0_15px_40px_-5px_rgba(0,0,0,0.1)] rounded-2xl overflow-hidden border border-gray-100 p-2">
                        {['Luxury', 'Adventure', 'Honeymoon', 'Romantic', 'Weekend'].map((category) => (
                          <Link 
                            key={category} 
                            to={`/packages/${category.toLowerCase()}`}
                            className="flex items-center justify-between px-4 py-3 text-sm text-gray-600 hover:bg-orange-50 hover:text-brand-orange font-semibold rounded-xl transition-colors group/link"
                          >
                            {category}
                            <ChevronRight size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-6">
              <button className={`text-gray-800 hover:text-brand-orange transition-colors`}>
                <Search size={22} />
              </button>
              <Link
                to="/contact"
                className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-3 rounded-full font-bold shadow-xl transition-all hover:translate-y-[-2px] hover:shadow-brand-blue/30 inline-block"
              >
                Plan My Trip
              </Link>
            </div>

            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-full transition-colors bg-gray-100 text-gray-800`}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        <div 
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[-1] transition-opacity duration-500 lg:hidden ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setMobileMenuOpen(false)}
        />

        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${mobileMenuOpen ? 'max-h-screen opacity-100 bg-white shadow-2xl' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 py-10 space-y-6">
            {mobileNavItems.map((item) => (
              <Link key={item.name} to={item.path} onClick={() => setMobileMenuOpen(false)} className="block text-xl font-bold text-gray-900 border-b border-gray-100 pb-4">{item.name}</Link>
            ))}
            <Link to="/contact" className="w-full bg-brand-orange text-white py-4 rounded-xl font-bold text-lg block text-center">Book a Free Consultation</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
