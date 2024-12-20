import React from 'react';
import { motion } from 'framer-motion';

interface CircuitNodeProps {
  x: string;
  y: string;
  active: boolean;
  delay: number;
}

export function CircuitNode({ x, y, active, delay }: CircuitNodeProps) {
  return (
    <motion.div
      className="absolute w-2 h-2 rounded-full bg-[#00F0FF] filter drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]"
      style={{ left: x, top: y }}
      initial={{ scale: 0, opacity: 0 }}
      animate={active ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      transition={{
        duration: 0.3,
        delay,
        ease: "backOut"
      }}
    />
  );
}