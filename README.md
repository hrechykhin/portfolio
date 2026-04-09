# Personal Portfolio — Vladyslav Hrechykhin

Personal portfolio website. Built with React, TypeScript, and Vite. Deployed as a static site on AWS S3 + CloudFront.

**Live:** https://hrechykhin.com

## Tech Stack

- React 18 + TypeScript
- Vite
- CSS Modules
- React Router v6

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Output goes to the `dist/` folder.

```bash
npm run preview
```

## Updating Content

All editable content is in `src/data/`:

| File | What to update |
|------|---------------|
| `src/data/profile.ts` | Name, title, intro, email, GitHub, LinkedIn, CV URL |
| `src/data/projects.ts` | Project cards: title, summary, stack, highlights, links |
| `src/data/skills.ts` | Skill categories and items |

## Deployment — AWS S3 + CloudFront

```
CloudFront (CDN + HTTPS)
    ↓
S3 bucket (static files from dist/)
```

**Deploy:**

```bash
npm run build
aws s3 sync dist/ s3://your-bucket-name --delete
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

**Setup:**
1. Create a private S3 bucket
2. Create a CloudFront distribution with OAC pointing to the bucket
3. Set default root object to `index.html`
4. Add custom error response: 403 → `/index.html` (200) for SPA routing
5. For HTTPS with a custom domain: request ACM certificate in `us-east-1`, attach to CloudFront

**Estimated cost:** effectively free for a personal portfolio (CloudFront free tier covers 1 TB transfer / 10M requests per month).

## Project Structure

```
src/
  components/    # UI components, one folder per component
  data/          # Editable content: profile, projects, skills
  styles/        # Global CSS and design tokens
  App.tsx
  main.tsx
public/
  favicon.svg
```
