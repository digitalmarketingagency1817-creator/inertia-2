"use client";

import { motion, useScroll, useTransform } from "motion/react";

export function Splash() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.6]);
  const y = useTransform(scrollY, [0, 400], [0, -100]);

  return (
    <motion.section
      style={{ opacity, scale, y }}
      className="relative flex min-h-[80vh] flex-col items-center justify-center bg-inertia-cream px-4"
    >
      <h1 className="font-serif text-[clamp(3.5rem,12vw,10rem)] leading-[0.9] font-bold tracking-tight text-inertia-primary">
        Inertia
      </h1>
      <p className="mt-6 max-w-md text-center font-sans text-lg text-inertia-secondary md:text-xl">
        The financial tool that adapts to you
      </p>
    </motion.section>
  );
}
