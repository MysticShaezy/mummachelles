import { WellbeingProductLayout } from "@/components/wellbeing/WellbeingProductLayout";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { Y_SPAN_CONTENT } from "@/lib/wellbeing-products";
import { createPageMetadata } from "@/lib/metadata";

/** PDF links: lib/wellbeing-pdf-url.ts (env or public/wellbeing/pdfs/). Layout flags on howItWorks: split columns, intro above image, clinical secondary split. Video: Y_SPAN_CONTENT.videoSection. */

export const metadata = createPageMetadata({
  title: "ageLOC Y-Span",
  pathname: "/wellbeing/y-span",
  description:
    "Advanced support for healthy ageing, energy, and cellular wellbeing. Nutritional supplement overview from Mumma Chelles. Consult your healthcare professional before use.",
});

export default function YSpanPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Wellbeing", href: "/wellbeing" },
          { label: Y_SPAN_CONTENT.breadcrumbLabel },
        ]}
      />
      <WellbeingProductLayout content={Y_SPAN_CONTENT} />
    </>
  );
}
