"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { SocialIcon } from "./SocialIcon";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      <nav
        aria-label="Main Navigation"
        className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 h-24 flex items-center justify-between"
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="font-[family-name:var(--font-serif-brand)] text-2xl tracking-[0.22em] text-white/95 hover:text-white transition-opacity select-none"
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

        {/* Right Section: Social Icons & Mobile Trigger */}
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

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle Navigation Menu"
            className="md:hidden text-white/80 hover:text-white p-1 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 8h16M4 16h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 px-8 py-8 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4 duration-300">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xs font-[family-name:var(--font-sans-clean)] tracking-[0.26em] text-white/80 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}