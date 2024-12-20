import React, { useState } from 'react';
import { Quote } from 'lucide-react';
import { TestimonialCard } from './TestimonialCard';
import { TestimonialControls } from './TestimonialControls';
import { testimonials } from './testimonialData';
import { SectionHeader } from '../common';
import { Background } from '../common';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative bg-[#0A0A0A] py-20" id="testimonials">
      <Background className="opacity-70" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="What Our Clients Say"
          gradient="secondary"
          className="mb-16"
        />

        <div className="relative max-w-3xl mx-auto">
          <Quote className="w-12 h-12 text-[#00F0FF] mx-auto mb-8" />
          
          <div className="relative h-48">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.author}
                {...testimonial}
                isActive={index === currentIndex}
              />
            ))}
          </div>

          <TestimonialControls onPrev={prev} onNext={next} />
        </div>
      </div>
    </section>
  );
}