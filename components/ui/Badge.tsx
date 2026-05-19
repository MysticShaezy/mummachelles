export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-gold bg-pink-pale px-3 py-1 text-xs font-semibold uppercase tracking-wide text-plum ${className ?? ""}`}
    >
      {children}
    </span>
  );
}
