/**
 * Product information PDFs for wellbeing pages.
 *
 * Priority:
 * 1. NEXT_PUBLIC_WELLBEING_PDF_*_URL when set (full https URL or site path starting with /)
 * 2. Static files under public/wellbeing/pdfs/ (see that folder README)
 *
 * Cloudinary: upload each PDF as a Raw asset, copy the delivery URL from the Media Library,
 * and set the matching env var. Built-in Cloudinary public IDs in lib/images.ts are kept as
 * documentation only until assets exist on the cloud.
 */

const DEFAULT_PATHS = {
  feelCalm: "/wellbeing/pdfs/feel-calm-product-information.pdf",
  nightTime: "/wellbeing/pdfs/night-time-product-information.pdf",
  ySpan: "/wellbeing/pdfs/y-span-product-information.pdf",
} as const;

export type WellbeingPdfProduct = keyof typeof DEFAULT_PATHS;

export function wellbeingPdfHref(
  product: WellbeingPdfProduct,
  envOverride: string | undefined,
): string {
  const trimmed = envOverride?.trim();
  if (
    trimmed &&
    (/^https?:\/\//i.test(trimmed) || trimmed.startsWith("/"))
  ) {
    return trimmed;
  }
  return DEFAULT_PATHS[product];
}
