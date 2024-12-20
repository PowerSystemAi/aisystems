import React from 'react';
import { motion } from 'framer-motion';

export function NeonGlow() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.4, 0.2, 0.4] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }}
      className="absolute inset-0 bg-[#00F0FF]/20 rounded-xl blur-xl"
    />
  );
}