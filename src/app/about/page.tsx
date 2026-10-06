import type { Metadata } from 'next';
import CtaBand from '@/components/ui/CtaBand';
import StudioWorkflowDiagram from '@/components/StudioWorkflowDiagram';
export const metadata: Metadata = { title: 'About — The Studio & Approach', description: 'Architecture, construction and interiors in Accra. Discover the thinking behind notjustlines and our approach to spaces for everyday life.', alternates: { canonical: '/about' } };
export default function AboutPage() {
  return <>
    <section className="container-site py-14 md:py-24">
      <span className="eyebrow mb-4">About notjustlines</span>
      <h1 className="text-display-lg font-bold mb-6 max-w-4xl">Drawn with care. Built with purpose.</h1>
      <p className="text-lg text-ink-600 max-w-2xl">notjustlines brings architecture, construction and interiors together in Accra. Our name reflects what matters to us: the life that happens beyond the drawing.</p>
      <div className="mt-12 grid gap-8 md:grid-cols-2"><div><h2 className="text-2xl font-bold mb-4">Good spaces begin with people.</h2><p className="text-ink-600 leading-relaxed">A home should suit the way you live. A workplace should support the people who use it. We start with those everyday needs, then connect them to the site, the materials and the work of building.</p></div><div className="rounded-3xl border border-line bg-paper p-7"><h2 className="text-2xl font-bold mb-4">Start with what you know.</h2><p className="text-ink-600 leading-relaxed">You might have a plot and a clear vision, or a room that no longer works for you. Bring what you know and the questions you still have. We’ll help you turn that starting point into a project brief.</p></div></div>
    </section>
    <StudioWorkflowDiagram />
    <CtaBand title="Let’s discuss your project." text="Share your site location, what you want to achieve and the questions you need help answering." />
  </>;
}
