import React from 'react';
import { motion } from 'framer-motion';

interface NeonPathProps {
  d: string;
  delay: number;
  duration?: number;
  color?: string;
}

export function NeonPath({ d, delay, duration = 0.5, color = "#00F0FF" }: NeonPathProps) {
  return (
    <motion.path
      d={d}
      stroke={color}
      strokeWidth="2"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{
        duration,
        delay,
        ease: "easeInOut"
      }}
      className="filter drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]"
    />
  );
}