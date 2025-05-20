"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Mail, Phone, Instagram, Facebook } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/#about' },
  { name: 'Gallery', href: '/#gallery' },
  { name: 'Join Us', href: '/#join' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo on left */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-playfair text-2xl font-bold text-gradient">
              Au Lac
            </span>
            <span className="font-playfair text-xl text-white/90">Lion Dance</span>
          </Link>
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:block flex-grow text-center">
          <nav className="inline-flex justify-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-red-500 transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Social Icons on right */}
        <div className="hidden md:flex items-center gap-6 flex-shrink-0">
          <a 
            href="https://www.instagram.com/aulaclions/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-red-500 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a 
            href="https://www.facebook.com/share/14yd61VZWr/?mibextid=wwXIfr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-red-500 transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden glass shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="py-3 text-white/80 hover:text-red-500 transition-colors border-b border-white/10 last:border-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-4 pt-4">
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/aulaclions/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-red-500 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.facebook.com/share/14yd61VZWr/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-red-500 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}