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
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-primary">Our Story</h3>
              <p className="text-lg text-muted-foreground">
              Founded in 2024 by Phuong An Le and based in Ohio, the Au Lac Lion Dance Team is dedicated to bringing 
              the vibrant tradition of lion dancing to communities across the region. Our team is composed of passionate 
              and skilled performers committed to preserving and sharing this rich cultural art form with authenticity, energy, and pride.
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