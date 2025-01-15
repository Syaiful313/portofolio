"use client";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialLinks = [
  { href: "#", icon: FaFacebook, name: "Facebook" },
  { href: "#", icon: FaLinkedin, name: "LinkedIn" },
  { href: "#", icon: FaTwitter, name: "Twitter" },
  { href: "#", icon: FaGithub, name: "GitHub" },
];

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen py-96 bg-black text-white">
      <div className="container mx-auto max-w-screen-xl px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="pr-8 animate-fadeIn">
            <h2 className="text-5xl font-serif text-[#c4b5a0] mb-6 leading-tight sm:text-center md:text-left">
              A website that leaves <br />
              <span className="italic text-[#d9c5a7]">a lasting impression!</span>
            </h2>
          </div>

          <div className="pl-8 animate-fadeIn delay-1">
            <p className="text-lg text-[#d9c5a7] mb-8 leading-7 sm:text-center md:text-left">
              Hey! I'm Muhammad Syaiful Mu'min. I'm a web developer focused on
              creating responsive and user-friendly digital experiences, with
              expertise in HTML, CSS, JavaScript, React, and TypeScript. I enjoy
              combining functional design with optimal performance to bring
              creative ideas to life.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  aria-label={link.name}
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-[#c4b5a0]/20 transition-transform duration-300 hover:scale-110 hover:bg-[#c4b5a0]/50"
                >
                  <link.icon
                    size={24}
                    className="text-[#d9c5a7] transition-colors duration-300 hover:text-white"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
