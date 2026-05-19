import { WellbeingProductLayout } from "@/components/wellbeing/WellbeingProductLayout";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { NIGHT_TIME_CONTENT } from "@/lib/wellbeing-products";
import { createPageMetadata } from "@/lib/metadata";

/** PDF links: lib/wellbeing-pdf-url.ts (env or public/wellbeing/pdfs/). Layout: howItWorks.howItWorksSplitIngredientColumns. Video: NIGHT_TIME_CONTENT.videoSection. */

export const metadata = createPageMetadata({
  title: "MYNuDay360 Night Time",
  pathname: "/wellbeing/night-time",
  description:
    "Support for restful sleep and a healthy sleep-wake cycle. Nutritional supplement overview from Mumma Chelles. Consult your healthcare professional before use.",
});

export default function NightTimePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Wellbeing", href: "/wellbeing" },
          { label: NIGHT_TIME_CONTENT.breadcrumbLabel },
        ]}
      />
      <WellbeingProductLayout content={NIGHT_TIME_CONTENT} />
    </>
  );
}
