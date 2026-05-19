import Link from "next/link";
import { Card } from "./Card";

export function CategoryCard({
  icon,
  title,
  description,
  href,
  accentLabel,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  accentLabel?: string;
}) {
  return (
    <Card className="group flex flex-col gap-4 p-6 transition hover:-translate-y-1 hover:border-pink-hot hover:shadow-md">
      <div className="flex items-center gap-4">
        <div className="flex size-12 items-center justify-center rounded-xl bg-pink-pale text-pink-hot">
          {icon}
        </div>
        {accentLabel ? (
          <span className="rounded-full bg-pink-pale px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-plum">
            {accentLabel}
          </span>
        ) : null}
      </div>
      <div className="space-y-3">
        <h3 className="font-display text-2xl text-plum">{title}</h3>
        <p className="text-sm text-muted">{description}</p>
      </div>
      <Link
        href={href}
        className="mt-auto text-sm font-semibold text-pink-hot underline-offset-4 transition hover:underline focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot focus-visible:ring-offset-2"
      >
        Explore
      </Link>
    </Card>
  );
}
