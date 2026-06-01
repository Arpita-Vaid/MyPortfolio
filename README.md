# Arpita Vaid — Portfolio

Premium software engineer portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React
- EmailJS

## Getting Started

```bash
npm install
```

### Set up environment variables

Copy the example env file and fill in your [EmailJS](https://www.emailjs.com/) credentials:

```bash
cp .env.example .env
```

Then edit `.env` with your values:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Run the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Sections

| Section | Description |
|---------|-------------|
| Hero | Name, stats, CTAs, social links, magnetic profile image |
| Tech Marquee | Scroll-driven tech stack tiles |
| About | Bio, career objective, education snapshot, resume |
| Tech Stack | Skills by category |
| What I Do | Development services |
| Projects | Sticky stacking project cards (IntelliCode AI, FinBulletin) |
| GitHub | Profile link and highlights |
| Education | BE, HSC, SSC |
| Achievements | HerVision, academics, certifications |
| Experience | Project-based full-stack experience |
| Contact | Form (EmailJS), email, location, socials |
| Footer | Copyright |

## Customize

1. **Profile photo** — Add `public/profile.jpg` (falls back to generated avatar).
2. **Resume** — Add `public/resume.pdf` for download buttons.
3. **Content & links** — Edit `src/data/portfolio.ts` (projects, GitHub URLs, live demos).

## Build

```bash
npm run build
npm run preview
```

## Deploy

Deploy the `dist` folder to Vercel, Netlify, or GitHub Pages.
