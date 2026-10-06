import React from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import HeroPreview from '@/components/HeroPreview';
import ProjectCard from '@/components/ProjectCard';
import BioclimaticDiagram from '@/components/BioclimaticDiagram';
import TurnkeyMatrix from '@/components/TurnkeyMatrix';
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
                Architecture, construction and interiors in Accra. Whether you’re building a home, shaping a workplace or rethinking a room, let’s bring your idea to life.
              </p>

              {/* Primary Calls to Action */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  href="/contact#brief"
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
              <HeroPreview />
            </div>

          </div>
        </div>
      </section>


      <section className="section bg-white" id="services">
        <div className="container-site">
          <span className="eyebrow mb-3">How we can help</span>
          <h2 className="text-display-md font-bold mb-4">What are you planning?</h2>
          <p className="max-w-2xl text-ink-600 mb-8">Start with the part of your project you need help with.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Design a new space', text: 'Turn your ideas into layouts, drawings and a plan for your site.', href: '/services#design' },
              { title: 'Build from your drawings', text: 'Plan the construction, from site preparation to finishing.', href: '/services#construction' },
              { title: 'Create an interior', text: 'Bring layouts, lighting, materials and joinery together.', href: '/services#interiors' },
              { title: 'Renovate or extend', text: 'Rethink a room, finish a building or make space for more.', href: '/services#renovations' },
            ].map(service => <Link key={service.href} href={service.href} className="group rounded-2xl border border-line bg-paper p-5 transition-colors hover:border-brand"><h3 className="text-lg font-bold mb-2">{service.title}</h3><p className="text-sm text-ink-600 mb-4">{service.text}</p><span className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-700">Explore this service<ArrowRight size={16} /></span></Link>)}
          </div>
          <Link href="/services#diaspora" className="mt-5 inline-flex min-h-11 items-center gap-2 font-semibold text-brand-700">Building in Ghana from abroad? Start here<ArrowRight size={16} className="shrink-0" /></Link>
        </div>
      </section>

      <section className="section bg-paper border-y border-line">
        <div className="container-site">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div><span className="eyebrow mb-3">Design inspiration</span><h2 className="text-display-md font-bold">Ideas for your next space</h2></div>
            <Link href="/projects" className="link-arrow min-h-11">Explore more ideas<ArrowRight size={16} /></Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{featuredProjects.map(project => <ProjectCard key={project.id} project={project} />)}</div>
        </div>
      </section>

      <TurnkeyMatrix />
      <section className="container-site py-8 md:py-12">
        <details className="rounded-3xl border border-line bg-white">
          <summary className="cursor-pointer p-5 text-lg font-bold sm:p-7">Designing for shade, airflow and outdoor living</summary>
          <BioclimaticDiagram />
        </details>
      </section>
      <section id="brief" className="pt-4">
        <CtaBand title="Tell us what you want to build." text="Have a plot, a set of drawings or an early idea? Share a few details so we can help you work out the next step." primaryLabel="Start your brief" primaryHref="/contact#brief" />
      </section>
    </div>
  );
}
