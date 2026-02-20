import React from 'react';

const TEAM_MEMBERS = [
  {
    name: 'Ariel Asafov',
    role: 'INCUBATION DIRECTOR',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300&auto=format&fit=crop&grayscale=true',
  },
  {
    name: 'Vlad Filatov',
    role: 'INVESTMENTS DIRECTOR',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&h=300&auto=format&fit=crop&grayscale=true',
  },
  {
    name: 'Nick van Der Kolk',
    role: 'HEAD OF ADVERTISMENT',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&h=300&auto=format&fit=crop&grayscale=true',
  },
  {
    name: 'Gintare',
    role: 'VC NETWORK MANAGER',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&h=300&auto=format&fit=crop&grayscale=true',
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="w-full bg-[#111111] border-b border-white/10">
      {/* Header Row */}
      <div className="flex h-48 border-b border-white/10">
        {/* Title Area */}
        <div className="w-1/2 flex items-center px-12 border-r border-white/10 bg-white/5">
          <h2 className="text-8xl font-black uppercase tracking-tighter mono-font leading-none select-none text-white">
            OUR TEAM
          </h2>
        </div>
        
        {/* Tagline Area */}
        <div className="w-1/4 p-10 flex items-start gap-3 border-r border-white/10">
          <div className="w-2 h-2 bg-white mt-1.5 shrink-0"></div>
          <p className="text-xl font-medium leading-tight mono-font text-white">
            Built by Founders<br />For Founders
          </p>
        </div>

        {/* Carousel Nav Area */}
        <div className="flex-1 flex items-end justify-end p-8">
          <div className="flex border border-white/10 bg-black">
            <button className="p-4 border-r border-white/10 hover:bg-white/5 transition-colors text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button className="p-4 hover:bg-white/5 transition-colors text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Grid of Team Members */}
      <div className="flex w-full min-h-[500px]">
        {TEAM_MEMBERS.map((member, index) => (
          <div 
            key={member.name} 
            className={`w-1/4 p-8 flex flex-col gap-6 items-center ${index !== TEAM_MEMBERS.length - 1 ? 'border-r border-white/10' : ''}`}
          >
            {/* Card Content */}
            <div className="w-full max-w-[280px] bg-black p-0 flex flex-col border border-white/10 shadow-sm relative group cursor-pointer hover:shadow-xl transition-shadow">
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
                  {/* The L-shaped corners */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#35CB87] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#35CB87] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <button className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] mono-font text-white">
                    BIO <span className="text-[#35CB87] text-sm">+</span>
                  </button>
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;