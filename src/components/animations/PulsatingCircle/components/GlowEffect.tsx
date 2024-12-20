import React from 'react';
import { motion, MotionValue } from 'framer-motion';

interface GlowEffectProps {
  color: string;
  blurRadius: number;
  opacity: MotionValue<number>;
}

export function GlowEffect({ color, blurRadius, opacity }: GlowEffectProps) {
  return (
    <motion.div
      className="absolute inset-0 rounded-full"
      style={{
        backgroundColor: color,
        filter: `blur(${blurRadius}px)`,
        opacity,
      }}
    />
  );
}