import type { Metadata } from 'next';
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Linework GH — Architectural Design & Turnkey Construction | Accra, Ghana',
  description: 'Linework GH is an integrated architectural practice and general construction company in Accra, Ghana. We design and construct bespoke residential villas, commercial headquarters, and luxury interiors.',
  keywords: [
    'Architecture Ghana',
    'Construction company Accra',
    'Architects in Cantonments',
    'Luxury villa builder Ghana',
    'Design build contractor Ghana',
    'Ghana diaspora house construction',
    'Turnkey builder Accra',
    'Linework GH',
    'Not Just Lines'
  ],
  authors: [{ name: 'Linework Design & Construction Ltd.' }],
  creator: 'Linework GH',
  publisher: 'Linework GH',
  metadataBase: new URL('https://notjustlines.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://notjustlines.com',
    title: 'Linework GH — Architectural Design & Turnkey Construction',
    description: 'Drawn with intent. Built to last. Turnkey luxury architecture and general contracting in Accra, Ghana.',
    siteName: 'Linework GH',
    images: [
      {
        url: '/assets/villa-cantonments.jpg',
        width: 1200,
        height: 675,
        alt: 'The Cantonments Pavilion Villa by Linework GH',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Linework GH — Architectural Design & Turnkey Construction',
    description: 'Integrated architecture and turnkey general contracting in Accra, Ghana.',
    images: ['/assets/villa-cantonments.jpg'],
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23070B10'/%3E%3Cpath d='M7 24V8M7 24h18' stroke='%23F5A524' stroke-width='2.5' stroke-linecap='square'/%3E%3Cpath d='M12 24V15l6-5 6 5v9' stroke='%236EE7F9' stroke-width='1.6' fill='none'/%3E%3C/svg%3E",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-[#FAF9F6] text-stone-900 selection:bg-amber-500 selection:text-black">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
