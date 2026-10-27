import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { providersSection } from "@/content/home";
import { providers } from "@/content/providers";

// Pill colour per specialty
const pillStyles: Record<string, string> = {
  Podiatry: "bg-blue-light text-navy",
  "Wound Care": "bg-teal/10 text-teal",
  "Hyperbaric Medicine": "bg-teal-bright/15 text-[#06807c]",
  "Regenerative Medicine": "bg-navy/8 text-navy",
  "Infectious Disease": "bg-[#e3f1f8] text-[#0b5a8a]",
};

export default function Providers() {
  return (
    <section id="providers" className="bg-white py-20 lg:py-28">
      <div className="container-site grid gap-12 xl:grid-cols-[300px_1fr] xl:gap-14">
        {/* Intro */}
        <div className="xl:sticky xl:top-36 xl:self-start">
          <p className="eyebrow text-teal">{providersSection.label}</p>
          <h2 className="mt-4 text-[32px] leading-[1.15] font-bold tracking-[-0.015em] sm:text-4xl xl:text-[40px]">
            {providersSection.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-5 max-w-md text-base leading-[1.7] text-body">
            {providersSection.description}
          </p>
          <Button href={providersSection.cta.href} variant="outline" className="mt-8">
            {providersSection.cta.label}
            <ArrowRight
              aria-hidden
              className="size-[18px] transition-transform duration-200 group-hover:translate-x-1"
            />
          </Button>
        </div>

        {/* Cards */}
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {providers.map((p) => {
            const lines = [...p.credentials, ...(p.affiliations ?? [])];
            return (
              <li key={p.slug}>
                <article className="group flex h-full flex-col rounded-[14px] border border-line bg-white p-3 shadow-[0_10px_30px_-18px_rgb(11_59_112/0.3)] transition-[box-shadow,translate] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgb(11_59_112/0.4)]">
                  <div className="relative aspect-[5/4] overflow-hidden rounded-[10px] bg-blue-light">
                    <Image
                      src={p.photo.src}
                      alt={`${p.name}, ${p.suffix}`}
                      fill
                      sizes="(min-width: 1280px) 300px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      style={{ objectPosition: p.photo.objectPosition }}
                    />
                  </div>

                  <div className="flex flex-1 flex-col px-2 pt-5 pb-2">
                    <h3 className="text-lg leading-snug font-bold">Dr. {p.name}</h3>
                    <p className="mt-0.5 text-sm text-muted">
                      {p.suffix}
                      {p.founder && " · Founder"}
                    </p>

                    <ul className="mt-4 flex flex-wrap gap-2">
                      {p.specialties.map((s) => (
                        <li
                          key={s}
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${pillStyles[s] ?? "bg-blue-light text-navy"}`}
                        >
                          {s}
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-4 flex-1 space-y-1.5">
                      {lines.slice(0, 3).map((c) => (
                        <li key={c} className="flex gap-2 text-[13px] leading-snug text-muted">
                          <span aria-hidden className="mt-[6px] size-1 shrink-0 rounded-full bg-teal" />
                          {c}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/providers/${p.slug}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal transition-colors hover:text-teal-bright"
                    >
                      View Profile
                      <span className="sr-only"> of Dr. {p.name}</span>
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
