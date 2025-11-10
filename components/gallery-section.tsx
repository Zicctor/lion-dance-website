"use client";

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatedComponent } from '@/components/animated-component';
import { useInView } from 'react-intersection-observer';

const CLOUDINARY_BASE = "https://res.cloudinary.com/du9fgslde/image/upload";

const galleryImages = [
  { id: "v1751772234/m7czc3wngvhe8maei6yc", category: "performances" },
  { id: "v1751772234/nzuihd6lgkhviu9xafxl", category: "performances" },
  { id: "v1751772224/tfe2r02wu6k9bx2qwbeu", category: "performances" },
  { id: "v1751772221/rqyjhirkjnvjk8msrsnu", category: "performances" },
  { id: "v1751772219/ebyqerie09se5qxrt1d9", category: "performances" },
  { id: "v1751772181/zyw50ekhtowembqmm6kj", category: "performances" },
  { id: "v1751772161/trhfzd0z6kkvq32mhln5", category: "performances" },
  { id: "v1751772138/vafhqbzpgkpbvvgyz3z1", category: "performances" },
  { id: "v1751772138/z2memf5kcev7guuwliu4", category: "performances", alt: "- costumes" },
  { id: "v1751772138/uu1ncil9pirgshshscae", category: "performances" },
  { id: "v1751772135/dhns0vzw0viem2lqtjoy", category: "performances" },
  { id: "v1751772135/jniqqaitmclhne6w4y38", category: "performances" },
  { id: "v1762746544/vuqbqvz7m8s8nf5ovrae", category: "performances" },
  { id: "v1762746490/y41nesfid32jscv6nmyf", category: "performances" },
  { id: "v1762746255/awgcdiu4fzubn4vsafuu", category: "performances" },
  { id: "v1762746254/iymhiemmduccxm7girau", category: "performances" },
  { id: "v1762746254/byvgupoogrqkhp3kpxvh", category: "performances" },
  { id: "v1751772235/wrop8ynfokxca6ayohwy", category: "training" },
  { id: "v1751772235/qie0x1aorpyaepfmyitt", category: "training" },
  { id: "v1751772234/fnqgqe16pos3mmcvzqvv", category: "training" },
  { id: "v1751772234/tkrlbhtxfsxcfthb1zuq", category: "training" },
  { id: "v1756963127/dt0gma1ejtk7bwtmmhka", category: "members" },
  { id: "v1756963124/tisml7zxrrnbeydzb1ht", category: "members" },
  { id: "v1756963123/ldqzuwx4ffhkqth3od5c", category: "members" },
  { id: "v1756963123/hxxlhydluhwtwxib6v8g", category: "members" },
  { id: "v1756963119/mzahlscketriq643pic3", category: "members" },
  { id: "v1762745224/ughtvxgxp5gj2iccsh4w", category: "members" },
  { id: "v1762745224/rdrk723dbcyyudtnusnq", category: "members" },
  { id: "v1762745224/qjesq6szc5jsrirydv1p", category: "members" },
  { id: "v1762745224/drov3vyfmmc1oy12qwpu", category: "members" },
  { id: "v1751772243/zn6dlzpyp7nt5t82rlwn", category: "all" },
  { id: "v1751772242/wgmrbt8bpgvqy1sf6zc7", category: "all" },
].map(img => ({
  src: `${CLOUDINARY_BASE}/c_fill,w_400,h_300,f_auto,q_auto,dpr_auto/${img.id}.jpg`,
  alt: img.alt || "",
  category: img.category,
  blurDataUrl: `${CLOUDINARY_BASE}/c_fill,w_10,h_8,f_auto,q_10,e_blur:1000/${img.id}.jpg`
}));

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
  const imagesPerPage = windowWidth <= 640 ? 2 : windowWidth <= 1024 ? 3 : 4;

  // Preload critical images
  useEffect(() => {
    const firstTwoImages = galleryImages.slice(0, 2);
    firstTwoImages.forEach(img => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = img.src;
      document.head.appendChild(link);
    });
  }, []);

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
          {currentImages.map((image, index) => {
            const isFirstPage = currentPage === 1;
            const isPriorityImage = isFirstPage && index < 2;
            
            return (
              <AnimatedComponent key={image.src} delay={isPriorityImage ? 0 : index * 0.02}>
                <div 
                  className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
                  onClick={() => setSelectedImage(image.src.replace('/c_fill,w_400,h_300,f_auto,q_auto,dpr_auto/', '/c_fill,w_1000,h_750,f_auto,q_auto,dpr_auto/'))}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-200 group-hover:scale-102"
                    loading={isPriorityImage ? "eager" : "lazy"}
                    priority={isPriorityImage}
                    quality={50}
                    placeholder="blur"
                    blurDataURL={image.blurDataUrl}
                  />
                  {image.alt && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end">
                      <div className="p-3">
                        <span className="text-white font-medium text-xs">
                          {image.alt}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </AnimatedComponent>
            );
          })}
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
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <div className="relative w-full max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <Image
                src={selectedImage}
                alt="Enlarged gallery image"
                width={1000}
                height={750}
                className="object-contain w-full h-auto max-h-[90vh]"
                quality={75}
                priority={true}
                placeholder="blur"
                blurDataURL={selectedImage.replace('/c_fill,w_1000,h_750,f_auto,q_auto,dpr_auto/', '/c_fill,w_10,h_8,f_auto,q_10,e_blur:1000/')}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}