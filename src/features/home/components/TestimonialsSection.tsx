"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/utils/testimonials";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";

type Viewport = "mobile" | "tablet" | "desktop";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [viewport, setViewport] = useState<Viewport>("desktop");

  const isMobile = viewport === "mobile";
  const isTablet = viewport === "tablet";

  useEffect(() => {
    const resolveViewport = (width: number): Viewport => {
      if (width < 768) return "mobile";
      if (width < 1024) return "tablet";
      return "desktop";
    };

    const handleResize = () => {
      setViewport(resolveViewport(window.innerWidth));
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [autoplay]);

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

  const visibleTestimonials = (() => {
    if (isMobile) {
      return [testimonials[currentIndex]];
    }
    if (isTablet) {
      return [
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length],
      ];
    }
    return [
      testimonials[currentIndex],
      testimonials[(currentIndex + 1) % testimonials.length],
      testimonials[(currentIndex + 2) % testimonials.length],
    ];
  })();

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-b from-black via-black to-zinc-900 py-20 text-[#d9c5a7] sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <div className="bg-grid-pattern absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
      </div>

      <div className="container relative mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
            Client Testimonials
          </h2>
          <div className="mx-auto mb-6 h-1 w-20 bg-[#d9c5a7] sm:mb-8"></div>
          <p className="mx-auto max-w-2xl text-sm text-[#d9c5a7]/80 sm:text-base">
            Don't just take my word for it. Here's what my clients have to say
            about working with me on their web development projects.
          </p>
        </motion.div>

        <div className="relative">
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="h-11 w-11 rounded-full border-[#d9c5a7]/40 text-[#d9c5a7] shadow-md shadow-black/20 hover:bg-[#d9c5a7]/10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="h-11 w-11 rounded-full border-[#d9c5a7]/40 text-[#d9c5a7] shadow-md shadow-black/20 hover:bg-[#d9c5a7]/10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full border border-[#d9c5a7]/10 bg-black/40 shadow-lg shadow-black/30 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[#d9c5a7]/30">
                  <CardContent className="flex h-full flex-col p-6 sm:p-7">
                    <Quote className="mb-4 h-8 w-8 text-[#d9c5a7]/40 sm:h-10 sm:w-10" />
                    <p className="mb-6 flex-grow text-sm italic text-[#d9c5a7]/85 sm:text-base">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center">
                      <div>
                        <h4 className="font-semibold text-[#d9c5a7]">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-[#d9c5a7]/70 sm:text-sm">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setCurrentIndex(index);
                }}
                className={`mx-1 h-2.5 w-2.5 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-[#d9c5a7]"
                    : "bg-[#d9c5a7]/30 hover:bg-[#d9c5a7]/50"
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
