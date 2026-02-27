# Implementation V2 Notes — Figma-Precise Landing Page

## Date: 2026-02-27

## Branch: `feat/figma-precise-landing`

---

## What Changed

### Colors (Old → New)

- Background: `#FEFDF8` → `#FAFAF7`
- Primary: `#1B4332` → `#0F3D2E`
- Primary dark: new `#153828` (headings, nav)
- Accent: `#40916C` → `#2FA47A`
- Mint: new `#63B59D`
- Tint: `#D8F3DC` → `#C4DED0`
- Tint light: new `#E2F7F1`
- Muted: new `#8C938E`
- Warm peach: new `#EFAD87`
- Yellow: new `#FEDC69`

### Fonts (Old → New)

- Added **Frank Ruhl Libre** for section headings (was DM Serif Display)
- Added **DM Sans** as primary body text (was Inter)
- Added **DM Mono** for badges/labels/technical text
- **Playfair Display** remains for hero/large headings
- **Inter** demoted to secondary small text
- Letter-spacing: -1% to -1.5% for headings, 5% for caps labels

### Components Rewritten

1. **Splash** — wordmark image, nav pills with 24px radius, exact tagline
2. **Navigation** — pill buttons matching Figma (outlined + filled with arrow)
3. **Hero** — Playfair heading with direction accent, hero photo, chevron
4. **AdaptiveHabits** — "that adapt to your habits" + pills with Plus icons (needs/goals/plans/life)
5. **DailyDecisions** — 4 decision cards (LOANS $900, RENT $1000, COFFEE $6, CAR $450)
6. **ClarityBanner** — "When everything feels urgent..." + green banner + "Find my direction" CTA
7. **UnderstandPatterns** — Feature 01 with phone mockup chart
8. **Highlights** — Feature 02 with notification cards
9. **FollowThrough** — Feature 03 with action checklist
10. **MoneyQuiz** — Complete 6-step interactive flow:
    - Intro: "Let's be real..." + "What's your relationship with money?"
    - Steps 1-6 with exact Figma questions/options
    - Result: "The Overwhelmed Planner" + NOW/THIS WEEK/LATER roadmap
    - Badges: "Personalized Insights" + "100% private"
11. **Waitlist** — 3-field form (FIRST NAME, LAST NAME, EMAIL) + Submit
12. **WhyItWorks** — 3 cards (habits, mental load, adapts)
13. **FAQ** — "Things we'd ask too" with 7 accordion items
14. **PrioritySelection** — Click-to-select with "This matters zone" (0/3 counter)
15. **DifferentApproach** — Comparison table (Inertia vs Other Apps, 5 rows)
16. **Footer** — Wordmark image, DM Sans typography

### Components Removed

- **Steadiness** — not in Figma spec
- **PricingCards** — not in Figma spec
- **DecorativeElements** (GreenBlob, WavyConnector, etc.) — replaced with cleaner styling
- **PhoneMockup** — inlined into UnderstandPatterns

### Architecture

- All colors use direct hex values from Figma (no intermediate token indirection)
- Font references use `font-[family-name:var(--font-X)]` pattern for Tailwind v4
- Animations: motion/react for scroll-triggered fade-ins, quiz transitions
- Button radius: 24px throughout (from Figma)
- Responsive: works across desktop (1440px), tablet, mobile

### Build

- `SKIP_ENV_VALIDATION=1 npm run build` ✅ passes
- No TypeScript errors
- No ESLint errors
- Lint-staged + prettier pass

### Git

- 2 commits on `feat/figma-precise-landing`
- NOT merged to main
