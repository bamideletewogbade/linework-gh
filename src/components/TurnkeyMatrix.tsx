import Link from 'next/link';
const questions = [
  ['What is included?', 'Define the drawings, construction work, specialist input and exclusions in the proposal.'],
  ['How will decisions be made?', 'Agree who reviews designs, approves changes and answers questions during the work.'],
  ['How will costs be managed?', 'Review the cost breakdown, assumptions and payment terms before making a commitment.'],
  ['How will I see progress?', 'Set out the reporting, site visits and inspection arrangements that suit your project.'],
];
export default function TurnkeyMatrix() {
  return <section className="section bg-sand/30 border-b border-line"><div className="container-site"><span className="eyebrow mb-3">Planning your project</span><h2 className="text-display-md font-bold mb-4">Clear questions before work begins.</h2><p className="text-ink-600 max-w-2xl mb-8">A good project brief makes responsibilities and expectations easier to discuss. These are useful points to settle with the team.</p><div className="grid gap-4 sm:grid-cols-2">{questions.map(([title,body])=><div key={title} className="rounded-3xl border border-line bg-white p-7"><h3 className="text-xl font-bold mb-3">{title}</h3><p className="text-ink-600">{body}</p></div>)}</div><Link href="/services" className="link-arrow mt-8 inline-block">Explore the services →</Link></div></section>;
}
