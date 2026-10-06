'use client';
import { useState } from 'react';
const topics = [
  { name: 'Design', question: 'What do you need the space to do?', detail: 'Discuss the people who will use it, the rooms and activities it needs to support, and what matters most to you.', confirm: 'Design stages, review points and drawing deliverables.' },
  { name: 'Budget', question: 'What needs to fit within the budget?', detail: 'Review the scope, specifications and assumptions together. Record exclusions and how changes will be priced and approved.', confirm: 'Fees, cost breakdown, exclusions and payment terms.' },
  { name: 'Construction', question: 'Who is responsible for the work?', detail: 'Identify the project contact, site responsibilities and specialist input. Agree how inspections and outstanding issues will be recorded.', confirm: 'Project roles, programme and inspection arrangements.' },
  { name: 'Communication', question: 'How will you stay involved?', detail: 'Share your location, availability and preferred contact method. Discuss what updates you need and how decisions will be confirmed.', confirm: 'Reporting frequency, contact details and approval process.' },
];
export default function StudioWorkflowDiagram() {
  const [selected, setSelected] = useState(0);
  const topic = topics[selected];
  return <section className="section bg-paper border-y border-line"><div className="container-site"><span className="eyebrow mb-3">The project conversation</span><h2 className="text-display-md font-bold mb-8">Connect the decisions that shape your space.</h2><div className="flex flex-wrap gap-3 mb-6" aria-label="Project topics">{topics.map((item,index)=><button type="button" key={item.name} aria-pressed={selected===index} onClick={()=>setSelected(index)} className={`btn ${selected===index?'btn-dark':'btn-outline'}`}>{item.name}</button>)}</div><div className="rounded-3xl bg-white border border-line p-7 md:p-10" aria-live="polite"><h3 className="text-2xl font-bold mb-4">{topic.question}</h3><p className="text-ink-600 max-w-3xl mb-6">{topic.detail}</p><p className="rounded-xl bg-paper p-4 text-sm text-ink-700"><strong>Confirm in the proposal:</strong> {topic.confirm}</p></div></div></section>;
}
