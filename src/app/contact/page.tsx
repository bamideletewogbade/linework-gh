import type { Metadata } from 'next';
import { Mail, Phone, MapPin } from 'lucide-react';
import ConversationalBrief from '@/components/ConversationalBrief';
import { WhatsAppIcon } from '@/components/ui/icons';
import { SITE, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from '@/lib/site';
export const metadata: Metadata = { title: 'Contact — Discuss Your Project', description: 'Contact notjustlines by WhatsApp, phone or email. Prepare a project brief and choose how to share it.', alternates: { canonical: '/contact' } };
export default function ContactPage() {
  return <>
    <section className="container-site py-12 md:py-20">
      <span className="eyebrow mb-3">Get in touch</span><h1 className="text-display-lg font-bold mb-4">Let’s talk about your project.</h1>
      <p className="max-w-2xl text-lg text-ink-600">A new home, a fresh start for an old building, or an idea you’re still working out. Tell us what you have in mind.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <a href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer" className="rounded-3xl border border-line bg-white p-6 hover:border-brand"><WhatsAppIcon size={24} /><h2 className="mt-4 font-bold text-xl">WhatsApp</h2><p className="mt-2 text-sm text-ink-600">Open a conversation →</p></a>
        <a href={`tel:${SITE.phoneE164}`} className="rounded-3xl border border-line bg-white p-6 hover:border-brand"><Phone size={24} /><h2 className="mt-4 font-bold text-xl">Call</h2><p className="mt-2 text-sm text-ink-600">{SITE.phoneDisplay}</p></a>
        <a href={`mailto:${SITE.email}`} className="rounded-3xl border border-line bg-white p-6 hover:border-brand"><Mail size={24} /><h2 className="mt-4 font-bold text-xl">Email</h2><p className="mt-2 break-all text-sm text-ink-600">{SITE.email}</p></a>
      </div>
      <p className="mt-6 flex items-center gap-2 text-sm text-ink-600"><MapPin size={16} />Accra, Ghana · If you are abroad, include your time zone and preferred way to hear back.</p>
    </section>
    <section id="brief" className="section bg-paper border-t border-line"><div className="container-site"><div className="mx-auto mb-8 max-w-2xl text-center"><span className="eyebrow mb-3">Start your project</span><h2 className="text-display-md font-bold mb-3">Tell us what you have in mind.</h2><p className="text-ink-600">A few details will help us understand your plans. Review your brief, then send it by WhatsApp or email.</p></div><ConversationalBrief /></div></section>
  </>;
}
