import React from 'react';
import { ShieldCheck, Award, Eye, Clock } from 'lucide-react';

export default function TrustMetrics() {
  const metrics = [
    {
      icon: ShieldCheck,
      stat: '100% Turnkey',
      label: 'Single-Point Delivery',
      desc: 'Architecture, structural engineering, and general contracting unified under one master contract.'
    },
    {
      icon: Award,
      stat: 'Cantonments & Prime',
      label: 'Accra Practice Base',
      desc: 'Specialized in high-value residential enclaves, boutique commercial pavilions, and luxury developments.'
    },
    {
      icon: Clock,
      stat: '0% Cost Overrun',
      label: 'Milestone Escrow',
      desc: 'Fixed-schedule payment tranches tied directly to certified engineering laboratory crush tests.'
    },
    {
      icon: Eye,
      stat: 'Diaspora Hub',
      label: 'Weekly 360° Drone Scans',
      desc: 'Complete remote transparency for clients in the UK, US, and Canada via dedicated WhatsApp hotlines.'
    }
  ];

  return (
    <section className="py-12 border-b border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div key={idx} className="flex flex-col gap-2 p-4 rounded-lg bg-[#FAF9F6] border border-stone-200/80">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded bg-amber-500/10 text-amber-700 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} />
                  </div>
                  <span className="font-mono text-sm font-bold text-stone-900 tracking-tight">
                    {m.stat}
                  </span>
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-700 font-semibold mt-1">
                  {m.label}
                </span>
                <p className="text-stone-600 text-xs leading-relaxed font-sans mt-0.5">
                  {m.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
