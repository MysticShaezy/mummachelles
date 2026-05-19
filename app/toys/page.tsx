import { CldImage } from "@/components/ui/cloudinary";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { IMAGES } from "@/lib/images";
import { WP_ORIGIN } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Toys storefront placeholder",
  pathname: "/toys",
  description:
    "Preview route explains how WooCommerce or block themes power tactile toy grids proxied beneath the apex domain.",
});

export default function ToysPlaceholderPage() {
  return (
    <div className="space-y-8 rounded-[2rem] border border-dashed border-plum px-10 py-16 text-muted">
      <BreadcrumbJsonLd items={[{ label: "Home", href: "/" }, { label: "Toys" }]} />
      <div className="overflow-hidden rounded-2xl shadow-lg ring-2 ring-pink-soft/40">
        <CldImage
          src={IMAGES.toys.hero}
          alt="Quality toys for playful learning"
          width={1200}
          height={675}
          className="aspect-video w-full object-cover"
          sizes="(max-width: 1024px) 92vw, 56rem"
        />
      </div>
      <p className="text-xs uppercase tracking-[0.3em] text-pink-hot">Placeholder route</p>
      <h1 className="font-display text-4xl text-plum">Toys</h1>
      <p className="max-w-3xl">
        SKU photography, tactile warnings, age bands, and return policies remain inside WordPress for faster merchandiser iteration. Apex domain rewrites stitch everything together with Next marketing slices.
      </p>
      <a
        className="inline-flex rounded-full border border-plum px-6 py-2 text-plum transition hover:bg-pink-pale focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum"
        href={`${WP_ORIGIN}/product/`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Open WooCommerce catalogue on hosted stack
      </a>
      <p className="text-sm">
        External hops intentionally exit to the managed WordPress host until reverse proxy QA finishes.
      </p>
    </div>
  );
}
