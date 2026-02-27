"use client";

import { Splash } from "./splash";
import { Navigation } from "./navigation";
import { Hero } from "./hero";
import { ClarityBanner } from "./clarity-banner";
import { DailyDecisions } from "./daily-decisions";
import { AdaptiveHabits } from "./adaptive-habits";
import { UnderstandPatterns } from "./understand-patterns";
import { Highlights } from "./highlights";
import { FollowThrough } from "./follow-through";
import { MoneyQuiz } from "./money-quiz";
import { Waitlist } from "./waitlist";
import { Steadiness } from "./steadiness";
import { WhyItWorks } from "./why-it-works";
import { FAQ } from "./faq";
import { PrioritySelection } from "./priority-selection";
import { DifferentApproach } from "./different-approach";
import { PricingCards } from "./pricing-cards";
import { Footer } from "./footer";

export function LandingPage() {
  return (
    <div className="bg-inertia-cream min-h-screen font-sans">
      <Navigation />
      <main>
        <Splash />
        <Hero />
        <ClarityBanner />
        <DailyDecisions />
        <AdaptiveHabits />
        <UnderstandPatterns />
        <Highlights />
        <FollowThrough />
        <MoneyQuiz />
        <Waitlist />
        <Steadiness />
        <WhyItWorks />
        <FAQ />
        <PrioritySelection />
        <DifferentApproach />
        <PricingCards />
      </main>
      <Footer />
    </div>
  );
}
