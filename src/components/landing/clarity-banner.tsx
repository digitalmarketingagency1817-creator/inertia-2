"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function ClarityBanner() {
  return (
    <section className="bg-[#FAFAF7] px-4 py-12 md:px-8">
      {/* "When everything feels urgent" text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-10 max-w-3xl text-center font-[family-name:var(--font-frank)] text-2xl leading-tight text-[#8C938E] md:text-3xl"
      >
        When everything feels urgent, nothing gets resolved
      </motion.p>

      {/* Green banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-6xl rounded-3xl bg-[#0F3D2E] px-8 py-16 text-center md:px-16 md:py-20"
      >
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl leading-tight font-medium tracking-[-0.015em] text-white md:text-5xl lg:text-[60px]">
          Inertia brings clarity to
          <br />
          <span className="text-[#C4DED0] italic">money decisions.</span>
        </h2>

        <div className="mt-10">
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 rounded-[24px] bg-white px-8 py-3.5 font-[family-name:var(--font-dm-sans)] text-sm font-semibold text-[#0F3D2E] transition-colors hover:bg-[#E2F7F1]"
          >
            Find my direction
            <ArrowRight size={16} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
