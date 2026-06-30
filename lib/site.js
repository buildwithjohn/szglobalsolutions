// Central site configuration: navigation, contact details and shared copy.

export const site = {
  name: 'SZ Global Solutions',
  tagline: 'Origination. Structuring. Execution.',
  email: 'support@szglobalsolutions.com',
  altEmail: 'hello@szglobalsolutions.com',
  website: 'www.szglobalsolutions.com',
  address: 'Compass Building, Al Shohada Road, Al Hamra Industrial Zone-FZ, Ras Al Khaimah, UAE',
  addressShort: 'Ras Al Khaimah, United Arab Emirates',
  hours: 'Monday – Friday, 9:00 AM – 6:00 PM (GST)',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'What We Do',
    href: '/what-we-do',
    children: [
      { label: 'Deal Origination', href: '/what-we-do#deal-origination' },
      { label: 'Capital Advisory', href: '/what-we-do#capital-advisory' },
      { label: 'Transaction Advisory', href: '/what-we-do#transaction-advisory' },
    ],
  },
  { label: 'Energy & Commodities', href: '/energy-commodities' },
  { label: 'Our Approach', href: '/our-approach' },
  { label: 'Why Choose Us', href: '/why-choose-us' },
  { label: 'Value Proposition', href: '/value-proposition' },
  { label: 'Contact', href: '/contact' },
];

// Curated Unsplash imagery (Unsplash License — free for commercial use).
export const img = {
  // Home page — client-supplied imagery (public/images)
  heroPort: '/images/home-hero.jpg',
  oilRig: '/images/deal-origination.jpg',
  advisory: '/images/wwd-capital-advisory.jpg',
  boardroom: '/images/wwd-transaction-advisory.jpg',
  meeting:
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80',
  city:
    'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=80',
  dubai: '/images/dubai.jpg',
  solar: '/images/focus-energy-commodities.jpg',
  wind: '/images/focus-infrastructure-renewables.jpg',
  mining:
    'https://images.unsplash.com/photo-1578319439584-104c94d37305?auto=format&fit=crop&w=1200&q=80',
  excavator: '/images/focus-capital-advisory.jpg',
  shipping: '/images/container-port.jpg',
  handshake: '/images/handshake.jpg',
  coast: '/images/impact-coast.jpg',
  impact: '/images/impact-coast.jpg',
  yacht: '/images/yacht.jpg',
  chess: '/images/chess.jpg',
  summit: '/images/summit.jpg',
  glassTower: '/images/glass-tower.jpg',
  government: '/images/government.jpg',
  mountain:
    'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=900&q=80',
  lighthouse:
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
  finance: '/images/finance-chart.jpg',
  worldNight: '/images/globe.jpg',
  globe: '/images/globe.jpg',
  aboutHero: '/images/about-hero.jpg',
  aboutGlobe: '/images/about-globe.jpg',
  approachHero: '/images/approach-hero.jpg',
  en590: '/images/product-en590.jpg',
  jeta1: '/images/product-jeta1.jpg',
  petrochem: '/images/product-petrochem.jpg',
  distributors: '/images/distributors.jpg',
  aviation: '/images/aviation.jpg',
  // Energy & Commodities — product imagery
  refinery: '/images/focus-energy-commodities.jpg',
  airplane:
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
  lpg: '/images/product-lpg.jpg',
  powerlines:
    'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=80',
  capitol:
    'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=1000&q=80',
  gold: '/images/comm-gold.jpg',
  copper: '/images/comm-copper.jpg',
  lithium: '/images/comm-lithium.jpg',
  cobalt: '/images/comm-cobalt.jpg',
};
