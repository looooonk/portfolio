# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start local dev server (localhost:3000)
npm run build    # Static export to ./out/
npm run lint     # ESLint via next lint
```

No test suite exists in this project.

## Architecture

This is a **Next.js 15 static export** portfolio site (output: `"export"` in `next.config.ts`). The built output lands in `./out/` and is deployed to GitHub Pages via `.github/workflows/nextjs.yml` on every push to `main`.

### Key structural points

- **Single-page app**: `src/app/page.tsx` is the only route. It renders a hero section followed by the `<Resume />` component.
- **`ClientWrapper`** (`src/app/clientwrapper.tsx`): Wraps content in Framer Motion's `AnimatePresence` to handle page-level fade transitions keyed by pathname.
- **Resume tabs** (`src/app/resume/resume.tsx`): Client component managing a `useState` tab selection. Each tab (Education, Experience, Projects, Activities, Publications, Awards, Skills) maps to a component in `src/app/resume/components/`. Tab content is animated via Framer Motion's `AnimatePresence`.
- **Theme**: Dark/light mode handled by an inline `<script>` in `layout.tsx` that runs before hydration to prevent flash. The `ThemeToggle` component (`src/components/theme-toggle.tsx`) writes to `localStorage` and toggles the `dark` class on `<html>`.
- **UI primitives**: shadcn/ui components live in `src/components/ui/` (currently `tabs.tsx`, `hover-card.tsx`). `src/lib/utils.ts` exports `cn()` (clsx + tailwind-merge).
- **Content is hardcoded**: All resume data (experience, projects, skills, etc.) lives directly in the TSX files under `src/app/resume/components/`. There is no CMS or data layer.
- **Organization logos**: Stored in `public/emblems/` and referenced by name via a `logos` lookup object in `experience.tsx`. Adding a new organization requires dropping a logo file there and adding an entry to that map.

### Styling conventions

- Tailwind CSS with the `dark:` variant for theme support.
- Card-style entries use inline `style` props for glassmorphism gradients (purple-to-blue, rgba-based) — this is intentional and consistent across `ExperienceEntry` and `ProjectEntry`.
- Responsive layout: stacked on mobile, side-by-side on `sm:` and above; tab grid switches from `grid-cols-2/3` (mobile) to `grid-cols-7` (desktop via `lg:`).
