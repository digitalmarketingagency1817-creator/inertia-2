# QA Report — Inertia 2 Landing Page

**Date:** 2026-02-27
**Branch:** `feat/landing-page` → merged to `main`
**Reviewer:** @argus

## Build Status

✅ `SKIP_ENV_VALIDATION=1 npm run build` — passes clean (0 errors, 0 warnings)

## Design Fidelity

✅ **Colors:** All 5 brand colors correctly defined — `#1B4332`, `#2D6A4F`, `#40916C`, `#D8F3DC`, `#FEFDF8`
✅ **Typography:** Playfair Display (serif headings) + Inter (sans body) via `next/font/google`
✅ **Sections:** All 17 sections from design spec implemented in correct order
✅ **Layout:** Responsive with mobile hamburger nav, proper breakpoints (md/lg)
✅ **Dark sections:** ClarityBanner (rounded, not full-bleed), MoneyQuiz, DifferentApproach — correct
✅ **Sticky nav:** Appears on scroll after 300px via framer-motion spring animation
✅ **Decorative elements:** Green blob, hand-drawn SVG lines/arrows, wavy connector — all present

## Code Quality

✅ TypeScript strict — no `any`, proper types throughout
✅ All 18 components + 3 utilities properly structured in `src/components/landing/`
✅ shadcn/ui components used: Card, Button, Badge, Accordion, Input, Separator
✅ Lucide React icons throughout
✅ Framer Motion (`motion` package) for scroll-triggered animations
✅ Semantic HTML: `<nav>`, `<section>`, `<footer>`, proper heading hierarchy (h1→h2→h3)
✅ next/image for hero image with Unsplash remote pattern configured
✅ No unused imports (after fixes)
✅ Proper "use client" directives where needed

## Issues Found & Fixed

### 🔴 Fix 1: Missing `#pricing` anchor (broken nav link)

**File:** `pricing-cards.tsx`
**Issue:** Footer links to `#pricing` but PricingCards section had no `id` attribute
**Fix:** Added `id="pricing"` to AnimatedSection
**Commit:** `3dc9efc`

### 🟡 Fix 2: Decorative elements missing `aria-hidden`

**Files:** `decorative-elements.tsx`, `adaptive-habits.tsx`
**Issue:** Decorative SVGs (blob, lines, arrows, triangle) not hidden from screen readers
**Fix:** Added `aria-hidden="true"` to all 5 decorative elements
**Commit:** `bd58d4e`

### 🟡 Fix 3: Missing `<main>` landmark

**File:** `landing-page.tsx`
**Issue:** Page content wrapped in `<div>` instead of `<main>` — poor screen reader navigation
**Fix:** Wrapped content sections in `<main>` element (nav and footer remain outside)
**Commit:** `bb86e75`

### 🟡 Fix 4: Quiz cards lack keyboard accessibility

**File:** `money-quiz.tsx`
**Issue:** Card elements with `onClick` but no `role="button"`, `tabIndex`, or keyboard handlers
**Fix:** Added `role="button"`, `tabIndex={0}`, and Enter/Space key handling
**Commit:** `3843f5e`

### 🔵 Fix 5: Dead code in PricingCards

**File:** `pricing-cards.tsx`
**Issue:** Tab switcher (Features/Pricing) existed with useState but content never changed based on tab
**Fix:** Removed unused `useState` import, `TabId` type, `tab` state, and non-functional tab buttons
**Commit:** `d80bdc4`

### 🔵 Fix 6: Unused `color` property in MoneyQuiz

**File:** `money-quiz.tsx`
**Issue:** PERSONALITIES array had `color` field never used in render
**Fix:** Removed unused property (committed together with Fix 4)

## Deployment

✅ Merged `feat/landing-page` → `main` (fast-forward)
✅ Pushed to GitHub: https://github.com/ivanmeda/inertia-2
⚠️ **Vercel deploy blocked:** `$VERCEL_TOKEN` not available in environment. Needs manual deploy or token configuration.

## Notes

- Landing page is a static marketing page — no auth/API/DB needed for it
- BetterAuth warnings during build are from the template's auth setup (unrelated to landing page)
- The "money decisions" text in ClarityBanner uses italic serif instead of a handwritten font — reasonable approximation of the design spec's cursive suggestion
