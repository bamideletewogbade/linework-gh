import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Reveal from './ui/Reveal';

export default function TurnkeyMatrix() {
  return (
    <section className="section bg-sand/30 border-b border-line">
      <div className="container-site">
        
        {/* Section Header */}
        <Reveal className="max-w-3xl mb-12">
          <span className="eyebrow mb-3">How we work</span>
          <h2 className="text-display-md font-bold text-ink-900 mb-4">
            The usual way vs. The Linework way
          </h2>
          <p className="text-ink-600 text-base md:text-lg leading-relaxed">
            In Ghana, hiring an architect separately and then shopping around for a contractor often leads to delays, arguments over drawings, and unexpected costs. We keep everything under one roof.
          </p>
        </Reveal>

        {/* Side-by-side Comparative Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          
          {/* Column 1: The Broken Traditional Model */}
          <Reveal delay={60} className="bg-white rounded-3xl border border-line p-7 md:p-9 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ink-100 text-ink-700 text-xs font-semibold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-ink-400" />
                <span>The usual way in Accra</span>
              </div>

              <h3 className="text-2xl font-bold text-ink-900 mb-3">
                Architect draws, contractor guesses
              </h3>
              <p className="text-ink-600 text-sm mb-6 leading-relaxed">
                When drawings and construction are separated, small misunderstandings become expensive mistakes on site:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-ink-100 text-ink-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X size={13} />
                  </div>
                  <div>
                    <strong className="text-ink-900 text-sm block">Drawings that don’t match local costs:</strong>
                    <span className="text-ink-600 text-xs leading-relaxed">Plans look great on paper, but materials turn out to be unavailable or far beyond your budget.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-ink-100 text-ink-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X size={13} />
                  </div>
                  <div>
                    <strong className="text-ink-900 text-sm block">Low initial quotes with surprise add-ons:</strong>
                    <span className="text-ink-600 text-xs leading-relaxed">Contractors quote low to get the job, then demand extra money for basic structural items once the foundation is in.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-ink-100 text-ink-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X size={13} />
                  </div>
                  <div>
                    <strong className="text-ink-900 text-sm block">The blame game:</strong>
                    <span className="text-ink-600 text-xs leading-relaxed">If cracks or leaks appear, the contractor blames the drawings and the architect blames the workmanship. You get stuck in the middle.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-ink-100 text-ink-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X size={13} />
                  </div>
                  <div>
                    <strong className="text-ink-900 text-sm block">Stress from abroad:</strong>
                    <span className="text-ink-600 text-xs leading-relaxed">Calling relatives or sending money without seeing verified photos or video proof of progress.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-line text-xs font-semibold text-ink-500">
              Common outcome: Delays, uncompleted projects, and unexpected cost additions.
            </div>
          </Reveal>

          {/* Column 2: The Linework Integrated Model */}
          <Reveal delay={120} className="bg-ink-950 text-white rounded-3xl border border-ink-800 p-7 md:p-9 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/20 text-brand text-xs font-semibold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-brand" />
                <span>The Linework way</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                One team, one contract, one result
              </h3>
              <p className="text-ink-300 text-sm mb-6 leading-relaxed">
                From initial sketches to handing over the keys, our in-house team is responsible for every phase:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand/20 text-brand flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={13} />
                  </div>
                  <div>
                    <strong className="text-white text-sm block">Design tied to a real BOQ:</strong>
                    <span className="text-ink-300 text-xs leading-relaxed">We calculate material quantities and labor before breaking ground so the numbers make sense from day one.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand/20 text-brand flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={13} />
                  </div>
                  <div>
                    <strong className="text-white text-sm block">Our own engineers on site:</strong>
                    <span className="text-ink-300 text-xs leading-relaxed">No cutting corners on rebar, block quality or decking pours. Our site engineers supervise every stage directly.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand/20 text-brand flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={13} />
                  </div>
                  <div>
                    <strong className="text-white text-sm block">We own the finished building:</strong>
                    <span className="text-ink-300 text-xs leading-relaxed">Because we designed it and built it, there is no one else to point fingers at. We stand behind our work.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand/20 text-brand flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={13} />
                  </div>
                  <div>
                    <strong className="text-white text-sm block">Weekly WhatsApp updates &amp; stage payments:</strong>
                    <span className="text-ink-300 text-xs leading-relaxed">You only pay for each completed stage once you review high-res photos and video walkthroughs.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between relative z-10">
              <span className="text-xs font-semibold text-brand">
                Clear milestones &middot; Defects liability period after keys
              </span>
              <Link href="/services" className="text-white hover:text-brand text-xs font-semibold flex items-center gap-1.5 transition-colors">
                <span>See our services</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}
