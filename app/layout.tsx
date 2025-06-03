import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import dynamic from 'next/dynamic';
import { ThemeProvider } from '@/components/theme-provider';
import { StickyBanner } from '@/components/sticky-banner';
import { SpeedInsights } from "@vercel/speed-insights/next";

// Dynamically import components that might use browser APIs
const Navbar = dynamic(() => import('@/components/navbar'), {
  ssr: false,
});

const Footer = dynamic(() => import('@/components/footer'), {
  ssr: false,
});

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Au Lac | Lion Dance Team',
  description: 'Traditional lion dance performances for events and celebrations',
  openGraph: {
    title: 'Au Lac | Lion Dance Team',
    description: 'Traditional lion dance performances for events and celebrations',
    url: 'https://www.aulaclions.com/',
    siteName: 'Au Lac Lion Dance',
    images: [
      {
        url: '/images/hero/hero4-min.JPG', // Place this image in your public/images folder
        width: 1200,
        height: 630,
        alt: 'Au Lac Lion Dance performing',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-background antialiased">
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex min-h-screen flex-col pt-10">
            <StickyBanner />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}