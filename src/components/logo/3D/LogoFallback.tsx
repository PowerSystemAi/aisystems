import React from 'react';
import { motion } from 'framer-motion';

export function LogoFallback() {
  return (
    <div className="relative w-full h-full">
      <motion.div
        className="absolute inset-0"
        animate={{
          rotateY: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <img
          src="/src/assets/LOGOCIRCLE.png"
          alt="PowerSystemAI Logo"
          className="w-full h-full object-contain"
          style={{
            filter: "drop-shadow(0 0 15px rgba(110, 170, 170, 0.8))"
          }}
        />
      </motion.div>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'radial-gradient(circle, rgba(110,170,170,0.3) 0%, rgba(110,170,170,0) 70%)',
        }}
      />
    </div>
  );
}