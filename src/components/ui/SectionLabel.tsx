import { Plus } from "lucide-react";

export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow inline-flex items-center gap-2.5 rounded-full border border-line bg-cyan-pale py-2 pr-4 pl-2 text-teal">
      <span className="flex size-5 items-center justify-center rounded-full bg-teal text-white">
        <Plus aria-hidden className="size-3.5" strokeWidth={3} />
      </span>
      {children}
    </p>
  );
}
