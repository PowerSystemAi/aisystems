import React from 'react';
import { motion } from 'framer-motion';

export function PowerSystemTitle() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="text-4xl sm:text-6xl lg:text-7xl font-bold font-['Orbitron'] tracking-tight relative"
    >
      <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] via-[#7C3AED] to-[#00F0FF] bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]">
        PowerSystem
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.8, 1] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 3 }}
          className="absolute inset-0 blur-lg from-[#00F0FF] via-[#7C3AED] to-[#00F0FF] opacity-60"
        >
          PowerSystem
        </motion.span>
      </span>
      <span className="text-[#00F0FF]">AI</span>
    </motion.h1>
  );
}