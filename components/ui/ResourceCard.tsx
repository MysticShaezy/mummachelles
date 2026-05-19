import Link from "next/link";
import { Card } from "./Card";

export function ResourceCard({
  title,
  description,
  href,
  eyebrow,
  id,
}: {
  title: string;
  description: string;
  href: string;
  eyebrow?: string;
  id?: string;
}) {
  const root = (
    <Card className="flex h-full flex-col gap-3 p-6" id={id}>
      <div className="space-y-3">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {eyebrow}
          </p>
        ) : null}
        <h3 className="font-display text-xl text-plum">{title}</h3>
        <p className="text-sm text-muted">{description}</p>
      </div>
      <Link
        href={href}
        className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-pink-hot underline-offset-4 transition hover:underline focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot focus-visible:ring-offset-2"
      >
        Read notes
      </Link>
    </Card>
  );

  return root;
}
