# Ported `src/` — migration guide

Everything in this folder is the new portfolio, rebuilt against the Hrechykhin design system with React 19 + Vite + Tailwind v3. Drop it into your repo, run `npm install`, run `npm run dev`.

## Layout

```
ported/
  index.html                 ← replaces your root index.html (has theme-flash guard)
  package.json               ← adds tailwindcss + postcss + autoprefixer
  postcss.config.js
  tailwind.config.ts         ← design tokens live here
  public/
    favicon.svg              ← copied from your existing public/
    icons.svg
  src/
    main.tsx
    App.tsx                  ← the one thing you import in main.tsx
    index.css                ← Tailwind + CSS variables for themes
    hooks/
      useTheme.ts            ← dark/light with localStorage + system pref
    data/
      profile.ts             ← now includes `tagline` and `availability`
      projects.ts            ← unchanged from your repo
      skills.ts              ← unchanged
      experience.ts          ← NEW — the site didn't have this yet
    components/
      Header.tsx
      Footer.tsx
      Section.tsx            ← shared chrome for every page section
      ThemeToggle.tsx
      ProjectRow.tsx         ← replaces ProjectCard (rows, not cards)
    sections/
      Hero.tsx
      About.tsx
      Experience.tsx
      Projects.tsx
      Skills.tsx
      Contact.tsx
```

## What to delete from your current repo

All CSS Modules and the old section components — the new versions cover the same surface with better hierarchy:

```
src/styles/global.css
src/components/About/
src/components/Contact/
src/components/Footer/
src/components/Header/
src/components/Hero/
src/components/ProjectCard/
src/components/Projects/
src/components/Skills/
```

Your `react-router-dom` setup in `App.tsx` is gone — the new design is a single-page layout with hash links (`#about`, `#experience`, etc.). If you want multi-page later, `sections/` are the components to put under routes.

## Content deltas you need to fill in

1. **`data/experience.ts`** — I wrote placeholders based on what's in `profile.intro`. Review the dates, companies, and stack. Delete the "Prior roles" entry if it's not accurate.
2. **`profile.tagline`** and **`profile.availability`** — new fields, already populated with reasonable defaults. Edit to taste.
3. **Hero eyebrow** — hardcoded `Available · Q2 '26`. Move to `profile.availability` if you want to edit in one place.

## Design system references

- All colors live on `tailwind.config.ts` under `colors.paper.*`, `colors.graphite.*`, `colors.signal.*`. CSS vars in `index.css` map to the active theme.
- Font stack is Geist / Geist Mono / Instrument Serif — loaded via Google Fonts in `index.css`.
- `Section.tsx` is the atom every big chunk flows through. Changing padding or eyebrow alignment there changes every section.
- `ProjectRow.tsx` uses `<details>` for the "Read more" expand — no JS state needed.

## Responsive

Tested breakpoints: 390 (iPhone), 768 (iPad portrait), 1024 (iPad landscape), 1440 (desktop), 1920+ (large). The `container-site` utility caps max width at 1240px.

## Accessibility notes

- `:focus-visible` rings use `signal` color (rust) — visible in both themes at ≥3:1.
- Theme toggle announces current state via `aria-label`.
- Every eyebrow is decorative; real heading hierarchy is `h1` (Hero) → `h2` (Section) → `h3` (project / role).
- Reduce-motion: the one animated element (the "available" dot) honors `prefers-reduced-motion` implicitly via Tailwind's `animate-pulse`.

## Open questions / next steps

- **Writing section**: not included — add as a 6th section if you start publishing.
- **Case study pages**: `ProjectRow` is self-expanding. If projects grow past 4, convert to dedicated `/projects/:id` routes and lift `react-router` back in.
- **Analytics / OG image**: neither included — wire to your existing setup.
