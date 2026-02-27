"use client";

import { motion } from "motion/react";
import { Separator } from "@/components/ui/separator";
import { AnimatedSection } from "./animated-section";

const COMPARISONS = [
  {
    traditional: "Strict budgets you'll abandon in 2 weeks",
    inertia: "Gentle guidance that adapts to your life",
  },
  {
    traditional: "Guilt-driven notifications about overspending",
    inertia: "Insights that help you understand why",
  },
  {
    traditional: "One-size-fits-all categories and rules",
    inertia: "Patterns unique to you, learned over time",
  },
  {
    traditional: "Complicated dashboards with too many numbers",
    inertia: "Simple daily decisions that compound",
  },
];

export function DifferentApproach() {
  return (
    <AnimatedSection className="bg-inertia-primary px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-serif text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl">
          A different approach
          <br />
          <span className="text-inertia-tint">to money</span>
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <h3 className="mb-4 text-sm font-semibold tracking-wide text-white/40 uppercase">
              Traditional apps
            </h3>
            <div className="space-y-4">
              {COMPARISONS.map((c, i) => (
                <div key={i}>
                  <p className="text-sm leading-relaxed text-white/60">{c.traditional}</p>
                  {i < COMPARISONS.length - 1 && <Separator className="mt-4 bg-white/10" />}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Inertia */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-inertia-tint/20 bg-inertia-tint/10 p-6"
          >
            <h3 className="mb-4 text-sm font-semibold tracking-wide text-inertia-tint uppercase">
              Inertia
            </h3>
            <div className="space-y-4">
              {COMPARISONS.map((c, i) => (
                <div key={i}>
                  <p className="text-sm leading-relaxed font-medium text-white">{c.inertia}</p>
                  {i < COMPARISONS.length - 1 && (
                    <Separator className="mt-4 bg-inertia-tint/20" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
