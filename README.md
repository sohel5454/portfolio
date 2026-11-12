# Software Engineer Portfolio

A premium, interactive, production-ready personal portfolio built with **React + TypeScript + Vite + Tailwind CSS + Framer Motion**. Designed for a software engineer with a background in .NET, GPS/IoT, real-time systems and full-stack web/mobile development.

## Features

- Light and dark themes with `localStorage` persistence and `prefers-color-scheme` detection
- Sticky navbar with scroll-spy active section highlighting and a slide-in mobile menu
- Animated hero with an interactive tech-network diagram (SVG + Framer Motion)
- Expandable experience cards grouped by technical area (Backend, Real-Time, GPS/IoT, Maps, Mobile, Auth, Integrations)
- "Engineering Challenges I've Solved" — problem/solution cards that demonstrate reasoning, not just tech buzzwords
- Filterable skills grid (no arbitrary percentage bars)
- A featured **GPS Tracking & IoT SaaS Platform** project with:
  - A clickable, explorable architecture diagram
  - A capability grid
  - A fully client-side interactive GPS tracking simulation (mock telemetry, animated marker, playback controls) — no backend required
- A separate "How I Build Systems" architecture section with clickable nodes
- Project grid with a detail modal (title, description, tech, features, links)
- Education timeline
- Contact section with a validated contact form (loading/success/error states) and an abstracted `submitContactForm` function ready to be wired to a real API
- Scroll progress bar, back-to-top button, desktop-only custom cursor, `prefers-reduced-motion` support
- A small Konami-code easter egg
- SEO: title/meta description, Open Graph + Twitter cards, canonical URL, JSON-LD `Person` schema, `robots.txt`, `sitemap.xml`
- Fully responsive from 320px to 1920px+, keyboard accessible, visible focus states

## Tech Stack

React 19 · TypeScript · Vite · Tailwind CSS · Framer Motion · Lucide React

## Getting Started

```bash
npm install
npm run dev       # start the dev server
npm run build     # type-check and build for production
npm run preview   # preview the production build locally
npm run lint       # run oxlint
```

## Environment Variables

Copy `.env.example` to `.env`. Nothing is required to run the site locally — the variables are placeholders for wiring up a real contact-form backend or analytics later.

```bash
cp .env.example .env
```

## Customization

All portfolio content lives in `src/data/`, separate from the UI components:

| File | Controls |
|---|---|
| `src/data/profile.ts` | Name, title, hero copy, hero stats, tech-network nodes, about text, "Engineering Focus" cards, and `portfolioConfig` (name, email, links, resume path, availability) |
| `src/data/experience.ts` | Company/role/duration, journey timeline, responsibility groups, engineering challenges, 4-step approach |
| `src/data/skills.ts` | Skill categories and filter tags |
| `src/data/projects.ts` | The featured GPS platform (description, architecture, features, integrations) and the "Other Projects" grid |
| `src/data/education.ts` | Education timeline entries |
| `src/data/gpsRoute.ts` | Mock coordinates for the interactive GPS demo |

To change your name, email, social links, resume path or availability status in one place, edit `portfolioConfig` in `src/data/profile.ts`.

### Adding a project

Add an entry to the `otherProjects` array in `src/data/projects.ts`:

```ts
{
  id: 'my-project',
  title: 'My Project',
  tech: ['React', 'Node.js'],
  description: 'What it does and why it matters.',
  features: ['Feature one', 'Feature two'],
}
```

It will automatically appear in the project grid and open in the detail modal when clicked.

### Changing the theme

Colors are defined as CSS variables in `src/index.css` under `:root` (light) and `.dark` (dark), and mapped to Tailwind utility classes (`bg-primary`, `text-muted`, `border-border`, etc.) in `tailwind.config.js`. Change the hex values there to re-theme the whole site — no need to touch individual components.

### Replacing your resume

Place your resume PDF at `public/resume.pdf` (see `public/README-resume.txt`). The path is configurable via `portfolioConfig.resume` in `src/data/profile.ts` if you'd rather host it elsewhere.

### Configuring the contact form

The contact form (`src/components/contact/ContactForm.tsx`) validates input client-side and calls a `submitContactForm` function that currently simulates a network request. Replace its body with a real call to your email service or API endpoint, for example:

```ts
async function submitContactForm(data: { name: string; email: string; subject: string; message: string }) {
  const res = await fetch(import.meta.env.VITE_CONTACT_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return { ok: res.ok }
}
```

## Folder Structure

```
src/
  components/
    common/       Navbar, Footer, ThemeToggle, Button, SectionHeading, ScrollProgress, BackToTop, CustomCursor, EasterEgg, ErrorBoundary
    hero/         Hero, TechNetwork, HeroStats
    about/        About, EngineeringFocus
    experience/   Experience, ExperienceCard, EngineeringChallenges
    skills/       Skills, SkillCategory
    projects/     Projects, ProjectCard, ProjectModal, GpsDemo, ArchitectureDiagram
    architecture/ SystemArchitecture
    education/    Education
    contact/      Contact, ContactForm
  data/           profile.ts, experience.ts, skills.ts, projects.ts, education.ts, gpsRoute.ts
  hooks/          useTheme.ts, useScrollSpy.ts
  lib/            utils.ts
  App.tsx
  main.tsx
  index.css
```

## Deployment

The app builds to a static SPA in `dist/` and can be deployed anywhere that serves static files.

- **Vercel**: a `vercel.json` with SPA rewrites is included. Import the repo in Vercel and deploy — no extra config needed.
- **Netlify**: a `public/_redirects` file (`/*  /index.html  200`) is included for SPA routing. Set the build command to `npm run build` and the publish directory to `dist`.
- **GitHub Pages**: run `npm run build`, then deploy the contents of `dist/` to the `gh-pages` branch (e.g. with the `gh-pages` npm package), and set `base` in `vite.config.ts` to your repo name if not deploying to a custom domain.

## Notes

- Remaining placeholders: the domain (`your-domain.example`) in `index.html`, `robots.txt` and `sitemap.xml`, and `public/resume.pdf`, which you need to add.
- No fake testimonials, company logos, GitHub star counts, or metrics have been included, per the original brief.
