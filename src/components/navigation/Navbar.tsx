"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { SocialIcon } from "./SocialIcon";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Accessibility: Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* 
        Header: Absolute positioning anchored to the top of the hero
        Mobile (< md): 3-column split (Left Menu, Center Logo, Right Socials)
        Desktop (>= md): Classic editorial layout (Left Logo, Center Nav, Right Socials)
      */}
      <header className="absolute top-0 left-0 right-0 z-50 w-full transition-all duration-300">
        <nav
          aria-label="Main Navigation"
          className="relative max-w-[1440px] mx-auto px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 h-16 xs:h-18 sm:h-20 lg:h-24 flex items-center justify-between"
        >
          {/* 
            MOBILE LEFT SLOT (< md): Hamburger / Drawer Toggle Button
            DESKTOP LEFT SLOT (>= md): Brand Logo
          */}
          <div className="flex items-center">
            {/* Mobile Hamburger Trigger */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="md:hidden text-white/90 hover:text-white p-2.5 -ml-2.5 focus:outline-none focus:ring-1 focus:ring-white/40 rounded z-50 relative"
            >
              <div className="w-5 xs:w-6 h-4 xs:h-5 flex flex-col justify-between">
                <span
                  className={`h-[1.5px] w-full bg-white transition-all duration-300 origin-center ${
                    isMobileMenuOpen ? "rotate-45 translate-y-[7px] xs:translate-y-2" : ""
                  }`}
                />
                <span
                  className={`h-[1.5px] w-full bg-white transition-opacity duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`h-[1.5px] w-full bg-white transition-all duration-300 origin-center ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-[7px] xs:-translate-y-2" : ""
                  }`}
                />
              </div>
            </button>

            {/* Desktop Brand Logo (Left Aligned on >= md) */}
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hidden md:inline-block font-[family-name:var(--font-serif)] font-medium text-xl xs:text-2xl sm:text-[25px] lg:text-[26px] tracking-[0.16em] xs:tracking-[0.18em] text-white/95 hover:text-white transition-opacity select-none focus:outline-none focus:ring-1 focus:ring-white/40 rounded-sm"
            >
              {siteConfig.name}
            </Link>
          </div>

          {/* 
            MOBILE CENTER SLOT (< md): Brand Logo Centered
            DESKTOP CENTER SLOT (>= md): Navigation Links
          */}
          {/* Mobile Centered Logo */}
          <div className="md:hidden absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-auto">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-[family-name:var(--font-serif)] font-medium text-xl xs:text-2xl tracking-[0.18em] text-white/95 hover:text-white transition-opacity select-none focus:outline-none focus:ring-1 focus:ring-white/40 rounded-sm"
            >
              {siteConfig.name}
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-5 lg:gap-8 xl:gap-11">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[9.5px] lg:text-[10px] xl:text-[10.5px] font-[family-name:var(--font-sans)] font-medium tracking-[0.2em] lg:tracking-[0.24em] text-white/75 hover:text-white transition-colors duration-200 py-1"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* 
            RIGHT SLOT (Both Mobile & Desktop): Social Icons
          */}
          <div className="flex items-center gap-2.5 xs:gap-3 sm:gap-4 text-white/80">
            {siteConfig.socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="hover:text-white transition-colors p-1.5 focus:outline-none focus:ring-1 focus:ring-white/40 rounded-full"
              >
                <SocialIcon
                  platform={social.platform}
                  className="w-4 h-4 sm:w-[17px] sm:h-[17px] lg:w-[18px] lg:h-[18px]"
                />
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* 
        Full-Screen Mobile Drawer:
        - Viewport height lock (100dvh)
        - Backdrop frosted blur
      */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 flex flex-col justify-between px-6 xs:px-8 sm:px-12 pt-24 xs:pt-28 pb-8 xs:pb-12 bg-black/90 backdrop-blur-2xl ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible"
        }`}
        style={{ minHeight: "100dvh" }}
      >
        {/* Navigation Links with Staggered Fade */}
        <div className="flex flex-col gap-4 xs:gap-5 sm:gap-6 my-auto overflow-y-auto py-4">
          {siteConfig.navItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-xl xs:text-2xl sm:text-3xl font-[family-name:var(--font-serif)] font-medium tracking-[0.18em] xs:tracking-[0.22em] text-white/90 hover:text-white transition-all duration-300 transform ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{
                transitionDelay: isMobileMenuOpen
                  ? `${index * 40 + 80}ms`
                  : "0ms",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Drawer Bottom Footer */}
        <div className="pt-6 xs:pt-8 border-t border-white/10 flex items-center justify-between">
          <p className="text-[9px] xs:text-[10px] tracking-[0.2em] xs:tracking-[0.25em] text-white/50 uppercase font-[family-name:var(--font-sans)] font-medium">
            A Digital Jewelry House
          </p>
          <div className="flex items-center gap-3.5 xs:gap-4 text-white/70">
            {siteConfig.socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="hover:text-white p-1.5 focus:outline-none"
              >
                <SocialIcon platform={social.platform} className="w-4 h-4 xs:w-[18px] xs:h-[18px]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}