import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, HeartHandshake, HeartPulse, MapPin, Microscope, Phone, Users } from "lucide-react";
import Button from "@/components/ui/Button";
import { specialties } from "@/content/home";
import { site } from "@/content/site";

const Icons = {
  microscope: Microscope,
  users: Users,
  heart: HeartHandshake,
  pin: MapPin,
};

function FeatureStrip() {
  const { features, ctaTitle } = site.footer;
  return (
    <div className="bg-navy">
      <div className="grid lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_400px]">
        {/* Left padding lines the strip up with .container-site content on wide screens */}
        <ul className="grid gap-x-8 gap-y-8 px-5 py-12 sm:grid-cols-2 md:px-8 lg:pr-10 lg:pl-[max(3rem,calc((100vw-var(--container-site))/2+3rem))] 2xl:grid-cols-4 2xl:gap-0 2xl:py-10">
          {features.map(({ icon, title, text }) => {
            const Icon = Icons[icon as keyof typeof Icons];
            return (
              <li
                key={title}
                className="flex gap-4 2xl:border-l 2xl:border-white/15 2xl:px-6 2xl:first:border-0 2xl:first:pl-0"
              >
                <Icon aria-hidden className="size-9 shrink-0 text-teal-bright" strokeWidth={1.4} />
                <div>
                  <h3 className="font-heading text-[15px] font-bold text-white">{title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-white/70">{text}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="relative flex items-center overflow-hidden bg-blue-light px-5 py-10 md:px-8 lg:px-10">
          <HeartPulse
            aria-hidden
            className="absolute -bottom-6 -left-6 size-40 text-teal/10"
            strokeWidth={1}
          />
          <div className="relative">
            <p className="font-heading text-2xl leading-tight font-bold text-navy xl:text-[28px]">
              {ctaTitle.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <Button href={site.cta.href} className="mt-5">
              {site.cta.label}
              <ArrowRight
                aria-hidden
                className="size-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="font-heading text-base font-bold text-white">{children}</h2>;
}

export default function Footer() {
  const { schedule, address, mapUrl, phone, phoneHref } = site.contact;
  const { tagline, quickLinks } = site.footer;
  const linkClass = "text-sm text-white/70 transition-colors hover:text-teal-bright";

  return (
    <footer className="bg-navy-deep text-white">
      <FeatureStrip />

      <div className="container-site grid grid-cols-2 gap-x-6 gap-y-12 py-16 lg:grid-cols-[1.4fr_0.8fr_1fr_1.1fr] lg:gap-10">
        {/* Brand */}
        <div className="col-span-2 lg:col-span-1">
          <Link
            href="/"
            aria-label={`${site.name} home`}
            className="inline-block rounded-[12px] bg-white px-4 py-3"
          >
            <Image
              src={site.logo.src}
              alt={site.name}
              width={site.logo.width}
              height={site.logo.height}
              sizes="160px"
              className="h-14 w-auto"
            />
          </Link>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/70">{tagline}</p>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer">
          <ColumnTitle>Quick Links</ColumnTitle>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkClass}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Specialties */}
        <div>
          <ColumnTitle>Our Specialties</ColumnTitle>
          <ul className="mt-5 space-y-3">
            {specialties.items.map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className={linkClass}>
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="col-span-2 lg:col-span-1">
          <ColumnTitle>Contact Us</ColumnTitle>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a href={phoneHref} className="flex items-center gap-3 font-semibold text-white hover:text-teal-bright">
                <Phone aria-hidden className="size-4 shrink-0 text-teal-bright" />
                {phone}
              </a>
            </li>
            <li>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/70 hover:text-teal-bright"
              >
                <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-teal-bright" />
                {address}
              </a>
            </li>
            {schedule.map(({ days, time }) => (
              <li key={days} className="flex items-start gap-3 text-white/70">
                <Clock aria-hidden className="mt-0.5 size-4 shrink-0 text-teal-bright" />
                <span>
                  {days}
                  <br />
                  <span className="text-white">{time}</span>
                </span>
              </li>
            ))}
          </ul>
          <Link
            href={site.cta.href}
            className="mt-6 inline-flex h-11 items-center gap-2 rounded-[10px] border border-white/40 px-5 text-sm font-semibold text-white transition-colors hover:border-teal-bright hover:bg-teal-bright"
          >
            {site.cta.label}
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-6 text-[13px] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>{address}</p>
        </div>
      </div>
    </footer>
  );
}
