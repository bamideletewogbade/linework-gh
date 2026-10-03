import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PROJECTS, Project } from '@/data/projects';
import { MapPin, Calendar, Clock, Maximize2, ShieldCheck, ArrowLeft, ArrowRight, Phone } from 'lucide-react';

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

export default function ProjectDetailPage({ params }: Props) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-[#FAF9F6] min-h-screen py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="text-stone-500 hover:text-stone-900 font-mono text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
          >
            <ArrowLeft size={14} />
            <span>&larr; Back to All Projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-700 font-bold mb-3">
            <span>{project.categoryLabel}</span>
            <span>&middot;</span>
            <span className="text-stone-500">{project.status}</span>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-stone-900 tracking-tight mb-4">
            {project.title}
          </h1>

          <p className="text-stone-600 text-lg md:text-xl font-sans max-w-3xl leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-stone-200 shadow-md mb-12 bg-stone-100">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Specifications Sheet & Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Left Column: Narrative Story (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6 font-sans">
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              Architectural Concept &amp; Delivery Narrative
            </h2>
            <p className="text-stone-700 text-base leading-relaxed">
              {project.description}
            </p>

            {/* Key Features */}
            <div className="mt-4 pt-6 border-t border-stone-200">
              <h3 className="font-mono text-xs uppercase tracking-widest text-amber-800 font-bold mb-4">
                Key Architectural Highlights
              </h3>
              <ul className="space-y-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-stone-700">
                    <span className="text-amber-600 font-bold">&bull;</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Architectural Dossier Specifications (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-stone-200 rounded-xl p-6 md:p-8 shadow-sm">
              <h3 className="font-mono text-xs uppercase tracking-widest text-stone-500 font-bold pb-4 mb-4 border-b border-stone-100">
                Architectural Technical Dossier
              </h3>

              <div className="space-y-4 font-mono text-xs">
                <div>
                  <span className="text-stone-400 uppercase tracking-wider block text-[10px]">Location</span>
                  <span className="font-bold text-stone-900 text-sm">{project.neighborhood}, {project.location}</span>
                </div>

                <div className="pt-3 border-t border-stone-100">
                  <span className="text-stone-400 uppercase tracking-wider block text-[10px]">Gross Floor Area</span>
                  <span className="font-bold text-stone-900 text-sm">{project.area}</span>
                </div>

                <div className="pt-3 border-t border-stone-100">
                  <span className="text-stone-400 uppercase tracking-wider block text-[10px]">Delivery Method</span>
                  <span className="font-bold text-stone-900 text-sm">{project.deliveryMethod}</span>
                </div>

                <div className="pt-3 border-t border-stone-100">
                  <span className="text-stone-400 uppercase tracking-wider block text-[10px]">Structural Engineering System</span>
                  <span className="font-bold text-stone-900 text-sm">{project.structuralSystem}</span>
                </div>

                <div className="pt-3 border-t border-stone-100">
                  <span className="text-stone-400 uppercase tracking-wider block text-[10px]">Construction Timeline</span>
                  <span className="font-bold text-stone-900 text-sm">{project.timeline}</span>
                </div>

                <div className="pt-3 border-t border-stone-100">
                  <span className="text-stone-400 uppercase tracking-wider block text-[10px]">Completion Year</span>
                  <span className="font-bold text-stone-900 text-sm">{project.year}</span>
                </div>
              </div>

              {/* Consultation Trigger */}
              <div className="mt-8 pt-6 border-t border-stone-200 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="w-full bg-[#0B0E14] text-white text-xs font-mono uppercase tracking-widest font-bold py-3.5 px-4 rounded text-center hover:bg-amber-600 transition-colors shadow-sm"
                >
                  Commission Similar Project
                </Link>

                <a
                  href={`https://wa.me/233256869481?text=${encodeURIComponent(`Hello Linework studio, I am interested in discussing a project similar to ${project.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border border-stone-300 text-stone-700 text-xs font-mono uppercase tracking-wider py-3 px-4 rounded text-center hover:border-stone-900 flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone size={14} className="text-emerald-600" />
                  <span>Inquire via WhatsApp</span>
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Gallery Grid */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl font-bold text-stone-900 mb-6">
            Project Visual Documentation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.galleryImages.map((imgSrc, idx) => (
              <div key={idx} className="relative aspect-[16/10] rounded-lg overflow-hidden border border-stone-200 bg-stone-100">
                <Image
                  src={imgSrc}
                  alt={`${project.title} detail ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
