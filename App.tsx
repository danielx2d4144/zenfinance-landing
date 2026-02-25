import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import BeyondHero from './components/BeyondHero';
import MarketsSection from './components/MarketsSection';
import TeamSection from './components/TeamSection';
import FAQSection from './components/FAQSection';
import Partners from './components/Partners';
import FooterCTA from './components/FooterCTA';
import Footer from './components/Footer';
import { WalletProvider } from './components/WalletProvider';
import PrivacyPolicy from './components/legal/PrivacyPolicy';
import CookiePolicy from './components/legal/CookiePolicy';
import TermsOfService from './components/legal/TermsOfService';

const MainContent: React.FC = () => (
  <>
    {/* 1. Primary Hero Section (The site "Header" area) */}
    <Hero />
    
    {/* 2. Partners Carousel */}
    <Partners />
    
    {/* 3. Features Section (Beyond Capital deep-dive) */}
    <BeyondHero />
    
    {/* 4. Markets Section */}
    <MarketsSection />
    
    {/* 5. Team Section */}
    <TeamSection />

    {/* 6. FAQ Section */}
    <FAQSection />

    {/* 7. Footer Call To Action */}
    <FooterCTA />
  </>
);

const App: React.FC = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <WalletProvider>
      <div className="min-h-screen bg-black selection:bg-[#35CB87] selection:text-black relative">
        {/* Global Vertical Grid Lines */}
        <div className="fixed inset-0 pointer-events-none z-0 max-w-[1920px] mx-auto flex">
          <div className="w-1/4 h-full border-r border-white/5"></div>
          <div className="w-1/4 h-full border-r border-white/5"></div>
          <div className="w-1/4 h-full border-r border-white/5"></div>
          <div className="w-1/4 h-full"></div>
        </div>

        {/* Container to maintain alignment with the reference image's grid lines */}
        <div className="max-w-[1920px] mx-auto bg-black/50 min-h-screen border-x border-white/10 bg-grid-squares relative z-10">
          <Header />
          
          <main>
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/cookies" element={<CookiePolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
            </Routes>
            
            {/* 7. Final Footer */}
            <Footer />
          </main>
        </div>
      </div>
    </WalletProvider>
  );
};

export default App;