import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#111111] border-t border-white/10">
      {/* Links Grid */}
      <div className="flex flex-col md:flex-row w-full border-b border-white/10 relative">
        {/* Ecosystem */}
        <div className="w-full md:w-1/4 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 relative">
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#FF6B35] translate-x-1/2 -translate-y-1/2 z-20"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#FF6B35] translate-x-1/2 translate-y-1/2 z-20"></div>
          <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mono-font mb-6 md:mb-8">Ecosystem</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-sm font-medium mono-font text-white hover:text-[#35CB87] transition-colors">Zen AI</a></li>
            <li><a href="#" className="text-sm font-medium mono-font text-white hover:text-[#35CB87] transition-colors">Zen Pad</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/4 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 relative">
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#FF6B35] translate-x-1/2 -translate-y-1/2 z-20"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#FF6B35] translate-x-1/2 translate-y-1/2 z-20"></div>
          <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mono-font mb-6 md:mb-8">Quick Links</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-sm font-medium mono-font text-white hover:text-[#35CB87] transition-colors">Home</a></li>
            <li><a href="#" className="text-sm font-medium mono-font text-white hover:text-[#35CB87] transition-colors">LAUNCH APP</a></li>
            <li><a href="#" className="text-sm font-medium mono-font text-white hover:text-[#35CB87] transition-colors">Help Center</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="w-full md:w-1/4 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 relative">
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#FF6B35] translate-x-1/2 -translate-y-1/2 z-20"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#FF6B35] translate-x-1/2 translate-y-1/2 z-20"></div>
          <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mono-font mb-6 md:mb-8">Legal</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-sm font-medium mono-font text-white hover:text-[#35CB87] transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-sm font-medium mono-font text-white hover:text-[#35CB87] transition-colors">Cookie Policy</a></li>
            <li><a href="#" className="text-sm font-medium mono-font text-white hover:text-[#35CB87] transition-colors">Terms of Service</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div className="w-full md:w-1/4 p-8 md:p-12 flex flex-col items-start md:items-end">
          <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mono-font mb-6 md:mb-8 md:hidden">Socials</h4>
          <ul className="space-y-4 text-left md:text-right w-full">
            <li>
              <a href="#" className="flex items-center md:justify-end gap-2 text-sm font-medium mono-font text-white hover:text-[#35CB87] transition-colors group">
                X/TWITTER <span className="text-[10px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center md:justify-end gap-2 text-sm font-medium mono-font text-white hover:text-[#35CB87] transition-colors group">
                LINKEDIN <span className="text-[10px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center md:justify-end gap-2 text-sm font-medium mono-font text-white hover:text-[#35CB87] transition-colors group">
                MEDIUM <span className="text-[10px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Notice Row */}
      <div className="flex flex-col md:flex-row w-full border-b border-white/10 relative">
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-4 md:gap-16 border-b md:border-b-0 md:border-r border-white/10 relative">
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#FF6B35] translate-x-1/2 -translate-y-1/2 z-20"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#FF6B35] translate-x-1/2 translate-y-1/2 z-20"></div>
          <span className="text-[10px] font-bold text-white/40 mono-font">© 2026</span>
          <span className="text-[10px] font-bold text-white/40 mono-font uppercase tracking-widest">
            All Rights Reserved by ZenFinance.
          </span>
        </div>
        <div className="hidden md:block w-1/4 border-r border-white/10 relative">
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#FF6B35] translate-x-1/2 -translate-y-1/2 z-20"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#FF6B35] translate-x-1/2 translate-y-1/2 z-20"></div>
        </div>
        <div className="hidden md:block w-1/4"></div>
      </div>

      {/* Massive ZEN Brand Section */}
      <div className="flex w-full relative overflow-hidden">
        {/* Z Column */}
        <div className="w-1/4 p-4 md:p-12 border-r border-white/10 flex items-center justify-center relative min-h-[150px] md:min-h-[300px]">
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#FF6B35] translate-x-1/2 -translate-y-1/2 z-20"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#FF6B35] translate-x-1/2 translate-y-1/2 z-20"></div>
          <div className="absolute top-2 md:top-4 left-2 md:left-4 w-1 md:w-2 h-1 md:h-2 bg-[#35CB87]"></div>
          <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 w-1 md:w-2 h-1 md:h-2 bg-[#35CB87]"></div>
          <span className="text-[80px] sm:text-[150px] md:text-[240px] leading-none font-black tracking-tighter mono-font select-none opacity-90 text-white">Z</span>
        </div>

        {/* E Column */}
        <div className="w-1/2 p-4 md:p-12 border-r border-white/10 flex items-center justify-center relative min-h-[150px] md:min-h-[300px]">
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#FF6B35] translate-x-1/2 -translate-y-1/2 z-20"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#FF6B35] translate-x-1/2 translate-y-1/2 z-20"></div>
          <span className="text-[80px] sm:text-[150px] md:text-[240px] leading-none font-black tracking-tighter mono-font select-none opacity-90 text-white">E</span>
        </div>

        {/* N Column */}
        <div className="w-1/4 p-4 md:p-12 flex items-center justify-center relative min-h-[150px] md:min-h-[300px]">
          <div className="absolute top-2 md:top-4 right-2 md:right-4 w-1 md:w-2 h-1 md:h-2 bg-[#35CB87]"></div>
          <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 w-1 md:w-2 h-1 md:h-2 bg-[#35CB87]"></div>
          <span className="text-[80px] sm:text-[150px] md:text-[240px] leading-none font-black tracking-tighter mono-font select-none opacity-90 text-white">N</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;