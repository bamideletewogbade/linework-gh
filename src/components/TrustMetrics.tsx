import React from 'react';
import { ShieldCheck, MapPin, CheckCircle, Smartphone } from 'lucide-react';
import Reveal from './ui/Reveal';

export default function TrustMetrics() {
  const metrics = [
    {
      icon: ShieldCheck,
      stat: 'Design & build',
      label: 'Single contract',
      desc: 'Drawings, building permits, engineering and construction handled together under one team.',
    },
    {
      icon: MapPin,
      stat: 'Greater Accra',
      label: 'Local expertise',
      desc: 'Deep on-the-ground experience with Municipal Assemblies, local soil, and Accra sub-contractors.',
    },
    {
      icon: CheckCircle,
      stat: 'Stage-by-stage',
      label: 'Clear BOQ',
      desc: 'Fixed bill of quantities before construction starts. Pay in stages tied directly to completed work.',
    },
    {
      icon: Smartphone,
      stat: 'Diaspora ready',
      label: 'Weekly updates',
      desc: 'Live photo and video reports straight to WhatsApp so you see progress even from the UK, US or Canada.',
    },
  ];

  return (
    <section className="py-12 border-b border-line bg-paper">
      <div className="container-site">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <Reveal
                key={idx}
                delay={idx * 60}
                className="flex flex-col gap-2 p-5 rounded-2xl bg-white border border-line shadow-sm hover:border-brand/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand-700 flex items-center justify-center shrink-0">
                    <Icon size={20} />
                  </div>
                  <span className="font-display text-base font-bold text-ink-900 tracking-tight">
                    {m.stat}
                  </span>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-700 mt-1">
                  {m.label}
                </span>
                <p className="text-ink-600 text-xs leading-relaxed">
                  {m.desc}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
