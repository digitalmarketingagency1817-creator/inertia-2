"use client";

import { motion } from "motion/react";

export function GreenBlob({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className={className}
      aria-hidden="true"
      style={{
        borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
        background: "linear-gradient(135deg, #D8F3DC 0%, #40916C 50%, #2D6A4F 100%)",
      }}
    />
  );
}

export function HandDrawnLine({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 50"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <motion.path
        d="M5 25 C30 10, 60 40, 95 25 S160 10, 195 25"
        stroke="#40916C"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </svg>
  );
}

export function HandDrawnArrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 60"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <motion.path
        d="M5 45 C25 10, 60 5, 95 20"
        stroke="#40916C"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
      <motion.path
        d="M85 12 L95 20 L85 26"
        stroke="#40916C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.2, ease: "easeInOut" }}
      />
    </svg>
  );
}

export function WavyConnector({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 80"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <motion.path
        d="M0 40 Q50 10 100 40 T200 40 T300 40 T400 40"
        stroke="#40916C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="6 4"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </svg>
  );
}
