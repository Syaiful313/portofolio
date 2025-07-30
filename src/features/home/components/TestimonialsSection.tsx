"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/utils/testimonials";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoplay && !isHovered) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 6000);
    }

    return () => clearInterval(interval);
  }, [autoplay, isHovered, testimonials.length]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const visibleTestimonials = isMobile
    ? [testimonials[currentIndex]]
    : [
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length],
        testimonials[(currentIndex + 2) % testimonials.length],
      ];

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 0.9,
      transition: {
        duration: 0.4,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="testimonials"
      className="mx-4 bg-muted/30 py-32 text-[#d9c5a7] md:mx-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
            Client Testimonials
          </h2>
          <div className="mx-auto mb-8 h-1 w-20 bg-primary"></div>
          <p className="mx-auto max-w-2xl text-foreground/80">
            Don't just take my word for it. Here's what my clients have to say
            about working with me on their web development projects.
          </p>
        </motion.div>

        <div className="relative">
          <div className="mb-8 flex justify-center">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="mr-2"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <AnimatePresence mode="wait">
              {visibleTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${currentIndex}-${index}`}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className={index === 0 ? "md:col-span-1" : ""}
                >
                  <Card className="h-full border-none shadow-lg shadow-[#d9c5a7]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#d9c5a7]/40">
                    <CardContent className="flex h-full flex-col p-6">
                      <Quote className="mb-4 h-10 w-10 text-primary/30" />
                      <p className="mb-6 flex-grow italic text-foreground/80">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center">
                        <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                          <span className="font-semibold text-primary">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-foreground/70">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-8 flex justify-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setCurrentIndex(index);
                }}
                className={`mx-1 h-3 w-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? "bg-[#d9c5a7]" : "bg-[#d9c5a7]/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
