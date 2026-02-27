"use client";

import { motion } from "motion/react";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { PhoneMockup } from "./phone-mockup";
import { HandDrawnLine } from "./decorative-elements";
import { AnimatedSection } from "./animated-section";

function PatternChart() {
  const bars = [40, 65, 55, 80, 70, 90, 75, 85, 60, 95, 80, 70];

  return (
    <div>
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-semibold text-inertia-primary">Spending Patterns</span>
        <span className="text-xs text-inertia-secondary/60">Last 12 weeks</span>
      </div>

      {/* Chart bars */}
      <div className="flex items-end justify-between gap-1.5">
        {bars.map((height, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${height}px` }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="w-full rounded-t-sm"
            style={{
              backgroundColor: height > 75 ? "#40916C" : height > 55 ? "#D8F3DC" : "#F0F0F0",
            }}
          />
        ))}
      </div>

      {/* Insights */}
      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-2 rounded-lg bg-inertia-tint/30 p-2">
          <TrendingDown size={14} className="text-inertia-accent" />
          <span className="text-xs text-inertia-primary">Dining out ↓ 23% this month</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-inertia-tint/30 p-2">
          <TrendingUp size={14} className="text-inertia-accent" />
          <span className="text-xs text-inertia-primary">Savings rate ↑ 8%</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-gray-50 p-2">
          <Minus size={14} className="text-gray-400" />
          <span className="text-xs text-gray-500">Transport steady at $120/mo</span>
        </div>
      </div>
    </div>
  );
}

export function UnderstandPatterns() {
  return (
    <AnimatedSection className="bg-inertia-cream px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Left — text */}
        <div>
          <h2 className="font-serif text-3xl leading-tight font-bold text-inertia-primary md:text-4xl lg:text-5xl">
            Understand your <span className="text-inertia-accent">patterns</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-inertia-secondary/70">
            Inertia identifies recurring trends in your spending, saving, and planning — then
            surfaces insights that actually help you adjust.
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-inertia-secondary/70">
            No judgment. No rigid categories. Just clarity about where your money actually goes.
          </p>
          <HandDrawnLine className="mt-6 w-48 opacity-50" />
        </div>

        {/* Right — phone mockup */}
        <PhoneMockup>
          <PatternChart />
        </PhoneMockup>
      </div>
    </AnimatedSection>
  );
}
