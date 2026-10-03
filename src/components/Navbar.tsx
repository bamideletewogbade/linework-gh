'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { LineworkMark, WhatsAppIcon } from './ui/icons';
import { NAV_LINKS, SITE, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from '@/lib/site';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const overHero = pathname === '/' && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the menu on route change
  useEffect(() => setOpen(false), [pathname]);

  // Lock page scroll + Escape to close while the menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header
        className={`sticky top-0 z-50 h-16 transition-[background-color,border-color,color] duration-300 md:h-[72px] ${
          open
            ? 'bg-ink-950 text-white'
            : overHero
              ? 'border-b border-transparent bg-transparent text-white'
              : 'border-b border-line bg-paper/85 text-ink-900 backdrop-blur-lg'
        }`}
      >
        <div className="container-site flex h-full items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2.5" aria-label="Linework GH — home">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 border border-white/10 transition-all duration-300 group-hover:scale-105 group-hover:border-brand/40 group-hover:bg-brand/10">
              <LineworkMark className="h-6 w-6 transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              linework<span className="inline-block text-brand transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">.</span>
            </span>
          </Link>

          {/* Desktop nav with interactive sliding hover */}
          <nav className="hidden items-center gap-1.5 md:flex" aria-label="Main">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`group relative rounded-full px-4 py-2 text-[0.95rem] font-medium transition-all duration-200 ${
                    active
                      ? overHero
                        ? 'bg-white/15 text-white font-semibold shadow-sm'
                        : 'bg-ink-900/[0.08] text-ink-950 font-semibold'
                      : overHero
                        ? 'text-white/80 hover:text-white hover:bg-white/10'
                        : 'text-ink-600 hover:text-ink-950 hover:bg-ink-900/[0.05]'
                  }`}
                >
                  <span>{link.label}</span>
                  {/* Subtle active / hover micro dot */}
                  <span
                    className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-1 rounded-full bg-brand transition-all duration-300 ${
                      active ? 'w-4 opacity-100' : 'w-0 opacity-0 group-hover:w-2 group-hover:opacity-75'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className={`group flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 hover:scale-105 ${
                overHero ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-ink-900/[0.06] hover:bg-ink-900/10 text-ink-900'
              }`}
            >
              <WhatsAppIcon size={18} className="transition-transform duration-300 group-hover:rotate-12" />
            </a>
            <Link
              href="/contact"
              className={`btn min-h-[2.75rem] px-5 group transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
                overHero ? 'btn-primary' : 'btn-dark'
              }`}
            >
              <span>Start a project</span>
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="relative -mr-2 flex h-11 w-11 items-center justify-center md:hidden"
          >
            <span className="sr-only">Menu</span>
            <span
              className={`absolute h-0.5 w-6 rounded bg-current transition-transform duration-300 ${
                open ? 'rotate-45' : '-translate-y-[5px]'
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 rounded bg-current transition-transform duration-300 ${
                open ? '-rotate-45' : 'translate-y-[5px]'
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col bg-ink-950 pt-16 text-white transition-[opacity,visibility] duration-300 md:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        aria-hidden={!open}
      >
        <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-50" />
        <nav className="container-site relative flex flex-1 flex-col justify-center gap-1" aria-label="Mobile">
          {[{ label: 'Home', href: '/' }, ...NAV_LINKS].map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              tabIndex={open ? 0 : -1}
              className={`flex items-baseline gap-4 border-b border-white/10 py-4 font-display text-4xl font-bold tracking-tight transition-all duration-500 ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              } ${isActive(link.href) && link.href !== '/' ? 'text-brand' : pathname === link.href ? 'text-brand' : ''}`}
              style={{ transitionDelay: open ? `${80 + i * 50}ms` : '0ms' }}
            >
              <span className="text-sm font-medium text-white/40">0{i + 1}</span>
              {link.label}
            </Link>
          ))}
        </nav>

        <div
          className={`container-site relative flex flex-col gap-3 pb-[max(1.5rem,env(safe-area-inset-bottom))] transition-all delay-300 duration-500 ${
            open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <a
            href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
            className="btn btn-whatsapp w-full"
          >
            <WhatsAppIcon size={18} /> Chat on WhatsApp
          </a>
          <div className="grid grid-cols-2 gap-3">
            <a href={`tel:${SITE.phoneE164}`} tabIndex={open ? 0 : -1} className="btn btn-outline-light">
              <Phone size={16} /> Call
            </a>
            <a href={`mailto:${SITE.email}`} tabIndex={open ? 0 : -1} className="btn btn-outline-light">
              <Mail size={16} /> Email
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
