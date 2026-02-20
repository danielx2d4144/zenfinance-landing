import React from 'react';
import { PARTNERS } from '../constants';

const Partners: React.FC = () => {
  return (
    <div className="w-full flex flex-col bg-black border-b border-white/10">
      {/* Header Row */}
      <div className="flex w-full border-b border-white/10 h-16">
        <div className="w-1/4 flex items-center justify-center border-r border-white/10 bg-white/5">
          <span className="text-[12px] font-bold uppercase tracking-[0.2em] mono-font text-[#35CB87]">
            SUPPORTED BLOCKCHAIN
          </span>
        </div>
        <div className="flex-1 border-r border-white/10"></div>
        <div className="flex-1 border-r border-white/10"></div>
        <div className="flex-1 border-r border-white/10"></div>
        <div className="w-24 flex items-center justify-center gap-4">
          <button className="text-white/40 hover:text-[#35CB87] transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button className="text-white/40 hover:text-[#35CB87] transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {/* Logos Row */}
      <div className="flex w-full">
        {PARTNERS.map((partner, index) => (
          <div 
            key={partner.name} 
            className={`flex-1 h-32 flex items-center justify-center p-8 grayscale invert hover:grayscale-0 hover:invert-0 transition-all cursor-pointer ${index !== PARTNERS.length - 1 ? 'border-r border-white/10' : ''}`}
          >
            <div className="flex items-center gap-4">
              <img src={partner.logo} alt={partner.name} className="h-10 w-auto" />
              <span className="text-2xl font-bold uppercase tracking-tight mono-font text-white">{partner.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;