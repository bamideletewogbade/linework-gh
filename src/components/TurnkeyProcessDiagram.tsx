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
    number: '01',
    title: 'Site Visit & Brief',
    stageName: 'Discovery & Feasibility',
    tagline: 'We inspect your plot in person before sketching a single line.',
    icon: Compass,
    deliverables: [
      'Topography & boundary beacon verification',
      'Soil condition & drainage path assessment',
      'Access road check for heavy delivery trucks',
      'Client lifestyle & functional brief alignment',
    ],
    clientAction: 'Share site plan, indenture & wish list',
    siteReality: 'Prevents foundation surprises on swampy or sloping ground.',
  },
  {
    number: '02',
    title: 'Design & 3D Walkthrough',
    stageName: 'Concept to Detail',
    tagline: 'Experience room layouts, natural lighting, and finishes in 3D.',
    icon: FileText,
    deliverables: [
      'Architectural floor plans & elevation drawings',
      'High-detail 3D exterior & interior visualizations',
      'Passive airflow & sun shading design for Accra heat',
      'Structural concept & service ducts planning',
    ],
    clientAction: 'Review 3D walkthrough & lock design choices',
    siteReality: 'Zero guesswork — you know exactly what your building looks like before casting concrete.',
  },
  {
    number: '03',
    title: 'Permits & Clear BOQ',
    stageName: 'Compliance & Budgeting',
    tagline: 'Complete drawings, Municipal Assembly permits, and itemized costs.',
    icon: CheckCircle2,
    deliverables: [
      'Full architectural, structural, MEP engineering sets',
      'Municipal / Metropolitan Assembly permit submission & follow-up',
      'Itemized Bill of Quantities (BOQ) with true material counts',
      'Binding construction timeline & milestone payment schedule',
    ],
    clientAction: 'Sign off on BOQ and stage payment milestones',
    siteReality: 'No surprise "boss, cement has finished" mid-project demands.',
  },
  {
    number: '04',
    title: 'Construction & Site Supervision',
    stageName: 'Foundation to Finishing',
    tagline: 'Our own site engineers supervise every pour, block, and conduit.',
    icon: HardHat,
    deliverables: [
      'Setting out, excavation & reinforced foundation casting',
      'Solid blockwork, columns, beams & slab decking',
      'Concrete cube crushing tests at key structural pours',
      'Roofing, plumbing, wiring, plastering, tiling & custom joinery',
    ],
    clientAction: 'Review weekly photo/video logs & release stage payments',
    siteReality: 'Strict quality control without cutting corners on rebar spacing or cement ratios.',
  },
  {
    number: '05',
    title: 'Handover & Defects Period',
    stageName: 'Keys & Peace of Mind',
    tagline: 'Walk through your finished building with our team and receive your keys.',
    icon: KeyRound,
    deliverables: [
      'Deep post-construction cleaning & fixture commissioning',
      'Full architectural as-built drawings & maintenance manual',
      'Official key handover ceremony & documentation',
      'Active defects liability period for post-handover warranty support',
    ],
    clientAction: 'Move in, celebrate, and sleep peacefully',
    siteReality: 'We remain accountable long after the final coat of paint dries.',
  },
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
          <span className="eyebrow mb-3">Our 5-stage turnkey delivery</span>
          <h2 className="text-display-md font-bold text-ink-900 mb-4">
            From empty plot to keys in hand.
          </h2>
          <p className="text-ink-600 text-base md:text-lg leading-relaxed">
            Building in Accra shouldn’t be a chaotic trial of trial and error. We run every project through five disciplined milestones with total transparency on drawings, costs, and site progress.
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
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-xl sm:rounded-full text-left transition-all ${
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
                  <div className="truncate">
                    <span className="block text-xs font-bold truncate">{s.title}</span>
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
                  Key Deliverables &amp; Milestones
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
                className="text-xs font-bold text-ink-600 hover:text-ink-950 disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                &larr; Previous Stage
              </button>
              <div className="flex items-center gap-1.5">
                {STAGES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveStep(i)}
                    className={`h-2 rounded-full transition-all ${
                      activeStep === i ? 'w-6 bg-brand' : 'w-2 bg-ink-200'
                    }`}
                    aria-label={`Jump to stage ${i + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                disabled={activeStep === STAGES.length - 1}
                onClick={() => setActiveStep((prev) => Math.min(STAGES.length - 1, prev + 1))}
                className="text-xs font-bold text-ink-900 hover:text-brand-700 disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1 transition-colors"
              >
                <span>Next Stage</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Right Column: Architectural Site Reality & Financial Control (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-2xl border border-line p-6 shadow-sm">
            <div className="space-y-5">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-ink-500 block mb-1">
                  Client Responsibility
                </span>
                <p className="text-sm font-semibold text-ink-900 bg-sand/30 p-3 rounded-xl border border-line">
                  {current.clientAction}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-700 block mb-1">
                  Site Reality &amp; Protection
                </span>
                <p className="text-sm text-ink-700 leading-relaxed bg-brand/5 p-3 rounded-xl border border-brand/20">
                  {current.siteReality}
                </p>
              </div>

              {/* Technical Blueprint Micro-diagram */}
              <div className="p-4 rounded-xl bg-ink-950 text-white font-sans text-xs">
                <div className="flex items-center justify-between text-ink-400 mb-2 border-b border-white/10 pb-2">
                  <span>STAGE METRIC</span>
                  <span className="text-brand font-bold">VERIFIED</span>
                </div>
                <div className="space-y-1.5 text-ink-300">
                  <div className="flex justify-between">
                    <span>Supervisor:</span>
                    <span className="text-white font-medium">In-house notjustlines Engineer</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payment gate:</span>
                    <span className="text-white font-medium">Tied to milestone completion</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Verification:</span>
                    <span className="text-white font-medium">Weekly WhatsApp photos/video</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-line text-center">
              <a
                href="#design"
                className="text-xs font-bold text-brand-700 hover:text-ink-950 inline-flex items-center gap-1 transition-colors"
              >
                <span>Read detailed services breakdown</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </div>

        </Reveal>

      </div>
    </section>
  );
}
