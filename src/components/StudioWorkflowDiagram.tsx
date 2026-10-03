'use client';

import React, { useState } from 'react';
import { Layers, CheckCircle2, ShieldAlert, ArrowRight, RefreshCw } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

interface ComparisonItem {
  id: string;
  stageTitle: string;
  traditionalWay: {
    title: string;
    description: string;
    risk: string;
  };
  lineworkWay: {
    title: string;
    description: string;
    benefit: string;
  };
}

const COMPARISONS: ComparisonItem[] = [
  {
    id: 'stage-1',
    stageTitle: '01. Design & Quantities',
    traditionalWay: {
      title: 'Drawings detached from budget',
      description: 'Architect designs without knowing live market prices for cement, rebar, or sand. Drawings look stunning on paper but cost 2x more than your budget to build.',
      risk: 'Client runs out of money before roofing or gets stuck with an uncompleted shell.',
    },
    lineworkWay: {
      title: 'Design tied directly to a real BOQ',
      description: 'Our in-house architects design with our site engineers and quantity estimators in the room. Every line drawn is quantified into real bags of cement, tonnes of steel, and joinery costs.',
      benefit: 'Budget predictability from day one with no inflated surprises.',
    },
  },
  {
    id: 'stage-2',
    stageTitle: '02. Permitting & Municipal Assembly',
    traditionalWay: {
      title: 'Client left to chase officials',
      description: 'Architect stamps the drawing and hands it over to you. You are left driving between the Municipal Assembly, Town and Country Planning, and EPA offices alone.',
      risk: 'Months of administrative delay or unapproved building fines and stop-work orders.',
    },
    lineworkWay: {
      title: 'Complete permit management',
      description: 'We prepare the full architectural, structural, and fire/MEP engineering sets and handle the submission and follow-ups with the Municipal Assembly until the permit is granted.',
      benefit: 'Lawful construction with proper documentation and clear title alignment.',
    },
  },
  {
    id: 'stage-3',
    stageTitle: '03. Site Workmanship & Quality',
    traditionalWay: {
      title: 'Masons cut corners to pad margin',
      description: 'Contractor buys cheap uncertified rebar, skimps on cement ratios in blockwork, or skips concrete cube tests on critical slab decking pours to increase profit.',
      risk: 'Early structural cracks, sagging slabs, wall dampness, and costly repairs.',
    },
    lineworkWay: {
      title: 'Our own engineers on site daily',
      description: 'Our structural engineers supervise setting out, steel spacing, and column alignment directly. We conduct slump tests and concrete cube crushing tests at key pours.',
      benefit: 'Certified structural integrity built to withstand coastal and Accra conditions.',
    },
  },
  {
    id: 'stage-4',
    stageTitle: '04. Building from Abroad',
    traditionalWay: {
      title: 'Family tension & blind transfers',
      description: 'Sending money to family members or freelance contractors with fuzzy receipts and low-resolution photos taken from the best angles to hide bad work.',
      risk: 'Strained family relationships, diverted funds, and stalled projects.',
    },
    lineworkWay: {
      title: 'WhatsApp logs & milestone release',
      description: 'Direct communication with your designated project manager. High-res weekly video walkthroughs and photos before each scheduled milestone payment is invoiced.',
      benefit: 'Total clarity whether you are in London, Toronto, New York, or Kumasi.',
    },
  },
];

export default function StudioWorkflowDiagram() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const active = COMPARISONS[activeTab];

  return (
    <section className="section bg-white border-y border-line" id="model">
      <div className="container-site">
        
        {/* Section Header */}
        <Reveal className="max-w-3xl mb-12">
          <span className="eyebrow mb-3">The integrated studio model</span>
          <h2 className="text-display-md font-bold text-ink-900 mb-4">
            Why two separate contracts always break down.
          </h2>
          <p className="text-ink-600 text-base md:text-lg leading-relaxed">
            When you hire an architect separately from a building contractor in Accra, you inherit the gap between drawings and reality. Here is how Linework unites the entire process.
          </p>
        </Reveal>

        {/* Tab selector */}
        <Reveal delay={60} className="mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 snap-row sm:pb-0 sm:overflow-visible">
            {COMPARISONS.map((item, idx) => {
              const isSelected = activeTab === idx;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`min-h-[2.75rem] shrink-0 snap-start px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-ink-950 text-white shadow-sm'
                      : 'bg-paper text-ink-700 hover:text-ink-950 hover:bg-sand/60 border border-line'
                  }`}
                  aria-pressed={isSelected}
                >
                  {item.stageTitle}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Comparative Split Diagram Card */}
        <Reveal delay={120} className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* Traditional Silo Model */}
          <div className="p-7 sm:p-9 rounded-3xl bg-paper border border-line flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-line">
                <span className="text-xs font-bold uppercase tracking-wider text-ink-500">
                  The Fragmented Model
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ink-100 text-ink-700 text-xs font-semibold">
                  <ShieldAlert size={14} />
                  <span>Divided blame</span>
                </span>
              </div>

              <h3 className="text-xl font-bold text-ink-900 mb-2">
                {active.traditionalWay.title}
              </h3>
              <p className="text-ink-600 text-sm leading-relaxed mb-6">
                {active.traditionalWay.description}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-ink-100 border border-ink-200 text-xs text-ink-800">
              <strong className="block font-bold text-ink-950 mb-0.5">Common Risk:</strong>
              <span>{active.traditionalWay.risk}</span>
            </div>
          </div>

          {/* Linework Integrated Studio Model */}
          <div className="p-7 sm:p-9 rounded-3xl bg-ink-950 text-white border border-ink-800 flex flex-col justify-between relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-44 h-44 bg-brand/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-brand">
                  The Linework Single-Loop
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand/20 text-brand text-xs font-semibold">
                  <CheckCircle2 size={14} />
                  <span>Single accountability</span>
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {active.lineworkWay.title}
              </h3>
              <p className="text-ink-300 text-sm leading-relaxed mb-6">
                {active.lineworkWay.description}
              </p>
            </div>

            <div className="relative z-10 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-ink-200">
              <strong className="block font-bold text-brand mb-0.5">Studio Guarantee:</strong>
              <span>{active.lineworkWay.benefit}</span>
            </div>
          </div>

        </Reveal>

      </div>
    </section>
  );
}
