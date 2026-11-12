# Agent notes for Kept

## Stack
- Next.js (App Router) + React + TypeScript, Tailwind CSS v4 (theme tokens in `src/app/globals.css`), Vitest.
- npm only. No env vars, database, external APIs or auth. Keep it that way unless asked.

## Where things live
- `src/data/products.ts`: the entire catalog (categories, brands, products). Prices are `priceUsd` numbers.
- `src/lib/`: pure, tested logic (`catalog.ts` lookups/counts, `search.ts`, `format.ts` with `formatPrice`). Put new logic here, not in components.
- `src/components/`: shared UI (`ProductCard`, `ProductGrid`, `PageHeading`, header and search box).
- `src/app/`: routes: `/`, `/category/[slug]`, `/product/[slug]`, `/brands`, `/brand/[slug]`, `/search?q=`.
- `public/images/`: product photos (credits in `CREDITS.md`).

## Conventions
- Keep the existing visual style: warm neutral palette (`paper`, `card`, `ink`, `muted`, `line`, `accent` tokens), serif display headings (`font-serif`), sans body, generous spacing, rounded image cards. Reuse existing components before adding new ones.
- Server Components by default; add `"use client"` only for interactivity.
- Add or update Vitest tests (`*.test.ts` next to the code) for any new logic.
- Before finishing, run and make sure all pass: `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
