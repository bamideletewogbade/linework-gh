'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Mail, Phone, Menu, X } from 'lucide-react';
import { LineworkMark, WhatsAppIcon } from './ui/icons';
import { NAV_LINKS, SITE, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from '@/lib/site';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDivElement>(null);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const priorOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const background = Array.from(document.querySelectorAll<HTMLElement>('body > header, body > main, body > footer'));
    const priorInert = background.map(element => element.inert);
    background.forEach(element => { element.inert = true; });
    dialog.current?.querySelector<HTMLButtonElement>('button')?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); setOpen(false); }
      if (event.key !== 'Tab') return;
      const items = Array.from(dialog.current?.querySelectorAll<HTMLElement>('a[href], button') || []);
      const first = items[0]; const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    const desktop = window.matchMedia('(min-width: 1024px)');
    const onResize = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener('change', onResize);
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = priorOverflow;
      background.forEach((element, index) => { element.inert = priorInert[index]; });
      desktop.removeEventListener('change', onResize);
      document.removeEventListener('keydown', onKey);
      trigger.current?.focus({ preventScroll: true });
    };
  }, [open]);
  const isActive = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(`${href}/`));

  return <>
    <header className="sticky top-0 z-50 h-16 border-b border-white/10 bg-ink-950/95 text-white backdrop-blur-md lg:h-[72px]">
      <div className="container-site flex h-full items-center justify-between gap-3">
        <Link href="/" className="inline-flex min-h-11 shrink-0 items-center gap-2.5" aria-label="notjustlines — home">
          <LineworkMark className="h-8 w-8" /><span className="font-display text-lg font-bold tracking-tight">notjustlines<span className="text-brand">.</span></span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">{NAV_LINKS.map(link => <Link key={link.href} href={link.href} aria-current={isActive(link.href) ? 'page' : undefined} className={`inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium transition-colors ${isActive(link.href) ? 'bg-white/15 text-brand' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}>{link.label}</Link>)}</nav>
        <Link href="/contact#brief" className="btn btn-primary hidden shrink-0 px-5 lg:inline-flex">Start a project<ArrowUpRight size={16} /></Link>
        <button ref={trigger} type="button" onClick={() => setOpen(true)} aria-expanded={open} aria-controls="mobile-menu" aria-label="Open menu" className="inline-flex h-11 items-center gap-2 rounded-full px-3 text-sm font-semibold lg:hidden"><span>Menu</span><Menu size={22} /></button>
      </div>
    </header>
    {open && <div ref={dialog} id="mobile-menu" role="dialog" aria-modal="true" aria-label="Site navigation" className="fixed inset-0 z-[60] h-[100dvh] overflow-y-auto overscroll-contain bg-ink-950 text-white lg:hidden">
      <div className="container-site flex min-h-full flex-col pb-[max(1.5rem,env(safe-area-inset-bottom))]">
        <div className="flex h-16 shrink-0 items-center justify-between"><span className="font-display text-lg font-bold">notjustlines<span className="text-brand">.</span></span><button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="flex h-11 w-11 items-center justify-center rounded-full"><X size={24} /></button></div>
        <nav className="flex flex-1 flex-col justify-center py-4" aria-label="Mobile">{[{ label: 'Home', href: '/' }, ...NAV_LINKS].map((link, index) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} aria-current={isActive(link.href) ? 'page' : undefined} className={`flex min-h-12 items-baseline gap-4 border-b border-white/10 py-3 font-display text-2xl font-bold sm:text-3xl ${isActive(link.href) ? 'text-brand' : 'text-white'}`}><span className="text-xs font-medium text-white/40">0{index + 1}</span>{link.label}</Link>)}</nav>
        <div className="flex shrink-0 flex-col gap-3 pt-4"><Link href="/contact#brief" onClick={() => setOpen(false)} className="btn btn-primary">Start a project<ArrowUpRight size={16} /></Link><div className="grid grid-cols-3 gap-2"><a href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)} className="btn btn-outline-light px-2 text-xs" target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={16} /><span>WhatsApp</span></a><a href={`tel:${SITE.phoneE164}`} className="btn btn-outline-light px-2 text-xs"><Phone size={16} />Call</a><a href={`mailto:${SITE.email}`} className="btn btn-outline-light px-2 text-xs"><Mail size={16} />Email</a></div></div>
      </div>
    </div>}
  </>;
}
