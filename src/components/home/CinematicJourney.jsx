import React from 'react';
import { useNavigate } from 'react-router-dom';

const CinematicJourney = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative h-[500px] flex items-center justify-center overflow-hidden bg-fixed bg-center bg-cover py-12"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000&auto=format&fit=crop')` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(245,130,50,0.35),transparent_60%)] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.8),transparent_70%)] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(245,130,50,0.25),transparent_50%)] pointer-events-none"></div>

      <div className="relative z-10 text-center px-4 w-full max-w-7xl flex flex-col items-center">
        <h2 className="font-['Bellefair'] text-3xl md:text-5xl text-white font-normal mb-6 leading-tight uppercase tracking-[0.15em] drop-shadow-xl">
          MAKE EVERY JOURNEY <br /> MEMORABLE
        </h2>
        <p className="text-white/80 text-xs md:text-sm font-light mb-8 max-w-xl leading-relaxed">
          Every journey with us is an experience you'll cherish—adventure, comfort, and memories all in one.
        </p>
        <div className="w-full max-w-3xl h-px bg-white/30 mb-8"></div>
        <button 
          onClick={() => navigate('/contact')}
          className="px-10 py-3 bg-[#f58232] text-white font-bold rounded-full hover:bg-white hover:text-[#f58232] transition-colors duration-300 shadow-lg"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default CinematicJourney;
