"use client";

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatedComponent } from '@/components/animated-component';
import { useInView } from 'react-intersection-observer';

const galleryImages = [
  {
    src: "https://res.cloudinary.com/du9fgslde/image/upload/v1751772234/m7czc3wngvhe8maei6yc.jpg",
    alt: "",
    category: "performances",
    blurDataUrl: "."
  },
  {
    src: "https://res.cloudinary.com/du9fgslde/image/upload/v1751772234/nzuihd6lgkhviu9xafxl.jpg",
    alt: "", 
    category: "performances",
    blurDataUrl: "."
  },
  {
    src: "https://res.cloudinary.com/du9fgslde/image/upload/v1751772224/tfe2r02wu6k9bx2qwbeu.jpg",
    alt: "",
    category: "performances",
    blurDataUrl: "."
  },
  {
    src: "https://res.cloudinary.com/du9fgslde/image/upload/v1751772221/rqyjhirkjnvjk8msrsnu.jpg",
    alt: "", 
    category: "performances",
    blurDataUrl: "."
  },  {
    src: "https://res.cloudinary.com/du9fgslde/image/upload/v1751772219/ebyqerie09se5qxrt1d9.jpg",
    alt: "",
    category: "performances",
    blurDataUrl: "."
  },
  {
    src: "https://res.cloudinary.com/du9fgslde/image/upload/v1751772181/zyw50ekhtowembqmm6kj.jpg",
    alt: "", 
    category: "performances",
    blurDataUrl: "."
  },  {
    src: "https://res.cloudinary.com/du9fgslde/image/upload/v1751772161/trhfzd0z6kkvq32mhln5.jpg",
    alt: "",
    category: "performances",
    blurDataUrl: "."
  },
  {
    src: "https://res.cloudinary.com/du9fgslde/image/upload/v1751772138/vafhqbzpgkpbvvgyz3z1.jpg",
    alt: "", 
    category: "performances",
    blurDataUrl: "."
  },  {
    src: "https://res.cloudinary.com/du9fgslde/image/upload/v1751772138/z2memf5kcev7guuwliu4.jpg",
    alt: "- costumes",
    category: "performances",
    blurDataUrl: "."
  },
  {
    src: "https://res.cloudinary.com/du9fgslde/image/upload/v1751772137/blibi9cxsedunzadxsq4.jpg",
    alt: "", 
    category: "all",
    blurDataUrl: "."
  },  {
    src: "https://res.cloudinary.com/du9fgslde/image/upload/v1751772138/uu1ncil9pirgshshscae.jpg",
    alt: "",
    category: "performances",
    blurDataUrl: "."
  },
  {
    src: "https://res.cloudinary.com/du9fgslde/image/upload/v1751772135/dhns0vzw0viem2lqtjoy.jpg",
    alt: "", 
    category: "performances",
    blurDataUrl: "."
  },  {
    src: "https://res.cloudinary.com/du9fgslde/image/upload/v1751772135/jniqqaitmclhne6w4y38.jpg",
    alt: "",
    category: "performances",
    blurDataUrl: "."
  },
  {
    src: "https://res.cloudinary.com/du9fgslde/image/upload/v1751772235/wrop8ynfokxca6ayohwy.jpg",
    alt: "", 
    category: "training",
    blurDataUrl: "."
  },
  {
    src: "https://res.cloudinary.com/du9fgslde/image/upload/v1751772235/qie0x1aorpyaepfmyitt.jpg",
    alt: "", 
    category: "training",
    blurDataUrl: "."
  },
  {
    src: "https://res.cloudinary.com/du9fgslde/image/upload/v1751772234/fnqgqe16pos3mmcvzqvv.jpg",
    alt: "", 
    category: "training",
    blurDataUrl: "."
  },
  {
    src: "https://res.cloudinary.com/du9fgslde/image/upload/v1751772234/tkrlbhtxfsxcfthb1zuq.jpg",
    alt: "", 
    category: "training",
    blurDataUrl: "."
  },
  {
    src: "https://res.cloudinary.com/du9fgslde/image/upload/v1751772242/wgmrbt8bpgvqy1sf6zc7.jpg",
    alt: "", 
    category: "all",
    blurDataUrl: "."
  },
  {
    src: "https://res.cloudinary.com/du9fgslde/image/upload/v1756963127/dt0gma1ejtk7bwtmmhka.jpg",
    alt: "", 
    category: "members",
    blurDataUrl: "."
  },
  {
    src: "https://res.cloudinary.com/du9fgslde/image/upload/v1756963124/tisml7zxrrnbeydzb1ht.jpg",
    alt: "", 
    category: "members",
    blurDataUrl: "."
  },
  {
    src: "https://res.cloudinary.com/du9fgslde/image/upload/v1756963123/ldqzuwx4ffhkqth3od5c.jpg",
    alt: "", 
    category: "members",
    blurDataUrl: "..."
  },
  {
    src: "https://res.cloudinary.com/du9fgslde/image/upload/v1756963123/hxxlhydluhwtwxib6v8g.jpg",
    alt: "", 
    category: "members",
    blurDataUrl: "..."
  },
  {
    src: "https://res.cloudinary.com/du9fgslde/image/upload/v1756963119/mzahlscketriq643pic3.jpg",
    alt: "", 
    category: "members",
    blurDataUrl: "..."
  },
];

// Custom hook to get window width
function useWindowWidth() {
  const [width, setWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const windowWidth = useWindowWidth();
  const imagesPerPage = windowWidth <= 640 ? 3 : 6;

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const filteredImages = activeFilter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);
  
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = filteredImages.slice(indexOfFirstImage, indexOfLastImage);

  const goToNextPage = useCallback(() => {
    setCurrentPage(currentPage => Math.min(currentPage + 1, totalPages));
  }, [totalPages]);

  const goToPrevPage = useCallback(() => {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
  }, []);

  const handleFilterChange = useCallback((filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  }, []);

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
            {["all", "performances", "training", "members"].map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
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

        <div 
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {currentImages.map((image, index) => (
            <AnimatedComponent key={image.src} delay={index * 0.1}>
              <div 
                className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group will-change-transform"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  quality={75}
                  placeholder="blur"
                  blurDataURL={image.blurDataUrl}
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

        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 gap-4">
            <button 
              onClick={goToPrevPage} 
              disabled={currentPage === 1}
              className={`p-2 rounded-full ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-primary hover:bg-primary/10'}`}
              aria-label="Previous page"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="text-sm font-medium">
              Page {currentPage} of {totalPages}
            </div>
            
            <button 
              onClick={goToNextPage} 
              disabled={currentPage === totalPages}
              className={`p-2 rounded-full ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-primary hover:bg-primary/10'}`}
              aria-label="Next page"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}

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
                quality={85}
                priority={true}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}