import { Card } from "./Card";

export function ProductCard({
  title,
  tagline,
  priceLabel,
  footnote,
}: {
  title: string;
  tagline: string;
  priceLabel: string;
  footnote?: string;
}) {
  return (
    <Card className="flex h-full flex-col gap-3 p-6">
      <div className="relative aspect-video overflow-hidden rounded-xl bg-pink-pale ring-2 ring-plum">
        <div className="absolute inset-0 flex items-center justify-center text-[11px] font-semibold uppercase tracking-[0.3em] text-plum">
          Placeholder
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-[0.2em] text-gold">Affiliate pick</p>
        <h3 className="font-display text-2xl text-plum">{title}</h3>
        <p className="text-sm text-muted">{tagline}</p>
        <p className="text-lg font-semibold text-plum">{priceLabel}</p>
        <p className="text-xs text-muted">
          {footnote ??
            "Product photography and deep links arrive from WordPress and Amazon Associates disclosures."}
        </p>
      </div>
    </Card>
  );
}
