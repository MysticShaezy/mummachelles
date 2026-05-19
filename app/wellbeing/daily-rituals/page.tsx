import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { Button } from "@/components/ui/Button";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Daily rituals for regulated days",
  pathname: "/wellbeing/daily-rituals",
  description:
    "Rhythm prompts for carers balancing classroom acoustics with late afternoon meltdown windows.",
});

export default function DailyRitualsPage() {
  return (
    <div className="space-y-8">
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Wellbeing", href: "/wellbeing" },
          { label: "Daily rituals" },
        ]}
      />
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-pink-hot">Track one</p>
        <h1 className="font-display text-4xl text-plum">Daily rituals</h1>
        <p className="max-w-2xl text-muted">
          Ritual cards migrate from Markdown staging into CMS blocks. Preview copy here honours brevity commitments for mobile carers.
        </p>
      </header>
      <ul className="list-disc space-y-3 pl-6 text-muted">
        <li>Micro stretch sequences before school bells.</li>
        <li>Sound baths under five minutes recorded on portable speakers.</li>
        <li>Transition scripts when shifting from playground mulch to tiled hallways.</li>
      </ul>
      <Button href="/contact" variant="secondary">
        Invite Michelle to annotate your roster
      </Button>
    </div>
  );
}
