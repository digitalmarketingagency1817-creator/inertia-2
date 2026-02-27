"use client";

import { motion } from "motion/react";
import { Coffee, ShoppingBag, Utensils, Bus, Music, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { WavyConnector } from "./decorative-elements";
import { AnimatedSection } from "./animated-section";

const DECISIONS = [
  { icon: Coffee, label: "Morning coffee", amount: "$4.50", category: "Ritual" },
  { icon: ShoppingBag, label: "Grocery run", amount: "$62.30", category: "Essentials" },
  { icon: Utensils, label: "Lunch out", amount: "$15.00", category: "Social" },
  { icon: Bus, label: "Transit pass", amount: "$2.75", category: "Transport" },
  { icon: Music, label: "Subscription", amount: "$9.99", category: "Entertainment" },
  { icon: Zap, label: "Quick save", amount: "+$25", category: "Savings" },
];

export function DailyDecisions() {
  return (
    <AnimatedSection id="how-it-works" className="bg-inertia-cream px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-serif text-3xl leading-tight font-bold text-inertia-primary md:text-4xl lg:text-5xl">
          We help you make a few
          <br />
          <span className="text-inertia-accent">money decisions</span> each day
        </h2>

        <WavyConnector className="mx-auto mt-8 w-full max-w-lg" />

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {DECISIONS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="group cursor-default border-inertia-tint/40 bg-white p-4 transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-inertia-tint/60 text-inertia-primary transition-colors group-hover:bg-inertia-accent group-hover:text-white">
                  <item.icon size={20} />
                </div>
                <p className="text-sm font-semibold text-inertia-primary">{item.label}</p>
                <p className="mt-1 font-serif text-lg font-bold text-inertia-primary">
                  {item.amount}
                </p>
                <span className="mt-2 inline-block rounded-full bg-inertia-tint/40 px-2 py-0.5 text-xs font-medium text-inertia-accent">
                  {item.category}
                </span>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
