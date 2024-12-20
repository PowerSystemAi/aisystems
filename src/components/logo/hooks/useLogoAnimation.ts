import { useCallback } from 'react';

export function useLogoAnimation() {
  // Adjusted opacity range for better visibility while maintaining the effect
  const opacity = [0.7, 1, 0.7];
  
  const getOpacityValue = useCallback(() => opacity, []);

  return {
    opacity: getOpacityValue(),
  };
}