"use client";

import { motion } from "motion/react";

export function Steadiness() {
  return (
    <section className="bg-inertia-cream px-4 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-4xl text-center"
      >
        <h2 className="font-serif text-4xl leading-[1.15] font-bold text-inertia-primary md:text-5xl lg:text-7xl">
          Less reacting.
          <br />
          <span className="text-inertia-accent">More steadiness.</span>
        </h2>
      </motion.div>
    </section>
  );
}
