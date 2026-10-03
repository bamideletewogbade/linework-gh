import React from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, ArrowUpRight, Compass, ShieldCheck, MapPin } from 'lucide-react';
import Hero3D from '@/components/Hero3D';
import TrustMetrics from '@/components/TrustMetrics';
import ProjectCard from '@/components/ProjectCard';
import BioclimaticDiagram from '@/components/BioclimaticDiagram';
import TurnkeyMatrix from '@/components/TurnkeyMatrix';
import ConversationalBrief from '@/components/ConversationalBrief';
import { PROJECTS } from '@/data/projects';

export default function HomePage() {
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <div className="flex flex-col">
      
      {/* ========================================================
          HERO SECTION (3-SECOND TEST + INTERACTIVE 3D PAVILION)
          ======================================================== */}
      <section className="bg-[#0B0E14] text-white pt-10 pb-16 md:pt-14 md:pb-24 border-b border-white/10 relative overflow-hidden">
        
        {/* Subtle Background Blueprint Grid */}
        <div className="absolute inset-0 bg-dark-grid opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Copy Column (7 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              
              {/* 3-Second Practice Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono tracking-widest uppercase text-amber-400 mb-6 w-max">
                <MapPin size={13} className="text-amber-500" />
                <span>Accra &middot; Design &amp; Turnkey Construction</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white mb-6">
                Architectural Design &amp; Turnkey Construction in Ghana.
              </h1>

              {/* Instant Clarification Subhead */}
              <p className="text-stone-300 text-base md:text-lg leading-relaxed font-sans max-w-xl mb-8">
                Linework GH conceives, engineers, and builds bespoke private residential estates, commercial headquarters, and luxury interiors across Cantonments, Airport Residential, and Greater Accra.
              </p>

              {/* Primary Calls to Action */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-mono text-xs uppercase tracking-widest font-bold px-7 py-4 rounded shadow-lg transition-all duration-200 flex items-center gap-2"
                >
                  <span>Start Project Brief</span>
                  <ArrowRight size={15} />
                </Link>

                <Link
                  href="/projects"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs uppercase tracking-widest font-semibold px-6 py-4 rounded transition-all duration-200"
                >
                  View Built Works
                </Link>

                <a
                  href="https://wa.me/233256869481"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-300 hover:text-white font-mono text-xs uppercase tracking-wider flex items-center gap-1.5 py-2 px-1"
                >
                  <Phone size={14} className="text-amber-500" />
                  <span>Direct WhatsApp</span>
                </a>
              </div>

              {/* Quick Trust Highlights */}
              <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 font-mono text-xs text-stone-400">
                <div>
                  <span className="text-white font-bold block text-base sm:text-lg font-sans">100%</span>
                  <span className="text-[10px] uppercase tracking-wider text-stone-400">Turnkey Accountability</span>
                </div>
                <div className="border-x border-white/10 px-3">
                  <span className="text-white font-bold block text-base sm:text-lg font-sans">Accra</span>
                  <span className="text-[10px] uppercase tracking-wider text-stone-400">Cantonments &amp; Prime</span>
                </div>
                <div>
                  <span className="text-white font-bold block text-base sm:text-lg font-sans">Fixed</span>
                  <span className="text-[10px] uppercase tracking-wider text-stone-400">Milestone Escrow</span>
                </div>
              </div>

            </div>

            {/* Right Three.js 3D Pavilion Viewer (6 cols) */}
            <div className="lg:col-span-6">
              <Hero3D />
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          3-SECOND TRUST METRICS STRIP
          ======================================================== */}
      <TrustMetrics />

      {/* ========================================================
          THE MANIFESTO: NOT JUST LINES
          ======================================================== */}
      <section className="py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-700 font-semibold">
                The Studio Philosophy &middot; Not Just Lines
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 tracking-tight leading-tight">
                Drawings are promises. We turn them into structural reality.
              </h2>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed font-sans">
                In architectural practice, the greatest risk occurs when visionary drawings are handed off to disconnected building contractors. Costs spiral, rebar is downgraded, and designs are compromised.
              </p>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed font-sans">
                Linework was founded in Accra to eliminate this divide. As an integrated design-build practice, our in-house architects, structural engineers, and master builders supervise every phase under one single contract.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="text-amber-700 hover:text-amber-900 font-mono text-xs uppercase tracking-widest font-bold inline-flex items-center gap-1.5"
                >
                  <span>Learn More About Our Practice</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#FAF9F6] border border-stone-200 p-6 rounded-lg">
                <span className="font-mono text-xs font-bold text-amber-700 block mb-2">01 // PRE-CONSTRUCTION</span>
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">Parametric 3D BIM</h3>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Every structural beam, electrical run, and plumbing stack is modeled in 3D BIM clash detection before breaking ground on site.
                </p>
              </div>

              <div className="bg-[#FAF9F6] border border-stone-200 p-6 rounded-lg">
                <span className="font-mono text-xs font-bold text-amber-700 block mb-2">02 // TROPICAL ARCHITECTURE</span>
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">Bioclimatic Engineering</h3>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Native timber brise-soleil, passive stack convection, and cantilevered thermal mass specifically engineered for Accra’s equatorial sun.
                </p>
              </div>

              <div className="bg-[#FAF9F6] border border-stone-200 p-6 rounded-lg">
                <span className="font-mono text-xs font-bold text-amber-700 block mb-2">03 // GENERAL CONTRACTING</span>
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">In-House Master Builders</h3>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Direct site supervision by licensed structural engineers, heavy modular formwork, and certified laboratory concrete testing.
                </p>
              </div>

              <div className="bg-[#FAF9F6] border border-stone-200 p-6 rounded-lg">
                <span className="font-mono text-xs font-bold text-amber-700 block mb-2">04 // REMOTE STEWARDSHIP</span>
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">Diaspora Client Portal</h3>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Weekly 360-degree drone photogrammetry and transparent escrow billing for Ghanaian clients living in the UK, US, and Canada.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          SELECTED BUILT WORKS SHOWCASE
          ======================================================== */}
      <section className="py-20 bg-[#FAF9F6] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-700 font-semibold block mb-2">
                Selected Portfolio &middot; Accra Works
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
                Featured Built Realities
              </h2>
            </div>

            <Link
              href="/projects"
              className="text-stone-900 hover:text-amber-700 font-mono text-xs uppercase tracking-widest font-bold inline-flex items-center gap-2 group"
            >
              <span>View All 6 Projects</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          BIOCLIMATIC ARCHITECTURAL ANATOMY DIAGRAM
          ======================================================== */}
      <BioclimaticDiagram />

      {/* ========================================================
          TURNKEY DESIGN-BUILD MATRIX VS BROKEN MODEL
          ======================================================== */}
      <TurnkeyMatrix />

      {/* ========================================================
          CONVERSATIONAL PROJECT STUDIO BRIEF
          ======================================================== */}
      <section className="py-20 bg-white" id="brief">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-700 font-semibold block mb-2">
              Project Initiation &middot; Step-by-Step
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-4">
              Structure Your Architectural Brief
            </h2>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-sans">
              No generic contact forms. Answer 4 quick questions about your project scope, location, and investment tier to receive a confidential feasibility appraisal.
            </p>
          </div>

          <ConversationalBrief />

        </div>
      </section>

    </div>
  );
}
