import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BeyondHero from './components/BeyondHero';
import TeamSection from './components/TeamSection';
import FAQSection from './components/FAQSection';
import Partners from './components/Partners';
import FooterCTA from './components/FooterCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black selection:bg-[#35CB87] selection:text-black">
      {/* Container to maintain alignment with the reference image's grid lines */}
      <div className="max-w-[1920px] mx-auto bg-black/50 min-h-screen border-x border-white/10 bg-grid-squares">
        <Header />
        
        <main>
          {/* 1. Primary Hero Section (The site "Header" area) */}
          <Hero />
          
          {/* 2. Partners Carousel */}
          <Partners />
          
          {/* 3. Features Section (Beyond Capital deep-dive) */}
          <BeyondHero />
          
          {/* 4. Team Section */}
          <TeamSection />

          {/* 5. FAQ Section */}
          <FAQSection />

          {/* 6. Footer Call To Action */}
          <FooterCTA />

          {/* 7. Final Footer */}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default App;