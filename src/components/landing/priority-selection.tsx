"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GripVertical, X } from "lucide-react";
import { AnimatedSection } from "./animated-section";

const PRIORITIES = [
  "Paying off debt",
  "Saving for emergencies",
  "Reducing impulsive spending",
  "Building a side income",
  "Investing for retirement",
  "Travel more",
  "Buy a home",
  "Support family",
  "Start a business",
  "Live more intentionally",
];

export function PrioritySelection() {
  const [selected, setSelected] = useState<string[]>([]);

  const togglePriority = useCallback((priority: string) => {
    setSelected((prev) => {
      if (prev.includes(priority)) {
        return prev.filter((p) => p !== priority);
      }
      if (prev.length >= 3) return prev;
      return [...prev, priority];
    });
  }, []);

  const removePriority = useCallback((priority: string) => {
    setSelected((prev) => prev.filter((p) => p !== priority));
  }, []);

  const available = PRIORITIES.filter((p) => !selected.includes(p));

  return (
    <AnimatedSection className="bg-[#FAFAF7] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center font-[family-name:var(--font-frank)] text-3xl leading-tight font-medium tracking-[-0.01em] text-[#153828] md:text-4xl lg:text-[56px]">
          Select your top three priorities
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Left: Available items */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <GripVertical size={16} className="text-[#8C938E]" />
              <span className="font-[family-name:var(--font-dm-mono)] text-xs tracking-[0.05em] text-[#8C938E] uppercase">
                CLICK & DRAG
              </span>
            </div>
            <div className="space-y-2">
              {available.map((priority, i) => (
                <motion.button
                  key={priority}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  onClick={() => togglePriority(priority)}
                  disabled={selected.length >= 3}
                  className={`flex w-full items-center gap-3 rounded-xl border border-[#C4DED0]/40 bg-white px-4 py-3 text-left transition-all ${
                    selected.length >= 3
                      ? "cursor-not-allowed opacity-50"
                      : "cursor-pointer hover:border-[#2FA47A] hover:shadow-sm"
                  }`}
                >
                  <GripVertical size={14} className="shrink-0 text-[#C4DED0]" />
                  <span className="font-[family-name:var(--font-dm-sans)] text-sm text-[#153828]">
                    {priority}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right: "This matters zone" */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <span className="font-[family-name:var(--font-dm-mono)] text-xs tracking-[0.05em] text-[#2FA47A] uppercase">
                This matters zone
              </span>
              <span className="font-[family-name:var(--font-dm-mono)] text-xs tracking-[0.05em] text-[#8C938E] uppercase">
                {selected.length}/3 Selected
              </span>
            </div>

            <div className="min-h-[240px] rounded-2xl border-2 border-dashed border-[#C4DED0] bg-[#E2F7F1]/20 p-4">
              <AnimatePresence mode="popLayout">
                {selected.length === 0 ? (
                  <motion.p
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-16 text-center font-[family-name:var(--font-dm-sans)] text-sm text-[#8C938E]"
                  >
                    Drag items here
                  </motion.p>
                ) : (
                  selected.map((priority, i) => (
                    <motion.div
                      key={priority}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      layout
                      className="mb-2 flex items-center justify-between rounded-xl border border-[#2FA47A]/30 bg-white px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-[family-name:var(--font-dm-mono)] text-xs font-medium text-[#2FA47A]">
                          {i + 1}
                        </span>
                        <span className="font-[family-name:var(--font-dm-sans)] text-sm font-medium text-[#153828]">
                          {priority}
                        </span>
                      </div>
                      <button
                        onClick={() => removePriority(priority)}
                        className="text-[#8C938E] transition-colors hover:text-[#153828]"
                      >
                        <X size={14} />
                      </button>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
