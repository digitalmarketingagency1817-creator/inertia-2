"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      className="fixed top-0 right-0 left-0 z-50 border-b border-inertia-tint/30 bg-inertia-cream/95 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <span className="font-serif text-2xl font-bold text-inertia-primary">Inertia</span>

        {/* Desktop nav */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#how-it-works"
            className="rounded-full border border-inertia-primary/20 px-4 py-2 text-sm font-medium text-inertia-primary transition-colors hover:bg-inertia-tint/40"
          >
            How Inertia works
          </a>
          <a
            href="#quiz"
            className="rounded-full border border-inertia-primary/20 px-4 py-2 text-sm font-medium text-inertia-primary transition-colors hover:bg-inertia-tint/40"
          >
            Learn about your habits
          </a>
          <Button
            asChild
            className="rounded-full bg-inertia-primary px-5 py-2 text-sm font-medium text-white hover:bg-inertia-secondary"
          >
            <a href="#waitlist">Join our waitlist →</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-inertia-primary md:hidden"
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
            className="overflow-hidden border-t border-inertia-tint/30 bg-inertia-cream md:hidden"
          >
            <div className="flex flex-col gap-3 p-4">
              <a
                href="#how-it-works"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-inertia-primary hover:bg-inertia-tint/40"
              >
                How Inertia works
              </a>
              <a
                href="#quiz"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-inertia-primary hover:bg-inertia-tint/40"
              >
                Learn about your habits
              </a>
              <a
                href="#waitlist"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl bg-inertia-primary px-4 py-3 text-center text-sm font-medium text-white"
              >
                Join our waitlist →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
