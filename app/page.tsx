import Link from "next/link";
import { CldImage } from "@/components/ui/cloudinary";
import type { ReactNode } from "react";
import {
  BeeDecoration,
  BookChildrenBeeIllustration,
  BookHealthHeartIllustration,
  BookParentBeeIllustration,
  BookTeenHouseIllustration,
  CrossPattern,
  DotPatternSide,
  DottedTrail,
  HeartFloat,
  PencilDecoration,
  SparkleDecoration,
} from "@/components/home/decorative";
import { FreeResourcesAccordion } from "@/components/home/FreeResourcesAccordion";
import { HomeContactForm } from "@/components/home/HomeContactForm";
import { ParallaxLite } from "@/components/home/ParallaxLite";
import { InViewSection } from "@/components/sections/InViewSection";
import { ShaderBackground } from "@/components/ui/hero-shader";
import { createPageMetadata } from "@/lib/metadata";
import { IMAGES } from "@/lib/images";
import { SiteSocialIconButtons } from "@/components/icons/SocialIcons";

export const metadata = createPageMetadata({
  title: "Curating Books, Resources & Training",
  pathname: "/",
  description:
    "At Mumma Chelle's, we believe the true measure of society is how we care for its most vulnerable.",
});

const liftSurface =
  "rounded-2xl border border-pink-soft/80 bg-white shadow-md shadow-pink-soft/10 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-pink-soft/25";

const SPOTIFY_PLAYLIST =
  "https://open.spotify.com/playlist/1Rno9tY5Ib76MZ71xXk04r";

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

function WelcomeCollageVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg overflow-visible lg:mx-0">
      <div className="relative w-full translate-x-2 -translate-y-2 md:translate-x-6 md:-translate-y-5 lg:translate-x-8 lg:-translate-y-6">
        <CldImage
          src={IMAGES.sections.welcomeCollage}
          alt="Mumma Chelles - educator reading with children and child playing with wooden toys"
          width={1200}
          height={960}
          className="h-auto w-full rounded-2xl shadow-xl"
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 44vw, 512px"
        />
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <ShaderBackground>
      <div className="-mx-4 overflow-x-hidden pb-8 sm:-mx-6 lg:-mx-10">
        <FullBleed bgClassName="bg-transparent">
          <InViewSection className="relative flex min-h-screen flex-col pb-24 md:pb-28">
            <Inner className="flex w-full flex-1 flex-col justify-center py-6 md:py-10">
              <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
                <div className="pointer-events-none absolute right-4 top-8 flex gap-2 md:right-10 md:top-12 lg:top-16">
                  <HeartFloat className="size-8 md:size-10" />
                  <HeartFloat className="size-6 translate-y-4 md:size-8" />
                </div>
                <div className="relative z-[1] space-y-8">
                  <div className="inline-flex rounded-full bg-pink-hot px-8 py-3 shadow-md shadow-pink-hot/30">
                    <p className="font-display text-sm italic text-white md:text-base">
                      Books to Cherish · Toys to Love · Resources to Nourish
                    </p>
                  </div>
                  <h1 className="font-display text-4xl leading-tight text-plum md:text-5xl lg:text-[3.25rem]">
                    Curating{" "}
                    <span className="text-pink-hot">
                      Books, Resources & Training
                    </span>{" "}
                    to Inspire Educators, Carers and Readers Alike.
                  </h1>
                  <p className="max-w-xl text-lg text-muted">
                    At Mumma Chelle&apos;s, we believe the true measure of
                    society is how we care for its most vulnerable.
                  </p>
                  <Link
                    href="/books"
                    className="inline-flex rounded-full bg-pink-hot px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-md shadow-pink-hot/30 transition hover:-translate-y-0.5 hover:bg-[#cf3f6f] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot focus-visible:ring-offset-2 focus-visible:ring-offset-blush"
                  >
                    Explore Book Recommendations
                  </Link>
                </div>
                <ParallaxLite className="relative z-[1]">
                  <div className={`${liftSurface} relative aspect-[4/5] max-h-[520px] overflow-hidden p-0`}>
                    <CldImage
                      src={IMAGES.photography.michelleHero}
                      alt="Michelle Thomas, Mumma Chelles"
                      width={600}
                      height={800}
                      className="h-full w-full object-cover"
                      sizes="(max-width: 1024px) 92vw, 40vw"
                      priority
                    />
                  </div>
                </ParallaxLite>
              </div>
            </Inner>
          </InViewSection>
        </FullBleed>

        <FullBleed bgClassName="bg-white/80">
          <InViewSection className="relative py-20 md:py-28">
            <HeartFloat className="pointer-events-none absolute left-[8%] top-[18%] size-7 opacity-60" />
            <DottedTrail className="pointer-events-none absolute bottom-[12%] right-[10%] w-32 rotate-12 opacity-70" />
            <Inner>
              <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
                <ParallaxLite className="relative flex min-h-[300px] items-center justify-center py-6 lg:min-h-[min(440px,52vh)] lg:justify-start lg:py-8">
                  <WelcomeCollageVisual />
                </ParallaxLite>
                <div className="space-y-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-pink-hot md:text-sm">
                    Welcome to Mumma Chelles&apos; Place
                  </p>
                  <h2 className="font-display text-3xl text-plum md:text-4xl">
                    A Space Built on{" "}
                    <span className="text-pink-hot">
                      Connection, Compassion & Inspiration
                    </span>{" "}
                    for those Passionate about Lifelong Learning.
                  </h2>
                  <div className="space-y-4 text-muted">
                    <p>
                      Mumma Chelles is dedicated to supporting educators,
                      homeschoolers, care workers in disability and aged care,
                      and all passionate learners.
                    </p>
                    <p>
                      Discover carefully curated educational resources,
                      inspiring books, thoughtful toys, and practical training -
                      all chosen to enrich lives and empower those who care.
                    </p>
                    <p>
                      Mumma Chelles is also a welcoming home for readers of all
                      ages who seek wisdom, warmth and community.
                    </p>
                  </div>
                  <div className="grid gap-4 pt-4 sm:grid-cols-2">
                    <div
                      className={`${liftSurface} flex flex-col gap-3 p-6 md:p-8`}
                    >
                      <CldImage
                        src={IMAGES.sections.empowerment}
                        alt=""
                        width={60}
                        height={60}
                        className="w-12 h-12 object-cover rounded-full mb-4"
                      />
                      <p className="font-display text-xl text-plum">
                        Empowerment
                      </p>
                      <p className="text-sm text-muted">
                        Providing knowledge and tools for confident
                        decision-making.
                      </p>
                    </div>
                    <div
                      className={`${liftSurface} flex flex-col gap-3 p-6 md:p-8`}
                    >
                      <CldImage
                        src={IMAGES.sections.inclusivity}
                        alt=""
                        width={60}
                        height={60}
                        className="w-12 h-12 object-cover rounded-full mb-4"
                      />
                      <p className="font-display text-xl text-plum">
                        Inclusivity
                      </p>
                      <p className="text-sm text-muted">
                        Supporting all individuals with diverse needs and
                        abilities.
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/about"
                    className="inline-flex rounded-full bg-pink-hot px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-[#cf3f6f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    Learn More About Our Mission
                  </Link>
                </div>
              </div>
            </Inner>
          </InViewSection>
        </FullBleed>

        <FullBleed bgClassName="bg-[#f9edf3]/70">
          <InViewSection className="relative py-20 md:py-28">
            <DotPatternSide className="pointer-events-none absolute left-0 top-1/2 hidden h-48 w-20 -translate-y-1/2 opacity-80 lg:block" />
            <Inner>
              <div className="mx-auto mb-14 max-w-3xl text-center lg:mx-0 lg:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Book Recommendations
                </p>
                <h2 className="mt-3 font-display text-3xl text-plum md:text-4xl">
                  Thoughtfully Chosen Books for{" "}
                  <span className="italic text-pink-hot">Every Journey</span>
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {[
                  {
                    title: "CHILDREN'S LITERATURE",
                    icon: (
                      <BookChildrenBeeIllustration className="mx-auto h-24 w-full max-w-[120px]" />
                    ),
                    body: "Our carefully chosen children's books celebrate diversity, emotional growth and imagination helping young readers see themselves and others through inclusive, engaging stories",
                  },
                  {
                    title: "TEENAGER READS",
                    icon: (
                      <BookTeenHouseIllustration className="mx-auto h-24 w-full max-w-[120px]" />
                    ),
                    body: "From coming-of-age journeys to mental health guides, these books support teens in understanding themselves and the world around them, encouraging confidence, empathy and critical thinking.",
                  },
                  {
                    title: "HEALTH & WELLBEING",
                    icon: (
                      <BookHealthHeartIllustration className="mx-auto h-24 w-full max-w-[120px]" />
                    ),
                    body: "Explore titles that help educators, carers and families understand mental health, sensory needs, trauma-informed care and holistic wellbeing - bringing insight and compassion into daily practice.",
                  },
                  {
                    title: "PARENTING",
                    icon: (
                      <BookParentBeeIllustration className="mx-auto h-24 w-full max-w-[120px]" />
                    ),
                    body: "Guidance for every parenting journey. Thoughtful, research-backed books offering practical tools and heartfelt perspectives, supporting parents to raise children with connection, respect and understanding.",
                  },
                ].map((card) => (
                  <ParallaxLite key={card.title}>
                    <article
                      className={`${liftSurface} flex h-full flex-col gap-5 p-6 md:p-8`}
                    >
                      <div className="flex justify-center">{card.icon}</div>
                      <h3 className="text-center font-display text-lg uppercase tracking-wide text-plum">
                        {card.title}
                      </h3>
                      <p className="flex-1 text-center text-sm text-muted">
                        {card.body}
                      </p>
                      <Link
                        href="/books"
                        className="text-center text-sm font-semibold text-pink-hot underline-offset-4 transition hover:underline"
                      >
                        View Selections
                      </Link>
                    </article>
                  </ParallaxLite>
                ))}
              </div>
            </Inner>
          </InViewSection>
        </FullBleed>

        <FullBleed bgClassName="bg-[#fdf5f5]/60">
          <InViewSection className="py-20 md:py-28">
            <Inner>
              <div className="mx-auto mb-14 max-w-3xl text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Toy Recommendations
                </p>
                <h2 className="mt-3 font-display text-3xl text-plum md:text-4xl">
                  Playful Learning Through{" "}
                  <span className="text-pink-hot">Quality Toys</span>
                </h2>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    badge: "Creative",
                    subtitle: "Creative & Imaginative Play",
                    description: "Encouraging expression and connection",
                    src: IMAGES.toys.creative,
                    alt: "Creative and imaginative play with toys",
                  },
                  {
                    badge: "Sensory",
                    subtitle: "Tactile & Fidget Tools",
                    description:
                      "For calm focus, self-regulation, and sensory input",
                    src: IMAGES.toys.sensory,
                    alt: "Tactile and fidget tools for sensory play",
                  },
                  {
                    badge: "Learning",
                    subtitle: "Gross & Fine Motor & Learning Tools",
                    description: "Building skills through playful practice",
                    src: IMAGES.toys.learning,
                    alt: "Learning toys for gross and fine motor skills",
                  },
                ].map((toy) => (
                  <ParallaxLite key={toy.badge}>
                    <Link
                      href="/toys"
                      className={`${liftSurface} group flex h-full flex-col overflow-hidden`}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-pink-pale">
                        <CldImage
                          src={toy.src}
                          alt={toy.alt}
                          width={600}
                          height={400}
                          crop="fill"
                          gravity="center"
                          className="w-full h-full object-cover"
                          sizes="(max-width: 768px) 92vw, 33vw"
                        />
                        <span className="absolute left-4 top-4 rounded-full bg-plum px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-blush">
                          {toy.badge}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col gap-3 p-6 md:p-8">
                        <span className="font-display text-xl text-pink-hot underline-offset-4 transition group-hover:underline">
                          Visit Our Toys Page
                        </span>
                        <p className="text-sm text-muted">{toy.description}</p>
                        <p className="mt-auto text-xs font-semibold uppercase tracking-wide text-gold">
                          {toy.subtitle}
                        </p>
                      </div>
                    </Link>
                  </ParallaxLite>
                ))}
              </div>
            </Inner>
          </InViewSection>
        </FullBleed>

        <FullBleed bgClassName="bg-white/80">
          <InViewSection className="relative py-20 md:py-28">
            <SparkleDecoration className="pointer-events-none absolute left-6 top-10 size-12 opacity-70 md:left-16" />
            <BeeDecoration className="pointer-events-none absolute right-8 top-16 size-14 opacity-80 md:right-20 md:size-16" />
            <PencilDecoration className="pointer-events-none absolute bottom-24 right-[12%] size-16 rotate-6 opacity-70" />
            <Inner>
              <div className="mx-auto mb-12 max-w-3xl text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Free Resources
                </p>
                <h2 className="mt-3 font-display text-3xl text-plum md:text-4xl">
                  Support at Your <span className="text-gold">Fingertips</span>
                </h2>
              </div>
              <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
                <FreeResourcesAccordion />
                <ParallaxLite className="relative isolate min-h-[260px]">
                  <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl shadow-lg ring-4 ring-white">
                    <CldImage
                      src={IMAGES.sections.resourcesHero}
                      alt="Free printable resources and guides from Mumma Chelles"
                      width={800}
                      height={640}
                      className="h-auto w-full object-cover"
                      sizes="(max-width: 1024px) 92vw, 28rem"
                    />
                  </div>
                </ParallaxLite>
              </div>
            </Inner>
          </InViewSection>
        </FullBleed>

        <FullBleed bgClassName="bg-gradient-to-br from-[#f9edf3]/70 via-[#fdf5f5]/60 to-[#f9edf3]/70">
          <InViewSection className="relative py-20 md:py-28">
            <CrossPattern className="pointer-events-none absolute left-[4%] top-[20%] size-28 opacity-60 md:size-36" />
            <DottedTrail className="pointer-events-none absolute bottom-[14%] right-[8%] w-40 -rotate-12 opacity-60" />
            <Inner>
              <div className="mx-auto max-w-3xl space-y-6 text-center lg:text-left">
                  <span className="inline-flex rounded-full border border-gold px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">
                    COMING SOON
                  </span>
                  <h2 className="font-display text-3xl text-plum md:text-4xl">
                    Sensory <span className="text-pink-hot">Insights</span> -
                    Courses for Parents & Carers
                  </h2>
                  <p className="text-lg font-bold text-plum">
                    Deeper Learning & Practical Support for Parents & Carers
                  </p>
                  <p className="text-muted">
                    Learn from our tailored courses, designed to empower
                    parents, educators and carers to better support diverse
                    learners.
                  </p>
                  <span
                    className="inline-flex rounded-full border-2 border-gold bg-white/80 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-[#a07850] shadow-sm"
                    role="status"
                  >
                    Courses - Coming Soon!
                  </span>
              </div>
            </Inner>
          </InViewSection>
        </FullBleed>

        <FullBleed bgClassName="bg-[#fdf5f5]/60">
          <InViewSection className="relative border-y border-pink-soft/60 py-20 md:py-28">
            <BeeDecoration className="pointer-events-none absolute bottom-[12%] left-[6%] size-12 opacity-70" />
            <DottedTrail className="pointer-events-none absolute right-[10%] top-[30%] w-36 rotate-6 opacity-60" />
            <HeartFloat className="pointer-events-none absolute right-[18%] bottom-[18%] size-8 opacity-50" />
            <Inner>
              <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
                <div className="relative z-[1] space-y-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pink-hot md:text-sm">
                    Have a Question, Suggestion or Just Want to Say Hello?
                  </p>
                  <h2 className="font-display text-3xl text-plum md:text-4xl">
                    Get <span className="text-pink-hot">in Touch</span> with
                    Mumma Chelles
                  </h2>
                  <p className="text-lg font-bold text-plum">
                    We&apos;d Love to Hear from You!
                  </p>
                  <div className="space-y-4 text-muted">
                    <p>
                      Whether you&apos;re looking for curated resources,
                      training, or need support on your learning journey - Mumma
                      Chelle&apos;s Place is here for you.
                    </p>
                    <p>
                      Fill out the contact form and we&apos;ll get back to you
                      as soon as possible.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <SiteSocialIconButtons />
                  </div>
                  <p className="text-muted">
                    Listen to the Mumma Chelles{" "}
                    <Link
                      href={SPOTIFY_PLAYLIST}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="font-semibold text-pink-hot underline-offset-4 hover:underline"
                    >
                      Spotify Playlist
                    </Link>{" "}
                    for Kids!
                  </p>
                </div>
                <HomeContactForm />
              </div>
            </Inner>
          </InViewSection>
        </FullBleed>
      </div>
    </ShaderBackground>
  );
}
