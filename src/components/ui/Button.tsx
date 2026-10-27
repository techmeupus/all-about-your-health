import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  size?: "md" | "lg";
  variant?: "solid" | "navy" | "outline";
  className?: string;
};

const sizes = {
  md: "h-12 px-6 text-sm",
  lg: "h-13 px-7 text-[15px] md:h-14 md:px-8 md:text-base",
};

const variants = {
  solid:
    "bg-teal text-white shadow-[0_8px_24px_-8px_rgb(0_156_154/0.55)] hover:bg-teal-bright",
  navy: "bg-navy text-white hover:bg-navy-deep",
  outline:
    "border-[1.5px] border-navy text-navy hover:border-teal hover:bg-teal hover:text-white",
};

export default function Button({
  href,
  children,
  size = "md",
  variant = "solid",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-3 rounded-[10px] font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
