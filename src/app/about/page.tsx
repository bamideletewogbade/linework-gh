import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Compass, ShieldCheck, Hammer, Users } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import CtaBand from '@/components/ui/CtaBand';

export const metadata: Metadata = {
  title: 'About — The Studio & Philosophy',
  description:
    'The story behind Linework GH: why architecture is not just lines on paper, how our architects and builders work together in Accra, and our commitments to every client.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="container-site pt-10 pb-12 md:pt-16 md:pb-20">
        <Reveal className="flex flex-col gap-5">
          <span className="eyebrow">Our story</span>
          <h1 className="max-w-4xl text-display-lg font-bold text-ink-900">
            Drawn with care. Built to last.
          </h1>
          <p className="max-w-2xl text-lg text-ink-600">
            Linework is an integrated architecture and construction studio in Accra. We believe a design is only as good as the finished building you walk into.
          </p>
        </Reveal>

        {/* Feature Image */}
        <Reveal delay={100} className="mt-10 relative aspect-[16/9] md:aspect-[21/9] w-full rounded-3xl overflow-hidden border border-line bg-paper shadow-sm">
          <Image
            src="/assets/craft-studio.jpg"
            alt="Linework studio workshop in Accra"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 text-white text-xs sm:text-sm font-medium">
            Linework Studio &middot; Physical modeling and joinery workshop &middot; Accra
          </div>
        </Reveal>
      </section>

      {/* Philosophy: Not Just Lines */}
      <section className="section bg-white border-y border-line">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            <Reveal className="lg:col-span-5 flex flex-col gap-4">
              <span className="eyebrow">The name</span>
              <h2 className="text-display-md font-bold text-ink-900 leading-tight">
                Why we call ourselves &ldquo;Not Just Lines&rdquo;
              </h2>
              <p className="text-ink-600 text-base leading-relaxed">
                Too often in Ghana, architects create impressive drawings on paper, collect their fee, and leave the client to handle the building contractor alone.
              </p>
              <p className="text-ink-600 text-base leading-relaxed">
                When the drawings are disconnected from reality, costs jump, materials get substituted, and the client absorbs all the stress.
              </p>
              <p className="text-ink-600 text-base leading-relaxed">
                Architecture is <strong>not just lines</strong> on a blueprint. It is concrete strength, beam alignments, weatherproofing, electrical safety, and joinery tolerances. By designing and building together, we make sure the completed home is exactly what was drawn.
              </p>
            </Reveal>

            <div className="lg:col-span-7 bg-paper rounded-3xl border border-line p-7 sm:p-9 md:p-10 shadow-sm flex flex-col gap-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-500 pb-3 border-b border-line">
                Four studio commitments
              </h3>

              <div className="space-y-6">
                <Reveal delay={60} className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-brand/10 text-brand-700 text-xs font-bold flex items-center justify-center shrink-0">
                    01
                  </span>
                  <div>
                    <h4 className="text-lg font-bold text-ink-900 mb-1">Built for the Accra climate</h4>
                    <p className="text-ink-600 text-sm leading-relaxed">
                      We design with cross-ventilation, deep concrete overhangs, and timber louvres to block direct sun and reduce air conditioning bills.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={120} className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-brand/10 text-brand-700 text-xs font-bold flex items-center justify-center shrink-0">
                    02
                  </span>
                  <div>
                    <h4 className="text-lg font-bold text-ink-900 mb-1">Clear BOQ before you build</h4>
                    <p className="text-ink-600 text-sm leading-relaxed">
                      No guessing games or artificially low quotes. We calculate real material quantities upfront so your budget is respected from day one.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={180} className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-brand/10 text-brand-700 text-xs font-bold flex items-center justify-center shrink-0">
                    03
                  </span>
                  <div>
                    <h4 className="text-lg font-bold text-ink-900 mb-1">Our own site engineers on ground</h4>
                    <p className="text-ink-600 text-sm leading-relaxed">
                      Direct daily supervision of formwork, rebar, blockwork, and slab decking. Concrete cube test checks at key pours so structural strength is verified.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={240} className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-brand/10 text-brand-700 text-xs font-bold flex items-center justify-center shrink-0">
                    04
                  </span>
                  <div>
                    <h4 className="text-lg font-bold text-ink-900 mb-1">Honest updates for clients abroad</h4>
                    <p className="text-ink-600 text-sm leading-relaxed">
                      Weekly photo and video walkthroughs directly on WhatsApp. You pay stage by stage only when the previous milestone is completed and verified.
                    </p>
                  </div>
                </Reveal>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Who You Work With */}
      <section className="section bg-paper">
        <div className="container-site">
          <Reveal className="max-w-2xl mb-12">
            <span className="eyebrow mb-2">Our team</span>
            <h2 className="text-display-md font-bold text-ink-900 mb-3">
              Who you work with
            </h2>
            <p className="text-ink-600 text-base md:text-lg leading-relaxed">
              When you hire Linework, you get a coordinated team under one roof — not subcontractors you have never met.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal delay={60} className="p-7 rounded-3xl bg-white border border-line shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand-700 flex items-center justify-center mb-4">
                <Compass size={20} />
              </div>
              <h3 className="text-xl font-bold text-ink-900 mb-2">Architects &amp; Designers</h3>
              <p className="text-ink-600 text-sm leading-relaxed">
                Listen to your needs, create the 3D visual concepts, prepare full drawings, and navigate building permits at the Municipal Assembly.
              </p>
            </Reveal>

            <Reveal delay={120} className="p-7 rounded-3xl bg-white border border-line shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand-700 flex items-center justify-center mb-4">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-xl font-bold text-ink-900 mb-2">Structural &amp; Site Engineers</h3>
              <p className="text-ink-600 text-sm leading-relaxed">
                Supervise ground setting out, foundation excavation, steel rebar spacing, slab casting, and plumbing/electrical runs directly on site.
              </p>
            </Reveal>

            <Reveal delay={180} className="p-7 rounded-3xl bg-white border border-line shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand-700 flex items-center justify-center mb-4">
                <Hammer size={20} />
              </div>
              <h3 className="text-xl font-bold text-ink-900 mb-2">Joinery &amp; Finishing Craftsmen</h3>
              <p className="text-ink-600 text-sm leading-relaxed">
                Fabricate custom kitchen cabinets, wardrobes, and doors in our Accra workshop, ensuring clean fittings and durable finishes.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <CtaBand
        title="Ready to discuss your building project?"
        text="Visit our studio in Accra or schedule a video call across your time zone. We’ll review your plot and give you straight answers."
        primaryLabel="Start your brief"
        primaryHref="/contact"
        whatsappMessage="Hi Linework, I'd like to talk about a building project in Ghana."
      />
    </div>
  );
}
