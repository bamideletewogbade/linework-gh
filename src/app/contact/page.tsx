import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, Instagram, MapPin, Clock } from 'lucide-react';
import ConversationalBrief from '@/components/ConversationalBrief';
import Reveal from '@/components/ui/Reveal';
import { WhatsAppIcon } from '@/components/ui/icons';
import { SITE, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact — Talk to Our Architects & Builders',
  description:
    'Reach out to Linework GH on WhatsApp, phone, or email. Tell us about your plot or building project in Accra and get direct feasibility feedback.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="container-site pt-10 pb-12 md:pt-16 md:pb-16">
        <Reveal className="max-w-3xl">
          <span className="eyebrow mb-3">Get in touch</span>
          <h1 className="text-display-lg font-bold text-ink-900 mb-4">
            Let’s talk about your project.
          </h1>
          <p className="text-ink-600 text-base md:text-lg leading-relaxed">
            Whether you own land in Cantonments or East Legon, have drawings in hand, or are living abroad planning to build at home — we’re here to give you honest answers.
          </p>
        </Reveal>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          
          {/* WhatsApp Card */}
          <Reveal delay={60} className="p-6 rounded-3xl bg-white border border-brand/30 shadow-sm flex flex-col justify-between hover:border-brand transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-whatsapp/20 text-ink-950 flex items-center justify-center shrink-0">
                <WhatsAppIcon size={20} />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-ink-500 block">Fastest response</span>
                <span className="font-bold text-sm text-ink-900">WhatsApp</span>
              </div>
            </div>
            <a
              href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp w-full text-xs"
            >
              <WhatsAppIcon size={16} /> Chat now
            </a>
          </Reveal>

          {/* Phone Card */}
          <Reveal delay={120} className="p-6 rounded-3xl bg-white border border-line shadow-sm flex flex-col justify-between hover:border-ink-300 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand-700 flex items-center justify-center shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-ink-500 block">Phone Calls</span>
                <span className="font-bold text-sm text-ink-900">{SITE.phoneDisplay}</span>
              </div>
            </div>
            <a
              href={`tel:${SITE.phoneE164}`}
              className="btn btn-outline w-full text-xs"
            >
              Call us
            </a>
          </Reveal>

          {/* Email Card */}
          <Reveal delay={180} className="p-6 rounded-3xl bg-white border border-line shadow-sm flex flex-col justify-between hover:border-ink-300 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand-700 flex items-center justify-center shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-ink-500 block">Email Inquiries</span>
                <span className="font-bold text-sm text-ink-900 truncate block max-w-[150px]">{SITE.email}</span>
              </div>
            </div>
            <a
              href={`mailto:${SITE.email}`}
              className="btn btn-outline w-full text-xs"
            >
              Send email
            </a>
          </Reveal>

          {/* Instagram / Location Card */}
          <Reveal delay={240} className="p-6 rounded-3xl bg-white border border-line shadow-sm flex flex-col justify-between hover:border-ink-300 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand-700 flex items-center justify-center shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-ink-500 block">Studio &amp; Workshop</span>
                <span className="font-bold text-sm text-ink-900">Accra, Ghana</span>
              </div>
            </div>
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline w-full text-xs"
            >
              {SITE.instagramHandle}
            </a>
          </Reveal>

        </div>
      </section>

      {/* The Conversational Brief Component */}
      <section className="section bg-paper border-t border-line" id="brief">
        <div className="container-site">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <span className="eyebrow mb-2 mx-auto">Online brief</span>
            <h2 className="text-display-md font-bold text-ink-900 mb-3">
              Start your project brief
            </h2>
            <p className="text-ink-600 text-sm md:text-base leading-relaxed">
              Answer 4 short questions to receive preliminary cost and feasibility feedback.
            </p>
          </Reveal>

          <ConversationalBrief />

          {/* Diaspora note & Consultation Card */}
          <Reveal delay={120} className="mt-12 max-w-2xl mx-auto p-6 rounded-3xl bg-white border border-line shadow-sm text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand/10 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
              <span>Diaspora Consultation Support</span>
            </div>
            <h3 className="text-lg font-bold text-ink-900 mb-2">
              Living in the UK, US, or Canada?
            </h3>
            <p className="text-ink-600 text-sm leading-relaxed mb-4">
              We sync consultations across GMT-5 to GMT+1. Book a dedicated Google Meet or WhatsApp video call to review your land title, architectural drawings, or construction progress with our partners.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-ink-700 pt-4 border-t border-line">
              <span>Studio: Accra, Ghana</span>
              <span>&middot;</span>
              <span>Hours: Mon–Sat, 8:00am – 6:00pm GMT</span>
              <span>&middot;</span>
              <span>Online: 24/7 on WhatsApp</span>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
