"use client";

import { motion } from "motion/react";
import { AnimatedSection } from "./animated-section";

const DECISIONS = [
  { label: "LOANS", amount: "$900.00", subtext: "AMOUNT DUE" },
  { label: "RENT", amount: "$1,000.00", subtext: "AMOUNT DUE" },
  { label: "COFFEE", amount: "$6.00", subtext: "AMOUNT DUE" },
  { label: "CAR PAYMENT", amount: "$450.00", subtext: "AMOUNT DUE" },
];

export function DailyDecisions() {
  return (
    <AnimatedSection id="how-it-works" className="bg-[#FAFAF7] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-[family-name:var(--font-frank)] text-3xl leading-tight font-medium tracking-[-0.01em] text-[#153828] md:text-4xl lg:text-[56px]">
          We help you make a few
          <br />
          money decisions each day
        </h2>

        {/* Decision cards */}
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {DECISIONS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-[#C4DED0]/40 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="font-[family-name:var(--font-dm-mono)] text-xs font-medium tracking-[0.05em] text-[#8C938E] uppercase">
                {item.label}
              </span>
              <p className="mt-2 font-[family-name:var(--font-playfair)] text-2xl font-medium text-[#153828] md:text-3xl">
                {item.amount}
              </p>
              <span className="mt-1 block font-[family-name:var(--font-dm-mono)] text-[10px] tracking-[0.05em] text-[#8C938E] uppercase">
                {item.subtext}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
