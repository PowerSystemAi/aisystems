import React, { useState } from 'react';
import { FAQItem } from './components/FAQItem';
import { faqItems } from './faqData';
import { Background } from '../common/Background';
import { SectionHeader } from '../common';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative min-h-screen py-20" id="faq">
      <Background className="opacity-70" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Frequently Asked Questions"
          description="Find answers to common questions about our AI solutions and services"
          gradient="secondary"
          className="mb-16"
        />

        <div className="grid gap-6">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              {...item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}