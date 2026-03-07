import React from 'react';
import logoImage from './zenfinance_logowhite_nobg.png';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2 group cursor-pointer">
      <div className="h-16 relative flex items-center justify-center">
        <img
          src={logoImage}
          alt="ZenFinance Logo"
          className="h-full w-auto drop-shadow-[0_0_8px_rgba(53,203,135,0.3)]"
        />
      </div>
    </div>
  );
};

export default Logo;