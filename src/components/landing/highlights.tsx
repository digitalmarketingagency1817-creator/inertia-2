"use client";

import { AnimatedSection } from "./animated-section";

export function Highlights() {
  return (
    <AnimatedSection className="bg-[#FAFAF7] px-6 md:px-12 lg:px-20 py-20 md:py-28">
      <div className="mx-auto max-w-[846px]">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — numbered circle + content */}
          <div className="flex flex-col items-start">
            {/* Numbered circle with connecting lines above and below */}
            <div className="flex flex-col items-center">
              {/* Line above */}
              <div
                style={{
                  width: 1,
                  height: 48,
                  backgroundColor: "#C4DED0",
                }}
              />
              <div
                className="flex items-center justify-center rounded-full border"
                style={{
                  width: 56,
                  height: 56,
                  borderColor: "#0F3D2E",
                  backgroundColor: "transparent",
                }}
              >
                <span
                  className="font-[family-name:var(--font-dm-mono)]"
                  style={{
                    fontSize: 18,
                    fontWeight: 400,
                    color: "#0F3D2E",
                    letterSpacing: "0.02em",
                  }}
                >
                  02
                </span>
              </div>
              {/* Line below */}
              <div
                style={{
                  width: 1,
                  height: 48,
                  backgroundColor: "#C4DED0",
                }}
              />
            </div>

            <h2
              className="font-[family-name:var(--font-playfair)] font-medium mt-6"
              style={{
                fontSize: "clamp(28px, 3.5vw, 48px)",
                lineHeight: 1.2,
                color: "#0F3D2E",
              }}
            >
              Highlights what matters
            </h2>
            <p
              className="font-[family-name:var(--font-dm-sans)] mt-4"
              style={{
                fontSize: "clamp(16px, 1.5vw, 20px)",
                lineHeight: 1.6,
                color: "#8C938E",
                maxWidth: 380,
              }}
            >
              Surfaces a small set of money decisions worth your attention today.
            </p>
          </div>

          {/* Right — decorative / empty */}
          <div />
        </div>
      </div>
    </AnimatedSection>
  );
}
