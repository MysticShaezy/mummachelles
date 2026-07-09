import { CldImage } from "@/components/ui/cloudinary";
import { Heart } from "lucide-react";
import type { ReactNode } from "react";
import {
  BeeDecoration,
  DottedTrail,
  PencilDecoration,
} from "@/components/home/decorative";
import type { ResourceDownloadItem } from "@/components/resources/ResourceDownloadGrid";
import { ResourcesDownloadsSection } from "@/components/resources/ResourcesDownloadsSection";
import { InViewSection } from "@/components/sections/InViewSection";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { IMAGES } from "@/lib/images";

export const metadata = createPageMetadata({
  title: "Helpful Tools & Heartfelt Guidance",
  pathname: "/resources",
  description:
    "Free downloadable guides, printables, and resources for families, educators, and carers from Mumma Chelles.",
});

const RESOURCE_ITEMS: ResourceDownloadItem[] = [
  {
    title: "Co-Regulation Guide",
    description:
      "Get your free guide to co-regulation and discover how to stay calm together.",
    downloadHref: "/resources/co-regulation-guide.pdf",
    buttonText: "Co-Regulation Guide",
    imageSrc: IMAGES.resources.coRegulation,
  },
  {
    title: "Fine Motor Skills Checklist",
    description:
      "A handy printable guide packed with fun, practical activities to strengthen little hands, supporting coordination, handwriting readiness, and everyday independence.",
    downloadHref: "/resources/fine-motor-skills-checklist.pdf",
    buttonText: "Fine Motor Skills Checklist",
    imageSrc: IMAGES.resources.fineMotor,
  },
  {
    title: "Play Dough Recipe",
    description:
      "A tried-and-true favourite: soft, safe, and easy to make! This recipe encourages creativity, sensory play, and fine-motor development.",
    downloadHref: "/resources/play-dough-recipe.pdf",
    buttonText: "Play Dough Recipe",
    imageSrc: IMAGES.resources.playDough,
  },
  {
    title: "Sing, Move, Grow Guide",
    description:
      "A fun, music-based activity guide designed to help children learn through movement, rhythm, and play.",
    downloadHref: "/resources/sing-move-grow-guide.pdf",
    buttonText: "Sing, Move, Grow Guide",
    imageSrc: IMAGES.resources.singMoveGrow,
  },
  {
    title: "Printable Blank Visual Schedule",
    description:
      "This blank visual schedule is designed to help create structure and predictability in a daily routine.",
    downloadHref: "/resources/blank-visual-schedule.pdf",
    buttonText: "Printable Blank Visual Schedule",
    imageSrc: IMAGES.resources.visualSchedule,
  },
  {
    title: "Self Care Guide for Parents",
    description:
      "Discover gentle, practical strategies from Chelle to help you refill your cup with calm, compassion, and balance when life feels heavy.",
    downloadHref: "/resources/self-care-guide.pdf",
    buttonText: "Self Care Guide for Parents",
    imageSrc: IMAGES.resources.selfCare,
  },
  {
    title: "Social Story Template",
    description:
      "Help children understand what to expect during a cafe visit, using gentle, step-by-step guidance and visuals to build confidence, calm, and social awareness in real-life experiences.",
    downloadHref: "/resources/social-story-template.pdf",
    buttonText: "Social Story Template",
    imageSrc: IMAGES.resources.socialStory,
  },
  {
    title: "Printable Activity Symbols",
    description:
      "Fun, visual tools to support communication, routines, and learning, perfect for visual schedules, classroom boards, or at-home activities.",
    downloadHref: "/resources/printable-activity-symbols.pdf",
    buttonText: "Printable Activity Symbols",
    imageSrc: IMAGES.resources.activitySymbols,
  },
  {
    title: "Child Language Development Guide",
    description:
      "A complete parent's guide to supporting your child's communication milestones from birth to school age, covering every stage, red flags, and practical strategies.",
    downloadHref: "/resources/child-language-development-guide.pdf",
    buttonText: "Child Language Development Guide",
    localImageSrc: "/resources/child-language-development-card.png",
  },
];

const INTRO_BULLETS = [
  "Practical tools to support families, educators, and carers",
  "Evidence-based resources for mental health, wellbeing, and trauma-informed care",
  "Downloadables, guides, and printables you can use every day",
  "Supportive insights grounded in real-world experience and professional wisdom",
  "Materials that nurture connection, resilience, and lifelong learning",
] as const;

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

function BulletRow({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 text-base leading-relaxed text-muted md:text-lg">
      <Heart
        className="mt-1 size-5 shrink-0 fill-pink-hot/25 text-pink-hot"
        aria-hidden
        strokeWidth={1.75}
      />
      <span>{children}</span>
    </li>
  );
}

export default function ResourcesPage() {
  return (
    <div className="-mx-4 overflow-x-hidden pb-16 sm:-mx-6 lg:-mx-10">
      <BreadcrumbJsonLd
        items={[{ label: "Home", href: "/" }, { label: "Resources" }]}
      />

      <FullBleed bgClassName="bg-blush">
        <InViewSection className="relative pt-24 pb-16 md:pt-28 md:pb-20">
          <BeeDecoration className="pointer-events-none absolute bottom-6 left-[4%] z-[2] size-14 opacity-75 md:bottom-10 md:size-20" />
          <Inner>
            <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="relative z-[1] space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold md:text-sm">
                  Resource Recommendations
                </p>
                <h1 className="font-display text-4xl leading-tight text-plum md:text-5xl lg:text-[3.25rem]">
                  Helpful Tools &{" "}
                  <span className="text-pink-hot">Heartfelt Guidance</span>
                </h1>
                <p className="text-lg font-bold text-plum md:text-xl">
                  Here you&apos;ll find:
                </p>
                <ul className="space-y-4">
                  {INTRO_BULLETS.map((line) => (
                    <BulletRow key={line}>{line}</BulletRow>
                  ))}
                </ul>
              </div>

              <div className="relative isolate mx-auto min-h-[280px] w-full max-w-lg overflow-hidden rounded-2xl shadow-xl ring-4 ring-white lg:mx-0 lg:max-w-none">
                <CldImage
                  src={IMAGES.sections.resourcesHero}
                  alt="Mumma Chelles resource downloads and printable guides"
                  width={900}
                  height={1120}
                  className="h-full min-h-[280px] w-full object-cover"
                  sizes="(max-width: 1024px) 92vw, 480px"
                  priority
                />
              </div>
            </div>
          </Inner>
        </InViewSection>
      </FullBleed>

      <FullBleed bgClassName="bg-white">
        <InViewSection className="relative py-20 md:py-28">
          <DottedTrail className="pointer-events-none absolute left-[6%] top-[12%] w-36 opacity-55 md:w-44" />
          <PencilDecoration className="pointer-events-none absolute bottom-[15%] right-[8%] size-16 rotate-12 opacity-55" />
          <Inner>
            <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center">
              <h2 className="font-display text-3xl text-plum md:text-4xl">
                Recommended <span className="text-pink-hot">Resources</span>
              </h2>
              <p className="text-lg text-muted md:text-xl">
                All resources are free. Enter your details once to unlock every
                download.
              </p>
            </div>
            <ResourcesDownloadsSection items={RESOURCE_ITEMS} />
          </Inner>
        </InViewSection>
      </FullBleed>
    </div>
  );
}
