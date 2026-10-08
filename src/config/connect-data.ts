// src/config/connect-data.ts

export const connectData = {
  hero: {
    eyebrow: "CONNECT",
    title: "LET'S TALK.",
    prompts: [
      "Have a question about a piece?",
      "Want to know more about Azor?",
      "Or simply want to say hello?",
    ],
    image: {
      src: "/images/connect/connect-hero.webp",
      alt: "Side portrait of a woman looking upward in gentle light wearing Azor diamond earrings and rings",
    },
  },
  channels: [
    {
      id: "instagram",
      platform: "INSTAGRAM",
      titleLines: ["FOLLOW THE", "WORLD OF AZOR."],
      description: "Behind the scenes, new pieces, moods and more.",
      actionLabel: "@AZOR",
      href: "https://instagram.com/azor",
      type: "instagram",
      image: {
        src: "/images/connect/channel-instagram.webp",
        alt: "Crystal flower necklace resting on folded black velvet",
      },
      imagePosition: "right", // Desktop layout: Text on left, image on right
    },
    {
      id: "whatsapp",
      platform: "WHATSAPP",
      titleLines: ["TALK TO US", "DIRECTLY."],
      description: "We're here to help, answer your questions and guide you.",
      actionLabel: "CHAT WITH AZOR",
      href: "https://wa.me/yourwhatsappnumber",
      type: "whatsapp",
      image: {
        src: "/images/connect/channel-whatsapp.webp",
        alt: "Hands holding smartphone wearing delicate Azor stack rings",
      },
      imagePosition: "left", // Desktop layout: Image on left, text on right
    },
    {
      id: "email",
      platform: "EMAIL",
      titleLines: ["DROP US A LINE."],
      description: "For collaborations, press, or general inquiries.",
      actionLabel: "hello@azor.co",
      href: "mailto:hello@azor.co",
      type: "email",
      image: {
        src: "/images/connect/channel-email.webp",
        alt: "Azor luxury embossed card placed beside dried delicate florals",
      },
      imagePosition: "right", // Desktop layout: Text on left, image on right
    },
  ],
  closing: {
    eyebrow: "THE AZOR WORLD",
    title: "THIS IS AZOR.",
    description: "A signature worth wearing.",
    actions: [
      { label: "FOLLOW US", href: "https://instagram.com/azor", icon: "instagram" },
      { label: "CHAT WITH US", href: "https://wa.me/yourwhatsappnumber", icon: "whatsapp" },
    ],
    image: {
      src: "/images/connect/connect-closing-bg.webp",
      alt: "Azor teardrop diamond pendant and luxury box on velvet background",
    },
  },
};