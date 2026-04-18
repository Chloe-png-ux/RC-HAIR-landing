import type { Metadata } from 'next';
import { Cormorant_Garamond, Questrial } from 'next/font/google';
import { Inspector } from 'react-dev-inspector';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-serif',
  display: 'swap',
});

const questrial = Questrial({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'RC Hair | Premium Hair Extensions',
    template: '%s | RC Hair',
  },
  description:
    'Luxury hair extensions and hairpieces crafted for seamless elegance. Premium Invisible Wefts and Silk-Base Toppers for natural, undetectable volume.',
  keywords: [
    'hair extensions',
    'premium hair',
    'luxury hair extensions',
    'invisible wefts',
    'hair toppers',
    'wigs',
    'hairpieces',
    'silk base',
  ],
  authors: [{ name: 'RC Hair' }],
  creator: 'RC Hair',
  openGraph: {
    title: 'RC Hair | Premium Hair Extensions',
    description:
      'Luxury hair extensions crafted for seamless elegance. Premium Invisible Wefts and Silk-Base Toppers.',
    url: 'https://elitgrey.com',
    siteName: 'RC Hair',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RC Hair | Premium Hair Extensions',
    description:
      'Luxury hair extensions crafted for seamless elegance.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.COZE_PROJECT_ENV === 'DEV';

  return (
    <html lang="en" className={`${cormorant.variable} ${questrial.variable}`}>
      <body className="min-h-screen antialiased scroll-smooth">
        {isDev && <Inspector />}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
