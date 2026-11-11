import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, ChevronRight, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import ProvidersDirectory from "@/components/sections/provider/ProvidersDirectory";
import { providers } from "@/content/providers";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Our Providers | ${site.name}`,
  description: `Meet the podiatrists, wound care specialists and physicians at ${site.name}.`,
};

export default function ProvidersPage() {
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
              <li aria-current="page" className="font-medium text-navy">Our Providers</li>
            </ol>
          </nav>
          <h1 className="mt-6 text-[32px] leading-[1.1] font-extrabold tracking-[-0.02em] sm:text-4xl lg:text-[44px]">
            Our Providers
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-[1.7] text-body">
            Find the right specialist for your care. Filter by specialty, view a provider&apos;s
            background, or book an appointment.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="container-site">
          <ProvidersDirectory providers={providers} ctaHref={site.cta.href} />
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container-site">
          <div className="flex flex-col gap-6 rounded-[14px] bg-blue-light px-6 py-10 ring-1 ring-line sm:px-10 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Not sure who to see?</h2>
              <p className="mt-2 text-body">Call us and we&apos;ll match you with the right specialist.</p>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <Button href={site.cta.href} size="lg" variant="navy">
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
      </section>
    </main>
  );
}
