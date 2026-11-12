import { CalendarDays, Clock, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import type { Service } from "@/content/services";
import { site } from "@/content/site";

// Placeholder body for service pages whose content isn't ready yet (service.comingSoon).
export default function ServiceComingSoon({ service: s }: { service: Service }) {
  const { phone, phoneHref, schedule } = site.contact;

  return (
    <section className="container-site py-16 lg:py-24">
      <div className="mx-auto max-w-2xl rounded-[14px] border border-line bg-cyan-pale p-8 text-center sm:p-12">
        <span className="inline-block rounded-full bg-teal/10 px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-teal uppercase">
          Coming soon
        </span>
        <h2 className="mt-5 text-3xl font-bold lg:text-4xl">{s.name} page is on its way</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-body">
          We&apos;re putting together detailed information about {s.name.toLowerCase()}. In the
          meantime, our team is happy to answer your questions and schedule an evaluation.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={site.cta.href}>
            <CalendarDays aria-hidden className="size-[18px]" strokeWidth={1.75} />
            {site.cta.label}
          </Button>
          <Button href={phoneHref} variant="outline">
            <Phone aria-hidden className="size-[18px]" strokeWidth={1.75} />
            {phone}
          </Button>
        </div>

        <ul className="mt-6 space-y-1 text-sm text-body">
          {schedule.map(({ days, time }) => (
            <li key={days} className="flex items-center justify-center gap-2">
              <Clock aria-hidden className="size-4 text-teal" />
              {days}: {time}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
