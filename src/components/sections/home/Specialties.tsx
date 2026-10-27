import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bandage, Dna, Footprints, Gauge, Microscope } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { specialties } from "@/content/home";

const Icons = {
  footprints: Footprints,
  bandage: Bandage,
  gauge: Gauge,
  dna: Dna,
  microscope: Microscope,
};

type Specialty = (typeof specialties.items)[number];

function CardVisual({ item }: { item: Specialty }) {
  if (item.image) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden rounded-[10px] bg-blue-light">
        <Image
          src={item.image}
          alt=""
          fill
          sizes="(min-width: 1280px) 240px, (min-width: 640px) 45vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    );
  }

  // Placeholder panel until real photos are added
  const Icon = Icons[item.icon as keyof typeof Icons];
  return (
    <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-[10px] bg-[radial-gradient(120%_90%_at_30%_20%,#0e5a8a_0%,var(--color-navy)_45%,var(--color-navy-deep)_100%)]">
      <div
        aria-hidden
        className="absolute -right-6 -bottom-10 size-36 rounded-full bg-teal-bright/25 blur-2xl"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(rgb(255_255_255/0.12)_1px,transparent_1px)] [background-size:14px_14px]"
      />
      <Icon
        aria-hidden
        className="relative size-16 text-[#7fe3df] drop-shadow-[0_0_18px_rgb(8_181_176/0.7)] transition-transform duration-500 group-hover:scale-110"
        strokeWidth={1.25}
      />
    </div>
  );
}

export default function Specialties() {
  const { previewCount } = specialties;

  return (
    <section
      id="specialties"
      className="bg-[linear-gradient(180deg,var(--color-cyan-pale)_0%,var(--color-blue-light)_100%)] py-20 lg:py-28"
    >
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>{specialties.label}</SectionLabel>
          <h2 className="mt-6 text-[32px] leading-[1.15] font-bold tracking-[-0.015em] sm:text-4xl lg:text-[44px]">
            {specialties.title}
          </h2>
          <p className="mt-4 text-base text-body md:text-lg">{specialties.description}</p>
        </div>

        {/* Flex-wrap (not grid) so an incomplete last row stays centered */}
        <ul className="mt-12 flex flex-wrap justify-center gap-5 lg:mt-14">
          {specialties.items.map((item) => {
            const shown = item.treatments.slice(0, previewCount);
            const more = item.treatments.length - shown.length;
            return (
              <li
                key={item.slug}
                className="w-full sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)] xl:w-[calc((100%-5rem)/5)]"
              >
                <article className="group flex h-full flex-col rounded-[14px] border border-line bg-white p-3 shadow-[0_10px_30px_-18px_rgb(11_59_112/0.35)] transition-[box-shadow,translate] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgb(11_59_112/0.45)]">
                  <CardVisual item={item} />

                  <div className="flex flex-1 flex-col px-2 pt-5 pb-2">
                    <h3 className="text-lg leading-snug font-bold xl:min-h-[2lh]">{item.name}</h3>

                    <ul className="mt-4 flex-1 space-y-2.5">
                      {shown.map((t) => (
                        <li key={t} className="flex gap-2.5 text-sm leading-snug text-body">
                          <span
                            aria-hidden
                            className="mt-[7px] size-1.5 shrink-0 rounded-full bg-teal"
                          />
                          {t}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/services#${item.slug}`}
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal transition-colors hover:text-teal-bright"
                    >
                      {more > 0 ? `View all ${item.treatments.length} treatments` : "View all treatments"}
                      <span className="sr-only"> for {item.name}</span>
                      <ArrowRight
                        aria-hidden
                        className="size-4 transition-transform group-hover:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
