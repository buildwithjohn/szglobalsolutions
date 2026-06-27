// Lightweight inline SVG icon set — stroke style matches the SZ Global templates.

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const Globe = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
  </svg>
);

export const Target = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.4" fill="currentColor" />
  </svg>
);

export const Search = (p) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.2-3.2" />
  </svg>
);

export const Check = (p) => (
  <svg {...base} {...p}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const CheckCircle = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8.5 12 2.4 2.4L16 9.5" />
  </svg>
);

export const Layers = (p) => (
  <svg {...base} {...p}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5M3 13l9 5 9-5" />
  </svg>
);

export const Coins = (p) => (
  <svg {...base} {...p}>
    <ellipse cx="9" cy="7" rx="6" ry="3" />
    <path d="M3 7v5c0 1.7 2.7 3 6 3M15 12.3c2.4.5 4 1.6 4 2.9 0 1.7-2.7 3-6 3s-6-1.3-6-3" />
    <path d="M3 12c0 1.7 2.7 3 6 3" />
    <ellipse cx="15" cy="15" rx="6" ry="3" />
  </svg>
);

export const Users = (p) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
    <path d="M16 5.5a3 3 0 0 1 0 5.6M16.5 19a5.5 5.5 0 0 0-2.2-4.4" />
  </svg>
);

export const Handshake = (p) => (
  <svg {...base} {...p}>
    <path d="m11 17 2 2a1.4 1.4 0 0 0 2-2" />
    <path d="m15 17 2 2a1.4 1.4 0 0 0 2-2l-4-4" />
    <path d="m3 11 3.6-3.6a2 2 0 0 1 2.6-.2L12 9l-2 2a1.5 1.5 0 0 1-2 0" />
    <path d="M14 8.5 16.5 6a2 2 0 0 1 2.6.1L22 9" />
    <path d="m2 9 2 2M20 11l2-2" />
  </svg>
);

export const Chart = (p) => (
  <svg {...base} {...p}>
    <path d="M4 19V5M4 19h16" />
    <path d="m7 15 3-3 3 2 5-6" />
  </svg>
);

export const Shield = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3 5 6v5c0 4.2 3 7.4 7 9 4-1.6 7-4.8 7-9V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const Bulb = (p) => (
  <svg {...base} {...p}>
    <path d="M9 18h6M10 21h4" />
    <path d="M12 3a6 6 0 0 0-3.8 10.6c.5.4.8 1 .8 1.6V16h6v-.8c0-.6.3-1.2.8-1.6A6 6 0 0 0 12 3Z" />
  </svg>
);

export const Compass = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m15.6 8.4-2 5.2-5.2 2 2-5.2 5.2-2Z" />
  </svg>
);

export const Flame = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3c1 3 4 4.2 4 7.5A4 4 0 0 1 12 14a4 4 0 0 1-4-3.5C8 8.7 9.2 8 9.5 6 11 7 11 8.5 11 8.5 11.7 7 12 5 12 3Z" />
    <path d="M8.5 11A6 6 0 1 0 16 13.4" />
  </svg>
);

export const Diamond = (p) => (
  <svg {...base} {...p}>
    <path d="M6 3h12l3 5-9 13L3 8l3-5Z" />
    <path d="M3 8h18M9 3 7.5 8 12 21l4.5-13L15 3" />
  </svg>
);

export const Leaf = (p) => (
  <svg {...base} {...p}>
    <path d="M5 19c0-7 5-12 14-13 .5 6-2 13-10 13a6 6 0 0 1-4-1Z" />
    <path d="M5 19c3-5 6-7 10-9" />
  </svg>
);

export const Building = (p) => (
  <svg {...base} {...p}>
    <path d="M4 21V5l8-2v18M14 21V9l6-2v14M3 21h18" />
    <path d="M7 8h2M7 11h2M7 14h2M17 11h0M17 14h0" />
  </svg>
);

export const Send = (p) => (
  <svg {...base} {...p}>
    <path d="M21 3 3 11l7 2 2 7 9-17Z" />
    <path d="m10 13 4-4" />
  </svg>
);

export const Mail = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

export const Phone = (p) => (
  <svg {...base} {...p}>
    <path d="M5 4h3l1.5 4-2 1.5a12 12 0 0 0 5 5L19 12l4 1.5V17a2 2 0 0 1-2 2A16 16 0 0 1 5 4Z" />
  </svg>
);

export const Pin = (p) => (
  <svg {...base} {...p}>
    <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const Clock = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" />
  </svg>
);

export const Arrow = (p) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const Quote = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24} {...p}>
    <path d="M10 11H6.2c.1-2 .9-3.1 3-3.6L8.7 5C5.3 5.9 4 8.1 4 11.7V19h6v-8Zm10 0h-3.8c.1-2 .9-3.1 3-3.6L18.7 5c-3.4.9-4.7 3.1-4.7 6.7V19h6v-8Z" />
  </svg>
);

export const Link = (p) => (
  <svg {...base} {...p}>
    <path d="M10 13a4 4 0 0 0 5.7.3l2.6-2.6a4 4 0 0 0-5.7-5.7l-1.3 1.3" />
    <path d="M14 11a4 4 0 0 0-5.7-.3L5.7 13.3a4 4 0 0 0 5.7 5.7l1.3-1.3" />
  </svg>
);
