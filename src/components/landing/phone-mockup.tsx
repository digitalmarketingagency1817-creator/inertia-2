"use client";

import { type ReactNode } from "react";
import { motion } from "motion/react";

interface PhoneMockupProps {
  children: ReactNode;
  className?: string;
}

export function PhoneMockup({ children, className }: PhoneMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`relative mx-auto w-[280px] ${className ?? ""}`}
    >
      {/* Phone frame */}
      <div className="overflow-hidden rounded-[2.5rem] border-[6px] border-inertia-primary/90 bg-white shadow-2xl">
        {/* Notch */}
        <div className="relative flex justify-center bg-white pt-2 pb-1">
          <div className="h-[22px] w-[100px] rounded-full bg-inertia-primary/90" />
        </div>
        {/* Screen content */}
        <div className="min-h-[480px] bg-white px-4 pb-6">{children}</div>
        {/* Home indicator */}
        <div className="flex justify-center pb-3">
          <div className="h-1 w-28 rounded-full bg-inertia-primary/20" />
        </div>
      </div>
    </motion.div>
  );
}
