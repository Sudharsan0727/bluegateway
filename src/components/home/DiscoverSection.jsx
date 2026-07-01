import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { tours } from '../../data/tours';

const DiscoverSection = () => {
  const [activeTab, setActiveTab] = useState('Trending');
  const [trendingSliderIndex, setTrendingSliderIndex] = useState(0);
  const trendingSliderRef = useRef(null);
  const [cardsPerView, setCardsPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsPerView(1.2);
      else if (window.innerWidth < 1024) setCardsPerView(2.5);
      else setCardsPerView(4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const tourGrid = {
    Trending: tours.filter(t => t.tag === 'Best Seller' || t.tag === 'Limited Offer' || t.tag === 'Trending' || t.tag === 'Top Rated' || t.tag === 'New Arrival'),
    Adventure: tours.filter(t => t.type === 'Adventure'),
    Honeymoon: tours.filter(t => t.type === 'Honeymoon')
  };

  const currentTours = tourGrid[activeTab] || [];
  const maxSliderIndex = Math.max(0, currentTours.length - Math.floor(cardsPerView));

  const slidePrev = () => setTrendingSliderIndex((i) => Math.max(0, i - 1));
  const slideNext = () => setTrendingSliderIndex((i) => Math.min(maxSliderIndex, i + 1));

  useEffect(() => { setTrendingSliderIndex(0); }, [activeTab]);

  return (
    <section id="discover-tours" className="py-24 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-4xl">
            <span className="font-['Bellefair'] text-4xl md:text-7xl text-[#2a5da8] block mb-2">Handpicked Handcrafted</span>
            <h2 className="font-['Bellefair'] text-2xl md:text-6xl leading-tight text-brand-orange mb-6 uppercase tracking-wider">Trending Now</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Skip the tourists, meet the locals. Our current most popular curated experiences that you won't find in guidebooks.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex bg-gray-100 p-1.5 rounded-2xl self-start lg:self-end">
            {['Trending', 'Adventure', 'Honeymoon'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 md:px-8 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === tab
                  ? 'bg-white text-brand-blue shadow-lg'
                  : 'text-gray-500 hover:text-gray-800'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <button
            onClick={slidePrev}
            disabled={trendingSliderIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-brand-blue"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="overflow-hidden">
            <div
              ref={trendingSliderRef}
              className="flex gap-4 md:gap-8 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(calc(-${trendingSliderIndex} * (100% / ${cardsPerView} + ${window.innerWidth < 768 ? '1rem' : '2rem'} / ${cardsPerView})))` }}
            >
              {currentTours.map((tour) => (
                <Link
                  to={`/tour/${tour.id}`}
                  key={tour.id}
                  className="group bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 transition-all hover:shadow-[0_40px_80px_rgba(42,93,168,0.15)] hover:-translate-y-2 flex flex-col h-full flex-shrink-0"
                  style={{ width: `calc((100% - ${(cardsPerView - 1)} * ${window.innerWidth < 768 ? '1rem' : '2rem'}) / ${cardsPerView})` }}
                >
                  <div className="relative h-80 overflow-hidden shrink-0">
                    <img src={tour.img} alt={tour.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute top-5 left-5">
                      <span className="bg-brand-blue/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                        {tour.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-5 right-5">
                      <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-xl flex items-center gap-1.5">
                        <Clock size={14} className="text-brand-orange" />
                        <span className="text-xs font-bold text-gray-800">{tour.duration}</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-7 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-4">
                      <span className="flex items-center gap-1 text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                        <MapPin size={12} className="text-brand-orange" /> {tour.location}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star size={14} className="text-brand-orange fill-brand-orange" />
                        <span className="text-sm font-bold">{tour.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-6 leading-tight group-hover:text-brand-blue transition-colors line-clamp-2">{tour.title}</h3>

                    <div className="flex items-center justify-between mt-auto border-t border-gray-50 pt-5">
                      <div>
                        <span className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Starting From</span>
                        <div className="flex items-end gap-2">
                          <span className="text-2xl font-bold text-brand-blue leading-none">${tour.price}</span>
                          <span className="text-sm font-bold text-gray-300 line-through mb-0.5">${tour.oldPrice}</span>
                        </div>
                      </div>
                      <div className="bg-gray-100 text-gray-900 w-11 h-11 rounded-full flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg hover:scale-110">
                        <ChevronRight size={20} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <button
            onClick={slideNext}
            disabled={trendingSliderIndex >= maxSliderIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-12 h-12 rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-brand-blue"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {currentTours.length > cardsPerView && (
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: maxSliderIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setTrendingSliderIndex(i)}
                className={`transition-all duration-300 rounded-full ${
                  trendingSliderIndex === i
                    ? 'w-8 h-2.5 bg-brand-blue'
                    : 'w-2.5 h-2.5 bg-gray-300 hover:bg-brand-orange'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default DiscoverSection;
