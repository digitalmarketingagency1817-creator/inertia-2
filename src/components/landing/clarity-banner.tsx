"use client";

import { motion } from "motion/react";

export function ClarityBanner() {
  return (
    <section className="px-4 py-8 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-6xl rounded-3xl bg-inertia-primary px-8 py-16 text-center md:px-16 md:py-20"
      >
        <h2 className="font-serif text-3xl leading-tight font-bold text-white md:text-5xl">
          Inertia brings clarity to
        </h2>
        <p className="mt-3 font-serif text-3xl italic text-inertia-tint md:text-5xl">
          money decisions
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="#waitlist"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-inertia-primary transition-colors hover:bg-inertia-tint"
          >
            Get early access
          </a>
          <a
            href="#how-it-works"
            className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Learn more
          </a>
        </div>
      </motion.div>
    </section>
  );
}
