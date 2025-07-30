"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import BlurText from "@/components/BlurText";

const HomeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll();

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", isMobile ? "50%" : "100%"]
  );
  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", isMobile ? "25%" : "50%"]
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("home");
    if (element) {
      observer.observe(element);
    }

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const getAnimationConfig = () => {
    return {
      duration: isMobile ? 0.5 : 0.8,
      damping: isMobile ? 15 : 10,
      stiffness: isMobile ? 100 : 50,
    };
  };

  const config = getAnimationConfig();
  const particleCount = isMobile ? 10 : 20;

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-black via-black to-zinc-900"
    >
      <div className="container mx-auto">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{ y: backgroundY }}
        >
          <div className="bg-grid-pattern absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
        </motion.div>

        {/* Floating Particles */}
        {[...Array(particleCount)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-[#c4b5a0]/20"
            animate={{
              x: ["0%", `${Math.random() * 100}%`],
              y: ["0%", `${Math.random() * 100}%`],
              scale: [1, Math.random() + 0.5, 1],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * (isMobile ? 3 : 5) + (isMobile ? 3 : 5),
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        <div className="py-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: config.duration }}
            className="my-24 flex flex-col items-center justify-center text-center md:my-56"
          >
            <motion.div style={{ y: textY }} className="space-y-6">
              <motion.header
                initial={{ opacity: 0, x: isMobile ? -20 : -50 }}
                animate={{ 
                  opacity: isVisible ? 1 : 0, 
                  x: isVisible ? 0 : isMobile ? -20 : -50 
                }}
                transition={{ 
                  duration: config.duration, 
                  delay: 0.2,
                  type: "spring",
                  damping: config.damping,
                  stiffness: config.stiffness,
                }}
              >
                <h1 className="relative font-serif text-4xl leading-tight text-[#c4b5a0] sm:text-5xl md:text-7xl">
                  <BlurText
                    text="Muhammad Syaiful Mu'min"
                    delay={500}
                    animateBy="words"
                    direction="top"
                    className="inline-block"
                  />
                </h1>
              </motion.header>

              <motion.p
                initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                animate={{ 
                  opacity: isVisible ? 1 : 0, 
                  y: isVisible ? 0 : isMobile ? 10 : 20 
                }}
                transition={{ 
                  duration: config.duration, 
                  delay: 0.4,
                  type: "spring",
                  damping: config.damping,
                }}
                className="text-xl font-light text-[#d9c5a7] sm:text-2xl md:text-3xl lg:text-4xl"
              >
                I am Full-Stack Web Developer
              </motion.p>

              <motion.article
                initial={{ opacity: 0, x: isMobile ? 20 : 50 }}
                animate={{ 
                  opacity: isVisible ? 1 : 0, 
                  x: isVisible ? 0 : isMobile ? 20 : 50 
                }}
                transition={{ 
                  duration: config.duration, 
                  delay: 0.3,
                  type: "spring",
                  damping: config.damping,
                  stiffness: config.stiffness,
                }}
                className="prose prose-lg mx-auto mt-6 max-w-2xl text-[#d9c5a7]"
              >
                <p className="text-base sm:text-lg md:text-xl">
                  I create stunning and highly functional websites that blend
                  modern design with user-focused functionality. My mission is
                  to turn ideas into digital realities with precision and
                  creativity.
                </p>
                <p className="mt-4 text-sm italic text-gray-400 sm:text-base">
                  "Bringing your vision to life through code."
                </p>
              </motion.article>

              <motion.button
                initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                animate={{ 
                  opacity: isVisible ? 1 : 0, 
                  y: isVisible ? 0 : isMobile ? 10 : 20 
                }}
                transition={{ 
                  duration: isMobile ? 0.3 : 0.5, 
                  delay: 0.6,
                  type: "spring",
                  damping: isMobile ? 20 : 10,
                }}
                className="mt-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/#projects"
                  className="rounded-full bg-[#d9c5a7] px-6 py-3 text-sm font-medium text-black shadow-md transition-transform hover:scale-105 hover:bg-[#c8b397] focus:outline-none focus:ring-4 focus:ring-[#d9c5a7]/50 sm:text-base"
                >
                  Explore My Work
                </Link>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;