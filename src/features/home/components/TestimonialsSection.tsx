"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO",
    company: "Tech Innovations Inc.",
    quote:
      "This product has transformed our business operations completely. The scalability and intuitive design are unprecedented.",
    background: "bg-[#1a1a1a]",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Lead Developer",
    company: "Software Solutions LLC",
    quote:
      "Incredible performance and support. The integration was seamless, and our team's productivity skyrocketed.",
    background: "bg-[#1a1a1a]",
  },
  {
    id: 3,
    name: "Mike Johnson",
    position: "Marketing Director",
    company: "Global Brands",
    quote:
      "A game-changing solution that has significantly improved our team's efficiency and communication strategies.",
    background: "bg-[#1a1a1a]",
  },
  {
    id: 4,
    name: "Emily Chen",
    position: "Product Manager",
    company: "Digital Dynamics",
    quote:
      "The most intuitive and powerful tool we've used. It's revolutionized how we approach product development.",
    background: "bg-[#1a1a1a]",
  },
  {
    id: 5,
    name: "David Rodriguez",
    position: "CTO",
    company: "Innovative Solutions",
    quote:
      "Exceptional performance, seamless integration, and support that goes above and beyond expectations.",
    background: "bg-[#1a1a1a]",
  },
  {
    id: 6,
    name: "Sarah Kim",
    position: "Founder",
    company: "Startup Accelerator",
    quote:
      "This solution has been instrumental in scaling our business, providing insights and tools we never thought possible.",
    background: "bg-[#1a1a1a]",
  },
];

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const cardVariants = {
    initial: { opacity: 0, scale: 0.9, x: 100 },
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      x: -100,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const navigationVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <motion.section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#1a1a1a] py-10 md:py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 1 }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -50 }}
          transition={{ duration: 0.7 }}
          className="mb-8 md:mb-16 text-center"
        >
          <h2 className="mb-2 font-serif text-2xl font-bold text-[#d9c5a7] md:mb-4 md:text-4xl">
            Client Testimonials
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-[#d9c5a7]/80 md:text-base">
            Hear directly from industry leaders who have transformed their
            businesses with our innovative solutions.
          </p>
        </motion.div>

        <div className="relative mx-auto w-full max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className={`relative rounded-2xl p-4 md:p-8 shadow-2xl ${currentTestimonial.background}`}
            >
              <div className="mb-4 md:mb-6 flex items-start">
                <Quote
                  className="mr-3 md:mr-6 flex-shrink-0 text-[#d9c5a7]/50"
                  size={30}
                  strokeWidth={1.5}
                />
                <p className="text-base md:text-lg italic leading-relaxed text-[#d9c5a7]">
                  "{currentTestimonial.quote}"
                </p>
              </div>

              <div className="mt-4 md:mt-8 flex items-center justify-between">
                <div className="flex items-center">
                  <div>
                    <h3 className="text-base font-semibold text-[#d9c5a7] md:text-xl">
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-xs text-[#d9c5a7]/80 md:text-base">
                      {currentTestimonial.position} at{" "}
                      {currentTestimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            variants={navigationVariants}
            initial="initial"
            animate="animate"
            className="mt-6 md:mt-12 flex items-center justify-center space-x-2 md:space-x-4"
          >
            <motion.button
              onClick={handlePrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-full bg-[#1a1a1a] p-2 md:p-3"
            >
              <ChevronLeft className="text-[#d9c5a7]" size={20} />
            </motion.button>

            <div className="flex space-x-1 md:space-x-2">
              {testimonials.map((_, index) => (
                <motion.div
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 md:h-4 md:w-4 cursor-pointer rounded-full ${
                    index === currentIndex
                      ? "bg-[#d9c5a7]"
                      : "bg-[#d9c5a7]/30 hover:bg-[#d9c5a7]/50"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-full bg-[#1a1a1a] p-2 md:p-3"
            >
              <ChevronRight className="text-[#d9c5a7]" size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Background decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: isInView ? 0.1 : 0,
          scale: isInView ? 1 : 0.5,
        }}
        transition={{ duration: 1 }}
        className="absolute -right-20 -top-20 h-60 w-60 md:h-96 md:w-96 rounded-full bg-[#d9c5a7]/10 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: isInView ? 0.1 : 0,
          scale: isInView ? 1 : 0.5,
        }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute -bottom-20 -left-20 h-60 w-60 md:h-96 md:w-96 rounded-full bg-[#d9c5a7]/10 blur-3xl"
      />
    </motion.section>
  );
};

export default TestimonialSection;