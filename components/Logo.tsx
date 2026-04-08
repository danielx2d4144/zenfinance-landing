import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2 group cursor-pointer">
      <div className="w-10 h-10 relative flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_0_8px_rgba(53,203,135,0.3)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Person Silhouette */}
          <path
            d="M50 25c3.8 0 7-3.2 7-7s-3.2-7-7-7-7 3.2-7 7 3.2 7 7 7z"
            fill="#35CB87"
          />
          <path
            d="M50 28c-7.5 0-14 4-16 11-1 3.5.5 7 3 9-9 1-17 6-17 16 0 9 12.5 14 30 14s30-5 30-14c0-10-8-15-17-16 2.5-2 4-5.5 3-9-2-7-8.5-11-16-11z"
            fill="#35CB87"
          />
          {/* Floating Spheres */}
          <circle cx="22" cy="45" r="8" fill="#35CB87" className="animate-pulse" />
          <circle cx="78" cy="45" r="8" fill="#35CB87" className="animate-pulse" style={{ animationDelay: '1s' }} />
        </svg>
      </div>
      <span className="text-xl font-black uppercase tracking-tighter mono-font text-white group-hover:text-[#35CB87] transition-colors">
        ZenFinance
      </span>
    </div>
  );
};

export default Logo;