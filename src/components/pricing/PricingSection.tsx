import React from 'react';
import { PricingBackground } from './PricingBackground';
import { PricingCard } from './PricingCard';
import { pricingTiers } from './pricingData';
import { SectionHeader } from '../common';

export function PricingSection() {
  return (
    <section className="relative min-h-screen py-20" id="pricing">
      <PricingBackground />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Subscriptions"
          description="Three different subscriptions to match your company's needs"
          gradient="secondary"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <PricingCard
              key={tier.title}
              {...tier}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}