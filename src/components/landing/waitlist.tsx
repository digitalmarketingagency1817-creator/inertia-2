"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="waitlist" className="bg-inertia-cream px-4 py-20 md:px-8 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="font-serif text-3xl leading-tight font-bold text-inertia-primary md:text-4xl lg:text-5xl">
          Join our waitlist
        </h2>
        <p className="mt-4 text-base leading-relaxed text-inertia-secondary/70">
          Be the first to experience a financial tool that actually gets you. No spam, just early
          access and updates.
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-10 flex items-center justify-center gap-3 rounded-2xl border border-inertia-tint bg-inertia-tint/30 px-6 py-4"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-inertia-accent text-white">
              <Check size={16} />
            </div>
            <span className="text-sm font-semibold text-inertia-primary">
              You&apos;re on the list! We&apos;ll be in touch.
            </span>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-10 flex max-w-md gap-3">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 rounded-full border-inertia-primary/15 bg-white px-5 text-sm placeholder:text-inertia-secondary/40 focus-visible:ring-inertia-accent"
            />
            <Button
              type="submit"
              className="h-12 shrink-0 rounded-full bg-inertia-primary px-6 text-sm font-semibold text-white hover:bg-inertia-secondary"
            >
              Join
              <ArrowRight size={16} className="ml-1" />
            </Button>
          </form>
        )}

        <p className="mt-4 text-xs text-inertia-secondary/40">
          2,847 people already waiting · No credit card needed
        </p>
      </motion.div>
    </section>
  );
}
