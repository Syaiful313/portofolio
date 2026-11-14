"use client";

import Link from "next/link";
import { flushSync } from "react-dom";
import { useEffect, useState, type MouseEvent } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

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
  const [isMounted, setIsMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const visibleLinks = navLinks;

  useEffect(() => setIsMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDarkTheme = isMounted && resolvedTheme === "dark";
  const themeLabel = isMounted
    ? `Switch to ${isDarkTheme ? "light" : "dark"} mode`
    : "Toggle color theme";

  const toggleTheme = (event: MouseEvent<HTMLButtonElement>) => {
    const targetTheme = resolvedTheme === "dark" ? "light" : "dark";
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const nextTheme = targetTheme === systemTheme ? "system" : targetTheme;
    const { startViewTransition } = document as Document & {
      startViewTransition?: (update: () => void) => unknown;
    };

    if (
      !startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(nextTheme);
      return;
    }

    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    document.documentElement.style.setProperty("--theme-wave-x", `${x}px`);
    document.documentElement.style.setProperty("--theme-wave-y", `${y}px`);
    document.documentElement.style.setProperty("--theme-wave-radius", `${radius}px`);

    startViewTransition.call(document, () => flushSync(() => setTheme(nextTheme)));
  };

  useEffect(() => {
    const updateActiveSection = () => {
      const currentSection = [...visibleLinks]
        .reverse()
        .find((link) => {
          const section = document.getElementById(link.href.split("#")[1] ?? "");
          return section && section.getBoundingClientRect().top <= 150;
        });

      setActiveSection(currentSection?.href.split("#")[1] ?? "home");
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <header className="sticky top-0 z-[1000]">
      <div className="w-full border-b border-[color:var(--color-olive-stone)] bg-[color:var(--color-pulse-green)] text-[color:var(--color-void-black)]">
        <div className="section-shell flex items-center justify-center py-2 text-center text-[11px] font-semibold uppercase tracking-[0.22em] sm:text-xs">
          Available for freelance work and product collaborations
        </div>
      </div>

      <nav
        className="border-b border-[color:var(--color-olive-stone)] backdrop-blur-sm"
        style={{
          backgroundColor: isScrolled
            ? "var(--color-nav-surface-scrolled)"
            : "var(--color-nav-surface)",
        }}
      >
        <div className="section-shell flex items-center justify-between gap-4 py-4">
          <Link
            href="/"
            className="text-[color:var(--color-cream-glow)]"
          >
            <span className="flex flex-col leading-none">
              <span className="text-xs font-semibold tracking-[-0.02em] sm:text-base">
                Muhammad Syaiful Mu&apos;min
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
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-olive-stone)] text-[color:var(--color-cream-glow)]"
              aria-label={themeLabel}
              onClick={toggleTheme}
            >
              {isDarkTheme ? <Sun aria-hidden="true" size={18} /> : <Moon aria-hidden="true" size={18} />}
            </button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-olive-stone)] text-[color:var(--color-cream-glow)] lg:hidden"
            aria-label={themeLabel}
            onClick={toggleTheme}
          >
            {isDarkTheme ? <Sun aria-hidden="true" size={18} /> : <Moon aria-hidden="true" size={18} />}
          </button>

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
