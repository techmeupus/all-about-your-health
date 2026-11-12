import Image from "next/image";
import type { ServiceSection } from "@/content/services";

// Photo tiles (e.g. sports). Falls back to a navy gradient tile when no image is set.
export default function ServiceTiles({ tiles }: { tiles: NonNullable<ServiceSection["tiles"]> }) {
  return (
    <ul className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
      {tiles.map((t) => (
        <li
          key={t.name}
          className="relative isolate aspect-[4/5] overflow-hidden rounded-[14px] bg-[radial-gradient(120%_120%_at_85%_0%,#0e5a8a_0%,var(--color-navy)_55%,var(--color-navy-deep)_100%)] shadow-[0_10px_30px_-20px_rgb(11_59_112/0.4)]"
        >
          {t.image && (
            <Image
              src={encodeURI(t.image)}
              alt=""
              fill
              sizes="(min-width: 1024px) 200px, 45vw"
              className="-z-10 object-cover"
            />
          )}
          <span
            aria-hidden
            className="absolute inset-0 -z-[5] bg-gradient-to-t from-navy/85 via-navy/25 to-transparent"
          />
          <span className="absolute inset-x-0 bottom-0 p-4 text-lg leading-snug font-bold text-white">
            {t.name}
          </span>
        </li>
      ))}
    </ul>
  );
}
