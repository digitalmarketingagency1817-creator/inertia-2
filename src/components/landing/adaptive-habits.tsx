"use client";

import { AnimatedSection } from "./animated-section";

function PlusIcon() {
  return (
    <svg
      width="44"
      height="48"
      viewBox="0 0 44 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      {/* Vertical line */}
      <line x1="22" y1="4" x2="22" y2="44" stroke="#C0BCB5" strokeWidth="1.5" />
      {/* Horizontal line */}
      <line x1="2" y1="24" x2="42" y2="24" stroke="#C0BCB5" strokeWidth="1.5" />
    </svg>
  );
}

export function AdaptiveHabits() {
  return (
    <AnimatedSection className="bg-[#FAFAF7] px-6 md:px-12 lg:px-20 pb-20 md:pb-28">
      <div className="max-w-[846px] mx-auto">
        {/* Serif subheading */}
        <h3
          className="font-[family-name:var(--font-playfair)] font-medium"
          style={{
            fontSize: "clamp(36px, 5vw, 65px)",
            lineHeight: "65.4px",
            color: "#0F3D2E",
          }}
        >
          that adapt to your habits
        </h3>

        {/* Keyword rows */}
        <div className="mt-6 md:mt-8 flex flex-col gap-4 md:gap-6">
          {/* Row 1: + needs + goals + */}
          <div
            className="flex items-center flex-wrap"
            style={{ gap: "16px 24px" }}
          >
            <PlusIcon />
            <span
              className="font-[family-name:var(--font-inter)]"
              style={{
                fontSize: "clamp(32px, 4.5vw, 56px)",
                fontWeight: 400,
                color: "#0F3D2E",
                lineHeight: 1.15,
              }}
            >
              needs
            </span>
            <PlusIcon />
            <span
              className="font-[family-name:var(--font-inter)]"
              style={{
                fontSize: "clamp(32px, 4.5vw, 56px)",
                fontWeight: 400,
                color: "#0F3D2E",
                lineHeight: 1.15,
              }}
            >
              goals
            </span>
            <PlusIcon />
          </div>

          {/* Row 2: plans + life */}
          <div
            className="flex items-center flex-wrap"
            style={{ gap: "16px 24px" }}
          >
            <span
              className="font-[family-name:var(--font-inter)]"
              style={{
                fontSize: "clamp(32px, 4.5vw, 56px)",
                fontWeight: 400,
                color: "#0F3D2E",
                lineHeight: 1.15,
              }}
            >
              plans
            </span>
            <PlusIcon />
            <span
              className="font-[family-name:var(--font-inter)]"
              style={{
                fontSize: "clamp(32px, 4.5vw, 56px)",
                fontWeight: 400,
                color: "#0F3D2E",
                lineHeight: 1.15,
              }}
            >
              life
            </span>
          </div>
        </div>

        {/* Footnote */}
        <p
          className="font-[family-name:var(--font-inter)] mt-10 md:mt-14"
          style={{
            fontSize: "clamp(17px, 1.8vw, 23px)",
            fontWeight: 400,
            color: "#0F3D2E",
            lineHeight: 1.35,
          }}
        >
          (Not the version of you that budgets perfectly)
        </p>
      </div>
    </AnimatedSection>
  );
}
