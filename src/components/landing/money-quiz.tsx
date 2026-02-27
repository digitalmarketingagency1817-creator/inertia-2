"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Card } from "@/components/ui/card";

const PERSONALITIES = [
  {
    id: "planner",
    label: "The Planner",
    desc: "Every dollar has a purpose",
    emoji: "📊",
    color: "#2D6A4F",
  },
  {
    id: "avoider",
    label: "The Avoider",
    desc: "Out of sight, out of mind",
    emoji: "🙈",
    color: "#40916C",
  },
  {
    id: "spontaneous",
    label: "The Spontaneous",
    desc: "Life's too short to budget",
    emoji: "✨",
    color: "#52B788",
  },
  {
    id: "worrier",
    label: "The Worrier",
    desc: "Always expecting the worst",
    emoji: "😰",
    color: "#74C69D",
  },
];

export function MoneyQuiz() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section
      id="quiz"
      className="relative overflow-hidden bg-inertia-primary px-4 py-20 md:px-8 md:py-28"
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 h-64 w-64 opacity-10"
        style={{
          borderRadius: "30% 70% 53% 47% / 26% 46% 54% 74%",
          background: "white",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="font-serif text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl">
            What&apos;s your relationship
            <br />
            with money?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/70">
            Understanding your money personality is the first step. Pick the one that feels most
            like you.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PERSONALITIES.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card
                onClick={() => setSelected(p.id)}
                className={`group cursor-pointer border-2 bg-white/95 p-6 text-center transition-all hover:-translate-y-1 hover:shadow-xl ${
                  selected === p.id
                    ? "scale-[1.03] border-inertia-tint shadow-xl"
                    : "border-transparent"
                }`}
              >
                <div className="text-4xl">{p.emoji}</div>
                <h3 className="mt-3 font-serif text-lg font-bold text-inertia-primary">
                  {p.label}
                </h3>
                <p className="mt-1 text-sm text-inertia-secondary/60">{p.desc}</p>
                {selected === p.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="mt-3 inline-block rounded-full bg-inertia-accent px-3 py-1 text-xs font-semibold text-white"
                  >
                    That&apos;s you ✓
                  </motion.div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {selected && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 text-center text-sm text-white/60"
          >
            Inertia adapts to every money personality. Join the waitlist to see how.
          </motion.p>
        )}
      </div>
    </section>
  );
}
