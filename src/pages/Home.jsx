import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';
import DiscoverSection from '../components/home/DiscoverSection';
import EffortlessTravel from '../components/home/EffortlessTravel';
import CinematicJourney from '../components/home/CinematicJourney';
import TravelDestinations from '../components/home/TravelDestinations';
import FeaturedHighlights from '../components/home/FeaturedHighlights';

import FAQSection from '../components/home/FAQSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ContactFormSection from '../components/home/ContactFormSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <DiscoverSection />
      <EffortlessTravel />
      <CinematicJourney />
      <TravelDestinations />
      <FeaturedHighlights />
      
      {/* Cinematic Text-Clipping */}
      <section className="text-clip-container">
        <div className="text-clip-canvas">
          BLUE GATEWAYS
        </div>
      </section>
      

      <FAQSection />
      <TestimonialsSection />
      <ContactFormSection />
    </>
  );
};

export default Home;
