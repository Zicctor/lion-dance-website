import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import dynamic from 'next/dynamic';
import { ThemeProvider } from '@/components/theme-provider';
import { StickyBanner } from '@/components/sticky-banner';
import { SpeedInsights } from "@vercel/speed-insights/next";
import FollowPointerTopButton from "@/components/follow-pointer-top-button";
import { Analytics } from '@vercel/analytics/next';
const NotificationPopup = dynamic(() => import('@/components/notification-popup'), {
  ssr: false,
});

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
  metadataBase: new URL('https://www.aulaclions.com'),
  title: 'Au Lac | Lion Dance Association',
  description: 'Traditional lion dance performances for events and celebrations',
  themeColor: '#CB4055',
  icons: {
    icon: [
      { url: '/logo.svg' },
      { url: '/logo.svg', sizes: '32x32', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/logo.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
    shortcut: ['/logo.svg'],
  },
  openGraph: {
    title: 'Au Lac | Lion Dance Association',
    description: 'Traditional lion dance performances for events and celebrations',
    url: 'https://www.aulaclions.com/',
    siteName: 'Au Lac Lion Dance',
    images: [
      {
        url: '/logo.svg',
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
          <StickyBanner />
          {/* Static Branding Asset - Positioned absolutely at the top of the PAGE, not the viewport.
              This means it will scroll AWAY when the user scrolls down. */}
          <div className="absolute top-4 left-4 md:top-6 md:left-8 z-[70] pointer-events-auto">
            <Link href="/" className="flex items-center gap-4 group">
              <Image
                src="/logo.svg"
                alt="Au Lac Logo"
                width={300}
                height={300}
                className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] drop-shadow-2xl"
                priority
              />
              <div className="hidden xl:flex flex-col -space-y-1">
                <span className="font-playfair text-3xl md:text-4xl font-bold text-gradient leading-tight">
                  Au Lac
                </span>
                <span className="font-playfair text-3xl md:text-4xl text-white/90 leading-tight">
                  Lion Dance
                </span>
              </div>
            </Link>
          </div>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <FollowPointerTopButton />
        <SpeedInsights />
        <Analytics />
        <NotificationPopup />
      </body>
    </html>
  );
}