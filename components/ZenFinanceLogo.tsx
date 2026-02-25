import React from 'react';
import { motion } from 'framer-motion';

const ZenFinanceLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      <div className="relative w-full aspect-square flex items-center justify-center">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-[0_0_15px_rgba(53,203,135,0.3)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Person Silhouette */}
          <motion.path
            d="M100 45c7.7 0 14-6.3 14-14S107.7 17 100 17s-14 6.3-14 14 6.3 14 14 14z"
            fill="#35CB87"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.path
            d="M100 50c-15 0-28 8-32 22-2 7 1 14 6 18-18 2-34 12-34 32 0 18 25 28 60 28s60-10 60-28c0-20-16-30-34-32 5-4 8-11 6-18-4-14-17-22-32-22z"
            fill="#35CB87"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          
          {/* Floating Spheres */}
          <motion.circle
            cx="45"
            cy="85"
            r="18"
            fill="#35CB87"
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.circle
            cx="155"
            cy="85"
            r="18"
            fill="#35CB87"
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          
          {/* Glow effects */}
          <defs>
            <radialGradient id="sphereGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(100 100) rotate(90) scale(100)">
              <stop stopColor="#35CB87" stopOpacity="0.2" />
              <stop offset="1" stopColor="#35CB87" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="100" fill="url(#sphereGlow)" />
        </svg>
      </div>
      
      <motion.div
        className="mt-6 text-3xl md:text-4xl font-black uppercase tracking-tighter mono-font text-[#35CB87]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        ZenFinance
      </motion.div>
    </div>
  );
};

export default ZenFinanceLogo;
