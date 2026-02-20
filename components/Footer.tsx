import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#111111] border-t border-white/10">
      {/* Links Grid */}
      <div className="flex w-full border-b border-white/10">
        {/* Ecosystem */}
        <div className="w-1/4 p-12 border-r border-white/10">
          <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mono-font mb-8">Ecosystem</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-sm font-medium mono-font text-white hover:text-[#35CB87] transition-colors">ChainGPT AI</a></li>
            <li><a href="#" className="text-sm font-medium mono-font text-white hover:text-[#35CB87] transition-colors">ChainGPT Pad</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="w-1/4 p-12 border-r border-white/10">
          <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mono-font mb-8">Quick Links</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-sm font-medium mono-font text-white hover:text-[#35CB87] transition-colors">Home</a></li>
            <li><a href="#" className="text-sm font-medium mono-font text-white hover:text-[#35CB87] transition-colors">LAUNCH APP</a></li>
            <li><a href="#" className="text-sm font-medium mono-font text-white hover:text-[#35CB87] transition-colors">Help Center</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="w-1/4 p-12 border-r border-white/10">
          <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mono-font mb-8">Legal</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-sm font-medium mono-font text-white hover:text-[#35CB87] transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-sm font-medium mono-font text-white hover:text-[#35CB87] transition-colors">Cookie Policy</a></li>
            <li><a href="#" className="text-sm font-medium mono-font text-white hover:text-[#35CB87] transition-colors">Terms of Service</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div className="w-1/4 p-12 flex flex-col items-end">
          <ul className="space-y-4 text-right">
            <li>
              <a href="#" className="flex items-center justify-end gap-2 text-sm font-medium mono-font text-white hover:text-[#35CB87] transition-colors group">
                X/TWITTER <span className="text-[10px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-end gap-2 text-sm font-medium mono-font text-white hover:text-[#35CB87] transition-colors group">
                LINKEDIN <span className="text-[10px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-end gap-2 text-sm font-medium mono-font text-white hover:text-[#35CB87] transition-colors group">
                MEDIUM <span className="text-[10px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Notice Row */}
      <div className="flex w-full border-b border-white/10">
        <div className="w-1/2 p-12 flex items-center gap-16 border-r border-white/10">
          <span className="text-[10px] font-bold text-white/40 mono-font">© 2025</span>
          <span className="text-[10px] font-bold text-white/40 mono-font uppercase tracking-widest">
            All Rights Reserved by ChainGPTLabs.org.
          </span>
        </div>
        <div className="w-1/4 border-r border-white/10"></div>
        <div className="w-1/4"></div>
      </div>

      {/* Massive LABS Brand Section */}
      <div className="flex w-full relative">
        {/* L Column */}
        <div className="w-1/4 p-12 border-r border-white/10 flex items-center justify-center relative min-h-[300px]">
          <div className="absolute top-4 left-4 w-2 h-2 bg-[#35CB87]"></div>
          <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#35CB87]"></div>
          <span className="text-[240px] leading-none font-black tracking-tighter mono-font select-none opacity-90 text-white">L</span>
        </div>

        {/* A Column */}
        <div className="w-1/4 p-12 border-r border-white/10 flex items-center justify-center min-h-[300px]">
          <span className="text-[240px] leading-none font-black tracking-tighter mono-font select-none opacity-90 text-white">A</span>
        </div>

        {/* B Column */}
        <div className="w-1/4 p-12 border-r border-white/10 flex items-center justify-center min-h-[300px]">
          <span className="text-[240px] leading-none font-black tracking-tighter mono-font select-none opacity-90 text-white">B</span>
        </div>

        {/* S Column */}
        <div className="w-1/4 p-12 flex items-center justify-center relative min-h-[300px]">
          <div className="absolute top-4 right-4 w-2 h-2 bg-[#35CB87]"></div>
          <div className="absolute bottom-4 right-4 w-2 h-2 bg-[#35CB87]"></div>
          <span className="text-[240px] leading-none font-black tracking-tighter mono-font select-none opacity-90 text-white">S</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;