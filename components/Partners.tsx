import React from 'react';
import { PARTNERS } from '../constants';

const Partners: React.FC = () => {
  return (
    <div className="w-full flex border-b border-white/10 bg-black">
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
  );
};

export default Partners;