import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './icons';
import Reveal from './Reveal';
import { whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from '@/lib/site';

type Props = {
  title?: React.ReactNode;
  text?: React.ReactNode;
  primaryLabel?: string;
  primaryHref?: string;
  whatsappMessage?: string;
};

/** Dark closing call-to-action used at the bottom of inner pages. */
export default function CtaBand({
  title = (
    <>
      Got land? Got drawings?
      <br className="hidden sm:block" /> Let&apos;s talk.
    </>
  ),
  text = 'Tell us what you want to build. Share a brief by WhatsApp or email to start the conversation.',
  primaryLabel = 'Start your project',
  primaryHref = '/contact',
  whatsappMessage = DEFAULT_WHATSAPP_MESSAGE,
}: Props) {
  return (
    <section className="container-site pb-12 md:pb-20">
      <Reveal className="relative overflow-hidden rounded-4xl bg-ink-900 px-5 py-9 text-white sm:px-8 md:px-12 md:py-14">
        <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-60" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-display-md font-bold">{title}</h2>
            <p className="mt-4 text-base text-ink-300 md:text-lg">{text}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link href={primaryHref} className="btn btn-primary">
              {primaryLabel} <ArrowRight size={18} />
            </Link>
            <a href={whatsappLink(whatsappMessage)} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
              <WhatsAppIcon size={18} /> WhatsApp us
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
