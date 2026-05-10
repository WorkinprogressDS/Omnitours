# OmniTour.ai — Netlify Deployment Guide

## Deploy to Netlify (recommended)

### Option A — Netlify UI (easiest, ~5 minutes)

1. Push this folder to a GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial OmniTour.ai build"
   git remote add origin https://github.com/YOUR_USERNAME/omnitour.git
   git push -u origin main
   ```

2. Go to app.netlify.com → Add new site → Import an existing project

3. Connect your GitHub account and select the repo

4. Build settings are auto-detected from netlify.toml:
   - Build command: `npm run build`
   - Publish directory: `.next`

5. Click **Deploy site** — live in ~2 minutes

6. Add your custom domain:
   - Site settings → Domain management → Add custom domain
   - Enter: `omnitour.ai`
   - Netlify shows you the DNS records to add at your registrar (Cloudflare/Namecheap)
   - Netlify provisions a free SSL certificate automatically

### Option B — Netlify CLI (fastest for devs)

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --build --prod
```

---

## Preview locally before deploying

```bash
npm install
npm run dev
# Visit http://localhost:3000
```

---

## Project structure

```
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
netlify.toml          ← Netlify build config + plugin
```

---

## Wiring the contact form to email

Netlify has built-in form handling — zero backend needed.

In `Contact.tsx`, change the `<form>` opening tag to:
```tsx
<form onSubmit={handleSubmit} data-netlify="true" name="demo-booking">
```

Then add a hidden input inside the form:
```tsx
<input type="hidden" name="form-name" value="demo-booking" />
```

Go to Netlify → Forms → demo-booking → enable email notifications.
Every submission goes straight to your inbox.

---

## Adding a real SuperSplat viewer (PlayCanvas)

1. Capture your property footage
2. Upload .ply to: superspl.at/editor
3. Publish → copy your splat ID
4. In any component, replace SplatCanvas with:

```tsx
<iframe
  src="https://superspl.at/s?id=YOUR_SPLAT_ID"
  style={{ width: '100%', height: '100%', border: 'none' }}
  allow="accelerometer; gyroscope; fullscreen"
  allowFullScreen
/>
```

---

## Brand tokens

| Token       | Value     | Usage              |
|-------------|-----------|-------------------|
| --accent    | #4F7EFF   | CTAs, links, tags |
| --green     | #22D47A   | Success, yields   |
| --amber     | #F5B942   | Warnings, prices  |
| --bg        | #080B12   | Page background   |

## Fonts (Google Fonts, loaded in globals.css)

- **Syne** — display / headings / logo
- **DM Sans** — body copy
- **DM Mono** — labels, tags, code
