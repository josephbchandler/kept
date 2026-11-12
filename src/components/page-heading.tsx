type Props = {
  eyebrow?: React.ReactNode;
  title: string;
  description?: string;
  meta?: React.ReactNode;
};

export function PageHeading({ eyebrow, title, description, meta }: Props) {
  return (
    <div className="flex flex-col gap-6 border-b border-line pt-12 pb-10 sm:pt-16 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        {eyebrow && <div className="mb-3 text-sm text-muted">{eyebrow}</div>}
        <h1 className="font-serif text-5xl leading-[1.02] tracking-tight sm:text-6xl">{title}</h1>
        {description && <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>}
      </div>
      {meta && <div className="shrink-0 text-sm text-muted">{meta}</div>}
    </div>
  );
}
