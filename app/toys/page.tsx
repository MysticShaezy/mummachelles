import { CldImage } from "@/components/ui/cloudinary";
import type { ReactNode } from "react";
import { InViewSection } from "@/components/sections/InViewSection";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { IMAGES } from "@/lib/images";
import { getWpPosts, stripHtml, WP_CATEGORY_IDS } from "@/lib/wordpress";
import { decodeEntities } from "@/lib/decode";

export const metadata = createPageMetadata({
  title: "Toys to Love",
  pathname: "/toys",
  description:
    "Handpicked toys for creative play, sensory regulation, and motor skill development. Curated by Mumma Chelles.",
});

function FullBleed({
  bgClassName,
  children,
}: {
  bgClassName: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen ${bgClassName}`}
    >
      {children}
    </div>
  );
}

function Inner({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`.trim()}
    >
      {children}
    </div>
  );
}

export default async function ToysPage() {
  const toys = await getWpPosts(WP_CATEGORY_IDS.toys);

  return (
    <div className="-mx-4 overflow-x-hidden pb-16 sm:-mx-6 lg:-mx-10">
      <BreadcrumbJsonLd items={[{ label: "Home", href: "/" }, { label: "Toys" }]} />

      <FullBleed bgClassName="bg-pink-pale">
        <InViewSection className="relative pt-16 pb-12 md:pt-20 md:pb-16">
          <Inner>
            <div className="mx-auto max-w-3xl space-y-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold md:text-sm">
                Toy Recommendations
              </p>
              <h1 className="font-display text-4xl text-plum md:text-5xl">
                Playful Learning Through{" "}
                <span className="text-pink-hot">Quality Toys</span>
              </h1>
              <p className="text-lg leading-relaxed text-muted">
                A handpicked collection of engaging, high-quality toys designed to
                inspire creativity, support development, and bring endless joy to
                curious minds.
              </p>
              <div className="overflow-hidden rounded-2xl shadow-lg ring-2 ring-pink-soft/40">
                <CldImage
                  src={IMAGES.toys.hero}
                  alt="Quality toys for playful learning"
                  width={1200}
                  height={675}
                  className="aspect-video w-full object-cover"
                  sizes="(max-width: 1024px) 92vw, 56rem"
                  priority
                />
              </div>
            </div>
          </Inner>
        </InViewSection>
      </FullBleed>

      <FullBleed bgClassName="bg-blush">
        <InViewSection className="py-16 md:py-24">
          <Inner>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-12 max-w-6xl">
              {toys.length > 0 ? (
                toys.map((toy) => (
                  <a
                    key={toy.id}
                    href={toy.link}
                    className="group overflow-hidden rounded-2xl border border-pink-soft bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    {toy._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                      <img
                        src={toy._embedded["wp:featuredmedia"][0].source_url}
                        alt={decodeEntities(stripHtml(toy.title.rendered))}
                        className="h-48 w-full object-cover"
                      />
                    )}
                    <div className="p-6">
                      <h3 className="mb-2 font-display text-lg font-semibold text-plum">
                        {decodeEntities(stripHtml(toy.title.rendered))}
                      </h3>
                      <p className="mb-4 text-sm leading-relaxed text-muted">
                        {decodeEntities(
                          stripHtml(toy.excerpt?.rendered ?? "").substring(0, 120)
                        ) + "..."}
                      </p>
                      <span className="text-sm font-medium text-pink-hot group-hover:underline">
                        View Product →
                      </span>
                    </div>
                  </a>
                ))
              ) : (
                <p className="col-span-3 text-center text-muted">
                  Product recommendations coming soon.
                </p>
              )}
            </div>
          </Inner>
        </InViewSection>
      </FullBleed>

      <FullBleed bgClassName="bg-white">
        <InViewSection className="relative py-12 md:py-14">
          <Inner>
            <div className="mx-auto max-w-3xl space-y-6 text-center text-sm leading-relaxed text-muted md:text-base">
              <p>
                As an Amazon Associate I earn from qualifying purchases. This helps
                me to continue to create resources and content.
              </p>
              <p>
                Every toy recommended here has been carefully selected through a
                blend of professional experience, lived insight, and a whole lot of
                heart. These are picks we truly believe in, chosen to support
                development, regulation, and joyful play at home, in care, or in
                the classroom.
              </p>
              <p>
                Thank you for supporting this space and the work we do by
                purchasing through these links.
              </p>
            </div>
          </Inner>
        </InViewSection>
      </FullBleed>
    </div>
  );
}
