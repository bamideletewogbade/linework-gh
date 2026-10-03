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
    <div className="bg-white rounded-3xl border border-line shadow-sm p-6 sm:p-8 md:p-10 max-w-4xl mx-auto">
      
      {/* Stepper Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-ink-500 mb-3">
          <span className="text-brand-700">Project Brief</span>
          <span>{step <= 5 ? `Step ${step} of 5` : 'Summary ready'}</span>
        </div>
        <div className="w-full h-2 bg-paper rounded-full overflow-hidden">
          <div 
            className="h-full bg-brand transition-all duration-300 ease-out"
            style={{ width: `${Math.min(100, step * 20)}%` }}
          />
        </div>
      </div>

      {/* STEP 1: Typology */}
      {step === 1 && (
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-ink-900 mb-2">
            What are we building for you?
          </h3>
          <p className="text-ink-600 text-sm mb-6">
            Select the primary type of property you want to develop.
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
                  className={`p-5 rounded-2xl border text-left flex flex-col gap-2 transition-all ${
                    isSelected
                      ? 'border-brand bg-paper shadow-sm ring-1 ring-brand'
                      : 'border-line hover:border-ink-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-ink-100 flex items-center justify-center text-ink-800">
                      <Icon size={18} />
                    </div>
                    {isSelected && <CheckCircle2 size={18} className="text-brand-700" />}
                  </div>
                  <span className="font-bold text-base text-ink-900 mt-1">{t.title}</span>
                  <span className="text-xs text-ink-600 leading-relaxed">{t.desc}</span>
                </button>
              );
            })}
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="btn btn-primary"
            >
              <span>Continue to Location</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: Location */}
      {step === 2 && (
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-ink-900 mb-2">
            Where is your land located?
          </h3>
          <p className="text-ink-600 text-sm mb-6">
            We design and build projects across Greater Accra and regional locations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {locations.map((loc, idx) => {
              const isSelected = formData.location === loc.title;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setFormData({ ...formData, location: loc.title })}
                  className={`p-5 rounded-2xl border text-left flex flex-col gap-2 transition-all ${
                    isSelected
                      ? 'border-brand bg-paper shadow-sm ring-1 ring-brand'
                      : 'border-line hover:border-ink-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-base text-ink-900">{loc.title}</span>
                    {isSelected && <CheckCircle2 size={18} className="text-brand-700" />}
                  </div>
                  <span className="text-xs text-ink-600 leading-relaxed">{loc.desc}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="btn btn-outline"
            >
              <ArrowLeft size={16} />
              <span>Back</span>
            </button>
            <button
              type="button"
              onClick={() => setStep(3)}
              className="btn btn-primary"
            >
              <span>Continue to Stage</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Stage */}
      {step === 3 && (
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-ink-900 mb-2">
            What stage is your project currently at?
          </h3>
          <p className="text-ink-600 text-sm mb-6">
            Whether you just bought land or already have drawings, we adapt to what you need.
          </p>

          <div className="flex flex-col gap-3.5 mb-8">
            {stages.map((stg, idx) => {
              const isSelected = formData.stage === stg.title;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setFormData({ ...formData, stage: stg.title })}
                  className={`p-5 rounded-2xl border text-left flex items-start justify-between gap-4 transition-all ${
                    isSelected
                      ? 'border-brand bg-paper shadow-sm ring-1 ring-brand'
                      : 'border-line hover:border-ink-300 bg-white'
                  }`}
                >
                  <div className="flex flex-col gap-1">
                    <span className="font-bold text-base text-ink-900">{stg.title}</span>
                    <span className="text-xs text-ink-600 leading-relaxed">{stg.desc}</span>
                  </div>
                  {isSelected && <CheckCircle2 size={18} className="text-brand-700 shrink-0 mt-1" />}
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="btn btn-outline"
            >
              <ArrowLeft size={16} />
              <span>Back</span>
            </button>
            <button
              type="button"
              onClick={() => setStep(4)}
              className="btn btn-primary"
            >
              <span>Continue to Size &amp; Budget</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: Area & Budget */}
      {step === 4 && (
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-ink-900 mb-2">
            Approximate floor size &amp; estimated cost
          </h3>
          <p className="text-ink-600 text-sm mb-6">
            Adjust the slider to see a rough guide for turnkey design &amp; build in Accra (excluding land).
          </p>

          <div className="bg-paper border border-line p-6 rounded-2xl mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-wider text-ink-500 font-semibold">Estimated Gross Floor Area</span>
              <span className="text-xl font-bold text-brand-700">{formData.area} m²</span>
            </div>

            <input
              type="range"
              min="150"
              max="1500"
              step="50"
              value={formData.area}
              onChange={(e) => updateArea(parseInt(e.target.value))}
              className="w-full accent-brand cursor-pointer h-2 bg-ink-200 rounded-lg mb-4"
            />

            <div className="pt-4 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <span className="text-ink-600 font-medium">Estimated Turnkey Construction Range:</span>
              <span className="font-bold text-ink-900 text-sm bg-white py-1.5 px-3 rounded-full border border-line">
                {formData.budgetTier}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep(3)}
              className="btn btn-outline"
            >
              <ArrowLeft size={16} />
              <span>Back</span>
            </button>
            <button
              type="button"
              onClick={() => setStep(5)}
              className="btn btn-primary"
            >
              <span>Continue to Contact</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* STEP 5: Contact Info */}
      {step === 5 && (
        <form onSubmit={handleSubmit}>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-ink-900 mb-2">
            How should we get in touch?
          </h3>
          <p className="text-ink-600 text-sm mb-6">
            We review your details and send a direct feasibility appraisal within one working day.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-ink-700" htmlFor="fullName">
                Full Name *
              </label>
              <input
                id="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Kwesi Mensah"
                className="w-full text-base p-3.5 rounded-xl border border-line focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none bg-paper text-ink-900"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-ink-700" htmlFor="phone">
                WhatsApp / Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+233 24 000 0000 or UK/US/Canada"
                className="w-full text-base p-3.5 rounded-xl border border-line focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none bg-paper text-ink-900"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5 mb-5">
            <label className="text-xs font-semibold uppercase tracking-wider text-ink-700" htmlFor="email">
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              placeholder="kwesi@example.com"
              className="w-full text-base p-3.5 rounded-xl border border-line focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none bg-paper text-ink-900"
            />
          </div>

          <div className="flex flex-col gap-1.5 mb-8">
            <label className="text-xs font-semibold uppercase tracking-wider text-ink-700" htmlFor="notes">
              Tell us about your plot or ideas (Optional)
            </label>
            <textarea
              id="notes"
              rows={3}
              value={formData.notes}
              onChange={e => setFormData({ ...formData, notes: e.target.value })}
              placeholder="e.g. 4-bedroom house in Cantonments with staff quarters, a swimming pool, and solar backup..."
              className="w-full text-base p-3.5 rounded-xl border border-line focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none bg-paper text-ink-900"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep(4)}
              className="btn btn-outline"
            >
              <ArrowLeft size={16} />
              <span>Back</span>
            </button>
            <button
              type="submit"
              className="btn btn-primary"
            >
              <span>Review &amp; Send</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </form>
      )}

      {/* STEP 6: Confirmation & WhatsApp Direct */}
      {step === 6 && (
        <div className="text-center py-4">
          <div className="w-16 h-16 rounded-full bg-brand/10 text-brand-700 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 size={36} />
          </div>

          <h3 className="font-display text-2xl md:text-3xl font-bold text-ink-900 mb-2">
            Your Project Summary is Ready
          </h3>
          <p className="text-ink-600 text-sm max-w-lg mx-auto mb-6">
            Thank you, {formData.fullName}. You can send this straight to our team on WhatsApp for an immediate response.
          </p>

          {/* Dossier Card */}
          <div className="bg-paper border border-line rounded-2xl p-6 text-left max-w-xl mx-auto mb-8 text-xs leading-relaxed text-ink-700">
            <div className="pb-3 mb-3 border-b border-line flex justify-between font-bold text-ink-900">
              <span>PROJECT SUMMARY</span>
              <span className="text-brand-700">Linework GH</span>
            </div>
            <div className="space-y-1.5">
              <div><strong>Name:</strong> {formData.fullName} ({formData.phone} &middot; {formData.email})</div>
              <div><strong>Building Type:</strong> {formData.typology}</div>
              <div><strong>Location:</strong> {formData.location}</div>
              <div><strong>Current Stage:</strong> {formData.stage}</div>
              <div><strong>Estimated Size:</strong> {formData.area} m²</div>
              <div><strong>Estimated Budget Range:</strong> {formData.budgetTier}</div>
              {formData.notes && <div className="mt-2 text-ink-600"><strong>Notes:</strong> {formData.notes}</div>}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/233256869481?text=${getWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp w-full sm:w-auto"
            >
              <Phone size={18} />
              <span>Send to WhatsApp (+233 25 686 9481)</span>
            </a>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="btn btn-outline w-full sm:w-auto"
            >
              Modify Brief
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
