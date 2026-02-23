import React from 'react';
import { useWallet } from './WalletProvider';

const BeyondHero: React.FC = () => {
  const { account, connectWallet, formatAddress } = useWallet();

  return (
    <section className="bg-[#111111] w-full min-h-[700px] border-b border-white/10 relative overflow-hidden font-sans">
      {/* Top Banner */}
      <div className="w-full h-auto md:h-32 border-b border-white/10 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-black flex items-center px-6 md:px-12 py-8 md:py-0 border-b md:border-b-0 md:border-r border-white/10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-[0.1em] md:tracking-[0.2em] mono-font text-white">
            Beyond Capital
          </h1>
        </div>
        <div className="flex-1 flex items-center md:items-end justify-center md:justify-end p-6 md:p-4 relative">
           <div className="w-24 h-24 bg-gradient-to-br from-gray-800 to-gray-600 rounded-full opacity-50 blur-xl"></div>
           <div className="absolute top-1/2 md:top-8 right-6 md:right-12 -translate-y-1/2 md:translate-y-0 w-12 h-12 md:w-16 md:h-16 border border-white/5 flex items-center justify-center">
              <div className="w-8 h-8 md:w-12 md:h-12 flex flex-wrap gap-1">
                 <div className="w-3 h-3 md:w-5 md:h-5 bg-gray-700 rounded-full"></div>
                 <div className="w-3 h-3 md:w-5 md:h-5 bg-gray-700 rounded-full"></div>
                 <div className="w-3 h-3 md:w-5 md:h-5 bg-gray-700 rounded-full"></div>
              </div>
           </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full min-h-[600px]">
        {/* Left Column: Sectors & Apply */}
        <div className="w-full lg:w-1/4 p-8 md:p-12 flex flex-col justify-start border-b lg:border-b-0 lg:border-r border-white/10 relative">
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#FF6B35] translate-x-1/2 -translate-y-1/2 z-20"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#FF6B35] translate-x-1/2 translate-y-1/2 z-20"></div>
          
          {/* Subtle Grid Texture */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
               style={{ 
                 backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
                 backgroundSize: '40px 40px' 
               }}>
          </div>
          
          <div className="flex items-start gap-4 mb-8 md:mb-12 relative z-10">
            <div className="w-2.5 h-2.5 bg-white mt-1.5 flex-shrink-0"></div>
            <h2 className="text-xl md:text-2xl font-bold leading-tight mono-font text-white uppercase tracking-tight">
              Supercharging Web3<br />lending
            </h2>
          </div>

          <div className="flex flex-col border-t border-white/10 mb-8 md:mb-12">
            {[
              { label: 'CCIM' },
              { label: 'DeFi' },
              { label: 'CLCM' },
              { label: 'L1/L2' },
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="relative h-16 md:h-20 flex items-center justify-center border-b border-white/10 group cursor-pointer hover:bg-white/5 transition-colors"
              >
                {/* Corner Brackets */}
                <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-white/20 group-hover:border-white/40 transition-colors"></div>
                <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-white/20 group-hover:border-white/40 transition-colors"></div>
                <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-white/20 group-hover:border-white/40 transition-colors"></div>
                <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-white/20 group-hover:border-white/40 transition-colors"></div>
                
                <div className="flex items-center gap-3">
                  <svg width="20" height="20" md:width="24" md:height="24" viewBox="0 0 24 24" fill="none" className="text-[#35CB87]">
                    <path d="M6 12L10 16L14 8" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11 12L15 16L19 8" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-medium mono-font text-base md:text-lg text-white">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button 
              onClick={connectWallet}
              className="bg-[#35CB87] text-black px-10 py-3 font-bold uppercase text-[11px] tracking-widest hover:brightness-110 transition-all shadow-xl shadow-[#35CB87]/20 overflow-visible rounded-md"
              style={{
                clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)'
              }}
            >
              {account ? formatAddress(account) : 'LAUNCH APP'}
            </button>
          </div>
        </div>

        {/* Center Column: Robot Capsule */}
        <div className="w-full lg:w-1/2 flex justify-center py-12 md:py-0 relative border-r border-white/10">
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#FF6B35] translate-x-1/2 -translate-y-1/2 z-20"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#FF6B35] translate-x-1/2 translate-y-1/2 z-20"></div>
          
          <div className="w-[280px] sm:w-[340px] h-[500px] sm:h-[600px] bg-black rounded-t-full rounded-b-[100px] border-x-4 border-black shadow-2xl relative flex flex-col items-center overflow-hidden">
            {/* Top Cap */}
            <div className="w-full h-12 bg-gray-900 border-b border-white/5"></div>
            
            {/* Glass Chamber */}
            <div className="w-full flex-1 bg-gradient-to-b from-black via-blue-900/10 to-gray-900 relative flex items-center justify-center overflow-hidden">
              {/* Robot Mascot */}
              <div className="relative z-20 animate-bounce duration-[3000ms] flex flex-col items-center">
                 {/* Robot Head */}
                 <div className="w-24 h-24 sm:w-32 sm:h-32 bg-[#35CB87] rounded-3xl p-3 flex items-center justify-center border-4 border-black shadow-lg">
                    <div className="w-full h-full bg-white rounded-xl flex items-center justify-center gap-4 border border-black/20">
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-black rounded-full"></div>
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-black rounded-full"></div>
                    </div>
                 </div>
                 {/* Robot Body */}
                 <div className="w-12 h-16 sm:w-16 sm:h-20 bg-black border-2 border-gray-800 rounded-2xl mt-[-8px] sm:mt-[-10px] shadow-md flex items-center justify-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-900 rounded-full border border-gray-800"></div>
                 </div>
                 {/* Robot Arms */}
                 <div className="absolute left-[-15px] sm:left-[-20px] top-[110px] sm:top-[140px] w-4 h-10 sm:w-6 sm:h-12 bg-black border border-gray-800 rounded-full -rotate-12"></div>
                 <div className="absolute right-[-15px] sm:right-[-20px] top-[110px] sm:top-[140px] w-4 h-10 sm:w-6 sm:h-12 bg-black border border-gray-800 rounded-full rotate-12"></div>
              </div>
              
              {/* Floor/Base Reflections */}
              <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-gray-800 to-transparent opacity-50"></div>
              <div className="absolute bottom-8 w-1/2 h-1 bg-[#35CB87]/40 blur-sm rounded-full"></div>
            </div>

            {/* Bottom Base */}
            <div className="w-full h-20 sm:h-24 bg-black border-t-2 border-[#35CB87] flex flex-col items-center justify-center">
                <div className="w-20 sm:w-24 h-1.5 bg-gray-800 rounded-full mb-1"></div>
                <div className="w-12 sm:w-16 h-1 bg-gray-900 rounded-full"></div>
            </div>
          </div>
          
          {/* Background Grid Accent */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
             <div className="w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:40px_40px]"></div>
          </div>
        </div>

        {/* Right Column: Smart Capital & Programs */}
        <div className="w-full lg:w-1/4 p-8 md:p-12 flex flex-col border-t lg:border-t-0 border-white/10">
          <div className="flex items-start gap-2 mb-2">
            <div className="w-1.5 h-1.5 bg-white mt-1.5"></div>
            <h2 className="text-xl font-bold mono-font uppercase text-white">Smart Capital</h2>
          </div>
          <p className="text-xs text-gray-400 mono-font mb-8 md:mb-12 ml-4">Our ecosystem support</p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Program Card 01 */}
            <div className="flex-1 bg-black p-6 rounded-lg border border-white/5 shadow-sm flex flex-col gap-4 group cursor-pointer hover:border-[#35CB87]/30 transition-colors">
               <div className="flex justify-between items-center text-[10px] font-bold mono-font text-gray-500">
                  <div className="w-2 h-2 bg-white"></div>
                  <span>01</span>
               </div>
               <div className="w-full aspect-square bg-gray-900 rounded-lg flex items-center justify-center overflow-hidden border border-white/5 relative">
                  <div className="w-12 h-12 border-4 border-gray-700 rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-black/50 to-transparent"></div>
               </div>
               <h3 className="text-xs font-bold leading-tight mono-font text-white">Incubation &<br />Acceleration<br />Program</h3>
            </div>

            {/* Program Card 02 */}
            <div className="flex-1 bg-black p-6 rounded-lg border border-white/5 shadow-sm flex flex-col gap-4 group cursor-pointer hover:border-[#35CB87]/30 transition-colors">
               <div className="flex justify-between items-center text-[10px] font-bold mono-font text-gray-500">
                  <div className="w-2 h-2 bg-white"></div>
                  <span>02</span>
               </div>
               <div className="w-full aspect-square bg-gray-900 rounded-lg flex items-center justify-center overflow-hidden border border-white/5 relative">
                  <div className="flex flex-col gap-1 items-end w-12">
                    <div className="w-full h-3 bg-gray-700 rounded-sm"></div>
                    <div className="w-3/4 h-3 bg-gray-700 rounded-sm"></div>
                    <div className="w-1/2 h-3 bg-gray-700 rounded-sm"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-black/50 to-transparent"></div>
               </div>
               <h3 className="text-xs font-bold leading-tight mono-font text-white">Investment &<br />Funding</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondHero;