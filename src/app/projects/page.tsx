import React from 'react';
import type { Metadata } from 'next';
import ProjectsGrid from '@/components/ProjectsGrid';
import Reveal from '@/components/ui/Reveal';
import CtaBand from '@/components/ui/CtaBand';

export const metadata: Metadata = {
  title: 'Projects — Illustrative Design Ideas',
  description:
    'Explore illustrative residential, commercial and interior ideas with notjustlines. These examples are not completed client projects.',
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="container-site pt-10 pb-8 md:pt-16 md:pb-12">
        <Reveal className="max-w-3xl">
          <span className="eyebrow mb-3">Illustrative projects</span>
          <h1 className="text-display-lg font-bold text-ink-900 mb-4">
            Explore ideas for your space.
          </h1>
          <p className="text-ink-600 text-base md:text-lg leading-relaxed">
            These images and scenarios illustrate possible project directions. They are not a record of completed notjustlines work, and the images are not verified photographs of our projects.
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
        whatsappMessage="Hi notjustlines, I was looking at your illustrative projects and would like to discuss an idea."
      />
    </div>
  );
}
