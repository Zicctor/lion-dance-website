"use client";

import Image from 'next/image';
import { AnimatedComponent } from '@/components/animated-component';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedComponent>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
            About Our Team
          </h2>
        </AnimatedComponent>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedComponent animation="fadeInLeft">
            <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-lg shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1600582201908-183d607504c3?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Lion Dance Performers"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </AnimatedComponent>

          <AnimatedComponent animation="fadeInRight" delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">Our Story</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded in 2024 by Phuong An Le and based in Dayton, Ohio, the <span className="font-medium text-primary">Au Lac Lion Dance Team</span> is dedicated to bringing the vibrant tradition of lion dancing to communities across the region.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-3">
                  Our team comprises passionate performers—from middle school students to young adults—united by a commitment to preserving and sharing this rich cultural art form with authenticity, energy, and pride.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We strive to promote cultural understanding through captivating lion dance performances, educate communities about this important tradition, and spread joy and good fortune through our energetic shows.
                </p>
              </div>
            </div>
          </AnimatedComponent>
        </div>
      </div>
    </section>
  );
}