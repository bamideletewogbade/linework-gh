'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProjectCard from '@/components/ProjectCard';
import { PROJECTS, Project, TYPOLOGY_LABELS } from '@/data/projects';
import Reveal from '@/components/ui/Reveal';

const TYPOLOGY_MAP: Record<string, Project['typology']> = {
  residential: 'Residential',
  commercial: 'Commercial',
  interior: 'Interior',
  structural: 'Structural',
};

function ProjectsFilterContent() {
  const searchParams = useSearchParams();
  const [filter, setFilter] = useState<'All' | Project['typology']>('All');

  useEffect(() => {
    const typeParam = searchParams.get('type')?.toLowerCase();
    if (typeParam && TYPOLOGY_MAP[typeParam]) {
      setFilter(TYPOLOGY_MAP[typeParam]);
    }
  }, [searchParams]);

  const updateFilter = (newFilter: 'All' | Project['typology']) => {
    setFilter(newFilter);
    const url = new URL(window.location.href);
    if (newFilter === 'All') {
      url.searchParams.delete('type');
    } else {
      url.searchParams.set('type', newFilter.toLowerCase());
    }
    window.history.replaceState({}, '', url.toString());
  };

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.typology === filter);

  const categories: { label: string; value: 'All' | Project['typology'] }[] = [
    { label: 'All projects', value: 'All' },
    { label: TYPOLOGY_LABELS.Residential, value: 'Residential' },
    { label: TYPOLOGY_LABELS.Commercial, value: 'Commercial' },
    { label: TYPOLOGY_LABELS.Interior, value: 'Interior' },
    { label: TYPOLOGY_LABELS.Structural, value: 'Structural' },
  ];

  return (
    <>
      {/* Filter Tabs — horizontal swipe on mobile */}
      <div className="snap-row sm:mx-0 sm:flex-wrap sm:px-0 mb-10 pb-2">
        {categories.map((cat) => (
          <button
            key={cat.value}
            type="button"
            onClick={() => updateFilter(cat.value)}
            className={`min-h-[2.75rem] shrink-0 snap-start rounded-full px-5 text-sm font-semibold transition-all ${
              filter === cat.value
                ? 'bg-ink-900 text-white shadow-sm'
                : 'bg-white text-ink-700 border border-line hover:border-ink-400'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredProjects.map((project, idx) => (
          <Reveal key={project.id} delay={idx * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </>
  );
}

export default function ProjectsGrid() {
  return (
    <Suspense fallback={
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    }>
      <ProjectsFilterContent />
    </Suspense>
  );
}
