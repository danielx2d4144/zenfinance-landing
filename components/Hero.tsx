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
      style={{ height: 'calc(100vh - 96px)', minHeight: '800px' }}
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
          {/* Using the provided video asset (assuming filename background_video.mp4 or similar) */}
          <source src="https://v.ftcdn.net/08/94/68/73/700_F_894687353_Kz9pD3VfDk7YhGqUu9vWfRzUv9L9RzU9_ST.mp4" type="video/mp4" />
          {/* Fallback for local dev if user places their file */}
          <source src="background_video.mp4" type="video/mp4" />
        </video>
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
      </div>

      {/* Top Banner Row (Main Content) */}
      <div className="flex flex-1 relative z-10">
        {/* Left Sidebar: Vertical Text */}
        <div className="w-1/6 p-10 border-r border-white/10 flex flex-col items-center justify-between backdrop-blur-[2px]">
          <div className="w-2.5 h-2.5 bg-[#35CB87] shadow-[0_0_15px_rgba(53,203,135,0.5)]"></div>
          
          <div className="relative h-48 flex items-center justify-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] mono-font text-white whitespace-nowrap rotate-90 origin-center opacity-70">
              ZEN FINANCE LABS
            </span>
          </div>

          <div className="w-2.5 h-2.5 bg-[#35CB87] shadow-[0_0_15px_rgba(53,203,135,0.5)]"></div>
        </div>

        {/* Center Main Text Content */}
        <div className="flex-1 flex flex-col relative border-r border-white/10">
          <div className="flex-1 flex flex-col items-center justify-center px-12 pt-24 pb-12">
            <div 
              className="transition-transform duration-300 ease-out"
              style={{ transform: `translateY(${-scrollProgress * 50}px)` }}
            >
              <span className="text-[#35CB87] text-xs font-bold uppercase tracking-[0.5em] mb-4 block mono-font text-center animate-pulse">
                Elevating the future of crypto
              </span>
              <h1 className="text-[130px] font-black uppercase tracking-tighter leading-[0.85] mono-font text-white text-center drop-shadow-2xl">
                MAKING TO <span className="text-white/10">MORROW</span>
              </h1>
            </div>
          </div>
          
          {/* Bottom Info Row */}
          <div className="p-12 border-t border-white/10 bg-black/20 backdrop-blur-md">
            <p className="text-xl font-medium leading-relaxed max-w-lg mono-font text-white/80">
              Backing the very best web3 builders — transforming visionary ideas into real-world growth through the path of Zen.
            </p>
          </div>
        </div>

        {/* Right Feature/Visual Area */}
        <div className="w-1/4 flex flex-col relative">
          <div className="flex-1 p-8 flex items-center justify-center relative border-b border-white/10">
            {/* Holographic Box */}
            <div className="w-full aspect-square bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center p-4 relative overflow-hidden group">
              <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-[#35CB87]/40"></div>
              <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-[#35CB87]/40"></div>
              
              <div className="relative w-32 h-32 flex items-center justify-center">
                <div className="absolute w-full h-full border border-[#35CB87]/20 rotate-45 animate-[spin_10s_linear_infinite]"></div>
                <div className="w-16 h-16 bg-black rotate-45 flex items-center justify-center relative shadow-[0_0_30px_rgba(53,203,135,0.2)]">
                   <div className="w-12 h-12 bg-[#35CB87]/20 rounded-full blur-xl animate-pulse"></div>
                   <Icons.Grid />
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Sidebar */}
          <div className="absolute right-0 top-0 bottom-0 w-16 border-l border-white/10 bg-black/40 backdrop-blur-md flex flex-col items-center py-12 gap-12">
            <a href="#" className="text-white/50 hover:text-[#35CB87] transition-all hover:scale-110 p-2">
              <Icons.Twitter />
            </a>
            <a href="#" className="text-white/50 hover:text-[#35CB87] transition-all hover:scale-110 p-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </a>
            <a href="#" className="text-white/50 hover:text-[#35CB87] transition-all hover:scale-110 p-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#35CB87] to-transparent"></div>
        <span className="text-[8px] mono-font tracking-widest text-white/50 uppercase">Scroll to Explore</span>
      </div>
    </section>
  );
};

export default Hero;