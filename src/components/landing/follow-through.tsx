"use client";

import { motion } from "motion/react";
import { CheckCircle2, Circle, ArrowRight } from "lucide-react";
import { AnimatedSection } from "./animated-section";

const ACTIONS = [
  { text: "Move $150 to savings", done: true },
  { text: "Review dining expenses from this week", done: true },
  { text: "Decide on gym membership renewal ($45/mo)", done: false },
  { text: "Set aside $80 for upcoming insurance", done: false },
];

export function FollowThrough() {
  return (
    <AnimatedSection className="bg-[#FAFAF7] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Left — text */}
        <div>
          <span className="font-[family-name:var(--font-dm-mono)] text-sm font-medium tracking-[0.05em] text-[#2FA47A] uppercase">
            03
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-frank)] text-3xl leading-tight font-medium tracking-[-0.01em] text-[#153828] md:text-4xl lg:text-[48px]">
            Helps you follow through
          </h2>
          <p className="mt-6 max-w-md font-[family-name:var(--font-dm-sans)] text-base leading-relaxed text-[#8C938E]">
            Good intentions aren&apos;t enough. Inertia turns your financial goals into small,
            doable actions — and checks in to make sure they actually happen.
          </p>
        </div>

        {/* Right — action card mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-[#C4DED0]/40 bg-white shadow-lg"
        >
          <div className="border-b border-[#C4DED0]/30 bg-[#E2F7F1]/30 px-5 py-3">
            <div className="flex items-center justify-between">
              <span className="font-[family-name:var(--font-dm-sans)] text-sm font-semibold text-[#153828]">
                Today&apos;s actions
              </span>
              <span className="font-[family-name:var(--font-inter)] text-xs text-[#8C938E]">
                2 of 4 done
              </span>
            </div>
            {/* Progress bar */}
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#C4DED0]/40">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "50%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-full rounded-full bg-[#2FA47A]"
              />
            </div>
          </div>

          <div className="divide-y divide-[#C4DED0]/20 px-5">
            {ACTIONS.map((action, i) => (
              <motion.div
                key={action.text}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="flex items-center gap-3 py-3.5"
              >
                {action.done ? (
                  <CheckCircle2 size={18} className="shrink-0 text-[#2FA47A]" />
                ) : (
                  <Circle size={18} className="shrink-0 text-[#8C938E]/30" />
                )}
                <span
                  className={`flex-1 font-[family-name:var(--font-dm-sans)] text-sm ${
                    action.done ? "text-[#8C938E] line-through" : "font-medium text-[#153828]"
                  }`}
                >
                  {action.text}
                </span>
                {!action.done && <ArrowRight size={14} className="shrink-0 text-[#8C938E]/30" />}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
