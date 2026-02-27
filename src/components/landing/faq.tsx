"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedSection } from "./animated-section";

const QUESTIONS = [
  {
    q: "How is Inertia different from other budgeting apps?",
    a: "Most budgeting apps give you a spreadsheet and expect discipline. Inertia uses behavioral psychology to guide you through small daily decisions that naturally build better habits — no willpower required.",
  },
  {
    q: "Do I need to connect my bank account?",
    a: "You can, but you don't have to. Inertia works with manual input too. We believe in meeting you where you are — if connecting accounts feels uncomfortable, start without it.",
  },
  {
    q: "Is my financial data safe?",
    a: "Absolutely. We use bank-level encryption, never sell your data, and you can delete everything at any time. Your finances are yours — we just help you understand them better.",
  },
  {
    q: "What does 'adaptive' actually mean?",
    a: "Inertia learns from your patterns over time. If you tend to overspend on weekends, we'll gently nudge you on Friday. If you save more in January, we'll factor that in. It's personal finance that's actually personal.",
  },
  {
    q: "When will Inertia launch?",
    a: "We're currently in private beta. Join the waitlist to get early access — we're rolling out invites in waves and prioritizing people who sign up early.",
  },
  {
    q: "Is Inertia free?",
    a: "We'll offer a generous free tier that covers the essentials. Premium features like advanced insights, family sharing, and priority support will be available in paid plans.",
  },
];

export function FAQ() {
  return (
    <AnimatedSection className="bg-inertia-cream px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-serif text-3xl leading-tight font-bold text-inertia-primary md:text-4xl lg:text-5xl">
          Things we&apos;d ask you
        </h2>
        <p className="mt-4 text-center text-base text-inertia-secondary/60">
          (and things you might ask us)
        </p>

        <Accordion type="single" collapsible className="mt-12">
          {QUESTIONS.map((item, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border-b border-inertia-tint/30"
            >
              <AccordionTrigger className="py-5 text-left font-sans text-base font-semibold text-inertia-primary hover:text-inertia-accent hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-inertia-secondary/70">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </AnimatedSection>
  );
}
