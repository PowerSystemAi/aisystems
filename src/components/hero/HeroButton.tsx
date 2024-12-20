import React from 'react';
import { Play } from 'lucide-react';
import { GradientButton } from '../common/GradientButton';

export function HeroButton() {
  return (
    <div className="flex justify-center">
      <GradientButton
        variant="primary"
        size="lg"
        icon={<Play className="w-5 h-5" />}
        className="bg-gradient-to-r from-[#00F0FF] via-[#7C3AED] to-[#00F0FF]"
      >
        Schedule a Free Demo
      </GradientButton>
    </div>
  );
}