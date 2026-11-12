import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { aboutPage } from "@/content/about";

export default function AboutInsurance() {
  const { insurance } = aboutPage;
  return (
    <section className="bg-[linear-gradient(180deg,var(--color-cyan-pale)_0%,var(--color-blue-light)_100%)] py-16 lg:py-24">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionLabel>{insurance.label}</SectionLabel>
          <h2 className="mt-6 text-[30px] leading-[1.15] font-bold tracking-[-0.015em] sm:text-4xl">
            {insurance.title}
          </h2>
          <div className="mt-8">
            <Button href={insurance.button.href} variant="navy">
              {insurance.button.label}
            </Button>
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {insurance.logos.map((l) => (
            <li
              key={l.name}
              className="relative flex h-32 items-center justify-center rounded-[14px] border border-line bg-white p-6 shadow-[0_10px_30px_-20px_rgb(11_59_112/0.35)]"
            >
              <div className="relative size-full">
                <Image
                  src={l.src}
                  alt={l.name}
                  fill
                  sizes="(min-width: 640px) 280px, 100vw"
                  className="object-contain"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
