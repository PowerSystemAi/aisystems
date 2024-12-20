import React from 'react';
import { motion } from 'framer-motion';
import type { PulsatingCircleProps } from './types';

export function PulsatingCircle({
  baseOpacity = 0.4,
  peakOpacity = 0.6,
  duration = 3,
  size = 200,
  color = 'rgb(110, 170, 170)',
  blurRadius = 10,
  className = '',
}: PulsatingCircleProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      <motion.div
        className="absolute inset-0 rounded-full border-2"
        style={{ borderColor: color }}
        animate={{
          scale: [0.9, 1, 0.9],
          opacity: [baseOpacity, peakOpacity, baseOpacity],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          backgroundColor: color,
          filter: `blur(${blurRadius}px)`,
        }}
        animate={{
          opacity: [baseOpacity, peakOpacity, baseOpacity],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}