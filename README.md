# SZ Global Solutions — Website

Marketing website for **SZ Global Solutions**, a UK & UAE-based origination and
transaction advisory firm operating across Africa, the GCC and international markets.

Built with **Next.js 14 (App Router)** and **Tailwind CSS**.

## Pages

| Route                  | Description                                              |
| ---------------------- | -------------------------------------------------------- |
| `/`                    | Home — Origination. Structuring. Execution.              |
| `/about`               | Who We Are, where we operate, mission & vision           |
| `/what-we-do`          | Three capabilities: Origination, Capital, Transaction    |
| `/energy-commodities`  | Sectors we serve across the value chain                  |
| `/our-approach`        | Six-stage disciplined approach & principles              |
| `/insights`            | Articles & perspectives                                  |
| `/contact`             | Enquiry form & contact details                           |

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Project structure

```
app/                 # App Router pages (one folder per route)
components/          # Navbar, Footer, Logo, Icons, shared UI, ContactForm
lib/site.js         # Navigation, contact details and image references
reference/          # Original design mockups (for reference only)
```

## Design system

- **Colours:** dark navy backgrounds (`navy.*`) with gold/amber accent (`gold` `#e8a33d`)
- **Type:** Sora (display) + Inter (body) via `next/font`
- **Imagery:** referenced from Unsplash (Unsplash License). Swap the URLs in
  `lib/site.js` to use the client's own photography.

## Notes

- The contact form opens the visitor's email client (`mailto:`). To capture
  submissions server-side, wire the form to a form service (e.g. Formspree,
  Resend, or a Next.js route handler) in `components/ContactForm.jsx`.
- Replace placeholder copy in `/insights` with real published articles.

## Deployment

Deploys cleanly to **Vercel** (recommended) or any Node host. Push to GitHub and
import the repo in Vercel, or run `npm run build && npm run start`.
