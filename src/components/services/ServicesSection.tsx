import React from 'react';
import { ServiceCard } from './ServiceCard';
import { ServicesBackground } from './ServicesBackground';
import { services } from './serviceData';
import { SectionHeader } from '../common';

export function ServicesSection() {
  return (
    <section className="relative min-h-screen py-20" id="services">
      <ServicesBackground />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Services"
          description="Enterprise-Grade AI Solutions for Modern Businesses"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}