"use client";

import { motion } from "motion/react";
import { Plus } from "lucide-react";
import { AnimatedSection } from "./animated-section";

const PILLS_ROW_1 = ["needs", "goals"];
const PILLS_ROW_2 = ["plans", "life"];

export function AdaptiveHabits() {
  return (
    <AnimatedSection className="bg-[#FAFAF7] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-[family-name:var(--font-frank)] text-3xl leading-tight font-medium tracking-[-0.01em] text-[#153828] md:text-4xl lg:text-[56px]">
          that adapt to your habits
        </h2>

        {/* Subtitle */}
        <p className="mt-4 font-[family-name:var(--font-dm-sans)] text-lg text-[#8C938E]">
          (Not the version of you that budgets perfectly)
        </p>

        {/* Pills with plus signs — matching Figma layout */}
        <div className="mt-12 flex flex-col items-center gap-4">
          {/* Row 1: needs + goals */}
          <div className="flex items-center gap-3">
            {PILLS_ROW_1.map((pill, i) => (
              <div key={pill} className="flex items-center gap-3">
                {i > 0 && <Plus size={16} className="text-[#C4DED0]" />}
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-[24px] border border-[#C4DED0] bg-white px-6 py-2.5 font-[family-name:var(--font-dm-mono)] text-sm font-medium tracking-[0.05em] text-[#153828] uppercase"
                >
                  {pill}
                </motion.span>
              </div>
            ))}
          </div>
          {/* Row 2: plans + life */}
          <div className="flex items-center gap-3">
            {PILLS_ROW_2.map((pill, i) => (
              <div key={pill} className="flex items-center gap-3">
                {i > 0 && <Plus size={16} className="text-[#C4DED0]" />}
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="rounded-[24px] border border-[#C4DED0] bg-white px-6 py-2.5 font-[family-name:var(--font-dm-mono)] text-sm font-medium tracking-[0.05em] text-[#153828] uppercase"
                >
                  {pill}
                </motion.span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
