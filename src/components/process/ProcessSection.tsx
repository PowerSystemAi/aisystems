import React from 'react';
import { Search, Code, BarChart } from 'lucide-react';
import { ProcessCard } from './ProcessCard';
import { ProcessBackground } from './ProcessBackground';
import { SectionHeader } from '../common';

const processSteps = [
  {
    number: '01',
    title: 'Analyze',
    description: 'Deep dive into your business needs with our advanced AI analysis tools. We identify opportunities and create a strategic roadmap for implementation.',
    icon: Search
  },
  {
    number: '02',
    title: 'Build & Implement',
    description: 'Transform insights into action with our cutting-edge development process. We create custom solutions that seamlessly integrate with your existing systems.',
    icon: Code
  },
  {
    number: '03',
    title: 'Maintain & Improve',
    description: 'Continuous monitoring and optimization ensure your solutions evolve with your business. Regular updates and improvements keep you ahead of the curve.',
    icon: BarChart
  }
];

export function ProcessSection() {
  return (
    <section className="relative min-h-screen py-20" id="process">
      <ProcessBackground />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Process"
          description="A streamlined approach to implementing AI solutions that drive real business value"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
          {processSteps.map((step, index) => (
            <ProcessCard
              key={step.number}
              stepNumber={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}