import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">

      <Header />
      <HeroSection />
    </main>
  );
}
