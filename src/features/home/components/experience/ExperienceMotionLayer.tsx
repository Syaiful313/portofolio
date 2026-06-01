"use client";

import { useFloatingParticles } from "@/hooks/useFloatingParticles";
import { useViewport } from "@/hooks/useViewport";
import { motion, useScroll, useTransform } from "framer-motion";

const ExperienceMotionLayer = () => {
  const viewport = useViewport();
  const { particles, shouldReduceMotion } = useFloatingParticles(viewport, {
    mobileBaseDuration: 3.5,
    tabletBaseDuration: 4.5,
  });
  const { scrollYProgress } = useScroll();

  const isMobile = viewport === "mobile";
  const isTablet = viewport === "tablet";

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", isMobile ? "40%" : isTablet ? "70%" : "100%"],
  );

  return (
    <>
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-5"
        style={shouldReduceMotion ? undefined : { y: backgroundY }}
      >
        <div className="bg-grid-pattern pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black to-transparent" />
      </motion.div>

      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-[#c4b5a0]/20"
          animate={{
            x: ["0%", `${particle.xTo}%`],
            y: ["0%", `${particle.yTo}%`],
            scale: [1, particle.scale, 1],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
        />
      ))}
    </>
  );
};

export default ExperienceMotionLayer;
