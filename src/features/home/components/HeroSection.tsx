"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="scroll-mt-24 overflow-hidden border-b border-[color:var(--color-olive-stone)]"
    >
      <div className="section-shell grid min-h-[calc(100vh-112px)] items-center py-16 lg:grid-cols-[1.25fr_0.75fr] lg:gap-10 lg:py-20">
        <div className="relative z-10 space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
            className="curly-label"
          >
            {`{ Full-stack web developer }`}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: 0.05 }}
            className="max-w-4xl text-[clamp(3.4rem,11vw,9rem)] leading-[0.92] tracking-[-0.05em] text-[color:var(--color-cream-glow)]"
          >
            Building sharp, fast websites that feel{" "}
            <span className="text-[color:var(--color-pulse-green)]">
              intentional
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: 0.12 }}
            className="max-w-2xl text-base leading-relaxed text-[color:var(--color-ash-gray)] sm:text-lg"
          >
            Saya merancang dan membangun pengalaman web yang rapi, cepat, dan
            mudah dipakai. Fokusnya ada pada tipografi, struktur, performa, dan
            detail kecil yang membuat brand terasa lebih serius.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: 0.18 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Link href="#portfolios" className="pill-link">
              Explore projects
            </Link>
            <Link href="/contact" className="pill-link">
              Start a project
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: 0.12 }}
          className="relative mt-12 lg:mt-0"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[28rem] rounded-[8px] border border-[color:var(--color-olive-stone)] bg-[linear-gradient(145deg,rgba(10,228,72,0.18),rgba(157,149,255,0.18)_52%,rgba(0,186,226,0.18))] p-4">
            <div className="absolute inset-0 rounded-[8px] border border-[rgba(255,252,225,0.1)]" />
            <div className="absolute left-4 top-4 rounded-full border border-[color:var(--color-cream-glow)] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[color:var(--color-cream-glow)]">
              Selected work
            </div>
            <div className="absolute bottom-4 left-4 right-4 space-y-3 rounded-[8px] border border-[color:var(--color-olive-stone)] bg-[rgba(14,16,15,0.4)] p-4 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.22em] text-[color:var(--color-ash-gray)]">
                Approach
              </p>
              <p className="text-sm leading-relaxed text-[color:var(--color-cream-glow)]">
                Editorial layouts, clean interaction states, and restrained
                motion used to guide attention without noise.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
