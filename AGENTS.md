# AGENTS.md — context for AI coding agents

This file is the **single place** for project facts, conventions, and guardrails. Read it before making non-trivial changes.

---

## Next.js in this repo (read first)

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

## Project snapshot

| Item | Detail |
|------|--------|
| **Name** | `waniasol` — marketing / company site for WaniaSol |
| **Stack** | Next.js **16** (App Router), React **19**, TypeScript, Tailwind CSS **4** |
| **Theming** | `next-themes` (`ThemeProvider`), dark mode via `class="dark"` on `<html>` (see `globals.css` `@custom-variant dark`) |
| **Motion** | Framer Motion in places; reduced-motion handling via `src/hooks/use-reduced-motion-hydration-safe.ts` (prefer `matchMedia`, not fragile SSR hooks) |

---

## Commands

```bash
npm run dev    # local dev
npm run build  # production build + typecheck — run before considering work done
npm run lint   # ESLint
```

---

## Repository layout (high level)

```
src/app/           # App Router: pages, layouts, metadata, API routes
src/components/    # UI: layout (header, footer, brand-logo), home/*, ui/*, animations/*
src/lib/           # site-config, content data (blog, case studies, etc.), utils
public/            # Static assets (e.g. logos: waniasol-logo-light.png, waniasol-logo-dark.png)
```

- **Site copy & nav**: `src/lib/site-config.ts` (`site`, `navLinks`, footer columns).
- **Forms**: contact API under `src/app/api/contact/`; validation/helpers in `src/lib/contact.ts` and related files.

---

## Conventions agents should follow

1. **Scope** — Change only what the task needs; avoid drive-by refactors and unrelated files.
2. **Imports** — Keep imports at the top of files (no inline imports) unless the codebase already uses a pattern elsewhere in that file.
3. **Styling** — Tailwind v4 + `globals.css`; use existing tokens (`bg-background`, `text-foreground`, `border-border`, etc.) and the project’s `dark:` rules.
4. **Images** — Prefer `next/image` with correct intrinsic `width` / `height`. Logo assets: `-light` = mark for **light UI** (dark ink); `-dark` = mark for **dark UI** (light ink). See `src/components/layout/brand-logo.tsx`.
5. **Accessibility** — Preserve skip links, labels on icon-only controls, and semantic landmarks already used in layout components.
6. **Verification** — After substantive edits, run `npm run build` and fix any TypeScript or ESLint issues you introduce.

---

## Related docs

- **`README.md`** — default Next.js bootstrap notes; use this file (`AGENTS.md`) for project-specific agent context.
- **`CLAUDE.md`** — points here for agent rules.

---

## When unsure

- Prefer reading the **Next.js docs shipped in `node_modules/next/dist/docs/`** for this version over generic web results.
- Match patterns in **existing** components in the same folder before inventing new abstractions.
