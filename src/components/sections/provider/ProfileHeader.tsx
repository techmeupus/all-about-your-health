import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ChevronRight, CircleCheck, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import type { Provider } from "@/content/providers";
import { site } from "@/content/site";

export default function ProfileHeader({ provider: p }: { provider: Provider }) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,var(--color-blue-light)_0%,var(--color-cyan-pale)_100%)]">
      <div
        aria-hidden
        className="absolute -top-24 -right-24 size-[420px] rounded-full bg-teal/[0.06]"
      />

      <div className="relative container-site py-10 lg:py-14">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-muted">
            <li>
              <Link href="/" className="hover:text-teal">Home</Link>
            </li>
            <ChevronRight aria-hidden className="size-3.5" />
            <li>
              <Link href="/providers" className="hover:text-teal">Our Providers</Link>
            </li>
            <ChevronRight aria-hidden className="size-3.5" />
            <li aria-current="page" className="font-medium text-navy">Dr. {p.name}</li>
          </ol>
        </nav>

        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-center lg:gap-12">
          <div className="relative size-40 shrink-0 overflow-hidden rounded-full border-[6px] border-white bg-white shadow-[0_20px_50px_-20px_rgb(11_59_112/0.45)] lg:size-52">
            <Image
              src={p.photo.src}
              alt={`Dr. ${p.name}, ${p.suffix}`}
              fill
              priority
              sizes="208px"
              className="object-cover"
              style={{ objectPosition: p.photo.objectPosition }}
            />
          </div>

          <div className="min-w-0">
            {p.founder && <p className="eyebrow text-teal">Founder</p>}
            <h1 className="mt-2 text-[34px] leading-[1.1] font-extrabold tracking-[-0.02em] sm:text-[40px] lg:text-5xl">
              Dr. {p.name}
              <span className="text-[0.6em] font-bold text-muted">, {p.suffix}</span>
            </h1>
            {p.role && <p className="mt-2 text-lg font-medium text-body">{p.role}</p>}

            <ul className="mt-5 flex flex-wrap gap-2">
              {p.specialties.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-line bg-white px-3.5 py-1.5 text-[13px] font-semibold text-navy"
                >
                  {s}
                </li>
              ))}
            </ul>

            {p.facts && (
              <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                {p.facts.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-body">
                    <CircleCheck aria-hidden className="size-4 text-teal" />
                    {f}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Button href={site.cta.href}>
                <CalendarDays aria-hidden className="size-[18px]" strokeWidth={1.75} />
                Request Appointment
              </Button>
              <a
                href={site.contact.phoneHref}
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-teal"
              >
                <Phone aria-hidden className="size-4 text-teal" />
                {site.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
