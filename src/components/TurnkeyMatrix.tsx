import Link from 'next/link';
const questions = [
  ['What is included?', 'Bring together the design, construction and finishing work your project needs.'],
  ['How will decisions be made?', 'Know when to review the design, choose finishes and make the decisions that move the work forward.'],
  ['How will costs be managed?', 'Work through the budget alongside the design, from materials and quantities to payment stages.'],
  ['How will I see progress?', 'Plan updates and site reviews around how closely you want to be involved, at home or abroad.'],
];
export default function TurnkeyMatrix() {
  return <section className="section bg-sand/30 border-b border-line"><div className="container-site"><span className="eyebrow mb-3">Planning your project</span><h2 className="text-display-md font-bold mb-4">Your project, with a clear path forward.</h2><p className="text-ink-600 max-w-2xl mb-8">From the first conversation, focus on the questions that help your project take shape.</p><div className="grid gap-4 sm:grid-cols-2">{questions.map(([title,body])=><div key={title} className="rounded-3xl border border-line bg-white p-7"><h3 className="text-xl font-bold mb-3">{title}</h3><p className="text-ink-600">{body}</p></div>)}</div><Link href="/services" className="link-arrow mt-8 inline-block">Explore the services →</Link></div></section>;
}
