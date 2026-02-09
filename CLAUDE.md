# 4yes.hu - AI Automation Agency Website

## Project Overview
Marketing website for 4yes.hu, a Hungarian AI automation agency. Single-page application with client-side routing (React state-based, no router library). All content is in Hungarian.

## Tech Stack
- **Framework:** React 19 + Vite 7
- **Styling:** Tailwind CSS v4 (uses `@tailwindcss/vite` plugin, NOT PostCSS config)
- **Icons:** lucide-react
- **Language:** JavaScript (JSX), no TypeScript

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build (output: `dist/`)
- `npm run preview` — Preview production build
- `npm run lint` — ESLint

## Deployment
- **Hosting:** Vercel (CLI: `vercel --prod --yes`)
- **GitHub:** https://github.com/kolbertistvan2/4yes-website-plan

## Project Structure
```
src/
  App.jsx       — Entire app: HomePage, ServicePage1/2/3, FAQItem, App (navbar + footer)
  main.jsx      — React entry point
  index.css     — Tailwind import + Inter font theme
```

## Architecture Notes
- **Routing:** `useState("home")` in `App` component — pages: `home`, `service1`, `service2`, `service3`
- **No component splitting:** Everything lives in `App.jsx` as a single file
- **Tailwind v4:** Uses `@import "tailwindcss"` syntax in CSS and `@theme` block for custom values. No `tailwind.config.js` needed.
- **Design system:** Slate color palette, Inter font, rounded-xl cards, slate-900 accent buttons

## Pages
1. **Home** — Hero, stats, pain points, 3 service cards, process, testimonials, AI comparison, FAQ
2. **Service 1** — AI Felmeres es Workshop (assessment & roadmap)
3. **Service 2** — AI Workflow fejlesztes (custom automation development)
4. **Service 3** — AI Munkaero kolcsonzes (AI agent leasing)
