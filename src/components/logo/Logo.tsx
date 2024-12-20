import React from 'react';
import { LogoAnimation } from './animations/LogoAnimation';

export function Logo() {
  return (
    <div className="relative w-48 h-48 mx-auto mt-12">
      <LogoAnimation />
    </div>
  );
}