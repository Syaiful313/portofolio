"use client";

import { socialLinks } from "@/utils/socialLinks";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";

const footerLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#portfolios" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-divider">
      <div className="section-shell py-10 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div className="space-y-4">
            <p className="section-eyebrow">{`{ Contact }`}</p>
            <h2 className="max-w-md text-2xl leading-tight tracking-[-0.03em] sm:text-3xl">
              Open for freelance work, collaboration, and product builds.
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-[color:var(--color-ash-gray)] sm:text-base">
              Saya membantu membangun website modern yang cepat, rapi, dan
              terasa premium di setiap detail.
            </p>
            <Link href="/contact" className="pill-link mt-2">
              Contact me
            </Link>
          </div>

          <div className="space-y-4">
            <p className="section-eyebrow">{`{ Navigation }`}</p>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[color:var(--color-cream-glow)] transition-colors hover:text-[color:var(--color-pulse-green)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="section-eyebrow">{`{ Social }`}</p>
            <div className="flex flex-col gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[color:var(--color-cream-glow)] transition-colors hover:text-[color:var(--color-pulse-green)]"
                  >
                    <Icon aria-hidden="true" />
                    {social.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[color:var(--color-olive-stone)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[color:var(--color-ash-gray)]">
            © {currentYear} Muhammad Syaiful Mu&apos;min. Built on a flat dark
            canvas.
          </p>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="pill-link w-fit"
          >
            <FaArrowUp aria-hidden="true" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
