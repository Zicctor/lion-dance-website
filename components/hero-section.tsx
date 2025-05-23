"use client";

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';
import { AnimatedComponent } from '@/components/animated-component';
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

const backgroundImages = [
  "images/hero/hero1-min.JPG",
  "images/perfor/perfor10-min.JPG",
  "images/hero/hero4-min.JPG",
  "images/hero/hero3-min.JPG",
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const opacity = 1 - scrollY / 700;
      
      if (opacity > 0) {
        heroRef.current.style.opacity = opacity.toString();
        heroRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            opacity: currentImageIndex === index ? 1 : 0,
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-primary/20 z-10"></div>

      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center">
        <AnimatedComponent delay={0.1}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            <span className="block mb-4"><AnimatedGradientText>Au Lac Lion Association</AnimatedGradientText></span>
            <span className="block"><AnimatedGradientText>Đội Lân Âu Lạc</AnimatedGradientText></span>
          </h1>
        </AnimatedComponent>

        <AnimatedComponent delay={0.3}>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8 drop-shadow-md">
            Bringing tradition, fortune, and spectacular performances to your celebrations
          </p>
        </AnimatedComponent>

        <AnimatedComponent delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4">
            <ShimmerButton 
              className="shadow-2xl"
              shimmerSize="2px"
              background="black"
              borderRadius="100px"
            >
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
                <a href="#contact">Book a Performance</a>
              </span>
            </ShimmerButton>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-background/10 hover:bg-background/20 backdrop-blur-sm border-white text-white px-8 py-6 text-lg rounded-md"
              asChild
            >
            </Button>
          </div>
        </AnimatedComponent>
      </div>
    </section>
  );
}