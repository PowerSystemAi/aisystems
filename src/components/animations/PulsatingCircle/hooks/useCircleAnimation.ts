import { useEffect } from 'react';
import { useSpring, useMotionValue } from 'framer-motion';

interface UseCircleAnimationProps {
  baseOpacity: number;
  peakOpacity: number;
  duration: number;
}

export function useCircleAnimation({
  baseOpacity,
  peakOpacity,
  duration,
}: UseCircleAnimationProps) {
  const scale = useMotionValue(0.9);
  const opacity = useMotionValue(baseOpacity);

  useEffect(() => {
    const scaleAnimation = useSpring(scale, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    });

    const opacityAnimation = useSpring(opacity, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    });

    const animate = async () => {
      while (true) {
        // Expand
        scale.set(1);
        opacity.set(peakOpacity);
        await new Promise(resolve => setTimeout(resolve, duration * 500));

        // Contract
        scale.set(0.9);
        opacity.set(baseOpacity);
        await new Promise(resolve => setTimeout(resolve, duration * 500));
      }
    };

    animate();

    return () => {
      scaleAnimation.stop();
      opacityAnimation.stop();
    };
  }, [scale, opacity, baseOpacity, peakOpacity, duration]);

  return { scale, opacity };
}