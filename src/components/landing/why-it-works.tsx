"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "./animated-section";

const FEATURES = [
  {
    number: "01",
    title: "It works with your habits",
    desc: "Instead of forcing you into rigid categories, Inertia learns how you actually behave with money — and adapts its guidance to match your rhythm.",
  },
  {
    number: "02",
    title: "It lowers the mental load",
    desc: "No more decision fatigue. Inertia breaks complex financial choices into small, manageable moments throughout your day.",
  },
  {
    number: "03",
    title: "It adapts as life changes",
    desc: "Your financial life isn't static — and neither is Inertia. It evolves with you through new jobs, moves, relationships, and goals.",
  },
];

export function WhyItWorks() {
  return (
    <AnimatedSection className="bg-[#FAFAF7] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-[family-name:var(--font-frank)] text-3xl leading-tight font-medium tracking-[-0.01em] text-[#153828] md:text-4xl lg:text-[56px]">
          Why Inertia works
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-[#C4DED0]/30 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="font-[family-name:var(--font-dm-mono)] text-sm font-medium tracking-[0.05em] text-[#2FA47A] uppercase">
                {feature.number}
              </span>
              <h3 className="mt-3 font-[family-name:var(--font-frank)] text-xl font-medium text-[#153828]">
                {feature.title}
              </h3>
              <p className="mt-3 font-[family-name:var(--font-dm-sans)] text-sm leading-relaxed text-[#8C938E]">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="font-[family-name:var(--font-dm-sans)] text-lg text-[#153828]">
            Ready to take control of your finances?
          </p>
          <a
            href="#waitlist"
            className="mt-4 inline-flex items-center gap-2 rounded-[24px] bg-[#0F3D2E] px-8 py-3.5 font-[family-name:var(--font-dm-sans)] text-sm font-semibold text-white transition-colors hover:bg-[#153828]"
          >
            Join our waitlist
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
