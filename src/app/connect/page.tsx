// src/app/connect/page.tsx
import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { ConnectHero } from "@/components/connect/ConnectHero";
import { ConnectChannels } from "@/components/connect/ConnectChannels";
import { ConnectClosing } from "@/components/connect/ConnectClosing";
import { Footer } from "@/components/navigation/Footer";

export const metadata: Metadata = {
  title: "Connect | AZOR Fine Jewelry",
  description:
    "Have a question about a piece, want to know more about Azor, or simply want to say hello? Talk to us directly.",
};

export default function ConnectPage() {
  return (
    <main className="relative min-h-screen bg-[#04070D] text-white">
      <Navbar />
      <ConnectHero />
      <ConnectChannels />
      <ConnectClosing />
      <Footer />
    </main>
  );
}