'use client';

import React, { useState } from 'react';
import { Sun, Wind, Droplets, Shield } from 'lucide-react';

export default function BioclimaticDiagram() {
  const [activePin, setActivePin] = useState<number>(1);

  const points = [
    {
      id: 1,
      title: 'Solar Brise-Soleil Louvers',
      category: 'Thermal Shading',
      icon: Sun,
      desc: 'Precision-angled vertical native Iroko and teak timber louvers that block 80% of peak equatorial heat gain while flooding interior spaces with soft, glare-free diffused daylight.'
    },
    {
      id: 2,
      title: 'Thermal Mass Concrete Core',
      category: 'Passive Heat Sink',
      icon: Shield,
      desc: 'High-density monolithic board-marked concrete absorbs daytime thermal radiation and releases stored coolness during Accra’s nocturnal sea breezes.'
    },
    {
      id: 3,
      title: 'Aero-Stack Convection Voids',
      category: 'Natural Ventilation',
      icon: Wind,
      desc: 'Double-height central lightwells create a natural chimney stack effect, exhausting rising warm air through high-level louvers and pulling cool ground-level air through the living rooms.'
    },
    {
      id: 4,
      title: 'Evaporative Microclimate Pools',
      category: 'Passive Pre-Cooling',
      icon: Droplets,
      desc: 'Reflecting pools sited along prevailing southwest coastal breeze vectors pre-cool ambient air by 3–4°C before it crosses open-pocket sliding doors into the residence.'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-700 font-semibold block mb-2">
            Climatic Engineering &middot; Tropical Modernism
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-4">
            Passive Bioclimatic Architecture
          </h2>
          <p className="text-stone-600 text-base leading-relaxed font-sans">
            Designing in Accra demands rigorous environmental responsiveness. We do not rely solely on energy-intensive mechanical air conditioning. Every Linework villa functions as a passive climate machine engineered for thermal comfort, natural cross-ventilation, and longevity.
          </p>
        </div>

        {/* Interactive Diagram Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAF9F6] border border-stone-200 rounded-xl p-6 md:p-10 shadow-sm">
          
          {/* Visual Technical Diagram (Left: 7 cols) */}
          <div className="lg:col-span-7 bg-white border border-stone-200 rounded-lg p-4 sm:p-6 shadow-sm">
            <svg viewBox="0 0 500 360" className="w-full h-auto block" role="img" aria-label="Bioclimatic Architectural Section Diagram">
              <defs>
                <pattern id="lightBlueprintGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(17, 19, 23, 0.05)" strokeWidth="0.8"/>
                </pattern>
              </defs>
              <rect width="500" height="360" fill="url(#lightBlueprintGrid)" />

              {/* Ground Datum */}
              <line x1="20" y1="300" x2="480" y2="300" stroke="#78716C" strokeWidth="2.5"/>
              <line x1="20" y1="305" x2="480" y2="305" stroke="#A8A29E" strokeWidth="1" strokeDasharray="4 4"/>

              {/* Structural Slabs */}
              <rect x="70" y="280" width="340" height="20" fill="#E7E5E4" stroke="#44403C" strokeWidth="1.5"/>
              <rect x="70" y="180" width="360" height="16" fill="#E7E5E4" stroke="#44403C" strokeWidth="1.5"/>
              <rect x="50" y="80" width="400" height="18" fill="#D6D3D1" stroke="#B45309" strokeWidth="2"/>

              {/* Concrete Thermal Core */}
              <rect x="90" y="98" width="80" height="182" fill="rgba(180, 83, 9, 0.06)" stroke="#78716C" strokeWidth="1.2"/>

              {/* Convective Airflow Stream */}
              <path d="M 260 270 Q 290 220 310 160 T 330 90" fill="none" stroke="#0284C7" strokeWidth="2.5" strokeDasharray="6 4">
                <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.8s" repeatCount="indefinite"/>
              </path>
              <polygon points="330,86 324,96 336,96" fill="#0284C7" />

              {/* Solar Radiation Angle */}
              <path d="M 440 20 L 380 80" stroke="#D97706" strokeWidth="2" strokeDasharray="4 3"/>
              <path d="M 470 40 L 410 100" stroke="#D97706" strokeWidth="2" strokeDasharray="4 3"/>
              <text x="350" y="45" fill="#D97706" fontFamily="'JetBrains Mono', monospace" fontSize="9" fontWeight="bold">80% SOLAR DEFLECTION</text>

              {/* Vertical Louver Timber Slats */}
              <g stroke="#B45309" strokeWidth="3">
                <line x1="390" y1="98" x2="390" y2="180"/>
                <line x1="400" y1="98" x2="400" y2="180"/>
                <line x1="410" y1="98" x2="410" y2="180"/>
                <line x1="420" y1="98" x2="420" y2="180"/>
              </g>

              {/* Evaporative Pool Basin */}
              <rect x="290" y="294" width="130" height="8" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.2"/>
              <text x="300" y="322" fill="#0284C7" fontFamily="'JetBrains Mono', monospace" fontSize="9" fontWeight="bold">EVAPORATIVE POOL HEATSINK</text>

              {/* Hotspot 1: Brise-Soleil */}
              <g className="cursor-pointer" onClick={() => setActivePin(1)}>
                <circle cx="405" cy="140" r="24" fill="transparent" />
                <circle cx="405" cy="140" r="14" fill={activePin === 1 ? 'rgba(217, 119, 6, 0.25)' : 'rgba(217, 119, 6, 0.1)'} stroke="#D97706" strokeWidth={activePin === 1 ? 2.5 : 1.5} />
                <circle cx="405" cy="140" r="5" fill="#D97706"/>
                <text x="402" y="143" fill="#FFFFFF" fontFamily="'JetBrains Mono', monospace" fontSize="9" fontWeight="bold">1</text>
              </g>

              {/* Hotspot 2: Thermal Mass */}
              <g className="cursor-pointer" onClick={() => setActivePin(2)}>
                <circle cx="130" cy="190" r="24" fill="transparent" />
                <circle cx="130" cy="190" r="14" fill={activePin === 2 ? 'rgba(68, 64, 60, 0.25)' : 'rgba(68, 64, 60, 0.1)'} stroke="#44403C" strokeWidth={activePin === 2 ? 2.5 : 1.5} />
                <circle cx="130" cy="190" r="5" fill="#44403C"/>
                <text x="127" y="193" fill="#FFFFFF" fontFamily="'JetBrains Mono', monospace" fontSize="9" fontWeight="bold">2</text>
              </g>

              {/* Hotspot 3: Stack Effect */}
              <g className="cursor-pointer" onClick={() => setActivePin(3)}>
                <circle cx="280" cy="190" r="24" fill="transparent" />
                <circle cx="280" cy="190" r="14" fill={activePin === 3 ? 'rgba(2, 132, 199, 0.25)' : 'rgba(2, 132, 199, 0.1)'} stroke="#0284C7" strokeWidth={activePin === 3 ? 2.5 : 1.5} />
                <circle cx="280" cy="190" r="5" fill="#0284C7"/>
                <text x="277" y="193" fill="#FFFFFF" fontFamily="'JetBrains Mono', monospace" fontSize="9" fontWeight="bold">3</text>
              </g>

              {/* Hotspot 4: Microclimate Pool */}
              <g className="cursor-pointer" onClick={() => setActivePin(4)}>
                <circle cx="350" cy="298" r="24" fill="transparent" />
                <circle cx="350" cy="298" r="14" fill={activePin === 4 ? 'rgba(2, 132, 199, 0.25)' : 'rgba(2, 132, 199, 0.1)'} stroke="#0284C7" strokeWidth={activePin === 4 ? 2.5 : 1.5} />
                <circle cx="350" cy="298" r="5" fill="#0284C7"/>
                <text x="347" y="301" fill="#FFFFFF" fontFamily="'JetBrains Mono', monospace" fontSize="9" fontWeight="bold">4</text>
              </g>
            </svg>
          </div>

          {/* Hotspot Cards List (Right: 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {points.map((pt) => {
              const Icon = pt.icon;
              const isActive = activePin === pt.id;
              return (
                <div
                  key={pt.id}
                  onClick={() => setActivePin(pt.id)}
                  className={`p-4 rounded-lg border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white border-amber-600 shadow-sm ring-1 ring-amber-600'
                      : 'bg-white/60 border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-stone-900 text-white font-mono text-[10px] font-bold flex items-center justify-center">
                        {pt.id}
                      </span>
                      <h4 className="font-bold text-sm text-stone-900">{pt.title}</h4>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                      {pt.category}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans pl-7">
                    {pt.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
