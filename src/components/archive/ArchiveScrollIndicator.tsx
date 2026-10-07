import Link from "next/link";
import { archiveData } from "@/config/archive-data";

export function ArchiveScrollIndicator() {
  return (
    <Link
      href="#archive-grid"
      className="group inline-flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-white/40"
      aria-label="Scroll to explore Azor archive collection"
    >
      <div className="flex flex-col items-center">
        <span className="text-xs">↓</span>
      </div>
      <span className="text-[10px] sm:text-[11px] font-[family-name:var(--font-sans)] font-medium tracking-[0.25em] transition-transform duration-300 group-hover:translate-x-1">
        {archiveData.hero.ctaScroll}
      </span>
    </Link>
  );
}