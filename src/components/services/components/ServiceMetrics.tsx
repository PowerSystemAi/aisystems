import React from 'react';
import { motion, useInView } from 'framer-motion';
import type { Metric } from '../types';

interface ServiceMetricsProps {
  metrics: Metric[];
}

export function ServiceMetrics({ metrics }: ServiceMetricsProps) {
  const { ref, inView } = useInView({ once: true });

  return (
    <div ref={ref} className="grid grid-cols-2 gap-4">
      {metrics.map((metric, index) => (
        <div key={metric.label} className="bg-gray-900/50 p-4 rounded-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-[#00F0FF] text-2xl font-bold font-['Orbitron']"
          >
            {metric.prefix}
            {inView ? metric.value : 0}
            {metric.suffix}
          </motion.div>
          <div className="text-sm text-gray-400 mt-1">{metric.label}</div>
        </div>
      ))}
    </div>
  );
}