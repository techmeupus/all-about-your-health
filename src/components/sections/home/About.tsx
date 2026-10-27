import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck, Clock, Footprints, Quote } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { about } from "@/content/home";
import { providers } from "@/content/providers";
import { site } from "@/content/site";

const Icons = {
  calendar: CalendarCheck,
  clock: Clock,
  footprints: Footprints,
};

function ScheduleCard() {
  const { schedule, phone, phoneHref } = site.contact;
  return (
    <div className="rounded-[14px] bg-teal px-6 pt-6 pb-3 text-white shadow-[0_16px_40px_-16px_rgb(0_156_154/0.6)]">
      <h3 className="flex items-center gap-2.5 text-xl font-bold text-white">
        <Clock aria-hidden className="size-5" strokeWidth={2} />
        {about.scheduleTitle}
      </h3>
      <dl className="mt-3">
        {schedule.map(({ days, time }) => (
          <div
            key={days}
            className="flex items-center justify-between gap-4 border-b border-white/25 py-4"
          >
            <dt className="font-medium text-white/85">{days}</dt>
            <dd className="font-heading font-semibold">{time}</dd>
          </div>
        ))}
        <div className="flex items-center justify-between gap-4 py-4">
          <dt className="font-medium text-white/85">Call us</dt>
          <dd>
            <a href={phoneHref} className="font-heading font-semibold hover:underline">
              {phone}
            </a>
          </dd>
        </div>
      </dl>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left: heading + image with notched highlights card */}
        <div className="lg:col-span-7">
          <SectionLabel>{about.label}</SectionLabel>

          <h2 className="mt-6 max-w-[15ch] text-[34px] leading-[1.15] font-bold tracking-[-0.015em] sm:text-4xl lg:max-w-[13ch] lg:text-[44px]">
            {about.title}
          </h2>

          <div className="relative mt-10 lg:mt-12">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-blue-light sm:aspect-[16/10]">
              <Image
                src={about.image.src}
                alt={about.image.alt}
                fill
                sizes="(min-width: 1024px) 700px, 100vw"
                className="object-cover object-[30%_25%]"
              />
            </div>

            {/* Desktop/tablet: card sits in a white notch cut into the image's top-right corner */}
            <div className="absolute -top-px -right-px hidden w-[320px] rounded-bl-[22px] bg-white pb-3 pl-3 sm:block">
              <ScheduleCard />
            </div>
          </div>

          <div className="mt-4 sm:hidden">
            <ScheduleCard />
          </div>
        </div>

        {/* Right: team, founder quote, CTA */}
        <div className="flex flex-col justify-end lg:col-span-5 lg:pb-2">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <div className="flex -space-x-3">
              {providers.slice(1).map((p) => (
                <span
                  key={p.slug}
                  className="relative size-12 overflow-hidden rounded-full border-[3px] border-white bg-blue-light shadow-sm"
                >
                  <Image
                    src={p.photo.src}
                    alt={`${p.name}, ${p.suffix}`}
                    fill
                    sizes="48px"
                    className="object-cover"
                    style={{ objectPosition: p.photo.objectPosition }}
                  />
                </span>
              ))}
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-heading text-base leading-snug font-semibold text-navy">
                {about.team.text}
              </p>
              <Link
                href={about.team.link.href}
                className="group mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:text-teal-bright"
              >
                {about.team.link.label}
                <ArrowRight
                  aria-hidden
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>

          <figure className="mt-10 border-t border-line pt-10">
            <Quote
              aria-hidden
              className="size-10 fill-blue-light text-teal"
              strokeWidth={1.25}
            />
            <blockquote className="mt-5 text-base leading-[1.75] text-body md:text-[17px]">
              <p>{about.quote}</p>
            </blockquote>
            <figcaption className="mt-6">
              <span className="block font-heading text-lg font-bold text-navy">
                {about.author.name}
              </span>
              <span className="text-sm text-muted">{about.author.role}</span>
            </figcaption>
          </figure>

          <ul className="mt-9 grid gap-3 sm:grid-cols-3">
            {about.highlights.map(({ icon, label }) => {
              const Icon = Icons[icon as keyof typeof Icons];
              return (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-[12px] border border-line bg-cyan-pale px-4 py-3 sm:flex-col sm:items-start sm:gap-2.5"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                    <Icon aria-hidden className="size-[18px]" strokeWidth={1.75} />
                  </span>
                  <span className="font-heading text-[15px] leading-snug font-semibold text-navy">
                    {label}
                  </span>
                </li>
              );
            })}
          </ul>

          <div className="mt-9">
            <Button href={about.cta.href} size="lg">
              {about.cta.label}
              <ArrowRight
                aria-hidden
                className="size-[18px] transition-transform duration-200 group-hover:translate-x-1"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
