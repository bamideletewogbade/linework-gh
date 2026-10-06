import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PROJECTS } from '@/data/projects';
import CtaBand from '@/components/ui/CtaBand';
interface Props { params: { slug: string } }
export function generateStaticParams() { return PROJECTS.map(project => ({ slug: project.slug })); }
export function generateMetadata({ params }: Props): Metadata {
  const project = PROJECTS.find(p => p.slug === params.slug);
  if (!project) return { title: 'Project Not Found' };
  return { title: `${project.title} — Illustrative Example`, description: project.tagline, alternates: { canonical: `/projects/${project.slug}` }, openGraph: { title: `${project.title} — Illustrative Example | notjustlines`, description: project.tagline, url: `/projects/${project.slug}`, images: [{ url: project.heroImage, alt: `Illustrative reference: ${project.title}` }] } };
}
export default function ProjectDetailPage({ params }: Props) {
  const project = PROJECTS.find(p => p.slug === params.slug);
  if (!project) notFound();
  const next = PROJECTS[(PROJECTS.indexOf(project) + 1) % PROJECTS.length];
  return <>
    <section className="container-site py-12 md:py-20">
      <Link href="/projects" className="link-arrow mb-6 inline-block">← All illustrative projects</Link>
      <p className="eyebrow mb-3">Illustrative example · {project.categoryLabel}</p>
      <h1 className="text-display-lg font-bold mb-4">{project.title}</h1>
      <p className="text-lg text-ink-600 max-w-2xl">{project.tagline}</p>
      <p className="my-6 rounded-2xl border border-line bg-paper p-5 text-sm text-ink-700">This is a visual reference, not a completed or active notjustlines client project. Images have not been verified as photographs of our work.</p>
      <figure><div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-3xl"><Image src={project.heroImage} alt={`Illustrative reference: ${project.title}`} fill priority sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" /></div><figcaption className="mt-3 text-xs text-ink-600">Illustrative image for discussing a possible design direction.</figcaption></figure>
      <div className="mt-10 grid gap-8 md:grid-cols-2"><div><h2 className="text-2xl font-bold mb-4">The idea</h2><p className="text-ink-600 leading-relaxed">{project.description}</p></div><div><h2 className="text-2xl font-bold mb-4">Points to explore</h2><ul className="list-disc pl-5 space-y-3 text-ink-600">{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul></div></div>
      <Link href={`/projects/${next.slug}`} className="mt-12 block rounded-2xl border border-line bg-paper p-6 font-semibold">Next example: {next.title} →</Link>
    </section>
    <CtaBand title="Have an idea of your own?" text="Tell us about your site and what you need from the space. We can start with a conversation about the scope." />
  </>;
}
