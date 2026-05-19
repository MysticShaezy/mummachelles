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

export const metadata = createPageMetadata({
  title: "Books to Cherish",
  pathname: "/books",
  description:
    "Handpicked books for children's literature, teens, health and wellbeing, and parenting. Curated by Mumma Chelles.",
});

const featuredMiniCard =
  "flex flex-col gap-2 rounded-xl border border-pink-soft bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md";

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
        className="rounded-2xl w-full h-full object-cover"
        sizes="(max-width: 1024px) 92vw, 50vw"
        priority={priority}
      />
    </div>
  );
}

function FeaturedBooks({
  titles,
}: {
  titles: readonly [string, string, string];
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {titles.map((title) => (
        <div key={title} className={featuredMiniCard}>
          <p className="text-sm font-semibold leading-snug text-plum">{title}</p>
          <Link
            href="/books"
            className="mt-auto text-xs font-semibold text-pink-hot underline-offset-4 transition hover:underline"
          >
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
}

export default function BooksPage() {
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
                <span className="block pt-2 font-display text-2xl italic text-pink-hot md:inline md:pl-2 md:text-3xl lg:text-[2rem]">
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

      <FullBleed bgClassName="bg-white">
        <section className="relative py-20 md:py-28">
          <DottedTrail className="pointer-events-none absolute bottom-[12%] left-[5%] w-32 opacity-55 md:w-40" />
          <Inner>
            <SlideInSection from="left">
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                <BooksCategoryImage
                  src={IMAGES.books.childrens}
                  alt="Children's literature and young readers"
                  priority
                />
                <div className="space-y-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                    Children&apos;s Literature
                  </p>
                  <h2 className="font-display text-3xl text-plum md:text-4xl">
                    Stories that Spark Imagination
                  </h2>
                  <p className="text-lg leading-relaxed text-muted">
                    Our carefully chosen children&apos;s books celebrate diversity,
                    emotional growth and imagination helping young readers see
                    themselves and others through inclusive, engaging stories.
                  </p>
                  <FeaturedBooks
                    titles={[
                      "A Kids Book About Boredom",
                      "The Last Bear",
                      "Nevermoor: The First Three Books",
                    ]}
                  />
                  <Link
                    href="/books"
                    className="inline-flex rounded-full bg-pink-hot px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-md shadow-pink-hot/25 transition hover:-translate-y-0.5 hover:bg-[#cf3f6f] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    View All Children&apos;s Literature
                  </Link>
                </div>
              </div>
            </SlideInSection>
          </Inner>
        </section>
      </FullBleed>

      <FullBleed bgClassName="bg-pink-pale">
        <section className="relative py-20 md:py-28">
          <BeeDecoration className="pointer-events-none absolute right-[6%] top-[18%] size-14 opacity-55 md:size-16" />
          <Inner>
            <SlideInSection from="right">
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                <div className="order-2 space-y-6 lg:order-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                    Teenager Reads
                  </p>
                  <h2 className="font-display text-3xl text-plum md:text-4xl">
                    Books for Growing Minds
                  </h2>
                  <p className="text-lg leading-relaxed text-muted">
                    From coming-of-age journeys to mental health guides, these
                    books support teens in understanding themselves and the world
                    around them, encouraging confidence, empathy and critical
                    thinking.
                  </p>
                  <FeaturedBooks
                    titles={[
                      "The ADHD Teen Brain Organiser for School",
                      "The ADHD Teen Survival Guide",
                      "The Mushroom in the Sky",
                    ]}
                  />
                  <Link
                    href="/books"
                    className="inline-flex rounded-full bg-pink-hot px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-md shadow-pink-hot/25 transition hover:-translate-y-0.5 hover:bg-[#cf3f6f] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot focus-visible:ring-offset-2 focus-visible:ring-offset-pink-pale"
                  >
                    View All Teenager Reads
                  </Link>
                </div>
                <div className="order-1 lg:order-2">
                  <BooksCategoryImage
                    src={IMAGES.books.teenager}
                    alt="Teenager reads and young adult books"
                  />
                </div>
              </div>
            </SlideInSection>
          </Inner>
        </section>
      </FullBleed>

      <FullBleed bgClassName="bg-white">
        <section className="relative py-20 md:py-28">
          <HeartFloat className="pointer-events-none absolute bottom-[10%] right-[10%] size-7 opacity-40" />
          <Inner>
            <SlideInSection from="left">
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                <BooksCategoryImage
                  src={IMAGES.books.healthWellbeing}
                  alt="Health and wellbeing books"
                />
                <div className="space-y-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                    Health & Wellbeing
                  </p>
                  <h2 className="font-display text-3xl text-plum md:text-4xl">
                    Insight and Compassion for Daily Practice
                  </h2>
                  <p className="text-lg leading-relaxed text-muted">
                    Explore titles that help educators, carers and families
                    understand mental health, sensory needs, trauma-informed care
                    and holistic wellbeing - bringing insight and compassion into
                    daily practice.
                  </p>
                  <FeaturedBooks
                    titles={[
                      "The Myth of Normal",
                      "Eat Like A Girl",
                      "The Menopause Reset",
                    ]}
                  />
                  <Link
                    href="/books"
                    className="inline-flex rounded-full bg-pink-hot px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-md shadow-pink-hot/25 transition hover:-translate-y-0.5 hover:bg-[#cf3f6f] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    View All Health & Wellbeing
                  </Link>
                </div>
              </div>
            </SlideInSection>
          </Inner>
        </section>
      </FullBleed>

      <FullBleed bgClassName="bg-pink-pale">
        <section className="relative py-20 md:py-28">
          <DottedTrail className="pointer-events-none absolute left-[8%] top-[20%] w-36 rotate-12 opacity-50" />
          <Inner>
            <SlideInSection from="right">
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                <div className="order-2 space-y-6 lg:order-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                    Parenting
                  </p>
                  <h2 className="font-display text-3xl text-plum md:text-4xl">
                    Guidance for Every Parenting Journey
                  </h2>
                  <p className="text-lg leading-relaxed text-muted">
                    Thoughtful, research-backed books offering practical tools and
                    heartfelt perspectives, supporting parents to raise children
                    with connection, respect and understanding.
                  </p>
                  <FeaturedBooks
                    titles={[
                      "Hold on to Your Kids",
                      "A Growth Mindset Coach",
                      "The Power of Showing Up",
                    ]}
                  />
                  <Link
                    href="/books"
                    className="inline-flex rounded-full bg-pink-hot px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-md shadow-pink-hot/25 transition hover:-translate-y-0.5 hover:bg-[#cf3f6f] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot focus-visible:ring-offset-2 focus-visible:ring-offset-pink-pale"
                  >
                    View All Parenting Books
                  </Link>
                </div>
                <div className="order-1 lg:order-2">
                  <BooksCategoryImage
                    src={IMAGES.books.parenting}
                    alt="Parenting books and guidance"
                  />
                </div>
              </div>
            </SlideInSection>
          </Inner>
        </section>
      </FullBleed>

      <FullBleed bgClassName="bg-white">
        <InViewSection className="relative py-12 md:py-14">
          <Inner>
            <div className="mx-auto max-w-3xl space-y-6 text-center text-sm leading-relaxed text-muted md:text-base">
              <p>
                Some of the book links on this page direct you to our curated
                Amazon storefront. As an Amazon Associate, Mumma Chelle earns from
                qualifying purchases - at no extra cost to you.
              </p>
              <p>
                Every book recommended here has been carefully selected through a
                blend of professional experience, lived insight, and a whole lot of
                heart. These are titles we truly believe in - chosen to support,
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
