"use client";

import { Instagram, Facebook, Mail, Github } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-transparent to-primary/10 border-t border-white/5 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Brand */}
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/logo.svg"
              alt="Au Lac Logo"
              width={200}
              height={200}
              className="w-60 h-60"
            />
            <h3 className="font-playfair text-3xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Au Lac Lion Dance Association
            </h3>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/aulaclions/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="text-white/80 hover:text-red-400 transition-colors w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/share/14yd61VZWr/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="text-white/80 hover:text-blue-500 transition-colors w-5 h-5" />
            </a>
          </div>
          {/* Copyright */}
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Au Lac Lion Dance Association. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}