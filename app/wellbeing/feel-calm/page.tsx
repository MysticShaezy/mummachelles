import { WellbeingProductLayout } from "@/components/wellbeing/WellbeingProductLayout";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { FEEL_CALM_CONTENT } from "@/lib/wellbeing-products";
import { createPageMetadata } from "@/lib/metadata";

/** PDF links: FEEL_CALM_CONTENT pdfHref and guideHref from lib/wellbeing-pdf-url.ts (env override or public/wellbeing/pdfs/). Hero video: IMAGES.videos.feelCalm via WellbeingProductVideoBlock. */

export const metadata = createPageMetadata({
  title: "MYNuDay360 Feel Calm",
  pathname: "/wellbeing/feel-calm",
  description:
    "Support for mood balance and a healthy stress response. Nutritional supplement information from Mumma Chelles. Consult your healthcare professional before use.",
});

export default function FeelCalmPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Wellbeing", href: "/wellbeing" },
          { label: FEEL_CALM_CONTENT.breadcrumbLabel },
        ]}
      />
      <WellbeingProductLayout content={FEEL_CALM_CONTENT} />
    </>
  );
}
