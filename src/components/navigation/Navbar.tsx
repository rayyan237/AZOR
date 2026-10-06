"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { SocialIcon } from "./SocialIcon";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock background body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
        <nav
          aria-label="Main Navigation"
          className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 h-20 sm:h-24 flex items-center justify-between"
        >
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-[family-name:var(--font-serif-brand)] text-2xl tracking-[0.18em] text-white/95 hover:text-white transition-opacity select-none"
          >
            {siteConfig.name}
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-11">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[11px] font-[family-name:var(--font-sans-clean)] tracking-[0.24em] text-white/70 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Section: Desktop Socials & Hamburger */}
          <div className="flex items-center gap-5 sm:gap-6">
            <div className="flex items-center gap-4 text-white/80">
              {siteConfig.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="hover:text-white transition-colors p-1"
                >
                  <SocialIcon platform={social.platform} className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="md:hidden text-white/90 hover:text-white p-2 focus:outline-none z-50 relative"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`h-[1.5px] w-full bg-white transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`h-[1.5px] w-full bg-white transition-opacity duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`h-[1.5px] w-full bg-white transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Full-Screen Mobile Drawer with Frosted Blur */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 flex flex-col justify-between px-8 pt-28 pb-12 bg-black/80 backdrop-blur-2xl ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible"
        }`}
      >
        {/* Navigation Links */}
        <div className="flex flex-col gap-6 my-auto">
          {siteConfig.navItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-xl sm:text-2xl font-[family-name:var(--font-serif-brand)] tracking-[0.25em] text-white/90 hover:text-white transition-all duration-300 transform ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 50 + 100}ms` : "0ms",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Footer info inside mobile menu */}
        <div className="pt-8 border-t border-white/10 flex items-center justify-between">
          <p className="text-[10px] tracking-[0.25em] text-white/50 uppercase font-[family-name:var(--font-sans-clean)]">
            A Digital Jewelry House
          </p>
          <div className="flex items-center gap-4 text-white/70">
            {siteConfig.socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="hover:text-white p-1"
              >
                <SocialIcon platform={social.platform} className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}