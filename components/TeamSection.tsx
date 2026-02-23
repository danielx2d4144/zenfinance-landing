import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

const TEAM_MEMBERS = [
  {
    name: 'Ariel Asafov',
    role: 'INCUBATION DIRECTOR',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300&auto=format&fit=crop&grayscale=true',
    bio: 'Industrial Engineer with previous experience in managing the Israeli Railway System and managing product development of other tech companies including Judea. Ariel brings his vast experience and knowledge into his Chief Operations Officer (COO) role at ZenFinance.'
  },
  {
    name: 'Vlad Filatov',
    role: 'INVESTMENTS DIRECTOR',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&h=300&auto=format&fit=crop&grayscale=true',
    bio: 'Strategic investment professional with a focus on early-stage Web3 ecosystems. Vlad has a track record of identifying high-potential projects and providing strategic guidance for long-term growth.'
  },
  {
    name: 'Nick van Der Kolk',
    role: 'HEAD OF ADVERTISMENT',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&h=300&auto=format&fit=crop&grayscale=true',
    bio: 'Marketing visionary with extensive experience in digital advertising and brand positioning within the crypto space. Nick leads our advertising strategies to ensure maximum reach and impact.'
  },
  {
    name: 'Gintare',
    role: 'VC NETWORK MANAGER',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&h=300&auto=format&fit=crop&grayscale=true',
    bio: 'Expert in venture capital relations and network building. Gintare bridges the gap between innovative startups and institutional investors, fostering a robust ecosystem for growth.'
  },
];

const TeamSection: React.FC = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="w-full bg-[#111111] border-b border-white/10 relative">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:h-48 border-b border-white/10 relative">
        {/* Title Area */}
        <div className="w-full md:w-1/2 flex items-center px-6 md:px-12 py-12 md:py-0 border-b md:border-b-0 md:border-r border-white/10 bg-white/5 relative">
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#FF6B35] translate-x-1/2 -translate-y-1/2 z-20"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#FF6B35] translate-x-1/2 translate-y-1/2 z-20"></div>
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter mono-font leading-none select-none text-white">
            OUR TEAM
          </h2>
        </div>
        
        {/* Tagline Area */}
        <div className="w-full md:w-1/4 p-8 md:p-10 flex items-start gap-3 border-b md:border-b-0 md:border-r border-white/10 relative">
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#FF6B35] translate-x-1/2 -translate-y-1/2 z-20"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#FF6B35] translate-x-1/2 translate-y-1/2 z-20"></div>
          <div className="w-2 h-2 bg-white mt-1.5 shrink-0"></div>
          <p className="text-lg md:text-xl font-medium leading-tight mono-font text-white">
            Built by Founders<br />For Founders
          </p>
        </div>

        {/* Carousel Nav Area */}
        <div className="w-full md:w-1/4 flex items-center md:items-end justify-center md:justify-end p-6 md:p-8">
          <div className="flex border border-white/10 bg-black">
            <button 
              onClick={() => scroll('left')}
              className="p-4 border-r border-white/10 hover:bg-white/5 transition-colors text-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-4 hover:bg-white/5 transition-colors text-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Grid of Team Members */}
      <div 
        ref={scrollContainerRef}
        className="flex flex-row overflow-x-auto snap-x snap-mandatory lg:flex-row w-full min-h-[500px] custom-scrollbar scroll-smooth"
      >
        {TEAM_MEMBERS.map((member, index) => (
          <div 
            key={member.name} 
            className={`w-[85vw] sm:w-[45vw] lg:w-1/4 shrink-0 snap-center p-6 md:p-8 flex flex-col gap-6 items-center border-b lg:border-b-0 ${index !== TEAM_MEMBERS.length - 1 ? 'lg:border-r border-white/10' : ''}`}
            style={{ perspective: '1000px' }}
          >
            <motion.div 
              className="w-full max-w-[280px] relative h-[460px] cursor-pointer"
              initial={false}
              animate={{ 
                rotateY: flippedIndex === index ? 180 : 0,
                scale: flippedIndex === index ? 1.02 : 1
              }}
              whileHover={{ scale: flippedIndex === index ? 1.02 : 1.01 }}
              transition={{ 
                duration: 0.8, 
                type: 'spring', 
                stiffness: 100, 
                damping: 15,
                mass: 1
              }}
              style={{ transformStyle: 'preserve-3d' }}
              onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}
            >
              {/* Front Side */}
              <div 
                className="w-full h-full bg-black p-0 flex flex-col border border-white/10 shadow-sm relative group transition-shadow"
                style={{ backfaceVisibility: 'hidden' }}
              >
                 {/* Name & Role Header */}
                 <div className="p-6 border-b border-white/10 text-center">
                    <h3 className="text-lg font-bold mono-font leading-none mb-2 text-white">{member.name}</h3>
                    <p className="text-[10px] text-white/50 mono-font tracking-widest">{member.role}</p>
                 </div>

                 {/* Profile Image Area */}
                 <div className="p-6 bg-gray-900 flex justify-center border-b border-white/10">
                    <div className="relative w-full aspect-square overflow-hidden border border-white/5">
                       <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                       />
                       <div className="absolute inset-0 bg-white/5 mix-blend-overlay"></div>
                    </div>
                 </div>

                 {/* Bio Button with Mint Corners */}
                 <div className="relative p-4 flex items-center justify-center bg-black group-hover:bg-gray-900 transition-colors">
                    <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#35CB87] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#35CB87] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] mono-font text-white">
                      BIO <span className="text-[#35CB87] text-sm">+</span>
                    </div>
                 </div>
              </div>

              {/* Back Side (Bio) */}
              <div 
                className="absolute inset-0 w-full h-full bg-[#E5E5E5] text-black flex flex-col shadow-2xl overflow-hidden"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                {/* Diagonal Corner Lines */}
                <div className="absolute top-0 left-0 w-10 h-10 pointer-events-none">
                  <div className="absolute top-0 left-0 w-[140%] h-[1px] bg-black/30 origin-top-left rotate-45"></div>
                </div>
                <div className="absolute top-0 right-0 w-10 h-10 pointer-events-none">
                  <div className="absolute top-0 right-0 w-[140%] h-[1px] bg-black/30 origin-top-right -rotate-45"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-10 h-10 pointer-events-none">
                  <div className="absolute bottom-0 left-0 w-[140%] h-[1px] bg-black/30 origin-bottom-left -rotate-45"></div>
                </div>
                <div className="absolute bottom-0 right-0 w-10 h-10 pointer-events-none">
                  <div className="absolute bottom-0 right-0 w-[140%] h-[1px] bg-black/30 origin-bottom-right rotate-45"></div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-10 pt-14 flex flex-col border-b border-black/10 overflow-y-auto custom-scrollbar">
                  <p className="text-[15px] font-medium mono-font leading-relaxed text-left">
                    {member.bio}
                  </p>
                </div>

                {/* Footer Area */}
                <div className="p-6 px-10 flex items-center justify-between bg-[#E5E5E5]">
                  <button className="hover:opacity-70 transition-opacity">
                    <Send size={24} className="text-black -rotate-12" />
                  </button>

                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setFlippedIndex(null);
                    }}
                    className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest mono-font group"
                  >
                    BIO <X size={20} className="text-[#FF6B35] group-hover:rotate-90 transition-transform duration-300" />
                  </button>
                </div>

                {/* Decorative Border Lines */}
                <div className="absolute inset-0 border border-black/10 pointer-events-none"></div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default TeamSection;