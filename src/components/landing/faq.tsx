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
  {
    q: "Can Inertia help if I'm already in debt?",
    a: "Yes. Inertia doesn't judge where you're starting from. It helps you see what to focus on first, break things into manageable steps, and build momentum — regardless of your current situation.",
  },
];

export function FAQ() {
  return (
    <AnimatedSection className="bg-[#FAFAF7] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-[family-name:var(--font-frank)] text-3xl leading-tight font-medium tracking-[-0.01em] text-[#153828] md:text-4xl lg:text-[56px]">
          Things we&apos;d ask too
        </h2>

        <Accordion type="single" collapsible className="mt-12">
          {QUESTIONS.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-b border-[#C4DED0]/30">
              <AccordionTrigger className="py-5 text-left font-[family-name:var(--font-dm-sans)] text-base font-semibold text-[#153828] hover:text-[#2FA47A] hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 font-[family-name:var(--font-dm-sans)] text-sm leading-relaxed text-[#8C938E]">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </AnimatedSection>
  );
}
