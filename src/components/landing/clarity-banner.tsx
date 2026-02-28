"use client";

export function ClarityBanner() {
  return (
    <section
      className="w-full flex flex-col justify-center"
      style={{
        backgroundColor: "#0F3D2E",
        minHeight: "clamp(500px, 65vw, 933px)",
        paddingLeft: "clamp(24px, 18vw, 265px)",
        paddingRight: "clamp(24px, 18vw, 265px)",
      }}
    >
      <h1
        className="font-normal"
        style={{
          fontFamily: "var(--font-frank), serif",
          fontSize: "clamp(40px, 5.5vw, 80px)",
          letterSpacing: "-0.8px",
          lineHeight: "1.291",
          maxWidth: "904px",
        }}
      >
        <span style={{ color: "#FAFAF7" }}>Inertia brings clarity to </span>
        <span style={{ color: "#C4DED0" }}>money decisions.</span>
      </h1>

      <a
        href="#waitlist"
        className="group mt-[17px] inline-flex items-center justify-center gap-2 w-[226px] h-[48px] rounded-full border border-white bg-transparent transition-colors duration-200 ease-in-out hover:bg-white"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="text-white group-hover:text-[#0F3D2E] transition-colors duration-200 ease-in-out"
        >
          <path
            d="M8 1l2.12 4.3 4.74.69-3.43 3.34.81 4.72L8 11.77l-4.24 2.28.81-4.72L1.14 5.99l4.74-.69L8 1z"
            fill="currentColor"
          />
        </svg>
        <span
          className="text-[16px] font-normal text-[#FAFAF7] group-hover:text-[#0F3D2E] transition-colors duration-200 ease-in-out"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Find my direction
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="text-white group-hover:text-[#0F3D2E] transition-colors duration-200 ease-in-out"
        >
          <path
            d="M3.333 8h9.334M8.667 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </section>
  );
}
