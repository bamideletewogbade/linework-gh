'use client';

import React, { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { PROJECTS } from '@/data/projects';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ProjectsPage() {
  const [filter, setFilter] = useState<'All' | 'Residential' | 'Commercial' | 'Interior' | 'Structural'>('All');

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.typology === filter);

  const categories = [
    { label: 'All Works', value: 'All', count: PROJECTS.length },
    { label: 'Private Residential', value: 'Residential', count: PROJECTS.filter(p => p.typology === 'Residential').length },
    { label: 'Commercial HQ', value: 'Commercial', count: PROJECTS.filter(p => p.typology === 'Commercial').length },
    { label: 'Interiors & Fit-Out', value: 'Interior', count: PROJECTS.filter(p => p.typology === 'Interior').length },
    { label: 'Structural Engineering', value: 'Structural', count: PROJECTS.filter(p => p.typology === 'Structural').length },
  ];

  return (
    <div className="py-12 md:py-20 bg-[#FAF9F6] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-700 font-semibold block mb-2">
            Practice Portfolio &middot; Built Works &amp; Under Construction
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight mb-4">
            Curated Architectural Works
          </h1>
          <p className="text-stone-600 text-base md:text-lg leading-relaxed font-sans">
            Explore Linework GH’s portfolio across luxury residential estates, civic pavilions, penthouse interiors, and coastal superstructures in Accra. Every project represents single-point design-build delivery.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 pb-6 border-b border-stone-200 mb-10 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setFilter(cat.value as any)}
              className={`text-xs font-mono uppercase tracking-wider px-4 py-2.5 rounded-full transition-all whitespace-nowrap ${
                filter === cat.value
                  ? 'bg-stone-900 text-white font-bold shadow-sm'
                  : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-400'
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom Project Initiation Banner */}
        <div className="mt-20 bg-white border border-stone-200 rounded-xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold block mb-1">
              Have a Building Project in Ghana?
            </span>
            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
              Let&apos;s Discuss Your Architectural Vision
            </h3>
            <p className="text-stone-600 text-sm font-sans">
              Whether you already own land in Cantonments or are a diaspora investor beginning preliminary feasibility, our studio team is ready to evaluate your site.
            </p>
          </div>

          <Link
            href="/contact"
            className="bg-[#0B0E14] text-white font-mono text-xs uppercase tracking-widest font-bold px-7 py-4 rounded hover:bg-amber-600 transition-colors flex items-center gap-2 whitespace-nowrap shadow-sm"
          >
            <span>Start Consultation</span>
            <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </div>
  );
}
