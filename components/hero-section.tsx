"use client";

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';
import { AnimatedComponent } from '@/components/animated-component';

const backgroundImages = [
  "https://media-int.vnecdn.net/3878063/data/images/2019/02/04/03_1549284178_VnEx.jpg",
  "https://ddk.1cdn.vn/2022/01/30/image.daidoanket.vn-images-upload-btvdk-01302022-_lsr1.jpeg",
  "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/9/9/1091209/BINH1785.jpg",
  "https://cdn.kpbs.org/dims4/default/e6b1c00/2147483647/strip/true/crop/1440x810+0+177/resize/1200x675!/quality/90/?url=http%3A%2F%2Fkpbs-brightspot.s3.us-west-2.amazonaws.com%2Fa5%2Fcf%2F04080cce4119854d83ca81a8bb8b%2F324930874-1416957192170893-2137161757645895711-n.jpg"
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
            <span className="block bg-gradient-to-r from-[#ff6b6b] to-[#a70a0f] bg-clip-text text-transparent mb-2">Au Lac Lion Association</span>
            <span className="block text-[#ff6b6b]">Đội Lân Âu Lạc</span>
          </h1>
        </AnimatedComponent>

        <AnimatedComponent delay={0.3}>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8 drop-shadow-md">
            Bringing tradition, fortune, and spectacular performances to your celebrations
          </p>
        </AnimatedComponent>

        <AnimatedComponent delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-md"
              asChild
            >
              <a href="#contact">Book a Performance</a>
            </Button>
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