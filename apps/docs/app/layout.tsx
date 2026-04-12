import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Sora } from 'next/font/google';
import './globals.css';
import { CustomCursor, Preloader, Navbar, Footer } from '@uibrium/ui';
import Image from 'next/image';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'UiBrium | Architecting Equilibrium',
    template: '%s | UiBrium',
  },
  description: 'A production-grade design sanctuary for modern developers. Architecting the future of the web with Deterministic Integrity and Unforgettable Emotional Resonance.',
  keywords: ['React', 'UI', 'Component Library', 'Design System', 'Tailwind CSS', 'TypeScript', 'UiBrium'],
  metadataBase: new URL('https://uibrium.com'),
  openGraph: {
    title: 'UiBrium | Architecting Equilibrium',
    description: 'A production-grade design sanctuary for modern developers.',
    url: 'https://uibrium.com',
    siteName: 'UiBrium',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UiBrium — Balanced UI. Infinite Possibilities.',
    description: 'A production-grade React UI component library.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} ${jetbrainsMono.variable} font-sans`}>
        <div className="grain pointer-events-none" />
        <Preloader />
        <CustomCursor />
        <Navbar 
          logo={
            <Image 
              src="/logo_icon.png" 
              alt="UiBrium Icon" 
              width={24} 
              height={24} 
            />
          }
          logoLight={
            <Image 
              src="/logo.png" 
              alt="UiBrium" 
              width={100} 
              height={24} 
              className="object-contain"
            />
          }
          logoDark={
            <Image 
              src="/logo.png" 
              alt="UiBrium" 
              width={100} 
              height={24} 
              className="object-contain invert brightness-200"
            />
          }
        />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer 
          logo={
            <div className="flex items-center gap-2">
              <Image 
                src="/logo_icon.png" 
                alt="UiBrium Icon" 
                width={20} 
                height={20} 
              />
              <span className="font-bold tracking-tighter">UiBrium</span>
            </div>
          }
        />
      </body>
    </html>
  );
}

