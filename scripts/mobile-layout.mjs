import fs from 'node:fs';
const file='src/app/page.tsx';
let s=fs.readFileSync(file,'utf8').replaceAll('\r','');
const heroEnd=s.indexOf('      {/* ========================================================\n          3-SECOND');
if(heroEnd<0)throw Error('Home marker missing');
s=s.slice(0,heroEnd).replace("import Hero3D from '@/components/Hero3D';", "import HeroPreview from '@/components/HeroPreview';").replace("import TrustMetrics from '@/components/TrustMetrics';\n",'').replace("import ConversationalBrief from '@/components/ConversationalBrief';\n",'').replace('<Hero3D />','<HeroPreview />').replace('href="/contact"','href="/contact#brief"');
s+=`
      <section className="section bg-white" id="services">
        <div className="container-site">
          <span className="eyebrow mb-3">How we can help</span>
          <h2 className="text-display-md font-bold mb-4">What are you planning?</h2>
          <p className="max-w-2xl text-ink-600 mb-8">Start with the part of your project you need help with.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Design a new space', text: 'Turn your ideas into layouts, drawings and a plan for your site.', href: '/services#design' },
              { title: 'Build from your drawings', text: 'Plan the construction, from site preparation to finishing.', href: '/services#construction' },
              { title: 'Create an interior', text: 'Bring layouts, lighting, materials and joinery together.', href: '/services#interiors' },
              { title: 'Renovate or extend', text: 'Rethink a room, finish a building or make space for more.', href: '/services#renovations' },
            ].map(service => <Link key={service.href} href={service.href} className="group rounded-2xl border border-line bg-paper p-5 transition-colors hover:border-brand"><h3 className="text-lg font-bold mb-2">{service.title}</h3><p className="text-sm text-ink-600 mb-4">{service.text}</p><span className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-700">Explore this service<ArrowRight size={16} /></span></Link>)}
          </div>
          <Link href="/services#diaspora" className="mt-5 inline-flex min-h-11 items-center gap-2 font-semibold text-brand-700">Building in Ghana from abroad? Start here<ArrowRight size={16} className="shrink-0" /></Link>
        </div>
      </section>

      <section className="section bg-paper border-y border-line">
        <div className="container-site">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div><span className="eyebrow mb-3">Design inspiration</span><h2 className="text-display-md font-bold">Ideas for your next space</h2></div>
            <Link href="/projects" className="link-arrow min-h-11">Explore more ideas<ArrowRight size={16} /></Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{featuredProjects.map(project => <ProjectCard key={project.id} project={project} />)}</div>
        </div>
      </section>

      <TurnkeyMatrix />
      <section className="container-site py-8 md:py-12">
        <details className="rounded-3xl border border-line bg-white">
          <summary className="cursor-pointer p-5 text-lg font-bold sm:p-7">Designing for shade, airflow and outdoor living</summary>
          <BioclimaticDiagram />
        </details>
      </section>
      <section id="brief" className="pt-4">
        <CtaBand title="Tell us what you want to build." text="Have a plot, a set of drawings or an early idea? Share a few details so we can help you work out the next step." primaryLabel="Start your brief" primaryHref="/contact#brief" />
      </section>
    </div>
  );
}
`;
fs.writeFileSync(file,s);
function edit(file,pairs){let t=fs.readFileSync(file,'utf8').replaceAll('\r','');for(const[a,b]of pairs){if(!t.includes(a))throw Error(file+': '+a.slice(0,50));t=t.replaceAll(a,b);}fs.writeFileSync(file,t);}
edit('src/app/globals.css', [['@apply py-20 md:py-28;', '@apply py-12 md:py-20;'],['@apply inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-full px-6 text-[0.95rem] font-semibold','@apply inline-flex min-h-[3rem] max-w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-[0.95rem] font-semibold'],['@apply -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-6 sm:px-6;', '@apply -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6;']]);
edit('src/components/ProjectsGrid.tsx', [['snap-row sm:mx-0 sm:flex-wrap sm:px-0 mb-10 pb-2','flex flex-wrap gap-2 mb-8']]);
edit('src/components/ProjectCard.tsx', [["sizes = '(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw'","sizes = '(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw'"],['aspect-[4/5]','aspect-[4/3]']]);
edit('src/app/projects/page.tsx', [['pb-20 md:pb-28','pb-12 md:pb-20']]);
edit('src/components/ui/CtaBand.tsx', [['container-site pb-20 md:pb-28','container-site pb-12 md:pb-20'],['px-6 py-14 text-white sm:px-10 md:px-16 md:py-20','px-5 py-9 text-white sm:px-8 md:px-12 md:py-14'],['flex flex-col gap-8 md:flex-row md:items-end md:justify-between','flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between'],['flex flex-col gap-3 sm:flex-row','flex shrink-0 flex-col gap-3 sm:flex-row']]);
edit('src/components/Footer.tsx', [['pb-28 pt-16 text-ink-300 md:pb-10 md:pt-24','pb-8 pt-10 text-ink-300 md:pb-10 md:pt-16'],['grid gap-12 border-b border-white/10 pb-12 md:grid-cols-12 md:pb-16','grid grid-cols-2 gap-x-5 gap-y-8 border-b border-white/10 pb-8 lg:grid-cols-12 lg:pb-12'],['className="md:col-span-5"','className="col-span-2 lg:col-span-5"'],['className="md:col-span-2"','className="lg:col-span-2"'],['className="md:col-span-3"','className="col-span-2 lg:col-span-3"'],['inline-block py-1.5 text-base','inline-flex min-h-11 items-center py-2 text-sm'],['py-10 md:py-14','py-7 md:py-10']]);
edit('src/app/services/page.tsx', [['snap-row sm:mx-0 sm:flex-wrap sm:px-0 sm:pb-0','flex flex-wrap gap-2'],['pb-20 md:pb-28','pb-12 md:pb-20'],['flex flex-col gap-16 md:gap-28','flex flex-col gap-12 md:gap-20'],["className={flip ? 'md:order-1' : ''}", "className={flip ? 'order-first md:order-1' : 'order-first md:order-2'}"],['<h3 className="mt-8 text-lg font-bold text-ink-900">How we can help</h3>','<details className="mt-5 rounded-xl border border-line p-4"><summary className="cursor-pointer text-base font-semibold text-ink-900">How we can help</summary>'],['</ul>\n\n                  <div className="mt-8','</ul></details>\n\n                  <div className="mt-5'],['sm:flex-row sm:items-center','sm:flex-row sm:flex-wrap sm:items-center'],['pt-20 md:pt-28','pt-12 md:pt-20']]);
// Replace duplicate tiny process dots with a readable counter; the stage selector remains interactive.
let process=fs.readFileSync('src/components/TurnkeyProcessDiagram.tsx','utf8');
process=process.replace(/<div className="flex items-center gap-1.5">\s*\{STAGES.map\(\(_, i\) => \([\s\S]*?<\/div>/, '<span className="text-xs text-ink-600" aria-live="polite">{activeStep + 1} / {STAGES.length}</span>');
process=process.replace('className="text-xs font-bold text-ink-600','className="min-h-11 px-2 text-xs font-bold text-ink-600').replace('className="text-xs font-bold text-ink-900','className="min-h-11 px-2 text-xs font-bold text-ink-900').replace('&larr; Previous Stage','&larr; Back').replace('<span>Next Stage</span>','<span>Next</span>').replace('className="truncate"','className="min-w-0"').replace('block text-xs font-bold truncate','block text-xs font-bold').replace('px-4 py-3 rounded-xl','min-h-12 px-3 py-3 rounded-xl');
fs.writeFileSync('src/components/TurnkeyProcessDiagram.tsx',process);
