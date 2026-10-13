// src/config/archive-pieces.ts

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
  editorial: {
    headline: string;
    description: string;
    stylingTip: string;
  };
  care: string[];
  gallery: {
    main: { src: string; alt: string };
    thumbnails: { src: string; alt: string }[];
  };
}

const standardCareInstructions = [
  "Keep away from water, perfume and harsh chemicals.",
  "Store in a soft pouch.",
  "Clean with a soft, dry cloth.",
];

export const archivePieceDetails: ArchivePieceDetail[] = [
  {
    id: "01",
    slug: "the-signature",
    number: "001",
    name: "THE SIGNATURE",
    tagline: "A quiet statement of deep blue allure.",
    story: "A regal piece, designed for evenings that linger long after midnight.",
    heroImages: {
      desktop: "/images/archive/archive-hero-desktop.webp",
      mobile: "/images/archive/archive-hero-mobile.webp",
    },
    mood: {
      titleLines: ["TIMELESS.", "BOLD.", "MYSTERIOUS."],
      description:
        "For evenings that call for quiet intrigue. The Signature pairs deep sapphire tones with radiant pavé crystal to command attention without saying a word.",
    },
    editorial: {
      headline: "Faceted teardrop sapphires, framed by luminous crystal petals.",
      description:
        "Contoured along the collarbone with pavé-set links, culminating in a marquise bloom and pear-cut drop. Designed with fluid drop earrings to catch low evening light.",
      stylingTip:
        "Pair with an open neckline or rich velvet eveningwear to let the royal blue centerpiece take focus.",
    },
    care: standardCareInstructions,
    gallery: {
      main: {
        src: "/images/archive/catalog/The SignatureA.webp",
        alt: "The Signature cross-shaped diamond pendant necklace",
      },
      thumbnails: [
        {
          src: "/images/archive/catalog/The SignatureA.webp",
          alt: "Necklace worn on model collarbone",
        },
        {
          src: "/images/archive/catalog/The SignatureB.webp",
          alt: "Fine diamond setting macro detail",
        },
        {
          src: "/images/archive/catalog/The SignatureC.webp",
          alt: "Side profile of The Signature pendant",
        },
      ],
    },
  },
  {
    id: "03",
    slug: "the-jardin",
    number: "003",
    name: "THE JARDIN",
    tagline: "A delicate dance of petals and golden wings.",
    story: "A whimsical piece, designed for days that invite lighthearted beauty.",
    heroImages: {
      desktop: "/images/archive/archive-hero-desktop.webp",
      mobile: "/images/archive/archive-hero-mobile.webp",
    },
    mood: {
      titleLines: ["ROMANTIC.", "SOFT.", "TIMELESS."],
      description:
        "For moments that celebrate effortless charm. The Jardin pairs a baguette-cut floral bloom with a pavé butterfly in a graceful, open-silhouette embrace.",
    },
    editorial: {
      headline: "An open wrap silhouette crowned in nature-inspired brilliance.",
      description:
        "Crafted with a sparkling pavé band that spirals into an offset butterfly and radiating daisy motif. Designed to catch golden-hour light with playful ease.",
      stylingTip:
        "Wear it solo on the index finger or stack with simple bands for a delicate, sunlit statement.",
    },
    care: standardCareInstructions,
    gallery: {
      main: {
        src: "/images/archive/catalog/The JardinA.webp",
        alt: "The Jardin Ring",
      },
      thumbnails: [
        { src: "/images/archive/catalog/The JardinA.webp", alt: "The Jardin Ring" },
        { src: "/images/archive/catalog/The JardinB.webp", alt: "The Jardin Ring" },
        { src: "/images/archive/catalog/The JardinC.webp", alt: "The Jardin Ring" },
      ],
    },
  },
  {
    id: "02",
    slug: "the-aura",
    number: "002",
    name: "THE AURA",
    tagline: "A luminous glow of modern, sculpted grace.",
    story: "A radiant piece, designed to surround you in a soft halo of light.",
    heroImages: {
      desktop: "/images/archive/archive-hero-desktop.webp",
      mobile: "/images/archive/archive-hero-mobile.webp",
    },
    mood: {
      titleLines: ["SOFT.", "ROMANTIC.", "TIMELESS."],
      description:
        "For moments when you want your presence to gently shine. The Aura reflects ambient light with open, pavé-encrusted silhouettes that feel effortlessly ethereal.",
    },
    editorial: {
      headline: "Openwork marquise pendants layered with pavé brilliance.",
      description:
        "Floral-inspired links flow naturally along the décolletage, centering on a dual teardrop focal point. Paired with sculpted statement drops that mirror every movement.",
      stylingTip:
        "Style with strapless gowns or monochromatic tailoring to let its sculpted, luminous glow take the lead.",
    },
    care: standardCareInstructions,
    gallery: {
      main: {
        src: "/images/archive/catalog/The AuraA.webp",
        alt: "The Aura Necklace set",
      },
      thumbnails: [
        { src: "/images/archive/catalog/The AuraA.webp", alt: "The Aura Necklace Set" },
        { src: "/images/archive/catalog/The AuraB.webp", alt: "The Aura Necklace Closeup" },
        { src: "/images/archive/catalog/The AuraC.webp", alt: "The Aura Earrings Closeup" },
      ],
    },
  },
  {
    id: "04",
    slug: "the-celeste",
    number: "004",
    name: "THE CELESTE",
    tagline: "A nocturnal spark caught in radiant celestial gold.",
    story: "An enchanting set, designed for nights illuminated by quiet celestial wonder.",
    heroImages: {
      desktop: "/images/archive/archive-hero-desktop.webp",
      mobile: "/images/archive/archive-hero-mobile.webp",
    },
    mood: {
      titleLines: ["MYSTERIOUS.", "BOLD.", "TIMELESS."],
      description:
        "For evenings that invite a touch of midnight intrigue. The Celeste balances deep onyx-toned centers with radiating crystal beams in warm, polished gold[cite: 10, 12].",
    },
    editorial: {
      headline: "Radiant starburst pendants framed by contrasting midnight centers[cite: 10].",
      description:
        "Crafted with baguette and pavé crystal rays surrounding a cluster of dark center stones. Paired with coordinating celestial studs designed to catch flickering ambient light.",
      stylingTip:
        "Wear together for refined evening radiance, or let the pendant stand alone over deep necklines or dark silk.",
    },
    care: standardCareInstructions,
    gallery: {
      main: {
        src: "/images/archive/catalog/The CelesteA.webp",
        alt: "The Celeste Necklace Set",
      },
      thumbnails: [
        { src: "/images/archive/catalog/The CelesteA.webp", alt: "The Celeste Necklace Set" },
        { src: "/images/archive/catalog/The CelesteB.webp", alt: "The Celeste Necklace Closeup" },
        { src: "/images/archive/catalog/The CelesteC.webp", alt: "The Celeste Earrings Detail" },
      ],
    },
  },
  {
    id: "05",
    slug: "the-noir",
    number: "005",
    name: "THE NOIR",
    tagline: "A deep midnight gemstone bound in sharp brilliance.",
    story: "An evocative piece, designed for the quiet power of evening shadows.",
    heroImages: {
      desktop: "/images/archive/archive-hero-desktop.webp",
      mobile: "/images/archive/archive-hero-mobile.webp",
    },
    mood: {
      titleLines: ["MYSTERIOUS.", "BOLD.", "TIMELESS."],
      description:
        "For occasions that belong entirely to the night. The Noir centers an emerald-cut dark sapphire stone within a brilliant halo for striking contrast.",
    },
    editorial: {
      headline: "An emerald-cut midnight gem set within articulated pavé leaves.",
      description:
        "Engineered with delicate marquise link motifs that wrap fluidly around the wrist. Completed with an adjustable chain to drape comfortably against bare skin.",
      stylingTip:
        "Style solitary beside an evening cuff or pair with minimal silver rings to let the dark center stone captivate.",
    },
    care: standardCareInstructions,
    gallery: {
      main: {
        src: "/images/archive/catalog/The NoirA.webp",
        alt: "The Noir Bracelet",
      },
      thumbnails: [
        { src: "/images/archive/catalog/The NoirA.webp", alt: "The Noir Bracelet" },
        { src: "/images/archive/catalog/The NoirB.webp", alt: "The Noir Bracelet" },
        { src: "/images/archive/catalog/The NoirC.webp", alt: "The Noir Bracelet" },
      ],
    },
  },
  {
    id: "06",
    slug: "the-solace",
    number: "006",
    name: "THE SOLACE",
    tagline: "A serene crossover of light and modern balance.",
    story: "A minimalist piece, designed to bring calm elegance to your everyday gestures.",
    heroImages: {
      desktop: "/images/archive/archive-hero-desktop.webp",
      mobile: "/images/archive/archive-hero-mobile.webp",
    },
    mood: {
      titleLines: ["SOFT.", "TIMELESS.", "ROMANTIC."],
      description:
        "For days that call for quiet composure. The Solace intertwines linear baguette cuts with delicate micro-pavé to deliver effortless, balanced beauty.",
    },
    editorial: {
      headline: "An architectural crossover silhouette set with baguette crystals.",
      description:
        "Crafted with an overlapping dual band that highlights crisp step cuts over a slender pavé curve. Engineered to rest comfortably flush against the finger for everyday wear.",
      stylingTip:
        "Wear as a standalone accent on the middle or ring finger to elevate casual knits and tailored cuffs alike.",
    },
    care: standardCareInstructions,
    gallery: {
      main: {
        src: "/images/archive/catalog/The SolaceA.webp",
        alt: "The Solace Ring",
      },
      thumbnails: [
        { src: "/images/archive/catalog/The SolaceA.webp", alt: "The Solace Ring" },
        { src: "/images/archive/catalog/The SolaceB.webp", alt: "The Solace Ring" },
        { src: "/images/archive/catalog/The SolaceC.webp", alt: "The Solace Ring" },
      ],
    },
  },
  {
    id: "07",
    slug: "the-serenity",
    number: "007",
    name: "THE SERENITY",
    tagline: "A gentle vine of pastel petals and silver grace.",
    story: "A poetic piece, designed to bring the tranquility of an enchanted garden to your wrist.",
    heroImages: {
      desktop: "/images/archive/archive-hero-desktop.webp",
      mobile: "/images/archive/archive-hero-mobile.webp",
    },
    mood: {
      titleLines: ["SOFT.", "ROMANTIC.", "TIMELESS."],
      description:
        "For days that call for quiet, blooming beauty. The Serenity weaves delicate pastel florets and curved leafy vines into an effortlessly graceful presence.",
    },
    editorial: {
      headline: "An organic silver vine accented by multi-colored crystal blossoms.",
      description:
        "Crafted with articulated leafy links that trace a delicate bow and teardrop center motif. Designed with an adjustable clasp for a fluid, weightless drape against the wrist.",
      stylingTip:
        "Wear alone for a soft touch of spring color, or layer alongside fine silver chains for relaxed romance.",
    },
    care: standardCareInstructions,
    gallery: {
      main: {
        src: "/images/archive/catalog/The SerenityA.webp",
        alt: "The Serenity Bracelet",
      },
      thumbnails: [
        { src: "/images/archive/catalog/The SerenityA.webp", alt: "The Serenity Bracelet" },
        { src: "/images/archive/catalog/The SerenityB.webp", alt: "The Serenity Bracelet" },
        { src: "/images/archive/catalog/The SerenityC.webp", alt: "The Serenity Bracelet" },
      ],
    },
  },
  {
    id: "08",
    slug: "the-stella",
    number: "008",
    name: "THE STELLA",
    tagline: "A delicate constellation of silver and starlight.",
    story: "A celestial piece, designed to bring a quiet glimmer to every gesture.",
    heroImages: {
      desktop: "/images/archive/archive-hero-desktop.webp",
      mobile: "/images/archive/archive-hero-mobile.webp",
    },
    mood: {
      titleLines: ["ROMANTIC.", "SOFT.", "TIMELESS."],
      description:
        "For days that call for subtle, starry magic. The Stella weaves graceful infinity curves around a central crystal starburst for an airy, feminine glow.",
    },
    editorial: {
      headline: "An openwork infinity band centered with a radiant floral star.",
      description:
        "Crafted with pavé-accented ribbons that loop into delicate leaf and petal contours. Designed to sit lightly on the hand while capturing natural daylight.",
      stylingTip:
        "Wear alone for everyday romantic refinement, or pair alongside delicate silver stacking rings.",
    },
    care: standardCareInstructions,
    gallery: {
      main: {
        src: "/images/archive/catalog/The StellaA.webp",
        alt: "The Stella Ring",
      },
      thumbnails: [
        { src: "/images/archive/catalog/The StellaA.webp", alt: "The Stella Ring" },
        { src: "/images/archive/catalog/The StellaB.webp", alt: "The Stella Ring" },
        { src: "/images/archive/catalog/The StellaC.webp", alt: "The Stella Ring" },
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
      href: "https://instagram.com/azorjewel",
    },
    whatsapp: {
      label: "CHAT ON WHATSAPP",
      href: "https://wa.me/03399966026",
    },
  },
};

export function getPieceBySlug(slug: string): ArchivePieceDetail | undefined {
  return archivePieceDetails.find((p) => p.slug === slug);
}