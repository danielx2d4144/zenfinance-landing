import React from 'react';
import { motion } from 'framer-motion';

interface LegalLayoutProps {
  title: string;
  children: React.ReactNode;
}

const LegalLayout: React.FC<LegalLayoutProps> = ({ title, children }) => {
  return (
    <div className="pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-2.5 h-2.5 bg-[#35CB87]"></div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mono-font text-white">
            {title}
          </h1>
        </div>
        
        <div className="mono-font text-white/70 leading-relaxed space-y-12 text-sm md:text-base">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default LegalLayout;
