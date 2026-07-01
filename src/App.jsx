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
  Phone,
  Mail,
  MapPin,
  Bed,
  Plane,
} from 'lucide-react';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

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
    <div className="min-h-screen selection:bg-brand-orange selection:text-white">

      <Header isScrolled={isScrolled} />

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

      <Footer />

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
