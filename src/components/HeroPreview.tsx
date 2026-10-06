'use client';

import Image from 'next/image';
import { useState, type ComponentType } from 'react';
import { Box, X } from 'lucide-react';

export default function HeroPreview() {
  const [Viewer, setViewer] = useState<ComponentType | null>(null);
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  async function openModel() {
    if (Viewer) { setActive(true); return; }
    setLoading(true); setError('');
    try { const module = await import('./Hero3D'); setViewer(() => module.default); setActive(true); }
    catch { setError('The model could not load. Please try again.'); }
    finally { setLoading(false); }
  }
  if (active && Viewer) return <div><div className="mb-3 flex items-center justify-between gap-3"><span className="text-sm text-white/80">Interactive architectural study</span><button type="button" className="btn btn-outline-light min-h-11 px-3 text-xs" onClick={() => setActive(false)}><X size={16} />Close 3D</button></div><Viewer /></div>;
  return <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/15 bg-ink-900 lg:aspect-square">
    <Image src="/assets/villa-cantonments.jpg" alt="Courtyard home design inspiration" fill priority sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-transparent to-transparent" />
    <div className="absolute inset-x-0 bottom-0 p-5"><p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/80">Design inspiration</p><button type="button" className="btn btn-primary w-full sm:w-auto" onClick={openModel} disabled={loading}><Box size={18} />{loading ? 'Loading model…' : 'Explore the 3D model'}</button><p role="status" className="mt-2 text-sm text-white">{error}</p></div>
  </div>;
}
