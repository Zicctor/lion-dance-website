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
          {/* Copyright */}
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Au Lac Lion Dance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}