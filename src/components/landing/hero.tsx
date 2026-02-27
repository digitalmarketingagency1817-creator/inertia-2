"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { GreenBlob } from "./decorative-elements";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-inertia-cream px-4 pt-8 pb-16 md:px-8 md:pt-16 md:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — headline */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-serif text-4xl leading-[1.1] font-bold text-inertia-primary md:text-5xl lg:text-6xl">
            Your money doesn&apos;t need perfection, it needs{" "}
            <span className="text-inertia-accent">direction.</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-inertia-secondary/80">
            Inertia helps you make smarter financial decisions every day — not through strict
            budgets, but through gentle guidance that adapts to how you actually live.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#how-it-works"
              className="rounded-full bg-inertia-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-inertia-secondary"
            >
              See how it works
            </a>
            <a
              href="#waitlist"
              className="rounded-full border border-inertia-primary/20 px-6 py-3 text-sm font-semibold text-inertia-primary transition-colors hover:bg-inertia-tint/40"
            >
              Join waitlist
            </a>
          </div>
        </motion.div>

        {/* Right — hero image + blob */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center"
        >
          <GreenBlob className="absolute -top-8 -right-8 -z-0 h-[320px] w-[320px] opacity-60 md:h-[420px] md:w-[420px]" />
          <div className="relative z-10 overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1581952976147-5a2d15560349?w=600&h=720&fit=crop&crop=faces"
              alt="Woman enjoying a sunny day with her dog"
              width={600}
              height={720}
              className="h-auto w-full max-w-[480px] object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
