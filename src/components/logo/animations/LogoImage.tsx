import React from 'react';
import { motion } from 'framer-motion';

export function LogoImage() {
  return (
    <motion.img
      src="/src/components/animations/NEWLOGO-removebg-preview.png"
      alt="PowerSystemAI Logo"
      className="w-full h-full object-contain"
      style={{
        filter: "drop-shadow(0 0 10px rgba(110, 170, 170, 0.3))"
      }}
    />
  );
}