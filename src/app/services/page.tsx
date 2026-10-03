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
    id: 'design',
    number: '01',
    title: 'Architectural design & permits',
    summary: 'Drawings you can actually build from — and the permit to go with them.',
    body: 'We start with a site visit and a proper chat about how you live or work, and your budget. Then we design the building, show it to you in 3D so there are no surprises, and prepare the full set of drawings. We submit to the Metropolitan or Municipal Assembly and follow up until the building permit is approved.',
    includes: [
      'Site visit and brief',
      'Concept design and 3D views',
      'Architectural and structural drawings',
      'Building permit application and follow-up at the Assembly',
      'BOQ (bill of quantities) so you know the cost before you build',
    ],
    image: '/assets/craft-studio.jpg',
    imageAlt: 'Drawings, models and material samples on a table in the Linework studio',
    whatsapp: "Hi Linework, I'd like to talk about drawings and a building permit.",
  },
  {
    id: 'construction',
    number: '02',
    title: 'Construction',
    summary: 'From foundation to finishing, built by our own site team.',
    body: 'Our engineers and site team build what we designed — so nothing gets “changed on site” to save someone else money. We work stage by stage: foundation, blockwork, decking, roofing and finishing. You pay in stages as the work is done, and you see every stage in photos and videos.',
    includes: [
      'Setting out and foundation',
      'Blockwork, columns and decking (slab casting)',
      'Roofing, plumbing and electrical',
      'Finishing: plastering, tiling, painting, doors and windows',
      'Concrete cube tests at key pours',
      'Daily site supervision by our engineers',
    ],
    image: '/assets/site-engineering.jpg',
    imageAlt: 'Linework site team working on a reinforced concrete structure',
    whatsapp: "Hi Linework, I'd like to talk about building on my plot.",
  },
  {
    id: 'interiors',
    number: '03',
    title: 'Interiors, joinery & fit-out',
    summary: 'Kitchens, wardrobes and full fit-outs made in our own workshop.',
    body: 'Whether it is a new house, an apartment or an office, we design the inside to match how you use the space. Kitchens, wardrobes, doors and wall panels are made in our joinery workshop in Accra, so we control the quality and the timing — not a supplier we have never met.',
    includes: [
      'Interior design and layouts',
      'Material and finish selection with real samples',
      'Kitchens, wardrobes and doors from our workshop',
      'Lighting, ceilings and flooring',
      'Office and shop fit-out',
    ],
    image: '/assets/interior-ridge.jpg',
    imageAlt: 'Finished living room with walnut joinery and a floating staircase',
    whatsapp: "Hi Linework, I'd like to talk about interiors / fit-out.",
  },
  {
    id: 'diaspora',
    number: '04',
    title: 'Project management & building from abroad',
    summary: 'Living in the UK, US or Canada? Build at home without the stress.',
    body: 'Too many people abroad send money home and end up with an uncompleted building. We are your team on the ground. We help you check your land documents with your lawyer, agree a BOQ before work starts, and send you photo and video updates on WhatsApp every week. You pay in stages, only for work that is done — and you can see it.',
    includes: [
      'Help checking your site plan, indenture and land title (with your lawyer)',
      'Video calls at times that suit your time zone',
      'Weekly photo and video updates on WhatsApp',
      'Pay in stages, tied to work completed',
      'One project manager as your single point of contact',
      'Site visits arranged whenever you are in Ghana',
    ],
    image: '/assets/villa-cantonments.jpg',
    imageAlt: 'A finished family home in Cantonments built for a client living in London',
    whatsapp: "Hi Linework, I live abroad and I'd like to build in Ghana.",
  },
  {
    id: 'renovations',
    number: '05',
    title: 'Renovations & extensions',
    summary: 'Add a floor, finish an old building or give your home a new life.',
    body: 'Got an uncompleted building, or a house that no longer fits your family? We check the existing structure first, tell you honestly what can and cannot be done, then design and build the changes — from a new boys’ quarters to an extra floor.',
    includes: [
      'Structural check of the existing building',
      'Completing uncompleted buildings',
      'Extensions, extra floors and boys’ quarters',
      'Kitchen, bathroom and full home makeovers',
    ],
    image: '/assets/facade-detail.jpg',
    imageAlt: 'Concrete and timber louvre detail on a renovated home',
    whatsapp: "Hi Linework, I'd like to talk about a renovation or extension.",
  },
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
            We design, get the permit, build and finish. Use us for everything, or just the part you need. Either way,
            you deal with one team that owns the result.
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

                  <h3 className="mt-8 text-lg font-bold text-ink-900">What you get</h3>
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
          text="Tell us about your plot or your building. We will tell you honestly where to start — usually within one working day."
          whatsappMessage="Hi Linework, I'm not sure which service I need. Can we talk?"
        />
      </div>
    </>
  );
}
