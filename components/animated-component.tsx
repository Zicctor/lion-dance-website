"use client";

import { useRef, useEffect, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedComponentProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  animation?: 'fadeIn' | 'fadeInUp' | 'fadeInLeft' | 'fadeInRight';
}

export function AnimatedComponent({
  children,
  className,
  delay = 0,
  threshold = 0.2,
  animation = 'fadeInUp',
}: AnimatedComponentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const animationClasses = {
    fadeIn: 'opacity-0 transition-opacity duration-1000',
    fadeInUp: 'opacity-0 translate-y-8 transition-all duration-1000',
    fadeInLeft: 'opacity-0 -translate-x-8 transition-all duration-1000',
    fadeInRight: 'opacity-0 translate-x-8 transition-all duration-1000',
  };

  const visibleClasses = {
    fadeIn: 'opacity-100',
    fadeInUp: 'opacity-100 translate-y-0',
    fadeInLeft: 'opacity-100 translate-x-0',
    fadeInRight: 'opacity-100 translate-x-0',
  };

  return (
    <div
      ref={ref}
      className={cn(
        animationClasses[animation],
        isVisible && visibleClasses[animation],
        className
      )}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}