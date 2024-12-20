import React from 'react';
import { motion } from 'framer-motion';

interface CircuitLinesProps {
  className?: string;
}

export function CircuitLines({ className = "" }: CircuitLinesProps) {
  return (
    <div className={`absolute ${className}`}>
      <motion.div
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="h-0.5 bg-[#00F0FF] w-full"
      />
      <motion.div
        className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] absolute -right-1 top-1/2 transform -translate-y-1/2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 2 }}
      />
    </div>
  );
}