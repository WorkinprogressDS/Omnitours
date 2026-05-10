# OmniTour.ai — Next.js Website

## Deploy to Vercel (fastest, free)

1. Push this folder to a GitHub repo
2. Go to vercel.com → New Project → Import your repo
3. Vercel auto-detects Next.js — click Deploy
4. Add your custom domain: omnitour.ai in Vercel settings

## Or deploy locally to preview

```bash
npm install
npm run dev
# Visit http://localhost:3000
```

## Project structure

src/
  app/
    page.tsx          ← Main page (assembles all sections)
    layout.tsx        ← HTML shell + metadata
    globals.css       ← Design tokens, animations, utility classes
  components/
    Nav.tsx           ← Sticky nav with scroll effect
    Hero.tsx          ← Particle splat hero with CTAs
    SplatCanvas.tsx   ← Gaussian particle animation
    Stats.tsx         ← 4 key stats bar
    HowItWorks.tsx    ← 4-step process cards
    Segments.tsx      ← 4 customer segments
    Pricing.tsx       ← 3 plans with one-off/retainer toggle
    Testimonials.tsx  ← 3 social proof cards
    Contact.tsx       ← Demo booking form
    Footer.tsx        ← Full footer with links

## To wire in real PlayCanvas SuperSplat viewer

In any component, replace the SplatCanvas with:

```tsx
<iframe
  src="https://superspl.at/s?id=YOUR_SPLAT_ID"
  style={{ width: '100%', height: '100%', border: 'none' }}
  allow="accelerometer; gyroscope; fullscreen"
  allowFullScreen
/>
```

Get your splat ID by publishing at: superspl.at/editor

## Brand colours

--accent: #4F7EFF (blue)
--green:  #22D47A
--amber:  #F5B942
--bg:     #080B12

## Fonts

Display: Syne (headings, logo, numbers)
Body:    DM Sans
Mono:    DM Mono (tags, labels, code)
