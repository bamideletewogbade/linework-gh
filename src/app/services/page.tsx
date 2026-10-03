import React from 'react';
import Link from 'next/link';
import { Ruler, HardHat, Sparkles, Box, Globe, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import TurnkeyMatrix from '@/components/TurnkeyMatrix';

export default function ServicesPage() {
  const services = [
    {
      id: 'architecture',
      icon: Ruler,
      num: '01',
      title: 'Architectural Conception & Schematics',
      tagline: 'Passive bioclimatic tropical design, site microclimate orientation, and municipal approvals in Accra.',
      desc: 'We do not design generic glass boxes that overheat under the Ghanaian sun. Every Linework architectural commission begins with rigorous sun-path analysis, passive solar shading calculations, and wind direction studies. We produce comprehensive architectural schematics, permit-ready submission sets, and detailed construction documentation complying with the Ghana National Building Code.',
      deliverables: [
        'Bioclimatic site analysis & orientation schematics',
        'Zoning, planning permits & municipal engineering approvals',
        'Detailed 1:50 architectural construction drawings and joinery schedules',
        'Life-cycle energy modeling and passive ventilation design'
      ]
    },
    {
      id: 'construction',
      icon: HardHat,
      num: '02',
      title: 'Turnkey Construction & General Contracting',
      tagline: 'In-house structural engineering, high-yield rebar placement, and precision concrete execution.',
      desc: 'As an integrated design-build practice, we construct what we design. Linework employs certified structural engineers, master formwork carpenters, and experienced site managers directly. We do not subcontract your project to low-bid intermediaries. From deep foundation piling and post-tensioned slabs to finishing trades, we manage the entire site with single-point contractual accountability.',
      deliverables: [
        'Excavation, earthworks, and reinforced concrete substructures',
        'Post-tensioned slabs, structural steel framing, and shear walls',
        'Independent laboratory crush testing for every concrete batch (C25/C30/C37)',
        'Full MEP (Mechanical, Electrical, Plumbing) integration and testing'
      ]
    },
    {
      id: 'interior',
      icon: Sparkles,
      num: '03',
      title: 'Interior Architecture & Bespoke Millwork',
      tagline: 'Double-height spatial planning, honed microcement surfaces, and custom African hardwood joinery.',
      desc: 'Interior architecture is an inseparable continuation of structural form. Our interior studio crafts seamless transitions between raw board-marked concrete and tactile natural materials—including smoked teak, native Iroko, solid brass hardware, and Italian honed microcement. Every kitchen, wardrobe, floating staircase, and architectural vanity is designed and fabricated in our dedicated workshop.',
      deliverables: [
        'Custom architectural millwork and built-in furniture fabrication',
        'Specialist microcement, polished terrazzo, and natural stone finishes',
        'Architectural lighting design with scene automation and indirect fixtures',
        'Turnkey FF&E (Furniture, Fixtures & Equipment) procurement and curation'
      ]
    },
    {
      id: 'bim',
      icon: Box,
      num: '04',
      title: '3D BIM & Parametric Clash Detection',
      tagline: 'Millimeter pre-construction in digital 3D space before pouring a single cubic meter of concrete.',
      desc: 'Building errors on site cost time and money. We resolve every potential conflict before construction commences by building a complete 3D digital twin of your building in Building Information Modeling (BIM). Structural rebars, HVAC ducts, plumbing runs, and electrical conduits are clash-detected and coordinated to eliminate on-site improvisations and budget variations.',
      deliverables: [
        'LOD 350 / 400 Building Information Modeling (BIM)',
        '3D MEP clash detection and structural coordination reports',
        'Photorealistic CGI visualizations and virtual interactive walkthroughs',
        'As-built digital twin archiving for lifetime post-occupancy facility maintenance'
      ]
    },
    {
      id: 'diaspora',
      icon: Globe,
      num: '05',
      title: 'Diaspora Remote Build Stewardship',
      tagline: 'Total transparency, milestone-locked escrow, and weekly 360° drone photogrammetry for overseas owners.',
      desc: 'Building in Ghana while living in the UK, United States, Canada, or Europe is often fraught with anxiety, contractor unresponsiveness, and lack of visual proof. Linework operates a dedicated Diaspora Build Hub. Every Friday, clients receive high-resolution drone orthomosaics, laboratory material test certificates, and milestone updates directly through their private WhatsApp portal.',
      deliverables: [
        'Weekly 360-degree high-definition drone progress photogrammetry',
        'Milestone-locked payment schedules backed by certified engineer sign-offs',
        'Dedicated WhatsApp hotline for direct video site walk-throughs with the studio principal',
        'Turnkey assistance with legal site title verification and land registry documentation'
      ]
    }
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-700 font-semibold block mb-2">
            Integrated Design-Build Expertise &middot; Accra, Ghana
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight mb-4">
            Turnkey Architectural &amp; Building Capabilities
          </h1>
          <p className="text-stone-600 text-base md:text-lg leading-relaxed font-sans">
            From initial sketch and bioclimatic orientation to general contracting and final interior fit-out, Linework GH delivers complete spatial solutions under single-point legal and structural accountability.
          </p>
        </div>

        {/* Services List Grid */}
        <div className="space-y-12 mb-20">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div 
                key={svc.id} 
                id={svc.id}
                className="bg-white rounded-xl border border-stone-200 p-8 md:p-12 shadow-sm hover:shadow-card transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Info Column */}
                  <div className="lg:col-span-7 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-amber-500/10 text-amber-700 flex items-center justify-center flex-shrink-0">
                        <Icon size={20} />
                      </div>
                      <span className="font-mono text-xs font-bold text-amber-700 tracking-widest uppercase">
                        PILLAR {svc.num} // EXPERTISE
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 tracking-tight">
                      {svc.title}
                    </h2>

                    <p className="text-amber-800/90 font-medium text-sm font-sans leading-relaxed">
                      {svc.tagline}
                    </p>

                    <p className="text-stone-600 text-sm md:text-base font-sans leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>

                  {/* Right Deliverables Column */}
                  <div className="lg:col-span-5 bg-[#FAF9F6] border border-stone-200/80 rounded-lg p-6">
                    <h3 className="font-mono text-xs uppercase tracking-widest text-stone-900 font-bold mb-4 pb-2 border-b border-stone-200">
                      Standard Practice Deliverables
                    </h3>
                    <ul className="space-y-3 font-sans text-xs md:text-sm text-stone-700">
                      {svc.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Turnkey Matrix Comparison Section */}
        <TurnkeyMatrix />

        {/* Bottom CTA Banner */}
        <div className="mt-16 bg-[#0B0E14] text-white rounded-xl p-8 md:p-12 text-center max-w-3xl mx-auto shadow-xl">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400 font-semibold block mb-2">
            Schedule a Preliminary Project Appraisal
          </span>
          <h2 className="font-serif text-3xl font-bold mb-4">
            Ready to Build With Single-Point Accountability?
          </h2>
          <p className="text-stone-300 text-sm md:text-base max-w-xl mx-auto mb-8 font-sans">
            Our principal architects and structural directors review your project requirements and provide a confidential feasibility appraisal within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-mono text-xs uppercase tracking-widest font-bold px-8 py-3.5 rounded transition-colors shadow-sm"
            >
              Start Project Brief &rarr;
            </Link>
            <a
              href="https://wa.me/233256869481"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs uppercase tracking-wider py-3.5 px-6 rounded transition-colors"
            >
              WhatsApp Studio Consultation
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
