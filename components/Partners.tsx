import React from 'react';
import { PARTNERS } from '../constants';

const Partners: React.FC = () => {
  return (
    <div className="w-full flex flex-col bg-black border-b border-white/10">
      {/* Header Row */}
      <div className="flex w-full border-b border-white/10 h-auto md:h-16 flex-col md:flex-row relative">
        <div className="w-full md:w-1/4 flex items-center justify-center py-4 md:py-0 border-b md:border-b-0 md:border-r border-white/10 bg-white/5 relative">
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#FF6B35] translate-x-1/2 -translate-y-1/2 z-20"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#FF6B35] translate-x-1/2 translate-y-1/2 z-20"></div>
          <span className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.2em] mono-font text-[#35CB87]">
            SUPPORTED BLOCKCHAIN
          </span>
        </div>
        <div className="hidden md:block w-1/4 border-r border-white/10 relative">
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#FF6B35] translate-x-1/2 -translate-y-1/2 z-20"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#FF6B35] translate-x-1/2 translate-y-1/2 z-20"></div>
        </div>
        <div className="hidden md:block w-1/4 border-r border-white/10 relative">
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#FF6B35] translate-x-1/2 -translate-y-1/2 z-20"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#FF6B35] translate-x-1/2 translate-y-1/2 z-20"></div>
        </div>
        <div className="hidden md:block w-1/4 relative">
        </div>
      </div>

      {/* Logos Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 w-full">
        {PARTNERS.map((partner, index) => (
          <div 
            key={partner.name} 
            className={`h-24 md:h-32 flex items-center justify-center p-4 md:p-8 grayscale invert hover:grayscale-0 hover:invert-0 transition-all cursor-pointer border-b md:border-b-0 ${index !== PARTNERS.length - 1 ? 'border-r' : ''} border-white/10 relative`}
          >
            <div className="flex items-center gap-2 md:gap-4">
              <img src={partner.logo} alt={partner.name} className="h-6 md:h-10 w-auto" />
              <span className="text-lg md:text-2xl font-bold uppercase tracking-tight mono-font text-white">{partner.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
