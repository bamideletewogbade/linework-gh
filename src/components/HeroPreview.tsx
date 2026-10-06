'use client';

import Image from 'next/image';
import { useState, type ComponentType } from 'react';
import { Box, X } from 'lucide-react';

// The hero's image panel. On load the photo appears first as a blueprint,
// then the finished building wipes across it: "we don't just draw it, we build it".
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
  if (active && Viewer) return <div className="flex h-full flex-col justify-center bg-ink-950 px-4 py-6 sm:px-6 lg:px-10"><div className="mb-3 flex items-center justify-between gap-3"><span className="text-sm text-white/80">Interactive architectural study</span><button type="button" className="btn btn-outline-light min-h-11 px-3 text-xs" onClick={() => setActive(false)}><X size={16} />Close 3D</button></div><Viewer /></div>;
  return <div className="relative h-full min-h-[24rem] overflow-hidden bg-[#0B2540] sm:min-h-[30rem] lg:min-h-0">
    {/* Blueprint layer: the same photo, washed into cyanotype blue under a drafting grid */}
    <Image src="/assets/villa-cantonments.jpg" alt="" aria-hidden fill sizes="(max-width: 1023px) 100vw, 46vw" className="object-cover opacity-40 mix-blend-luminosity [filter:grayscale(1)_contrast(1.5)_brightness(1.15)]" />
    <div className="bg-grid-blueprint absolute inset-0" />

    {/* Built layer: the finished photo wipes in from left to right */}
    <div className="absolute inset-0 animate-wipe">
      <Image src="/assets/villa-cantonments.jpg" alt="Courtyard home design inspiration" fill priority sizes="(max-width: 1023px) 100vw, 46vw" className="animate-kenburns object-cover" />
    </div>
    <div aria-hidden className="absolute inset-y-0 w-px animate-scan bg-brand shadow-[0_0_24px_4px_rgba(232,163,61,0.6)]" />

    {/* Blend into the dark copy side on desktop, and ground the caption */}
    <div className="absolute inset-y-0 left-0 hidden w-1/4 bg-gradient-to-r from-ink-950 to-transparent lg:block" />
    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-transparent to-ink-950/30" />

    {/* Drafting dimension line across the top */}
    <div aria-hidden className="absolute inset-x-5 top-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70 lg:inset-x-10 lg:top-8">
      <span className="h-3 w-px bg-white/60" />
      <span className="h-px flex-1 bg-white/40" />
      <span className="shrink-0">Design study 01 · Courtyard home</span>
      <span className="h-px flex-1 bg-white/40" />
      <span className="h-3 w-px bg-white/60" />
    </div>

    <div className="absolute inset-x-0 bottom-0 p-5 pb-7 lg:p-10 lg:pb-12"><p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/80">Design inspiration</p><button type="button" className="btn btn-primary w-full sm:w-auto" onClick={openModel} disabled={loading}><Box size={18} />{loading ? 'Loading model…' : 'Explore the 3D model'}</button><p role="status" className="mt-2 text-sm text-white">{error}</p></div>
  </div>;
}
