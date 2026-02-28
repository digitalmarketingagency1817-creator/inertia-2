"use client";

import { AnimatedSection } from "./animated-section";

const billItems = [
  { category: "LOANS", amount: "$900.00" },
  { category: "RENT", amount: "$1,000.00" },
  { category: "COFFEE", amount: "$6.00" },
  { category: "CAR PAYMENT", amount: "$450.00" },
];

export function DailyDecisions() {
  return (
    <AnimatedSection id="how-it-works" className="bg-[#FAFAF7] py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-[846px] mx-auto">
        {/* Headline */}
        <h2
          className="font-[family-name:var(--font-playfair)] font-medium text-center mx-auto mb-16 md:mb-20"
          style={{
            fontSize: "clamp(36px, 5vw, 65px)",
            lineHeight: 1.4,
            color: "#0F3D2E",
            maxWidth: 783,
          }}
        >
          We help you make a few money decisions each day
        </h2>

        {/* Card + Annotation layout */}
        <div className="relative flex justify-end">
          {/* Annotation: curved arrow + text */}
          <div className="absolute left-0 bottom-4 md:bottom-8 w-[280px] md:w-[320px]">
            {/* Curved arrow SVG */}
            <svg
              width="180"
              height="200"
              viewBox="0 0 180 200"
              fill="none"
              className="absolute -top-[190px] left-[40px] md:left-[60px]"
              style={{ pointerEvents: "none" }}
            >
              <path
                d="M10 195 C 10 80, 60 30, 160 15"
                stroke="#0F3D2E"
                strokeWidth="1.2"
                fill="none"
                strokeLinecap="round"
              />
              {/* Arrowhead */}
              <path
                d="M155 10 L162 16 L153 19"
                stroke="#0F3D2E"
                strokeWidth="1.2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {/* Annotation text */}
            <p
              className="font-[family-name:var(--font-inter)]"
              style={{
                fontSize: "clamp(17px, 1.8vw, 23px)",
                lineHeight: 1.35,
                color: "#0F3D2E",
                fontWeight: 400,
                transform: "rotate(-8deg)",
                transformOrigin: "top left",
              }}
            >
              When everything feels
              <br />
              urgent, nothing gets
              <br />
              resolved
            </p>
          </div>

          {/* Bill Card */}
          <div
            className="relative z-10"
            style={{
              width: 257,
              background: "#FFFFFF",
              borderRadius: 12.8,
              boxShadow: "0 4px 24px rgba(0, 0, 0, 0.08)",
              overflow: "hidden",
            }}
          >
            {billItems.map((item, idx) => (
              <div
                key={item.category}
                className="relative"
                style={{
                  padding: "16px 20px",
                  borderTop: idx > 0 ? "1px solid #E8E5DF" : "none",
                }}
              >
                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-3 bottom-3"
                  style={{
                    width: 3,
                    backgroundColor: "#D4D0C8",
                    borderRadius: 2,
                  }}
                />
                {/* Category pill */}
                <span
                  className="font-[family-name:var(--font-dm-mono)] inline-block uppercase"
                  style={{
                    fontSize: 19,
                    fontWeight: 400,
                    color: "#000000",
                    backgroundColor: "#EFAD87",
                    borderRadius: 7.4,
                    padding: "4px 8px",
                    lineHeight: 1.2,
                    marginBottom: 6,
                  }}
                >
                  {item.category}
                </span>
                {/* Amount */}
                <div
                  className="font-[family-name:var(--font-dm-mono)]"
                  style={{
                    fontSize: 25.6,
                    fontWeight: 400,
                    color: "#000000",
                    lineHeight: 1.3,
                  }}
                >
                  {item.amount}
                </div>
                {/* Amount Due label */}
                <div
                  className="font-[family-name:var(--font-dm-mono)] uppercase"
                  style={{
                    fontSize: 16.75,
                    fontWeight: 400,
                    color: "#8C938E",
                    lineHeight: 1.3,
                    letterSpacing: "0.02em",
                  }}
                >
                  AMOUNT DUE
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
