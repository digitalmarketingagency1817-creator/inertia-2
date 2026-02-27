"use client";

import { motion } from "motion/react";
import { Check, Minus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "./animated-section";

const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "Get started with the essentials",
    features: [
      { text: "Daily money decisions", included: true },
      { text: "Basic pattern insights", included: true },
      { text: "3 financial goals", included: true },
      { text: "Weekly summary", included: true },
      { text: "Advanced analytics", included: false },
      { text: "Family sharing", included: false },
      { text: "Priority support", included: false },
    ],
    cta: "Join waitlist",
    highlighted: false,
  },
  {
    name: "Core",
    price: "$8",
    period: "/month",
    desc: "For people getting serious about their money",
    features: [
      { text: "Daily money decisions", included: true },
      { text: "Full pattern insights", included: true },
      { text: "Unlimited goals", included: true },
      { text: "Daily + weekly summaries", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Family sharing (2)", included: true },
      { text: "Priority support", included: false },
    ],
    cta: "Join waitlist",
    highlighted: true,
  },
  {
    name: "Family",
    price: "$14",
    period: "/month",
    desc: "Your whole household, one financial picture",
    features: [
      { text: "Daily money decisions", included: true },
      { text: "Full pattern insights", included: true },
      { text: "Unlimited goals", included: true },
      { text: "Real-time summaries", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Family sharing (6)", included: true },
      { text: "Priority support", included: true },
    ],
    cta: "Join waitlist",
    highlighted: false,
  },
];

export function PricingCards() {
  return (
    <AnimatedSection id="pricing" className="bg-inertia-cream px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-inertia-primary text-center font-serif text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">
          Simple, honest pricing
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card
                className={`relative flex h-full flex-col overflow-hidden border-2 p-6 ${
                  plan.highlighted
                    ? "border-inertia-accent bg-white shadow-xl"
                    : "border-inertia-tint/30 bg-white"
                }`}
              >
                {plan.highlighted && (
                  <div className="bg-inertia-accent absolute top-0 right-0 left-0 h-1" />
                )}

                <div>
                  <h3 className="text-inertia-primary font-serif text-xl font-bold">{plan.name}</h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-inertia-primary font-serif text-4xl font-bold">
                      {plan.price}
                    </span>
                    <span className="text-inertia-secondary/50 text-sm">{plan.period}</span>
                  </div>
                  <p className="text-inertia-secondary/60 mt-2 text-sm">{plan.desc}</p>
                </div>

                <div className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <div key={f.text} className="flex items-center gap-2.5">
                      {f.included ? (
                        <Check size={16} className="text-inertia-accent shrink-0" />
                      ) : (
                        <Minus size={16} className="text-inertia-secondary/20 shrink-0" />
                      )}
                      <span
                        className={`text-sm ${
                          f.included ? "text-inertia-primary" : "text-inertia-secondary/30"
                        }`}
                      >
                        {f.text}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  className={`mt-8 w-full rounded-full ${
                    plan.highlighted
                      ? "bg-inertia-primary hover:bg-inertia-secondary text-white"
                      : "border-inertia-primary/20 text-inertia-primary hover:bg-inertia-tint/30 border bg-white"
                  }`}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  <a href="#waitlist">{plan.cta}</a>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
