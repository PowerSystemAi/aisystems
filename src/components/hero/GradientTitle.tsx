import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../../constants/colors';

export function GradientTitle() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative text-center"
    >
      {/* Main Title with Gradient */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-5xl md:text-6xl lg:text-7xl font-bold font-['Orbitron'] tracking-tight"
      >
        <span 
          className="gradient-text bg-gradient-to-r from-[#00F0FF] via-[#7C3AED] to-[#00F0FF] gradient-glow"
        >
          PowerSystemAI
        </span>
      </motion.h1>

      {/* Glow Effect */}
      <div 
        className="absolute inset-0 blur-3xl opacity-20 mix-blend-screen"
        style={{
          background: `linear-gradient(90deg, ${COLORS.primary.main}, ${COLORS.secondary.main}, ${COLORS.primary.main})`
        }}
      />
    </motion.div>
  );
}