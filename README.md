# Fulvio Coach — Spanish Method Tennis Academy

**Live:** [spanishtennis.info](https://www.spanishtennis.info) · Deployed on [Vercel](https://vercel.com)

One-page site for **Fulvio Coach**, an Italian tennis coach based in Phuket
who teaches the Spanish tennis method (zones 3-2-1, footwork, intensity)
to juniors, adults and visiting players. *Vamos.*

---

## What this site is

A single, multilingual landing page whose job is exactly one thing:
get a serious player to open WhatsApp and book a session with Fulvio.

- One page, six locales: **en · es · it · th · zh · ru**
- Editorial design, tennis palette (clay · court · ball)
- Personal touches: Fulvio, Rafa Nadal aesthetic, Tarzán the dog, motorbike
- SEO + AI-search ready: rich JSON-LD (Person, LocalBusiness, Course, FAQ,
  Review, Video), OpenGraph per locale, hreflang, sitemap

## Tech stack

| Layer | Technology |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| UI | [React 19](https://react.dev) + TypeScript |
| Motion | [Framer Motion](https://motion.dev) |
| i18n | Custom — 6 locales, cookie-persisted, `Accept-Language` fallback |
| SEO | Dynamic metadata, JSON-LD, per-locale OG images |
| Analytics | Vercel Analytics + Speed Insights |
| Deployment | Vercel |

## Project structure

```
.
├── src/
│   ├── app/
│   │   ├── [lang]/                  # Locale-scoped landing
│   │   │   ├── page.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── not-found.tsx
│   │   │   └── opengraph-image.tsx
│   │   ├── layout.tsx
│   │   ├── manifest.ts
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── basic/                   # Navbar · Footer · LangSwitcher
│   │   └── fulvio/                  # Hero · Manifesto · SpanishSystem · …
│   ├── constants/
│   │   ├── routes/
│   │   ├── seo/
│   │   ├── translations/            # Full 6-locale dictionary
│   │   └── site.ts                  # Contact, videos, photos
│   ├── i18n/
│   ├── proxy.ts                     # Locale detection + CSP
│   └── styles/                      # global.css + CSS Modules
├── public/
│   └── photos/                      # Drop Fulvio's real photos here
└── package.json
```

## Getting started

```bash
pnpm install
pnpm dev            # http://localhost:3000
pnpm build          # production build
pnpm lint
```

## Photos to provide

Drop the following files under `public/photos/` — until they exist, the site
falls back to thumbnails from Fulvio's own YouTube channel.

| File | What it should show |
| --- | --- |
| `fulvio-portrait.jpg` | Fulvio alone, on court, editorial portrait (hero). 4:5, ≥1200px short side. |
| `fulvio-coach.jpg` | Fulvio coaching a player. 4:5, ≥1200px short side. |
| `fulvio-rafa.jpg` | Fulvio with Rafa Nadal (Spanish method inspiration). 4:3 or 16:9. |
| `fulvio-tarzan.jpg` | Fulvio on the motorbike with Tarzán, or Tarzán by the court. 4:3. |

Use JPG or WebP under 400 KB when possible; `next/image` handles sizing.

## Contact copy

WhatsApp, email, Instagram and YouTube are centralised in
`src/constants/site.ts`. Update there and every section, structured data
entry and metadata reference follows.

## License

AGPL-3.0-only.
