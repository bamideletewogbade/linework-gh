import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { LineworkMark, WhatsAppIcon } from './ui/icons';
import { SITE, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from '@/lib/site';

const COLUMNS = [
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '/about' },
      { label: 'Projects', href: '/projects' },
      { label: 'Services', href: '/services' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'What we do',
    links: [
      { label: 'Homes', href: '/projects?type=residential' },
      { label: 'Offices & commercial', href: '/projects?type=commercial' },
      { label: 'Interiors & fit-out', href: '/projects?type=interior' },
      { label: 'Building from abroad', href: '/services#diaspora' },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-ink-950 pb-28 pt-16 text-ink-300 md:pb-10 md:pt-24">
      <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-40" />

      <div className="container-site relative">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-12 md:pb-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5 text-white" aria-label="Linework GH — home">
              <LineworkMark className="h-9 w-9" />
              <span className="font-display text-xl font-bold tracking-tight">
                linework<span className="text-brand">.</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-base leading-relaxed">
              Architects and builders in Accra. We design it, get it approved, build it and hand you the keys —
              one team, one contract.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp min-h-[2.75rem] px-5"
              >
                <WhatsAppIcon size={18} /> WhatsApp us
              </a>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linework on Instagram"
                className="btn btn-outline-light min-h-[2.75rem] w-11 px-0"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h3 className="font-sans text-sm font-semibold text-white">{col.title}</h3>
              <ul className="mt-4 flex flex-col gap-1">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="inline-block py-1.5 text-base transition-colors hover:text-brand">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="font-sans text-sm font-semibold text-white">Talk to us</h3>
            <ul className="mt-4 flex flex-col gap-3 text-base">
              <li>
                <a href={`tel:${SITE.phoneE164}`} className="inline-flex items-center gap-3 py-1 transition-colors hover:text-brand">
                  <Phone size={16} className="text-brand" /> {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-3 py-1 transition-colors hover:text-brand">
                  <Mail size={16} className="text-brand" /> {SITE.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-3 py-1">
                <MapPin size={16} className="text-brand" /> Accra, Ghana
              </li>
            </ul>
          </div>
        </div>

        {/* Big sign-off */}
        <div className="py-10 md:py-14">
          <p
            aria-hidden="true"
            className="select-none font-display text-[clamp(3.5rem,13vw,11rem)] font-extrabold leading-[0.85] tracking-[-0.05em] text-white/[0.07]"
          >
            Not just lines.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-ink-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {SITE.legalName}
          </p>
          <Link href="/contact" className="inline-flex items-center gap-1 transition-colors hover:text-white">
            Start a project <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
