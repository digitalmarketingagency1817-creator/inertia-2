"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Splash() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.6]);
  const y = useTransform(scrollY, [0, 400], [0, -100]);

  return (
    <motion.section
      style={{ opacity, scale, y }}
      className="relative flex min-h-screen flex-col items-center justify-center bg-[#FAFAF7] px-4"
    >
      {/* Top navigation pills (visible on splash before scroll) */}
      <div className="absolute top-6 flex items-center gap-3">
        <a
          href="#how-it-works"
          className="rounded-[24px] border border-[#153828] px-5 py-2 font-[family-name:var(--font-dm-sans)] text-sm font-medium text-[#153828] transition-colors hover:bg-[#153828]/5"
        >
          How inertia works
        </a>
        <a
          href="#quiz"
          className="rounded-[24px] border border-[#153828] px-5 py-2 font-[family-name:var(--font-dm-sans)] text-sm font-medium text-[#153828] transition-colors hover:bg-[#153828]/5"
        >
          Learn about your habits
        </a>
        <a
          href="#waitlist"
          className="flex items-center gap-2 rounded-[24px] bg-[#153828] px-5 py-2 font-[family-name:var(--font-dm-sans)] text-sm font-medium text-white transition-colors hover:bg-[#0F3D2E]"
        >
          Join our waitlist
          <ArrowRight size={14} />
        </a>
      </div>

      {/* Large Inertia wordmark */}
      <Image
        src="/images/inertia-wordmark.png"
        alt="Inertia"
        width={800}
        height={200}
        className="h-auto w-[clamp(300px,60vw,800px)]"
        priority
      />

      {/* Tagline — Playfair Display */}
      <p className="mt-8 max-w-lg text-center font-[family-name:var(--font-playfair)] text-2xl leading-tight tracking-[-0.01em] text-[#153828] md:text-3xl">
        The financial tool that adapts to you
      </p>
    </motion.section>
  );
}
