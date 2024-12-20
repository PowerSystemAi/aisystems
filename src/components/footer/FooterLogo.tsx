import React from 'react';
import { motion } from 'framer-motion';
import { BrandName } from '../common/BrandName';

export function FooterLogo() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative inline-block"
    >
      <div className="absolute inset-0 bg-[#00F0FF]/20 blur-xl rounded-full" />
      <BrandName className="text-xl relative" />
    </motion.div>
  );
}