"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CalendarDays, Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { site } from "@/content/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur transition-shadow duration-200 ${
        scrolled || open ? "shadow-[0_6px_24px_-12px_rgb(11_59_112/0.25)]" : ""
      }`}
    >
      <div className="container-site flex h-20 items-center justify-between gap-6 lg:h-24">
        <Link href="/" aria-label={`${site.name} home`} className="shrink-0">
          <Image
            src={site.logo.src}
            alt={site.name}
            width={site.logo.width}
            height={site.logo.height}
            priority
            sizes="180px"
            className="h-13 w-auto lg:h-[72px]"
          />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7 xl:gap-10">
            {site.nav.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative py-2 text-[15px] font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-teal after:transition-transform after:duration-200 hover:text-teal ${
                      active ? "text-navy after:scale-x-100" : "text-navy/85 after:scale-x-0 hover:after:scale-x-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button href={site.cta.href}>
            <CalendarDays aria-hidden className="size-[18px]" strokeWidth={1.75} />
            {site.cta.label}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex size-12 items-center justify-center rounded-[10px] text-navy transition-colors hover:bg-blue-light lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`grid border-t border-line transition-[grid-template-rows] duration-300 lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-transparent"
        }`}
      >
        <div className="overflow-hidden">
          <nav aria-label="Mobile" className="container-site py-4">
            <ul className="flex flex-col">
              {site.nav.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href} className="border-b border-line last:border-0">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      tabIndex={open ? undefined : -1}
                      className={`block py-4 text-base font-medium ${active ? "text-teal" : "text-navy"}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Button href={site.cta.href} className="mt-4 w-full">
              <CalendarDays aria-hidden className="size-[18px]" strokeWidth={1.75} />
              {site.cta.label}
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
