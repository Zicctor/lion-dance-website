"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Instagram, Facebook, Mail, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/#about' },
  { name: 'Gallery', href: '/#gallery' },
  { name: 'FAQ', href: '/#faq' },
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
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden fixed top-4 left-4 z-50 text-white"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>

      {/* Sidebar Navigation */}
      <nav className={`
        fixed md:static top-0 left-0 h-full w-64 bg-background border-r border-border
        transform transition-transform duration-300 z-40
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="flex flex-col h-full p-6">
          {/* Logo */}
          <Link href="/" className="mb-8">
            <span className="font-playfair text-2xl font-bold text-gradient block">
              Au Lac Lion
            </span>
            <span className="font-playfair text-lg text-foreground/80">
              Đội Lân Âu Lạc
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="mt-auto space-y-4">
            <div className="flex items-center gap-2 text-foreground/80">
              <Mail size={16} />
              <a href="mailto:Aulacmualan@gmail.com">Aulacmualan@gmail.com</a>
            </div>
            <div className="flex items-center gap-2 text-foreground/80">
              <Phone size={16} />
              <a href="tel:937-993-6511">937-993-6511</a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4 border-t border-border">
              <a
                href="https://instagram.com/aulaclions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/aulaclions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}