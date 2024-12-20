import React from 'react';
import { motion } from 'framer-motion';

interface CircuitLineProps {
  path: string;
  delay: number;
  active: boolean;
  color: string;
}

export function CircuitLine({ path, delay, active, color }: CircuitLineProps) {
  return (
    <svg className="absolute inset-0 w-full h-full">
      <motion.path
        d={path}
        stroke={color}
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={active ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{
          duration: 1.5,
          delay,
          ease: "easeInOut"
        }}
        className="filter drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]"
      />
    </svg>
  );
}