import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { GradientButton } from '../common/GradientButton';
import type { PricingTier } from './pricingData';

interface PricingCardProps extends PricingTier {
  index: number;
}

export function PricingCard({ 
  title, 
  description, 
  features,
  highlighted = false,
  index 
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={`relative bg-gradient-to-b from-gray-900/50 to-gray-800/30 p-8 rounded-2xl backdrop-blur-sm border ${
        highlighted ? 'border-[#00F0FF]' : 'border-gray-800'
      } hover:border-[#00F0FF]/50 transition-all duration-300`}
    >
      {/* Title */}
      <h3 className={`text-2xl font-bold mb-4 font-['Orbitron'] ${
        highlighted ? 'text-[#00F0FF]' : 'text-white'
      }`}>
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 mb-8">
        {description}
      </p>

      {/* Features List */}
      <ul className="space-y-4 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-start space-x-3">
            <Check className="w-5 h-5 text-[#00F0FF] mt-0.5" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <GradientButton
        variant={highlighted ? "primary" : "secondary"}
        size="lg"
        className="w-full"
      >
        Book Your Call
      </GradientButton>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#00F0FF]/10 to-transparent rounded-tr-2xl" />
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-[#00F0FF]/10 to-transparent rounded-bl-2xl" />
    </motion.div>
  );
}