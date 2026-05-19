import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Nourish cues for picky seasons",
  pathname: "/wellbeing/nourish",
  description:
    "Snack boards, smoothies, and oral sensory scaffolding with transparent disclosures for supplement affiliates.",
});

export default function NourishPage() {
  return (
    <div className="space-y-8">
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Wellbeing", href: "/wellbeing" },
          { label: "Nourish" },
        ]}
      />
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-pink-hot">Track two</p>
        <h1 className="font-display text-4xl text-plum">Nourish pathways</h1>
        <p className="max-w-2xl text-muted">
          Nutrition collaborators review every macro friendly recipe before Mumma Chelles syndicates summaries to carers who cannot binge long blog threads.
        </p>
      </header>
      <div className="space-y-4 text-muted">
        <p>
          Texture staged plates, sipping rituals, and cool down cucumbers appear first on static cards so allied health aides can laminate without fighting cookie banners on WordPress.
        </p>
        <p>
          Nu Skin education modules link only after affiliate compliance copy finalises alongside Australian Therapeutic Goods disclaimers managed by legal counsel.
        </p>
      </div>
    </div>
  );
}
