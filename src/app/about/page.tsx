import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Compass, Users, MapPin, ArrowRight, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-700 font-semibold block mb-2">
            The Studio Practice &middot; Founded in Accra
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight mb-4">
            Drawn with Intent. Built to Last.
          </h1>
          <p className="text-stone-600 text-base md:text-lg leading-relaxed font-sans">
            Linework GH is an architectural design and general construction practice founded on a simple principle: high-concept tropical design must be executed with uncompromising structural discipline.
          </p>
        </div>

        {/* Feature Image */}
        <div className="relative aspect-[21/9] w-full rounded-xl overflow-hidden border border-stone-200 shadow-md mb-16 bg-stone-100">
          <Image
            src="/assets/craft-studio.jpg"
            alt="Linework Architectural Studio & Drafting Atelier"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 text-white font-mono text-xs uppercase tracking-wider">
            Linework Atelier &middot; Physical Scale Modeling &amp; Material Testing &middot; Accra
          </div>
        </div>

        {/* The Philosophy: Not Just Lines */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-700 font-bold">
              The Genesis &middot; Not Just Lines
            </span>
            <h2 className="font-serif text-3xl font-bold text-stone-900 tracking-tight">
              Why We Refuse to Be a Traditional &ldquo;Paper-Only&rdquo; Studio
            </h2>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-sans">
              Our name originates from a critique of the architectural profession in West Africa. Too often, architects draw beautiful lines on CAD paper, collect design fees, and leave clients at the mercy of general contractors who fail to interpret complex details or cut material standards.
            </p>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-sans">
              At Linework, we believe architecture is <strong>not just lines</strong>. It is concrete compression strength, thermal mass regulation, joinery tolerances, and turnkey delivery. We established our practice as a unified design-build company to retain absolute quality control over every cubic meter poured.
            </p>
          </div>

          <div className="lg:col-span-7 bg-white rounded-xl border border-stone-200 p-8 md:p-10 shadow-sm flex flex-col gap-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-stone-900 font-bold pb-3 border-b border-stone-100">
              The Four Studio Commitments
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 rounded bg-amber-500/10 text-amber-700 font-mono text-xs font-bold flex items-center justify-center flex-shrink-0">
                  01
                </span>
                <div>
                  <h4 className="font-serif text-lg font-bold text-stone-900 mb-1">Climatic Honesty</h4>
                  <p className="text-stone-600 text-sm leading-relaxed font-sans">
                    We design buildings tailored to the equatorial coastal climate of Accra—integrating solar brise-soleil, cross-ventilation, and thermal mass to achieve natural thermal comfort.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-8 h-8 rounded bg-amber-500/10 text-amber-700 font-mono text-xs font-bold flex items-center justify-center flex-shrink-0">
                  02
                </span>
                <div>
                  <h4 className="font-serif text-lg font-bold text-stone-900 mb-1">Material Integrity</h4>
                  <p className="text-stone-600 text-sm leading-relaxed font-sans">
                    We celebrate authentic materials: board-marked concrete, native sustainably harvested Iroko and teak, perforated terracotta, and solid brass channel reveals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-8 h-8 rounded bg-amber-500/10 text-amber-700 font-mono text-xs font-bold flex items-center justify-center flex-shrink-0">
                  03
                </span>
                <div>
                  <h4 className="font-serif text-lg font-bold text-stone-900 mb-1">Single-Point Turnkey Accountability</h4>
                  <p className="text-stone-600 text-sm leading-relaxed font-sans">
                    No finger-pointing between architects and external building contractors. Our integrated team oversees design, municipal engineering permits, and general construction under one unified contract.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-8 h-8 rounded bg-amber-500/10 text-amber-700 font-mono text-xs font-bold flex items-center justify-center flex-shrink-0">
                  04
                </span>
                <div>
                  <h4 className="font-serif text-lg font-bold text-stone-900 mb-1">Radical Remote Transparency</h4>
                  <p className="text-stone-600 text-sm leading-relaxed font-sans">
                    We empower Ghanaian diaspora clients living in the UK, US, and Canada with weekly 360° drone scans, milestone escrow schedules, and certified third-party laboratory crush test reports.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Studio Leadership & Discipline */}
        <div className="bg-white rounded-xl border border-stone-200 p-8 md:p-12 shadow-sm mb-20">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-700 font-bold block mb-1">
              Integrated Practice Leadership
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-stone-900">
              Convergence of Design &amp; Civil Engineering
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed mt-2 font-sans">
              Our studio operates not as disjointed silos, but as a multidisciplinary atelier where design architects, BIM specialists, and licensed civil engineers collaborate from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-[#FAF9F6] border border-stone-200">
              <span className="font-mono text-xs uppercase tracking-wider text-amber-700 font-bold block mb-2">PRACTICE LEADERSHIP</span>
              <h4 className="font-serif text-xl font-bold text-stone-900 mb-2">Architectural Atelier</h4>
              <p className="text-stone-600 text-xs leading-relaxed font-sans">
                Leading schematic design, tropical bioclimatic orientation, volumetric proportion, and luxury interior spatial planning.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#FAF9F6] border border-stone-200">
              <span className="font-mono text-xs uppercase tracking-wider text-amber-700 font-bold block mb-2">ENGINEERING DIVISION</span>
              <h4 className="font-serif text-xl font-bold text-stone-900 mb-2">Structural &amp; Civil Works</h4>
              <p className="text-stone-600 text-xs leading-relaxed font-sans">
                Overseeing structural calculations, post-tensioned slab designs, seismic zone compliance, and continuous on-site concrete batch testing.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#FAF9F6] border border-stone-200">
              <span className="font-mono text-xs uppercase tracking-wider text-amber-700 font-bold block mb-2">DIGITAL &amp; FABRICATION</span>
              <h4 className="font-serif text-xl font-bold text-stone-900 mb-2">BIM &amp; Bespoke Millwork</h4>
              <p className="text-stone-600 text-xs leading-relaxed font-sans">
                Managing 3D parametric clash detection, drone photogrammetry, and custom timber cabinetry fabrication in our Accra workshop.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#0B0E14] text-white rounded-xl p-8 md:p-12 text-center max-w-3xl mx-auto shadow-xl">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400 font-semibold block mb-2">
            Start a Conversation With Our Studio
          </span>
          <h2 className="font-serif text-3xl font-bold mb-4">
            Visiting Accra or Planning a Build From Abroad?
          </h2>
          <p className="text-stone-300 text-sm md:text-base max-w-xl mx-auto mb-8 font-sans">
            Schedule an in-person meeting at our Accra atelier or an introductory video consultation to discuss your land, budget, and timeline.
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
              WhatsApp Studio (+233 25 686 9481)
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
