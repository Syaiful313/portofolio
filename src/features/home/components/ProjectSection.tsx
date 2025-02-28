"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { features } from "@/constanst/feature";

const ProjectSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section
      id="projects"
      className="container mx-auto min-h-screen px-4 sm:px-6 lg:px-8"
    >
      <div className="flex items-center justify-between pt-16 sm:pt-20 md:pt-28">
        <h1 className="font-serif text-4xl text-[#d9c5a7] sm:text-6xl md:text-8xl">
          Projects
        </h1>
      </div>
      <div className="mb-20 flex flex-col space-y-8 py-8 md:flex-row md:space-y-0 md:py-16">
        <div className="flex w-full flex-col justify-center p-4 shadow-md sm:p-6 md:w-1/2 md:p-8">
          <div className="mb-6 sm:mb-8 md:mb-12">
            <span className="text-xs font-medium tracking-wide text-[#d9c5a7] sm:text-sm">
              {String(activeFeature + 1).padStart(2, "0")} /{" "}
              {String(features.length).padStart(2, "0")}
            </span>
          </div>

          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`cursor-pointer border-l-4 py-2 pl-2 transition-all duration-300 sm:py-3 sm:pl-4 ${
                  activeFeature === index
                    ? "border-[#d9c5a7] opacity-100"
                    : "border-transparent opacity-60 hover:border-[#d9c5a7] hover:opacity-80"
                }`}
                onClick={() => setActiveFeature(index)}
                whileHover={{ x: activeFeature === index ? 0 : 5 }}
              >
                <h2
                  className={`text-xl sm:text-2xl md:text-3xl ${
                    activeFeature === index
                      ? "text-[#d9c5a7]"
                      : "text-[#d9c5a7]/70"
                  }`}
                >
                  {feature.title}
                </h2>

                {activeFeature === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-1 pr-4 text-xs text-[#d9c5a7] sm:mt-2 sm:pr-8 sm:text-sm"
                  >
                    {feature.description}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <div className="relative mb-4 h-[200px] w-full sm:mb-6 sm:h-[250px] md:h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                <Image
                  src={features[activeFeature].image}
                  alt={features[activeFeature].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl font-light text-[#d9c5a7] sm:text-2xl md:text-3xl"
              >
                {features[activeFeature].title}
              </motion.h3>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "40px sm:w-[60px] md:w-[80px]" }}
                transition={{ delay: 0.5 }}
                className="mt-1 h-0.5 bg-[#d9c5a7] sm:h-1"
              />
            </div>
            <button
              onClick={() => setShowDetails(true)}
              className="rounded-md bg-[#d9c5a7]/20 px-2 py-1 text-xs text-[#d9c5a7] transition-colors hover:bg-[#d9c5a7]/30 sm:px-3 sm:py-1.5 sm:text-sm md:px-4 md:py-2"
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      {showDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 sm:p-6">
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-[#1a1a1a] p-4 sm:p-6 md:p-8">
            <button
              onClick={() => setShowDetails(false)}
              className="absolute right-2 top-2 text-xl font-bold text-gray-600 hover:text-gray-900 sm:right-4 sm:top-4 sm:text-2xl"
            >
              &times;
            </button>
            <h2 className="mb-4 text-2xl font-bold text-[#d9c5a7] sm:mb-6 sm:text-3xl md:text-4xl">
              {features[activeFeature].title}
            </h2>

            <div className="grid gap-4 text-[#d9c5a7] sm:gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-xl font-semibold sm:mb-4 sm:text-2xl">
                  Project Overview
                </h3>
                <p className="mb-2 text-xs sm:mb-4 sm:text-sm">
                  {features[activeFeature].description}
                </p>
                <p className="text-xs font-bold sm:text-sm">
                  Technologies: {features[activeFeature].Technologies}
                </p>
                <a
                  href={features[activeFeature].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block rounded bg-[#d9c5a7] px-2 py-1 text-xs text-[#1a1a1a] transition hover:bg-opacity-80 sm:mt-4 sm:px-4 sm:py-2 sm:text-sm"
                >
                  View Project
                </a>
              </div>

              <div className="mt-4 text-[#d9c5a7] md:mt-0">
                <h3 className="mb-2 text-xl font-semibold sm:mb-4 sm:text-2xl">
                  Project Details
                </h3>
                <div className="space-y-2 sm:space-y-4">
                  {[
                    {
                      label: "Situation",
                      content: features[activeFeature].Situation,
                    },
                    { label: "Task", content: features[activeFeature].Task },
                    {
                      label: "Action",
                      content: features[activeFeature].Action,
                    },
                    {
                      label: "Result",
                      content: features[activeFeature].Result,
                    },
                  ].map((section, index) => (
                    <div key={index}>
                      <h4 className="text-xs font-bold sm:text-sm">
                        {section.label}
                      </h4>
                      <p className="text-xs sm:text-sm">{section.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectSection;
