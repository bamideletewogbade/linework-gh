import React from 'react';
import type { Metadata } from 'next';
import ProjectsGrid from '@/components/ProjectsGrid';
import Reveal from '@/components/ui/Reveal';
import CtaBand from '@/components/ui/CtaBand';

export const metadata: Metadata = {
  title: 'Design Inspiration — Homes, Interiors & Workplaces',
  description:
    'Explore ideas for homes, interiors and workplaces. Find the spaces, materials and details that speak to you, then start a conversation with notjustlines.',
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="container-site pt-10 pb-8 md:pt-16 md:pb-12">
        <Reveal className="max-w-3xl">
          <span className="eyebrow mb-3">Design inspiration</span>
          <h1 className="text-display-lg font-bold text-ink-900 mb-4">
            Find a direction for your space.
          </h1>
          <p className="text-ink-600 text-base md:text-lg leading-relaxed">
            A courtyard to gather in. A brighter place to work. Materials that make a room feel like home. Explore these design references and tell us what you would love to bring into your own space.
          </p>
        </Reveal>
      </section>

      {/* Grid with category filters */}
      <section className="container-site pb-12 md:pb-20">
        <ProjectsGrid />
      </section>

      {/* Closing CTA */}
      <CtaBand
        title="Found something that feels like you?"
        text="Bring your favourite ideas, your questions and whatever you know about the site. Let’s talk about what could work for you."
        primaryLabel="Start your project"
        primaryHref="/contact"
        whatsappMessage="Hi notjustlines, I was looking at your design inspiration and would like to discuss an idea."
      />
    </div>
  );
}
