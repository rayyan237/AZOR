import { Navbar } from "@/components/navigation/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#090b0e] text-white">
      <Navbar />
      {/* Hero and upcoming sections will mount here */}
    </main>
  );
}