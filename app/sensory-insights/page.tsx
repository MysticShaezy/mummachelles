import { SensoryInsightsComingSoon } from "@/components/sensory-insights/SensoryInsightsComingSoon";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Sensory Insights: Coming Soon",
  pathname: "/sensory-insights",
  description:
    "Sensory Insights courses for parents and carers are coming soon. Sign up to be notified when we launch.",
});

export default function SensoryInsightsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[{ label: "Home", href: "/" }, { label: "Sensory Insights" }]}
      />
      <SensoryInsightsComingSoon />
    </>
  );
}
