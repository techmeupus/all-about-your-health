import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { specialties } from "@/content/home";
import type { Service } from "@/content/services";

// Banner header. Uses service.heroImage when set, otherwise a navy gradient.
export default function ServiceHero({ service: s }: { service: Service }) {
  const specialty = specialties.items.find((x) => x.name === s.specialty);

  return (
    <section className="relative isolate overflow-hidden bg-[radial-gradient(120%_120%_at_85%_0%,#0e5a8a_0%,var(--color-navy)_45%,var(--color-navy-deep)_100%)]">
      {s.heroImage ? (
        <>
          <Image src={s.heroImage} alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(6_44_82/0.92)_0%,rgb(6_44_82/0.7)_45%,rgb(6_44_82/0.15)_100%)]"
          />
        </>
      ) : (
        <>
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(rgb(255_255_255/0.08)_1px,transparent_1px)] [background-size:18px_18px]"
          />
          <div aria-hidden className="absolute -right-20 -bottom-32 -z-10 size-[420px] rounded-full bg-teal-bright/20 blur-3xl" />
        </>
      )}

      <div className="container-site py-12 lg:py-16">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-white/60">
            <li>
              <Link href="/" className="hover:text-white">Home</Link>
            </li>
            <ChevronRight aria-hidden className="size-3.5" />
            <li>
              <Link href="/services" className="hover:text-white">Services</Link>
            </li>
            {specialty && (
              <>
                <ChevronRight aria-hidden className="size-3.5" />
                <li>
                  <Link href={`/services#${specialty.slug}`} className="hover:text-white">
                    {specialty.name}
                  </Link>
                </li>
              </>
            )}
            <ChevronRight aria-hidden className="size-3.5" />
            <li aria-current="page" className="font-medium text-white">{s.name}</li>
          </ol>
        </nav>

        <h1 className="mt-8 text-[40px] leading-[1.05] font-extrabold tracking-[-0.02em] text-white sm:text-5xl lg:text-[60px]">
          {s.name}
        </h1>
        <p className="mt-3 font-heading text-lg font-semibold text-teal-bright lg:text-xl">
          {s.specialty} <span className="text-white/40">·</span>{" "}
          <span className="text-white/85">{s.tagline}</span>
        </p>

        <ul className="mt-8 flex flex-wrap gap-3">
          {s.facts.map((f) => (
            <li
              key={f.label}
              className="rounded-[10px] bg-white/10 px-4 py-2.5 ring-1 ring-white/15 backdrop-blur-sm"
            >
              <span className="block text-[11px] font-medium tracking-[0.12em] text-white/60 uppercase">
                {f.label}
              </span>
              <span className="text-sm font-semibold text-white">{f.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
