import Image from "next/image";
import { ArrowRight, CalendarDays } from "lucide-react";
import Button from "@/components/ui/Button";
import { hero } from "@/content/home";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Photo: stacked on top for mobile/tablet, offset to the right on desktop so the team stays clear of the text */}
      <div className="relative h-[300px] sm:h-[440px] lg:absolute lg:inset-y-0 lg:right-0 lg:left-[28%] lg:h-auto">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          sizes="(min-width: 1024px) 72vw, 100vw"
          className="object-cover object-[center_30%] lg:object-center"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-white to-white/0 lg:hidden"
        />
        <div
          aria-hidden
          className="absolute inset-0 hidden bg-[linear-gradient(90deg,#fff_0%,rgb(255_255_255/0.85)_14%,rgb(255_255_255/0.35)_28%,rgb(255_255_255/0)_42%)] lg:block"
        />
      </div>

      <div className="relative container-site pt-4 pb-16 sm:pb-20 lg:flex lg:min-h-[720px] lg:items-center lg:py-28">
        <div className="max-w-[620px]">
          <p className="eyebrow text-teal lg:tracking-[0.16em] lg:text-navy/80">{hero.eyebrow}</p>

          <h1 className="mt-5 text-[40px] leading-[1.05] font-extrabold tracking-[-0.02em] sm:text-5xl lg:text-[68px]">
            {hero.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-[34rem] text-base leading-[1.7] text-body md:text-lg">
            {hero.description}
          </p>

          <Button href={hero.cta.href} size="lg" className="mt-9">
            <CalendarDays aria-hidden className="size-5" strokeWidth={1.75} />
            {hero.cta.label}
            <ArrowRight
              aria-hidden
              className="size-[18px] transition-transform duration-200 group-hover:translate-x-1"
            />
          </Button>
        </div>
      </div>
    </section>
  );
}
