import React from 'react';
import { motion } from 'framer-motion';
import { LogoImage } from './LogoImage';
import { useLogoAnimation } from '../hooks/useLogoAnimation';

export function PowerUpAnimation() {
  const { opacity } = useLogoAnimation();

  return (
    <motion.div
      className="relative w-full h-full"
      initial={{ opacity: 0.5 }}
      animate={{ opacity }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <LogoImage />
    </motion.div>
  );
}