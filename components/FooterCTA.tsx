import React, { useState } from 'react';
import Logo from './Logo';

const FooterCTA: React.FC = () => {
  const [email, setEmail] = useState('');

  return (
    <section className="w-full bg-[#111111] border-b border-white/10">
      <div className="flex flex-col lg:flex-row w-full min-h-[220px] relative">
        {/* Left Column: Logo */}
        <div className="w-full lg:w-1/4 flex items-center px-6 md:px-12 py-8 lg:py-0 border-b lg:border-b-0 lg:border-r border-white/10 relative">
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#35CB87] translate-x-1/2 -translate-y-1/2 z-20"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#35CB87] translate-x-1/2 translate-y-1/2 z-20"></div>
          <Logo />
        </div>

        {/* Middle Column: Subscription Input */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-12 border-b lg:border-b-0 lg:border-r border-white/10 py-12 relative">
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#35CB87] translate-x-1/2 -translate-y-1/2 z-20"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#35CB87] translate-x-1/2 translate-y-1/2 z-20"></div>
          <h3 className="text-2xl md:text-3xl font-medium mono-font mb-8 text-white">
            Subscribe to be in touch*
          </h3>
          <div className="relative w-full max-w-xl">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your e-mail"
              className="w-full bg-transparent border-b border-white/30 pb-4 outline-none mono-font text-base md:text-lg focus:border-white transition-colors placeholder:text-white/30 text-white"
            />
          </div>
        </div>

        {/* Right Column: Action Button & Disclaimer */}
        <div className="w-full lg:w-1/4 flex flex-col justify-between p-8 md:p-12 gap-8">
          <div className="text-left lg:text-right">
            <p className="text-[10px] text-white/40 font-bold tracking-[0.2em] mono-font uppercase">
              *Only valuable resources
            </p>
          </div>
          
          <div className="flex justify-start lg:justify-end">
            <button 
              className="w-full sm:w-auto relative bg-[#35CB87] text-black hover:text-white group transition-colors duration-300 overflow-visible rounded-md"
              style={{
                clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)'
              }}
            >
              <div className="px-12 py-4 font-bold uppercase tracking-[0.2em] mono-font text-sm flex items-center justify-center transition-transform active:scale-95">
                SUBSCRIBE
              </div>
              {/* Hover highlight overlay */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;