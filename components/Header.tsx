import React, { useState } from 'react';
import Logo from './Logo';
import { NAV_ITEMS } from '../constants';
import Button from './Button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-white/10 flex h-20 md:h-24 bg-black sticky top-0 z-50">
      {/* Logo Section */}
      <div className="w-1/2 md:w-1/4 flex items-center px-6 md:px-12 border-r border-white/10">
        <Logo />
      </div>

      {/* Navigation Section - Desktop */}
      <div className="hidden md:flex flex-1 items-center justify-center border-r border-white/10 px-4">
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

      {/* Action Section - Desktop */}
      <div className="hidden md:flex w-1/4 items-center justify-between pl-8 pr-4">
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
        <Button variant="primary">LAUNCH APP</Button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex-1 flex items-center justify-end px-6">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-white hover:text-[#35CB87] transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-black border-b border-white/10 z-40 md:hidden overflow-hidden"
          >
            <nav className="flex flex-col p-8 gap-6">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm uppercase font-bold tracking-[0.2em] hover:text-[#35CB87] transition-colors mono-font text-white/70"
                >
                  {item.label}
                </a>
              ))}
              <div className="h-px bg-white/10 my-2"></div>
              <div className="flex flex-col gap-6">
                <button className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-white/70">
                  <div className="grid grid-cols-2 gap-1 p-1 border border-white/10">
                    <div className="w-2 h-2 bg-[#35CB87]"></div>
                    <div className="w-2 h-2 bg-[#35CB87]"></div>
                    <div className="w-2 h-2 bg-[#35CB87]"></div>
                    <div className="w-2 h-2 bg-[#35CB87]"></div>
                  </div>
                  Our Ecosystem
                </button>
                <Button variant="primary" className="w-full">LAUNCH APP</Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;