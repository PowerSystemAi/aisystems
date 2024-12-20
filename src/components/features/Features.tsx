import React from 'react';
import { FeatureCard } from './FeatureCard';
import { features } from './featureData';
import { SectionHeader } from '../common';
import { Background } from '../common';

export function Features() {
  const firstRowFeatures = features.filter(f => f.row === 1);
  const secondRowFeatures = features.filter(f => f.row === 2);

  return (
    <section className="relative min-h-screen py-20" id="services">
      <Background className="opacity-70" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="AI Solutions Tailored to Your Business"
          description="Your partner in seamless customer support, CRM integration, and hassle-free appointment scheduling"
          gradient="header"
          size="normal"
          className="mb-16"
        />

        <div className="space-y-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {firstRowFeatures.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                {...feature}
                index={index}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {secondRowFeatures.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                {...feature}
                index={index + firstRowFeatures.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}