'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './ui/icons';
import { whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from '@/lib/site';

/**
 * Thumb-zone action bar for phones. Appears after the hero, hides when the
 * brief form is on screen (no point pushing a CTA over the CTA).
 */
export default function MobileActionBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let briefInView = false;
    const brief = document.getElementById('brief');
    const io = brief
      ? new IntersectionObserver(([e]) => {
          briefInView = e.isIntersecting;
          update();
        }, { threshold: 0.05 })
      : null;
    if (brief && io) io.observe(brief);

    function update() {
      setVisible(window.scrollY > window.innerHeight * 0.6 && !briefInView);
    }
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      io?.disconnect();
    };
  }, [pathname]);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-all duration-300 md:hidden ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-full opacity-0'
      }`}
    >
      <div className="flex gap-2 rounded-full border border-white/10 bg-ink-950/90 p-1.5 shadow-float backdrop-blur-lg">
        <a
          href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp flex-1 px-4"
        >
          <WhatsAppIcon size={18} /> WhatsApp
        </a>
        <Link href={pathname === '/contact' ? '#brief' : '/contact'} className="btn btn-primary flex-1 px-4">
          Start project <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
