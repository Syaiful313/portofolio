"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const ProjectSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Blog App",
      image: "/assets/bloghub.png",
      link: "https://blog-jcwd-0510-fe.vercel.app/",
    },
    {
      title: "Web Ticket",
      image: "/assets/WebTicket.png",
      link: "https://starticket.vercel.app/",
    },
    {
      title: "Company Profile with cms",
      image: "/assets/CompanyProfile.png",
      link: "https://strategik.vercel.app/",
    },
    {
      title: "Blog with CMS",
      image: "/assets/BlogCms.png",
      link: "https://blog-cms-muhammad-syaiful.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="container mx-auto my-12 min-h-screen bg-black p-8">
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

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
            }}
            className="group relative h-52 overflow-hidden rounded-xl md:h-96"
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative h-full w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover brightness-75 transition-transform duration-300 group-hover:scale-110 group-hover:brightness-50"
              />

              <AnimatePresence>
                {hoveredProject === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/50"
                  >
                    <div className="text-center">
                      <h3 className="mb-4 text-2xl text-[#d9c5a7]">
                        {project.title}
                      </h3>
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full text-[#d9c5a7] bg-[#1a1a1a] px-6 py-2  transition-all hover:bg-opacity-90"
                      >
                        View Project
                      </Link>
                    </div>
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
