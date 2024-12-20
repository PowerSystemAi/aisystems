import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

export function TestimonialControls({ onPrev, onNext }: TestimonialControlsProps) {
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onPrev}
        className="absolute left-0 text-gray-400 hover:text-[#00F0FF] transition-colors"
      >
        <ChevronLeft size={40} />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onNext}
        className="absolute right-0 text-gray-400 hover:text-[#00F0FF] transition-colors"
      >
        <ChevronRight size={40} />
      </motion.button>
    </>
  );
}