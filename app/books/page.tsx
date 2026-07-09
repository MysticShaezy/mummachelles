import Link from "next/link";
import { CldImage } from "@/components/ui/cloudinary";
import type { ReactNode } from "react";
import { SlideInSection } from "@/components/books/SlideInSection";
import {
  BeeDecoration,
  DottedTrail,
  HeartFloat,
} from "@/components/home/decorative";
import { InViewSection } from "@/components/sections/InViewSection";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { IMAGES } from "@/lib/images";
import { getWpPosts, stripHtml, WP_CATEGORY_IDS, type WpPost } from "@/lib/wordpress";

/** Hardcoded slug lists — order preserved for display. */
const BOOKS_BY_CATEGORY = {
  "childrens-literature": [
    "a-kids-book-about-boredom",
    "the-very-hungry-caterpillar",
    "the-truck-cat",
    "the-wobbly-bike",
    "always-was-always-will-be",
    "guess-how-much-i-love-you",
    "the-magic-faraway-tree",
    "nevermoor-the-first-three-books",
    "the-last-bear",
    "jetty-jumping",
  ],
  "teenager-reads": [
    "anxiety-workbook-for-teens",
    "eragon",
    "the-extremely-embarrassing-life-of-lotte-brooks",
    "the-wildest-dreams-bookshop",
    "the-mushroom-in-the-sky",
    "the-adhd-teen-survival-guide",
    "the-adhd-teen-brain-organiser-for-school",
    "im-not-really-here",
  ],
  "health-and-wellbeing": [
    "atomic-habits",
    "becoming-supernatural",
    "fast-like-a-girl",
    "eat-like-a-girl",
    "the-myth-of-normal",
    "the-menopause-reset",
  ],
  parenting: [
    "the-whole-brain-child",
    "building-resilience-in-children-and-teens",
    "the-power-of-showing-up",
    "a-growth-mindset-coach",
    "hold-on-to-your-kids",
  ],
} as const;

type BookSectionKey = keyof typeof BOOKS_BY_CATEGORY;

function slugMatches(postSlug: string, listSlug: string): boolean {
  return postSlug === listSlug || postSlug.startsWith(`${listSlug}-`);
}

function groupBooksBySlug(posts: WpPost[]): Record<BookSectionKey, WpPost[]> {
  const grouped: Record<BookSectionKey, WpPost[]> = {
    "childrens-literature": [],
    "teenager-reads": [],
    "health-and-wellbeing": [],
    parenting: [],
  };

  const used = new Set<string>();

  for (const section of Object.keys(BOOKS_BY_CATEGORY) as BookSectionKey[]) {
    for (const listSlug of BOOKS_BY_CATEGORY[section]) {
      const post = posts.find(
        (p) => !used.has(p.slug) && slugMatches(p.slug, listSlug),
      );
      if (post) {
        grouped[section].push(post);
        used.add(post.slug);
      }
    }
  }

  return grouped;
}

export const metadata = createPageMetadata({
  title: "Books to Cherish",
  pathname: "/books",
  description:
    "Handpicked books for children's literature, teens, health and wellbeing, and parenting. Curated by Mumma Chelles.",
});

const featuredMiniCard =
  "flex flex-col gap-2 rounded-xl border border-pink-soft bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md";

const BOOK_SECTIONS: {
  key: BookSectionKey;
  eyebrow: string;
  title: string;
  description: string;
  imageKey: keyof typeof IMAGES.books;
  imageAlt: string;
  slideFrom: "left" | "right";
  viewAllLabel: string;
  imageOrder: "first" | "second";
  bgClassName: string;
  buttonOffsetClass: string;
}[] = [
  {
    key: "childrens-literature",
    eyebrow: "Children's Literature",
    title: "Stories that Spark Imagination",
    description:
      "Our carefully chosen children's books celebrate diversity, emotional growth and imagination helping young readers see themselves and others through inclusive, engaging stories.",
    imageKey: "childrens",
    imageAlt: "Children's literature and young readers",
    slideFrom: "left",
    viewAllLabel: "View All Children's Literature",
    imageOrder: "first",
    bgClassName: "bg-white",
    buttonOffsetClass: "focus-visible:ring-offset-white",
  },
  {
    key: "teenager-reads",
    eyebrow: "Teenager Reads",
    title: "Books for Growing Minds",
    description:
      "From coming-of-age journeys to mental health guides, these books support teens in understanding themselves and the world around them, encouraging confidence, empathy and critical thinking.",
    imageKey: "teenager",
    imageAlt: "Teenager reads and young adult books",
    slideFrom: "right",
    viewAllLabel: "View All Teenager Reads",
    imageOrder: "second",
    bgClassName: "bg-pink-pale",
    buttonOffsetClass: "focus-visible:ring-offset-pink-pale",
  },
  {
    key: "health-and-wellbeing",
    eyebrow: "Health & Wellbeing",
    title: "Insight and Compassion for Daily Practice",
    description:
      "Explore titles that help educators, carers and families understand mental health, sensory needs, trauma-informed care and holistic wellbeing, bringing insight and compassion into daily practice.",
    imageKey: "healthWellbeing",
    imageAlt: "Health and wellbeing books",
    slideFrom: "left",
    viewAllLabel: "View All Health & Wellbeing",
    imageOrder: "first",
    bgClassName: "bg-white",
    buttonOffsetClass: "focus-visible:ring-offset-white",
  },
  {
    key: "parenting",
    eyebrow: "Parenting",
    title: "Guidance for Every Parenting Journey",
    description:
      "Thoughtful, research-backed books offering practical tools and heartfelt perspectives, supporting parents to raise children with connection, respect and understanding.",
    imageKey: "parenting",
    imageAlt: "Parenting books and guidance",
    slideFrom: "right",
    viewAllLabel: "View All Parenting Books",
    imageOrder: "second",
    bgClassName: "bg-pink-pale",
    buttonOffsetClass: "focus-visible:ring-offset-pink-pale",
  },
];

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

function BooksCategoryImage({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg ring-2 ring-pink-soft/40">
      <CldImage
        src={src}
        alt={alt}
        width={600}
        height={450}
        crop="fill"
        gravity="center"
        className="h-full w-full rounded-2xl object-cover"
        sizes="(max-width: 1024px) 92vw, 50vw"
        priority={priority}
      />
    </div>
  );
}

function BookCards({ books }: { books: WpPost[] }) {
  if (books.length === 0) {
    return (
      <p className="text-sm text-muted">Book recommendations coming soon.</p>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {books.map((book) => (
        <div key={book.id} className={featuredMiniCard}>
          <p className="text-sm font-semibold leading-snug text-plum">
            {stripHtml(book.title.rendered)}
          </p>
          <Link
            href={`/books/${book.slug}`}
            className="mt-auto text-xs font-semibold text-pink-hot underline-offset-4 transition hover:underline"
          >
            View Book
          </Link>
        </div>
      ))}
    </div>
  );
}

export default async function BooksPage() {
  const posts = await getWpPosts(WP_CATEGORY_IDS.books);
  const booksBySection = groupBooksBySlug(posts);

  return (
    <div className="-mx-4 overflow-x-hidden pb-16 sm:-mx-6 lg:-mx-10">
      <BreadcrumbJsonLd items={[{ label: "Home", href: "/" }, { label: "Books" }]} />

      <FullBleed bgClassName="bg-pink-pale">
        <InViewSection className="relative pt-24 pb-16 md:pt-28 md:pb-20">
          <HeartFloat className="pointer-events-none absolute right-[8%] top-[14%] size-8 opacity-45" />
          <Inner>
            <div className="mx-auto max-w-3xl space-y-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold md:text-sm">
                Book Recommendations
              </p>
              <h1 className="font-display text-4xl text-plum md:text-5xl lg:text-[3.25rem]">
                Books to Cherish{" "}
                <span className="block pt-2 font-display text-2xl italic text-pink-hot md:inline md:pl-2 md:text-[2rem]">
                  Handpicked to Inspire, Challenge & Grow Curious Minds
                </span>
              </h1>
              <p className="text-lg font-medium text-plum md:text-xl">
                Here you&apos;ll find:
              </p>
              <div className="space-y-4 text-center text-muted md:text-lg">
                <p>
                  <span className="font-semibold text-plum">
                    Children&apos;s Literature:
                  </span>{" "}
                  Stories that celebrate diversity, emotional growth, and
                  imagination.
                </p>
                <p>
                  <span className="font-semibold text-plum">
                    Teenager Reads:
                  </span>{" "}
                  Books to support teens in understanding themselves and the
                  world around them.
                </p>
                <p>
                  <span className="font-semibold text-plum">
                    Health & Wellbeing:
                  </span>{" "}
                  Books that bring insight and compassion into everyday life and
                  professional practice.
                </p>
                <p>
                  <span className="font-semibold text-plum">Parenting:</span>{" "}
                  Guidance for every parenting journey.
                </p>
              </div>
              <p className="font-medium text-pink-hot md:text-lg">
                Choose Your Category Below
              </p>
            </div>
          </Inner>
        </InViewSection>
      </FullBleed>

      {BOOK_SECTIONS.map((section, index) => {
        const books = booksBySection[section.key];
        const sectionId = section.key;
        const decoration =
          index === 0 ? (
            <DottedTrail className="pointer-events-none absolute bottom-[12%] left-[5%] w-32 opacity-55 md:w-40" />
          ) : index === 1 ? (
            <BeeDecoration className="pointer-events-none absolute right-[6%] top-[18%] size-14 opacity-55 md:size-16" />
          ) : index === 2 ? (
            <HeartFloat className="pointer-events-none absolute bottom-[10%] right-[10%] size-7 opacity-40" />
          ) : (
            <DottedTrail className="pointer-events-none absolute left-[8%] top-[20%] w-36 rotate-12 opacity-50" />
          );

        const image = (
          <BooksCategoryImage
            src={IMAGES.books[section.imageKey]}
            alt={section.imageAlt}
            priority={index === 0}
          />
        );

        const copy = (
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              {section.eyebrow}
            </p>
            <h2 className="font-display text-3xl text-plum md:text-4xl">
              {section.title}
            </h2>
            <p className="text-lg leading-relaxed text-muted">
              {section.description}
            </p>
            <BookCards books={books} />
            <Link
              href="/books"
              className={`inline-flex rounded-full bg-pink-hot px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-md shadow-pink-hot/25 transition hover:-translate-y-0.5 hover:bg-[#cf3f6f] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot focus-visible:ring-offset-2 ${section.buttonOffsetClass}`}
            >
              {section.viewAllLabel}
            </Link>
          </div>
        );

        return (
          <FullBleed key={section.key} bgClassName={section.bgClassName}>
            <section
              id={sectionId}
              className="relative scroll-mt-28 py-20 md:py-28"
            >
              {decoration}
              <Inner>
                <SlideInSection from={section.slideFrom}>
                  <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                    {section.imageOrder === "first" ? (
                      <>
                        {image}
                        {copy}
                      </>
                    ) : (
                      <>
                        <div className="order-2 lg:order-1">{copy}</div>
                        <div className="order-1 lg:order-2">{image}</div>
                      </>
                    )}
                  </div>
                </SlideInSection>
              </Inner>
            </section>
          </FullBleed>
        );
      })}

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
    </div>
  );
}
