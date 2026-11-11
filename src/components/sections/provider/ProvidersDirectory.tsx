"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Stethoscope } from "lucide-react";
import type { Provider } from "@/content/providers";

const pillStyles: Record<string, string> = {
  Podiatry: "bg-blue-light text-navy",
  "Wound Care": "bg-teal/10 text-teal",
  "Hyperbaric Medicine": "bg-teal-bright/15 text-[#06807c]",
  "Regenerative Medicine": "bg-navy/8 text-navy",
  "Infectious Disease": "bg-[#e3f1f8] text-[#0b5a8a]",
};

// Filterable directory: pick a specialty to narrow the list
export default function ProvidersDirectory({
  providers,
  ctaHref,
}: {
  providers: Provider[];
  ctaHref: string;
}) {
  const [active, setActive] = useState("All");
  const specialties = ["All", ...Array.from(new Set(providers.flatMap((p) => p.specialties)))];
  const shown = active === "All" ? providers : providers.filter((p) => p.specialties.includes(active));

  return (
    <div>
      <div role="group" aria-label="Filter providers by specialty" className="flex flex-wrap gap-2">
        {specialties.map((s) => {
          const on = s === active;
          return (
            <button
              key={s}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(s)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                on
                  ? "border-navy bg-navy text-white"
                  : "border-line bg-white text-navy hover:border-teal hover:text-teal"
              }`}
            >
              {s}
            </button>
          );
        })}
      </div>

      <p className="mt-5 text-sm text-muted" aria-live="polite">
        Showing {shown.length} {shown.length === 1 ? "provider" : "providers"}
      </p>

      <ul className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {shown.map((p) => (
          <li key={p.slug}>
            <article className="flex h-full flex-col overflow-hidden rounded-[14px] border border-line bg-white shadow-[0_10px_30px_-20px_rgb(11_59_112/0.35)] transition-shadow duration-300 hover:shadow-[0_18px_40px_-20px_rgb(11_59_112/0.45)]">
              <Link href={`/providers/${p.slug}`} className="group relative block aspect-[4/3] bg-blue-light">
                <Image
                  src={p.photo.src}
                  alt={`Dr. ${p.name}, ${p.suffix}`}
                  fill
                  sizes="(min-width: 1280px) 380px, (min-width: 640px) 45vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ objectPosition: p.photo.objectPosition }}
                />
                {p.founder && (
                  <span className="absolute top-3 left-3 rounded-full bg-navy px-3 py-1 text-xs font-semibold text-white">
                    Founder
                  </span>
                )}
              </Link>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl leading-snug font-bold">
                  <Link href={`/providers/${p.slug}`} className="hover:text-teal">
                    Dr. {p.name}
                  </Link>
                </h3>
                <p className="mt-0.5 text-sm font-medium text-muted">{p.suffix}</p>

                <ul className="mt-3 flex flex-wrap gap-2">
                  {p.specialties.map((s) => (
                    <li
                      key={s}
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${pillStyles[s] ?? "bg-blue-light text-navy"}`}
                    >
                      {s}
                    </li>
                  ))}
                </ul>

                <p className="mt-4 flex gap-2 text-[13px] leading-snug text-body">
                  <Stethoscope aria-hidden className="mt-px size-4 shrink-0 text-teal" />
                  {p.role ?? p.credentials[0]}
                </p>

                <div className="mt-auto flex items-center justify-between gap-3 mt-5 border-t border-line pt-4">
                  <Link
                    href={`/providers/${p.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:text-teal-bright"
                  >
                    View Profile
                    <span className="sr-only"> of Dr. {p.name}</span>
                    <ArrowRight aria-hidden className="size-4" />
                  </Link>
                  <Link
                    href={ctaHref}
                    className="inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-teal"
                  >
                    <CalendarDays aria-hidden className="size-3.5" />
                    Book
                  </Link>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
