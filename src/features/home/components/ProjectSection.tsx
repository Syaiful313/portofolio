"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Blog App",
    image: "/assets/bloghub.png",
    link: "https://blog-jcwd-0510-fe.vercel.app/",
    description: "A modern blog application built with Next.js and Supabase.",
  },
  {
    title: "Web Ticket",
    image: "/assets/WebTicket.png",
    link: "https://starticket.vercel.app/",
    description: "An online ticket booking platform with real-time seat updates.",
  },
  {
    title: "Company Profile with CMS",
    image: "/assets/CompanyProfile.png",
    link: "https://strategik.vercel.app/",
    description: "A company profile website powered by Contentful CMS.",
  },
  {
    title: "Blog with CMS",
    image: "/assets/BlogCms.png",
    link: "https://blog-cms-muhammad-syaiful.vercel.app/",
    description: "A dynamic blog system integrated with a headless CMS.",
  },
];

const ProjectSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="container mx-auto my-12 min-h-screen p-8 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl mt-20 font-serif font-semibold tracking-wide text-[#d9c5a7] md:text-6xl">
          Selected Projects
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="group relative h-52 overflow-hidden rounded-xl md:h-96 cursor-pointer"
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
            role="button"
          >
            <div className="relative h-full w-full">
              <Image
                src={project.image}
                alt={`Preview of ${project.title}`}
                fill
                priority={index === 0} // Prioritizing first image
                className="object-cover brightness-75 transition-transform duration-300 group-hover:scale-110 group-hover:brightness-50"
              />

              <AnimatePresence>
                {hoveredProject === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 p-6 text-center"
                  >
                    <h3 className="mb-2 text-3xl font-light text-[#d9c5a7]">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-lg font-serif text-[#d9c5a7] opacity-90">
                      {project.description}
                    </p>
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-full text-[#d9c5a7] bg-[#1a1a1a] px-6 py-2 transition-all hover:bg-opacity-90 hover:scale-105"
                    >
                      View Detail
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
