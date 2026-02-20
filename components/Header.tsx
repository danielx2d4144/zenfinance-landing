import React from 'react';
import Logo from './Logo';
import { NAV_ITEMS } from '../constants';
import Button from './Button';

const Header: React.FC = () => {
  return (
    <header className="w-full border-b border-white/10 flex h-24 bg-black sticky top-0 z-50">
      {/* Logo Section */}
      <div className="w-1/4 flex items-center px-12 border-r border-white/10">
        <Logo />
      </div>

      {/* Navigation Section */}
      <div className="flex-1 flex items-center justify-center border-r border-white/10 px-4">
        <nav className="flex gap-10">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-[10px] uppercase font-bold tracking-[0.15em] hover:text-[#35CB87] transition-colors mono-font text-white/70"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Action Section */}
      <div className="w-1/4 flex items-center justify-between pl-8 pr-4">
        <button className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest hover:text-[#35CB87] transition-colors mono-font text-white/70 group">
          <div className="grid grid-cols-2 gap-0.5 p-0.5 border border-white/5 group-hover:border-[#35CB87]/30">
            <div className="w-1.5 h-1.5 bg-[#35CB87]"></div>
            <div className="w-1.5 h-1.5 bg-[#35CB87]"></div>
            <div className="w-1.5 h-1.5 bg-[#35CB87]"></div>
            <div className="w-1.5 h-1.5 bg-[#35CB87]"></div>
          </div>
          <div className="flex flex-col items-start leading-none">
            <span>Our</span>
            <span>Ecosystem</span>
          </div>
        </button>
        <Button variant="primary">Apply Now</Button>
      </div>
    </header>
  );
};

export default Header;