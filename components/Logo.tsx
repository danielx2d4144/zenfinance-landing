import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-[#35CB87] rounded-lg flex flex-col items-center justify-center relative overflow-hidden">
        {/* Robot face dots */}
        <div className="flex gap-1.5 mb-1 z-10">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
        {/* Robot face mouth line */}
        <div className="w-4 h-0.5 bg-white rounded-full z-10"></div>
        {/* Inner container */}
        <div className="absolute inset-1 bg-black rounded-[6px] -z-0"></div>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em] mono-font mb-0.5">ChainGPT</span>
        <span className="text-xl font-black uppercase mono-font tracking-tight text-white">Labs</span>
      </div>
    </div>
  );
};

export default Logo;