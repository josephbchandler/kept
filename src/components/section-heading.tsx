import Link from "next/link";

export function SectionHeading({ title, href, linkLabel }: { title: string; href?: string; linkLabel?: string }) {
  return (
    <div className="mb-6 flex items-baseline justify-between gap-4">
      <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">{title}</h2>
      {href && linkLabel && (
        <Link href={href} className="text-sm text-muted underline-offset-4 hover:text-ink hover:underline">
          {linkLabel}
        </Link>
      )}
    </div>
  );
}
