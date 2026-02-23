import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQ_DATA = [
  {
    question: 'What is ZenFinance?',
    answer: 'ZenFinance is a decentralized lending protocol built on Zenchain. It allows users to supply ZIP-20 assets as collateral and borrow against them within a secure, validator-backed infrastructure.'
  },
  {
    question: 'How is ZenFinance different from other lending protocols?',
    answer: 'ZenFinance is built natively on Zenchain’s cross-chain architecture. It integrates directly with the chain’s interoperability module, meaning collateral and liquidity routing are secured by validator consensus rather than external bridges.'
  },
  {
    question: 'What assets can I supply?',
    answer: 'You can supply supported ZIP-20 tokens, which represent assets bridged into Zenchain from external blockchains.'
  },
  {
    question: 'How are collateral ratios determined?',
    answer: 'Collateral factors (Loan-to-Value ratios) are determined based on asset type, facilitator structure, and overall risk profile. These parameters may be adjusted through governance to maintain system stability.'
  },
  {
    question: 'How are cross-chain transactions secured?',
    answer: 'Outgoing cross-chain actions are executed through validator multisignature infrastructure. Incoming transactions are validated through standardized cross-chain verification processes.'
  },
  {
    question: 'Are there risks involved?',
    answer: 'Yes. Risks include smart contract risk, liquidation risk, market volatility, and cross-chain infrastructure risks. Users should understand these risks before participating.'
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#111111] border-b border-white/10">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:h-56 border-b border-white/10 relative">
        {/* FAQ Text Block */}
        <div className="w-full md:w-1/4 flex items-center justify-center py-12 md:py-0 border-b md:border-b-0 md:border-r border-white/10 bg-white/5 relative">
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#FF6B35] translate-x-1/2 -translate-y-1/2 z-20"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#FF6B35] translate-x-1/2 translate-y-1/2 z-20"></div>
          <h2 className="text-7xl sm:text-9xl md:text-[120px] font-black uppercase tracking-tighter mono-font leading-none select-none text-white">
            FAQ
          </h2>
        </div>

        {/* 3D Visual Column */}
        <div className="w-full md:w-1/2 flex items-center justify-center py-12 md:py-0 border-b md:border-b-0 md:border-r border-white/10 relative p-8 group overflow-hidden">
           <div className="absolute top-0 right-0 w-2 h-2 bg-[#FF6B35] translate-x-1/2 -translate-y-1/2 z-20"></div>
           <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#FF6B35] translate-x-1/2 translate-y-1/2 z-20"></div>
           
           <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/20"></div>
           <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/20"></div>
           <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/20"></div>
           <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/20"></div>
           
           {/* Interactive 3D Object (The "Jack") */}
           <motion.div 
             className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center cursor-pointer"
             animate={{ 
               rotate: [0, 360],
               scale: [1, 1.05, 1]
             }}
             transition={{ 
               rotate: { duration: 20, repeat: Infinity, ease: "linear" },
               scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
             }}
             whileHover={{ scale: 1.2, rotate: 0 }}
           >
              {/* Central Core */}
              <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-gray-800 to-black rounded-full border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] relative z-20 flex items-center justify-center">
                <div className="w-4 h-4 md:w-6 md:h-6 bg-[#35CB87] rounded-full blur-[8px] opacity-30 animate-pulse"></div>
              </div>

              {/* Radial Arms with Motion */}
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <motion.div 
                  key={deg}
                  className="absolute w-16 h-6 md:w-24 md:h-8 bg-gradient-to-r from-black to-gray-900 border border-white/5 rounded-full shadow-lg origin-center flex items-center justify-end pr-2"
                  style={{ rotate: deg }}
                  animate={{ 
                    translateX: [15, 25, 15],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: deg / 100
                  }}
                >
                  <div className="w-2 h-2 md:w-4 md:h-4 bg-[#35CB87] rounded-full shadow-[0_0_10px_#35CB87] opacity-80"></div>
                </motion.div>
              ))}

              {/* Orbital Ring */}
              <motion.div 
                className="absolute w-32 h-32 md:w-44 md:h-44 border border-white/5 rounded-full"
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full shadow-[0_0_15px_white]"></div>
              </motion.div>
           </motion.div>
        </div>

        {/* Most Common Questions Title Column */}
        <div className="w-full md:w-1/4 flex flex-col justify-center p-8 md:px-12 gap-2">
          <div className="flex items-center gap-3">
             <div className="w-2.5 h-2.5 bg-white shrink-0"></div>
             <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight mono-font text-white">Most Common Questions</h3>
          </div>
          <p className="text-white/50 mono-font text-xs md:text-sm ml-6">No worries, here you can find all the answers</p>
        </div>
      </div>

      {/* FAQ Items List */}
      <div className="flex flex-col">
        {FAQ_DATA.map((item, index) => (
          <div 
            key={index} 
            className="group flex flex-col border-b border-white/10 hover:bg-white/[0.02] transition-colors"
          >
            <button 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex items-center justify-between p-6 md:p-10 text-left w-full"
            >
              <span className="text-base md:text-lg font-medium mono-font transition-transform group-hover:translate-x-2 duration-300 text-white pr-4">
                {item.question}
              </span>
              
              <div 
                className={`
                  w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-300 shrink-0
                  ${openIndex === index ? 'bg-[#35CB87] text-black rotate-45' : 'bg-[#35CB87] text-black hover:scale-110'}
                `}
                style={{
                  clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
                  borderRadius: '4px'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
            </button>
            
            <div className={`
              overflow-hidden transition-all duration-500 ease-in-out
              ${openIndex === index ? 'max-h-96 md:max-h-64 opacity-100' : 'max-h-0 opacity-0'}
            `}>
              <div className="px-6 md:px-10 pb-10 max-w-4xl">
                <p className="text-sm md:text-base text-white/70 mono-font leading-relaxed border-l-2 border-[#35CB87] pl-4 md:pl-6 py-2">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;