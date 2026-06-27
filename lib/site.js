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
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

// Curated Unsplash imagery (Unsplash License — free for commercial use).
export const img = {
  heroPort:
    'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1600&q=80',
  oilRig:
    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
  advisory:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
  boardroom:
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80',
  meeting:
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80',
  city:
    'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=80',
  dubai:
    'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
  solar:
    'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
  wind:
    'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80',
  mining:
    'https://images.unsplash.com/photo-1578319439584-104c94d37305?auto=format&fit=crop&w=1200&q=80',
  excavator:
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
  shipping:
    'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1200&q=80',
  handshake:
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',
  coast:
    'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1400&q=80',
  yacht:
    'https://images.unsplash.com/photo-1500627964684-141351970a7f?auto=format&fit=crop&w=1600&q=80',
  mountain:
    'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=900&q=80',
  lighthouse:
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
  finance:
    'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
  worldNight:
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',
};
