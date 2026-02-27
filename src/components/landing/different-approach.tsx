"use client";

import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import { AnimatedSection } from "./animated-section";

const COMPARISONS = [
  {
    category: "What they show",
    inertia: "What matters right now",
    other: "Everything at once",
  },
  {
    category: "Starting point",
    inertia: "Your priorities & behavior",
    other: "Accounts & Categories",
  },
  {
    category: "Experience",
    inertia: "Decide, act, move on",
    other: "Track, review, repeat",
  },
  {
    category: "Assumption",
    inertia: "You're busy — and human",
    other: "You'll stay engaged",
  },
  {
    category: "Goal support",
    inertia: "Immediate steps → long term progress",
    other: "Long-term planning",
  },
];

export function DifferentApproach() {
  return (
    <AnimatedSection className="bg-[#FAFAF7] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-[family-name:var(--font-frank)] text-3xl leading-tight font-medium tracking-[-0.01em] text-[#153828] md:text-4xl lg:text-[56px]">
          A different approach to money
        </h2>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 overflow-hidden rounded-2xl border border-[#C4DED0]/30 bg-white"
        >
          {/* Table header */}
          <div className="grid grid-cols-3 border-b border-[#C4DED0]/30 bg-[#E2F7F1]/20">
            <div className="px-6 py-4" />
            <div className="border-l border-[#C4DED0]/30 px-6 py-4">
              <span className="font-[family-name:var(--font-dm-mono)] text-xs font-medium tracking-[0.05em] text-[#2FA47A] uppercase">
                Inertia
              </span>
            </div>
            <div className="border-l border-[#C4DED0]/30 px-6 py-4">
              <span className="font-[family-name:var(--font-dm-mono)] text-xs font-medium tracking-[0.05em] text-[#8C938E] uppercase">
                Other Apps
              </span>
            </div>
          </div>

          {/* Table rows */}
          {COMPARISONS.map((row, i) => (
            <div
              key={row.category}
              className={`grid grid-cols-3 ${i < COMPARISONS.length - 1 ? "border-b border-[#C4DED0]/20" : ""}`}
            >
              <div className="px-6 py-4">
                <span className="font-[family-name:var(--font-dm-sans)] text-sm font-medium text-[#153828]">
                  {row.category}
                </span>
              </div>
              <div className="flex items-start gap-2 border-l border-[#C4DED0]/20 px-6 py-4">
                <Check size={14} className="mt-0.5 shrink-0 text-[#2FA47A]" />
                <span className="font-[family-name:var(--font-dm-sans)] text-sm text-[#153828]">
                  {row.inertia}
                </span>
              </div>
              <div className="flex items-start gap-2 border-l border-[#C4DED0]/20 px-6 py-4">
                <X size={14} className="mt-0.5 shrink-0 text-[#8C938E]" />
                <span className="font-[family-name:var(--font-dm-sans)] text-sm text-[#8C938E]">
                  {row.other}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
