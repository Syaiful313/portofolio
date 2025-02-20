"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { motion, useScroll, useTransform } from 'framer-motion';

const HomeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("home");
      if (element) {
        const position = element.getBoundingClientRect();
        setIsVisible(position.top < window.innerHeight && position.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-black via-black to-zinc-900"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{ y: backgroundY }}
      >
        <div className="bg-grid-pattern absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
      </motion.div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
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
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="container relative mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <motion.div 
            style={{ y: textY }}
            className="space-y-6"
          >
            <motion.header
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="font-serif text-4xl leading-tight text-[#c4b5a0] sm:text-5xl md:text-7xl">
                Muhammad Syaiful Mu'min
                <motion.svg
                  className="absolute -bottom-3 left-1/2 h-2 w-32 -translate-x-1/2 transform text-[#c4b5a0]/30"
                  viewBox="0 0 100 8"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: isVisible ? 1 : 0 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                >
                  <motion.path
                    d="M0 4 Q25 0, 50 4 T100 4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </motion.svg>
              </h1>
            </motion.header>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl font-light text-[#d9c5a7] sm:text-2xl md:text-3xl lg:text-4xl"
            >
              I am Fullstack Web Developer
            </motion.p>

            <motion.article
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="prose prose-lg mx-auto mt-6 max-w-2xl text-[#d9c5a7]"
            >
              <p className="text-base sm:text-lg md:text-xl">
                I create stunning and highly functional websites that blend modern
                design with user-focused functionality. My mission is to turn ideas
                into digital realities with precision and creativity.
              </p>
              <p className="mt-4 text-sm italic text-gray-400 sm:text-base">
                "Bringing your vision to life through code."
              </p>
            </motion.article>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10"
            >
              <Link
                href="#projects"
                className="rounded-full bg-[#d9c5a7] px-6 py-3 text-sm font-medium text-black shadow-md transition-transform hover:scale-105 hover:bg-[#c8b397] focus:outline-none focus:ring-4 focus:ring-[#d9c5a7]/50 sm:text-base"
              >
                Explore My Work
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;