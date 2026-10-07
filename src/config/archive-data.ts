// src/config/archive-data.ts

export type ArchiveCategory = "ALL" | "NECKLACES" | "EARRINGS" | "RINGS" | "BRACELETS";

export interface ArchivePiece {
  id: string;
  slug: string;
  number: string;
  name: string;
  category: "NECKLACES" | "EARRINGS" | "RINGS" | "BRACELETS";
  descriptor: string;
  tagline: string;
  story: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
  heroImages: {
    desktop: string;
    mobile: string;
  };
  mood: {
    titleLines: string[];
    description: string;
  };
  gallery: {
    main: { src: string; alt: string };
    thumbnails: { src: string; alt: string }[];
  };
}

export const archivePieces: ArchivePiece[] = [
  {
    id: "01",
    slug: "the-signature",
    number: "001",
    name: "THE SIGNATURE",
    category: "NECKLACES",
    descriptor: "A quiet statement. A daily reminder of your own kind of magic.",
    tagline: "A quiet statement of your own kind of magic.",
    story: "A timeless piece, designed for the moments that feel like you.",
    href: "/archive/the-signature",
    image: {
      src: "/images/archive/piece-01.webp",
      alt: "The Signature cross-shaped diamond pendant necklace",
    },
    heroImages: {
      desktop: "/images/archive/piece-01-hero-desktop.webp",
      mobile: "/images/archive/piece-01-hero-mobile.webp",
    },
    mood: {
      titleLines: ["ELEGANT.", "PERSONAL.", "TIMELESS."],
      description:
        "For the days you want to feel put together without trying too hard. The Signature is a reminder that true elegance is always effortless.",
    },
    gallery: {
      main: {
        src: "/images/archive/piece-01.webp",
        alt: "The Signature cross-shaped diamond necklace on dark velvet",
      },
      thumbnails: [
        {
          src: "/images/archive/piece-01-thumb-1.webp",
          alt: "Necklace worn on model collarbone",
        },
        {
          src: "/images/archive/piece-01-thumb-2.webp",
          alt: "Fine diamond setting macro detail",
        },
        {
          src: "/images/archive/piece-01-thumb-3.webp",
          alt: "Side profile of The Signature pendant",
        },
      ],
    },
  },
  {
    id: "02",
    slug: "the-afterglow",
    number: "002",
    name: "THE AFTERGLOW",
    category: "EARRINGS",
    descriptor: "Softness, with a little more sparkle.",
    tagline: "Softness, with a little more sparkle.",
    story: "Sculpted to catch late-afternoon sunlight and whisper in evening shadows.",
    href: "/archive/the-afterglow",
    image: {
      src: "/images/archive/piece-02.webp",
      alt: "The Afterglow triple droplet diamond earrings",
    },
    heroImages: {
      desktop: "/images/archive/piece-02.webp",
      mobile: "/images/archive/piece-02.webp",
    },
    mood: {
      titleLines: ["RADIANT.", "SUBTLE.", "EVENING."],
      description:
        "Crafted to move fluidly with your rhythm. Three descending droplets designed to frame the cheekbone with understated luminosity.",
    },
    gallery: {
      main: {
        src: "/images/archive/piece-02.webp",
        alt: "The Afterglow earrings detail",
      },
      thumbnails: [
        { src: "/images/archive/piece-02.webp", alt: "Side profile" },
        { src: "/images/archive/piece-04.webp", alt: "Setting detail" },
        { src: "/images/archive/piece-12.webp", alt: "Worn look" },
      ],
    },
  },
  {
    id: "03",
    slug: "the-noir",
    number: "003",
    name: "THE NOIR",
    category: "RINGS",
    descriptor: "For evenings that don't need an occasion.",
    tagline: "For evenings that don't need an occasion.",
    story: "A solitary cabochon stone embedded in a weighted brushed gold band.",
    href: "/archive/the-noir",
    image: {
      src: "/images/archive/piece-03.webp",
      alt: "The Noir gold ring with solitary dark onyx stone",
    },
    heroImages: {
      desktop: "/images/archive/piece-03.webp",
      mobile: "/images/archive/piece-03.webp",
    },
    mood: {
      titleLines: ["MYSTERIOUS.", "GROUNDED.", "BOLD."],
      description:
        "An intentional contrast of deep natural dark stone against hand-polished gold. Built to be worn solitary on the index or stacked with subtle pavé.",
    },
    gallery: {
      main: {
        src: "/images/archive/piece-03.webp",
        alt: "The Noir ring on silk",
      },
      thumbnails: [
        { src: "/images/archive/piece-07.webp", alt: "Hand worn" },
        { src: "/images/archive/piece-03.webp", alt: "Stone facet" },
        { src: "/images/archive/piece-10.webp", alt: "Side view" },
      ],
    },
  },
  {
    id: "04",
    slug: "the-petale",
    number: "004",
    name: "THE PÉTALE",
    category: "EARRINGS",
    descriptor: "Delicate by nature. Bold in presence.",
    tagline: "Delicate by nature. Bold in presence.",
    story: "Organic floral silhouettes reimagined in freshwater pearls and gold.",
    href: "/archive/the-petale",
    image: {
      src: "/images/archive/piece-04.webp",
      alt: "The Pétale pearl floral stud earrings",
    },
    heroImages: {
      desktop: "/images/archive/piece-04.webp",
      mobile: "/images/archive/piece-04.webp",
    },
    mood: {
      titleLines: ["ORGANIC.", "GENTLE.", "POETIC."],
      description:
        "Inspired by petals resting on water. A four-stone cluster that delivers tactile softness with architectural structure.",
    },
    gallery: {
      main: {
        src: "/images/archive/piece-04.webp",
        alt: "The Petale earrings",
      },
      thumbnails: [
        { src: "/images/archive/piece-04.webp", alt: "Pearl texture" },
        { src: "/images/archive/piece-09.webp", alt: "Worn earring" },
        { src: "/images/archive/piece-02.webp", alt: "Scale detail" },
      ],
    },
  },
  {
    id: "05",
    slug: "the-lune",
    number: "005",
    name: "THE LUNE",
    category: "NECKLACES",
    descriptor: "Made for softer moments.",
    tagline: "Made for softer moments.",
    story: "A curved crescent motif that rests against the hollow of the neck.",
    href: "/archive/the-lune",
    image: {
      src: "/images/archive/piece-05.webp",
      alt: "The Lune crescent moon pendant necklace",
    },
    heroImages: {
      desktop: "/images/archive/piece-05.webp",
      mobile: "/images/archive/piece-05.webp",
    },
    mood: {
      titleLines: ["INTIMATE.", "NOCTURNAL.", "POETIC."],
      description:
        "The gentle curve of the moon suspended on an ultra-fine diamond-cut chain. Understated enough for morning coffee, striking under candlelight.",
    },
    gallery: {
      main: {
        src: "/images/archive/piece-05.webp",
        alt: "The Lune pendant necklace",
      },
      thumbnails: [
        { src: "/images/archive/piece-08.webp", alt: "Layered view" },
        { src: "/images/archive/piece-05.webp", alt: "Pendant macro" },
        { src: "/images/archive/piece-01.webp", alt: "Clasp detail" },
      ],
    },
  },
  {
    id: "06",
    slug: "the-solace",
    number: "006",
    name: "THE SOLACE",
    category: "BRACELETS",
    descriptor: "Quiet strength, in every detail.",
    tagline: "Quiet strength, in every detail.",
    story: "A hand-textured gold cuff punctuated with flush-set brilliant stones.",
    href: "/archive/the-solace",
    image: {
      src: "/images/archive/piece-06.webp",
      alt: "The Solace textured gold pave diamond bangle",
    },
    heroImages: {
      desktop: "/images/archive/piece-06.webp",
      mobile: "/images/archive/piece-06.webp",
    },
    mood: {
      titleLines: ["ENDURING.", "MINIMAL.", "WEIGHTED."],
      description:
        "Engineered with a seamless hinge and subtle brushed interior. Designed to be put on and never taken off.",
    },
    gallery: {
      main: {
        src: "/images/archive/piece-06.webp",
        alt: "The Solace bangle on stone slab",
      },
      thumbnails: [
        { src: "/images/archive/piece-11.webp", alt: "Wrist stack" },
        { src: "/images/archive/piece-06.webp", alt: "Texture detail" },
        { src: "/images/archive/piece-07.webp", alt: "Hinge closeup" },
      ],
    },
  },
  {
    id: "07",
    slug: "the-verite",
    number: "007",
    name: "THE VÉRITÉ",
    category: "RINGS",
    descriptor: "Because the truth always looks good on you.",
    tagline: "Because the truth always looks good on you.",
    story: "An unbroken circle of micro-pavé stones handset in platinum-plated silver.",
    href: "/archive/the-verite",
    image: {
      src: "/images/archive/piece-07.webp",
      alt: "The Vérité delicate pavé eternity band on hand",
    },
    heroImages: {
      desktop: "/images/archive/piece-07.webp",
      mobile: "/images/archive/piece-07.webp",
    },
    mood: {
      titleLines: ["ESSENTIAL.", "TIMELESS.", "PURIST."],
      description:
        "The eternity ring distilled to its purest essence. Ultra-low profile so it rests weightless alongside your favorite heirloom pieces.",
    },
    gallery: {
      main: {
        src: "/images/archive/piece-07.webp",
        alt: "The Vérité band on fingers",
      },
      thumbnails: [
        { src: "/images/archive/piece-03.webp", alt: "Stacked look" },
        { src: "/images/archive/piece-07.webp", alt: "Pavé setting" },
        { src: "/images/archive/piece-10.webp", alt: "Profile view" },
      ],
    },
  },
  {
    id: "08",
    slug: "the-delice",
    number: "008",
    name: "THE DÉLICE",
    category: "NECKLACES",
    descriptor: "A little sweetness. Always.",
    tagline: "A little sweetness. Always.",
    story: "Two delicately staggered chains cradling a faceted pear-cut pendant.",
    href: "/archive/the-delice",
    image: {
      src: "/images/archive/piece-08.webp",
      alt: "The Délice layered teardrop crystal necklace",
    },
    heroImages: {
      desktop: "/images/archive/piece-08.webp",
      mobile: "/images/archive/piece-08.webp",
    },
    mood: {
      titleLines: ["LUMINOUS.", "LAYERED.", "DELICATE."],
      description:
        "The look of effortless layering without the entanglement. Cascading drop proportions calibrated to highlight open collar shirts and evening gowns.",
    },
    gallery: {
      main: {
        src: "/images/archive/piece-08.webp",
        alt: "The Délice necklace on neckline",
      },
      thumbnails: [
        { src: "/images/archive/piece-01.webp", alt: "Pendant closeup" },
        { src: "/images/archive/piece-08.webp", alt: "Layering detail" },
        { src: "/images/archive/piece-05.webp", alt: "Clasp" },
      ],
    },
  },
  {
    id: "09",
    slug: "the-eclat",
    number: "009",
    name: "THE ÉCLAT",
    category: "EARRINGS",
    descriptor: "For the ones who shine effortlessly.",
    tagline: "For the ones who shine effortlessly.",
    story: "Sculptural arches featuring suspended natural baroque pearl drops.",
    href: "/archive/the-eclat",
    image: {
      src: "/images/archive/piece-09.webp",
      alt: "The Éclat sculptural gold drop earrings with pearl",
    },
    heroImages: {
      desktop: "/images/archive/piece-09.webp",
      mobile: "/images/archive/piece-09.webp",
    },
    mood: {
      titleLines: ["ARCHITECTURAL.", "SCULPTURAL.", "DISTINCT."],
      description:
        "A dance between modernist gold curves and the irregular, organic beauty of the sea. Made for art gallery openings and quiet dinners alike.",
    },
    gallery: {
      main: {
        src: "/images/archive/piece-09.webp",
        alt: "The Éclat earrings pair",
      },
      thumbnails: [
        { src: "/images/archive/piece-09.webp", alt: "Earring profile" },
        { src: "/images/archive/piece-04.webp", alt: "Pearl nuance" },
        { src: "/images/archive/piece-12.webp", alt: "Editorial portrait" },
      ],
    },
  },
  {
    id: "10",
    slug: "the-minimal",
    number: "010",
    name: "THE MINIMAL",
    category: "EARRINGS",
    descriptor: "Less, but never ordinary.",
    tagline: "Less, but never ordinary.",
    story: "Twisted organic huggie hoops with an understated ergonomic latch.",
    href: "/archive/the-minimal",
    image: {
      src: "/images/archive/piece-10.webp",
      alt: "The Minimal organic twisted gold huggie hoops",
    },
    heroImages: {
      desktop: "/images/archive/piece-10.webp",
      mobile: "/images/archive/piece-10.webp",
    },
    mood: {
      titleLines: ["TACTILE.", "EFFORTLESS.", "DAILY."],
      description:
        "The everyday staple perfected. Sits snugly against the lobe with zero pinch, lightweight enough to sleep in.",
    },
    gallery: {
      main: {
        src: "/images/archive/piece-10.webp",
        alt: "The Minimal huggies on travertine",
      },
      thumbnails: [
        { src: "/images/archive/piece-10.webp", alt: "Twist detail" },
        { src: "/images/archive/piece-02.webp", alt: "Ear fit" },
        { src: "/images/archive/piece-06.webp", alt: "Gold luster" },
      ],
    },
  },
  {
    id: "11",
    slug: "the-serenity",
    number: "011",
    name: "THE SERENITY",
    category: "BRACELETS",
    descriptor: "Calm. Glossy. Timeless.",
    tagline: "Calm. Glossy. Timeless.",
    story: "Bezel-set floating gems linked by fine hand-assembled articulation.",
    href: "/archive/the-serenity",
    image: {
      src: "/images/archive/piece-11.webp",
      alt: "The Serenity fine bezel crystal chain bracelet",
    },
    heroImages: {
      desktop: "/images/archive/piece-11.webp",
      mobile: "/images/archive/piece-11.webp",
    },
    mood: {
      titleLines: ["FLUID.", "DELICATE.", "TIMELESS."],
      description:
        "A bracelet that moves like liquid water over the wrist. Each stone is individually bezel-set to lay flat and prevent catching on knitwear.",
    },
    gallery: {
      main: {
        src: "/images/archive/piece-11.webp",
        alt: "The Serenity bracelet on silk",
      },
      thumbnails: [
        { src: "/images/archive/piece-06.webp", alt: "Bezel setting" },
        { src: "/images/archive/piece-11.webp", alt: "Extender link" },
        { src: "/images/archive/piece-07.webp", alt: "Worn wrist" },
      ],
    },
  },
  {
    id: "12",
    slug: "the-aura",
    number: "012",
    name: "THE AURA",
    category: "EARRINGS",
    descriptor: "Not just a piece. A presence.",
    tagline: "Not just a piece. A presence.",
    story: "Linear cascading chain drops that trace the jawline with radiant grace.",
    href: "/archive/the-aura",
    image: {
      src: "/images/archive/piece-12.webp",
      alt: "The Aura statement dangling earrings against evening portrait",
    },
    heroImages: {
      desktop: "/images/archive/piece-12.webp",
      mobile: "/images/archive/piece-12.webp",
    },
    mood: {
      titleLines: ["HYPNOTIC.", "CINEMATIC.", "PRESENCE."],
      description:
        "When you want your arrival to speak before words are spoken. Long diamond-cut links that catch ambient candlelight with every movement.",
    },
    gallery: {
      main: {
        src: "/images/archive/piece-12.webp",
        alt: "The Aura earrings on model",
      },
      thumbnails: [
        { src: "/images/archive/piece-12.webp", alt: "Ear drop macro" },
        { src: "/images/archive/piece-02.webp", alt: "Chain articulation" },
        { src: "/images/archive/piece-09.webp", alt: "Atmosphere view" },
      ],
    },
  },
];

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
  pieces: archivePieces,
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

export const sharedQuoteSection = {
  quote: "Not just a piece of jewelry, but a part of your story.",
  cta: {
    label: "EXPLORE MORE PIECES",
    eyebrow: "THE ARCHIVE",
    href: "/archive",
  },
  image: {
    src: "/images/archive/archive-hero-desktop.webp",
    alt: "Editorial portrait wearing Azor signature jewelry",
  },
};

export const makeItYoursData = {
  eyebrow: "ACQUIRE & INQUIRE",
  title: "WANT TO MAKE IT YOURS?",
  description: "Let's get you closer to a piece that feels like you.",
  actions: {
    instagram: {
      label: "DM ON INSTAGRAM",
      href: "https://instagram.com/azorjewelry",
    },
    whatsapp: {
      label: "CHAT ON WHATSAPP",
      href: "https://wa.me/1234567890",
    },
  },
};

export function getPieceBySlug(slug: string): ArchivePiece | undefined {
  return archivePieces.find((p) => p.slug === slug);
}