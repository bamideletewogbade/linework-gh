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

export const PROJECTS: Project[] = [
  {
    id: 'cantonments-pavilion',
    slug: 'cantonments-pavilion',
    title: 'The Cantonments Pavilion',
    typology: 'Residential',
    categoryLabel: 'Private Luxury Villa',
    location: 'Accra, Ghana',
    neighborhood: 'Cantonments Embassy Enclave',
    year: '2026',
    status: 'Completed',
    area: '840 m²',
    timeline: '14 Months',
    deliveryMethod: 'Turnkey Design-Build',
    structuralSystem: 'Post-Tensioned Reinforced Concrete & Teak',
    tagline: 'An introspective tropical minimalist residence harmonizing concrete, timber, and water.',
    description: 'Commissioned by a Ghanaian diaspora executive returning from London, The Cantonments Pavilion was designed to provide secluded sanctuary within one of Accra’s most prestigious residential quarters. The architecture centers around a central tropical courtyard and a 16-meter reflective pool that actively pre-cools southwest breezes before they enter the double-height living pavilion. Expansive cantilevered concrete floor plates shade floor-to-ceiling Low-E glazing, eliminating midday solar heat gain while preserving unobstructed garden views.',
    heroImage: '/assets/villa-cantonments.jpg',
    galleryImages: [
      '/assets/villa-cantonments.jpg',
      '/assets/facade-detail.jpg',
      '/assets/interior-ridge.jpg'
    ],
    features: [
      'Double-height open living pavilion with 5.8m ceilings',
      'Vertical native Iroko brise-soleil automated solar shading',
      '16-meter perimeter reflection pool and sunken seating lounge',
      'Integrated solar photovoltaic array with 15kWh battery storage',
      'Subterranean rainwater harvesting system for landscape irrigation'
    ]
  },
  {
    id: 'ridge-monolith',
    slug: 'ridge-monolith',
    title: 'The Ridge Monolith Penthouse',
    typology: 'Interior',
    categoryLabel: 'Luxury Interior Architecture',
    location: 'Accra, Ghana',
    neighborhood: 'Ridge Financial District',
    year: '2026',
    status: 'Completed',
    area: '420 m²',
    timeline: '7 Months',
    deliveryMethod: 'Bespoke Interior & Millwork',
    structuralSystem: 'Honed Microcement & Cantilevered Walnut',
    tagline: 'Double-height spatial drama with monolithic concrete surfaces and custom walnut joinery.',
    description: 'A complete interior architectural gut-renovation of a top-floor duplex penthouse in Ridge. Linework was engaged to transform an outdated compartmentalized layout into an open, museum-grade living gallery. The focal point is a sculptural cantilevered staircase fabricated from solid smoked walnut and tempered structural glass, floating against a monolithic board-marked microcement wall. All cabinetry and architectural lighting were designed and built by Linework’s bespoke fabrication workshop in Accra.',
    heroImage: '/assets/interior-ridge.jpg',
    galleryImages: [
      '/assets/interior-ridge.jpg',
      '/assets/facade-detail.jpg',
      '/assets/craft-studio.jpg'
    ],
    features: [
      'Sculptural floating staircase with concealed steel stringers',
      'Continuous honed microcement flooring throughout both levels',
      'Bespoke walnut millwork and concealed acoustic wall panelling',
      'Architectural recessed linear uplighting with scene automation',
      'Panoramic 270-degree skyline views over downtown Accra'
    ]
  },
  {
    id: 'airport-arts-hq',
    slug: 'airport-arts-hq',
    title: 'Airport Arts & Commerce HQ',
    typology: 'Commercial',
    categoryLabel: 'Commercial Headquarters & Gallery',
    location: 'Accra, Ghana',
    neighborhood: 'Airport City Commercial Corridor',
    year: '2026',
    status: 'Under Construction',
    area: '2,800 m²',
    timeline: '18 Months',
    deliveryMethod: 'General Contracting & Architecture',
    structuralSystem: 'Composite Steel Frame & Terracotta Brise-Soleil',
    tagline: 'A sustainable commercial headquarters integrating contemporary art exhibition galleries.',
    description: 'Situated within walking distance of Kotoka International Airport, this 5-story landmark building combines executive headquarters with a ground-floor contemporary West African art foundation. The exterior skin features an intricate perforated terracotta brick brise-soleil inspired by indigenous Ghanaian textile geometries. The masonry serves as a climatic envelope that reduces mechanical cooling requirements by 42% while filtering daylight into open-plan corporate work floors.',
    heroImage: '/assets/commercial-airport.jpg',
    galleryImages: [
      '/assets/commercial-airport.jpg',
      '/assets/site-engineering.jpg',
      '/assets/craft-studio.jpg'
    ],
    features: [
      'Perforated artisanal terracotta brick climatic brise-soleil',
      '6-meter cantilevered outdoor terrace viewing decks on levels 3 and 4',
      'Ground-floor public sculpture garden with native drought-tolerant flora',
      'Underground parking for 45 vehicles with EV charging stations',
      'High-performance VRF cooling system with heat recovery ventilators'
    ]
  },
  {
    id: 'brise-soleil-residence',
    slug: 'brise-soleil-residence',
    title: 'The Brise-Soleil Residence',
    typology: 'Residential',
    categoryLabel: 'Tropical Contemporary Residence',
    location: 'Accra, Ghana',
    neighborhood: 'Airport Residential Area',
    year: '2026',
    status: 'Completed',
    area: '620 m²',
    timeline: '11 Months',
    deliveryMethod: 'Turnkey Design-Build',
    structuralSystem: 'Monolithic Concrete & Solid Teak Joinery',
    tagline: 'Tactile architectural joinery converging board-marked concrete with solid brass channels.',
    description: 'A study in tactile materiality and environmental balance. Sited on a quarter-acre plot in Airport Residential, this private home utilizes deep overhangs and fine vertical teak timber louvers to tame the intense Accra sun. The boundary between interior living rooms and private landscaped gardens dissolves completely via 3.2-meter motorized pocket glass doors.',
    heroImage: '/assets/facade-detail.jpg',
    galleryImages: [
      '/assets/facade-detail.jpg',
      '/assets/villa-cantonments.jpg',
      '/assets/interior-ridge.jpg'
    ],
    features: [
      'Full-height board-marked concrete exterior and interior feature walls',
      'Solid brass architectural channel reveals and custom bronze hardware',
      'Motorized flush pocket sliding glass doors disappearing into walls',
      'Lush tropical courtyard gardens with native Ghanaian monstera & palms',
      'Dedicated private staff quarters and multi-vehicle porte-cochère'
    ]
  },
  {
    id: 'coastal-superstructure',
    slug: 'coastal-superstructure',
    title: 'Coastal Enclave Superstructures',
    typology: 'Structural',
    categoryLabel: 'Civil & Structural Engineering',
    location: 'Accra, Ghana',
    neighborhood: 'Greater Accra Coastline',
    year: '2026',
    status: 'Under Construction',
    area: '1,650 m²',
    timeline: '12 Months',
    deliveryMethod: 'Turnkey General Contracting',
    structuralSystem: 'Heavy-Duty Reinforced Concrete (C30/37 Grade)',
    tagline: 'High-tolerance coastal structural engineering engineered for marine corrosion resistance.',
    description: 'Constructing along the Ghanaian coast requires uncompromising structural standards. This multi-level beachfront compound features high-density sulfate-resistant concrete, epoxy-coated rebar cages, and post-tensioned cantilevered floor slabs engineered to withstand seismic forces and humid marine air. Managed directly on-site by Linework’s senior structural engineering directors.',
    heroImage: '/assets/site-engineering.jpg',
    galleryImages: [
      '/assets/site-engineering.jpg',
      '/assets/commercial-airport.jpg',
      '/assets/craft-studio.jpg'
    ],
    features: [
      'C30/37 high-density marine-grade concrete with silica fume additive',
      'Third-party certified laboratory crush testing for every casting phase',
      'Heavy-duty reusable modular steel formwork ensuring fair-faced finish',
      'Seismic zone 4 structural engineering with ductile shear walls',
      'Weekly 360-degree drone photogrammetry reports for remote owners'
    ]
  },
  {
    id: 'linework-atelier',
    slug: 'linework-atelier',
    title: 'The Drafting & Material Archive',
    typology: 'Structural',
    categoryLabel: 'Studio R&D & Scale Modeling Lab',
    location: 'Accra, Ghana',
    neighborhood: 'Linework Studio, Accra',
    year: '2026',
    status: 'Completed',
    area: '280 m²',
    timeline: 'Ongoing R&D',
    deliveryMethod: 'In-House Studio Lab',
    structuralSystem: 'Physical & Computational BIM Integration',
    tagline: 'Where theoretical lines transform into tangible material prototypes and physical scale models.',
    description: 'Linework’s physical workspace is both an architectural studio and an active material laboratory. Every project commission undergoes physical 1:50 and 1:20 concrete test castings, timber joinery stress-tests, and computational BIM clash detection before breaking ground on site. Clients and diaspora investors are invited to examine material samples in person or via high-definition video consultations.',
    heroImage: '/assets/craft-studio.jpg',
    galleryImages: [
      '/assets/craft-studio.jpg',
      '/assets/facade-detail.jpg',
      '/assets/site-engineering.jpg'
    ],
    features: [
      'Comprehensive material library: local Ghanaian timbers, stones & cements',
      'Precision scale model drafting benches and 3D printing workshop',
      'BIM structural coordinate modeling and MEP clash detection suite',
      'Private client design review lounge with digital twin visualizer',
      'Direct connection to Linework’s on-site general contracting teams'
    ]
  }
];
