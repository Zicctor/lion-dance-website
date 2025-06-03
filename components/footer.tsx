"use client";

import { Instagram, Facebook, Mail, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 py-4">
        <div className="flex flex-col items-center space-y-3">
          {/* Brand */}
          <div className="text-center">
            <h3 className="font-playfair text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Au Lac Lion Dance
            </h3>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/aulaclions/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="text-white hover:text-red-400 transition-colors w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/share/14yd61VZWr/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="text-white hover:text-blue-500 transition-colors w-6 h-6" />
            </a>
          </div>
          {/* Copyright */}
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Au Lac Lion Dance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}