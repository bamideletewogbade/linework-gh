import React from 'react';
import { ShieldCheck, MapPin, CheckCircle, Smartphone } from 'lucide-react';
import Reveal from './ui/Reveal';

export default function TrustMetrics() {
  const metrics = [
    {
      icon: ShieldCheck,
      stat: 'Design & build',
      label: 'Discuss the scope',
      desc: 'Start a conversation about the design and construction services your project needs.',
    },
    {
      icon: MapPin,
      stat: 'Greater Accra',
      label: 'Accra based',
      desc: 'Share your site location so access, context and project requirements can be discussed.',
    },
    {
      icon: CheckCircle,
      stat: 'Stage-by-stage',
      label: 'Plan the budget',
      desc: 'Agree specifications, costs and payment terms as part of the project scope.',
    },
    {
      icon: Smartphone,
      stat: 'Building from abroad',
      label: 'Stay in touch',
      desc: 'Discuss your time zone, contact preferences and the reporting you need.',
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
