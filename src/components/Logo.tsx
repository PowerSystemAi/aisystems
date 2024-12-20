import React from 'react';
import { motion } from 'framer-motion';

export function Logo() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-32 h-32 mx-auto mt-6 relative"
    >
      {/* Glow effect behind the logo */}
      <div className="absolute inset-0 bg-[#00F0FF]/20 rounded-xl blur-xl" />
      
      {/* Main logo container */}
      <div className="relative bg-[#0A0A0A] border-2 border-[#00F0FF] rounded-xl p-4 shadow-[0_0_15px_rgba(0,240,255,0.5)]">
        {/* AI Text and Square */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 border-2 border-[#00F0FF] rounded-lg" />
          <div className="text-[#00F0FF] text-4xl font-bold py-2">AI</div>
          
          {/* Circuit board elements */}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-1 h-3 bg-[#00F0FF]" />
              ))}
            </div>
          </div>
          
          {/* Side circuit lines */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full">
            <div className="flex space-x-1">
              <div className="w-3 h-0.5 bg-[#00F0FF]" />
              <div className="w-1 h-1 rounded-full bg-[#00F0FF]" />
            </div>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full">
            <div className="flex space-x-1">
              <div className="w-1 h-1 rounded-full bg-[#00F0FF]" />
              <div className="w-3 h-0.5 bg-[#00F0FF]" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Circuit paths extending from the logo */}
      <div className="absolute -left-4 top-1/2 w-4 h-0.5 bg-[#00F0FF]" />
      <div className="absolute -right-4 top-1/2 w-4 h-0.5 bg-[#00F0FF]" />
      <div className="absolute left-1/2 -top-4 h-4 w-0.5 bg-[#00F0FF]" />
      <div className="absolute left-1/2 -bottom-4 h-4 w-0.5 bg-[#00F0FF]" />
      
      {/* Circuit nodes */}
      <div className="absolute -left-5 top-1/2 w-1.5 h-1.5 rounded-full bg-[#00F0FF] transform -translate-y-1/2" />
      <div className="absolute -right-5 top-1/2 w-1.5 h-1.5 rounded-full bg-[#00F0FF] transform -translate-y-1/2" />
      <div className="absolute left-1/2 -top-5 w-1.5 h-1.5 rounded-full bg-[#00F0FF] transform -translate-x-1/2" />
      <div className="absolute left-1/2 -bottom-5 w-1.5 h-1.5 rounded-full bg-[#00F0FF] transform -translate-x-1/2" />
    </motion.div>
  );
}