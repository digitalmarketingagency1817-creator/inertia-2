"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: scrolled ? 0 : -100 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 right-0 left-0 z-50 bg-[#FAFAF7]/95 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <Image
          src="/images/inertia-wordmark.png"
          alt="Inertia"
          width={100}
          height={28}
          className="h-7 w-auto"
        />

        {/* Desktop nav — pill buttons from Figma */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#how-it-works"
            className="rounded-[24px] border border-[#153828] px-5 py-2 font-[family-name:var(--font-dm-sans)] text-sm font-medium text-[#153828] transition-colors hover:bg-[#153828]/5"
          >
            How inertia works
          </a>
          <a
            href="#quiz"
            className="rounded-[24px] border border-[#153828] px-5 py-2 font-[family-name:var(--font-dm-sans)] text-sm font-medium text-[#153828] transition-colors hover:bg-[#153828]/5"
          >
            Learn about your habits
          </a>
          <a
            href="#waitlist"
            className="flex items-center gap-2 rounded-[24px] bg-[#153828] px-5 py-2 font-[family-name:var(--font-dm-sans)] text-sm font-medium text-white transition-colors hover:bg-[#0F3D2E]"
          >
            Join our waitlist
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-[#153828] md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[#C4DED0]/30 bg-[#FAFAF7] md:hidden"
          >
            <div className="flex flex-col gap-3 p-4">
              <a
                href="#how-it-works"
                onClick={() => setMobileOpen(false)}
                className="rounded-[24px] border border-[#153828] px-4 py-3 text-center text-sm font-medium text-[#153828]"
              >
                How inertia works
              </a>
              <a
                href="#quiz"
                onClick={() => setMobileOpen(false)}
                className="rounded-[24px] border border-[#153828] px-4 py-3 text-center text-sm font-medium text-[#153828]"
              >
                Learn about your habits
              </a>
              <a
                href="#waitlist"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 rounded-[24px] bg-[#153828] px-4 py-3 text-center text-sm font-medium text-white"
              >
                Join our waitlist
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
