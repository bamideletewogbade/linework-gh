import React from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, MapPin } from 'lucide-react';
import Hero3D from '@/components/Hero3D';
import TrustMetrics from '@/components/TrustMetrics';
import ProjectCard from '@/components/ProjectCard';
import BioclimaticDiagram from '@/components/BioclimaticDiagram';
import TurnkeyMatrix from '@/components/TurnkeyMatrix';
import ConversationalBrief from '@/components/ConversationalBrief';
import Reveal from '@/components/ui/Reveal';
import CtaBand from '@/components/ui/CtaBand';
import { PROJECTS } from '@/data/projects';

export default function HomePage() {
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <div className="flex flex-col">
      
      {/* ========================================================
          HERO SECTION (PLAIN ENGLISH + 3D ARCHITECTURAL MODEL)
          ======================================================== */}
      <section className="bg-ink-950 text-white pt-6 pb-16 sm:pt-10 sm:pb-20 md:pt-14 md:pb-24 border-b border-white/10 relative overflow-hidden">
        
        {/* Subtle Background Blueprint Grid */}
        <div className="bg-grid-dark absolute inset-0 opacity-40 pointer-events-none" />

        <div className="container-site relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Copy Column (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              
              {/* Practice Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wider text-brand mb-5 w-max">
                <MapPin size={14} className="text-brand" />
                <span>Accra &middot; Architecture &amp; Construction</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white mb-5">
                We don’t just draw it. <br className="hidden sm:inline" />
                <span className="text-brand">We build it.</span>
              </h1>

              {/* Instant Clarification Subhead */}
              <p className="text-ink-200 text-base sm:text-lg leading-relaxed font-sans max-w-xl mb-7">
                Architecture, construction and interiors in Accra. Tell us about your plot, existing building or early idea, and let’s discuss the right scope for your project.
              </p>

              {/* Primary Calls to Action */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="btn btn-primary"
                >
                  <span>Start your project</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/projects"
                  className="btn btn-outline-light"
                >
                  Explore design ideas
                </Link>
              </div>

              {/* Quick Trust Highlights */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-3 sm:gap-4 text-xs text-ink-300">
                <div>
                  <span className="text-white font-bold block text-base sm:text-lg font-sans">Single Team</span>
                  <span className="text-[11px] text-ink-300">Drawings to Handover</span>
                </div>
                <div className="border-x border-white/10 px-2 sm:px-3">
                  <span className="text-white font-bold block text-base sm:text-lg font-sans">Accra Based</span>
                  <span className="text-[11px] text-ink-300">Projects in Ghana</span>
                </div>
                <div>
                  <span className="text-white font-bold block text-base sm:text-lg font-sans">Plan the Scope</span>
                  <span className="text-[11px] text-ink-300">Design, build or renovate</span>
                </div>
              </div>

            </div>

            {/* Right Three.js 3D Pavilion Viewer (6 cols) */}
            <div className="lg:col-span-6 w-full">
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
      <section className="section bg-white border-b border-line">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <Reveal className="lg:col-span-5 flex flex-col gap-4">
              <span className="eyebrow">
                The studio philosophy
              </span>
              <h2 className="text-display-md font-bold text-ink-900 leading-tight">
                Drawings are promises. We turn them into finished buildings.
              </h2>
              <p className="text-ink-600 text-base leading-relaxed">
                A useful drawing needs a clear path to construction: a defined scope, a realistic budget and people who understand their responsibilities.
              </p>
              <p className="text-ink-600 text-base leading-relaxed">
                notjustlines brings design and construction into the same conversation. Start with what you need, then agree the services, responsibilities and next steps for your project.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="link-arrow"
                >
                  <span>Learn more about how we work</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <Reveal delay={60} className="bg-paper border border-line p-6 rounded-3xl hover:border-brand/40 transition-colors">
                <span className="text-xs font-semibold text-brand-700 block mb-2">01 // PRE-CONSTRUCTION</span>
                <h3 className="text-xl font-bold text-ink-900 mb-2">3D Design &amp; Clear BOQ</h3>
                <p className="text-ink-600 text-xs sm:text-sm leading-relaxed">
                  Discuss layouts, specifications and a bill of quantities before committing to construction. A visual model can help you review the design.
                </p>
              </Reveal>

              <Reveal delay={120} className="bg-paper border border-line p-6 rounded-3xl hover:border-brand/40 transition-colors">
                <span className="text-xs font-semibold text-brand-700 block mb-2">02 // TROPICAL ARCHITECTURE</span>
                <h3 className="text-xl font-bold text-ink-900 mb-2">Built for Accra Heat</h3>
                <p className="text-ink-600 text-xs sm:text-sm leading-relaxed">
                  Explore shading, ventilation and material choices in relation to the site, orientation and how you use each room.
                </p>
              </Reveal>

              <Reveal delay={180} className="bg-paper border border-line p-6 rounded-3xl hover:border-brand/40 transition-colors">
                <span className="text-xs font-semibold text-brand-700 block mb-2">03 // CONSTRUCTION DISCIPLINE</span>
                <h3 className="text-xl font-bold text-ink-900 mb-2">Plan Site Supervision</h3>
                <p className="text-ink-600 text-xs sm:text-sm leading-relaxed">
                  Agree who supervises the work, which inspections are needed and how decisions and changes will be recorded.
                </p>
              </Reveal>

              <Reveal delay={240} className="bg-paper border border-line p-6 rounded-3xl hover:border-brand/40 transition-colors">
                <span className="text-xs font-semibold text-brand-700 block mb-2">04 // BUILDING FROM ABROAD</span>
                <h3 className="text-xl font-bold text-ink-900 mb-2">Building from Abroad</h3>
                <p className="text-ink-600 text-xs sm:text-sm leading-relaxed">
                  Discuss your time zone, preferred contact method and reporting needs before agreeing a project schedule.
                </p>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          SELECTED BUILT WORKS SHOWCASE
          ======================================================== */}
      <section className="section bg-paper border-b border-line">
        <div className="container-site">
          
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="eyebrow mb-2">
                Illustrative projects
              </span>
              <h2 className="text-display-md font-bold text-ink-900 tracking-tight">
                Ideas for your next space
              </h2>
            </div>

            <Link
              href="/projects"
              className="link-arrow group"
            >
              <span>Explore all examples</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProjects.map((project, idx) => (
              <Reveal key={project.id} delay={idx * 100}>
                <ProjectCard project={project} />
              </Reveal>
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
      <section className="section bg-white" id="brief">
        <div className="container-site">
          
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow mb-3 mx-auto">
              Start your project
            </span>
            <h2 className="text-display-md font-bold text-ink-900 tracking-tight mb-4">
              Tell us what you want to build
            </h2>
            <p className="text-ink-600 text-base md:text-lg leading-relaxed">
              Prepare your project brief in four short steps, review it, then send it to the studio by WhatsApp or email.
            </p>
          </Reveal>

          <ConversationalBrief />

        </div>
      </section>

      {/* Closing Banner */}
      <CtaBand
        title={
          <>
            Got a plot in Accra? <br className="hidden sm:inline" />
            Let’s review it together.
          </>
        }
        text="Whether you have site drawings or are starting from scratch, we’re happy to review your plot and offer honest guidance."
        primaryLabel="Request a conversation"
        primaryHref="/contact"
        whatsappMessage="Hi notjustlines, I have a plot in Accra and would like to schedule a consultation."
      />

    </div>
  );
}
