import React from 'react';
import { motion } from 'framer-motion';
import { ParticleSystem } from '../animations/ParticleSystem';
import { Logo } from '../logo';

export function ServiceHero() {
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center bg-[#0A0A0A] pt-20 overflow-hidden">
      <ParticleSystem />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
        <Logo />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-['Orbitron'] mb-6"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
        >
          Enterprise-Grade AI Solutions for Modern Businesses
        </motion.p>
      </div>
    </div>
  );
}