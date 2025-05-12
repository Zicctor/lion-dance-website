"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Mail, Phone, Instagram, Facebook } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Team', href: '/#team' },
  { name: 'Join Us!', href: '/#join' },
  { name: 'Gallery', href: '/#gallery' },
  { name: 'Testimonials', href: '/#testimonials' },
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
    <header className="w-full z-50">
      {/* Top bar with contact info */}
      <div className="bg-primary text-white py-1 px-4">
        <div className="container mx-auto flex justify-end items-center space-x-6 text-sm">
          <a href="mailto:Aulacmualan@gmail.com" className="flex items-center hover:text-white/80">
            <Mail className="h-4 w-4 mr-2" />
            Aulacmualan@gmail.com
          </a>
          <a href="tel:937-993-6511" className="flex items-center hover:text-white/80">
            <Phone className="h-4 w-4 mr-2" />
            937-993-6511
          </a>
          <div className="flex items-center space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/80">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/80">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="bg-background py-6">
        <div className="container mx-auto px-4 text-center">
          <Link href="/" className="inline-block">
            <div className="flex flex-col items-center">
              <h1 className="font-playfair text-3xl font-bold text-gradient mb-1">
                Au Lac Lion Dance
              </h1>
              <p className="font-playfair text-lg text-white/90">
                Đội Lân Âu Lạc
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled ? 'glass shadow-lg py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-red-500 transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-end">
            <Button
              variant="ghost"
              size="icon"
              className="text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass shadow-lg">
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
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}