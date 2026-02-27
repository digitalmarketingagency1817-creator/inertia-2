"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { HandDrawnArrow } from "./decorative-elements";
import { AnimatedSection } from "./animated-section";

const HABITS = [
  "needs",
  "goals",
  "plans",
  "routines",
  "impulses",
  "moods",
  "seasons",
  "milestones",
];

export function AdaptiveHabits() {
  return (
    <AnimatedSection className="bg-inertia-cream px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-inertia-primary font-serif text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">
          that adapt to your <span className="text-inertia-accent">habits</span>
        </h2>

        <div className="relative mt-12">
          <HandDrawnArrow className="absolute -top-6 left-1/2 w-24 -translate-x-1/2 rotate-90 opacity-40 md:opacity-60" />

          <div className="flex flex-wrap justify-center gap-3">
            {HABITS.map((habit, i) => (
              <motion.div
                key={habit}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Badge
                  variant="outline"
                  className="border-inertia-accent/30 text-inertia-primary hover:border-inertia-accent hover:bg-inertia-tint/40 cursor-default rounded-full bg-white px-5 py-2.5 font-sans text-sm font-medium transition-all"
                >
                  {habit}
                </Badge>
              </motion.div>
            ))}
          </div>

          {/* Decorative triangle/mountain icon */}
          <div className="mt-8 flex justify-center">
            <svg width="40" height="36" viewBox="0 0 40 36" fill="none" aria-hidden="true">
              <path d="M20 2L38 34H2L20 2Z" stroke="#40916C" strokeWidth="2" fill="#D8F3DC" />
            </svg>
          </div>
        </div>

        <p className="text-inertia-secondary/70 mx-auto mt-8 max-w-lg text-base leading-relaxed">
          Inertia learns how you spend, save, and plan — then gently adjusts its guidance to match
          your rhythm, not the other way around.
        </p>
      </div>
    </AnimatedSection>
  );
}
