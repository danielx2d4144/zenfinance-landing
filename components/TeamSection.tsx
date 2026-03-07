import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import danielJosiahImage from './teampfp/bio pic.jpg';
import mofiSageImage from './teampfp/mofi bio pic.jpg';
import rdDanielImage from './teampfp/RDpfp_b&w.jpg';
import tanjiroImage from './teampfp/tangiro_pfp_b&w.jpg';

const TEAM_MEMBERS = [
  {
    name: 'Daniel Josiah',
    role: 'COFOUNDER',
    image: danielJosiahImage,
    bio: 'Mechatronics Engineer and dedicated blockchain developer focused on building in the Web3 space. Leverages engineering discipline and systems-level thinking to design secure smart contracts and scalable decentralized applications. Actively engaged in the Web3 ecosystem, contributing to and exploring emerging technologies that drive the future of decentralized finance and trustless infrastructure.'
  },
  {
    name: 'R.D Daniel',
    role: 'COFOUNDER',
    image: rdDanielImage,
    bio: 'Strategic investment professional with a focus on early-stage Web3 ecosystems. Daniel has a track record of identifying high-potential projects and providing strategic guidance for long-term growth.'
  },
  {
    name: 'Tanjiro',
    role: 'Community manager & SMM',
    image: tanjiroImage,
    bio: 'Growing early-stage Web3 projects with strategy and heart. Running AMAs, contests, and campaigns that turn lurkers into active, loyal community members. Passionate about DeFi, NFTs, and building real engagement.'
  },
  {
    name: 'Mofi Sage',
    role: 'DESIGN ARCHITECT',
    image: mofiSageImage,
    bio: 'Frontend Developer | UI/UX Designer | Student. 5+ years building clean, responsive interfaces with React, modern CSS, and Figma. Focused on creating intuitive user experiences that actually work. Currently juggling React, Figma, late-night commits'
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
    <section id="team" className="w-full bg-[#111111] border-b border-white/10 relative">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:h-48 border-b border-white/10 relative">
        {/* Title Area */}
        <div className="w-full md:w-1/2 flex items-center px-6 md:px-12 py-12 md:py-0 border-b md:border-b-0 md:border-r border-white/10 bg-white/5 relative">
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#35CB87] translate-x-1/2 -translate-y-1/2 z-20"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#35CB87] translate-x-1/2 translate-y-1/2 z-20"></div>
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter mono-font leading-none select-none text-white">
            OUR TEAM
          </h2>
        </div>
        
        {/* Tagline Area */}
        <div className="w-full md:w-1/4 p-8 md:p-10 flex items-start gap-3 border-b md:border-b-0 md:border-r border-white/10 relative">
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#35CB87] translate-x-1/2 -translate-y-1/2 z-20"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#35CB87] translate-x-1/2 translate-y-1/2 z-20"></div>
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
                          referrerPolicy="no-referrer"
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
                className="absolute inset-0 w-full h-full bg-[#111111] text-white flex flex-col shadow-2xl overflow-hidden"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                {/* Diagonal Corner Lines */}
                <div className="absolute top-0 left-0 w-10 h-10 pointer-events-none">
                  <div className="absolute top-0 left-0 w-[140%] h-[1px] bg-white/10 origin-top-left rotate-45"></div>
                </div>
                <div className="absolute top-0 right-0 w-10 h-10 pointer-events-none">
                  <div className="absolute top-0 right-0 w-[140%] h-[1px] bg-white/10 origin-top-right -rotate-45"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-10 h-10 pointer-events-none">
                  <div className="absolute bottom-0 left-0 w-[140%] h-[1px] bg-white/10 origin-bottom-left -rotate-45"></div>
                </div>
                <div className="absolute bottom-0 right-0 w-10 h-10 pointer-events-none">
                  <div className="absolute bottom-0 right-0 w-[140%] h-[1px] bg-white/10 origin-bottom-right rotate-45"></div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-10 pt-14 flex flex-col border-b border-white/10 overflow-y-auto custom-scrollbar">
                  <p className="text-[15px] font-medium mono-font leading-relaxed text-left text-white/70">
                    {member.bio}
                  </p>
                </div>

                {/* Footer Area */}
                <div className="p-6 px-10 flex items-center justify-between bg-black">
                  <button className="hover:opacity-70 transition-opacity">
                    <Send size={24} className="text-white -rotate-12" />
                  </button>

                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setFlippedIndex(null);
                    }}
                    className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest mono-font group text-white"
                  >
                    BIO <X size={20} className="text-[#35CB87] group-hover:rotate-90 transition-transform duration-300" />
                  </button>
                </div>

                {/* Decorative Border Lines */}
                <div className="absolute inset-0 border border-white/10 pointer-events-none"></div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default TeamSection;