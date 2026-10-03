'use client';

import React, { useState } from 'react';
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Phone,
  Home,
  Building2,
  Armchair,
  Layers,
  Sparkles,
  HelpCircle,
  Calendar,
  Clock,
  Send,
  MessageSquareQuote,
} from 'lucide-react';
import { WhatsAppIcon } from './ui/icons';
import { SITE, whatsappLink } from '@/lib/site';

interface BriefData {
  intent: string;
  projectType: string;
  location: string;
  stage: string;
  landStatus: string;
  area: number;
  budgetBracket: string;
  timeline: string;
  fullName: string;
  phone: string;
  email: string;
  clientLocation: string; // Accra / UK / US / Canada / Europe / Other
  preferredContact: 'WhatsApp' | 'Phone Call' | 'Video Call';
  message: string;
}

export default function ConversationalBrief() {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<BriefData>({
    intent: 'I want to build a new property from scratch',
    projectType: 'Private Home / Family Villa',
    location: 'Cantonments / Airport / Ridge / Labone',
    stage: 'I own a plot and need architectural design + full construction',
    landStatus: 'Land acquired with registered indenture/title',
    area: 400,
    budgetBracket: '$200,000 – $340,000 (~3.1M – 5.3M GHS)',
    timeline: 'Ready to start within 1–3 months',
    fullName: '',
    phone: '',
    email: '',
    clientLocation: 'Living abroad (UK / US / Canada / Diaspora)',
    preferredContact: 'WhatsApp',
    message: '',
  });

  const updateArea = (val: number) => {
    const minUSD = Math.round(val * 500);
    const maxUSD = Math.round(val * 850);
    const minGHS = ((minUSD * 15.6) / 1000000).toFixed(1);
    const maxGHS = ((maxUSD * 15.6) / 1000000).toFixed(1);
    const bracket = `$${minUSD.toLocaleString()} – $${maxUSD.toLocaleString()} (~${minGHS}M – ${maxGHS}M GHS)`;

    setFormData((prev) => ({
      ...prev,
      area: val,
      budgetBracket: bracket,
    }));
  };

  // STEP 1: What is the main reason for reaching out today? (Front desk triage)
  const intents = [
    {
      title: 'I want to build a new property from scratch',
      desc: 'You have a plot (or are getting one) and want turnkey drawings, permits, and construction.',
      badge: 'Turnkey Design & Build',
      icon: Home,
    },
    {
      title: 'I already have approved drawings — I need a builder',
      desc: 'Your architectural plans are ready; you need an honest, engineer-supervised contractor.',
      badge: 'Construction Only',
      icon: Layers,
    },
    {
      title: 'I want to renovate, extend, or finish an uncompleted building',
      desc: 'Add an extra floor, build a boys’ quarters, remodel a kitchen, or complete an old structure.',
      badge: 'Renovation & Fit-out',
      icon: Armchair,
    },
    {
      title: 'I live abroad and need land verification & feasibility',
      desc: 'You want an experienced team on the ground before committing money to land or drawings.',
      badge: 'Diaspora Feasibility',
      icon: Sparkles,
    },
  ];

  // STEP 2: Typology & Scale
  const projectTypes = [
    { title: 'Private Home / Family Villa', desc: 'Bespoke 3 to 6-bedroom residence with compound, boys’ quarters, and optional pool.' },
    { title: 'Commercial Office / Showroom / Retail', desc: 'Modern commercial workplace, clinic, gallery, or restaurant space.' },
    { title: 'Multi-Unit Townhouses or Apartments', desc: 'Gated duplex enclave or 2–4 unit residential rental development.' },
    { title: 'Interior Fit-out & Custom Joinery', desc: 'Luxury interior remodeling, bespoke kitchen cabinetry, and custom wardrobes.' },
  ];

  // Locations in Accra & Regional
  const locations = [
    { title: 'Cantonments / Airport / Ridge / Labone', desc: 'Prime central Accra diplomatic & residential zones.' },
    { title: 'East Legon / Trasacco / Adjiringanor / Airport Hills', desc: 'High-growth residential neighbourhoods with large plots.' },
    { title: 'Oyarifa / Aburi / Dodowa / Hills', desc: 'Scenic highland estates and retreat properties.' },
    { title: 'Other Greater Accra / Regional Location', desc: 'Tema, Sakumono, Spintex, Cape Coast, Takoradi, or Kumasi.' },
  ];

  // Current plot and paperwork status
  const landStatuses = [
    { title: 'Land acquired with registered indenture/title', desc: 'We can start site visit & concept drawings immediately.' },
    { title: 'Land identified, finalising purchase with lawyer', desc: 'We can help verify topography, access, and building feasibility.' },
    { title: 'Still searching for a suitable plot', desc: 'We advise on plot sizes and zoning requirements in Accra.' },
    { title: 'Existing structure already on site', desc: 'Needs structural assessment or remodel planning.' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(5);
  };

  const getWhatsAppMessage = () => {
    const msg =
      `*NOTJUSTLINES — PROJECT BRIEF & CONSULTATION REQUEST*\n` +
      `-------------------------------------------\n` +
      `*Client Name:* ${formData.fullName}\n` +
      `*Current Location:* ${formData.clientLocation}\n` +
      `*Phone/WhatsApp:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n` +
      `*Preferred Contact:* ${formData.preferredContact}\n` +
      `-------------------------------------------\n` +
      `*Primary Request:* ${formData.intent}\n` +
      `*Building Type:* ${formData.projectType}\n` +
      `*Plot Location:* ${formData.location}\n` +
      `*Land & Legal Status:* ${formData.landStatus}\n` +
      `*Approx. Floor Area:* ${formData.area} m²\n` +
      `*Estimated Cost Bracket:* ${formData.budgetBracket}\n` +
      `*Target Timeline:* ${formData.timeline}\n` +
      (formData.message ? `*Client Notes:* ${formData.message}\n` : '') +
      `-------------------------------------------\n` +
      `Hello notjustlines front desk, I have completed my project parameters above. Please review and arrange my initial consultation.`;
    return encodeURIComponent(msg);
  };

  return (
    <div className="bg-white rounded-3xl border border-line shadow-sm p-6 sm:p-8 md:p-10 max-w-4xl mx-auto">
      {/* Front Desk Header & Stepper Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-ink-500 mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            <span className="text-brand-700 font-bold">Front Desk &amp; Consultation Desk</span>
          </div>
          <span>{step <= 4 ? `Step ${step} of 4` : 'Review & Submit'}</span>
        </div>
        <div className="w-full h-2 bg-paper rounded-full overflow-hidden">
          <div
            className="h-full bg-brand transition-all duration-300 ease-out"
            style={{ width: `${Math.min(100, step * 25)}%` }}
          />
        </div>
      </div>

      {/* STEP 1: What can we help you with? (Triage & Lead intent) */}
      {step === 1 && (
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-700 mb-1 block">
            Welcome to notjustlines
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-ink-900 mb-2">
            What brings you to our studio today?
          </h3>
          <p className="text-ink-600 text-sm mb-6">
            Tell our front desk team what you’re planning so we connect you with the right architect or site engineer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {intents.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = formData.intent === item.title;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setFormData({ ...formData, intent: item.title })}
                  className={`p-5 rounded-2xl border text-left flex flex-col justify-between gap-3 transition-all ${
                    isSelected
                      ? 'border-brand bg-paper shadow-sm ring-1 ring-brand'
                      : 'border-line hover:border-ink-300 bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="w-9 h-9 rounded-xl bg-ink-100 flex items-center justify-center text-ink-800">
                      <Icon size={18} />
                    </div>
                    <span className="text-[11px] font-bold text-brand-700 bg-brand/10 px-2.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-base text-ink-900 block mb-1">{item.title}</span>
                    <span className="text-xs text-ink-600 leading-relaxed block">{item.desc}</span>
                  </div>
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
              <span>Continue: Property Details</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: Property Type & Location */}
      {step === 2 && (
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-700 mb-1 block">
            Scope &amp; Geography
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-ink-900 mb-2">
            What type of property and where?
          </h3>
          <p className="text-ink-600 text-sm mb-6">
            We handle projects across Greater Accra and regional locations.
          </p>

          <div className="space-y-6 mb-8">
            {/* Building Type */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-ink-500 block mb-3">
                1. Select Property Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((pt, idx) => {
                  const isSelected = formData.projectType === pt.title;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setFormData({ ...formData, projectType: pt.title })}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'border-brand bg-paper ring-1 ring-brand font-semibold'
                          : 'border-line hover:border-ink-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-ink-900">{pt.title}</span>
                        {isSelected && <CheckCircle2 size={16} className="text-brand-700" />}
                      </div>
                      <span className="text-xs text-ink-600 leading-relaxed block">{pt.desc}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Plot Location */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-ink-500 block mb-3">
                2. Neighborhood / Location
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {locations.map((loc, idx) => {
                  const isSelected = formData.location === loc.title;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setFormData({ ...formData, location: loc.title })}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'border-brand bg-paper ring-1 ring-brand'
                          : 'border-line hover:border-ink-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-ink-900">{loc.title}</span>
                        {isSelected && <CheckCircle2 size={16} className="text-brand-700" />}
                      </div>
                      <span className="text-xs text-ink-600 leading-relaxed block">{loc.desc}</span>
                    </button>
                  );
                })}
              </div>
            </div>
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
              <span>Continue: Land &amp; Budget</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Land Status & Rough Scale/Budget */}
      {step === 3 && (
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-700 mb-1 block">
            Readiness &amp; Estimates
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-ink-900 mb-2">
            Land status &amp; construction scale
          </h3>
          <p className="text-ink-600 text-sm mb-6">
            Every project has a realistic budget. This helps us suggest the best approach before you spend money on drawings.
          </p>

          {/* Land Paperwork Status */}
          <div className="mb-6">
            <label className="text-xs font-bold uppercase tracking-wider text-ink-500 block mb-3">
              What is the status of the land documentation?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {landStatuses.map((ls, idx) => {
                const isSelected = formData.landStatus === ls.title;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setFormData({ ...formData, landStatus: ls.title })}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'border-brand bg-paper ring-1 ring-brand'
                        : 'border-line hover:border-ink-300 bg-white'
                    }`}
                  >
                    <span className="text-sm font-bold text-ink-900 block mb-1">{ls.title}</span>
                    <span className="text-xs text-ink-600 block">{ls.desc}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Scale & Budget Slider */}
          <div className="bg-paper border border-line p-6 rounded-2xl mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-wider text-ink-500 font-semibold">
                Approximate Gross Floor Area
              </span>
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

            <div className="pt-3 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <span className="text-ink-600 font-medium">Estimated Turnkey Construction Range (excl. land):</span>
              <span className="font-bold text-ink-900 text-xs sm:text-sm bg-white py-1 px-3 rounded-full border border-line">
                {formData.budgetBracket}
              </span>
            </div>
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
              <span>Continue: Your Contact</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: Client Info & Timezone / Support Channel */}
      {step === 4 && (
        <form onSubmit={handleSubmit}>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-700 mb-1 block">
            Customer Support &amp; Consultation Booking
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-ink-900 mb-2">
            Who should we reach out to?
          </h3>
          <p className="text-ink-600 text-sm mb-6">
            We reply within one working day with preliminary advice and feasibility feedback.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-ink-700" htmlFor="fullName">
                Your Full Name *
              </label>
              <input
                id="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Kwesi Mensah / Sarah Boateng"
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
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+233 ... or UK / US / Canada number"
                className="w-full text-base p-3.5 rounded-xl border border-line focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none bg-paper text-ink-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-ink-700" htmlFor="email">
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="you@example.com"
                className="w-full text-base p-3.5 rounded-xl border border-line focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none bg-paper text-ink-900"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-ink-700" htmlFor="clientLocation">
                Where are you currently based?
              </label>
              <select
                id="clientLocation"
                value={formData.clientLocation}
                onChange={(e) => setFormData({ ...formData, clientLocation: e.target.value })}
                className="w-full text-base p-3.5 rounded-xl border border-line focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none bg-paper text-ink-900"
              >
                <option value="Accra / Ghana">Accra / Ghana</option>
                <option value="United Kingdom (London / UK)">United Kingdom (London / UK)</option>
                <option value="United States (US East / Central / West)">United States (US)</option>
                <option value="Canada (Toronto / Vancouver)">Canada</option>
                <option value="Europe / Other Diaspora">Europe / Other Diaspora</option>
              </select>
            </div>
          </div>

          {/* Preferred channel */}
          <div className="mb-5">
            <label className="text-xs font-semibold uppercase tracking-wider text-ink-700 block mb-2">
              Preferred Way to Connect
            </label>
            <div className="grid grid-cols-3 gap-3">
              {(['WhatsApp', 'Phone Call', 'Video Call'] as const).map((method) => {
                const isSelected = formData.preferredContact === method;
                return (
                  <button
                    key={method}
                    type="button"
                    onClick={() => setFormData({ ...formData, preferredContact: method })}
                    className={`py-3 px-3 rounded-xl border text-center text-xs font-bold transition-all ${
                      isSelected
                        ? 'bg-ink-950 text-white border-ink-950 shadow-sm'
                        : 'bg-paper text-ink-700 border-line hover:border-ink-400'
                    }`}
                  >
                    {method}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-1.5 mb-8">
            <label className="text-xs font-semibold uppercase tracking-wider text-ink-700" htmlFor="message">
              Any specific questions or details? (Optional)
            </label>
            <textarea
              id="message"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="e.g. Plot is on a slight slope in East Legon Hills; looking for 4 ensuite bedrooms with solar backup and staff quarters..."
              className="w-full text-base p-3.5 rounded-xl border border-line focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none bg-paper text-ink-900"
            />
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
              type="submit"
              className="btn btn-primary"
            >
              <span>Review Summary</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </form>
      )}

      {/* STEP 5: Confirmation Dossier & Instant Dispatch */}
      {step === 5 && (
        <div className="text-center py-4">
          <div className="w-16 h-16 rounded-full bg-brand/10 text-brand-700 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 size={36} />
          </div>

          <h3 className="font-display text-2xl md:text-3xl font-bold text-ink-900 mb-2">
            Your Project Summary is Ready
          </h3>
          <p className="text-ink-600 text-sm max-w-lg mx-auto mb-6">
            Thank you, {formData.fullName}. You can send this dossier straight to our front desk on WhatsApp for instant receipt, or wait for our team to contact you via {formData.preferredContact}.
          </p>

          {/* Dossier Card */}
          <div className="bg-paper border border-line rounded-2xl p-6 text-left max-w-xl mx-auto mb-8 text-xs leading-relaxed text-ink-700 shadow-sm">
            <div className="pb-3 mb-3 border-b border-line flex justify-between font-bold text-ink-900">
              <span>PROJECT BRIEF DOSSIER</span>
              <span className="text-brand-700">{SITE.name}</span>
            </div>
            <div className="space-y-1.5">
              <div>
                <strong>Client:</strong> {formData.fullName} ({formData.phone} &middot; {formData.email})
              </div>
              <div>
                <strong>Base Location:</strong> {formData.clientLocation}
              </div>
              <div>
                <strong>Primary Request:</strong> {formData.intent}
              </div>
              <div>
                <strong>Property Type:</strong> {formData.projectType}
              </div>
              <div>
                <strong>Site Location:</strong> {formData.location}
              </div>
              <div>
                <strong>Land Status:</strong> {formData.landStatus}
              </div>
              <div>
                <strong>Estimated Floor Area:</strong> {formData.area} m²
              </div>
              <div>
                <strong>Estimated Budget Guide:</strong> {formData.budgetBracket}
              </div>
              <div>
                <strong>Preferred Follow-up:</strong> {formData.preferredContact}
              </div>
              {formData.message && (
                <div className="mt-2 text-ink-600 bg-white p-2.5 rounded-lg border border-line">
                  <strong>Notes:</strong> {formData.message}
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/${SITE.whatsappNumber}?text=${getWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp w-full sm:w-auto text-xs"
            >
              <WhatsAppIcon size={18} />
              <span>Send directly to WhatsApp ({SITE.phoneDisplay})</span>
            </a>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="btn btn-outline w-full sm:w-auto text-xs"
            >
              Edit parameters
            </button>
          </div>

          <p className="mt-4 text-[11px] text-ink-500">
            Our studio hours are Monday to Saturday, 8:00am – 6:00pm GMT. WhatsApp inquiries are attended to continuously.
          </p>
        </div>
      )}
    </div>
  );
}
