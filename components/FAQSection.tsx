import React, { useState } from 'react';

const FAQ_DATA = [
  {
    question: 'What is the incubation program?',
    answer: 'Our incubation program is a multi-month intensive journey for early-stage Web3 startups, providing seed funding, technical mentorship, and strategic marketing support to move from idea to MVP and beyond.'
  },
  {
    question: 'What is the acceleration program?',
    answer: 'The acceleration program targets existing projects with traction, focusing on scaling, ecosystem integration, and institutional-grade fundraising preparation.'
  },
  {
    question: 'Which verticals are you investing in?',
    answer: 'We focus on high-impact sectors including Artificial Intelligence (AI), Decentralized Finance (DeFi), Decentralized Physical Infrastructure Networks (DePIN), and Layer 1/Layer 2 scaling solutions.'
  },
  {
    question: 'What is your investment thesis?',
    answer: 'We believe in backing builders who solve real-world problems using blockchain technology, focusing on sustainable tokenomics, technical innovation, and product-market fit.'
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#111111] border-b border-white/10">
      {/* Header Row */}
      <div className="flex h-56 border-b border-white/10">
        {/* FAQ Text Block */}
        <div className="w-1/4 flex items-center justify-center border-r border-white/10 bg-white/5">
          <h2 className="text-[120px] font-black uppercase tracking-tighter mono-font leading-none select-none text-white">
            FAQ
          </h2>
        </div>

        {/* Small Spacer Column */}
        <div className="w-[10%] border-r border-white/10 bg-white/10"></div>

        {/* 3D Visual Column */}
        <div className="w-1/4 flex items-center justify-center border-r border-white/10 relative p-8">
           <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/20"></div>
           <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/20"></div>
           <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/20"></div>
           <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/20"></div>
           
           {/* Abstract 3D Object placeholder (The "Jack") */}
           <div className="relative w-32 h-32 flex items-center justify-center">
              <div className="w-12 h-12 bg-black rounded-full border border-white/5 shadow-2xl relative z-20"></div>
              {/* Radial Arms */}
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <div 
                  key={deg}
                  className="absolute w-20 h-6 bg-black border border-white/5 rounded-full shadow-lg origin-center"
                  style={{ transform: `rotate(${deg}deg) translateX(24px)` }}
                >
                  <div className="absolute right-1 top-1.5 w-3 h-3 bg-gray-800 rounded-full"></div>
                </div>
              ))}
           </div>
        </div>

        {/* Most Common Questions Title Column */}
        <div className="flex-1 flex flex-col justify-center px-12 gap-2">
          <div className="flex items-center gap-3">
             <div className="w-2.5 h-2.5 bg-white shrink-0"></div>
             <h3 className="text-2xl font-bold uppercase tracking-tight mono-font text-white">Most Common Questions</h3>
          </div>
          <p className="text-white/50 mono-font text-sm ml-6">No worries, here you can find all the answers</p>
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
              className="flex items-center justify-between p-10 text-left w-full"
            >
              <span className="text-lg font-medium mono-font transition-transform group-hover:translate-x-2 duration-300 text-white">
                {item.question}
              </span>
              
              <div className={`
                w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300
                ${openIndex === index ? 'bg-white text-black rotate-45' : 'bg-[#35CB87] text-black hover:scale-110'}
              `}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
            </button>
            
            <div className={`
              overflow-hidden transition-all duration-500 ease-in-out
              ${openIndex === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}
            `}>
              <div className="px-10 pb-10 max-w-4xl">
                <p className="text-white/70 mono-font leading-relaxed border-l-2 border-[#35CB87] pl-6 py-2">
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