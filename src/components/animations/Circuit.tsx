import React from 'react';
import { useInView } from './hooks/useInView';
import { CircuitLine } from './CircuitLine';
import { CircuitNode } from './CircuitNode';

export function Circuit() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        {/* Top right circuit */}
        <CircuitLine
          path="M 80% 10% L 90% 10% L 90% 20%"
          delay={0}
          active={inView}
          color="#00F0FF"
        />
        <CircuitNode x="80%" y="10%" active={inView} delay={0} />
        <CircuitNode x="90%" y="20%" active={inView} delay={0.6} />

        {/* Top left circuit */}
        <CircuitLine
          path="M 20% 5% L 10% 5% L 10% 30% L 30% 30%"
          delay={0.3}
          active={inView}
          color="#FF00FF"
        />
        <CircuitNode x="20%" y="5%" active={inView} delay={0.3} />
        <CircuitNode x="30%" y="30%" active={inView} delay={1.2} />

        {/* Bottom circuit */}
        <CircuitLine
          path="M 70% 80% L 80% 80% L 80% 60%"
          delay={0.6}
          active={inView}
          color="#7000FF"
        />
        <CircuitNode x="70%" y="80%" active={inView} delay={0.6} />
        <CircuitNode x="80%" y="60%" active={inView} delay={1.8} />
      </div>
    </div>
  );
}