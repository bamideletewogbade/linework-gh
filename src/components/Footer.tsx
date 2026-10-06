import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { LineworkMark, WhatsAppIcon } from './ui/icons';
import { NAV_LINKS, SITE, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from '@/lib/site';

const COLUMNS = [
  {
    title: 'Company',
    links: NAV_LINKS,
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
    <footer className="relative overflow-hidden bg-ink-950 pb-8 pt-10 text-ink-300 md:pb-10 md:pt-16">
      <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-40" />

      <div className="container-site relative">
        <div className="grid grid-cols-2 gap-x-5 gap-y-8 border-b border-white/10 pb-8 lg:grid-cols-12 lg:pb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5 text-white" aria-label="notjustlines — home">
              <LineworkMark className="h-9 w-9" />
              <span className="font-display text-xl font-bold tracking-tight">
                notjustlines<span className="text-brand">.</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-base leading-relaxed">
              Architecture, construction and interiors in Accra. From the first idea to the finishing details.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp-footer min-h-[2.75rem] px-5"
              >
                <WhatsAppIcon size={18} /> WhatsApp us
              </a>
              {SITE.instagramUrl && <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="notjustlines on Instagram"
                className="btn btn-outline-light min-h-[2.75rem] w-11 px-0"
              >
                <Instagram size={18} />
              </a>}
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h3 className="font-sans text-sm font-semibold text-white">{col.title}</h3>
              <ul className="mt-4 flex flex-col gap-1">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="inline-flex min-h-11 items-center py-2 text-sm transition-colors hover:text-brand">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="col-span-2 lg:col-span-3">
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
        <div className="py-7 md:py-10">
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
