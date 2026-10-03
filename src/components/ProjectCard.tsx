import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MapPin, Maximize2 } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <div className="group bg-white rounded-lg border border-stone-200 overflow-hidden shadow-sm hover:shadow-card hover:border-stone-400 transition-all duration-300 flex flex-col">
      {/* Image Container */}
      <Link href={`/projects/${project.slug}`} className="relative aspect-[16/10] overflow-hidden bg-stone-100 block">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {/* Typology Badge */}
        <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-sm border border-white/10">
          {project.categoryLabel}
        </div>

        {/* Year / Status Badge */}
        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm text-stone-900 text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-sm shadow-sm">
          {project.year} &middot; {project.status}
        </div>
      </Link>

      {/* Content Details */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-1.5 text-xs text-stone-500 font-mono mb-2">
          <MapPin size={13} className="text-amber-600" />
          <span>{project.neighborhood}</span>
        </div>

        <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-amber-700 transition-colors mb-2">
          <Link href={`/projects/${project.slug}`} className="flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-amber-600" />
          </Link>
        </h3>

        <p className="text-stone-600 text-sm line-clamp-2 mb-6 font-sans leading-relaxed flex-1">
          {project.tagline}
        </p>

        {/* Architectural Metrics Bar */}
        <div className="pt-4 border-t border-stone-100 grid grid-cols-3 gap-2 text-center font-mono text-[11px]">
          <div className="flex flex-col">
            <span className="text-stone-400 text-[9px] uppercase tracking-wider">Area</span>
            <span className="font-semibold text-stone-800">{project.area}</span>
          </div>
          <div className="flex flex-col border-x border-stone-100">
            <span className="text-stone-400 text-[9px] uppercase tracking-wider">Timeline</span>
            <span className="font-semibold text-stone-800">{project.timeline}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-stone-400 text-[9px] uppercase tracking-wider">Scope</span>
            <span className="font-semibold text-stone-800 truncate" title={project.deliveryMethod}>
              {project.deliveryMethod.split(' ')[0]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
