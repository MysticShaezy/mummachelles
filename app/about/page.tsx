import Link from "next/link";
import { CldImage } from "@/components/ui/cloudinary";
import {
  Blocks,
  BookOpen,
  FolderOpen,
  MessageSquare,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";
import {
  BeeDecoration,
  DottedTrail,
  HeartFloat,
} from "@/components/home/decorative";
import { WhyIDoItSection } from "@/components/about/WhyIDoItSection";
import { InViewSection } from "@/components/sections/InViewSection";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { IMAGES } from "@/lib/images";

export const metadata = createPageMetadata({
  title: "About Mumma Chelles",
  pathname: "/about",
  description:
    "Educator, mentor, and advocate for children, families, and educators. Support with heart and experience from Mumma Chelle.",
});

const liftCard =
  "flex h-full flex-col gap-4 rounded-2xl border border-pink-soft bg-white p-6 shadow-md shadow-pink-soft/10 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-pink-soft/20 md:p-8";

const liftExploreCardOuter =
  "flex h-full flex-col overflow-hidden rounded-2xl border border-pink-soft bg-white shadow-md shadow-pink-soft/10 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-pink-soft/25";

const liftExploreCardBody =
  "flex flex-1 flex-col gap-4 rounded-b-2xl rounded-t-none p-6";

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

export default function AboutPage() {
  return (
    <div className="-mx-4 overflow-x-hidden pb-16 sm:-mx-6 lg:-mx-10">
      <BreadcrumbJsonLd
        items={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <FullBleed bgClassName="bg-white">
        <InViewSection className="relative pt-20 pb-20 md:pt-24 md:pb-28">
          <DottedTrail className="pointer-events-none absolute bottom-[15%] left-[4%] w-28 -rotate-6 opacity-60 md:w-36" />
          <Inner>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl shadow-lg ring-2 ring-pink-soft/50 lg:mx-0">
                <CldImage
                  src={IMAGES.photography.michelleAbout}
                  alt="Michelle Thomas, Mumma Chelles"
                  width={600}
                  height={800}
                  crop="fill"
                  gravity="north"
                  className="h-full w-full object-cover"
                  sizes="(max-width: 1024px) 92vw, 28rem"
                  priority
                />
              </div>
              <div className="relative z-[1] space-y-6">
                <h1 className="text-xs font-semibold uppercase tracking-[0.28em] text-gold md:text-sm">
                  About Mumma Chelles
                </h1>
                <p className="font-display text-lg italic leading-relaxed text-pink-hot md:text-xl">
                  Hi, I&apos;m Michelle Thomas, but most people know me simply
                  as Mumma Chelle
                </p>
                <div className="space-y-4 text-lg text-muted">
                  <p>
                    I&apos;m an educator, mentor, and advocate for children,
                    families, and educators.
                  </p>
                  <p>
                    With over 37 years&apos; experience in special education,
                    family support, and complex care supports. I&apos;ve built a
                    career around connection, compassion, and community.
                  </p>
                </div>
              </div>
            </div>
          </Inner>
        </InViewSection>
      </FullBleed>

      <FullBleed bgClassName="bg-pink-pale">
        <InViewSection className="relative py-20 md:py-28">
          <HeartFloat className="pointer-events-none absolute left-[8%] top-[12%] size-7 opacity-55" />
          <BeeDecoration className="pointer-events-none absolute bottom-10 right-[8%] size-12 opacity-60 md:size-14" />
          <Inner>
            <div className="mx-auto max-w-3xl space-y-6 text-center lg:text-left">
              <h2 className="font-display text-3xl text-plum md:text-4xl">
                Support with Heart and Experience
              </h2>
              <p className="text-lg leading-relaxed text-muted md:text-xl">
                Mumma Chelle began as a nickname, but it quickly became
                something more: a reflection of how I work and who I am.
                I&apos;m passionate about creating a warm approach with
                practical tools that make a difference, whether that&apos;s a
                carefully chosen children&apos;s book, a resource for educators,
                or a course that helps carers feel more confident. My mission is
                to grow Mumma Chelles into a trusted space where families and
                professionals can find what they need to help children flourish.
              </p>
            </div>
          </Inner>
        </InViewSection>
      </FullBleed>

      <FullBleed bgClassName="bg-white">
        <InViewSection className="relative py-20 md:py-28">
          <DottedTrail className="pointer-events-none absolute right-[6%] top-[20%] w-32 rotate-12 opacity-55" />
          <Inner>
            <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center lg:mx-0 lg:text-left">
              <h2 className="font-display text-3xl text-plum md:text-4xl">
                What I Do
              </h2>
              <p className="text-lg text-muted md:text-xl">
                I support families, educators, and organisations to raise
                emotionally resilient children through:
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <article className={liftCard}>
                <MessageSquare
                  className="size-10 text-pink-hot"
                  strokeWidth={1.6}
                  aria-hidden
                />
                <h3 className="font-display text-xl text-plum md:text-2xl">
                  Workshops & Keynote Speaking
                </h3>
                <p className="flex-1 text-muted">
                  Engaging, evidence-based sessions on topics like behaviour,
                  connection, and emotional regulation, delivered with warmth,
                  realness, and practical strategies.
                </p>
              </article>
              <article className={liftCard}>
                <BookOpen
                  className="size-10 text-pink-hot"
                  strokeWidth={1.6}
                  aria-hidden
                />
                <h3 className="font-display text-xl text-plum md:text-2xl">
                  Book Recommendations
                </h3>
                <p className="flex-1 text-muted">
                  A growing collection of carefully curated children&apos;s and
                  parenting books that open conversations, support emotional
                  literacy, and bring comfort through connection.
                </p>
              </article>
              <article className={liftCard}>
                <Users
                  className="size-10 text-pink-hot"
                  strokeWidth={1.6}
                  aria-hidden
                />
                <h3 className="font-display text-xl text-plum md:text-2xl">
                  Professional Development
                </h3>
                <p className="flex-1 text-muted">
                  Bespoke training for early childhood centres, schools, and
                  community services, with a focus on trauma-aware,
                  relationship-based practice.
                </p>
              </article>
            </div>
          </Inner>
        </InViewSection>
      </FullBleed>

      <FullBleed bgClassName="bg-pink-pale">
        <InViewSection className="relative py-20 md:py-28">
          <HeartFloat className="pointer-events-none absolute bottom-[18%] right-[12%] size-8 opacity-45" />
          <Inner>
            <WhyIDoItSection />
          </Inner>
        </InViewSection>
      </FullBleed>

      <FullBleed bgClassName="bg-white">
        <InViewSection className="relative py-20 md:py-28">
          <BeeDecoration className="pointer-events-none absolute left-[5%] top-[15%] size-12 opacity-55 md:size-14" />
          <Inner>
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold md:text-sm">
                Explore My Recommendations
              </p>
              <h2 className="mt-4 font-display text-3xl text-plum md:text-4xl">
                <span className="text-pink-hot">Cherish, Love & Nourish</span>{" "}
                with Mumma Chelles Curated Picks
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <article className={liftExploreCardOuter}>
                <CldImage
                  src={IMAGES.sections.booksCard}
                  alt=""
                  width={400}
                  height={200}
                  crop="fill"
                  gravity="center"
                  className="w-full h-40 object-cover rounded-t-2xl"
                  sizes="(max-width: 768px) 92vw, 28rem"
                />
                <div className={liftExploreCardBody}>
                  <BookOpen
                    className="size-11 text-pink-hot"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <h3 className="font-display text-xl text-plum">Books to Cherish</h3>
                  <p className="flex-1 text-muted">
                    Beautifully written stories and educational reads that spark
                    imagination, encourage connection, and create meaningful
                    moments between you and your little ones.
                  </p>
                  <Link
                    href="/books"
                    className="mt-auto text-sm font-semibold text-pink-hot underline-offset-4 transition hover:underline"
                  >
                    View Books
                  </Link>
                </div>
              </article>
              <article className={liftExploreCardOuter}>
                <CldImage
                  src={IMAGES.sections.toysCard}
                  alt=""
                  width={400}
                  height={200}
                  crop="fill"
                  gravity="center"
                  className="w-full h-40 object-cover rounded-t-2xl"
                  sizes="(max-width: 768px) 92vw, 28rem"
                />
                <div className={liftExploreCardBody}>
                  <Blocks
                    className="size-11 text-pink-hot"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <h3 className="font-display text-xl text-plum">Toys to Love</h3>
                  <p className="flex-1 text-muted">
                    A handpicked collection of engaging, high-quality toys designed
                    to inspire creativity, support development, and bring endless
                    joy to curious minds.
                  </p>
                  <Link
                    href="/toys"
                    className="mt-auto text-sm font-semibold text-pink-hot underline-offset-4 transition hover:underline"
                  >
                    View Toys
                  </Link>
                </div>
              </article>
              <article className={liftExploreCardOuter}>
                <CldImage
                  src={IMAGES.sections.resourcesCard}
                  alt=""
                  width={400}
                  height={200}
                  crop="fill"
                  gravity="center"
                  className="w-full h-40 object-cover rounded-t-2xl"
                  sizes="(max-width: 768px) 92vw, 28rem"
                />
                <div className={liftExploreCardBody}>
                  <FolderOpen
                    className="size-11 text-pink-hot"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <h3 className="font-display text-xl text-plum">
                    Resources to Nourish
                  </h3>
                  <p className="flex-1 text-muted">
                    Practical and thoughtful tools to support your health,
                    wellbeing, parenting, and caring journey, empowering you with
                    knowledge, reassurance, and calm confidence.
                  </p>
                  <Link
                    href="/resources"
                    className="mt-auto text-sm font-semibold text-pink-hot underline-offset-4 transition hover:underline"
                  >
                    View Resources
                  </Link>
                </div>
              </article>
            </div>
          </Inner>
        </InViewSection>
      </FullBleed>
    </div>
  );
}
