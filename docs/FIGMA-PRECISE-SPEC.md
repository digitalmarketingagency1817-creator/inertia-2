# Inertia 2 — Precise Design Spec from Figma MCP Data

## Color Palette (extracted from Figma fills)

| Token         | Hex                         | Usage                        |
| ------------- | --------------------------- | ---------------------------- |
| background    | `#FAFAF7`                   | Page background (cream)      |
| primary-dark  | `#153828`                   | Dark green (headings, nav)   |
| primary       | `#0F3D2E`                   | Primary green (buttons, CTA) |
| primary-mid   | `#123E2F`                   | Mid green                    |
| accent        | `#2FA47A`                   | Accent green (highlights)    |
| accent-light  | `#247556`                   | Lighter accent               |
| accent-soft   | `#3E846F`                   | Soft green                   |
| mint          | `#63B59D`                   | Mint green                   |
| tint          | `#C4DED0`                   | Light green tint             |
| tint-light    | `#E2F7F1`                   | Very light green             |
| tint-pale     | `#D1E2DD`                   | Pale green                   |
| surface       | `#E0EAE5`                   | Surface green                |
| surface-light | `#F5F5F5`                   | Light surface                |
| white         | `#FFFFFF`                   | White                        |
| black         | `#000000`                   | Black (rare)                 |
| dark-text     | `#111614`                   | Dark text alternative        |
| muted         | `#8C938E`                   | Muted/secondary text         |
| warm          | `#EFAD87`                   | Warm peach (accent)          |
| yellow        | `#FEDC69`                   | Yellow accent                |
| dark-bg       | `#2C2C2C`                   | Dark section background      |
| overlay       | `rgba(15, 61, 46, 0.7)`     | Dark green overlay           |
| glass         | `rgba(250, 250, 247, 0.8)`  | Glass/frosted background     |
| subtle-glass  | `rgba(143, 187, 165, 0.35)` | Subtle green glass           |

## Typography (extracted from Figma styles)

### Font Families:

- **Playfair Display** — Primary serif (large headings, hero text)
- **Frank Ruhl Libre** — Secondary serif (section headings)
- **DM Sans** — Primary sans-serif (body text, UI)
- **Inter** — Secondary sans-serif (small text, labels)
- **Fragment Mono** / **DM Mono** — Monospace (badges, labels, technical text)
- **IBM Plex Sans** — Alternative sans (specific sections)
- **Diplomata** — Display font (special decorative use)

### Font Sizes:

- Hero/Splash: **80px** (Inertia wordmark)
- Large heading: **60-70px** (section titles)
- Medium heading: **40-56px**
- Sub-heading: **28-32px**
- Body large: **20-24px**
- Body: **16-18px**
- Small/label: **12-15px**
- Tiny: **8-10px**

### Font Weights:

- Regular: **400**
- Medium: **500**
- Semi-bold: **600**

### Letter Spacing:

- Headings: **-1% to -1.5%** (tight)
- Labels/caps: **5%** (expanded)

## Page Structure (Frame by Frame)

### Frame: Pag1A (1440px wide) — Splash Screen

- **Background:** `#FAFAF7`
- **Desktop-89:** Full viewport frame
- **Interia_Wordmark_Large:** Giant "Inertia" wordmark (image fill)
- **TopNavigation_Buttons:** Row of 3 pill buttons
  - "How inertia works" — outlined, border `#153828`, text `#153828`, radius 24px
  - "Learn about your habits" — outlined, same style
  - "Join our waitlist" — filled `#153828`, white text, with arrow icon, radius 24px
- **Hero_Screen1:** "The financial tool that adapts to you" — large serif text

### Frame: Page1B — Hero Section

- **image 10:** Hero lifestyle photo (woman with dog)
- **Hero text:** "Your money doesn't need perfection, it needs direction."
- **Chevron down:** Scroll indicator

### Frame: Content Section — Habits & Decisions

- **"that adapt to your habits"** — heading
- **Pills row:** "needs" + "goals" (first row), "plans" + "life" (second row) — with "Plus" icons between
- **"(Not the version of you that budgets perfectly)"** — subtitle
- **"We help you make a few money decisions each day"** — heading
- **Decision cards (4 cards):**
  - LOANS — $900.00 AMOUNT DUE
  - RENT — $1,000.00 AMOUNT DUE
  - COFFEE — $6.00 AMOUNT DUE
  - CAR PAYMENT — $450.00 AMOUNT DUE

### Frame: Clarity Section

- "When everything feels urgent, nothing gets resolved"
- **Green banner:** "Inertia brings clarity to money decisions."
- CTA: "Find my direction"

### Frame: Three Features (01, 02, 03)

- **01:** "Understands your patterns"
- **02:** "Highlights what matters"
- **03:** "Helps you follow through"
- Each with descriptive body text and phone/UI mockups

### Frame: Money Quiz Section (Dark Green)

- "Let's be real..."
- **"What's your relationship with money?"** — large heading
- Descriptive paragraph
- "Takes 5 mins · No math · Surprisingly fun"
- **CTA:** "Let's do this"
- **Badges:** "Personalized Insights" · "100% private"
- **Sub-nav:** "How inertia works" · "Learn about your habits" · "Join our waitlist"

### Frame: Waitlist CTA

- **"Join the waitlist"** — heading
- **Form fields:** FIRST NAME, LAST NAME, EMAIL
- **Button:** "Submit"
- "...and let's keep in touch"

### Frame: Why Inertia Works

- **"Why Inertia works"** — heading
- 3 feature cards:
  - **01:** "It works with your habits"
  - **02:** "It lowers the mental load"
  - **03:** "It adapts as life changes"
- **CTA:** "Ready to take control of your finances?"
- **Button:** "Join our waitlist"

### Frame: FAQ

- **"Things we'd ask too"** — heading
- 7 accordion items (placeholder Lorem Ipsum text in design)

### Frame: Priority Selection (Drag & Drop)

- **"Select your top three priorities"** — heading
- **"This matters zone"** — drop zone with "0/3 Selected"
- "CLICK & DRAG" instruction
- **"Drag items here"** — placeholder
- Draggable items: "Paying off debt", "Saving for emergencies" + more

### Frame: Money Quiz Flow (Multi-step, 6 screens)

- **Step 1/6:** (Initial personality question)
- **Step 2/6:** "How do you usually feel about your finances?"
  - Options: "Overwhelmed — there's too much to figure out", "Stressed but managing", "Stable but stuck", "Confident but curious"
- **Step 3/6:** "In a money situation that feels unclear, I usually..."
  - Options: "Avoid it and hope it works out", "Stay neutral and deal with it later", "Feel motivated to take action", "Feel confident making decisions"
- **Step 4/6 — Motivation:** "What do you want money to give you more of right now?"
  - Options: Stability, Freedom, Peace of mind, Balance, Progress
- **Step 5/6 — Readiness:** "Right now, I'm looking for..."
  - Options: "One clear next step", "A simple plan", "Reassurance I'm not behind", "Something I can actually stick with", "Help figuring it out"
- **Step 6/6 — Extra Extra:** "What feels most true?"
  - Options: "I like structure", "I like flexibility", "I like understanding everything", "I like moving fast", "I like playing it safe"
- **Result:** "The Overwhelmed Planner"
  - "Want us to save this and keep guiding you?"
  - "We'll send personalized tips based on your results."
  - **CTA:** "Save this for me"

### Frame: Quiz Results (Roadmap)

- **"YOUR MONEY PERSONALITY"** — header
- **NOW:** "Focus on first: Getting clarity around cash flow."
- **THIS WEEK:** "One small step: Set aside $25 - even once counts"
- **LATER:** "Can wait: Long-term investing — this doesn't need your attention yet."

### Frame: Different Approach (Comparison)

- **"A different approach to money"** — heading
- **Two-column comparison table:**
  - **Inertia** vs **Other Apps**
  - What they show: "What matters right now" vs "Everything at once"
  - Starting point: "Your priorities & behavior" vs "Accounts & Categories"
  - Experience: "Decide, act, move on" vs "Track, review, repeat"
  - Assumption: "You're busy - and human" vs "You'll stay engaged"
  - Goal support: "Immediate steps → long term progress" vs "Long-term planning"

## Image Assets (from Figma imageRefs)

Multiple images referenced — hero photo, quiz illustrations, etc. These need to be downloaded separately using `download_figma_images`.

## Responsive

- Desktop: 1440px frames
- Need to adapt for tablet (768px) and mobile (375px)
