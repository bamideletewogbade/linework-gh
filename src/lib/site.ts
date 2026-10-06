// Single source of truth for contact details & business facts.
// Change a number here and it updates across the whole site.

export const SITE = {
  name: 'notjustlines',
  legalName: 'notjustlines',
  tagline: 'Not just lines.',
  url: 'https://notjustlines.com',
  phoneDisplay: '+233 25 686 9481',
  phoneE164: '+233256869481',
  whatsappNumber: '233256869481',
  email: 'info@notjustlines.com',
  instagramHandle: '',
  instagramUrl: '',
  city: 'Accra',
  country: 'Ghana',
  areasServed: ['Cantonments', 'Airport Residential', 'East Legon', 'Ridge', 'Labone', 'Greater Accra'],
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi notjustlines, I'd like to talk about a building project.";


export const NAV_LINKS = [
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;
