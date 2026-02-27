"use client";

import { motion } from "motion/react";
import { Brain, Repeat, LineChart, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { AnimatedSection } from "./animated-section";

const FEATURES = [
  {
    icon: Brain,
    title: "Behavioral insights",
    desc: "Built on real psychology — not arbitrary rules. We understand why people actually struggle with money.",
  },
  {
    icon: Repeat,
    title: "Daily micro-decisions",
    desc: "Small choices compound. A few mindful moments each day create lasting financial habits.",
  },
  {
    icon: LineChart,
    title: "Adaptive learning",
    desc: "Inertia gets smarter the more you use it — adjusting to your patterns, not forcing you into a template.",
  },
  {
    icon: Shield,
    title: "No judgment zone",
    desc: "Spent too much on coffee? No guilt trips. We help you course-correct without the shame spiral.",
  },
];

export function WhyItWorks() {
  return (
    <AnimatedSection className="bg-inertia-cream px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-serif text-3xl leading-tight font-bold text-inertia-primary md:text-4xl lg:text-5xl">
          Why Inertia <span className="text-inertia-accent">works</span>
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="group h-full border-inertia-tint/30 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-inertia-tint/50 text-inertia-primary transition-colors group-hover:bg-inertia-accent group-hover:text-white">
                  <feature.icon size={22} />
                </div>
                <h3 className="font-serif text-lg font-bold text-inertia-primary">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-inertia-secondary/60">
                  {feature.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
