# AGENTS.md

This file provides guidance to AI coding agents when working with code in this repository.

## Commands

```bash
npm run dev      # Start local dev server (localhost:3000)
npm run build    # Next.js production build in ./.next/
npm run lint     # ESLint CLI
```

No test suite exists in this project.

## Architecture

This is a **Next.js 16** portfolio site deployed to Vercel through its GitHub integration. Pushes to `main` deploy to production; other branches and pull requests get preview deployments. The homepage is prerendered, and Vercel provides image optimization. Use Node.js 24 to match Vercel and `.github/workflows/ci.yml`, which runs lint and build checks.

### Key structural points

- **Single-page app**: `src/app/page.tsx` is the only route. It renders a sidebar (photo, bio, contact links) alongside the `<Resume />` component.
- **Resume tabs** (`src/app/resume/resume.tsx`): Client component managing a `useState` tab selection. Each tab (Education, Experience, Projects, Activities, Publications, Awards, Skills) maps to a component in `src/app/resume/components/`. Tab content is animated via Framer Motion's `AnimatePresence`.
- **Shared entry layout**: `src/app/resume/components/resume-entry.tsx` renders the common entry structure (title row with icon links and date range, optional subtitle/location row, children). Experience, Projects, Activities, and Publications wrap it with thin section-specific components; Education and Awards have their own layouts.
- **Theme**: Dark/light mode handled by an inline `<script>` in `layout.tsx` that runs before hydration to prevent flash. The `ThemeToggle` component (`src/components/theme-toggle.tsx`) writes to `localStorage` and toggles the `dark` class on `<html>`.
- **UI primitives**: shadcn/ui components live in `src/components/ui/` (currently `hover-card.tsx`). `src/lib/utils.ts` exports `cn()` (clsx + tailwind-merge).
- **Content is hardcoded**: All resume data (experience, projects, skills, etc.) lives directly in the TSX files under `src/app/resume/components/`. There is no CMS or data layer.
- **Organization emblems**: Stored in `public/emblems/` and mapped by organization name in `src/app/resume/components/emblems.ts` (the single source of truth; entry components take a typed `Organization` name). Adding a new organization requires dropping an image there and adding an entry to that map.

### Styling conventions

- Tailwind CSS with the `dark:` variant for theme support.
- Card-style entries are simple bordered rows with Tailwind styling.
- Responsive layout: stacked on mobile, side-by-side on `sm:` and above. The tab bar is a `grid-cols-2`/`grid-cols-3` grid on mobile and an underlined flex tab row on desktop (`lg:`).

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
