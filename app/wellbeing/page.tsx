import { WellbeingHubPage } from "@/components/wellbeing/WellbeingHubPage";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Wellbeing",
  pathname: "/wellbeing",
  description:
    "Gentle support for busy minds and overloaded nervous systems: Feel Calm, Night Time, and ageLOC Y-Span from Mumma Chelle. Always consult your healthcare professional before starting supplements.",
});

export default function WellbeingPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[{ label: "Home", href: "/" }, { label: "Wellbeing" }]}
      />
      <WellbeingHubPage />
    </>
  );
}
