"use client";

import { useEffect, useState } from "react";

type Tab = { id: string; label: string };

// Sticky in-page navigation; highlights the section currently in view.
export default function StickyTabs({ tabs, label }: { tabs: Tab[]; label: string }) {
  const [active, setActive] = useState(tabs[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    tabs.forEach((t) => {
      const el = document.getElementById(t.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [tabs]);

  return (
    <nav
      aria-label={label}
      className="sticky top-20 z-40 border-b border-line bg-white/95 backdrop-blur lg:top-24"
    >
      <ul className="container-site flex gap-7 overflow-x-auto [scrollbar-width:none]">
        {tabs.map((t) => (
          <li key={t.id} className="shrink-0">
            <a
              href={`#${t.id}`}
              aria-current={active === t.id ? "true" : undefined}
              className={`relative block py-4 text-[15px] font-medium transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:rounded-full after:bg-teal after:transition-transform ${
                active === t.id
                  ? "text-navy after:scale-x-100"
                  : "text-muted after:scale-x-0 hover:text-teal"
              }`}
            >
              {t.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
