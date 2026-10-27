import { ArrowRight, HeartPulse, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import { ctaBanner } from "@/content/home";
import { site } from "@/content/site";

export default function CtaBanner() {
  return (
    <section className="bg-blue-light pb-20 lg:pb-28">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-[14px] bg-[linear-gradient(100deg,#ffffff_0%,var(--color-cyan-pale)_40%,#c9ecec_100%)] px-6 py-12 ring-1 ring-line sm:px-10 lg:px-14 lg:py-14">
          {/* Decorative */}
          <div
            aria-hidden
            className="absolute top-1/2 -right-10 hidden size-[340px] -translate-y-1/2 rounded-full bg-teal/10 md:block"
          />
          <div
            aria-hidden
            className="absolute top-1/2 right-16 hidden size-[200px] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_20px_50px_-20px_rgb(0_156_154/0.5)] md:flex lg:right-28"
          >
            <HeartPulse className="size-20 text-teal" strokeWidth={1.25} />
          </div>

          <div className="relative max-w-xl">
            <h2 className="text-3xl leading-tight font-bold tracking-[-0.015em] sm:text-4xl">
              {ctaBanner.title}
            </h2>
            <p className="mt-4 text-base text-body md:text-lg">{ctaBanner.description}</p>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button href={ctaBanner.cta.href} size="lg">
                {ctaBanner.cta.label}
                <ArrowRight
                  aria-hidden
                  className="size-[18px] transition-transform duration-200 group-hover:translate-x-1"
                />
              </Button>
              <a
                href={site.contact.phoneHref}
                className="inline-flex items-center gap-3 font-semibold text-navy transition-colors hover:text-teal"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-white text-teal ring-1 ring-line">
                  <Phone aria-hidden className="size-[18px]" />
                </span>
                {site.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
