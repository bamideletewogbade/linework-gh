'use client';

import React, { useState } from 'react';
import { Sun, Wind, Droplets, Shield } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

export default function BioclimaticDiagram() {
  const [activePin, setActivePin] = useState<number>(1);

  const points = [
    {
      id: 1,
      title: 'Timber sun louvres',
      category: 'Sun shading',
      icon: Sun,
      desc: 'Explore louvre orientation, spacing and materials to balance shade, privacy and daylight.',
    },
    {
      id: 2,
      title: 'Deep concrete overhangs',
      category: 'Shading',
      icon: Shield,
      desc: 'Consider the depth and position of overhangs in relation to the sun, openings and the use of each room.',
    },
    {
      id: 3,
      title: 'Natural cross-ventilation',
      category: 'Airflow',
      icon: Wind,
      desc: 'Review openings and room connections against the available breeze, privacy needs and site conditions.',
    },
    {
      id: 4,
      title: 'Courtyard & water features',
      category: 'Outdoor space',
      icon: Droplets,
      desc: 'Consider outdoor space, planting and water features alongside humidity, maintenance and how the courtyard will be used.',
    },
  ];

  return (
    <section className="section bg-paper border-b border-line">
      <div className="container-site">
        
        {/* Section Header */}
        <Reveal className="max-w-3xl mb-12">
          <span className="eyebrow mb-3">Tropical architecture</span>
          <h2 className="text-display-md font-bold text-ink-900 mb-4">
            Built for Accra heat.
          </h2>
          <p className="text-ink-600 text-base md:text-lg leading-relaxed">
            Explore design choices for shade, airflow and outdoor space. This diagram illustrates ideas to assess for a particular site; it does not predict indoor temperatures or energy savings.
          </p>
        </Reveal>

        {/* Interactive Diagram Container */}
        <Reveal delay={120} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-line rounded-3xl p-6 md:p-10 shadow-sm">
          
          {/* Visual Technical Diagram (Left: 7 cols) */}
          <div className="lg:col-span-7 bg-paper border border-line rounded-2xl p-4 sm:p-6 shadow-sm overflow-hidden">
            <svg viewBox="0 0 500 360" className="w-full h-auto block" role="img" aria-label="Bioclimatic Architectural Section Diagram">
              <defs>
                <pattern id="lightBlueprintGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(20, 19, 15, 0.05)" strokeWidth="0.8"/>
                </pattern>
              </defs>
              <rect width="500" height="360" fill="url(#lightBlueprintGrid)" />

              {/* Ground Datum */}
              <line x1="20" y1="300" x2="480" y2="300" stroke="#14130F" strokeWidth="2.5"/>
              <line x1="20" y1="305" x2="480" y2="305" stroke="#716F68" strokeWidth="1" strokeDasharray="4 4"/>

              {/* Structural Slabs */}
              <rect x="70" y="280" width="340" height="20" fill="#E8E5DE" stroke="#2B2A25" strokeWidth="1.5"/>
              <rect x="70" y="180" width="360" height="16" fill="#E8E5DE" stroke="#2B2A25" strokeWidth="1.5"/>
              <rect x="50" y="80" width="400" height="18" fill="#D4CFC4" stroke="#E8A33D" strokeWidth="2"/>

              {/* Concrete Thermal Core */}
              <rect x="90" y="98" width="80" height="182" fill="rgba(232, 163, 61, 0.08)" stroke="#716F68" strokeWidth="1.2"/>

              {/* Convective Airflow Stream */}
              <path d="M 260 270 Q 290 220 310 160 T 330 90" fill="none" stroke="#2B2A25" strokeWidth="2.5" strokeDasharray="6 4">
                <animate attributeName="stroke-dashoffset" from="20" to="0" dur="2s" repeatCount="indefinite"/>
              </path>
              <polygon points="330,86 324,96 336,96" fill="#2B2A25" />

              {/* Solar Radiation Angle */}
              <path d="M 440 20 L 380 80" stroke="#E8A33D" strokeWidth="2" strokeDasharray="4 3"/>
              <path d="M 470 40 L 410 100" stroke="#E8A33D" strokeWidth="2" strokeDasharray="4 3"/>
              <text x="350" y="45" fill="#B87314" fontSize="10" fontWeight="bold">SHADED DAYLIGHT</text>

              {/* Vertical Louver Timber Slats */}
              <g stroke="#E8A33D" strokeWidth="3">
                <line x1="390" y1="98" x2="390" y2="180"/>
                <line x1="400" y1="98" x2="400" y2="180"/>
                <line x1="410" y1="98" x2="410" y2="180"/>
                <line x1="420" y1="98" x2="420" y2="180"/>
              </g>

              {/* Evaporative Pool Basin */}
              <rect x="290" y="294" width="130" height="8" fill="#F0EDE4" stroke="#14130F" strokeWidth="1.2"/>
              <text x="300" y="322" fill="#716F68" fontSize="10" fontWeight="bold">COURTYARD POOL</text>

              {/* Hotspot 1: Louvres */}
              <g className="cursor-pointer group" onClick={() => setActivePin(1)} tabIndex={0} role="button" aria-label="Timber louvres">
                <circle cx="405" cy="140" r="24" fill="transparent" />
                <circle cx="405" cy="140" r="14" fill={activePin === 1 ? 'rgba(232, 163, 61, 0.3)' : 'rgba(232, 163, 61, 0.15)'} stroke="#E8A33D" strokeWidth={activePin === 1 ? 2.5 : 1.5} className="transition-all duration-300" />
                <circle cx="405" cy="140" r="5" fill="#E8A33D"/>
                <text x="402" y="143" fill="#14130F" fontSize="9" fontWeight="bold">1</text>
              </g>

              {/* Hotspot 2: Overhangs */}
              <g className="cursor-pointer group" onClick={() => setActivePin(2)} tabIndex={0} role="button" aria-label="Concrete overhangs">
                <circle cx="130" cy="190" r="24" fill="transparent" />
                <circle cx="130" cy="190" r="14" fill={activePin === 2 ? 'rgba(43, 42, 37, 0.25)' : 'rgba(43, 42, 37, 0.1)'} stroke="#2B2A25" strokeWidth={activePin === 2 ? 2.5 : 1.5} className="transition-all duration-300" />
                <circle cx="130" cy="190" r="5" fill="#2B2A25"/>
                <text x="127" y="193" fill="#14130F" fontSize="9" fontWeight="bold">2</text>
              </g>

              {/* Hotspot 3: Stack Airflow */}
              <g className="cursor-pointer group" onClick={() => setActivePin(3)} tabIndex={0} role="button" aria-label="Cross-ventilation">
                <circle cx="280" cy="190" r="24" fill="transparent" />
                <circle cx="280" cy="190" r="14" fill={activePin === 3 ? 'rgba(232, 163, 61, 0.3)' : 'rgba(232, 163, 61, 0.15)'} stroke="#E8A33D" strokeWidth={activePin === 3 ? 2.5 : 1.5} className="transition-all duration-300" />
                <circle cx="280" cy="190" r="5" fill="#E8A33D"/>
                <text x="277" y="193" fill="#14130F" fontSize="9" fontWeight="bold">3</text>
              </g>

              {/* Hotspot 4: Water Pool */}
              <g className="cursor-pointer group" onClick={() => setActivePin(4)} tabIndex={0} role="button" aria-label="Pool cooling">
                <circle cx="350" cy="298" r="24" fill="transparent" />
                <circle cx="350" cy="298" r="14" fill={activePin === 4 ? 'rgba(43, 42, 37, 0.25)' : 'rgba(43, 42, 37, 0.1)'} stroke="#2B2A25" strokeWidth={activePin === 4 ? 2.5 : 1.5} className="transition-all duration-300" />
                <circle cx="350" cy="298" r="5" fill="#2B2A25"/>
                <text x="347" y="301" fill="#14130F" fontSize="9" fontWeight="bold">4</text>
              </g>
            </svg>
          </div>

          {/* Hotspot Cards List (Right: 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {points.map((pt) => {
              const Icon = pt.icon;
              const isActive = activePin === pt.id;
              return (
                <button
                  key={pt.id}
                  type="button"
                  onClick={() => setActivePin(pt.id)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 ${
                    isActive
                      ? 'bg-paper border-brand shadow-sm ring-1 ring-brand'
                      : 'bg-white border-line hover:border-ink-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2.5">
                      <span className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center transition-colors ${
                        isActive ? 'bg-brand text-ink-950' : 'bg-ink-100 text-ink-800'
                      }`}>
                        {pt.id}
                      </span>
                      <h3 className="font-bold text-sm text-ink-900">{pt.title}</h3>
                    </div>
                    <span className="text-xs font-semibold text-brand-700 bg-brand/10 px-2.5 py-0.5 rounded-full">
                      {pt.category}
                    </span>
                  </div>
                  <p className="text-xs text-ink-600 leading-relaxed pl-8">
                    {pt.desc}
                  </p>
                </button>
              );
            })}
          </div>

        </Reveal>

      </div>
    </section>
  );
}
