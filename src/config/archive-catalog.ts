// src/config/archive-catalog.ts

export type ArchiveCategory = "ALL" | "NECKLACES" | "EARRINGS" | "RINGS" | "BRACELETS";
export type MoodType = "soft" | "bold" | "romantic" | "mysterious" | "timeless";

export interface ArchiveCardItem {
  id: string;
  slug: string;
  number: string;
  name: string;
  category: "NECKLACES" | "EARRINGS" | "RINGS" | "BRACELETS";
  mood: MoodType | MoodType[];
  descriptor: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
}

export const archiveCatalogData = {
  hero: {
    eyebrow: "THE AZOR ARCHIVE",
    titleLines: ["PIECES WITH", "A STORY."],
    statement1: "Explore the pieces that make up",
    statement2: "the world of Azor.",
    ctaScroll: "DISCOVER ARCHIVE",
    pagination: "Azor",
    images: {
      desktop: {
        src: "/images/archive/archive-hero-desktop.webp",
        alt: "Model wearing Azor fine diamond earrings and delicate rings in atmospheric lighting",
      },
      mobile: {
        src: "/images/archive/archive-hero-mobile.webp",
        alt: "Model portrait wearing fine jewelry detail",
      },
    },
  },
  categories: ["ALL", "NECKLACES", "EARRINGS", "RINGS", "BRACELETS"] as ArchiveCategory[],
  pieces: [
    {
      id: "01",
      slug: "the-signature",
      number: "001",
      name: "THE SIGNATURE",
      category: "NECKLACES",
      mood: ["timeless", "bold", "mysterious"],
      descriptor: "A quiet statement of deep blue allure.",
      href: "/archive/the-signature",
      image: {
        src: "/images/archive/catalog/The Signature.webp",
        alt: "The Signature pear-cut sapphire and pave crystal necklace set",
      },
    },
    {
      id: "02",
      slug: "the-aura",
      number: "002",
      name: "THE AURA",
      category: "NECKLACES",
      mood: ["soft", "romantic", "timeless"],
      descriptor: "A luminous glow of modern, sculpted grace.",
      href: "/archive/the-aura",
      image: {
        src: "/images/archive/catalog/The Aura.webp",
        alt: "The Aura openwork pave crystal teardrop necklace and drop earrings",
      },
    },
    {
      id: "03",
      slug: "the-jardin",
      number: "003",
      name: "THE JARDIN",
      category: "RINGS",
      mood: ["romantic", "soft", "timeless"],
      descriptor: "A delicate dance of petals and golden wings.",
      href: "/archive/the-jardin",
      image: {
        src: "/images/archive/catalog/The Jardin.webp",
        alt: "The Jardin gold wrap ring with pave butterfly and baguette floral bloom",
      },
    },
    {
      id: "04",
      slug: "the-celeste",
      number: "004",
      name: "THE CELESTE",
      category: "NECKLACES",
      mood: ["mysterious", "bold", "timeless"],
      descriptor: "A nocturnal spark caught in radiant celestial gold.",
      href: "/archive/the-celeste",
      image: {
        src: "/images/archive/catalog/The Celeste.webp",
        alt: "The Celeste starburst gold pendant necklace and matching stud earrings",
      },
    },
    {
      id: "05",
      slug: "the-noir",
      number: "005",
      name: "THE NOIR",
      category: "BRACELETS",
      mood: ["mysterious", "bold", "timeless"],
      descriptor: "A deep midnight gemstone bound in sharp brilliance.",
      href: "/archive/the-noir",
      image: {
        src: "/images/archive/catalog/The Noir.webp",
        alt: "The Noir emerald-cut dark sapphire halo bracelet with pave leafy links",
      },
    },
    {
      id: "06",
      slug: "the-solace",
      number: "006",
      name: "THE SOLACE",
      category: "RINGS",
      mood: ["soft", "timeless", "romantic"],
      descriptor: "A serene crossover of light and modern balance.",
      href: "/archive/the-solace",
      image: {
        src: "/images/archive/catalog/The Solace.webp",
        alt: "The Solace silver crossover band with baguette crystals and micro-pave",
      },
    },
    {
      id: "07",
      slug: "the-serenity",
      number: "007",
      name: "THE SERENITY",
      category: "BRACELETS",
      mood: ["soft", "romantic", "timeless"],
      descriptor: "A gentle vine of pastel petals and silver grace.",
      href: "/archive/the-serenity",
      image: {
        src: "/images/archive/catalog/The Serenity.webp",
        alt: "The Serenity delicate silver leafy vine bracelet with pastel crystal florets",
      },
    },
    {
      id: "08",
      slug: "the-stella",
      number: "008",
      name: "THE STELLA",
      category: "RINGS",
      mood: ["romantic", "soft", "timeless"],
      descriptor: "A delicate constellation of silver and starlight.",
      href: "/archive/the-stella",
      image: {
        src: "/images/archive/catalog/The Stella.webp",
        alt: "The Stella openwork silver infinity ring with central starburst motif",
      },
    },
  ] as ArchiveCardItem[],
  closingBanner: {
    eyebrow: "THE AZOR ARCHIVE",
    titleLines: ["SOME PIECES AREN'T JUST", "WORN, THEY STAY."],
    statement1: "Explore the full collection and find the one",
    statement2: "that feels like you.",
    cta: {
      label: "EXPLORE ALL",
      href: "#archive-grid",
    },
    images: {
      desktop: {
        src: "/images/archive/archive-closing-desktop.webp",
        alt: "Azor luxury embossed jewelry box on deep navy dark crushed velvet silk",
      },
      mobile: {
        src: "/images/archive/archive-closing-mobile.webp",
        alt: "Azor luxury jewelry box detail on silk fabric",
      },
    },
  },
};