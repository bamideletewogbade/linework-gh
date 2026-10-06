'use client';
import { useState } from 'react';
const topics = [
  { name: 'Design', question: 'What do you need the space to do?', detail: 'Start with everyday life: who will use the space, what they need to do and how you want it to feel.', confirm: 'Design stages, review points and drawing deliverables.' },
  { name: 'Budget', question: 'What needs to fit within the budget?', detail: 'Put your priorities alongside the budget. Explore where to invest, what to simplify and how material choices affect the overall plan.', confirm: 'Fees, cost breakdown, exclusions and payment terms.' },
  { name: 'Construction', question: 'Who is responsible for the work?', detail: 'Connect the design to a practical programme, with clear roles for the people bringing it to life.', confirm: 'Project roles, programme and inspection arrangements.' },
  { name: 'Communication', question: 'How will you stay involved?', detail: 'Whether you are nearby or abroad, plan how you will review progress, ask questions and make decisions.', confirm: 'Reporting frequency, contact details and approval process.' },
];
export default function StudioWorkflowDiagram() {
  const [selected, setSelected] = useState(0);
  const topic = topics[selected];
  return <section className="section bg-paper border-y border-line"><div className="container-site"><span className="eyebrow mb-3">The project conversation</span><h2 className="text-display-md font-bold mb-8">A clear direction, from the start.</h2><div className="flex flex-wrap gap-3 mb-6" aria-label="Project topics">{topics.map((item,index)=><button type="button" key={item.name} aria-pressed={selected===index} onClick={()=>setSelected(index)} className={`btn ${selected===index?'btn-dark':'btn-outline'}`}>{item.name}</button>)}</div><div className="rounded-3xl bg-white border border-line p-7 md:p-10" aria-live="polite"><h3 className="text-2xl font-bold mb-4">{topic.question}</h3><p className="text-ink-600 max-w-3xl mb-6">{topic.detail}</p><p className="rounded-xl bg-paper p-4 text-sm text-ink-700"><strong>The details:</strong> {topic.confirm}</p></div></div></section>;
}
