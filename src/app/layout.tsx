import type { Metadata, Viewport } from 'next';
import { Inter, Bricolage_Grotesque } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SITE } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
});

const description =
  'Architecture, construction and interiors in Accra. Explore design ideas and discuss your project with notjustlines.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'notjustlines — Architects & Builders in Accra | Design & Build',
    template: '%s | notjustlines',
  },
  description,
  keywords: [
    'architects in Accra',
    'construction company Ghana',
    'design and build Ghana',
    'building a house in Ghana',
    'build in Ghana from abroad',
    'turnkey construction Accra',
    'interior fit-out Accra',
    'building permit Accra',
    'notjustlines',
  ],
  authors: [{ name: SITE.legalName }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE.url,
    siteName: SITE.name,
    title: 'notjustlines — We don’t just draw it. We build it.',
    description,
    images: [{ url: '/assets/villa-cantonments.jpg', width: 1376, height: 768, alt: 'Illustrative residential architecture image' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'notjustlines — We don’t just draw it. We build it.',
    description,
    images: ['/assets/villa-cantonments.jpg'],
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%2314130F'/%3E%3Cpath d='M7 25V7M7 25h18' stroke='%23E8A33D' stroke-width='3' fill='none'/%3E%3Cpath d='M12.5 25v-8.5l6-5 6 5V25' stroke='%23F7F4EE' stroke-width='2' fill='none'/%3E%3C/svg%3E",
  },
};

export const viewport: Viewport = {
  themeColor: '#14130F',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  image: `${SITE.url}/assets/villa-cantonments.jpg`,
  telephone: SITE.phoneE164,
  email: SITE.email,
  slogan: SITE.tagline,
  address: { '@type': 'PostalAddress', addressLocality: SITE.city, addressCountry: 'GH' },
  areaServed: SITE.areasServed.map((name) => ({ '@type': 'Place', name })),
  sameAs: SITE.instagramUrl ? [SITE.instagramUrl] : undefined,
  knowsAbout: ['Architecture', 'Construction', 'Interior design', 'Building permits', 'Project management'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <head>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
