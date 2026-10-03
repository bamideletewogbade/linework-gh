import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center container-site py-20">
      <div className="text-center max-w-lg mx-auto">
        <span className="eyebrow mb-4 mx-auto">404 error</span>
        <h1 className="text-display-lg font-bold text-ink-900 mb-4">
          This page hasn’t been built yet.
        </h1>
        <p className="text-ink-600 text-base md:text-lg mb-8 leading-relaxed">
          Looks like the blueprint for this page got moved, or it hasn’t broken ground yet. Let’s get you back on solid footing.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="btn btn-primary">
            <span>Back to Home</span>
            <ArrowRight size={16} />
          </Link>
          <Link href="/projects" className="btn btn-outline">
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
