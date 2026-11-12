import Image from "next/image";
import { CircleCheck } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { aboutPage } from "@/content/about";

export default function AboutStory() {
  const { story } = aboutPage;
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-blue-light shadow-[0_14px_40px_-24px_rgb(11_59_112/0.35)]">
          <Image
            src={story.image.src}
            alt={story.image.alt}
            fill
            priority
            sizes="(min-width: 1024px) 600px, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <SectionLabel>{story.label}</SectionLabel>
          <h2 className="mt-6 text-[30px] leading-[1.15] font-bold tracking-[-0.015em] sm:text-4xl">
            {story.title}
          </h2>
          <div className="mt-5 space-y-4 text-base leading-[1.8] text-body md:text-[17px]">
            {story.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <ul className="mt-6 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {story.conditions.map((c) => (
              <li key={c} className="flex items-center gap-2.5 text-[15px] text-body">
                <CircleCheck aria-hidden className="size-[18px] shrink-0 text-teal" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
