"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF7] px-4 pt-8 pb-16 md:px-8 md:pt-16 md:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — headline */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl leading-[1.1] font-medium tracking-[-0.015em] text-[#153828] md:text-5xl lg:text-[60px]">
            Your money doesn&apos;t need perfection, it needs{" "}
            <span className="text-[#2FA47A]">direction.</span>
          </h2>
        </motion.div>

        {/* Right — hero lifestyle photo */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center"
        >
          <div className="relative z-10 overflow-hidden rounded-3xl">
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

      {/* Chevron scroll indicator */}
      <motion.div
        className="mt-12 flex justify-center"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={28} className="text-[#8C938E]" />
      </motion.div>
    </section>
  );
}
