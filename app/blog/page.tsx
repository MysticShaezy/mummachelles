import type { ReactNode } from "react";
import { WpPostCard } from "@/components/wordpress/WpPostCard";
import { InViewSection } from "@/components/sections/InViewSection";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { getWpPosts, WP_CATEGORY_IDS } from "@/lib/wordpress";

export const metadata = createPageMetadata({
  title: "Blog",
  pathname: "/blog",
  description:
    "Stories, insights, and practical ideas from Mumma Chelles for educators, carers, and families.",
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

export default async function BlogPage() {
  const posts = await getWpPosts(WP_CATEGORY_IDS.blog);

  return (
    <div className="-mx-4 overflow-x-hidden pb-16 sm:-mx-6 lg:-mx-10">
      <BreadcrumbJsonLd
        items={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <FullBleed bgClassName="bg-pink-pale">
        <InViewSection className="relative pt-24 pb-16 md:pt-28 md:pb-20">
          <Inner>
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold md:text-sm">
                Blog
              </p>
              <h1 className="font-display text-4xl text-plum md:text-5xl">
                Stories & <span className="text-pink-hot">Insights</span>
              </h1>
              <p className="text-lg leading-relaxed text-muted">
                Practical ideas, reflections, and resources for educators, carers,
                and families supporting diverse learners.
              </p>
            </div>
          </Inner>
        </InViewSection>
      </FullBleed>

      <FullBleed bgClassName="bg-white">
        <InViewSection className="relative py-12 md:py-14">
          <Inner>
            <div className="mx-auto max-w-3xl space-y-6 text-center text-sm leading-relaxed text-muted md:text-base">
              <p>
                Some of the book links on this page direct you to our curated
                Amazon storefront. As an Amazon Associate, Mumma Chelle earns from
                qualifying purchases, at no extra cost to you.
              </p>
              <p>
                Every book recommended here has been carefully selected through a
                blend of professional experience, lived insight, and a whole lot of
                heart. These are titles we truly believe in, chosen to support,
                uplift, and spark meaningful conversations in your home,
                classroom, or community.
              </p>
              <p>
                Thank you for supporting this space and the work we do by
                purchasing through these links.
              </p>
            </div>
          </Inner>
        </InViewSection>
      </FullBleed>

      <FullBleed bgClassName="bg-blush">
        <InViewSection className="py-16 md:py-24">
          <Inner>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.length > 0 ? (
                posts.map((post) => (
                  <WpPostCard key={post.id} post={post} ctaLabel="Read article" />
                ))
              ) : (
                <p className="col-span-full text-center text-muted">
                  Blog posts coming soon.
                </p>
              )}
            </div>
          </Inner>
        </InViewSection>
      </FullBleed>
    </div>
  );
}
