"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Mail, Phone, Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';

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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass shadow-lg py-4 border-b border-white/5' : 'bg-transparent py-8'
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-full relative">
        {/* Spacer to prevent links from overlapping the fixed logo corner */}
        <div className="hidden lg:block w-[160px] xl:w-[280px] pointer-events-none opacity-0"></div>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-red-500 transition-colors font-medium text-lg tracking-wide whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Social Icons - Synced with Navbar bar */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 ml-auto">
          <a
            href="https://www.instagram.com/aulaclions/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-red-500 transition-all hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5 lg:h-6 lg:w-6" />
          </a>
          <a
            href="https://www.facebook.com/share/14yd61VZWr/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-red-500 transition-all hover:scale-110"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5 lg:h-6 lg:w-6" />
          </a>
        </div>

        {/* Mobile Menu Button - Right side */}
        <div className="md:hidden ml-auto">
          <Button
            variant="ghost"
            size="icon"
            className="text-white bg-white/5 hover:bg-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {mobileMenuOpen && (
        <nav className="md:hidden glass border-t border-white/5">
          <div className="container mx-auto px-4 py-4 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="py-3 text-white/80 hover:text-red-500 transition-colors border-b border-white/10 last:border-0 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex justify-center gap-8 pt-6">
              <a href="https://www.instagram.com/aulaclions/" target="_blank" rel="noopener noreferrer" className="text-white/80">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.facebook.com/share/14yd61VZWr/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-white/80">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}