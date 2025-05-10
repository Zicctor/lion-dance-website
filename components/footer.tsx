"use client";

import { Instagram, Facebook, Mail, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Brand */}
          <div className="text-center">
            <h3 className="font-playfair text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              AuLac Lion Dance
            </h3>
            <p className="text-white/60 mt-2">
              Bringing tradition to life through vibrant performances
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-red-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-red-400 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} AuLac Lion Dance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}