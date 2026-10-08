export interface ArchivePieceDetail {
  id: string;
  slug: string;
  number: string;
  name: string;
  tagline: string;
  story: string;
  heroImages: {
    desktop: string;
    mobile: string;
  };
  mood: {
    titleLines: string[];
    description: string;
  };
  details: {
    label: string;
    value: string;
  }[];
  care: string[];
  gallery: {
    main: { src: string; alt: string };
    thumbnails: { src: string; alt: string }[];
  };
}

export const archivePieceDetails: ArchivePieceDetail[] = [
  {
    id: "01",
    slug: "the-signature",
    number: "001",
    name: "THE SIGNATURE",
    tagline: "A quiet statement of your own kind of magic.",
    story: "A timeless piece, designed for the moments that feel like you.",
    heroImages: {
      desktop: "/images/archive/piece-01-hero-desktop.webp",
      mobile: "/images/archive/piece-01-hero-mobile.webp",
    },
    mood: {
      titleLines: ["ELEGANT.", "PERSONAL.", "TIMELESS."],
      description:
        "For the days you want to feel put together without trying too hard. The Signature is a reminder that true elegance is always effortless.",
    },
    details: [
      { label: "MATERIAL", value: "925 Sterling Silver" },
      { label: "FINISH", value: "Rhodium Plated" },
      { label: "STONE", value: "Cubic Zirconia" },
      { label: "CHAIN LENGTH", value: '16" + 2" Extender' },
      { label: "WEIGHT", value: "~ 3.2 g" },
    ],
    care: [
      "Keep away from water, perfume and harsh chemicals.",
      "Store in a soft pouch.",
      "Clean with a soft, dry cloth.",
    ],
    gallery: {
      main: {
        src: "/images/archive/piece-01.webp",
        alt: "The Signature necklace on dark velvet",
      },
      thumbnails: [
        { src: "/images/archive/piece-01-thumb-1.webp", alt: "Worn on collarbone" },
        { src: "/images/archive/piece-01-thumb-2.webp", alt: "Setting detail" },
        { src: "/images/archive/piece-01-thumb-3.webp", alt: "Pendant profile" },
      ],
    },
  },
  {
    id: "02",
    slug: "the-afterglow",
    number: "002",
    name: "THE AFTERGLOW",
    tagline: "Softness, with a little more sparkle.",
    story: "Sculpted to catch late-afternoon sunlight and whisper in evening shadows.",
    heroImages: {
      desktop: "/images/archive/piece-02.webp",
      mobile: "/images/archive/piece-02.webp",
    },
    mood: {
      titleLines: ["RADIANT.", "SUBTLE.", "EVENING."],
      description:
        "Crafted to move fluidly with your rhythm. Three descending droplets designed to frame the cheekbone with understated luminosity.",
    },
    details: [
      { label: "MATERIAL", value: "925 Sterling Silver" },
      { label: "FINISH", value: "18k Gold Vermeil" },
      { label: "STONE", value: "Cubic Zirconia" },
      { label: "DROP LENGTH", value: "38 mm" },
      { label: "WEIGHT", value: "~ 4.1 g pair" },
    ],
    care: [
      "Keep away from water, perfume and harsh chemicals.",
      "Store in a soft pouch.",
      "Clean with a soft, dry cloth.",
    ],
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
    tagline: "For evenings that don't need an occasion.",
    story: "A solitary cabochon stone embedded in a weighted brushed gold band.",
    heroImages: {
      desktop: "/images/archive/piece-03.webp",
      mobile: "/images/archive/piece-03.webp",
    },
    mood: {
      titleLines: ["MYSTERIOUS.", "GROUNDED.", "BOLD."],
      description:
        "An intentional contrast of deep natural dark stone against hand-polished gold. Built to be worn solitary on the index or stacked with subtle pavé.",
    },
    details: [
      { label: "MATERIAL", value: "925 Sterling Silver" },
      { label: "FINISH", value: "18k Yellow Gold Plated" },
      { label: "STONE", value: "Black Onyx Cabochon" },
      { label: "BAND WIDTH", value: "4.5 mm" },
      { label: "WEIGHT", value: "~ 5.2 g" },
    ],
    care: [
      "Keep away from water, perfume and harsh chemicals.",
      "Store in a soft pouch.",
      "Clean with a soft, dry cloth.",
    ],
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
    tagline: "Delicate by nature. Bold in presence.",
    story: "Organic floral silhouettes reimagined in freshwater pearls and gold.",
    heroImages: {
      desktop: "/images/archive/piece-04.webp",
      mobile: "/images/archive/piece-04.webp",
    },
    mood: {
      titleLines: ["ORGANIC.", "GENTLE.", "POETIC."],
      description:
        "Inspired by petals resting on water. A four-stone cluster that delivers tactile softness with architectural structure.",
    },
    details: [
      { label: "MATERIAL", value: "925 Sterling Silver" },
      { label: "FINISH", value: "14k Champagne Gold" },
      { label: "STONE", value: "Cultured Freshwater Pearls" },
      { label: "DIMENSIONS", value: "12 mm x 12 mm" },
      { label: "WEIGHT", value: "~ 2.8 g pair" },
    ],
    care: [
      "Keep away from water, perfume and harsh chemicals.",
      "Store in a soft pouch.",
      "Clean with a soft, dry cloth.",
    ],
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
    tagline: "Made for softer moments.",
    story: "A curved crescent motif that rests against the hollow of the neck.",
    heroImages: {
      desktop: "/images/archive/piece-05.webp",
      mobile: "/images/archive/piece-05.webp",
    },
    mood: {
      titleLines: ["INTIMATE.", "NOCTURNAL.", "POETIC."],
      description:
        "The gentle curve of the moon suspended on an ultra-fine diamond-cut chain. Understated enough for morning coffee, striking under candlelight.",
    },
    details: [
      { label: "MATERIAL", value: "925 Sterling Silver" },
      { label: "FINISH", value: "Rhodium Plated" },
      { label: "STONE", value: "Micro Pavé Zirconia" },
      { label: "CHAIN LENGTH", value: '15" + 2" Extender' },
      { label: "WEIGHT", value: "~ 2.9 g" },
    ],
    care: [
      "Keep away from water, perfume and harsh chemicals.",
      "Store in a soft pouch.",
      "Clean with a soft, dry cloth.",
    ],
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
    tagline: "Quiet strength, in every detail.",
    story: "A hand-textured gold cuff punctuated with flush-set brilliant stones.",
    heroImages: {
      desktop: "/images/archive/piece-06.webp",
      mobile: "/images/archive/piece-06.webp",
    },
    mood: {
      titleLines: ["ENDURING.", "MINIMAL.", "WEIGHTED."],
      description:
        "Engineered with a seamless hinge and subtle brushed interior. Designed to be put on and never taken off.",
    },
    details: [
      { label: "MATERIAL", value: "Brass Core with 925 Post" },
      { label: "FINISH", value: "Heavy 18k Gold Plated" },
      { label: "STONE", value: "Brilliant Cut Zirconia" },
      { label: "INNER DIAMETER", value: "58 mm x 50 mm" },
      { label: "WEIGHT", value: "~ 14.5 g" },
    ],
    care: [
      "Keep away from water, perfume and harsh chemicals.",
      "Store in a soft pouch.",
      "Clean with a soft, dry cloth.",
    ],
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
    tagline: "Because the truth always looks good on you.",
    story: "An unbroken circle of micro-pavé stones handset in platinum-plated silver.",
    heroImages: {
      desktop: "/images/archive/piece-07.webp",
      mobile: "/images/archive/piece-07.webp",
    },
    mood: {
      titleLines: ["ESSENTIAL.", "TIMELESS.", "PURIST."],
      description:
        "The eternity ring distilled to its purest essence. Ultra-low profile so it rests weightless alongside your favorite heirloom pieces.",
    },
    details: [
      { label: "MATERIAL", value: "925 Sterling Silver" },
      { label: "FINISH", value: "Platinum Plated" },
      { label: "STONE", value: "Handset Micro Pavé" },
      { label: "BAND THICKNESS", value: "1.8 mm" },
      { label: "WEIGHT", value: "~ 2.1 g" },
    ],
    care: [
      "Keep away from water, perfume and harsh chemicals.",
      "Store in a soft pouch.",
      "Clean with a soft, dry cloth.",
    ],
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
    tagline: "A little sweetness. Always.",
    story: "Two delicately staggered chains cradling a faceted pear-cut pendant.",
    heroImages: {
      desktop: "/images/archive/piece-08.webp",
      mobile: "/images/archive/piece-08.webp",
    },
    mood: {
      titleLines: ["LUMINOUS.", "LAYERED.", "DELICATE."],
      description:
        "The look of effortless layering without the entanglement. Cascading drop proportions calibrated to highlight open collar shirts and evening gowns.",
    },
    details: [
      { label: "MATERIAL", value: "925 Sterling Silver" },
      { label: "FINISH", value: "Rhodium Plated" },
      { label: "STONE", value: "Pear Cut Zirconia" },
      { label: "CHAIN LENGTH", value: '14" + 16" Double Chain' },
      { label: "WEIGHT", value: "~ 3.8 g" },
    ],
    care: [
      "Keep away from water, perfume and harsh chemicals.",
      "Store in a soft pouch.",
      "Clean with a soft, dry cloth.",
    ],
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
    tagline: "For the ones who shine effortlessly.",
    story: "Sculptural arches featuring suspended natural baroque pearl drops.",
    heroImages: {
      desktop: "/images/archive/piece-09.webp",
      mobile: "/images/archive/piece-09.webp",
    },
    mood: {
      titleLines: ["ARCHITECTURAL.", "SCULPTURAL.", "DISTINCT."],
      description:
        "A dance between modernist gold curves and the irregular, organic beauty of the sea. Made for art gallery openings and quiet dinners alike.",
    },
    details: [
      { label: "MATERIAL", value: "925 Sterling Silver" },
      { label: "FINISH", value: "18k Warm Gold Plated" },
      { label: "STONE", value: "Natural Baroque Pearls" },
      { label: "DROP LENGTH", value: "32 mm" },
      { label: "WEIGHT", value: "~ 5.6 g pair" },
    ],
    care: [
      "Keep away from water, perfume and harsh chemicals.",
      "Store in a soft pouch.",
      "Clean with a soft, dry cloth.",
    ],
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
    tagline: "Less, but never ordinary.",
    story: "Twisted organic huggie hoops with an understated ergonomic latch.",
    heroImages: {
      desktop: "/images/archive/piece-10.webp",
      mobile: "/images/archive/piece-10.webp",
    },
    mood: {
      titleLines: ["TACTILE.", "EFFORTLESS.", "DAILY."],
      description:
        "The everyday staple perfected. Sits snugly against the lobe with zero pinch, lightweight enough to sleep in.",
    },
    details: [
      { label: "MATERIAL", value: "925 Sterling Silver" },
      { label: "FINISH", value: "18k Polished Gold" },
      { label: "INNER DIAMETER", value: "11 mm" },
      { label: "CLOSURE", value: "Seamless Clicker Huggie" },
      { label: "WEIGHT", value: "~ 2.4 g pair" },
    ],
    care: [
      "Keep away from water, perfume and harsh chemicals.",
      "Store in a soft pouch.",
      "Clean with a soft, dry cloth.",
    ],
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
    tagline: "Calm. Glossy. Timeless.",
    story: "Bezel-set floating gems linked by fine hand-assembled articulation.",
    heroImages: {
      desktop: "/images/archive/piece-11.webp",
      mobile: "/images/archive/piece-11.webp",
    },
    mood: {
      titleLines: ["FLUID.", "DELICATE.", "TIMELESS."],
      description:
        "A bracelet that moves like liquid water over the wrist. Each stone is individually bezel-set to lay flat and prevent catching on knitwear.",
    },
    details: [
      { label: "MATERIAL", value: "925 Sterling Silver" },
      { label: "FINISH", value: "Rhodium Plated" },
      { label: "STONE", value: "Round Bezel-Set Zirconia" },
      { label: "CHAIN LENGTH", value: '6.5" + 1.5" Extender' },
      { label: "WEIGHT", value: "~ 3.4 g" },
    ],
    care: [
      "Keep away from water, perfume and harsh chemicals.",
      "Store in a soft pouch.",
      "Clean with a soft, dry cloth.",
    ],
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
    tagline: "Not just a piece. A presence.",
    story: "Linear cascading chain drops that trace the jawline with radiant grace.",
    heroImages: {
      desktop: "/images/archive/piece-12.webp",
      mobile: "/images/archive/piece-12.webp",
    },
    mood: {
      titleLines: ["HYPNOTIC.", "CINEMATIC.", "PRESENCE."],
      description:
        "When you want your arrival to speak before words are spoken. Long diamond-cut links that catch ambient candlelight with every movement.",
    },
    details: [
      { label: "MATERIAL", value: "925 Sterling Silver" },
      { label: "FINISH", value: "Oxidized Silver & Rhodium" },
      { label: "DROP LENGTH", value: "65 mm" },
      { label: "CLOSURE", value: "Post & Butterfly Back" },
      { label: "WEIGHT", value: "~ 4.8 g pair" },
    ],
    care: [
      "Keep away from water, perfume and harsh chemicals.",
      "Store in a soft pouch.",
      "Clean with a soft, dry cloth.",
    ],
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

export function getPieceBySlug(slug: string): ArchivePieceDetail | undefined {
  return archivePieceDetails.find((p) => p.slug === slug);
}