import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import JoinSection from '@/components/join-section';
import GallerySection from '@/components/gallery-section';
import ContactSection from '@/components/contact-section';
import TestimonialsSection from '@/components/testimonials-section';
import FaqSection from '@/components/faq-section';

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
      <GallerySection />
      <FaqSection />
      <JoinSection />
      <ContactSection />
    </div>
  );
}