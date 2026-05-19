import { SITE_URL } from "@/lib/site";
import { JsonLd } from "./JsonLd";

type Item = {
  label: string;
  href?: string;
};

type Props = {
  items: Item[];
};

export function buildBreadcrumbJsonLd(origin: string, items: Item[]) {
  const els = items
    .map((item, index) =>
      index === items.length - 1
        ? {
            "@type": "ListItem",
            position: index + 1,
            name: item.label,
          }
        : {
            "@type": "ListItem",
            position: index + 1,
            name: item.label,
            item: `${origin}${item.href ?? "/"}`,
          }
    );

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: els,
  };
}
export function BreadcrumbJsonLd({ items }: Props) {
  const origin = SITE_URL.replace(/\/$/, "");

  return <JsonLd data={buildBreadcrumbJsonLd(origin, items)} />;
}
