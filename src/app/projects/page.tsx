import React from 'react';
import type { Metadata } from 'next';
import ProjectsGrid from '@/components/ProjectsGrid';
import Reveal from '@/components/ui/Reveal';
import CtaBand from '@/components/ui/CtaBand';

export const metadata: Metadata = {
  title: 'Projects — Built Homes, Commercial & Interiors in Accra',
  description:
    'Explore completed and current notjustlines projects across Cantonments, Airport Residential, East Legon, and Greater Accra.',
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="container-site pt-10 pb-8 md:pt-16 md:pb-12">
        <Reveal className="max-w-3xl">
          <span className="eyebrow mb-3">Our portfolio</span>
          <h1 className="text-display-lg font-bold text-ink-900 mb-4">
            Built work across Accra.
          </h1>
          <p className="text-ink-600 text-base md:text-lg leading-relaxed">
            Every project here represents single-point responsibility: we designed it, supervised the site, and delivered the finished keys.
          </p>
        </Reveal>
      </section>

      {/* Grid with category filters */}
      <section className="container-site pb-20 md:pb-28">
        <ProjectsGrid />
      </section>

      {/* Closing CTA */}
      <CtaBand
        title="Like what you see?"
        text="Whether you have an empty plot or want to remodel an existing home, let’s talk through your ideas."
        primaryLabel="Start your project"
        primaryHref="/contact"
        whatsappMessage="Hi notjustlines, I was looking at your projects and want to build something similar."
      />
    </div>
  );
}
