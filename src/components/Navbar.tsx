"use client";
import { useState, useEffect } from "react";
import styles from "@/app/styles/UnderlineAnimation.module.css";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 100;

      if (currentScrollY > lastScrollY) {
        if (currentScrollY > scrollThreshold) {
          setIsNavbarVisible(false);
        }
      } else {
        setIsNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 20);

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
  }, [lastScrollY]);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={`fixed left-1/2 top-0 z-[1000] w-full max-w-[90%] -translate-x-1/2 transform transition-all duration-300 md:max-w-3xl ${isScrolled ? "shadow-lg" : ""} ${
          isNavbarVisible
            ? "translate-y-5 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-xl p-2 ${
            isScrolled
              ? "border border-[#d9c5a7]/30 bg-[#d9c5a7]/25 backdrop-blur-lg"
              : "border border-[#d9c5a7] bg-[#d9c5a7]/15 backdrop-blur-sm"
          }`}
        >
          <Link href="/">
            <h1 className="cursor-pointer px-5 font-serif font-semibold text-[#d9c5a7] transition-transform hover:scale-105 sm:text-2xl md:px-10">
              Fulful.
            </h1>
          </Link>

          <div className="hidden items-center space-x-6 px-14 font-serif sm:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.link} group relative flex items-center text-[#d9c5a7] transition-all duration-200 hover:opacity-80 ${
                  activeSection === link.href.replace("#", "")
                    ? "font-semibold"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link href="/contact" className="ml-2">
              <Button className="rounded-lg bg-[#d9c5a7] px-4 py-2 text-sm hover:bg-[#d9c5a7]/80">
                Let's Talk
              </Button>
            </Link>
          </div>

          <button
            className="p-2 text-[#d9c5a7] sm:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mt-2 flex flex-col items-center justify-center rounded-xl border border-[#d9c5a7] bg-[#d9c5a7]/15 p-4 backdrop-blur-lg sm:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded px-4 py-2 text-[#d9c5a7] transition-colors hover:bg-[#d9c5a7]/10"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact">
              <Button className="rounded-full bg-[#d9c5a7] hover:bg-[#d9c5a7]/80">
                Let's Talk
              </Button>
            </Link>
          </div>
        )}
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[999] bg-black/20 sm:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
