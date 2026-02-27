"use client";

import { Splash } from "./splash";
import { Navigation } from "./navigation";
import { Hero } from "./hero";
import { AdaptiveHabits } from "./adaptive-habits";
import { DailyDecisions } from "./daily-decisions";
import { ClarityBanner } from "./clarity-banner";
import { UnderstandPatterns } from "./understand-patterns";
import { Highlights } from "./highlights";
import { FollowThrough } from "./follow-through";
import { MoneyQuiz } from "./money-quiz";
import { Waitlist } from "./waitlist";
import { WhyItWorks } from "./why-it-works";
import { FAQ } from "./faq";
import { PrioritySelection } from "./priority-selection";
import { DifferentApproach } from "./different-approach";
import { Footer } from "./footer";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] font-[family-name:var(--font-dm-sans)]">
      <Navigation />
      <main>
        {/* Splash — full viewport intro with wordmark */}
        <Splash />
        {/* Hero — lifestyle photo + main headline */}
        <Hero />
        {/* Habits — "that adapt to your habits" with pills */}
        <AdaptiveHabits />
        {/* Daily Decisions — decision cards */}
        <DailyDecisions />
        {/* Clarity Banner — "When everything feels urgent..." + green CTA */}
        <ClarityBanner />
        {/* Feature 01 — Understands your patterns */}
        <UnderstandPatterns />
        {/* Feature 02 — Highlights what matters */}
        <Highlights />
        {/* Feature 03 — Helps you follow through */}
        <FollowThrough />
        {/* Money Quiz — multi-step interactive (dark green) */}
        <MoneyQuiz />
        {/* Waitlist — form with FIRST NAME, LAST NAME, EMAIL */}
        <Waitlist />
        {/* Why Inertia Works — 3 feature cards */}
        <WhyItWorks />
        {/* FAQ — "Things we'd ask too" */}
        <FAQ />
        {/* Priority Selection — "This matters zone" */}
        <PrioritySelection />
        {/* Comparison — Inertia vs Other Apps table */}
        <DifferentApproach />
      </main>
      <Footer />
    </div>
  );
}
