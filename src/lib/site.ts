// Single source of truth for contact details & business facts.
// Change a number here and it updates across the whole site.

export const SITE = {
  name: 'notjustlines',
  legalName: 'notjustlines Design & Construction Ltd.',
  tagline: 'Not just lines.',
  url: 'https://notjustlines.com',
  phoneDisplay: '+233 25 686 9481',
  phoneE164: '+233256869481',
  whatsappNumber: '233256869481',
  email: 'info@notjustlines.com',
  instagramHandle: '@linework.design',
  instagramUrl: 'https://www.instagram.com/linework.design/',
  city: 'Accra',
  country: 'Ghana',
  areasServed: ['Cantonments', 'Airport Residential', 'East Legon', 'Ridge', 'Labone', 'Greater Accra'],
} as const;

/** Build a wa.me link with an optional pre-filled message. */
export function whatsappLink(message?: string) {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi notjustlines, I'd like to talk about a building project.";

/**
 * Rough build-cost guide used by the brief estimator (USD per m², turnkey, excl. land).
 * ⚠️ CONFIRM WITH THE TEAM before launch — this is shown publicly as a rough guide.
 */
export const COST_GUIDE_USD_PER_M2 = { min: 500, max: 850 } as const;

export const NAV_LINKS = [
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;
