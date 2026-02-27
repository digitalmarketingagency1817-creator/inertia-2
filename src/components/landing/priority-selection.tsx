"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { AnimatedSection } from "./animated-section";

const PRIORITIES = [
  "Save for emergencies",
  "Pay off debt",
  "Travel more",
  "Invest for retirement",
  "Buy a home",
  "Build a side income",
  "Reduce impulsive spending",
  "Support family",
  "Start a business",
  "Live more intentionally",
];

export function PrioritySelection() {
  const [selectedPriorities, setSelectedPriorities] = useState<string[]>([]);

  const togglePriority = (priority: string) => {
    setSelectedPriorities((prev) =>
      prev.includes(priority) ? prev.filter((p) => p !== priority) : [...prev, priority],
    );
  };

  return (
    <AnimatedSection className="bg-inertia-cream px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-serif text-3xl leading-tight font-bold text-inertia-primary md:text-4xl lg:text-5xl">
          What feels most important
          <br />
          <span className="text-inertia-accent">to you right now?</span>
        </h2>
        <p className="mt-4 text-base text-inertia-secondary/60">
          Pick as many as you like. This is your starting point.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {PRIORITIES.map((priority, i) => {
            const isSelected = selectedPriorities.includes(priority);
            return (
              <motion.button
                key={priority}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => togglePriority(priority)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                  isSelected
                    ? "bg-inertia-primary text-white shadow-md"
                    : "border border-inertia-primary/20 bg-white text-inertia-primary hover:border-inertia-accent hover:bg-inertia-tint/30"
                }`}
              >
                {isSelected && "✓ "}
                {priority}
              </motion.button>
            );
          })}
        </div>

        {selectedPriorities.length > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 text-sm text-inertia-secondary/50"
          >
            {selectedPriorities.length} {selectedPriorities.length === 1 ? "priority" : "priorities"}{" "}
            selected — Inertia will tailor your experience around these
          </motion.p>
        )}
      </div>
    </AnimatedSection>
  );
}
