import React from 'react';

const BeyondHero: React.FC = () => {
  return (
    <section className="bg-[#111111] w-full min-h-[700px] border-b border-white/10 relative overflow-hidden font-sans">
      {/* Top Banner */}
      <div className="w-full h-32 border-b border-white/10 flex">
        <div className="w-1/2 bg-black flex items-center px-12 border-r border-white/10">
          <h1 className="text-5xl font-black uppercase tracking-[0.2em] mono-font text-white">
            Beyond Capital
          </h1>
        </div>
        <div className="flex-1 flex items-end justify-end p-4">
           <div className="w-24 h-24 bg-gradient-to-br from-gray-800 to-gray-600 rounded-full opacity-50 blur-xl"></div>
           <div className="absolute top-8 right-12 w-16 h-16 border border-white/5 flex items-center justify-center">
              <div className="w-12 h-12 flex flex-wrap gap-1">
                 <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
                 <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
                 <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
              </div>
           </div>
        </div>
      </div>

      <div className="flex w-full min-h-[600px]">
        {/* Left Column: Sectors & Apply */}
        <div className="w-[30%] p-12 flex flex-col justify-start">
          <div className="flex items-start gap-2 mb-12">
            <div className="w-1.5 h-1.5 bg-white mt-1.5"></div>
            <div>
              <h2 className="text-xl font-bold leading-tight mono-font text-white">Supercharging Web3<br />Builders</h2>
            </div>
          </div>

          <div className="flex flex-col gap-4 mb-12">
            {[
              { label: 'AI', checked: true },
              { label: 'DeFi', checked: true },
              { label: 'DePIN', checked: true },
              { label: 'L1/L2', checked: true },
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute inset-0 border border-white/5 rounded-md -rotate-1 group-hover:rotate-0 transition-transform"></div>
                <div className="bg-black/40 backdrop-blur-sm border border-white/10 p-4 flex items-center gap-4 rounded-md relative z-10">
                  <span className="text-[#35CB87]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <span className="font-bold mono-font text-sm uppercase tracking-widest text-white"> {item.label}</span>
                </div>
              </div>
            ))}
          </div>

          <button className="bg-[#35CB87] text-black px-8 py-3 rounded-xl font-bold uppercase text-[10px] tracking-widest hover:bg-[#2da971] transition-all w-fit shadow-lg shadow-[#35CB87]/20">
            Apply For Funding
          </button>
        </div>

        {/* Center Column: Robot Capsule */}
        <div className="flex-1 flex justify-center relative">
          <div className="w-[340px] h-[600px] bg-black rounded-t-full rounded-b-[100px] border-x-4 border-black shadow-2xl relative flex flex-col items-center overflow-hidden">
            {/* Top Cap */}
            <div className="w-full h-12 bg-gray-900 border-b border-white/5"></div>
            
            {/* Glass Chamber */}
            <div className="w-full flex-1 bg-gradient-to-b from-black via-blue-900/10 to-gray-900 relative flex items-center justify-center overflow-hidden">
              {/* Robot Mascot */}
              <div className="relative z-20 animate-bounce duration-[3000ms] flex flex-col items-center">
                 {/* Robot Head */}
                 <div className="w-32 h-32 bg-[#35CB87] rounded-3xl p-3 flex items-center justify-center border-4 border-black shadow-lg">
                    <div className="w-full h-full bg-white rounded-xl flex items-center justify-center gap-4 border border-black/20">
                        <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                        <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                    </div>
                 </div>
                 {/* Robot Body */}
                 <div className="w-16 h-20 bg-black border-2 border-gray-800 rounded-2xl mt-[-10px] shadow-md flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-900 rounded-full border border-gray-800"></div>
                 </div>
                 {/* Robot Arms */}
                 <div className="absolute left-[-20px] top-[140px] w-6 h-12 bg-black border border-gray-800 rounded-full -rotate-12"></div>
                 <div className="absolute right-[-20px] top-[140px] w-6 h-12 bg-black border border-gray-800 rounded-full rotate-12"></div>
              </div>
              
              {/* Floor/Base Reflections */}
              <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-gray-800 to-transparent opacity-50"></div>
              <div className="absolute bottom-8 w-1/2 h-1 bg-[#35CB87]/40 blur-sm rounded-full"></div>
            </div>

            {/* Bottom Base */}
            <div className="w-full h-24 bg-black border-t-2 border-[#35CB87] flex flex-col items-center justify-center">
                <div className="w-24 h-1.5 bg-gray-800 rounded-full mb-1"></div>
                <div className="w-16 h-1 bg-gray-900 rounded-full"></div>
            </div>
          </div>
          
          {/* Background Grid Accent */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
             <div className="w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:40px_40px]"></div>
          </div>
        </div>

        {/* Right Column: Smart Capital & Programs */}
        <div className="w-[30%] p-12 flex flex-col">
          <div className="flex items-start gap-2 mb-2">
            <div className="w-1.5 h-1.5 bg-white mt-1.5"></div>
            <h2 className="text-xl font-bold mono-font uppercase text-white">Smart Capital</h2>
          </div>
          <p className="text-xs text-gray-400 mono-font mb-12 ml-4">Our ecosystem support</p>

          <div className="flex gap-4">
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