import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { Button } from "@/components/ui/Button";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Restore rhythms for weary grown ups",
  pathname: "/wellbeing/restore",
  description:
    "Late night journaling scaffolds, breath pacing, and sleep adjacent rituals for carers on call overnight.",
});

export default function RestorePage() {
  return (
    <div className="space-y-8">
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Wellbeing", href: "/wellbeing" },
          { label: "Restore" },
        ]}
      />
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-pink-hot">Track three</p>
        <h1 className="font-display text-4xl text-plum">Restore room</h1>
        <p className="max-w-2xl text-muted">
          After everyone else sleeps, grown ups deserve scripts that honour cortisol dips without prescribing medical outcomes.
        </p>
      </header>
      <ul className="list-disc space-y-3 pl-6 text-muted">
        <li>Partner handoffs with voice memo templates stored privately.</li>
        <li>Playlist swaps bridging WordPress Spotify embed rewrites.</li>
        <li>Micro gratitude lists sized for thumbs on phones at 11 pm.</li>
      </ul>
      <Button href="/members">Peek at nighttime member drops</Button>
    </div>
  );
}
