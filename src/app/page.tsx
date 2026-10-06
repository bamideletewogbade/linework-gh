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
      {/* Dark backing so the sheet's rounded corners never show paper behind them */}
      <div className="bg-ink-950">
      <section className="hero-stage relative isolate flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden bg-ink-950 text-white lg:min-h-[calc(100svh-72px)]">

        {/* Subtle Background Blueprint Grid */}
        <div className="bg-grid-dark absolute inset-0 opacity-40 pointer-events-none" />

        <div className="container-site relative z-10 flex flex-1 flex-col">

            {/* Copy column: left half on desktop, vertically centred in the screen */}
            <div className="my-auto flex flex-col justify-center py-8 sm:py-12 lg:w-1/2 lg:pr-10">

              {/* Practice Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl sm:rounded-full bg-white/10 border border-white/15 text-[11px] sm:text-xs leading-snug font-semibold uppercase tracking-wide sm:tracking-wider text-brand mb-5 w-fit max-w-full">
                <MapPin size={14} className="text-brand shrink-0" />
                <span>Accra &middot; Architecture &amp; Construction</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold tracking-tight leading-[1.08] text-white mb-5">
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

            </div>
        </div>

        {/* Image panel: full-bleed below the copy on phones, the whole right side on desktop */}
        {/* Sits above the full-width copy containers so its buttons stay clickable */}
        <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:z-[15] lg:w-[46vw]">
          <HeroPreview />
        </div>

        {/* Title block, set out like the corner of a drawing sheet */}
        <div className="container-site relative z-10">
          <dl className="grid grid-cols-3 border-t border-white/10 pt-5 pb-8 text-xs text-ink-300 lg:w-1/2 lg:grid-cols-[1fr_1fr_1fr_auto] lg:pr-10 lg:pb-10">
            {[
              ['Scope', 'Single team', 'Drawings to handover'],
              ['Site', 'Accra based', 'Projects in Ghana'],
              ['Start', 'Plan the scope', 'Design, build or renovate'],
            ].map(([label, title, text], i) => (
              <div key={label} className={i === 1 ? 'border-x border-white/10 px-2 sm:px-3' : i === 2 ? 'pl-2 sm:pl-3' : 'pr-2'}>
                <dt className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-brand">{label}</dt>
                <dd className="block font-sans text-base font-bold text-white sm:text-lg">{title}</dd>
                <dd className="text-[11px] text-ink-300">{text}</dd>
              </div>
            ))}
            <a href="#services" aria-label="Scroll to services" className="group hidden items-end justify-center pl-4 lg:flex">
              <span className="relative block h-12 w-px overflow-hidden bg-white/15">
                <span className="absolute inset-x-0 top-0 h-1/2 animate-scroll-cue bg-brand" />
              </span>
            </a>
          </dl>
        </div>

        {/* Drafting scale along the foot of the hero */}
        <div aria-hidden className="ruler-ticks absolute inset-x-0 bottom-0 z-20 h-2.5" />
      </section>


      <section className="section relative z-10 rounded-t-[2rem] bg-white shadow-[0_-30px_60px_-20px_rgba(0,0,0,0.6)] md:rounded-t-[2.5rem]" id="services">
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
      </div>

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
