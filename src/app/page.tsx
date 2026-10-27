import About from "@/components/sections/home/About";
import CtaBanner from "@/components/sections/home/CtaBanner";
import Hero from "@/components/sections/home/Hero";
import Providers from "@/components/sections/home/Providers";
import Specialties from "@/components/sections/home/Specialties";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Specialties />
      <CtaBanner />
      <Providers />
    </main>
  );
}
