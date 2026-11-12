import type { Metadata } from "next";
import AboutHero from "@/components/sections/about/AboutHero";
import AboutInsurance from "@/components/sections/about/AboutInsurance";
import AboutOffice from "@/components/sections/about/AboutOffice";
import AboutStory from "@/components/sections/about/AboutStory";
import CtaBanner from "@/components/sections/home/CtaBanner";
import { aboutPage } from "@/content/about";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `${aboutPage.seo.title} | ${site.name}`,
  description: aboutPage.seo.description,
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutInsurance />
      <AboutOffice />
      <div className="bg-blue-light pt-20 lg:pt-28">
        <CtaBanner />
      </div>
    </main>
  );
}
