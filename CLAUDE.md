# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn          # Install dependencies
yarn dev      # Start development server at http://localhost:3000
yarn build    # Production build
yarn lint     # Run Next.js ESLint
yarn sanity:typegen   # Generate TypeScript types from Sanity schemas
yarn sanity:schema    # Extract Sanity schema
```

No test suite is configured.

## Architecture

This is a **Next.js 16 + Sanity CMS portfolio site** deployed on Netlify.

### Data Flow

All content is stored in Sanity CMS and fetched at build time with ISR (revalidate every 300 seconds). The single-page app fetches all data in one batched GROQ query (`homePageQuery`) from `src/sanity/lib/queries.ts`, called via `getHomePageData()` in `src/sanity/lib/data.ts`, which wraps `sanityFetch` from `src/sanity/lib/live.ts`.

Cache invalidation is handled via a webhook at `/api/revalidate` that triggers tag-based revalidation.

### Sanity Schema Types

Defined in `src/sanity/schemaTypes/`: `siteSettings`, `experience`, `project`, `skill`, `openSourceContribution`, `achievement`, `content`. The embedded Sanity Studio is mounted at `/studio` (route: `src/app/studio/[[...tool]]/page.tsx`).

### Page Structure

Single page (`src/app/page.tsx`) with a fixed sidebar layout on desktop and mobile nav:
- **Sidebar** (desktop) / **MobileNav** (mobile): navigation from `siteSettings`
- **Hero → Projects → Experience → Skills → Contact → Footer**: sections populated from Sanity data

### API Routes

- `POST /api/send` — Contact form emails via Resend (sends notification to owner + confirmation to sender)
- `POST /api/revalidate` — Webhook for Sanity on-demand ISR revalidation

### Environment Variables

Required in `.env.local`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION=   # optional, defaults to 2026-02-07
SANITY_API_READ_TOKEN=            # for server-side fetching
RESEND_API_KEY=                   # for contact form emails
```

### Styling

Tailwind CSS with `tailwind-merge` + `clsx` (via `src/lib/utils.ts`). Prettier with `prettier-plugin-tailwindcss` for class sorting. `TECH_THRESHOLD = 2` in `src/lib/constants.ts` controls minimum years to display a technology badge.
