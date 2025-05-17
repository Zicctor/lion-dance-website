"use client";

import { AnimatedComponent } from '@/components/animated-component';

const logos = [
  {
    name: 'Vercel',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg',
    width: 120
  },
  {
    name: 'Nextjs',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881475/nextjs_logo_dark_gfkf8m.svg',
    width: 100
  },
  {
    name: 'Prime',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/t2awrrfzdvmg1chnzyfr.svg',
    width: 110
  },
  {
    name: 'Webflow',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/nymiivu48d5lywhf9rpf.svg',
    width: 130
  },
];

export default function SponsorsSection() {
  return (
    <section className="py-24 bg-secondary/5 relative">
      <div className="container mx-auto px-6">
        <AnimatedComponent>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-6 font-playfair">
            Our Sponsors
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-20">
            Proud partners who support our mission to preserve and share cultural traditions
          </p>
        </AnimatedComponent>

        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-20">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 transition-all duration-300 hover:scale-105"
                style={{ minHeight: '80px' }}
              >
                <img
                  src={logo.url}
                  alt={`${logo.name} logo`}
                  className="w-auto h-auto max-h-12 opacity-70 hover:opacity-100 transition-opacity duration-300"
                  style={{
                    maxWidth: `${logo.width}px`,
                    objectFit: 'contain'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}