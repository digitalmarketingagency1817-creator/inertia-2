"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";

export function Waitlist() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && firstName) {
      setSubmitted(true);
    }
  };

  return (
    <section id="waitlist" className="bg-[#FAFAF7] px-4 py-20 md:px-8 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-lg text-center"
      >
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl leading-tight font-medium tracking-[-0.015em] text-[#153828] md:text-4xl lg:text-[48px]">
          Join the waitlist
        </h2>
        <p className="mt-4 font-[family-name:var(--font-dm-sans)] text-base text-[#8C938E]">
          ...and let&apos;s keep in touch
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-10 flex items-center justify-center gap-3 rounded-2xl border border-[#C4DED0] bg-[#E2F7F1]/30 px-6 py-4"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2FA47A] text-white">
              <Check size={16} />
            </div>
            <span className="font-[family-name:var(--font-dm-sans)] text-sm font-semibold text-[#153828]">
              You&apos;re on the list! We&apos;ll be in touch.
            </span>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-left">
                <label className="mb-1.5 block font-[family-name:var(--font-dm-mono)] text-xs tracking-[0.05em] text-[#8C938E] uppercase">
                  FIRST NAME
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="h-12 w-full rounded-xl border border-[#C4DED0]/40 bg-white px-4 font-[family-name:var(--font-dm-sans)] text-sm text-[#153828] placeholder:text-[#8C938E]/50 focus:border-[#2FA47A] focus:ring-1 focus:ring-[#2FA47A] focus:outline-none"
                  placeholder="Jane"
                />
              </div>
              <div className="text-left">
                <label className="mb-1.5 block font-[family-name:var(--font-dm-mono)] text-xs tracking-[0.05em] text-[#8C938E] uppercase">
                  LAST NAME
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="h-12 w-full rounded-xl border border-[#C4DED0]/40 bg-white px-4 font-[family-name:var(--font-dm-sans)] text-sm text-[#153828] placeholder:text-[#8C938E]/50 focus:border-[#2FA47A] focus:ring-1 focus:ring-[#2FA47A] focus:outline-none"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="text-left">
              <label className="mb-1.5 block font-[family-name:var(--font-dm-mono)] text-xs tracking-[0.05em] text-[#8C938E] uppercase">
                EMAIL
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 w-full rounded-xl border border-[#C4DED0]/40 bg-white px-4 font-[family-name:var(--font-dm-sans)] text-sm text-[#153828] placeholder:text-[#8C938E]/50 focus:border-[#2FA47A] focus:ring-1 focus:ring-[#2FA47A] focus:outline-none"
                placeholder="jane@example.com"
              />
            </div>
            <button
              type="submit"
              className="h-12 w-full rounded-[24px] bg-[#0F3D2E] font-[family-name:var(--font-dm-sans)] text-sm font-semibold text-white transition-colors hover:bg-[#153828]"
            >
              Submit
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
