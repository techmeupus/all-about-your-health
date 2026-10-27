import { Award, Users } from "lucide-react";
import type { Provider } from "@/content/providers";
import ProfileBlock from "./ProfileBlock";

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((c) => (
        <li key={c} className="flex gap-3 text-[15px] leading-snug text-body">
          <span aria-hidden className="mt-[7px] size-1.5 shrink-0 rounded-full bg-teal" />
          {c}
        </li>
      ))}
    </ul>
  );
}

export default function ProfileCredentials({ provider: p }: { provider: Provider }) {
  const groups = [
    { title: "Credentials", icon: Award, items: p.credentials },
    { title: "Professional Affiliations", icon: Users, items: p.affiliations ?? [] },
  ].filter((g) => g.items.length);

  return (
    <ProfileBlock id="credentials" title="Credentials & Affiliations">
      <div className="grid gap-5 sm:grid-cols-2">
        {groups.map(({ title, icon: Icon, items }) => (
          <div key={title} className="rounded-[14px] border border-line bg-white p-6">
            <h3 className="flex items-center gap-3 text-lg font-bold">
              <span className="flex size-9 items-center justify-center rounded-full bg-teal/10 text-teal">
                <Icon aria-hidden className="size-[18px]" strokeWidth={1.75} />
              </span>
              {title}
            </h3>
            <List items={items} />
          </div>
        ))}
      </div>
    </ProfileBlock>
  );
}
