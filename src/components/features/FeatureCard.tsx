import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  hover: { 
    scale: 1.05,
    boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)',
    transition: { duration: 0.3 }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const iconContainerVariants = {
  hover: {
    y: -10,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

export function FeatureCard({ title, description, icon: Icon, index }: FeatureCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-[#00F0FF]/50 transition-colors"
    >
      <motion.div 
        className="relative w-12 h-12 mb-6"
        variants={iconContainerVariants}
      >
        <motion.div 
          className="absolute inset-0 bg-[#00F0FF]/20 rounded-lg blur-lg"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="relative bg-gray-900 rounded-lg p-3">
          <Icon className="w-6 h-6 text-[#00F0FF]" />
        </div>
      </motion.div>
      <h3 className="text-xl font-semibold text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-400">
        {description}
      </p>
    </motion.div>
  );
}