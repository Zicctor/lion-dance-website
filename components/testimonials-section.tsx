"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { AnimatedComponent } from '@/components/animated-component';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import { ShimmerButton } from '@/components/magicui/shimmer-button';

const testimonials = [
  {
    name: "Sarah & Michael Chen",
    role: "Wedding Couple",
    image: "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg",
    quote: "The lion dance performance made our wedding truly unforgettable. The energy and skill of the performers had everyone mesmerized. It was the highlight of our celebration!",
  },
  {
    name: "David Wong",
    role: "Restaurant Owner",
    image: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg",
    quote: "Having Au Lac perform at our grand opening brought us incredible luck. The performance was spectacular and drew a huge crowd. Our business has been thriving ever since!",
  },
  {
    name: "Emily Martinez",
    role: "Cultural Festival Organizer",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    quote: "Au Lac Lion Dance Team has been the highlight of our festival for three years running. Their performances are always dynamic, authentic, and absolutely captivating.",
  },
  {
    name: "James & Linda Thompson",
    role: "Corporate Event Planners",
    image: "https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg",
    quote: "The team's professionalism and attention to detail impressed everyone. They created an amazing atmosphere that perfectly balanced tradition with entertainment.",
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsTransitioning(false);
      }, 300);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-secondary/5 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedComponent>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Testimonials
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from those who have experienced the magic of our performances
            </p>
          </div>
        </AnimatedComponent>

        <div className="max-w-4xl mx-auto">
          <AnimatedComponent>
            <Card className="relative overflow-hidden bg-background/50 backdrop-blur-sm border-primary/10">
              <div className="absolute top-4 left-4 text-primary/20">
                <Quote size={48} />
              </div>
              
              <div className={`p-8 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-lg md:text-xl text-foreground mb-6 italic relative">
                      "{testimonials[currentIndex].quote}"
                    </p>
                    <div>
                      <h4 className="text-xl font-bold text-primary">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-muted-foreground">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedComponent>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-primary w-4' : 'bg-primary/30'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          <AnimatedComponent delay={0.2}>
            <div className="text-center mt-12 flex justify-center">
              <ShimmerButton 
                className="shadow-2xl"
                shimmerSize="2px"
                background="black"
                borderRadius="100px"
              >
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
                  <a href="#contact">Book Your Performance</a>
                </span>
              </ShimmerButton>
            </div>
          </AnimatedComponent>
        </div>
      </div>
    </section>
  );
}