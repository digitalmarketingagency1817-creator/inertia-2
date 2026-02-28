"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF7] px-6 pt-12 pb-8 md:px-12 md:pt-24 md:pb-16 lg:px-16 lg:pt-32 lg:pb-20">
      <div className="mx-auto grid max-w-[1400px] items-end gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
        {/* Left — headline */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-end"
        >
          <h2 className="font-[family-name:var(--font-playfair)] text-[42px] leading-[1.05] font-medium tracking-[-0.02em] text-[#153828] sm:text-[56px] md:text-[64px] lg:text-[72px] xl:text-[80px]">
            Your money doesn&apos;t need perfection, it needs direction.
          </h2>

          {/* Chevron scroll indicator — bottom left */}
          <motion.div
            className="mt-12"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown size={32} className="text-[#153828]" />
          </motion.div>
        </motion.div>

        {/* Right — hero lifestyle photo */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-start justify-end"
        >
          <div className="relative z-10 w-full overflow-hidden rounded-[28px] lg:w-[95%]">
            <Image
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=900&fit=crop&crop=faces"
              alt="Women laughing in the sun with sunglasses"
              width={800}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
