"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#portfolios", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const visibleLinks = useMemo(() => navLinks, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = visibleLinks
      .map((link) => document.getElementById(link.href.split("#")[1] ?? ""))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      setActiveSection("");
      return;
    }

    observerRef.current?.disconnect();
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "-18% 0px -58% 0px",
      },
    );

    sections.forEach((section) => observerRef.current?.observe(section));

    return () => {
      observerRef.current?.disconnect();
    };
  }, [visibleLinks]);

  return (
    <header className="sticky top-0 z-[1000]">
      <div className="w-full border-b border-[color:var(--color-olive-stone)] bg-[color:var(--color-pulse-green)] text-[color:var(--color-void-black)]">
        <div className="section-shell flex items-center justify-center py-2 text-center text-[11px] font-semibold uppercase tracking-[0.22em] sm:text-xs">
          Available for freelance work and product collaborations
        </div>
      </div>

      <nav
        className={`border-b border-[color:var(--color-olive-stone)] bg-[rgba(14,16,15,0.92)] backdrop-blur-sm ${
          isScrolled ? "bg-[rgba(14,16,15,0.96)]" : ""
        }`}
      >
        <div className="section-shell flex items-center justify-between gap-4 py-4">
          <Link
            href="/"
            className="group flex items-center gap-3 text-[color:var(--color-cream-glow)]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--color-olive-stone)] text-xs font-semibold uppercase tracking-[0.18em] transition-colors group-hover:border-[color:var(--color-cream-glow)]">
              MS
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-sm font-semibold tracking-[-0.02em] sm:text-base">
                Muhammad Syaiful
              </span>
              <span className="text-[11px] uppercase tracking-[0.24em] text-[color:var(--color-ash-gray)] sm:text-xs">
                Full-stack developer
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-2 lg:flex">
            {visibleLinks.map((link) => {
              const isActive = activeSection === (link.href.split("#")[1] ?? "");

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm transition-colors ${
                    isActive
                      ? "bg-[color:var(--color-cream-glow)] text-[color:var(--color-void-black)]"
                      : "text-[color:var(--color-cream-glow)] hover:bg-[color:var(--color-olive-stone)]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link href="/contact" className="ml-2 pill-link">
              Let&apos;s talk
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-olive-stone)] text-[color:var(--color-cream-glow)] lg:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span className="text-lg leading-none">{isMenuOpen ? "×" : "≡"}</span>
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`border-t border-[color:var(--color-olive-stone)] lg:hidden ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="section-shell flex flex-col gap-2 py-4">
            {visibleLinks.map((link) => {
              const isActive = activeSection === (link.href.split("#")[1] ?? "");

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-full px-4 py-3 text-sm transition-colors ${
                    isActive
                      ? "bg-[color:var(--color-cream-glow)] text-[color:var(--color-void-black)]"
                      : "border border-[color:var(--color-olive-stone)] text-[color:var(--color-cream-glow)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="pill-link mt-2 w-full"
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
