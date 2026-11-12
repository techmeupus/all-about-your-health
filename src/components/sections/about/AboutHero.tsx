import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { aboutPage } from "@/content/about";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,var(--color-blue-light)_0%,var(--color-cyan-pale)_100%)]">
      <div aria-hidden className="absolute -top-24 -right-24 size-[420px] rounded-full bg-teal/[0.06]" />
      <div className="relative container-site py-10 lg:py-14">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5 text-[13px] text-muted">
            <li>
              <Link href="/" className="hover:text-teal">Home</Link>
            </li>
            <ChevronRight aria-hidden className="size-3.5" />
            <li aria-current="page" className="font-medium text-navy">About Us</li>
          </ol>
        </nav>
        <h1 className="mt-6 text-[32px] leading-[1.1] font-extrabold tracking-[-0.02em] sm:text-4xl lg:text-[44px]">
          About Us
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-[1.7] text-body">{aboutPage.intro}</p>
      </div>
    </section>
  );
}
