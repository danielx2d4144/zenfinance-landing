import React, { useEffect, useRef, useState } from 'react';
import Button from './Button';
import { Icons } from '../constants';

const Hero: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const scrolled = window.scrollY;
      
      // Calculate how much of the hero is scrolled out (0 to 1)
      const progress = Math.min(Math.max(scrolled / sectionHeight, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative flex flex-col w-full border-b border-white/10 bg-black overflow-hidden"
      style={{ minHeight: '600px', height: 'auto' }}
    >
      {/* Background Video with Scroll Sync */}
      <div 
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
        style={{
          opacity: 1 - scrollProgress * 1.2,
          transform: `translateY(${scrollProgress * 200}px) scale(${1 + scrollProgress * 0.1})`,
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
          poster="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop"
        >
          <source src="https://v.ftcdn.net/08/94/68/73/700_F_894687353_Kz9pD3VfDk7YhGqUu9vWfRzUv9L9RzU9_ST.mp4" type="video/mp4" />
          <source src="background_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
      </div>

      {/* Top Banner Row (Main Content) */}
      <div className="flex flex-col md:flex-row flex-1 relative z-10">
        {/* Left Sidebar: Vertical Text - Hidden on mobile */}
        <div className="hidden md:flex w-1/4 p-10 border-r border-white/10 flex-col items-center justify-between backdrop-blur-[2px] relative">
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#FF6B35] translate-x-1/2 -translate-y-1/2 z-20"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#FF6B35] translate-x-1/2 translate-y-1/2 z-20"></div>
          
          <div className="w-2.5 h-2.5 bg-[#35CB87] shadow-[0_0_15px_rgba(53,203,135,0.5)]"></div>
          
          <div className="relative h-48 flex items-center justify-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] mono-font text-white whitespace-nowrap rotate-90 origin-center opacity-70">
              ZEN FINANCE
            </span>
          </div>

          <div className="w-2.5 h-2.5 bg-[#35CB87] shadow-[0_0_15px_rgba(53,203,135,0.5)]"></div>
        </div>

        {/* Center Main Text Content */}
        <div className="w-full md:w-1/2 flex flex-col relative border-r border-white/10">
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#35CB87] translate-x-1/2 -translate-y-1/2 z-20"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#35CB87] translate-x-1/2 translate-y-1/2 z-20"></div>

          <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 pt-32 md:pt-24 pb-12">
            <div 
              className="transition-transform duration-300 ease-out"
              style={{ transform: `translateY(${-scrollProgress * 50}px)` }}
            >
              <span className="text-[#35CB87] text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] mb-4 block mono-font text-center animate-pulse">
                Elevating the future of crypto
              </span>
              <h1 className="text-5xl sm:text-7xl md:text-[100px] font-black uppercase tracking-tighter leading-[0.85] mono-font text-white text-center drop-shadow-2xl">
                CROSS CHAIN <span className="text-white/10">LENDING</span>
              </h1>
            </div>
          </div>
          
          {/* Bottom Info Row */}
          <div className="p-8 md:p-12 border-t border-white/10 bg-black/20 backdrop-blur-md">
            <p className="text-base md:text-xl font-medium leading-relaxed max-w-2xl mono-font text-white/80 text-center md:text-left mx-auto md:mx-0">
              ZenFinance is a next-generation lending protocol built natively on Zenchain.<br />
              Supply ZIP-20 assets, unlock cross-chain liquidity, and borrow with validator-secured interoperability powered by CCIM
            </p>
          </div>
        </div>

        {/* Right Feature/Visual Area */}
        <div className="w-full md:w-1/4 flex flex-col relative">
          <div className="flex-1 p-8 flex items-center justify-center relative border-b border-white/10">
            {/* Holographic Box */}
            <div className="w-full max-w-[280px] aspect-square bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center p-4 relative overflow-hidden group">
              <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-[#35CB87]/40"></div>
              <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-[#35CB87]/40"></div>
              
              <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
                <div className="absolute w-full h-full border border-[#35CB87]/20 rotate-45 animate-[spin_10s_linear_infinite]"></div>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-black rotate-45 flex items-center justify-center relative shadow-[0_0_30px_rgba(53,203,135,0.2)]">
                   <div className="w-8 h-8 md:w-12 md:h-12 bg-[#35CB87]/20 rounded-full blur-xl animate-pulse"></div>
                   <Icons.Grid />
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Sidebar - Horizontal on mobile */}
          <div className="relative md:absolute right-0 top-0 bottom-0 w-full md:w-16 border-t md:border-t-0 md:border-l border-white/10 bg-black/40 backdrop-blur-md flex flex-row md:flex-col items-center justify-center py-6 md:py-12 gap-8 md:gap-12">
            <a href="#" className="text-white/50 hover:text-[#35CB87] transition-all hover:scale-110 p-2">
              <Icons.Twitter />
            </a>
            <a href="#" className="text-white/50 hover:text-[#35CB87] transition-all hover:scale-110 p-2">
              <Icons.Telegram />
            </a>
            <a href="#" className="text-white/50 hover:text-[#35CB87] transition-all hover:scale-110 p-2">
              <Icons.Discord />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator removed */}
    </section>
  );
};

export default Hero;