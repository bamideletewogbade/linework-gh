'use client';

import React, { useState } from 'react';
import { Compass, FileText, CheckCircle2, HardHat, KeyRound, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

interface StepDetail {
  number: string;
  title: string;
  stageName: string;
  tagline: string;
  icon: LucideIcon;
  deliverables: string[];
  clientAction: string;
  siteReality: string;
}

const STAGES: StepDetail[] = [
  {
    "number": "01",
    "title": "Site & brief",
    "stageName": "Discovery",
    "tagline": "Understand the site and what you want to achieve.",
    "icon": Compass,
    "deliverables": [
      "Site information and existing drawings",
      "Access, survey and assessment needs",
      "Rooms, uses and project priorities",
      "Initial scope discussion"
    ],
    "clientAction": "Share your site location and priorities.",
    "siteReality": "A clear brief connects your priorities with the possibilities of the site."
  },
  {
    "number": "02",
    "title": "Design",
    "stageName": "Explore & review",
    "tagline": "Review the layout, appearance and specifications.",
    "icon": FileText,
    "deliverables": [
      "Concept options",
      "Plans and visual studies",
      "Material and finish discussions",
      "Specialist design input where required"
    ],
    "clientAction": "Review the options and record design decisions.",
    "siteReality": "This is where layouts, materials and everyday details come together."
  },
  {
    "number": "03",
    "title": "Costs & permits",
    "stageName": "Prepare",
    "tagline": "Define the scope, budget and approval requirements.",
    "icon": CheckCircle2,
    "deliverables": [
      "Required drawing and specification packages",
      "Permit application responsibilities",
      "Cost breakdown and exclusions",
      "Programme and payment terms"
    ],
    "clientAction": "Review costs, assumptions and approvals before proceeding.",
    "siteReality": "Drawings, costs and approvals form the foundation for the next stage."
  },
  {
    "number": "04",
    "title": "Construction",
    "stageName": "Build & review",
    "tagline": "Bring the design to life, one stage at a time.",
    "icon": HardHat,
    "deliverables": [
      "Construction sequence",
      "Supervision and inspection plan",
      "Progress reporting arrangements",
      "Written change approval process"
    ],
    "clientAction": "Review progress and decisions at agreed points.",
    "siteReality": "Keep the work connected to the drawings through site reviews and recorded decisions."
  },
  {
    "number": "05",
    "title": "Handover",
    "stageName": "Completion",
    "tagline": "Review the finished work and the agreed handover information.",
    "icon": KeyRound,
    "deliverables": [
      "Inspection and outstanding work list",
      "Relevant operating and maintenance information",
      "Handover records",
      "Agreed aftercare responsibilities"
    ],
    "clientAction": "Record outstanding items and confirm handover arrangements.",
    "siteReality": "A walkthrough brings the finishing details and handover information together."
  }
];

export default function TurnkeyProcessDiagram() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const current = STAGES[activeStep];
  const IconComponent = current.icon;

  return (
    <section className="section bg-white border-b border-line" id="process">
      <div className="container-site">
        {/* Header */}
        <Reveal className="max-w-3xl mb-12">
          <span className="eyebrow mb-3">The journey to your space</span>
          <h2 className="text-display-md font-bold text-ink-900 mb-4">
            From empty plot to keys in hand.
          </h2>
          <p className="text-ink-600 text-base md:text-lg leading-relaxed">
            See how a design and build project takes shape, from understanding the site to walking through the finished space.
          </p>
        </Reveal>

        {/* Process Flow Diagram Bar */}
        <Reveal delay={60} className="mb-8">
          {/* Desktop / Tablet Timeline Step Indicator */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 p-2 bg-paper rounded-2xl sm:rounded-full border border-line">
            {STAGES.map((s, idx) => {
              const isActive = activeStep === idx;
              const StepIcon = s.icon;
              return (
                <button
                  key={s.number}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`flex items-center gap-2.5 min-h-12 px-3 py-3 rounded-xl sm:rounded-full text-left transition-all ${
                    isActive
                      ? 'bg-ink-950 text-white shadow-md'
                      : 'text-ink-700 hover:text-ink-950 hover:bg-white/80'
                  }`}
                  aria-pressed={isActive}
                >
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                      isActive ? 'bg-brand text-ink-950' : 'bg-ink-200 text-ink-800'
                    }`}
                  >
                    {s.number}
                  </span>
                  <div className="min-w-0">
                    <span className="block text-xs font-bold">{s.title}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Interactive Active Stage Card Display */}
        <Reveal delay={120} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-paper rounded-3xl border border-line p-6 sm:p-9 md:p-10 shadow-sm">
          
          {/* Left Column: Visual & Deliverables (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-2xl bg-brand/20 text-brand-700 flex items-center justify-center shrink-0">
                  <IconComponent size={20} />
                </span>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-700 block">
                    Stage {current.number} &middot; {current.stageName}
                  </span>
                  <h3 className="text-2xl font-bold text-ink-900">
                    {current.title}
                  </h3>
                </div>
              </div>

              <p className="text-ink-700 text-base md:text-lg mb-6 leading-relaxed">
                {current.tagline}
              </p>

              <div className="bg-white rounded-2xl p-5 border border-line mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-ink-500 mb-3">
                  What this stage covers
                </h4>
                <ul className="space-y-2.5">
                  {current.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5 text-sm text-ink-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Next / Prev navigation buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-line/80">
              <button
                type="button"
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                className="min-h-11 px-2 text-xs font-bold text-ink-600 hover:text-ink-950 disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                &larr; Back
              </button>
              <span className="text-xs text-ink-600" aria-live="polite">{activeStep + 1} / {STAGES.length}</span>
              <button
                type="button"
                disabled={activeStep === STAGES.length - 1}
                onClick={() => setActiveStep((prev) => Math.min(STAGES.length - 1, prev + 1))}
                className="min-h-11 px-2 text-xs font-bold text-ink-900 hover:text-brand-700 disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1 transition-colors"
              >
                <span>Next</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Right Column: Architectural Site Reality & Financial Control (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-2xl border border-line p-6 shadow-sm">
            <div className="space-y-5">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-ink-500 block mb-1">
                  Your part
                </span>
                <p className="text-sm font-semibold text-ink-900 bg-sand/30 p-3 rounded-xl border border-line">
                  {current.clientAction}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-700 block mb-1">
                  Why it matters
                </span>
                <p className="text-sm text-ink-700 leading-relaxed bg-brand/5 p-3 rounded-xl border border-brand/20">
                  {current.siteReality}
                </p>
              </div>

              {/* Technical Blueprint Micro-diagram */}
              <div className="p-4 rounded-xl bg-ink-950 text-white font-sans text-xs">
                <div className="flex items-center justify-between text-ink-400 mb-2 border-b border-white/10 pb-2">
                  <span>START THE CONVERSATION</span>
                  <span className="text-brand font-bold">YOUR PROJECT</span>
                </div>
                <div className="space-y-1.5 text-ink-300">
                  <div className="flex justify-between">
                    <span>Location:</span>
                    <span className="text-white font-medium">Your plot or building</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Priorities:</span>
                    <span className="text-white font-medium">What you want to create</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Budget:</span>
                    <span className="text-white font-medium">An amount, if you have one</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-line text-center">
              <a
                href="#design"
                className="text-xs font-bold text-brand-700 hover:text-ink-950 inline-flex items-center gap-1 transition-colors"
              >
                <span>Explore our services</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </div>

        </Reveal>

      </div>
    </section>
  );
}
