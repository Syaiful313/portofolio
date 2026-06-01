"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";

type ExperienceRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  parallax?: boolean;
};

const ExperienceReveal = ({
  children,
  className,
  delay = 0,
  parallax = false,
}: ExperienceRevealProps) => {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.5,
        delay: shouldReduceMotion ? 0 : delay,
      }}
      style={parallax && !shouldReduceMotion ? { y } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ExperienceReveal;
