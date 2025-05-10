"use client";

import Image from 'next/image';
import { AnimatedComponent } from '@/components/animated-component';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedComponent>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
            About <span className="text-foreground">Our Team</span>
          </h2>
        </AnimatedComponent>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedComponent animation="fadeInLeft">
            <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-lg shadow-xl">
              <Image
                src="https://images.pexels.com/photos/6158151/pexels-photo-6158151.jpeg"
                alt="Lion Dance Performers"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </AnimatedComponent>

          <AnimatedComponent animation="fadeInRight" delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-primary">Our Story</h3>
              <p className="text-lg text-muted-foreground">
                Founded in 2010, AuLac Lion Dance Team has been bringing the vibrant tradition of lion 
                dancing to audiences throughout the region. Our team consists of passionate performers 
                dedicated to preserving and sharing this ancient art form.
              </p>
              
              <h3 className="text-2xl md:text-3xl font-bold text-primary">Our Mission</h3>
              <p className="text-lg text-muted-foreground">
                We strive to promote cultural understanding through authentic lion dance performances, 
                educate the community about this important tradition, and spread joy and good fortune 
                through our energetic shows.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-secondary/10 rounded-lg p-6 text-center">
                  <h4 className="text-4xl font-bold text-secondary mb-2">10+</h4>
                  <p className="text-sm text-muted-foreground">Performances</p>
                </div>
                <div className="bg-primary/10 rounded-lg p-6 text-center">
                  <h4 className="text-4xl font-bold text-primary mb-2">6+</h4>
                  <p className="text-sm text-muted-foreground">Team Members</p>
                </div>
              </div>
            </div>
          </AnimatedComponent>
        </div>
      </div>
    </section>
  );
}