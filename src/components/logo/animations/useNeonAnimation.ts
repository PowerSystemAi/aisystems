import { useEffect, useState } from 'react';

export function useNeonAnimation(delay: number = 0) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isAnimating;
}