# Inertia 2 — Landing Page Implementation Notes

## Branch
`feat/landing-page` — 3 atomic commits, NOT merged to main.

## Architecture

### Fonts
- **Playfair Display** (serif) → `--font-playfair` CSS variable, used via `font-serif` Tailwind class
- **Inter** (sans) → `--font-inter` CSS variable, used via `font-sans` Tailwind class
- Both loaded via `next/font/google` in root layout for optimal performance

### Color System
Added Inertia brand colors to Tailwind via `@theme inline` in `globals.css`:
- `inertia-primary` → `#1B4332` (dark green)
- `inertia-secondary` → `#2D6A4F`
- `inertia-accent` → `#40916C`
- `inertia-tint` → `#D8F3DC` (light green)
- `inertia-cream` → `#FEFDF8` (background)
- `inertia-dark` → `#0B2118`

### Component Structure
All 18 landing sections live in `src/components/landing/`:

| # | Component | File | Purpose |
|---|-----------|------|---------|
| 1 | `Splash` | `splash.tsx` | Giant "Inertia" logo with scroll-driven shrink animation |
| 2 | `Navigation` | `navigation.tsx` | Sticky nav that appears after scrolling past splash |
| 3 | `Hero` | `hero.tsx` | Two-column: headline + hero image with green blob |
| 4 | `ClarityBanner` | `clarity-banner.tsx` | Full-width dark green CTA banner |
| 5 | `DailyDecisions` | `daily-decisions.tsx` | Card grid of daily financial decisions |
| 6 | `AdaptiveHabits` | `adaptive-habits.tsx` | Interactive pill badges with decorative elements |
| 7 | `UnderstandPatterns` | `understand-patterns.tsx` | Text + phone mockup with chart |
| 8 | `Highlights` | `highlights.tsx` | Notification card mockups |
| 9 | `FollowThrough` | `follow-through.tsx` | Action checklist UI mockup |
| 10 | `MoneyQuiz` | `money-quiz.tsx` | Interactive personality quiz on green background |
| 11 | `Waitlist` | `waitlist.tsx` | Email input CTA with confirmation state |
| 12 | `Steadiness` | `steadiness.tsx` | Impactful quote section |
| 13 | `WhyItWorks` | `why-it-works.tsx` | 4 feature cards |
| 14 | `FAQ` | `faq.tsx` | Accordion Q&A section |
| 15 | `PrioritySelection` | `priority-selection.tsx` | Interactive selectable priority pills |
| 16 | `DifferentApproach` | `different-approach.tsx` | Side-by-side comparison on green bg |
| 17 | `PricingCards` | `pricing-cards.tsx` | 3 pricing tiers with tab switcher |
| 18 | `Footer` | `footer.tsx` | Branding + nav links + social |

### Shared Components
- `AnimatedSection` — reusable scroll-triggered fade-in wrapper
- `PhoneMockup` — CSS phone frame with notch, home indicator
- `GreenBlob` / `HandDrawnLine` / `HandDrawnArrow` / `WavyConnector` — decorative SVG elements with draw animations

### Assembly
- `LandingPage` (`landing-page.tsx`) — client component that composes all sections
- Marketing layout stripped to passthrough (landing page handles its own layout)
- Marketing page (`page.tsx`) imports `LandingPage` as a client component

## Animations
- **Splash:** `useScroll` + `useTransform` for scroll-driven opacity/scale/y
- **Navigation:** Spring animation, appears after 300px scroll
- **All sections:** `whileInView` fade-in via `AnimatedSection` wrapper
- **Cards:** Staggered entrance with delay per item
- **SVG paths:** `pathLength` animation for hand-drawn line effect
- **Chart bars:** Height animation on viewport entry
- **Interactive elements:** `whileTap` scale on priority pills

## Responsive Design
- Mobile-first with `md:` and `lg:` breakpoints
- Grid columns adjust: `grid-cols-1` → `sm:grid-cols-2` → `lg:grid-cols-4`
- Typography scales via `clamp()` for splash text
- Mobile hamburger menu with AnimatePresence
- Full-width sections on mobile, constrained `max-w-7xl` on desktop

## Dependencies Added
- `motion` — Framer Motion for all animations
- `shadcn/ui accordion` — FAQ section

## Config Changes
- Root layout: Playfair Display + Inter via next/font
- `globals.css`: Added Inertia color variables + font vars
- `next.config.ts`: Added `images.unsplash.com` to remotePatterns
- `constants.ts`: Updated APP_NAME to "Inertia"

## Build
`SKIP_ENV_VALIDATION=1 npm run build` passes cleanly with 0 errors.
