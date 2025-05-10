"use client";

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { AnimatedComponent } from '@/components/animated-component';

const galleryImages = [
  {
    src: "https://images.pexels.com/photos/4571219/pexels-photo-4571219.jpeg",
    alt: "Lion dance performers in colorful costumes",
    category: "performance"
  },
  {
    src: "https://images.pexels.com/photos/6158205/pexels-photo-6158205.jpeg",
    alt: "Close-up of a traditional lion head", 
    category: "performance"
  },
  {
    src: "https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg",
    alt: "Lion dance team performing",
    category: "events"
  },
  {
    src: "https://images.pexels.com/photos/6158177/pexels-photo-6158177.jpeg",
    alt: "Lion dance at a cultural festival",
    category: "events"
  },
  {
    src: "https://images.pexels.com/photos/6147160/pexels-photo-6147160.jpeg",
    alt: "Lion dance team during training",
    category: "training"
  },
  {
    src: "https://images.pexels.com/photos/6158151/pexels-photo-6158151.jpeg",
    alt: "Two lion dance costumes at an event",
    category: "performance"
  }
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredImages = activeFilter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedComponent>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            Our Gallery
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Explore our performances and team activities through our photo gallery
          </p>
        </AnimatedComponent>

        <AnimatedComponent delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {["all", "performance", "events", "training"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? 'bg-primary text-white'
                    : 'bg-secondary/10 text-foreground hover:bg-secondary/20'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </AnimatedComponent>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <AnimatedComponent key={image.src} delay={index * 0.1}>
              <div 
                className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <span className="text-white font-medium text-sm">
                      {image.alt}
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedComponent>
          ))}
        </div>

        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <div className="relative w-full max-w-6xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <Image
                src={selectedImage}
                alt="Enlarged gallery image"
                width={1200}
                height={800}
                className="object-contain w-full h-auto max-h-[90vh]"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}