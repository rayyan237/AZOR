import Image from "next/image";
import Link from "next/link";
import { ArchiveItem } from "@/config/site";

interface ArchiveCardProps {
  item: ArchiveItem;
}

export function ArchiveCard({ item }: ArchiveCardProps) {
  return (
    <Link
      href={item.href}
      scroll={true}
      className="group relative block w-full aspect-[4/5] overflow-hidden bg-[#0A0D12] select-none transition-transform duration-300 hover:opacity-95 focus:outline-none focus:ring-1 focus:ring-neutral-400 shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
      aria-label={`${item.id} ${item.title}`}
    >
      {/* Raw Product Photography: No artificial filters */}
      <Image
        src={item.image.src}
        alt={item.image.alt}
        fill
        sizes="(max-width: 640px) 70vw, (max-width: 1024px) 35vw, 240px"
        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
      />

      {/* Item Metadata: Pinned cleanly at bottom left */}
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-3.5 z-10 flex flex-col items-start bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none">
        <span className="text-[8px] sm:text-[8.5px] font-[family-name:var(--font-sans)] tracking-[0.24em] text-[#A6AFBA] uppercase leading-tight">
          {item.id}
        </span>
        <span className="text-[9px] sm:text-[9.5px] font-[family-name:var(--font-sans)] font-medium tracking-[0.2em] text-white uppercase mt-0.5 leading-tight">
          {item.title}
        </span>
      </div>
    </Link>
  );
}