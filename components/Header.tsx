import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { NAV_ITEMS } from '../constants';
import Button from './Button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWallet } from './WalletProvider';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { account, connectWallet, formatAddress } = useWallet();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      const id = href.split('#')[1];
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <header className="w-full border-b border-white/10 flex h-20 md:h-24 bg-black sticky top-0 z-50">
      {/* Logo Section */}
      <div className="w-1/2 md:w-1/4 flex items-center px-6 md:px-12 border-r border-white/10">
        <Link to="/">
          <Logo />
        </Link>
      </div>

      {/* Navigation Section - Desktop */}
      <div className="hidden md:flex flex-1 items-center justify-center border-r border-white/10 px-4">
        <nav className="flex gap-10">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-[10px] uppercase font-bold tracking-[0.15em] hover:text-[#35CB87] transition-colors mono-font text-white/70"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Action Section - Desktop */}
      <div className="hidden md:flex w-1/4 items-center justify-end pl-8 pr-4">
        <Button variant="primary" onClick={connectWallet}>
          {account ? formatAddress(account) : 'LAUNCH APP'}
        </Button>
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
                  onClick={(e) => {
                    handleNavClick(e, item.href);
                    setIsMenuOpen(false);
                  }}
                  className="text-sm uppercase font-bold tracking-[0.2em] hover:text-[#35CB87] transition-colors mono-font text-white/70"
                >
                  {item.label}
                </a>
              ))}
              <div className="h-px bg-white/10 my-2"></div>
              <div className="flex flex-col gap-6">
                <Button variant="primary" className="w-full" onClick={connectWallet}>
                  {account ? formatAddress(account) : 'LAUNCH APP'}
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;