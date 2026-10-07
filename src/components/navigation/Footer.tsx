import Link from "next/link";
import { siteConfig } from "@/config/site";
import { SocialIcon } from "@/components/navigation/SocialIcon";

export function Footer() {
  const { footer } = siteConfig;

  return (
    <footer
      aria-label="Site Footer"
      className="relative w-full bg-[#07090C] text-white border-t border-white/10 pt-10 sm:pt-12 md:pt-14 pb-8 sm:pb-10 px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 select-none"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        
        {/* Top Centered Brand Identity */}
        <div className="flex flex-col items-center text-center space-y-1 mb-8 sm:mb-10 lg:mb-12">
          {/* Logo */}
          <Link
            href="/"
            className="text-[20px] xs:text-[22px] sm:text-[24px] font-[family-name:var(--font-serif)] font-normal tracking-[0.22em] text-white uppercase hover:text-white/80 transition-colors"
          >
            {footer.brand}
          </Link>

          {/* Tagline */}
          <p className="text-[10px] xs:text-[10.5px] sm:text-[11px] font-[family-name:var(--font-sans)] font-light text-[#8E99A8] tracking-[0.04em] leading-normal">
            {footer.tagline}
          </p>

          {/* Subtle Accent Tick */}
          <div className="w-4 h-[1px] bg-white/20 mt-2" aria-hidden="true" />
        </div>

        {/* Bottom Tier: Left Copyright, Right Navigation + Socials */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4 pt-4 border-t border-white/5">
          
          {/* Copyright: Left Aligned on Desktop */}
          <p className="text-[8.5px] xs:text-[9px] font-[family-name:var(--font-sans)] font-light tracking-[0.12em] text-[#64748B] order-2 lg:order-1 text-center lg:text-left">
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
                  className="text-[8px] xs:text-[8.5px] sm:text-[9px] font-[family-name:var(--font-sans)] font-medium tracking-[0.2em] uppercase text-[#94A3B8] hover:text-white transition-colors duration-200"
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
                  className="text-[#94A3B8] hover:text-white transition-colors p-1"
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