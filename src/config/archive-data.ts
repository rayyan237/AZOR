export type ArchiveCategory = "ALL" | "NECKLACES" | "EARRINGS" | "RINGS" | "BRACELETS";

export interface ArchivePiece {
  id: string;
  number: string;
  name: string;
  category: "NECKLACES" | "EARRINGS" | "RINGS" | "BRACELETS";
  descriptor: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
}

export const archiveData = {
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
      number: "001",
      name: "THE SIGNATURE",
      category: "NECKLACES",
      descriptor: "A quiet statement. A daily reminder of your own kind of magic.",
      href: "/archive/the-signature",
      image: {
        src: "/images/archive/piece-01.webp",
        alt: "The Signature cross-shaped diamond pendant necklace",
      },
    },
    {
      id: "02",
      number: "002",
      name: "THE AFTERGLOW",
      category: "EARRINGS",
      descriptor: "Softness, with a little more sparkle.",
      href: "/archive/the-afterglow",
      image: {
        src: "/images/archive/piece-02.webp",
        alt: "The Afterglow triple droplet diamond earrings",
      },
    },
    {
      id: "03",
      number: "003",
      name: "THE NOIR",
      category: "RINGS",
      descriptor: "For evenings that don't need an occasion.",
      href: "/archive/the-noir",
      image: {
        src: "/images/archive/piece-03.webp",
        alt: "The Noir gold ring with solitary dark onyx stone",
      },
    },
    {
      id: "04",
      number: "004",
      name: "THE PÉTALE",
      category: "EARRINGS",
      descriptor: "Delicate by nature. Bold in presence.",
      href: "/archive/the-petale",
      image: {
        src: "/images/archive/piece-04.webp",
        alt: "The Pétale pearl floral stud earrings",
      },
    },
    {
      id: "05",
      number: "005",
      name: "THE LUNE",
      category: "NECKLACES",
      descriptor: "Made for softer moments.",
      href: "/archive/the-lune",
      image: {
        src: "/images/archive/piece-05.webp",
        alt: "The Lune crescent moon pendant necklace",
      },
    },
    {
      id: "06",
      number: "006",
      name: "THE SOLACE",
      category: "BRACELETS",
      descriptor: "Quiet strength, in every detail.",
      href: "/archive/the-solace",
      image: {
        src: "/images/archive/piece-06.webp",
        alt: "The Solace textured gold pave diamond bangle",
      },
    },
    {
      id: "07",
      number: "007",
      name: "THE VÉRITÉ",
      category: "RINGS",
      descriptor: "Because the truth always looks good on you.",
      href: "/archive/the-verite",
      image: {
        src: "/images/archive/piece-07.webp",
        alt: "The Vérité delicate pavé eternity band on hand",
      },
    },
    {
      id: "08",
      number: "008",
      name: "THE DÉLICE",
      category: "NECKLACES",
      descriptor: "A little sweetness. Always.",
      href: "/archive/the-delice",
      image: {
        src: "/images/archive/piece-08.webp",
        alt: "The Délice layered teardrop crystal necklace",
      },
    },
    {
      id: "09",
      number: "009",
      name: "THE ÉCLAT",
      category: "EARRINGS",
      descriptor: "For the ones who shine effortlessly.",
      href: "/archive/the-eclat",
      image: {
        src: "/images/archive/piece-09.webp",
        alt: "The Éclat sculptural gold drop earrings with pearl",
      },
    },
    {
      id: "10",
      number: "010",
      name: "THE MINIMAL",
      category: "EARRINGS",
      descriptor: "Less, but never ordinary.",
      href: "/archive/the-minimal",
      image: {
        src: "/images/archive/piece-10.webp",
        alt: "The Minimal organic twisted gold huggie hoops",
      },
    },
    {
      id: "11",
      number: "011",
      name: "THE SERENITY",
      category: "BRACELETS",
      descriptor: "Calm. Glossy. Timeless.",
      href: "/archive/the-serenity",
      image: {
        src: "/images/archive/piece-11.webp",
        alt: "The Serenity fine bezel crystal chain bracelet",
      },
    },
    {
      id: "12",
      number: "012",
      name: "THE AURA",
      category: "EARRINGS",
      descriptor: "Not just a piece. A presence.",
      href: "/archive/the-aura",
      image: {
        src: "/images/archive/piece-12.webp",
        alt: "The Aura statement dangling earrings against evening portrait",
      },
    },
  ] as ArchivePiece[],
  closingBanner: {
    eyebrow: "THE AZOR ARCHIVE",
    title: "SOME PIECES AREN'T JUST WORN. THEY STAY.",
    description: "Explore the full collection and find the one that feels like you.",
    cta: {
      label: "EXPLORE ALL",
      href: "#archive-grid",
    },
    image: {
      src: "/images/archive/archive-box.webp",
      alt: "Azor luxury embossed jewelry box on black silk",
    },
  },
};