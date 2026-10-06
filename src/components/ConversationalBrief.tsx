'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Copy, Mail } from 'lucide-react';
import { SITE, whatsappLink } from '@/lib/site';
import { WhatsAppIcon } from './ui/icons';

const intents = ['Design and build a new property', 'Build from existing drawings', 'Renovate or finish an existing building', 'Explore a site or an early idea'];
const headings = ['What would you like help with?', 'What and where are you planning?', 'What do you know so far?', 'How can we contact you?', 'Review your brief'];
const inputClass = 'w-full rounded-xl border border-line bg-paper p-3 text-base text-ink-900';
const labelClass = 'mb-2 block text-sm font-semibold text-ink-900';

export default function ConversationalBrief() {
  const [step, setStep] = useState(1);
  const [copyStatus, setCopyStatus] = useState('');
  const heading = useRef<HTMLHeadingElement>(null);
  const previousStep = useRef(1);
  const [data, setData] = useState({ intent: '', property: '', location: '', land: 'Not sure yet', area: '', budget: '', currency: 'GHS', timeline: 'Not sure yet', name: '', phone: '', email: '', based: '', preferred: 'WhatsApp', notes: '' });
  const update = (key: keyof typeof data, value: string) => setData(previous => ({ ...previous, [key]: value }));
  useEffect(() => {
    if (previousStep.current !== step) { heading.current?.focus(); previousStep.current = step; }
    setCopyStatus('');
  }, [step]);

  const brief = [
    'notjustlines — project enquiry', `Name: ${data.name.trim()}`, `Request: ${data.intent}`, `Property: ${data.property}`,
    `Site location: ${data.location.trim() || 'Not decided yet'}`, `Land / building status: ${data.land}`,
    `Approximate floor area: ${data.area ? `${data.area} m²` : 'Not sure yet'}`,
    `My budget: ${data.budget ? `${data.currency} ${data.budget} (client-provided, not a quote)` : 'To discuss'}`,
    `Preferred start: ${data.timeline}`, `Currently based in: ${data.based.trim() || 'Not provided'}`, `Preferred reply: ${data.preferred}`,
    ...(data.phone.trim() ? [`Phone: ${data.phone.trim()}`] : []), ...(data.email.trim() ? [`Email: ${data.email.trim()}`] : []),
    ...(data.notes.trim() ? [`Notes: ${data.notes.trim()}`] : []), '', 'Please let me know the next steps for discussing this project.',
  ].join('\n');
  async function copyBrief() {
    try { await navigator.clipboard.writeText(brief); setCopyStatus('Copied. Paste your brief into a message to the studio.'); }
    catch { setCopyStatus('Copy is unavailable here. Select and copy the text in the brief below.'); }
  }
  return (
    <div className="mx-auto max-w-3xl rounded-3xl border border-line bg-white p-5 shadow-sm sm:p-8 md:p-10">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-700">{step < 5 ? `Project enquiry · Step ${step} of 4` : 'Ready to share · Not sent yet'}</p>
      <div className="mb-6 h-1.5 overflow-hidden rounded-full bg-paper" aria-hidden="true"><div className="h-full bg-brand" style={{ width: `${Math.min(step, 4) * 25}%` }} /></div>
      <h3 ref={heading} tabIndex={-1} className="mb-3 text-2xl font-bold text-ink-900 focus:outline-none sm:text-3xl">{headings[step - 1]}</h3>
      <p className="mb-6 text-sm text-ink-600">{step === 5 ? 'Your brief has not been sent. Open WhatsApp or your email app, then send the message there. Opening an app does not confirm delivery.' : 'Prepare a short brief, review it, then send it through WhatsApp or email. Your answers stay on this page until you choose to share them; they are lost if you reload or leave.'}</p>
      {step < 5 ? <form onSubmit={event => { event.preventDefault(); setStep(previous => previous + 1); }}>
        <div className="mb-8 space-y-5">
          {step === 1 && <fieldset><legend className="sr-only">Project request</legend><div className="grid gap-3 sm:grid-cols-2">{intents.map(intent => <label key={intent} className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-5 text-sm font-semibold ${data.intent === intent ? 'border-brand bg-paper' : 'border-line'}`}><input className="mt-1 accent-brand" type="radio" name="intent" required value={intent} checked={data.intent === intent} onChange={() => update('intent', intent)} />{intent}</label>)}</div></fieldset>}
          {step === 2 && <>
            <div><label htmlFor="brief-property" className={labelClass}>Property type</label><select id="brief-property" className={inputClass} required value={data.property} onChange={e => update('property', e.target.value)}><option value="">Choose a type</option>{['Home', 'Apartments or townhouses', 'Office, shop or other commercial space', 'Interior or individual room', 'Not sure yet'].map(value => <option key={value}>{value}</option>)}</select></div>
            <div><label htmlFor="brief-location" className={labelClass}>Site location (optional)</label><input id="brief-location" className={inputClass} maxLength={160} value={data.location} onChange={e => update('location', e.target.value)} placeholder="Town or neighbourhood, if known" /></div>
          </>}
          {step === 3 && <>
            <div><label htmlFor="brief-land" className={labelClass}>Land or building status</label><select id="brief-land" className={inputClass} value={data.land} onChange={e => update('land', e.target.value)}>{['Not sure yet', 'I own land', 'I am considering a plot', 'I am still looking for land', 'There is an existing building'].map(value => <option key={value}>{value}</option>)}</select></div>
            <div><label htmlFor="brief-area" className={labelClass}>Approximate floor area in m² (optional)</label><input id="brief-area" type="number" min="1" max="1000000" step="any" className={inputClass} value={data.area} onChange={e => update('area', e.target.value)} placeholder="Leave blank if you are unsure" /></div>
            <div><label htmlFor="brief-budget" className={labelClass}>Your working budget (optional)</label><div className="flex gap-2"><select aria-label="Budget currency" className="rounded-xl border border-line bg-paper p-3" value={data.currency} onChange={e => update('currency', e.target.value)}>{['GHS', 'USD', 'GBP', 'EUR', 'CAD'].map(value => <option key={value}>{value}</option>)}</select><input id="brief-budget" type="number" min="1" max="100000000000" step="any" className={`${inputClass} min-w-0`} value={data.budget} onChange={e => update('budget', e.target.value)} placeholder="Amount, if known" /></div><p className="mt-2 text-xs text-ink-600">This is your budget, not a construction estimate. Scope, site conditions and specifications need review before pricing.</p></div>
            <div><label htmlFor="brief-timeline" className={labelClass}>When would you like to start?</label><select id="brief-timeline" className={inputClass} value={data.timeline} onChange={e => update('timeline', e.target.value)}>{['Not sure yet', 'Within 3 months', 'In 3–6 months', 'In 6–12 months', 'More than a year from now'].map(value => <option key={value}>{value}</option>)}</select></div>
          </>}
          {step === 4 && <>
            <div><label htmlFor="brief-name" className={labelClass}>Your name</label><input id="brief-name" required pattern=".*\S.*" autoComplete="name" maxLength={100} className={inputClass} value={data.name} onChange={e => update('name', e.target.value)} /></div>
            <div className="grid gap-5 sm:grid-cols-2"><div><label htmlFor="brief-phone" className={labelClass}>Phone (optional)</label><input id="brief-phone" type="tel" autoComplete="tel" maxLength={40} className={inputClass} value={data.phone} onChange={e => update('phone', e.target.value)} /></div><div><label htmlFor="brief-email" className={labelClass}>Email (optional)</label><input id="brief-email" type="email" autoComplete="email" maxLength={200} className={inputClass} value={data.email} onChange={e => update('email', e.target.value)} /></div></div>
            <div><label htmlFor="brief-based" className={labelClass}>Where are you currently based? (optional)</label><input id="brief-based" maxLength={120} className={inputClass} value={data.based} onChange={e => update('based', e.target.value)} placeholder="City or country" /></div>
            <div><label htmlFor="brief-preferred" className={labelClass}>Preferred way to hear back</label><select id="brief-preferred" className={inputClass} value={data.preferred} onChange={e => update('preferred', e.target.value)}>{['WhatsApp', 'Email', 'Phone call'].map(value => <option key={value}>{value}</option>)}</select><p className="mt-2 text-xs text-ink-600">Include a phone number or email above if you want a reply somewhere other than the channel you send from.</p></div>
            <div><label htmlFor="brief-notes" className={labelClass}>Anything else we should know? (optional)</label><textarea id="brief-notes" rows={3} maxLength={1200} className={inputClass} value={data.notes} onChange={e => update('notes', e.target.value)} /></div>
          </>}
        </div>
        <div className="flex flex-wrap justify-between gap-3">{step > 1 ? <button type="button" className="btn btn-outline" onClick={() => setStep(previous => previous - 1)}><ArrowLeft size={16} />Back</button> : <span />}<button type="submit" className="btn btn-primary">{step === 4 ? 'Review brief' : 'Continue'}<ArrowRight size={16} /></button></div>
      </form> : <>
        <label htmlFor="brief-summary" className={labelClass}>Your message</label><textarea id="brief-summary" readOnly value={brief} rows={15} className={`${inputClass} mb-5 text-sm`} />
        <div className="flex flex-wrap gap-3"><a className="btn btn-whatsapp" href={whatsappLink(brief)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={18} />Open WhatsApp</a><a className="btn btn-outline" href={`mailto:${SITE.email}?subject=${encodeURIComponent('Project enquiry — notjustlines')}&body=${encodeURIComponent(brief)}`}><Mail size={18} />Open email app</a><button type="button" className="btn btn-outline" onClick={copyBrief}><Copy size={18} />Copy brief</button></div>
        <p role="status" className="mt-3 text-sm text-ink-600">{copyStatus}</p>
        <p className="mt-4 text-sm text-ink-600">If an app does not open, copy your brief and send it to <a className="underline break-all" href={`mailto:${SITE.email}`}>{SITE.email}</a> or {SITE.phoneDisplay} on WhatsApp.</p>
        <button type="button" className="btn btn-outline mt-6" onClick={() => setStep(1)}><ArrowLeft size={16} />Edit brief</button>
      </>}
    </div>
  );
}
