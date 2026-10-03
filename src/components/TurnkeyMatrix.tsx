import React from 'react';
import { XCircle, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function TurnkeyMatrix() {
  return (
    <section className="py-20 bg-[#FAF9F6] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-700 font-semibold block mb-2">
            The Practice Paradigm &middot; Design-Build
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-4">
            Why Traditional Building Fails in Ghana
          </h2>
          <p className="text-stone-600 text-base leading-relaxed font-sans">
            In West Africa, commissioning an architect and then separately tendering to an independent general contractor leads to friction, finger-pointing, and severe budget escalation. Linework operates on a closed-loop system of single-point accountability.
          </p>
        </div>

        {/* Side-by-side Comparative Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Column 1: The Broken Traditional Model */}
          <div className="bg-white rounded-xl border border-red-200/80 p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-red-50 text-red-700 font-mono text-[11px] font-bold uppercase tracking-wider mb-5">
                <XCircle size={14} />
                <span>The Fragmented Industry Model</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-3">
                Disconnected Drawings &amp; Rogue Contractors
              </h3>
              <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                The traditional pathway that causes over 70% of Ghanaian private residential and commercial builds to stall mid-construction or exceed budget by 40%+:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold">&times;</span>
                  </div>
                  <div>
                    <strong className="text-stone-900 text-sm block">Theoretical Paper Architects:</strong>
                    <span className="text-stone-600 text-xs leading-relaxed">Draftspersons produce drawings without verifying local material costs, structural feasibility, or construction logistics.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold">&times;</span>
                  </div>
                  <div>
                    <strong className="text-stone-900 text-sm block">Lowest-Bid Contractor Dilemma:</strong>
                    <span className="text-stone-600 text-xs leading-relaxed">Contractors submit unrealistically low bids to win the job, then compromise steel rebar grades and demand endless cost variations.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold">&times;</span>
                  </div>
                  <div>
                    <strong className="text-stone-900 text-sm block">The Blame Game:</strong>
                    <span className="text-stone-600 text-xs leading-relaxed">When cracks or water leaks appear, the contractor blames the architect’s blueprint, and the architect blames the contractor’s pour.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold">&times;</span>
                  </div>
                  <div>
                    <strong className="text-stone-900 text-sm block">The Client Absorbs All Risk:</strong>
                    <span className="text-stone-600 text-xs leading-relaxed">Constant anxiety, unmonitored site progress, and months of delay while living abroad or managing busy careers.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-stone-100 text-xs font-mono text-red-600 font-semibold">
              RESULT: 40%+ AVERAGE COST OVERRUN &middot; 9+ MONTH DELAY
            </div>
          </div>

          {/* Column 2: The Linework Integrated Model */}
          <div className="bg-white rounded-xl border-2 border-stone-900 p-8 shadow-card flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-stone-900 text-amber-400 font-mono text-[11px] font-bold uppercase tracking-wider mb-5">
                <CheckCircle2 size={14} className="text-amber-400" />
                <span>The Linework Integrated Model</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-3">
                Single-Point Turnkey Mastery
              </h3>
              <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                One master entity accountable from initial site orientation to the moment we hand you the physical brass keys to your finished building:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold">&#10003;</span>
                  </div>
                  <div>
                    <strong className="text-stone-900 text-sm block">Parametric 3D Pre-Construction:</strong>
                    <span className="text-stone-600 text-xs leading-relaxed">Every structural beam, conduit, and cantilever is verified in 3D BIM clash detection before breaking ground.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold">&#10003;</span>
                  </div>
                  <div>
                    <strong className="text-stone-900 text-sm block">Direct General Contracting &amp; Engineering:</strong>
                    <span className="text-stone-600 text-xs leading-relaxed">Linework’s licensed structural engineers and master carpenters manage on-site formwork and pours directly.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold">&#10003;</span>
                  </div>
                  <div>
                    <strong className="text-stone-900 text-sm block">One Contract. Zero Finger-Pointing:</strong>
                    <span className="text-stone-600 text-xs leading-relaxed">We take 100% legal and structural responsibility. If an issue arises, we solve it immediately without client disputes.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold">&#10003;</span>
                  </div>
                  <div>
                    <strong className="text-stone-900 text-sm block">Fixed-Milestone Escrow Guarantee:</strong>
                    <span className="text-stone-600 text-xs leading-relaxed">Payments are locked to verified structural milestones backed by independent lab crush test certifications.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-stone-200 flex items-center justify-between">
              <span className="text-xs font-mono text-stone-900 font-bold">
                GUARANTEE: 0% COST ESCALATION &middot; ON-SCHEDULE HANDOVER
              </span>
              <Link href="/services" className="text-amber-700 hover:text-amber-900 text-xs font-mono font-bold flex items-center gap-1">
                <span>Explore Protocol</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
