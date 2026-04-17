import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import TourPackages from './pages/TourPackages';
import Offerings from './pages/Offerings';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import RegionPage from './pages/RegionPage';
import TourCategoryPage from './pages/TourCategoryPage';
import TourDetails from './pages/TourDetails';

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
  Globe,
  MapPin,
  Bed,
  Plane,
  ArrowRight,
} from 'lucide-react';

import logo from './assets/logo.png';
import galleryAlps from './assets/gallery-alps.png';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen selection:bg-brand-orange selection:text-white overflow-x-hidden">

      {/* Utility Top Bar */}
      <div className="bg-[#0a1d37] text-white py-2 px-4 hidden lg:block border-b border-white/5">
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
        className={`fixed w-full z-50 transition-all duration-500 ${navScrolled
          ? 'top-0 bg-white/95 backdrop-blur-lg shadow-[0_10px_30px_rgba(0,0,0,0.1)] py-2'
          : 'top-0 lg:top-9 bg-transparent py-6'
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
                    className={`text-[15px] font-semibold flex items-center gap-1 transition-all duration-300 ${navScrolled ? 'text-gray-800' : 'text-white'} hover:text-brand-orange`}
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
              <button className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-brand-orange transition-colors`}>
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
                className={`p-2 rounded-full transition-colors ${isScrolled ? 'bg-gray-100 text-gray-800' : 'bg-white/10 text-white'}`}
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

      {/* Content Area */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:regionId" element={<RegionPage />} />
        <Route path="/packages" element={<TourPackages />} />
        <Route path="/packages/:categoryId" element={<TourCategoryPage />} />
        <Route path="/offerings" element={<Offerings />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tour/:id" element={<TourDetails />} />
      </Routes>

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

      {/* Floating Dock - Now Simplified for global use */}
      <div className={`fixed right-6 top-1/2 -translate-y-1/2 z-[60] hidden lg:flex transition-all duration-700 ${isScrolled ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20 pointer-events-none'}`}>
        <div className="velocity-dock">
          <div className="velocity-item whatsapp group" onClick={() => window.open('https://wa.me/1234567890', '_blank')}>
            <Phone size={18} />
            <div className="velocity-tooltip">WhatsApp</div>
          </div>
          <div className="velocity-item enquiry group" onClick={() => navigate('/contact')}>
            <Mail size={18} />
            <div className="velocity-tooltip">Enquiry</div>
          </div>
          <div className="velocity-item destinations group" onClick={() => navigate('/destinations')}>
            <MapPin size={18} />
            <div className="velocity-tooltip">Destinations</div>
          </div>
          <div className="velocity-item hotels group" onClick={() => navigate('/offerings')}>
            <Bed size={18} />
            <div className="velocity-tooltip">Luxury Stays</div>
          </div>
          <div className="velocity-item primary group" onClick={() => navigate('/contact')}>
            <Plane size={18} />
            <div className="velocity-tooltip">Plan Trip</div>
          </div>
        </div>
      </div>

      <div className={`fixed bottom-6 right-6 z-[60] lg:hidden transition-all duration-500 ${isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'}`}>
        <button className="mobile-radiant-btn">
          <Phone size={24} />
        </button>
      </div>
    </div>
  );
}

export default App;
