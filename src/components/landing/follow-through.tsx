"use client";

import { motion } from "motion/react";
import { CheckCircle2, Circle, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "./animated-section";

const ACTIONS = [
  { text: "Move $150 to savings", done: true },
  { text: "Review dining expenses from this week", done: true },
  { text: "Decide on gym membership renewal ($45/mo)", done: false },
  { text: "Set aside $80 for upcoming insurance", done: false },
];

export function FollowThrough() {
  return (
    <AnimatedSection className="bg-inertia-cream px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Left — text */}
        <div>
          <Badge className="mb-4 rounded-full bg-inertia-tint/60 px-3 py-1 text-xs font-medium text-inertia-accent hover:bg-inertia-tint/80">
            clarity
          </Badge>
          <h2 className="font-serif text-3xl leading-tight font-bold text-inertia-primary md:text-4xl lg:text-5xl">
            Helps you <span className="text-inertia-accent">follow through</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-inertia-secondary/70">
            Good intentions aren&apos;t enough. Inertia turns your financial goals into small,
            doable actions — and checks in to make sure they actually happen.
          </p>
        </div>

        {/* Right — action card mockup */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-sm overflow-hidden rounded-2xl border border-inertia-tint/40 bg-white shadow-lg"
          >
            <div className="border-b border-inertia-tint/30 bg-inertia-tint/10 px-5 py-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-inertia-primary">
                  Today&apos;s actions
                </span>
                <span className="text-xs text-inertia-secondary/50">2 of 4 done</span>
              </div>
              {/* Progress bar */}
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-inertia-tint/40">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "50%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="h-full rounded-full bg-inertia-accent"
                />
              </div>
            </div>

            <div className="divide-y divide-inertia-tint/20 px-5">
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
                    <CheckCircle2 size={18} className="shrink-0 text-inertia-accent" />
                  ) : (
                    <Circle size={18} className="shrink-0 text-inertia-secondary/30" />
                  )}
                  <span
                    className={`flex-1 text-sm ${
                      action.done
                        ? "text-inertia-secondary/50 line-through"
                        : "font-medium text-inertia-primary"
                    }`}
                  >
                    {action.text}
                  </span>
                  {!action.done && (
                    <ArrowRight size={14} className="shrink-0 text-inertia-secondary/30" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
