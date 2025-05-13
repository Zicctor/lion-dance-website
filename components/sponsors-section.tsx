"use client";

import { AnimatedComponent } from '@/components/animated-component';

const logos = [
  {
    name: 'Sponsor 1',
    url: 'https://images.pexels.com/photos/15619823/pexels-photo-15619823/free-photo-of-logo-of-a-company.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Sponsor 2',
    url: 'https://images.pexels.com/photos/15619823/pexels-photo-15619823/free-photo-of-logo-of-a-company.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Sponsor 3',
    url: 'https://images.pexels.com/photos/15619823/pexels-photo-15619823/free-photo-of-logo-of-a-company.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Sponsor 4',
    url: 'https://images.pexels.com/photos/15619823/pexels-photo-15619823/free-photo-of-logo-of-a-company.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

export default function SponsorsSection() {
  return (
    <section className="py-12 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <AnimatedComponent>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-8">
            Our Trusted Partners
          </h2>
        </AnimatedComponent>

        <div
          className="relative mt-6 flex gap-6 overflow-hidden py-4"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
          }}
        >
          {Array(3).fill(null).map((_, groupIndex) => (
            <div
              key={groupIndex}
              className="flex shrink-0 animate-[logo-cloud_30s_linear_infinite] flex-row justify-around gap-8"
            >
              {logos.map((logo, index) => (
                <div
                  key={`${groupIndex}-${index}`}
                  className="relative w-32 h-16 bg-white/5 rounded-lg overflow-hidden backdrop-blur-sm border border-white/10 flex items-center justify-center group hover:border-primary/50 transition-colors"
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="w-24 h-auto object-contain opacity-50 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}