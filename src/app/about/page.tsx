import type { Metadata } from 'next';
import CtaBand from '@/components/ui/CtaBand';
import StudioWorkflowDiagram from '@/components/StudioWorkflowDiagram';
export const metadata: Metadata = { title: 'About — The Studio & Approach', description: 'Meet the idea behind notjustlines: connecting architecture, construction and the decisions that shape your space.', alternates: { canonical: '/about' } };
export default function AboutPage() {
  return <>
    <section className="container-site py-14 md:py-24">
      <span className="eyebrow mb-4">About notjustlines</span>
      <h1 className="text-display-lg font-bold mb-6 max-w-4xl">Drawn with care. Built with purpose.</h1>
      <p className="text-lg text-ink-600 max-w-2xl">notjustlines is an architecture and construction business in Accra. The name reflects a simple idea: a drawing is the beginning of a space that people will live and work in.</p>
      <div className="mt-12 grid gap-8 md:grid-cols-2"><div><h2 className="text-2xl font-bold mb-4">Bring design and construction into the same conversation.</h2><p className="text-ink-600 leading-relaxed">A useful brief connects the way you want to use a space with the site, budget and work involved. That conversation can begin with an empty plot, existing drawings, an unfinished building or a room you want to change.</p></div><div className="rounded-3xl border border-line bg-paper p-7"><h2 className="text-2xl font-bold mb-4">Start with what you know.</h2><p className="text-ink-600 leading-relaxed">You do not need a finished brief or a fixed budget to get in touch. Share your priorities and questions. The scope, project team, fees and programme should be confirmed in a proposal before work begins.</p></div></div>
    </section>
    <StudioWorkflowDiagram />
    <CtaBand title="Let’s discuss your project." text="Share your site location, what you want to achieve and the questions you need help answering." />
  </>;
}
