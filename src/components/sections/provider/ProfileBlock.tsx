// Shared wrapper for each content block on the provider profile page.
export default function ProfileBlock({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-44 border-b border-line py-10 last:border-0 lg:scroll-mt-48 lg:py-12">
      <h2 className="text-2xl font-bold tracking-[-0.01em] lg:text-[28px]">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}
