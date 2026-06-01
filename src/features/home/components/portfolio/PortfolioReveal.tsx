"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type PortfolioRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const PortfolioReveal = ({
  children,
  className,
  delay = 0,
}: PortfolioRevealProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.5,
        delay: shouldReduceMotion ? 0 : delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default PortfolioReveal;
