"use client";

import { motion } from "motion/react";
import { AnimatedSection } from "./animated-section";

export function Highlights() {
  return (
    <AnimatedSection className="bg-[#FAFAF7] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Left — notification mockup */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-sm space-y-3"
          >
            {[
              {
                title: "Weekly insight ready",
                desc: "You saved 12% more than usual this week",
                accent: true,
              },
              {
                title: "Subscription alert",
                desc: "Your streaming trial ends tomorrow — $14.99/mo",
                accent: false,
              },
              {
                title: "Goal checkpoint",
                desc: "Emergency fund: 68% complete ($3,400 / $5,000)",
                accent: true,
              },
            ].map((notif, i) => (
              <motion.div
                key={notif.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl border p-4 ${
                  notif.accent ? "border-[#C4DED0] bg-[#E2F7F1]/40" : "border-[#E0EAE5] bg-white"
                }`}
              >
                <p className="font-[family-name:var(--font-dm-sans)] text-sm font-semibold text-[#153828]">
                  {notif.title}
                </p>
                <p className="mt-0.5 font-[family-name:var(--font-dm-sans)] text-xs leading-relaxed text-[#8C938E]">
                  {notif.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right — text */}
        <div className="order-1 lg:order-2">
          <span className="font-[family-name:var(--font-dm-mono)] text-sm font-medium tracking-[0.05em] text-[#2FA47A] uppercase">
            02
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-frank)] text-3xl leading-tight font-medium tracking-[-0.01em] text-[#153828] md:text-4xl lg:text-[48px]">
            Highlights what matters
          </h2>
          <p className="mt-6 max-w-md font-[family-name:var(--font-dm-sans)] text-base leading-relaxed text-[#8C938E]">
            No noise. No twenty notifications a day. Inertia surfaces only the moments that deserve
            your attention — a subscription about to renew, a goal within reach, or a pattern worth
            noticing.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
