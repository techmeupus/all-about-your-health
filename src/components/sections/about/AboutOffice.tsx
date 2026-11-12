import { Clock, MapPin, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { aboutPage } from "@/content/about";
import { site } from "@/content/site";

export default function AboutOffice() {
  const { office } = aboutPage;
  const { schedule, phone, phoneHref, mapUrl } = site.contact;

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>{office.label}</SectionLabel>
          <h2 className="mt-6 text-[30px] leading-[1.15] font-bold tracking-[-0.015em] sm:text-4xl">
            {office.title}
          </h2>
          <p className="mt-4 text-base text-body md:text-lg">{office.intro}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-8">
          <div className="rounded-[14px] border border-line bg-cyan-pale p-8 lg:p-10">
            <p className="text-base leading-[1.8] text-body md:text-[17px]">{office.text}</p>
            <div className="mt-8">
              <Button href={site.cta.href}>{site.cta.label}</Button>
            </div>
          </div>

          <ul className="space-y-4 rounded-[14px] bg-navy p-8 text-white lg:p-10">
            <li className="flex gap-4">
              <MapPin aria-hidden className="mt-0.5 size-5 shrink-0 text-teal-bright" />
              <a href={mapUrl} className="hover:underline">
                {office.addressLines.map((l) => (
                  <span key={l} className="block">{l}</span>
                ))}
              </a>
            </li>
            <li className="flex items-center gap-4">
              <Phone aria-hidden className="size-5 shrink-0 text-teal-bright" />
              <a href={phoneHref} className="font-semibold hover:underline">{phone}</a>
            </li>
            {schedule.map(({ days, time }) => (
              <li key={days} className="flex items-center gap-4">
                <Clock aria-hidden className="size-5 shrink-0 text-teal-bright" />
                {days}: {time}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
