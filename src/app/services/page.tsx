import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import CtaBand from '@/components/ui/CtaBand';
import { WhatsAppIcon } from '@/components/ui/icons';
import { whatsappLink } from '@/lib/site';
import TurnkeyProcessDiagram from '@/components/TurnkeyProcessDiagram';

export const metadata: Metadata = {
  title: 'Services — Design, Permits, Construction & Interiors',
  description:
    'Architectural drawings and building permits, construction from foundation to finishing, interiors and joinery, and project management for Ghanaians building from abroad. One team in Accra.',
  alternates: { canonical: '/services' },
};

type Service = {
  id: string;
  number: string;
  title: string;
  summary: string;
  body: string;
  includes: string[];
  image: string;
  imageAlt: string;
  whatsapp: string;
};

const SERVICES: Service[] = [
  {
    "id": "design",
    "number": "01",
    "title": "Architectural design & permits",
    "summary": "Start with the site, the brief and the drawings.",
    "body": "Discuss your site, how you want to use the space and the design information you need. The proposal should set out drawing stages, specialist input and any permit application support. Approval rests with the relevant authority.",
    "includes": [
      "Site visit and project brief",
      "Concept design and visual studies",
      "Drawing scope and specialist coordination",
      "Permit application support, where agreed",
      "Cost planning and specification review"
    ],
    "image": "/assets/craft-studio.jpg",
    "imageAlt": "Illustrative reference for architectural design & permits",
    "whatsapp": "Hi notjustlines, I would like to discuss drawings and permit application support."
  },
  {
    "id": "construction",
    "number": "02",
    "title": "Construction",
    "summary": "Plan the work from foundation to finishing.",
    "body": "Bring your drawings or discuss a combined design and construction scope. Agree the work, responsibilities, inspection requirements, programme and payment terms before starting.",
    "includes": [
      "Site preparation and construction sequence",
      "Structure and building envelope",
      "Plumbing and electrical coordination",
      "Finishes and installation",
      "Site supervision and inspection arrangements"
    ],
    "image": "/assets/site-engineering.jpg",
    "imageAlt": "Illustrative reference for construction",
    "whatsapp": "Hi notjustlines, I would like to discuss construction."
  },
  {
    "id": "interiors",
    "number": "03",
    "title": "Interiors, joinery & fit-out",
    "summary": "Make the space work for everyday life.",
    "body": "Explore layouts, materials, lighting and joinery for a home or workplace. Fabrication, sourcing and installation responsibilities should be defined in the project scope.",
    "includes": [
      "Interior layouts",
      "Material and finish selection",
      "Kitchen, wardrobe and joinery design",
      "Lighting, ceilings and flooring",
      "Fit-out and installation planning"
    ],
    "image": "/assets/interior-ridge.jpg",
    "imageAlt": "Illustrative reference for interiors, joinery & fit-out",
    "whatsapp": "Hi notjustlines, I would like to discuss interiors and fit-out."
  },
  {
    "id": "diaspora",
    "number": "04",
    "title": "Project management & building from abroad",
    "summary": "Plan a project in Ghana from wherever you live.",
    "body": "Tell us where you are based and what support you need on the ground. Discuss communication, reporting and approval arrangements before agreeing the project. Land ownership questions need review by your legal adviser.",
    "includes": [
      "Site information and project brief",
      "Time-zone and contact preferences",
      "Progress reporting arrangements",
      "Budget and change approval process",
      "Project contact and visit arrangements"
    ],
    "image": "/assets/villa-cantonments.jpg",
    "imageAlt": "Illustrative reference for project management & building from abroad",
    "whatsapp": "Hi notjustlines, I would like to discuss building in Ghana from abroad."
  },
  {
    "id": "renovations",
    "number": "05",
    "title": "Renovations & extensions",
    "summary": "Review the existing building before planning changes.",
    "body": "Describe what you would like to change, finish or add. The condition of the building and any required structural assessment will shape what is feasible.",
    "includes": [
      "Existing building review",
      "Completion of unfinished spaces",
      "Extensions and layout changes",
      "Kitchen, bathroom and interior updates"
    ],
    "image": "/assets/facade-detail.jpg",
    "imageAlt": "Illustrative reference for renovations & extensions",
    "whatsapp": "Hi notjustlines, I would like to discuss a renovation or extension."
  }
];


export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="container-site pt-10 pb-12 md:pt-16 md:pb-20">
        <Reveal className="flex flex-col gap-5">
          <span className="eyebrow">Our services</span>
          <h1 className="max-w-4xl text-display-lg font-bold text-ink-900">
            One team, from your plot to your keys.
          </h1>
          <p className="max-w-2xl text-lg text-ink-600">
            Discuss the services you need, from an initial design to construction or a fit-out. Scope, fees, timescales and responsibilities are agreed for each project. Images on this page are illustrative references.
          </p>
        </Reveal>

        {/* Quick jump links — swipe on mobile */}
        <Reveal delay={120} className="mt-8">
          <nav aria-label="Services on this page" className="snap-row sm:mx-0 sm:flex-wrap sm:px-0 sm:pb-0">
            {SERVICES.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex min-h-[2.75rem] shrink-0 snap-start items-center rounded-full border border-line bg-white px-5 text-sm font-semibold text-ink-800 transition-colors hover:border-ink-900"
              >
                {s.title}
              </a>
            ))}
          </nav>
        </Reveal>
      </section>

      {/* Services */}
      <section className="container-site pb-20 md:pb-28">
        <div className="flex flex-col gap-16 md:gap-28">
          {SERVICES.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <article
                key={s.id}
                id={s.id}
                className="grid items-center gap-8 md:grid-cols-2 md:gap-14 lg:gap-20"
              >
                <Reveal className={`relative ${flip ? 'md:order-2' : ''}`}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-sand md:aspect-[4/5] lg:aspect-[5/5.4]">
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-ink-900 backdrop-blur">
                    {s.number}
                  </span>
                </Reveal>

                <Reveal delay={100} className={flip ? 'md:order-1' : ''}>
                  <h2 className="text-display-md font-bold text-ink-900">{s.title}</h2>
                  <p className="mt-3 text-lg font-medium text-ink-800">{s.summary}</p>
                  <p className="mt-4 text-base leading-relaxed text-ink-600">{s.body}</p>

                  <h3 className="mt-8 text-lg font-bold text-ink-900">Scope to discuss</h3>
                  <ul className="mt-4 grid gap-3">
                    {s.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-base text-ink-700">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                          <Check size={14} strokeWidth={3} />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <a
                      href={whatsappLink(s.whatsapp)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                    >
                      <WhatsAppIcon size={18} /> Ask about this
                    </a>
                    <Link href="/contact#brief" className="btn btn-outline">
                      Send us your brief <ArrowRight size={18} />
                    </Link>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </section>

      {/* How we work: Interactive 5-stage turnkey delivery process diagram */}
      <TurnkeyProcessDiagram />

      <div className="pt-20 md:pt-28">
        <CtaBand
          title="Not sure which service you need?"
          text="Tell us about your plot or building and the questions you would like to discuss."
          whatsappMessage="Hi notjustlines, I'm not sure which service I need. Can we talk?"
        />
      </div>
    </>
  );
}
