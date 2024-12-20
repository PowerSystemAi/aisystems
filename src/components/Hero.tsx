import React from 'react';
import { HeroContent } from './hero/HeroContent';
import { Background } from './common/Background';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#0A0A0A] pt-16">
      <Background className="opacity-70" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <HeroContent />
      </div>
    </div>
  );
}