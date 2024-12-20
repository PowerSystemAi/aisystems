import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import type { Testimonial } from './types';

interface TestimonialCardProps extends Testimonial {
  isActive: boolean;
}

export function TestimonialCard({ text, author, position, isActive }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ 
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1 : 0.95,
        x: isActive ? 0 : 20
      }}
      transition={{ duration: 0.3 }}
      className="absolute inset-0"
    >
      <Quote className="w-12 h-12 text-[#00F0FF]/20 mb-6" />
      <p className="text-xl text-gray-300 mb-8 leading-relaxed">{text}</p>
      <div className="text-center">
        <div className="font-semibold text-white mb-1">{author}</div>
        <div className="text-gray-400 text-sm">{position}</div>
      </div>
    </motion.div>
  );
}