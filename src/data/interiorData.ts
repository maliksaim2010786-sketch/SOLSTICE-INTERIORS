export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: 'home' | 'building' | 'lamp' | 'armchair' | 'engineering' | 'concept' | 'sustainable' | 'spa' | 'dining' | 'pool' | 'car' | 'concierge';
  deliverables: string[];
  startingTimeline: string;
  scopeHighlights: string[];
  division: 'solstice' | 'agenvo' | 'royal-crest';
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'living' | 'kitchen' | 'bedroom' | 'commercial' | 'engineering' | 'hospitality';
  categoryLabel: string;
  image: string;
  blueprintImage?: string;
  gallery: string[];
  area: string;
  location: string;
  year: string;
  materials: string[];
  description: string;
  quote: string;
  division: 'solstice' | 'agenvo' | 'royal-crest';
}

export interface RoomSuiteItem {
  id: string;
  title: string;
  tier: 'Superior' | 'Deluxe' | 'Premium' | 'Penthouse' | 'Presidential';
  pricePerNight: string;
  area: string;
  capacity: string;
  bedType: string;
  view: string;
  image: string;
  gallery: string[];
  highlights: string[];
  description: string;
}

export interface HotelAmenityItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: 'spa' | 'dining' | 'pool' | 'fitness' | 'car' | 'jet' | 'concierge' | 'business';
  hours: string;
}

export interface MaterialItem {
  name: string;
  origin: string;
  description: string;
  colorHex: string;
  finish: string;
  image: string;
}

// 1. SOLSTICE INTERIORS SERVICES
export const SOLSTICE_SERVICES: ServiceItem[] = [
  {
    id: 'residential-design',
    title: 'Residential Design',
    subtitle: 'Custom Home Interiors',
    description: 'Turnkey architectural interior design for luxury private residences, penthouses, and bespoke villas. From spatial reprogramming to custom millwork.',
    iconName: 'home',
    division: 'solstice',
    deliverables: [
      'Comprehensive 3D Photorealistic Visualizations',
      'Architectural Floor Plans & Electrical Schematics',
      'Custom Millwork & Cabinetry Joinery Drawings',
      'FF&E Procurement & White-Glove Installation'
    ],
    startingTimeline: '6 - 12 Weeks',
    scopeHighlights: ['Penthouse Refurbishments', 'Private Villas', 'Bespoke Estates']
  },
  {
    id: 'commercial',
    title: 'Commercial',
    subtitle: 'Office & Retail Spaces',
    description: 'High-impact flagship boutiques, executive headquarters, and luxury hospitality venues designed to elevate brand authority and human performance.',
    iconName: 'building',
    division: 'solstice',
    deliverables: [
      'Brand Identity Spatial Translation',
      'Acoustic Engineering & Ergonomic Workstations',
      'High-Traffic Material Specification',
      'Commercial Building Code Compliance Documentation'
    ],
    startingTimeline: '8 - 16 Weeks',
    scopeHighlights: ['Executive Boardrooms', 'Flagship Showrooms', 'Boutique Hotels']
  },
  {
    id: 'lighting-design',
    title: 'Lighting Design',
    subtitle: 'Ambient Solutions',
    description: 'Layered architectural lighting design calibrated to 2700K warm warmth, circadian rhythms, concealed cove channels, and bespoke sculptural luminaires.',
    iconName: 'lamp',
    division: 'solstice',
    deliverables: [
      'Circadian Lux Calculation & Lighting Schedules',
      'Concealed Architectural Cove Detailing',
      'Smart Lutron/DALI Scene Programming',
      'Custom Artisan Chandelier Commissioning'
    ],
    startingTimeline: '3 - 6 Weeks',
    scopeHighlights: ['Cove LED Architecture', 'Sculptural Chandeliers', 'Circadian Systems']
  },
  {
    id: 'furniture-selection',
    title: 'Furniture Selection',
    subtitle: 'Curated Collections',
    description: 'Exclusive global procurement of Italian and Nordic heirloom furniture, limited-edition collector pieces, bespoke upholstery, and fine textile curation.',
    iconName: 'armchair',
    division: 'solstice',
    deliverables: [
      'Direct Atelier Sourcing (Milan, Paris, Kyoto)',
      'Custom Upholstery in Bouclé, Cashmere & Suede',
      'Bespoke Marble & Bronze Coffee Table Fabrication',
      'Curated Contemporary Art & Sculpture Advisory'
    ],
    startingTimeline: '4 - 8 Weeks',
    scopeHighlights: ['Bespoke Upholstery', 'Italian Collector Pieces', 'Art Advisory']
  }
];

// 2. AGENVO ARCHITECTURAL ENGINEERING PILLARS (From Image 1)
export const AGENVO_PILLARS = [
  {
    id: 'cutting-edge-engineering',
    title: 'Cutting-Edge Engineering',
    subtitle: 'Structural Precision & Cantilevers',
    description: 'Ultra-low deflection steel framing, post-tensioned slabs, and seismic damping allowing floating cantilevered glass volumes defying conventional gravity.',
    icon: 'engineering',
    metric: '18m Clear Span Cantilevers',
    highlights: ['Finite Element Stress Modeling', 'High-Strength Performance Glass', 'Advanced Carbon Composite Trusses']
  },
  {
    id: 'visionary-conceptual-designs',
    title: 'Visionary Conceptual Designs',
    subtitle: 'Parametric & Sculptural Form',
    description: 'Translating avant-garde computational design algorithms into tangible monolithic pavilions, reflective water landscapes, and curvilinear facade systems.',
    icon: 'concept',
    metric: 'Algorithmic Form Generation',
    highlights: ['Computational Fluid Dynamic Facades', 'Kinetic Solar Louver Screens', 'Biophilic Spatial Topography']
  },
  {
    id: 'sustainable-technologies',
    title: 'Sustainable Technologies',
    subtitle: 'Net-Zero & Ecological Longevity',
    description: 'Integrated geothermal deep-bore heat pumps, building-integrated photovoltaics (BIPV), rainwater closed-circuit loops, and high-performance envelopes.',
    icon: 'sustainable',
    metric: 'LEED Platinum & Net-Zero Certified',
    highlights: ['Photovoltaic Glazing Shading', 'Closed-Loop Geothermal Heating', 'Passive Wind-Catching Ventilation']
  }
];

// 3. AGENVO ARCHITECTURAL PROJECTS (From Image 1)
export const AGENVO_PROJECTS: ProjectItem[] = [
  {
    id: 'agenvo-villa-residence',
    title: 'Cantilever Villa Over Waters',
    subtitle: 'Glass & Steel Monolith',
    category: 'engineering',
    categoryLabel: 'Agenvo Masterpiece',
    division: 'agenvo',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    blueprintImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85'
    ],
    area: '12,500 sq.ft',
    location: 'Lake Como, Italy',
    year: '2025',
    materials: ['Aeronautical Grade Steel', 'Triple-Low-E Structural Glass', 'Honed Basalt Stone', 'Titanium Accents'],
    description: 'A daring 3-level cantilevered estate projecting out over a mirror-smooth reflection lake. Layered architectural cove LEDs glow warm through floor-to-ceiling glass at twilight.',
    quote: '"Agenvo engineering unlocked impossible architectural volumes with breathtaking structural serenity."'
  },
  {
    id: 'agenvo-corporate-tower',
    title: 'Corporate Tower',
    subtitle: 'Illuminated Headquarters',
    category: 'commercial',
    categoryLabel: 'Civic High-Rise',
    division: 'agenvo',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=1400&q=85'
    ],
    area: '480,000 sq.ft',
    location: 'Marina Bay, Singapore',
    year: '2025',
    materials: ['Anodized Bronze Mullions', 'Low-Iron Crystal Glass', 'High-Density Concrete Core'],
    description: 'A 54-story vertical headquarters featuring an expressive night-lighting diagrid, sky gardens every six levels, and a double-skin kinetic breathing envelope.',
    quote: '"A beacon of contemporary civil engineering and corporate authority on the skyline."'
  },
  {
    id: 'agenvo-futuristic-pavilion',
    title: 'Futuristic Pavilion',
    subtitle: 'Sculptural Water Pavilion',
    category: 'engineering',
    categoryLabel: 'Parametric Cultural',
    division: 'agenvo',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1400&q=85'
    ],
    area: '18,000 sq.ft',
    location: 'Abu Dhabi Cultural District',
    year: '2024',
    materials: ['Ultra-High-Performance Concrete (UHPC)', 'Mirror Glass', 'Polished White Terrazzo'],
    description: 'An undulating white canopy suspended over stepped water mirrors, creating dramatic daytime shade and enchanting night reflection optics.',
    quote: '"A sculptural landmark redefining the dialogue between shadow, liquid reflections, and mass."'
  },
  {
    id: 'agenvo-sculptural-landmark',
    title: 'Sculptural Landmark',
    subtitle: 'Angular Spatial Geometry',
    category: 'engineering',
    categoryLabel: 'Civic Architecture',
    division: 'agenvo',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85'
    ],
    area: '34,000 sq.ft',
    location: 'Geneva, Switzerland',
    year: '2024',
    materials: ['Pre-Stressed Carbon Fiber', 'Brushed Aluminum', 'Kinetic Louvers'],
    description: 'A civic research observatory featuring cantilevers extending 28 meters with zero external columns.',
    quote: '"Pushing the scientific frontiers of structural tensile physics."'
  }
];

// 4. ROYAL CREST LUXURY SUITES (From Image 2)
export const ROYAL_CREST_SUITES: RoomSuiteItem[] = [
  {
    id: 'deluxe-suite',
    title: 'Deluxe Suite',
    tier: 'Deluxe',
    pricePerNight: '$1,450',
    area: '920 sq.ft',
    capacity: '2 Guests',
    bedType: 'Custom King Silk Bedding',
    view: 'Private Garden & Skyline View',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=85'
    ],
    highlights: ['Heated Italian Marble Bathroom', 'Acoustic Suede Acoustic Walls', 'Circadian Night Cove Lighting', 'B&O Sound System'],
    description: 'An intimate luxury retreat featuring rich smoked walnut headboards, custom bouclé daybeds, and floor-to-ceiling silk blackout curtains.'
  },
  {
    id: 'premium-suite',
    title: 'Premium Suite',
    tier: 'Premium',
    pricePerNight: '$2,400',
    area: '1,500 sq.ft',
    capacity: '2 - 3 Guests',
    bedType: 'Royal California King',
    view: 'Panoramic City & River View',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85'
    ],
    highlights: ['Private Dressing Salon', 'Deep Soaking Calacatta Tub', 'Executive Bar & Wine Reserve', '24/7 Dedicated Butler Service'],
    description: 'Generously proportioned with an adjoining salon reception lounge, private dining alcove, and floor-to-ceiling glass with panoramic twilight vistas.'
  },
  {
    id: 'penthouse-suite',
    title: 'Penthouse Suite',
    tier: 'Penthouse',
    pricePerNight: '$5,200',
    area: '3,200 sq.ft',
    capacity: '4 Guests',
    bedType: '2 King Master Sanctuaries',
    view: '360° Panoramic Skyline Horizon',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85'
    ],
    highlights: ['Private Rooftop Heated Plunge Pool', 'Fireplace & Double-Height Living Room', 'Private Chauffeur & Armored Maybach', 'Dedicated Executive Chef'],
    description: 'The pinnacle of Royal Crest luxury. Occupying the entire top tier with private elevator access, double-height ceilings, and private terrace pool.'
  }
];

// 5. ROYAL CREST 8 HOTEL AMENITIES & SERVICES (From Image 2)
export const ROYAL_CREST_AMENITIES: HotelAmenityItem[] = [
  {
    id: 'spa-wellness',
    title: 'Spa & Wellness',
    subtitle: 'Sensory Rejuvenation Grotto',
    description: 'Thermal vitality hydro-pools, Himalayan salt crystal saunas, Swiss needle showers, and bespoke organic botanical treatments.',
    icon: 'spa',
    hours: '06:00 - 23:00 Daily'
  },
  {
    id: 'fine-dining',
    title: 'Fine Dining',
    subtitle: '3-Michelin Caliber Salon',
    description: 'Gastronomic tasting menus orchestrated by global master chefs, complemented by a subterranean 4,000-bottle vintage cellar.',
    icon: 'dining',
    hours: '12:00 - 15:00 / 18:30 - 23:30'
  },
  {
    id: 'rooftop-pool',
    title: 'Rooftop Pool',
    subtitle: 'Heated Skyline Horizon Edge',
    description: '50-meter cantilevered infinity edge swimming pool with temperature regulation, private shaded cabanas, and twilight champagne service.',
    icon: 'pool',
    hours: '07:00 - 22:00 Daily'
  },
  {
    id: 'fitness-center',
    title: 'Fitness Center',
    subtitle: 'Artis Biohacking & Training',
    description: 'Custom TechnoGym Artis equipment, hyperbaric oxygen chambers, infra-red recovery saunas, and private Olympic-certified trainers.',
    icon: 'fitness',
    hours: '24 Hours Open'
  },
  {
    id: 'airport-transfers',
    title: 'Airport Transfers',
    subtitle: 'Chauffeur Driven Limousines',
    description: 'Seamless white-glove arrival and departure via our private fleet of bespoke Rolls-Royce Phantoms and Mercedes-Maybach S680s.',
    icon: 'car',
    hours: '24/7 By Reservation'
  },
  {
    id: 'private-aviation',
    title: 'Private Aviation & Heli',
    subtitle: 'Skyline Helipad Transit',
    description: 'Rooftop helipad clearance, direct VIP terminal tarmac transfers, and global private jet charter arrangements.',
    icon: 'jet',
    hours: 'On-Demand Charter'
  },
  {
    id: 'concierge',
    title: 'Royal 24/7 Concierge',
    subtitle: 'Bespoke Clefs d’Or Curators',
    description: 'Private gallery acquisitions, sold-out opera boxes, private yacht charters, and international high-society access.',
    icon: 'concierge',
    hours: '24 Hours Dedicated'
  },
  {
    id: 'office-spa',
    title: 'Executive Office & Spa',
    subtitle: 'Confidential Business Suites',
    description: 'Acoustically isolated boardrooms with secure encrypted satellite lines, private secretary services, and integrated recovery massage chairs.',
    icon: 'business',
    hours: '24 Hours Open'
  }
];

// Room Tiers Bar (From Image 2 top strip)
export const ROOM_TIER_HIGHLIGHTS = [
  {
    tier: 'Superior Rooms',
    desc: 'Spacious refined rooms with handcrafted oak furnishings, marble rain showers, and curated contemporary art.'
  },
  {
    tier: 'Deluxe Suites',
    desc: 'Expansive suites with separate lounge seating, deep soaking tubs, and floor-to-ceiling acoustic glass.'
  },
  {
    tier: 'Executive Rooms',
    desc: 'Privileged high-floor sanctuaries with exclusive Royal Club lounge access, private check-in, and butler service.'
  }
];

// COMBINED FEATURED PROJECTS (from all 3 collections)
export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'living-room-elegance',
    title: 'Living Room',
    subtitle: 'Modern Elegance',
    category: 'living',
    categoryLabel: 'Solstice Interiors',
    division: 'solstice',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85'
    ],
    area: '1,450 sq.ft',
    location: 'Tribeca, New York',
    year: '2025',
    materials: ['Smoked Oak', 'Bookmatched Calacatta Viola', 'Aged Brass', 'Mohair Velvet'],
    description: 'A serene double-height living salon balancing dark monolithic stone planes with warm concealed perimeter cove lighting.',
    quote: '"Solstice created a living sanctuary that feels simultaneously majestic and deeply intimate."'
  },
  {
    id: 'kitchen-minimal',
    title: 'Kitchen',
    subtitle: 'Minimal & Functional',
    category: 'kitchen',
    categoryLabel: 'Solstice Interiors',
    division: 'solstice',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1400&q=85'
    ],
    area: '820 sq.ft',
    location: 'Kensington, London',
    year: '2025',
    materials: ['Fluted Nero Marquina', 'Matte Black Aluminum', 'Honed Quartzite', 'Warm 2700K LED'],
    description: 'Concealed culinary architecture characterized by seamless handleless joinery and a dramatic backlit floating monolith island.',
    quote: '"Every detail feels effortless, from the warm under-counter luminescence to the tactile stone."'
  },
  {
    id: 'bedroom-comfort',
    title: 'Bedroom',
    subtitle: 'Comfort & Style',
    category: 'bedroom',
    categoryLabel: 'Royal Crest Suites',
    division: 'royal-crest',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1400&q=85'
    ],
    area: '960 sq.ft',
    location: 'Zurichberg, Zurich',
    year: '2024',
    materials: ['Acoustic Suede Paneling', 'Natural Walnut', 'Linen Bouclé', 'Champagne Bronze'],
    description: 'A sensory sanctuary wrapped in acoustic suede wall paneling and a floating bespoke headboard with integrated nightstand lighting.',
    quote: '"Stepping into this bedroom feels like entering a 5-star private alpine retreat."'
  },
  {
    id: 'agenvo-villa-highlight',
    title: 'Cantilever Glass Villa',
    subtitle: 'Architectural Excellence',
    category: 'engineering',
    categoryLabel: 'Agenvo Engineering',
    division: 'agenvo',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85'
    ],
    area: '12,500 sq.ft',
    location: 'Lake Como, Italy',
    year: '2025',
    materials: ['Performance Glass', 'High-Strength Steel', 'Basalt Stone'],
    description: 'Cantilevered volumes floating above infinity reflection pools with integrated smart lighting.',
    quote: '"A triumph of modern engineering and sculptural weightlessness."'
  }
];

export const STATS_DATA = [
  {
    value: '200+',
    label: 'Projects Completed',
    sublabel: 'Globally across residential & commercial sectors',
    icon: 'clipboard'
  },
  {
    value: '15+',
    label: 'Years Experience',
    sublabel: 'Mastering architectural refinement & joinery',
    icon: 'cube'
  },
  {
    value: '98%',
    label: 'Client Satisfaction',
    sublabel: 'Long-term client relationships & private referrals',
    icon: 'shield'
  }
];

export const MATERIAL_PALETTE: MaterialItem[] = [
  {
    name: 'Calacatta Viola Marble',
    origin: 'Carrara, Italy',
    description: 'Dramatic wine-colored breccia veining set against crisp ivory stone.',
    colorHex: '#3a2128',
    finish: 'Honed Matte',
    image: 'https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Brushed Champagne Brass',
    origin: 'Solingen, Germany',
    description: 'Warm metallic accents with micro-directional wire-brushed patina.',
    colorHex: '#c8a261',
    finish: 'Protective Wax Patina',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Smoked French Oak',
    origin: 'Burgundy, France',
    description: 'Deep fumed grain with caramel undertones, wire-brushed for tactile depth.',
    colorHex: '#2b231d',
    finish: 'Natural Ultra-Matte Oil',
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Textured Bouclé & Wool',
    origin: 'Biella, Italy',
    description: 'Heavyweight organic wool blend woven for acoustic absorption and cocooning comfort.',
    colorHex: '#d8d1c5',
    finish: 'Raw Loom Texture',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Spatial Discovery & Engineering',
    description: 'In-depth consultation mapping spatial flow, structural cantilevers, solar angles, and luxury aspirations.'
  },
  {
    step: '02',
    title: 'Photorealistic 3D Spatial Renders',
    description: 'Full virtual walkthroughs detailing exact millwork, stone slabs, daylight simulations, and photometric lighting plans.'
  },
  {
    step: '03',
    title: 'Artisanal Sourcing & Fabrication',
    description: 'Direct procurement from heritage stone quarries in Italy, German joineries, and bespoke lighting ateliers.'
  },
  {
    step: '04',
    title: 'White-Glove Turnkey Installation',
    description: 'Rigorous project management overseeing master craftsmen, structural checks, and final curated art placement.'
  }
];

export interface FloorplanZone {
  id: string;
  name: string;
  area: string;
  coords: { x: number; y: number; w: number; h: number }; // percentage based
  category: string;
  acousticRating: string;
  lightingSpec: string;
  materials: string[];
  description: string;
}

export const FLOORPLAN_ZONES: FloorplanZone[] = [
  {
    id: 'living-salon',
    name: 'Grand Living Salon & Loggia',
    area: '1,450 sq.ft',
    coords: { x: 10, y: 15, w: 42, h: 45 },
    category: 'Entertaining',
    acousticRating: 'STC 58 (Double Acoustic Glass)',
    lightingSpec: '2700K Perimeter Cove + 12° Museum Spots',
    materials: ['Bookmatched Calacatta Viola', 'Smoked Oak Flooring', 'Brushed Brass Trims'],
    description: 'Double-height social volume centered around a floating cantilevered marble hearth and floor-to-ceiling panoramic glass walls.'
  },
  {
    id: 'culinary-island',
    name: 'Culinary Monolith & Scullery',
    area: '680 sq.ft',
    coords: { x: 55, y: 15, w: 35, h: 32 },
    category: 'Culinary',
    acousticRating: 'STC 52 (Isolated Scullery)',
    lightingSpec: '3000K Task Linear + Warm Under-Island Halo',
    materials: ['Nero Marquina Quartzite', 'Fumed Oak Millwork', 'Gaggenau 400 Series'],
    description: 'Minimalist culinary theatre featuring a 4.2-meter monolithic stone island with concealed preparation scullery and sub-zero wine column.'
  },
  {
    id: 'master-sanctuary',
    name: 'Master Sanctuary & Terrace',
    area: '1,120 sq.ft',
    coords: { x: 10, y: 62, w: 45, h: 32 },
    category: 'Private Quarters',
    acousticRating: 'STC 64 (Hospital-Grade Acoustic Suede)',
    lightingSpec: 'Circadian Tunable 2200K - 2700K Indirect',
    materials: ['Acoustic Suede Paneling', 'Natural Silk Carpeting', 'Walnut Joinery'],
    description: 'Sound-isolated primary suite with integrated dressing salon, private plunge spa, and circadian sleep-enhancing illumination.'
  },
  {
    id: 'private-wellness',
    name: 'Private Thermal Spa & Gym',
    area: '540 sq.ft',
    coords: { x: 58, y: 50, w: 32, h: 44 },
    category: 'Wellness',
    acousticRating: 'STC 60 (Vibration Isolated Slabs)',
    lightingSpec: '2400K Subdued Ambient + Fiber-Optic Steam',
    materials: ['Honed Travertine', 'Nordic Aspen Timber', 'Blackened Steel'],
    description: 'Hydrotherapy vitality pool, Finnish cedar sauna, cold plunge shower, and TechnoGym Artis biohacking sanctuary.'
  }
];

export interface EditorialArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  abstract: string;
  author: string;
  image: string;
  content: string[];
}

export const EDITORIAL_ARTICLES: EditorialArticle[] = [
  {
    id: 'circadian-lighting-architecture',
    title: 'The Science of 2700K: Circadian Lux in Luxury Penthouses',
    category: 'Lighting Architecture',
    readTime: '6 min read',
    date: 'Autumn 2026',
    author: 'Elena Vane, Lighting Director',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80',
    abstract: 'Why cold white light degrades biological tranquility, and how concealed cove lumens harmonize human physiology with high-end architecture.',
    content: [
      'In traditional residential design, illumination is frequently an afterthought—recessed downlights scattered uniformly across ceilings like punctuation marks without prose. At Solstice, lighting is conceived as the primary sculpting medium of volume.',
      'Our photometric engineering utilizes strict 2700K (Kelvin) warm architectural diodes with a Color Rendering Index (CRI) exceeding 98. This ensures that the natural pink and wine veins in Calacatta marble, and the rich tannins in smoked French oak, are rendered with museum-grade fidelity.',
      'By concealing LEDs within continuous knife-edge ceiling coves and floor reveals, light ceases to be a glare source and becomes an ambient vapor that visually floats structural mass.'
    ]
  },
  {
    id: 'cantilever-physics',
    title: 'Defying Gravity: Structural Post-Tensioning in Agenvo Cantilevers',
    category: 'Civil & Structural Engineering',
    readTime: '8 min read',
    date: 'Winter 2026',
    author: 'Dr. Henrik Thorne, Chief Structural Engineer',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    abstract: 'How carbon-composite tendons and finite-element modeling enable 18-meter cantilevered glass volumes with virtually zero deflection.',
    content: [
      'The emotional resonance of a cantilever lies in the suspension of disbelief. When an observer stands on a 15-meter glass terrace suspended over a mirror lake, their mind experiences weightlessness.',
      'To achieve this without bulky visible trusses, Agenvo deploys aerospace-grade post-tensioned steel cables cast within high-tensility polymer concrete. Every square millimeter of the slab is pre-stressed to counter gravitational sag.',
      'The result is a structure that appears as delicate as folded origami yet possesses seismic absorption parameters capable of withstanding category 8 earth tremors.'
    ]
  },
  {
    id: 'carrara-quarry-chronicles',
    title: 'Sourcing the Rare Breccia: Inside the Apuan Alps Marble Quarries',
    category: 'Artisanal Materiality',
    readTime: '5 min read',
    date: 'Summer 2026',
    author: 'Matteo Bellini, Sourcing Principal',
    image: 'https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?auto=format&fit=crop&w=1200&q=80',
    abstract: 'Traveling 1,400 meters above sea level to extract single-quarry bookmatched Calacatta Viola slabs for custom monolithic joinery.',
    content: [
      'True luxury cannot be manufactured in a factory; it is sculpted over 190 million years by tectonic heat and pressure. Each season, our material team ascends into the Apuan Alps of Tuscany.',
      'We reject more than 94% of quarried blocks. We search exclusively for blocks where the burgundy breccia crystallization creates dramatic balance with milk-white calcite fields.',
      'Once selected, the block is wire-sawn into consecutive 20mm slabs and photographed in 8K high-resolution, allowing our clients to approve the exact butterfly mirror match before fabrication.'
    ]
  }
];

export interface TestimonialPressItem {
  id: string;
  quote: string;
  author: string;
  title: string;
  project: string;
  publication?: string;
  rating: number;
}

export const TESTIMONIALS_DATA: TestimonialPressItem[] = [
  {
    id: '1',
    quote: 'Solstice and Agenvo redefined our understanding of residential space. The seamless transition between the cantilevered glass pavilion and the warm 2700K interior cove lighting is pure poetry.',
    author: 'Lord Julian Sterling',
    title: 'Private Investor & Collector',
    project: 'Tribeca Multi-Level Penthouse',
    rating: 5
  },
  {
    id: '2',
    quote: 'At Royal Crest, guest satisfaction jumped to 99.4% following the presidential suite overhaul. The acoustic silence and tactile materiality leave international diplomats in awe.',
    author: 'Béatrice de Courcelles',
    title: 'Managing Director, Luxury Hospitality Group',
    project: 'Royal Crest Suites & Spa Zurich',
    rating: 5
  },
  {
    id: '3',
    quote: 'Agenvo structural engineers solved what three other engineering firms claimed was mathematically impossible. Our 18m Lake Como cantilever is now an architectural icon.',
    author: 'Marco Castiglione',
    title: 'Architectural Developer',
    project: 'Villa Smeralda, Lake Como',
    rating: 5
  }
];

export const PRESS_ACCOLADES = [
  { name: 'Architectural Digest', accolade: 'Best Residential Innovation 2026' },
  { name: 'Prix Versailles', accolade: 'World Architecture Gold Medal' },
  { name: 'Forbes Travel Guide', accolade: '5-Star Verified Palatial Suites' },
  { name: 'Wallpaper* Design Awards', accolade: 'Atelier of the Year' },
  { name: 'World Architecture Festival', accolade: 'Engineering Feat Winner' }
];

export interface FaqItem {
  q: string;
  a: string;
  category: 'Process' | 'Materials' | 'Timeline' | 'Hospitality';
}

export const FAQ_DATA: FaqItem[] = [
  {
    q: 'How does the turnkey commission process work from initial brief to handover?',
    a: 'We manage the complete lifecycle. Phase 1 involves spatial discovery and 3D VR renders. Phase 2 covers structural engineering and permit filings. Phase 3 oversees European quarry extraction and joinery fabrication. Phase 4 provides white-glove turnkey installation, including curated art placement and scent architecture.',
    category: 'Process'
  },
  {
    q: 'Can clients customize the lighting color temperature and circadian schedules?',
    a: 'Yes. Every project includes architectural Lutron or KNX smart automation calibrated to your local geographic solar elevation. As daylight fades, lighting shifts dynamically from 3000K soft white to 2200K amber candle warmth to promote natural melatonin production.',
    category: 'Materials'
  },
  {
    q: 'How do Agenvo engineering and Solstice interior architecture collaborate?',
    a: 'Agenvo provides the civil structural skeleton (cantilevers, post-tensioned slabs, glass envelopes), while Solstice designs the interior skin, acoustic treatments, and custom joinery. Because both studios operate under unified direction, zero compromises occur between structure and aesthetics.',
    category: 'Process'
  },
  {
    q: 'What is the average timeline for a luxury private estate or penthouse build?',
    a: 'Full penthouse reprogrammings typically take 14 to 22 weeks turnkey. Ground-up cantilevered villas require 10 to 16 months depending on local excavation and permitting timelines. We provide guaranteed handover dates backed by contractual SLAs.',
    category: 'Timeline'
  },
  {
    q: 'Can Royal Crest suites be booked for private delegations and diplomatic summits?',
    a: 'Yes. Royal Crest suites feature encrypted acoustic isolation (STC 64), secure private elevator corridors, and dedicated presidential butler staff with security clearance. Helicopter transfers to rooftop pads are arranged directly with our concierge.',
    category: 'Hospitality'
  }
];

export interface AtelierContact {
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  timezone: string;
  director: string;
}

export const ATELIER_CONTACTS: AtelierContact[] = [
  {
    city: 'New York',
    country: 'United States',
    address: '540 Hudson Street, Tribeca, NY 10014',
    phone: '+1 (212) 555-0199',
    email: 'newyork@solstice-interiors.com',
    timezone: 'EST (UTC-5)',
    director: 'Victoria Sterling, AIA'
  },
  {
    city: 'London',
    country: 'United Kingdom',
    address: '18 Berkeley Square, Mayfair, London W1J 6EN',
    phone: '+44 (20) 7946-0912',
    email: 'london@solstice-interiors.com',
    timezone: 'GMT (UTC+0)',
    director: 'Charles Alistair, RIBA'
  },
  {
    city: 'Zurich',
    country: 'Switzerland',
    address: 'Gotthardstrasse 26, 8002 Zürich',
    phone: '+41 (44) 220-4100',
    email: 'zurich@agenvo-engineering.ch',
    timezone: 'CET (UTC+1)',
    director: 'Dr. Henrik Thorne, ETH'
  },
  {
    city: 'Dubai',
    country: 'United Arab Emirates',
    address: 'DIFC Gate Precinct 4, Level 7, Dubai',
    phone: '+971 (4) 362-8000',
    email: 'dubai@royalcrest-suites.ae',
    timezone: 'GST (UTC+4)',
    director: 'Zayd Al-Maktoum'
  }
];
