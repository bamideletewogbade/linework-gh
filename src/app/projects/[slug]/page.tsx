import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PROJECTS } from '@/data/projects';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import CtaBand from '@/components/ui/CtaBand';
import { WhatsAppIcon } from '@/components/ui/icons';
import { whatsappLink } from '@/lib/site';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} — ${project.neighborhood}, Accra`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} | notjustlines`,
      description: project.tagline,
      images: [{ url: project.heroImage, alt: project.title }],
    },
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const currentIndex = PROJECTS.findIndex((p) => p.slug === params.slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div className="flex flex-col">
      {/* Top Breadcrumb & Header */}
      <section className="container-site pt-8 pb-10 md:pt-14 md:pb-12">
        <Reveal className="mb-6">
          <Link
            href="/projects"
            className="text-xs font-semibold text-ink-600 hover:text-ink-950 inline-flex items-center gap-2 transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to all projects</span>
          </Link>
        </Reveal>

        <Reveal delay={60} className="max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-700 mb-3">
            <span>{project.categoryLabel}</span>
            <span>&middot;</span>
            <span className="text-ink-500">{project.status}</span>
          </div>

          <h1 className="text-display-lg font-bold text-ink-900 mb-4">
            {project.title}
          </h1>

          <p className="text-ink-600 text-lg md:text-xl leading-relaxed max-w-3xl">
            {project.tagline}
          </p>
        </Reveal>
      </section>

      {/* Hero Image */}
      <section className="container-site pb-12 md:pb-16">
        <Reveal delay={100} className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-line bg-paper shadow-sm">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </Reveal>
      </section>

      {/* Narrative & Technical Specs */}
      <section className="container-site pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Story & Highlights (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <Reveal>
              <h2 className="text-2xl font-bold text-ink-900 mb-4">
                The Story &amp; Delivery
              </h2>
              <p className="text-ink-700 text-base md:text-lg leading-relaxed">
                {project.description}
              </p>
            </Reveal>

            {/* Highlights List */}
            <Reveal delay={80} className="p-7 rounded-3xl bg-paper border border-line">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-700 mb-4">
                Key Project Highlights
              </h3>
              <ul className="space-y-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-ink-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Right Column: Key Facts Card (5 cols) */}
          <div className="lg:col-span-5">
            <Reveal delay={120} className="bg-white border border-line rounded-3xl p-6 sm:p-8 shadow-sm lg:sticky lg:top-24">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-500 pb-4 mb-4 border-b border-line">
                Project Facts
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center py-1">
                  <span className="text-ink-500">Location</span>
                  <span className="font-bold text-ink-900 text-sm">{project.neighborhood}, Accra</span>
                </div>

                <div className="flex justify-between items-center py-1 border-t border-line">
                  <span className="text-ink-500">Gross Floor Area</span>
                  <span className="font-bold text-ink-900 text-sm">{project.area}</span>
                </div>

                <div className="flex justify-between items-center py-1 border-t border-line">
                  <span className="text-ink-500">Scope of Work</span>
                  <span className="font-bold text-ink-900 text-sm">{project.deliveryMethod}</span>
                </div>

                <div className="flex justify-between items-center py-1 border-t border-line">
                  <span className="text-ink-500">Structural System</span>
                  <span className="font-bold text-ink-900 text-sm text-right max-w-[200px]">{project.structuralSystem}</span>
                </div>

                <div className="flex justify-between items-center py-1 border-t border-line">
                  <span className="text-ink-500">Timeline</span>
                  <span className="font-bold text-ink-900 text-sm">{project.timeline}</span>
                </div>

                <div className="flex justify-between items-center py-1 border-t border-line">
                  <span className="text-ink-500">Completion</span>
                  <span className="font-bold text-ink-900 text-sm">{project.year}</span>
                </div>
              </div>

              {/* Inquire Buttons */}
              <div className="mt-8 pt-6 border-t border-line flex flex-col gap-3">
                <a
                  href={whatsappLink(`Hi notjustlines, I am interested in building something like ${project.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp w-full text-xs"
                >
                  <WhatsAppIcon size={16} />
                  <span>Build something like this</span>
                </a>

                <Link
                  href="/contact"
                  className="btn btn-outline w-full text-xs"
                >
                  Start your brief
                </Link>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* Gallery Section */}
      <section className="container-site pb-16 md:pb-24">
        <Reveal className="mb-8">
          <h2 className="text-2xl font-bold text-ink-900">
            Project Gallery
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.galleryImages.map((imgSrc, idx) => (
            <Reveal key={idx} delay={idx * 80} className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-line bg-paper shadow-sm">
              <Image
                src={imgSrc}
                alt={`${project.title} detail ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Next Project Footer Link */}
      <section className="container-site pb-16 md:pb-24">
        <Link
          href={`/projects/${nextProject.slug}`}
          className="group flex items-center justify-between p-6 sm:p-8 rounded-3xl bg-paper border border-line hover:border-brand transition-colors"
        >
          <div>
            <span className="text-xs font-semibold text-ink-500 block mb-1">Next project</span>
            <span className="font-display text-xl sm:text-2xl font-bold text-ink-900 group-hover:text-brand-700 transition-colors">
              {nextProject.title} &rarr;
            </span>
          </div>
          <span className="text-xs font-semibold text-brand-700 hidden sm:inline">
            {nextProject.neighborhood}
          </span>
        </Link>
      </section>

      {/* Closing CTA */}
      <CtaBand />
    </div>
  );
}
