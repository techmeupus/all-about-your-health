import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { serviceHref } from "@/content/services";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Services | ${site.name}`,
  description: `Foot and ankle conditions and treatments offered at ${site.name} in St. Augustine.`,
};

// Photos live in /public/servicesimg
const list = [
  { name: "Achilles Tendonitis", file: "achilles-tendonitis800-800x426-1.jpeg" },
  { name: "Plantar Fasciitis", file: "Plantar-fasciitis-2.jpeg" },
  { name: "Mortons Neuroma", file: "Mortons-Neuroma-stock.jpeg" },
  { name: "Wound Care", file: "woundcare-stock.jpeg" },
  { name: "Vein & Vascular Care", file: "Vein-ablate.jpeg" },
  { name: "Minimal Invasive Surgery", file: "shutterstock_1954781626-2048x1365.jpg" },
  { name: "Neuropathy", file: "Neuropathy.jpg" },
  { name: "Lymphedema", file: "Lymphedema.jpg" },
  { name: "Dermatology", file: "Dermatology.jpg" },
  { name: "Physical Therapy", file: "Physical-Therapy-Stock-photo-1536x1024.jpg" },
  { name: "Bunions", file: "Bunion.jpg" },
  { name: "Ingrown Toenail", file: "Ingrown-Toe-Nail.jpg" },
  { name: "Heel Pain", file: "Heel-Pain.jpg" },
  { name: "Toenail Fugus", file: "Nail-Fungus-Stock.jpg" },
  { name: "Pediatric Podiatry", file: "Pediatric Podiatry.jpg" },
  { name: "Orthotics", file: "Orthotics.jpg" },
  { name: "Diabetic Foot Care", file: "Diabetic-Foot-Care.jpg" },
  { name: "Hammertoe", file: "Hammer-Toe.jpg" },
  { name: "Sports Injuries", file: "/sports/sports.webp" }, // a leading "/" means a full path
].map((s) => ({
  name: s.name,
  image: encodeURI(s.file.startsWith("/") ? s.file : `/servicesimg/${s.file}`),
}));

export default function ServicesPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,var(--color-blue-light)_0%,var(--color-cyan-pale)_100%)]">
        <div aria-hidden className="absolute -top-24 -right-24 size-[420px] rounded-full bg-teal/[0.06]" />
        <div className="relative container-site py-10 lg:py-14">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-[13px] text-muted">
              <li>
                <Link href="/" className="hover:text-teal">Home</Link>
              </li>
              <ChevronRight aria-hidden className="size-3.5" />
              <li aria-current="page" className="font-medium text-navy">Services</li>
            </ol>
          </nav>
          <h1 className="mt-6 text-[32px] leading-[1.1] font-extrabold tracking-[-0.02em] sm:text-4xl lg:text-[44px]">
            Services
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-[1.7] text-body">
            From heel pain to advanced wound care, explore the conditions and treatments our team
            handles every day.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="container-site">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((s) => {
              const href = serviceHref(s.name);
              const card = (
                <>
                  {s.image ? (
                    <Image
                      src={s.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                  ) : (
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-[radial-gradient(120%_120%_at_85%_0%,#0e5a8a_0%,var(--color-navy)_55%,var(--color-navy-deep)_100%)]"
                    />
                  )}
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/35 to-navy/10 transition-colors duration-300 group-hover:from-navy/90"
                  />
                  <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-5">
                    <span className="text-xl leading-snug font-bold text-white">{s.name}</span>
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors group-hover:bg-teal">
                      <ArrowRight aria-hidden className="size-4" />
                    </span>
                  </span>
                </>
              );
              const cls =
                "group relative block aspect-[4/3] overflow-hidden rounded-[14px] bg-blue-light shadow-[0_10px_30px_-20px_rgb(11_59_112/0.4)]";
              return (
                <li key={s.name}>
                  {href ? (
                    <Link href={href} className={cls}>{card}</Link>
                  ) : (
                    <Link href={site.cta.href} className={cls} aria-label={`${s.name} – request an appointment`}>
                      {card}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
