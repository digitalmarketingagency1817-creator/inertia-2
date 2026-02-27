"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowLeft, Lock, Sparkles } from "lucide-react";

interface QuizStep {
  stepLabel: string;
  question: string;
  options: string[];
}

const QUIZ_STEPS: QuizStep[] = [
  {
    stepLabel: "Step 1/6 — Personality",
    question: "What best describes how you handle money?",
    options: [
      "I plan everything down to the cent",
      "I wing it and hope for the best",
      "I have a rough idea but avoid the details",
      "I obsess over it but still feel stuck",
    ],
  },
  {
    stepLabel: "Step 2/6 — Emotional",
    question: "How do you usually feel about your finances?",
    options: [
      "Overwhelmed — there's too much to figure out",
      "Stressed but managing",
      "Stable but stuck",
      "Confident but curious",
    ],
  },
  {
    stepLabel: "Step 3/6 — Behavior",
    question: "In a money situation that feels unclear, I usually...",
    options: [
      "Avoid it and hope it works out",
      "Stay neutral and deal with it later",
      "Feel motivated to take action",
      "Feel confident making decisions",
    ],
  },
  {
    stepLabel: "Step 4/6 — Motivation",
    question: "What do you want money to give you more of right now?",
    options: ["Stability", "Freedom", "Peace of mind", "Balance", "Progress"],
  },
  {
    stepLabel: "Step 5/6 — Readiness",
    question: "Right now, I'm looking for...",
    options: [
      "One clear next step",
      "A simple plan",
      "Reassurance I'm not behind",
      "Something I can actually stick with",
      "Help figuring it out",
    ],
  },
  {
    stepLabel: "Step 6/6 — Extra Extra",
    question: "What feels most true?",
    options: [
      "I like structure",
      "I like flexibility",
      "I like understanding everything",
      "I like moving fast",
      "I like playing it safe",
    ],
  },
];

function QuizResult({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center"
    >
      <span className="font-[family-name:var(--font-dm-mono)] text-xs tracking-[0.05em] text-[#EFAD87] uppercase">
        YOUR MONEY PERSONALITY
      </span>
      <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl font-medium tracking-[-0.015em] text-white md:text-5xl">
        The Overwhelmed Planner
      </h3>
      <p className="mx-auto mt-4 max-w-md font-[family-name:var(--font-dm-sans)] text-base leading-relaxed text-white/70">
        You want a plan that actually works — but the sheer volume of decisions keeps pulling you
        off track. That&apos;s where Inertia comes in.
      </p>

      {/* Roadmap: NOW / THIS WEEK / LATER */}
      <div className="mx-auto mt-10 max-w-lg space-y-4 text-left">
        <div className="rounded-2xl border border-[#2FA47A]/30 bg-[#2FA47A]/10 p-4">
          <span className="font-[family-name:var(--font-dm-mono)] text-xs font-medium tracking-[0.05em] text-[#2FA47A] uppercase">
            NOW
          </span>
          <p className="mt-1 font-[family-name:var(--font-dm-sans)] text-sm text-white">
            Focus on first: Getting clarity around cash flow.
          </p>
        </div>
        <div className="rounded-2xl border border-[#FEDC69]/30 bg-[#FEDC69]/10 p-4">
          <span className="font-[family-name:var(--font-dm-mono)] text-xs font-medium tracking-[0.05em] text-[#FEDC69] uppercase">
            THIS WEEK
          </span>
          <p className="mt-1 font-[family-name:var(--font-dm-sans)] text-sm text-white">
            One small step: Set aside $25 — even once counts.
          </p>
        </div>
        <div className="rounded-2xl border border-white/20 bg-white/5 p-4">
          <span className="font-[family-name:var(--font-dm-mono)] text-xs font-medium tracking-[0.05em] text-[#8C938E] uppercase">
            LATER
          </span>
          <p className="mt-1 font-[family-name:var(--font-dm-sans)] text-sm text-white/70">
            Can wait: Long-term investing — this doesn&apos;t need your attention yet.
          </p>
        </div>
      </div>

      {/* Save CTA */}
      <div className="mt-10">
        <p className="mb-2 font-[family-name:var(--font-dm-sans)] text-sm text-white/60">
          Want us to save this and keep guiding you?
        </p>
        <p className="mb-6 font-[family-name:var(--font-dm-sans)] text-xs text-white/40">
          We&apos;ll send personalized tips based on your results.
        </p>
        <a
          href="#waitlist"
          className="inline-flex items-center gap-2 rounded-[24px] bg-white px-8 py-3.5 font-[family-name:var(--font-dm-sans)] text-sm font-semibold text-[#0F3D2E] transition-colors hover:bg-[#E2F7F1]"
        >
          Save this for me
          <ArrowRight size={16} />
        </a>
      </div>

      <button
        onClick={onReset}
        className="mt-6 font-[family-name:var(--font-dm-sans)] text-sm text-white/40 underline transition-colors hover:text-white/60"
      >
        Take the quiz again
      </button>
    </motion.div>
  );
}

function QuizIntro({ onStart }: { onStart: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center"
    >
      <p className="font-[family-name:var(--font-dm-sans)] text-lg text-white/60">
        Let&apos;s be real...
      </p>
      <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl font-medium tracking-[-0.015em] text-white md:text-5xl lg:text-[60px]">
        What&apos;s your relationship
        <br />
        with money?
      </h2>
      <p className="mx-auto mt-6 max-w-lg font-[family-name:var(--font-dm-sans)] text-base leading-relaxed text-white/60">
        Everyone has a money personality — a default way of dealing with finances. Understanding
        yours is the first step toward making money work for you, not against you.
      </p>

      {/* Meta badges */}
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <span className="font-[family-name:var(--font-dm-mono)] text-xs tracking-[0.05em] text-[#63B59D] uppercase">
          Takes 5 mins
        </span>
        <span className="text-white/20">·</span>
        <span className="font-[family-name:var(--font-dm-mono)] text-xs tracking-[0.05em] text-[#63B59D] uppercase">
          No math
        </span>
        <span className="text-white/20">·</span>
        <span className="font-[family-name:var(--font-dm-mono)] text-xs tracking-[0.05em] text-[#63B59D] uppercase">
          Surprisingly fun
        </span>
      </div>

      {/* CTA button */}
      <button
        onClick={onStart}
        className="mt-10 inline-flex items-center gap-2 rounded-[24px] bg-white px-8 py-3.5 font-[family-name:var(--font-dm-sans)] text-sm font-semibold text-[#0F3D2E] transition-colors hover:bg-[#E2F7F1]"
      >
        Let&apos;s do this
        <ArrowRight size={16} />
      </button>

      {/* Badge row */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <span className="flex items-center gap-1.5 font-[family-name:var(--font-dm-mono)] text-xs text-white/40">
          <Sparkles size={12} /> Personalized Insights
        </span>
        <span className="flex items-center gap-1.5 font-[family-name:var(--font-dm-mono)] text-xs text-white/40">
          <Lock size={12} /> 100% private
        </span>
      </div>
    </motion.div>
  );
}

export function MoneyQuiz() {
  const [state, setState] = useState<"intro" | "quiz" | "result">("intro");
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const handleStart = useCallback(() => setState("quiz"), []);
  const handleReset = useCallback(() => {
    setState("intro");
    setCurrentStep(0);
    setAnswers({});
  }, []);

  const handleSelectOption = useCallback(
    (optionIndex: number) => {
      setAnswers((prev) => ({ ...prev, [currentStep]: optionIndex }));
      // Auto-advance after a short delay
      setTimeout(() => {
        if (currentStep < QUIZ_STEPS.length - 1) {
          setCurrentStep((prev) => prev + 1);
        } else {
          setState("result");
        }
      }, 400);
    },
    [currentStep]
  );

  const step = QUIZ_STEPS[currentStep];

  return (
    <section
      id="quiz"
      className="relative overflow-hidden bg-[#0F3D2E] px-4 py-20 md:px-8 md:py-28"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 h-[400px] w-[400px] translate-x-1/4 -translate-y-1/4 rounded-full bg-[#2FA47A]/10" />
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] -translate-x-1/4 translate-y-1/4 rounded-full bg-[#63B59D]/5" />

      <div className="relative mx-auto max-w-3xl">
        <AnimatePresence mode="wait">
          {state === "intro" && <QuizIntro key="intro" onStart={handleStart} />}

          {state === "quiz" && step && (
            <motion.div
              key={`step-${currentStep}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
            >
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between">
                  <span className="font-[family-name:var(--font-dm-mono)] text-xs tracking-[0.05em] text-[#63B59D] uppercase">
                    {step.stepLabel}
                  </span>
                  {currentStep > 0 && (
                    <button
                      onClick={() => setCurrentStep((prev) => prev - 1)}
                      className="flex items-center gap-1 font-[family-name:var(--font-dm-sans)] text-xs text-white/40 transition-colors hover:text-white/60"
                    >
                      <ArrowLeft size={12} /> Back
                    </button>
                  )}
                </div>
                <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-[#2FA47A]"
                    initial={{ width: 0 }}
                    animate={{
                      width: `${((currentStep + 1) / QUIZ_STEPS.length) * 100}%`,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Question */}
              <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-medium tracking-[-0.015em] text-white md:text-4xl">
                {step.question}
              </h3>

              {/* Options */}
              <div className="mt-8 space-y-3">
                {step.options.map((option, i) => {
                  const isSelected = answers[currentStep] === i;
                  return (
                    <motion.button
                      key={option}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.06 }}
                      onClick={() => handleSelectOption(i)}
                      className={`w-full rounded-2xl border px-5 py-4 text-left font-[family-name:var(--font-dm-sans)] text-sm transition-all ${
                        isSelected
                          ? "border-[#2FA47A] bg-[#2FA47A]/20 text-white"
                          : "border-white/10 bg-white/5 text-white/80 hover:border-white/20 hover:bg-white/10"
                      }`}
                    >
                      {option}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {state === "result" && <QuizResult key="result" onReset={handleReset} />}
        </AnimatePresence>

        {/* Bottom sub-nav (visible in intro state) */}
        {state === "intro" && (
          <div className="mt-16 flex flex-wrap justify-center gap-3">
            <a
              href="#how-it-works"
              className="rounded-[24px] border border-white/20 px-4 py-2 font-[family-name:var(--font-dm-sans)] text-xs text-white/50 transition-colors hover:text-white/70"
            >
              How inertia works
            </a>
            <a
              href="#quiz"
              className="rounded-[24px] border border-white/20 px-4 py-2 font-[family-name:var(--font-dm-sans)] text-xs text-white/50 transition-colors hover:text-white/70"
            >
              Learn about your habits
            </a>
            <a
              href="#waitlist"
              className="rounded-[24px] border border-white/20 px-4 py-2 font-[family-name:var(--font-dm-sans)] text-xs text-white/50 transition-colors hover:text-white/70"
            >
              Join our waitlist
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
