'use client';

import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, ArrowLeft, Phone, Mail, Home, Building2, Armchair, Layers, MapPin, Calculator } from 'lucide-react';

export default function ConversationalBrief() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    typology: 'Private Luxury Villa',
    location: 'Cantonments / Airport / Ridge',
    stage: 'Have Land & Need Turnkey Architecture + Build',
    area: 450,
    budgetTier: '$225,000 – $380,000 (~3.5M – 5.9M GHS)',
    fullName: '',
    phone: '',
    email: '',
    notes: '',
  });

  const updateArea = (val: number) => {
    const minUSD = Math.round(val * 500);
    const maxUSD = Math.round(val * 850);
    const minGHS = (minUSD * 15.6 / 1000000).toFixed(1);
    const maxGHS = (maxUSD * 15.6 / 1000000).toFixed(1);
    const bracket = `$${minUSD.toLocaleString()} – $${maxUSD.toLocaleString()} (~${minGHS}M – ${maxGHS}M GHS)`;

    setFormData(prev => ({
      ...prev,
      area: val,
      budgetTier: bracket,
    }));
  };

  const typologies = [
    { title: 'Private Luxury Villa', icon: Home, desc: 'Bespoke residential estate with private pool, landscaping, and staff quarters.' },
    { title: 'Commercial HQ & Pavilion', icon: Building2, desc: 'Corporate headquarters, showroom, gallery, or boutique commercial development.' },
    { title: 'Interior Architecture', icon: Armchair, desc: 'Luxury penthouse, duplex gut-renovation, or executive office fit-out.' },
    { title: 'Multi-Unit Development', icon: Layers, desc: 'Townhouse enclaves, luxury apartment buildings, or gated residential estates.' },
  ];

  const locations = [
    { title: 'Cantonments / Airport / Ridge', desc: 'Accra Prime diplomatic core and high-value residential quarters.' },
    { title: 'East Legon / Trasacco / Airport Hills', desc: 'Prestige suburban enclaves with expansive plots.' },
    { title: 'Aburi Highlands / Coastline', desc: 'Scenic mountain retreats, beachfront compounds, or regional projects.' },
    { title: 'Diaspora Client (Need Land Support)', desc: 'Living abroad; require Linework turnkey land acquisition and site feasibility.' },
  ];

  const stages = [
    { title: 'Have Land & Need Turnkey Architecture + Build', desc: 'Own the building plot; require full architectural schematics through general contracting.' },
    { title: 'Drawings Ready & Need Turnkey Construction', desc: 'Architectural drawings already approved; need Linework as master general contractor.' },
    { title: 'Feasibility & Conceptual Planning', desc: 'Exploring viability, zoning regulations, and preliminary construction budgeting.' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(6);
  };

  const getWhatsAppMessage = () => {
    const msg = 
      `*LINEWORK GH — NEW ARCHITECTURAL PROJECT BRIEF*\n` +
      `-------------------------------------------\n` +
      `*Client:* ${formData.fullName}\n` +
      `*Phone/WhatsApp:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n` +
      `*Typology:* ${formData.typology}\n` +
      `*Location:* ${formData.location}\n` +
      `*Project Stage:* ${formData.stage}\n` +
      `*Estimated Area:* ${formData.area} m²\n` +
      `*Estimated Budget Bracket:* ${formData.budgetTier}\n` +
      (formData.notes ? `*Specific Visions:* ${formData.notes}\n` : '') +
      `-------------------------------------------\n` +
      `Hello Linework studio, I have compiled my architectural project parameters above. Please review and schedule our initial concept appraisal.`;
    return encodeURIComponent(msg);
  };

  return (
    <div className="bg-white rounded-xl border border-stone-200 shadow-card p-6 md:p-10 max-w-4xl mx-auto">
      
      {/* Stepper Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-stone-500 mb-3">
          <span className="text-amber-700 font-bold">Studio Consultation Builder</span>
          <span>{step <= 5 ? `Phase ${step} of 5` : 'Dossier Compiled'}</span>
        </div>
        <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-amber-600 transition-all duration-400 ease-out"
            style={{ width: `${Math.min(100, step * 20)}%` }}
          />
        </div>
      </div>

      {/* STEP 1: Typology */}
      {step === 1 && (
        <div className="animate-fadeIn">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mb-2">
            What spatial vision are we bringing to life?
          </h3>
          <p className="text-stone-600 text-sm mb-6 font-sans">
            Select the primary architectural typology of your intended project.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {typologies.map((t, idx) => {
              const Icon = t.icon;
              const isSelected = formData.typology === t.title;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setFormData({ ...formData, typology: t.title })}
                  className={`p-5 rounded-lg border text-left flex flex-col gap-2 transition-all ${
                    isSelected
                      ? 'border-amber-600 bg-amber-50/50 shadow-sm ring-1 ring-amber-600'
                      : 'border-stone-200 hover:border-stone-400 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded bg-stone-100 flex items-center justify-center text-stone-800">
                      <Icon size={18} />
                    </div>
                    {isSelected && <CheckCircle2 size={18} className="text-amber-600" />}
                  </div>
                  <span className="font-bold text-base text-stone-900 mt-1">{t.title}</span>
                  <span className="text-xs text-stone-600 leading-relaxed font-sans">{t.desc}</span>
                </button>
              );
            })}
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="bg-[#0B0E14] text-white text-xs uppercase tracking-widest font-mono font-semibold px-6 py-3.5 rounded hover:bg-amber-600 transition-colors flex items-center gap-2"
            >
              <span>Continue to Location</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: Location */}
      {step === 2 && (
        <div className="animate-fadeIn">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mb-2">
            Where is the building site located?
          </h3>
          <p className="text-stone-600 text-sm mb-6 font-sans">
            We design and construct projects across Greater Accra and regional locations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {locations.map((loc, idx) => {
              const isSelected = formData.location === loc.title;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setFormData({ ...formData, location: loc.title })}
                  className={`p-5 rounded-lg border text-left flex flex-col gap-2 transition-all ${
                    isSelected
                      ? 'border-amber-600 bg-amber-50/50 shadow-sm ring-1 ring-amber-600'
                      : 'border-stone-200 hover:border-stone-400 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-base text-stone-900">{loc.title}</span>
                    {isSelected && <CheckCircle2 size={18} className="text-amber-600" />}
                  </div>
                  <span className="text-xs text-stone-600 leading-relaxed font-sans">{loc.desc}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-stone-600 text-xs uppercase tracking-wider font-mono font-semibold px-4 py-3 hover:text-stone-900 flex items-center gap-1.5"
            >
              <ArrowLeft size={14} />
              <span>Back</span>
            </button>
            <button
              type="button"
              onClick={() => setStep(3)}
              className="bg-[#0B0E14] text-white text-xs uppercase tracking-widest font-mono font-semibold px-6 py-3.5 rounded hover:bg-amber-600 transition-colors flex items-center gap-2"
            >
              <span>Continue to Stage</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Stage */}
      {step === 3 && (
        <div className="animate-fadeIn">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mb-2">
            What stage is your project currently at?
          </h3>
          <p className="text-stone-600 text-sm mb-6 font-sans">
            This determines whether we mobilize architectural schematics, engineering permits, or general contracting crews.
          </p>

          <div className="flex flex-col gap-3.5 mb-8">
            {stages.map((stg, idx) => {
              const isSelected = formData.stage === stg.title;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setFormData({ ...formData, stage: stg.title })}
                  className={`p-5 rounded-lg border text-left flex items-start justify-between gap-4 transition-all ${
                    isSelected
                      ? 'border-amber-600 bg-amber-50/50 shadow-sm ring-1 ring-amber-600'
                      : 'border-stone-200 hover:border-stone-400 bg-white'
                  }`}
                >
                  <div className="flex flex-col gap-1">
                    <span className="font-bold text-base text-stone-900">{stg.title}</span>
                    <span className="text-xs text-stone-600 leading-relaxed font-sans">{stg.desc}</span>
                  </div>
                  {isSelected && <CheckCircle2 size={18} className="text-amber-600 flex-shrink-0 mt-1" />}
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="text-stone-600 text-xs uppercase tracking-wider font-mono font-semibold px-4 py-3 hover:text-stone-900 flex items-center gap-1.5"
            >
              <ArrowLeft size={14} />
              <span>Back</span>
            </button>
            <button
              type="button"
              onClick={() => setStep(4)}
              className="bg-[#0B0E14] text-white text-xs uppercase tracking-widest font-mono font-semibold px-6 py-3.5 rounded hover:bg-amber-600 transition-colors flex items-center gap-2"
            >
              <span>Continue to Scale &amp; Budget</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: Area & Budget */}
      {step === 4 && (
        <div className="animate-fadeIn">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mb-2">
            Estimated floor area &amp; turnkey budget?
          </h3>
          <p className="text-stone-600 text-sm mb-6 font-sans">
            Adjust the slider to preview estimated turnkey construction ranges for premium architectural builds in Accra.
          </p>

          <div className="bg-[#FAF9F6] border border-stone-200 p-6 rounded-lg mb-8">
            <div className="flex items-center justify-between mb-3 font-mono">
              <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold">Estimated Gross Floor Area</span>
              <span className="text-xl font-bold text-amber-700">{formData.area} m²</span>
            </div>

            <input
              type="range"
              min="150"
              max="1500"
              step="50"
              value={formData.area}
              onChange={(e) => updateArea(parseInt(e.target.value))}
              className="w-full accent-amber-600 cursor-pointer h-2 bg-stone-200 rounded-lg mb-4"
            />

            <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs">
              <span className="text-stone-500 uppercase tracking-wider">Estimated Turnkey Delivery Bracket:</span>
              <span className="font-bold text-stone-900 text-sm bg-white py-1 px-3 rounded border border-stone-200">
                {formData.budgetTier}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep(3)}
              className="text-stone-600 text-xs uppercase tracking-wider font-mono font-semibold px-4 py-3 hover:text-stone-900 flex items-center gap-1.5"
            >
              <ArrowLeft size={14} />
              <span>Back</span>
            </button>
            <button
              type="button"
              onClick={() => setStep(5)}
              className="bg-[#0B0E14] text-white text-xs uppercase tracking-widest font-mono font-semibold px-6 py-3.5 rounded hover:bg-amber-600 transition-colors flex items-center gap-2"
            >
              <span>Continue to Contact</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}

      {/* STEP 5: Contact Info */}
      {step === 5 && (
        <form onSubmit={handleSubmit} className="animate-fadeIn">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mb-2">
            Who should our Principal Architect contact?
          </h3>
          <p className="text-stone-600 text-sm mb-6 font-sans">
            All inquiries are treated with strict confidentiality. We review your parameters and respond with a preliminary appraisal within 24 hours.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-stone-600 font-semibold" htmlFor="fullName">
                Full Name *
              </label>
              <input
                id="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Kwesi Mensah"
                className="w-full text-base p-3.5 rounded border border-stone-300 focus:border-amber-600 focus:outline-none bg-white font-sans text-stone-900"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-stone-600 font-semibold" htmlFor="phone">
                WhatsApp / Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+233 24 000 0000 or +44 / +1"
                className="w-full text-base p-3.5 rounded border border-stone-300 focus:border-amber-600 focus:outline-none bg-white font-sans text-stone-900"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5 mb-5">
            <label className="text-xs font-mono uppercase tracking-wider text-stone-600 font-semibold" htmlFor="email">
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              placeholder="kwesi@company.com"
              className="w-full text-base p-3.5 rounded border border-stone-300 focus:border-amber-600 focus:outline-none bg-white font-sans text-stone-900"
            />
          </div>

          <div className="flex flex-col gap-1.5 mb-8">
            <label className="text-xs font-mono uppercase tracking-wider text-stone-600 font-semibold" htmlFor="notes">
              Specific Project Vision or Plot Details (Optional)
            </label>
            <textarea
              id="notes"
              rows={3}
              value={formData.notes}
              onChange={e => setFormData({ ...formData, notes: e.target.value })}
              placeholder="e.g. 5-bedroom cantilevered residence in Cantonments with double-height glass, natural teak louvers, and a 16m pool..."
              className="w-full text-base p-3.5 rounded border border-stone-300 focus:border-amber-600 focus:outline-none bg-white font-sans text-stone-900"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep(4)}
              className="text-stone-600 text-xs uppercase tracking-wider font-mono font-semibold px-4 py-3 hover:text-stone-900 flex items-center gap-1.5"
            >
              <ArrowLeft size={14} />
              <span>Back</span>
            </button>
            <button
              type="submit"
              className="bg-amber-600 text-white text-xs uppercase tracking-widest font-mono font-bold px-8 py-3.5 rounded hover:bg-amber-700 transition-colors shadow-sm flex items-center gap-2"
            >
              <span>Compile &amp; Dispatch Dossier</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </form>
      )}

      {/* STEP 6: Confirmation & WhatsApp Direct */}
      {step === 6 && (
        <div className="text-center py-6 animate-fadeIn">
          <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 size={32} />
          </div>

          <h3 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mb-2">
            Architectural Project Dossier Compiled
          </h3>
          <p className="text-stone-600 text-sm max-w-lg mx-auto mb-6 font-sans">
            Thank you, {formData.fullName}. Your project parameters have been structured and recorded for Linework GH’s studio directors.
          </p>

          {/* Dossier Card */}
          <div className="bg-[#FAF9F6] border border-stone-200 rounded-lg p-5 text-left max-w-xl mx-auto mb-8 font-mono text-xs leading-relaxed text-stone-700">
            <div className="pb-3 mb-3 border-b border-stone-200 flex justify-between font-bold text-stone-900">
              <span>PROJECT DOSSIER SUMMARY</span>
              <span className="text-amber-700">REF: LWGH-{new Date().getFullYear()}</span>
            </div>
            <div><strong>Client:</strong> {formData.fullName} ({formData.phone} &middot; {formData.email})</div>
            <div><strong>Typology:</strong> {formData.typology}</div>
            <div><strong>Location:</strong> {formData.location}</div>
            <div><strong>Project Stage:</strong> {formData.stage}</div>
            <div><strong>Estimated Scale:</strong> {formData.area} m²</div>
            <div><strong>Turnkey Bracket:</strong> {formData.budgetTier}</div>
            {formData.notes && <div className="mt-2 text-stone-600"><strong>Notes:</strong> {formData.notes}</div>}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/233256869481?text=${getWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] text-stone-950 font-mono font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded flex items-center justify-center gap-2 hover:bg-[#20ba5a] transition-colors shadow-sm"
            >
              <Phone size={15} />
              <span>Send Directly to WhatsApp Studio (+233 25 686 9481)</span>
            </a>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-full sm:w-auto border border-stone-300 text-stone-700 font-mono text-xs uppercase tracking-wider py-3.5 px-5 rounded hover:bg-stone-50 transition-colors"
            >
              Modify Brief
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
