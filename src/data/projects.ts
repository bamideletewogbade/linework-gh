// ⚠️ PLACEHOLDER PORTFOLIO — replace with real Linework projects & photos before launch.
// Copy is written in plain English; avoid claims the team can't back up on site.

export interface Project {
  id: string;
  slug: string;
  title: string;
  typology: 'Residential' | 'Commercial' | 'Interior' | 'Structural';
  categoryLabel: string;
  location: string;
  neighborhood: string;
  year: string;
  status: 'Completed' | 'Under Construction' | 'In Design';
  area: string;
  timeline: string;
  deliveryMethod: string;
  structuralSystem: string;
  tagline: string;
  description: string;
  heroImage: string;
  galleryImages: string[];
  features: string[];
}

export const TYPOLOGY_LABELS: Record<Project['typology'], string> = {
  Residential: 'Homes',
  Commercial: 'Commercial',
  Interior: 'Interiors',
  Structural: 'Construction',
};

export const PROJECTS: Project[] = [
  {
    id: 'cantonments-pavilion',
    slug: 'cantonments-pavilion',
    title: 'The Cantonments House',
    typology: 'Residential',
    categoryLabel: 'Private home',
    location: 'Accra, Ghana',
    neighborhood: 'Cantonments',
    year: '2026',
    status: 'Completed',
    area: '840 m²',
    timeline: '14 months',
    deliveryMethod: 'Design & build',
    structuralSystem: 'Reinforced concrete frame, timber louvres',
    tagline: 'A calm family home built around a courtyard and a long pool.',
    description:
      'Our client was moving back home from London and wanted a house that felt private in the middle of Cantonments. We planned the rooms around a central courtyard and a 16-metre pool, so every main space looks onto water and green. Deep concrete overhangs shade the big glass walls, which keeps the living areas bright without the afternoon heat. We handled everything — drawings, permit, construction and finishing — and the client followed progress from London through weekly WhatsApp updates.',
    heroImage: '/assets/villa-cantonments.jpg',
    galleryImages: ['/assets/villa-cantonments.jpg', '/assets/facade-detail.jpg', '/assets/interior-ridge.jpg'],
    features: [
      'Double-height living room opening onto the courtyard',
      'Timber louvres that block harsh sun but keep the light',
      '16 m pool with a sunken seating area',
      'Solar panels with battery backup for dumsor',
      'Rainwater storage for the garden',
    ],
  },
  {
    id: 'ridge-monolith',
    slug: 'ridge-monolith',
    title: 'Ridge Penthouse',
    typology: 'Interior',
    categoryLabel: 'Interior fit-out',
    location: 'Accra, Ghana',
    neighborhood: 'Ridge',
    year: '2026',
    status: 'Completed',
    area: '420 m²',
    timeline: '7 months',
    deliveryMethod: 'Interior design & fit-out',
    structuralSystem: 'Microcement finishes, walnut joinery',
    tagline: 'An old, boxed-in duplex opened up into one bright living space.',
    description:
      'The penthouse had small, closed-off rooms and dated finishes. We stripped it back, opened up the layout and built a floating walnut-and-glass staircase as the centrepiece. All the kitchen units, wardrobes and wall panels were designed and made in our own workshop in Accra, so the finish quality stayed in our hands from start to end.',
    heroImage: '/assets/interior-ridge.jpg',
    galleryImages: ['/assets/interior-ridge.jpg', '/assets/facade-detail.jpg', '/assets/craft-studio.jpg'],
    features: [
      'Floating staircase in walnut and glass',
      'Seamless microcement floors across both levels',
      'Custom kitchen, wardrobes and wall panels from our workshop',
      'Hidden LED lighting with preset scenes',
      'Wide views over the Accra skyline',
    ],
  },
  {
    id: 'airport-arts-hq',
    slug: 'airport-arts-hq',
    title: 'Airport City Office & Gallery',
    typology: 'Commercial',
    categoryLabel: 'Office building',
    location: 'Accra, Ghana',
    neighborhood: 'Airport City',
    year: '2026',
    status: 'Under Construction',
    area: '2,800 m²',
    timeline: '18 months',
    deliveryMethod: 'Design & build',
    structuralSystem: 'Steel and concrete frame, terracotta screen',
    tagline: 'A five-storey office with an art gallery on the ground floor.',
    description:
      'A short drive from Kotoka, this five-storey building mixes company offices with a public art gallery at street level. The outside is wrapped in a terracotta brick screen — the pattern is inspired by kente — which shades the glass and cuts down how hard the air-conditioning has to work. Construction is ongoing, with our site team on the ground every day.',
    heroImage: '/assets/commercial-airport.jpg',
    galleryImages: ['/assets/commercial-airport.jpg', '/assets/site-engineering.jpg', '/assets/craft-studio.jpg'],
    features: [
      'Terracotta brick sun-screen with a kente-inspired pattern',
      'Outdoor terraces on levels 3 and 4',
      'Ground-floor gallery and sculpture garden',
      'Basement parking for 45 cars with EV charging',
      'Energy-efficient VRF air-conditioning',
    ],
  },
  {
    id: 'brise-soleil-residence',
    slug: 'brise-soleil-residence',
    title: 'Airport Residential Villa',
    typology: 'Residential',
    categoryLabel: 'Private home',
    location: 'Accra, Ghana',
    neighborhood: 'Airport Residential',
    year: '2026',
    status: 'Completed',
    area: '620 m²',
    timeline: '11 months',
    deliveryMethod: 'Design & build',
    structuralSystem: 'Exposed concrete, solid teak joinery',
    tagline: 'Fair-faced concrete, teak and brass on a quarter-acre plot.',
    description:
      'On a quarter-acre plot in Airport Residential, this home uses deep roof overhangs and slim teak louvres to keep the strong Accra sun off the walls and windows. Large sliding glass doors disappear into the walls, so the living room and garden become one space when they are open.',
    heroImage: '/assets/facade-detail.jpg',
    galleryImages: ['/assets/facade-detail.jpg', '/assets/villa-cantonments.jpg', '/assets/interior-ridge.jpg'],
    features: [
      'Board-marked concrete walls inside and out',
      'Solid brass details and custom door handles',
      'Sliding glass doors that hide fully into the walls',
      'Courtyard garden with local plants and palms',
      "Boys' quarters and covered parking for several cars",
    ],
  },
  {
    id: 'coastal-superstructure',
    slug: 'coastal-superstructure',
    title: 'Beachfront Compound',
    typology: 'Structural',
    categoryLabel: 'Construction',
    location: 'Accra, Ghana',
    neighborhood: 'Greater Accra coast',
    year: '2026',
    status: 'Under Construction',
    area: '1,650 m²',
    timeline: '12 months',
    deliveryMethod: 'Construction (client drawings)',
    structuralSystem: 'Reinforced concrete (C30 grade)',
    tagline: 'A multi-level beach compound built to stand up to sea air.',
    description:
      'Building by the sea is hard on concrete and steel — salty air rusts rebar fast if the work is careless. On this compound we used higher-grade concrete, proper cover to the reinforcement and coated rebar, with concrete cube tests at every major pour. The owners live abroad and get photo and video updates from site every week.',
    heroImage: '/assets/site-engineering.jpg',
    galleryImages: ['/assets/site-engineering.jpg', '/assets/commercial-airport.jpg', '/assets/craft-studio.jpg'],
    features: [
      'C30 concrete mix suited to coastal conditions',
      'Concrete cube tests at every major pour',
      'Steel formwork for clean, straight concrete finishes',
      'Coated rebar to fight rust from sea air',
      'Weekly photo & video reports for owners abroad',
    ],
  },
  {
    id: 'linework-atelier',
    slug: 'linework-atelier',
    title: 'Our Studio & Workshop',
    typology: 'Structural',
    categoryLabel: 'Studio',
    location: 'Accra, Ghana',
    neighborhood: 'Accra',
    year: '2026',
    status: 'Completed',
    area: '280 m²',
    timeline: 'Ongoing',
    deliveryMethod: 'In-house',
    structuralSystem: 'Design studio and joinery workshop',
    tagline: 'Where the drawings, models and material samples live.',
    description:
      'Our studio is part design office, part workshop. This is where we draw, build scale models, test finishes and make joinery before anything goes to site. Clients are welcome to visit, see material samples in person and walk through their 3D model with us — or do it over a video call from abroad.',
    heroImage: '/assets/craft-studio.jpg',
    galleryImages: ['/assets/craft-studio.jpg', '/assets/facade-detail.jpg', '/assets/site-engineering.jpg'],
    features: [
      'Material library: local timbers, stone, tiles and finishes',
      'Model-making benches and 3D printing',
      '3D design and coordination before construction',
      'Client meeting room for design reviews',
      'Joinery workshop for kitchens, wardrobes and doors',
    ],
  },
];
