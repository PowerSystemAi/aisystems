import React from 'react';
import { motion } from 'framer-motion';
import { LOGO_COLORS } from '../constants';
import { useLogoAnimation } from '../hooks/useLogoAnimation';

export function LogoAnimation() {
  const { opacity } = useLogoAnimation();

  return (
    <motion.div
      className="relative w-full h-full"
      initial={{ scale: 0.95, opacity: 0.7 }}
      animate={{ 
        scale: [0.95, 1, 0.95],
        opacity: [0.7, 1, 0.7]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.5, 1]
      }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          filter: [
            'drop-shadow(0 0 8px rgba(110, 170, 170, 0.3))',
            'drop-shadow(0 0 12px rgba(110, 170, 170, 0.5))',
            'drop-shadow(0 0 8px rgba(110, 170, 170, 0.3))'
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.5, 1]
        }}
      >
        <img
          src="/src/assets/LOGOCIRCLE.png"
          alt="PowerSystemAI Logo"
          className="w-full h-full object-contain"
        />
      </motion.div>
    </motion.div>
  );
}