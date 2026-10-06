import Image from "next/image";
import { siteConfig } from "@/config/site";

export function BeginningImages() {
  const { images } = siteConfig.beginning;

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full max-w-[540px] mx-auto lg:mx-0">
      {/* Frame 1: Pendant / Necklace Detail */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-200/50 shadow-sm">
        <Image
          src={images.necklace.src}
          alt={images.necklace.alt}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 260px"
          className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
        />
      </div>

      {/* Frame 2: Hands & Fine Rings Detail */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-200/50 shadow-sm">
        <Image
          src={images.rings.src}
          alt={images.rings.alt}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 260px"
          className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
        />
      </div>
    </div>
  );
}