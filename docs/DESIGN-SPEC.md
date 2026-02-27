# Inertia 2 — Landing Page Design Specification

## Brand Identity

- **Product:** Inertia — "The financial tool that adapts to you"
- **Primary Color:** Dark green `#1B4332`
- **Secondary Green:** `#2D6A4F`
- **Accent Green:** `#40916C`
- **Light Green (tint):** `#D8F3DC`
- **Background:** Cream/off-white `#FEFDF8` or `#FAF9F6`
- **Text:** Dark green `#1B4332` on light backgrounds, white `#FFFFFF` on green backgrounds
- **Typography:** Serif font for headings (e.g., Playfair Display or DM Serif Display), clean sans-serif for body (e.g., Inter or DM Sans)
- **Handwritten/Script:** A cursive/handwritten font for accent text (e.g., "money decisions" in the Clarity section)
- **Decorative Elements:** Hand-drawn green curved lines/arrows, organic blob shapes

## Navigation

- **Position:** Sticky top, transparent on cream background
- **Left:** "Inertia" logo text in dark green serif
- **Right:** Three pill buttons:
  - "How Inertia works" — outlined pill, dark green border + text
  - "Learn about your habits" — outlined pill
  - "Join our waitlist →" — filled dark green pill, white text

## Sections (Top to Bottom)

### 1. Splash/Logo Section

- Giant "Inertia" text, centered, dark green serif font (very large, ~120-160px)
- Below: "The financial tool that adapts to you" in smaller text
- Background: cream/off-white
- This is the initial view before scroll. On scroll, logo shrinks into nav bar.

### 2. Hero Section

- Navigation bar visible at top
- **Left side:** Large headline text: "Your money doesn't need perfection, it needs direction." — dark green serif font
- **Right side:** Hero image of a woman with curly brown hair, holding a dog, wearing tan top. Warm, lifestyle photography feel.
- Green organic blob shape behind/around the image (soft, amoeba-like shape)
- Two small pill CTAs below headline

### 3. Green CTA Banner (Clarity Section)

- Full-width dark green background `#1B4332`
- "Inertia brings clarity to" in white serif
- "money decisions" in handwritten/cursive script (lighter green or white)
- Possibly small pill CTAs below
- Rounded corners on the banner (not full bleed — has margin from edges)

### 4. Daily Decisions Section

- "We help you make a few money decisions each day" — dark green serif heading
- Below: horizontal row of 5-6 small UI card mockups
- Each card shows a daily financial decision (icon, amount, category)
- Cards are small, light background with subtle shadows
- Hand-drawn decorative line connecting cards or flowing below

### 5. Adaptive Habits Section

- "that adapt to your habits" — dark green serif heading (continuation of previous sentence)
- Green pill badges: "needs" · "goals" · "plans" (and possibly more)
- Hand-drawn green connecting lines/arrows between pills
- Small decorative illustrations (triangular/mountain icon visible)

### 6. Understand Patterns Section

- "Understand your patterns" — dark green serif heading
- Body paragraph explaining pattern identification
- **Phone mockup** on right side showing chart/visualization UI
- Green decorative curved lines around the mockup
- Clean, minimal layout with generous whitespace

### 7. Highlights Section

- "Highlights what matters" — dark green serif heading
- Body paragraph about surfacing important financial info
- **Phone/device mockup** showing notification card UI
- Card overlays showing notifications/alerts

### 8. Follow Through Section

- "Helps you follow through" — dark green serif heading
- Body paragraph about accountability features
- **UI mockup** showing task/action card
- "clarity" green pill badge accent

### 9. Money Relationship Quiz (GREEN SECTION)

- **Full-width dark green background** `#1B4332`
- "What's your relationship with money?" — large white serif text, centered
- Short paragraph in white below
- **3-4 response/personality cards** below:
  - Each card has an illustration of a person
  - Label text below (personality type)
  - Cards on cream/light background with rounded corners
  - Hover/select state

### 10. Waitlist CTA Section

- "Join our waitlist" — dark green serif heading
- Subtitle text
- **Email input field** + green CTA button ("Join" or arrow)
- Possibly a testimonial or trust badge nearby

### 11. Steadiness Statement Section

- "Less reacting. More steadiness." — large dark green serif text, centered
- Minimal section, possibly with subtle background texture
- This is a "pause" section — impactful statement only

### 12. Why Inertia Works Section

- "Why Inertia works" — dark green serif heading
- **3-4 feature cards** in a grid/row:
  - Each card: icon, heading, body text
  - Light background, subtle border or shadow
  - Topics like: behavioral insights, daily micro-decisions, adaptive learning, etc.

### 13. Things We'd Ask You (FAQ Section)

- "Things we'd ask you" — dark green serif heading
- **Accordion/expandable items**
- Each item has a question that expands to show answer
- Dark green text, clean minimal style
- Subtle dividers between items

### 14. Priority Selection Section

- "What feels most important to you right now?" — heading
- **Interactive pill/tag buttons** in green
- Multiple selectable options (financial goals, priorities)
- Selected state: filled green; unselected: outlined

### 15. Different Approach Section

- "A different approach to money" — heading (visible at bottom-left in Figma)
- Content about Inertia's philosophy
- Possibly includes testimonials or comparison with traditional finance apps
- Green background variant

### 16. Pricing/Feature Cards

- Bottom section with 3-4 pricing or feature comparison cards
- Each card: header bar (green variants), feature list, CTA
- Clean table/card layout
- Visible "Pricing" tab/label at top of each card

### 17. Footer

- Dark green or cream background
- Inertia logo (circular "n" icon visible at bottom-right in Figma)
- Navigation links
- Social links
- Copyright text
- Minimal, clean design

## Animation & Interaction Notes

- **Scroll-triggered animations:** Sections fade in as they enter viewport
- **Hero scroll animation:** Large "Inertia" logo shrinks and moves into sticky navbar on scroll
- **Card hover effects:** Subtle lift/shadow on quiz cards, feature cards
- **Pill buttons:** Hover state with color transition
- **Accordion:** Smooth expand/collapse animation
- **Parallax:** Subtle parallax on decorative blob/lines (optional)

## Responsive Behavior

- Desktop: Full layout as described
- Tablet: Stack hero image below text, reduce card columns
- Mobile: Single column, hamburger nav, stacked cards, full-width sections

## Image/Asset Notes

- Hero image: Use a warm lifestyle photo (woman with dog or similar). Use Unsplash placeholder.
- Phone mockups: Create with CSS/div mockups (rounded rectangle with notch)
- Illustrations for quiz cards: Use simple SVG illustrations or placeholder images
- Decorative blobs: CSS with border-radius or SVG shapes
- Hand-drawn lines: SVG paths with organic/wobbly stroke

## Technical Notes

- This is a **landing page only** — no auth, no database, no API needed
- Use the Next.js App Router (already in template)
- shadcn/ui for base components (Button, Card, Badge, Accordion, Input)
- Framer Motion for animations (`motion` package)
- All sections as separate React components in `src/components/landing/`
- Main page: `src/app/page.tsx` imports and renders all sections
- Tailwind CSS for all styling
- Google Fonts for typography (Playfair Display + Inter or DM Serif Display + DM Sans)
