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

## Contact form

The form (`components/ContactForm.jsx`) POSTs to a Next.js route handler at
`app/api/contact/route.js`, which sends the enquiry by email via **Resend**.
It validates input server-side, includes a honeypot to drop bot spam, and sets
the visitor's address as `reply-to` so you can reply directly.

**Setup:**

1. Create a free account and API key at <https://resend.com>.
2. Verify your sending domain in Resend (Domains → Add Domain) so mail can be
   sent from `@szglobalsolutions.com`. For quick local testing you can instead
   use `onboarding@resend.dev` as the `CONTACT_FROM_EMAIL`.
3. Copy `.env.example` → `.env.local` and fill in the values:

   ```
   RESEND_API_KEY=re_xxxxxxxx
   CONTACT_TO_EMAIL=support@szglobalsolutions.com
   CONTACT_FROM_EMAIL=SZ Global Solutions <noreply@szglobalsolutions.com>
   ```

4. On **Vercel**, add the same three variables under
   Project → Settings → Environment Variables, then redeploy.

If `RESEND_API_KEY` is missing the API returns a friendly error and logs a
warning — the rest of the site is unaffected.

## Notes

- Replace placeholder copy in `/insights` with real published articles.
- Imagery uses Unsplash placeholders — swap the URLs in `lib/site.js` for the
  client's own photography.

## Deployment

Deploys cleanly to **Vercel** (recommended) or any Node host. Push to GitHub and
import the repo in Vercel, or run `npm run build && npm run start`.
