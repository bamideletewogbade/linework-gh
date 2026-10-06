import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  /** Responsive `sizes` hint for the image */
  sizes?: string;
  className?: string;
}

/** Whole card is one tap target. Image-led, minimal text. */
export default function ProjectCard({
  project,
  sizes = '(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw',
  className = '',
}: ProjectCardProps) {

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group relative flex flex-col overflow-hidden rounded-3xl bg-ink-900 text-white ${className}`}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[4/4.6]">
        <Image
          src={project.heroImage}
          alt={`Illustrative image: ${project.title}`}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />

        <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink-900 backdrop-blur">
            {project.categoryLabel}
          </span>
          {(
            <span className="inline-flex items-center gap-1.5 rounded-full bg-ink-950/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Illustrative
            </span>
          )}
        </div>

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-6">
          <div>
            <p className="mb-1 text-sm text-white/70">
              {project.categoryLabel} idea
            </p>
            <h3 className="text-xl font-bold leading-tight md:text-2xl">{project.title}</h3>
          </div>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-ink-900 transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand">
            <ArrowUpRight size={20} />
          </span>
        </div>
      </div>
    </Link>
  );
}
