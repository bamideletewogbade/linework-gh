import React from 'react';
import Reveal from './Reveal';

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
  /** Optional element on the right (desktop) — e.g. a "see all" link */
  aside?: React.ReactNode;
};

export default function SectionHeader({ eyebrow, title, intro, align = 'left', dark = false, className = '', aside }: Props) {
  const centered = align === 'center';
  return (
    <Reveal
      className={`mb-12 flex flex-col gap-6 md:mb-16 ${aside ? 'md:flex-row md:items-end md:justify-between' : ''} ${className}`}
    >
      <div className={`flex max-w-2xl flex-col gap-4 ${centered ? 'mx-auto items-center text-center' : ''}`}>
        {eyebrow && <span className={`eyebrow ${dark ? 'eyebrow-light' : ''}`}>{eyebrow}</span>}
        <h2 className={`text-display-md font-bold ${dark ? 'text-white' : 'text-ink-900'}`}>{title}</h2>
        {intro && (
          <p className={`text-base leading-relaxed md:text-lg ${dark ? 'text-ink-300' : 'text-ink-600'}`}>{intro}</p>
        )}
      </div>
      {aside && <div className="shrink-0">{aside}</div>}
    </Reveal>
  );
}
