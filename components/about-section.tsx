"use client";

import Image from 'next/image';
import { AnimatedComponent } from '@/components/animated-component';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <AnimatedComponent>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-20 font-playfair">
            About Our Team
          </h2>
        </AnimatedComponent>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedComponent animation="fadeInLeft">
            <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://res.cloudinary.com/du9fgslde/image/upload/v1751772236/o4kp4soakyl4xcie2e06.jpg"
                alt="Lion Dance Performers"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </AnimatedComponent>

          <AnimatedComponent animation="fadeInRight" delay={0.2}>
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair">Our Story</h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-inter">
                  Founded in 2024 by founder Phuong An Le and based in Dayton, Ohio, the <span className="font-medium text-primary">Au Lac Lion Dance Team</span> is dedicated to bringing the vibrant tradition of lion dancing to communities across the region.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4 font-inter">
                  Our team comprises passionate performers—from middle school students to young adults—united by a commitment to preserving and sharing this rich cultural art form with authenticity, energy, and pride.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-inter">
                  Au Lac Lions seeks to inspire cultural appreciation by honoring the rich tradition of lion dance, providing meaningful educational outreach, and bringing joy and good fortune to the communities we serve.
                </p>
              </div>
            </div>
          </AnimatedComponent>
        </div>
      </div>
    </section>
  );
}
