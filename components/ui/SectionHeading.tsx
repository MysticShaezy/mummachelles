export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-3xl space-y-3 ${alignCls}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-hot">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl text-plum md:text-4xl">{title}</h2>
      {subtitle ? <p className="text-muted text-lg">{subtitle}</p> : null}
    </div>
  );
}
