"use client";

import { motion } from "motion/react";
import { Bell, AlertTriangle, Sparkles, Check } from "lucide-react";
import { AnimatedSection } from "./animated-section";

const NOTIFICATIONS = [
  {
    icon: Sparkles,
    title: "Weekly insight ready",
    desc: "You saved 12% more than usual this week",
    time: "2m ago",
    accent: true,
  },
  {
    icon: AlertTriangle,
    title: "Subscription alert",
    desc: "Your streaming trial ends tomorrow — $14.99/mo",
    time: "1h ago",
    accent: false,
  },
  {
    icon: Check,
    title: "Goal checkpoint",
    desc: "Emergency fund: 68% complete ($3,400 / $5,000)",
    time: "3h ago",
    accent: true,
  },
  {
    icon: Bell,
    title: "Gentle nudge",
    desc: "You usually review your budget around this time",
    time: "Yesterday",
    accent: false,
  },
];

export function Highlights() {
  return (
    <AnimatedSection className="bg-inertia-cream px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Left — notification mockup */}
        <div className="order-2 lg:order-1">
          <div className="mx-auto max-w-sm space-y-3">
            {NOTIFICATIONS.map((notif, i) => (
              <motion.div
                key={notif.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex items-start gap-3 rounded-2xl border p-4 shadow-sm ${
                  notif.accent
                    ? "border-inertia-tint bg-inertia-tint/20"
                    : "border-gray-100 bg-white"
                }`}
              >
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                    notif.accent ? "bg-inertia-accent text-white" : "bg-gray-100 text-gray-500"
                  }`}
                >
                  <notif.icon size={16} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-inertia-primary">{notif.title}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-inertia-secondary/70">
                    {notif.desc}
                  </p>
                </div>
                <span className="shrink-0 text-[10px] text-inertia-secondary/40">{notif.time}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — text */}
        <div className="order-1 lg:order-2">
          <h2 className="font-serif text-3xl leading-tight font-bold text-inertia-primary md:text-4xl lg:text-5xl">
            Highlights what <span className="text-inertia-accent">matters</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-inertia-secondary/70">
            No noise. No twenty notifications a day. Inertia surfaces only the moments that deserve
            your attention — a subscription about to renew, a goal within reach, or a pattern worth
            noticing.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
