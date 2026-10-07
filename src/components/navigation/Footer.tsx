import Link from "next/link";
import { siteConfig } from "@/config/site";
import { SocialIcon } from "@/components/navigation/SocialIcon";

export function Footer() {
  const { footer } = siteConfig;

  return (
    <footer
      aria-label="Site Footer"
      /* Deep Caviar Obsidian (#04070D) blending seamlessly into the dark silk photography */
      className="relative w-full bg-[#04070D] text-white border-t border-white/[0.06] pt-12 sm:pt-14 md:pt-16 pb-8 sm:pb-10 px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 select-none"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        
        {/* Top Centered Brand Identity */}
        <div className="flex flex-col items-center text-center space-y-1.5 mb-10 sm:mb-12 lg:mb-14">
          {/* Logo */}
          <Link
            href="/"
            className="text-[26px] xs:text-[29px] sm:text-[32px] md:text-[34px] font-[family-name:var(--font-serif)] font-normal tracking-[0.24em] text-white uppercase hover:text-white/80 transition-colors leading-none"
          >
            {footer.brand}
          </Link>

          {/* Slogan */}
          <p className="text-[11.5px] xs:text-[12px] sm:text-[12.5px] md:text-[13px] font-[family-name:var(--font-sans)] font-light text-[#7C8797] tracking-[0.035em] leading-normal pt-1">
            {footer.tagline}
          </p>

          {/* Subtle Hairline Accent Tick */}
          <div className="w-5 h-[1px] bg-white/15 mt-2.5" aria-hidden="true" />
        </div>

        {/* Bottom Tier: Left Copyright, Right Navigation + Socials */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4 pt-5 border-t border-white/[0.08]">
          
          {/* Copyright: Left Aligned on Desktop */}
          <p className="text-[9px] xs:text-[9.5px] font-[family-name:var(--font-sans)] font-light tracking-[0.12em] text-[#475569] order-2 lg:order-1 text-center lg:text-left">
            {footer.copyright}
          </p>

          {/* Right Group: Navigation Links + Social Glyphs */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-7 lg:gap-x-8 gap-y-3 order-1 lg:order-2">
            
            {/* Navigation Anchor Links */}
            <nav
              aria-label="Footer Navigation"
              className="flex flex-wrap items-center justify-center gap-x-5 xs:gap-x-6 sm:gap-x-7 gap-y-2"
            >
              {footer.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[8.5px] xs:text-[9px] font-[family-name:var(--font-sans)] font-medium tracking-[0.22em] uppercase text-[#64748B] hover:text-[#E2E8F0] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Social Icons */}
            <div className="flex items-center gap-3.5 pl-2 sm:pl-3 border-l border-white/[0.08]">
              {footer.socials.map((item) => (
                <a
                  key={item.platform}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#64748B] hover:text-white transition-colors p-1"
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