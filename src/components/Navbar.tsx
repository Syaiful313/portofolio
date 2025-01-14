"use client";
import { useState, useEffect } from "react";
import styles from "@/app/styles/UnderlineAnimation.module.css";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);

      const sections = navLinks.map((link) => link.href.replace("#", ""));
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-[1000] w-full max-w-[90%] sm:max-w-[40%] transition-all duration-300 ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-xl p-2 ${
            isScrolled
              ? "bg-[#d9c5a7]/25 backdrop-blur-lg border border-[#d9c5a7]/30"
              : "bg-[#d9c5a7]/15 backdrop-blur-sm border border-[#d9c5a7]"
          }`}
        >
          <Link href="#home">
            <h1 className="font-serif sm:text-2xl font-semibold px-5 md:px-10 text-[#d9c5a7] hover:scale-105 transition-transform cursor-pointer">
              Fulful.
            </h1>
          </Link>

          <div className="hidden space-x-6 font-serif sm:flex px-14">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.link} group relative flex items-center text-[#d9c5a7] hover:opacity-80 transition-all duration-200 ${
                  activeSection === link.href.replace("#", "") ? "font-semibold" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="sm:hidden text-[#d9c5a7] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="sm:hidden mt-2 bg-[#d9c5a7]/15 backdrop-blur-lg border border-[#d9c5a7] rounded-xl p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-[#d9c5a7] hover:bg-[#d9c5a7]/10 rounded px-4 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-[999] sm:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
