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
      className="group relative block w-full aspect-square overflow-hidden bg-[#0A0D12] select-none transition-transform duration-300 hover:opacity-95 focus:outline-none focus:ring-1 focus:ring-neutral-400"
      aria-label={`${item.id} ${item.title}`}
    >
      {/* Raw Product Photography: No darkening filters */}
      <Image
        src={item.image.src}
        alt={item.image.alt}
        fill
        sizes="(max-width: 640px) 65vw, (max-width: 1024px) 30vw, 220px"
        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
      />

      {/* Item Metadata: Pinned cleanly at bottom left matching design reference */}
      <div className="absolute inset-x-0 bottom-0 p-2.5 xs:p-3 sm:p-3.5 z-10 flex flex-col items-start pointer-events-none">
        <span className="text-[7.5px] xs:text-[8px] sm:text-[8.5px] font-[family-name:var(--font-sans)] tracking-[0.24em] text-[#9BA3AF] uppercase leading-tight">
          {item.id}
        </span>
        <span className="text-[8.5px] xs:text-[9px] sm:text-[9.5px] font-[family-name:var(--font-sans)] font-medium tracking-[0.2em] text-white uppercase mt-0.5 leading-tight">
          {item.title}
        </span>
      </div>
    </Link>
  );
}