"use client";

import { motion } from "motion/react";
import { AnimatedSection } from "./animated-section";

export function UnderstandPatterns() {
  return (
    <AnimatedSection className="bg-[#FAFAF7] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Left — text */}
        <div>
          <span className="font-[family-name:var(--font-dm-mono)] text-sm font-medium tracking-[0.05em] text-[#2FA47A] uppercase">
            01
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-frank)] text-3xl leading-tight font-medium tracking-[-0.01em] text-[#153828] md:text-4xl lg:text-[48px]">
            Understands your patterns
          </h2>
          <p className="mt-6 max-w-md font-[family-name:var(--font-dm-sans)] text-base leading-relaxed text-[#8C938E]">
            Inertia identifies recurring trends in your spending, saving, and planning — then
            surfaces insights that actually help you adjust.
          </p>
          <p className="mt-4 max-w-md font-[family-name:var(--font-dm-sans)] text-base leading-relaxed text-[#8C938E]">
            No judgment. No rigid categories. Just clarity about where your money actually goes.
          </p>
        </div>

        {/* Right — phone mockup placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center"
        >
          <div className="relative mx-auto w-[280px] overflow-hidden rounded-[2.5rem] border-[6px] border-[#153828]/90 bg-white shadow-2xl">
            {/* Notch */}
            <div className="flex justify-center bg-white pt-2 pb-1">
              <div className="h-[22px] w-[100px] rounded-full bg-[#153828]/90" />
            </div>
            {/* Screen content — pattern chart */}
            <div className="min-h-[400px] bg-white px-4 pb-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-[family-name:var(--font-dm-sans)] text-xs font-semibold text-[#153828]">
                  Spending Patterns
                </span>
                <span className="font-[family-name:var(--font-inter)] text-xs text-[#8C938E]">
                  Last 12 weeks
                </span>
              </div>
              <div className="flex items-end justify-between gap-1.5">
                {[40, 65, 55, 80, 70, 90, 75, 85, 60, 95, 80, 70].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}px` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.05 }}
                    className="w-full rounded-t-sm"
                    style={{
                      backgroundColor:
                        height > 75 ? "#2FA47A" : height > 55 ? "#C4DED0" : "#E0EAE5",
                    }}
                  />
                ))}
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 rounded-lg bg-[#E2F7F1] p-2">
                  <span className="font-[family-name:var(--font-dm-sans)] text-xs text-[#153828]">
                    Dining out ↓ 23% this month
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-[#E2F7F1] p-2">
                  <span className="font-[family-name:var(--font-dm-sans)] text-xs text-[#153828]">
                    Savings rate ↑ 8%
                  </span>
                </div>
              </div>
            </div>
            {/* Home indicator */}
            <div className="flex justify-center pb-3">
              <div className="h-1 w-28 rounded-full bg-[#153828]/20" />
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
