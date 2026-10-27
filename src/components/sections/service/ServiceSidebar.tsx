import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import { providers } from "@/content/providers";
import type { Service } from "@/content/services";
import { site } from "@/content/site";

export default function ServiceSidebar({ service: s }: { service: Service }) {
  const { schedule, phone, phoneHref } = site.contact;
  // Providers in this specialty, with the featured provider first
  const doctors = providers
    .filter((p) => p.specialties.includes(s.specialty))
    .sort((a, b) => Number(b.slug === s.providerSlug) - Number(a.slug === s.providerSlug));

  return (
    <aside className="space-y-5 lg:sticky lg:top-44 lg:self-start">
      {doctors.length > 0 && (
        <div id="find-a-doctor" className="scroll-mt-44 rounded-[14px] border border-line bg-white p-6 shadow-[0_14px_40px_-24px_rgb(11_59_112/0.35)]">
          <h2 className="text-xl font-bold">Find a Doctor</h2>
          <ul className="mt-4 divide-y divide-line">
            {doctors.map((p) => (
              <li key={p.slug}>
                <Link href={`/providers/${p.slug}`} className="group flex items-center gap-4 py-4">
                  <span className="relative size-14 shrink-0 overflow-hidden rounded-full bg-blue-light ring-2 ring-blue-light">
                    <Image
                      src={p.photo.src}
                      alt=""
                      fill
                      sizes="56px"
                      className="object-cover"
                      style={{ objectPosition: p.photo.objectPosition }}
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-heading font-bold text-navy group-hover:text-teal">
                      Dr. {p.name}
                    </span>
                    <span className="block text-[13px] text-muted">{p.suffix}</span>
                    <span className="mt-1 inline-flex items-center gap-1 text-[13px] font-semibold text-teal">
                      View Profile
                      <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="rounded-[14px] bg-blue-light p-6 ring-1 ring-line">
        <h2 className="text-lg font-bold">{s.sidebar.title}</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-body">{s.sidebar.text}</p>
        <Button href={site.cta.href} className="mt-5 w-full">
          <CalendarDays aria-hidden className="size-[18px]" strokeWidth={1.75} />
          {site.cta.label}
        </Button>
        <ul className="mt-5 space-y-2.5 border-t border-line pt-5 text-sm">
          <li>
            <a href={phoneHref} className="flex items-center gap-2.5 font-semibold text-navy hover:text-teal">
              <Phone aria-hidden className="size-4 text-teal" />
              {phone}
            </a>
          </li>
          {schedule.map(({ days, time }) => (
            <li key={days} className="flex items-center gap-2.5 text-body">
              <Clock aria-hidden className="size-4 text-teal" />
              {days}: {time}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
