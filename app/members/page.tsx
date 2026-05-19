import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Members lounge onboarding",
  pathname: "/members",
  description:
    "Invitation only drops for carers, daycare clusters, clinics, or podcast teams partnering with Mumma Chelles affiliates.",
});

export default function MembersPage() {
  return (
    <div className="space-y-10 rounded-[2.5rem] border border-plum bg-gradient-to-b from-blush via-white to-blush px-10 py-16 shadow-inner shadow-pink-soft">
      <BreadcrumbJsonLd items={[{ label: "Home", href: "/" }, { label: "Members" }]} />
      <Badge>Placeholder onboarding</Badge>
      <header className="space-y-4">
        <h1 className="font-display text-4xl text-plum">Members lounge</h1>
        <p className="max-w-3xl text-muted">
          Identity checks, postcode mapping, toolkit budgets, and legal waivers finalize through the WordPress memberships plugin while this route explains the concierge promise.
        </p>
      </header>
      <ul className="list-disc space-y-2 pl-6 text-muted">
        <li>Dedicated Amazon Associates SKU bundles audited monthly.</li>
        <li>Office hours transcripts stored outside public RSS feeds.</li>
        <li>Private Spotify swap lists synced with Sensory Insight columns.</li>
      </ul>
      <div className="flex flex-wrap gap-4">
        <Button href="/contact">Raise your hand</Button>
        <Button href="/terms" variant="ghost" className="border border-plum">
          Review member terms teaser
        </Button>
      </div>
    </div>
  );
}
