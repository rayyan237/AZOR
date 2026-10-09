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
    pagination: "01 / 01",
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
      mood: ["timeless", "mysterious"],
      descriptor: "A quiet statement. A daily reminder of your own kind of magic.",
      href: "/archive/the-signature",
      image: {
        src: "/images/archive/piece-01.webp",
        alt: "The Signature cross-shaped diamond pendant necklace",
      },
    },
    {
      id: "02",
      slug: "the-afterglow",
      number: "002",
      name: "THE AFTERGLOW",
      category: "EARRINGS",
      mood: ["romantic", "soft"],
      descriptor: "Softness, with a little more sparkle.",
      href: "/archive/the-afterglow",
      image: {
        src: "/images/archive/piece-02.webp",
        alt: "The Afterglow triple droplet diamond earrings",
      },
    },
    {
      id: "03",
      slug: "the-noir",
      number: "003",
      name: "THE NOIR",
      category: "RINGS",
      mood: ["mysterious", "bold"],
      descriptor: "For evenings that don't need an occasion.",
      href: "/archive/the-noir",
      image: {
        src: "/images/archive/piece-03.webp",
        alt: "The Noir gold ring with solitary dark onyx stone",
      },
    },
    {
      id: "04",
      slug: "the-petale",
      number: "004",
      name: "THE PÉTALE",
      category: "EARRINGS",
      mood: ["soft", "romantic"],
      descriptor: "Delicate by nature. Bold in presence.",
      href: "/archive/the-petale",
      image: {
        src: "/images/archive/piece-04.webp",
        alt: "The Pétale pearl floral stud earrings",
      },
    },
    {
      id: "05",
      slug: "the-lune",
      number: "005",
      name: "THE LUNE",
      category: "NECKLACES",
      mood: ["soft", "mysterious"],
      descriptor: "Made for softer moments.",
      href: "/archive/the-lune",
      image: {
        src: "/images/archive/piece-05.webp",
        alt: "The Lune crescent moon pendant necklace",
      },
    },
    {
      id: "06",
      slug: "the-solace",
      number: "006",
      name: "THE SOLACE",
      category: "BRACELETS",
      mood: ["timeless", "bold"],
      descriptor: "Quiet strength, in every detail.",
      href: "/archive/the-solace",
      image: {
        src: "/images/archive/piece-06.webp",
        alt: "The Solace textured gold pave diamond bangle",
      },
    },
    {
      id: "07",
      slug: "the-verite",
      number: "007",
      name: "THE VÉRITÉ",
      category: "RINGS",
      mood: ["timeless", "romantic"],
      descriptor: "Because the truth always looks good on you.",
      href: "/archive/the-verite",
      image: {
        src: "/images/archive/piece-07.webp",
        alt: "The Vérité delicate pavé eternity band on hand",
      },
    },
    {
      id: "08",
      slug: "the-delice",
      number: "008",
      name: "THE DÉLICE",
      category: "NECKLACES",
      mood: ["romantic", "soft"],
      descriptor: "A little sweetness. Always.",
      href: "/archive/the-delice",
      image: {
        src: "/images/archive/piece-08.webp",
        alt: "The Délice layered teardrop crystal necklace",
      },
    },
    {
      id: "09",
      slug: "the-eclat",
      number: "009",
      name: "THE ÉCLAT",
      category: "EARRINGS",
      mood: ["bold", "mysterious"],
      descriptor: "For the ones who shine effortlessly.",
      href: "/archive/the-eclat",
      image: {
        src: "/images/archive/piece-09.webp",
        alt: "The Éclat sculptural gold drop earrings with pearl",
      },
    },
    {
      id: "10",
      slug: "the-minimal",
      number: "010",
      name: "THE MINIMAL",
      category: "EARRINGS",
      mood: ["soft", "timeless"],
      descriptor: "Less, but never ordinary.",
      href: "/archive/the-minimal",
      image: {
        src: "/images/archive/piece-10.webp",
        alt: "The Minimal organic twisted gold huggie hoops",
      },
    },
    {
      id: "11",
      slug: "the-serenity",
      number: "011",
      name: "THE SERENITY",
      category: "BRACELETS",
      mood: ["romantic", "timeless", "mysterious"],
      descriptor: "Calm. Glossy. Timeless.",
      href: "/archive/the-serenity",
      image: {
        src: "/images/archive/piece-11.webp",
        alt: "The Serenity fine bezel crystal chain bracelet",
      },
    },
    {
      id: "12",
      slug: "the-aura",
      number: "012",
      name: "THE AURA",
      category: "EARRINGS",
      mood: ["mysterious", "bold"],
      descriptor: "Not just a piece. A presence.",
      href: "/archive/the-aura",
      image: {
        src: "/images/archive/piece-12.webp",
        alt: "The Aura statement dangling earrings against evening portrait",
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