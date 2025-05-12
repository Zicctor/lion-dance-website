import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import JoinSection from '@/components/join-section';
import GallerySection from '@/components/gallery-section';
import FaqSection from '@/components/faq-section';
import ContactSection from '@/components/contact-section';

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <FaqSection />
      <JoinSection />
      <ContactSection />
    </div>
  );
}