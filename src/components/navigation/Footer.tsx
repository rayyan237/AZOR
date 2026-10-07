// src/components/navigation/Footer.tsx
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { SocialIcon } from "@/components/navigation/SocialIcon";

export function Footer() {
  const { footer } = siteConfig;

  return (
    <footer
      aria-label="Site Footer"
      /* Deep midnight indigo slate (#09111E) matching the Mood section */
      className="relative w-full bg-[#09111E] text-white border-t border-white/10 pt-12 sm:pt-14 md:pt-16 pb-10 sm:pb-12 px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 select-none"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        
        {/* Top Centered Brand Identity */}
        <div className="flex flex-col items-center text-center space-y-1.5 mb-10 sm:mb-12 lg:mb-14">
          {/* Logo — Scaled up, matching Navbar font family and letter spacing */}
          <Link
            href="/"
            className="text-[26px] xs:text-[29px] sm:text-[32px] md:text-[34px] font-[family-name:var(--font-serif)] font-normal tracking-[0.24em] text-[#F8FAFC] uppercase hover:text-white/80 transition-colors leading-none"
          >
            {footer.brand}
          </Link>

          {/* Slogan: 'A signature worth wearing.' — Scaled up by one level */}
          <p className="text-[11.5px] xs:text-[12px] sm:text-[12.5px] md:text-[13px] font-[family-name:var(--font-sans)] font-light text-[#94A3B8] tracking-[0.035em] leading-normal pt-1">
            {footer.tagline}
          </p>

          {/* Subtle Hairline Accent Tick */}
          <div className="w-5 h-[1px] bg-white/20 mt-2.5" aria-hidden="true" />
        </div>

        {/* Bottom Tier: Left Copyright, Right Navigation + Socials */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4 pt-5 border-t border-white/10">
          
          {/* Copyright: Left Aligned on Desktop */}
          <p className="text-[9px] xs:text-[9.5px] sm:text-[10px] font-[family-name:var(--font-sans)] font-light tracking-[0.12em] text-[#64748B] order-2 lg:order-1 text-center lg:text-left">
            {footer.copyright}
          </p>

          {/* Right Group: Navigation Links + Social Glyphs */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-6 lg:gap-x-7 gap-y-3 order-1 lg:order-2">
            
            {/* Navigation Anchor Links */}
            <nav
              aria-label="Footer Navigation"
              className="flex flex-wrap items-center justify-center gap-x-4 xs:gap-x-5 sm:gap-x-6 gap-y-2"
            >
              {footer.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[8.5px] xs:text-[9px] sm:text-[9.5px] font-[family-name:var(--font-sans)] font-medium tracking-[0.2em] uppercase text-[#94A3B8] hover:text-[#F8FAFC] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Social Icons */}
            <div className="flex items-center gap-3.5 pl-2 sm:pl-3 border-l border-white/10">
              {footer.socials.map((item) => (
                <a
                  key={item.platform}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors p-1"
                  aria-label={`Visit Azor on ${item.platform}`}
                >
                  <SocialIcon
                    platform={item.platform as "instagram" | "whatsapp"}
                    className="w-3.5 h-3.5"
                  />
                </a>
              ))}
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}