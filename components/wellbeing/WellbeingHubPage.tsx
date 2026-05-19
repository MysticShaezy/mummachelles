"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { ReactNode } from "react";
import {
  BeeDecoration,
  DottedTrail,
  HeartFloat,
} from "@/components/home/decorative";
import { CldImage } from "@/components/ui/cloudinary";
import { IMAGES } from "@/lib/images";

const NU = {
  au: "https://www.nuskin.com/en_AU",
  us: "https://www.nuskin.com/en_US",
  sg: "https://www.nuskin.com/en_SG",
} as const;

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-12% 0px" },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

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

function PurchaseCountryLinks() {
  const linkClass =
    "font-semibold text-pink-hot underline underline-offset-2 hover:text-plum";
  return (
    <p className="text-sm text-muted">
      <span className="font-medium text-plum">Purchase: </span>
      <a
        href={NU.au}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        Australia
      </a>
      <span className="mx-1.5 text-pink-soft" aria-hidden>
        ·
      </span>
      <a
        href={NU.us}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        USA
      </a>
      <span className="mx-1.5 text-pink-soft" aria-hidden>
        ·
      </span>
      <a
        href={NU.sg}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        Singapore
      </a>
    </p>
  );
}

function MotionSection({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <motion.section className={className} {...fadeUp}>
      {children}
    </motion.section>
  );
}

export function WellbeingHubPage() {
  return (
    <div className="-mx-4 overflow-x-hidden pb-16 sm:-mx-6 lg:-mx-10">
      <FullBleed bgClassName="bg-blush">
        <MotionSection className="relative flex min-h-screen items-center pt-8 pb-16">
          <BeeDecoration className="pointer-events-none absolute left-[6%] top-16 size-14 opacity-55 md:size-16" />
          <HeartFloat className="pointer-events-none absolute right-[10%] top-12 size-9 opacity-45 md:size-11" />
          <DottedTrail className="pointer-events-none absolute bottom-10 right-[12%] w-28 rotate-12 opacity-40 md:w-36" />
          <Inner className="w-full -translate-y-16 md:-translate-y-20">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-6 text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold md:text-sm">
                  WELLBEING RECOMMENDATIONS
                </p>
                <h1 className="font-display text-4xl italic text-plum md:text-5xl lg:text-6xl">
                  By Mumma Chelle
                </h1>
                <h2 className="font-display text-2xl leading-snug text-plum md:text-3xl lg:text-[2rem]">
                  Gentle Support for{" "}
                  <span className="text-pink-hot">Busy Minds</span> &amp;
                  Overloaded Nervous Systems
                </h2>
                <div className="space-y-4 text-lg text-muted md:text-xl">
                  <p>
                    As part of my own journey, and in supporting families,
                    I&apos;m often asked what tools I personally use alongside
                    lifestyle foundations like sleep, nourishment, and emotional
                    regulation work.
                  </p>
                  <p>
                    Below are a few science-backed products I choose to use and
                    recommend.
                  </p>
                </div>
              </div>
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                <CldImage
                  src={IMAGES.wellbeing.hubHero}
                  alt="Calm, restorative wellbeing scene"
                  width={600}
                  height={600}
                  crop="fill"
                  gravity="center"
                  className="rounded-2xl w-full h-full object-cover"
                  sizes="(max-width: 1024px) 92vw, min(600px, 45vw)"
                />
              </div>
            </div>
          </Inner>
        </MotionSection>
      </FullBleed>

      <FullBleed bgClassName="bg-white">
        <MotionSection className="relative py-20 md:py-28">
          <DottedTrail className="pointer-events-none absolute left-[8%] top-[20%] w-32 opacity-50 md:w-40" />
          <Inner>
            <div className="mx-auto max-w-3xl space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold md:text-sm">
                Before We Begin
              </p>
              <h2 className="font-display text-3xl text-plum md:text-4xl">
                A Thoughtful Approach to Wellbeing
              </h2>
              <div className="space-y-4 text-lg text-muted">
                <p>
                  When we talk about stress, mood, and emotional capacity,
                  there is no single solution.
                </p>
                <p>
                  Supplements are not a replacement for therapy, medication,
                  or medical care. They are designed to gently support the
                  body&apos;s natural systems - not override them.
                </p>
                <p>
                  This page exists to offer gentle, complementary tools that may
                  support wellbeing alongside foundations like sleep,
                  nourishment, emotional regulation, and professional support
                  where needed.
                </p>
                <p className="italic text-muted">
                  If you have any pre-existing medical conditions or concerns,
                  please speak with your healthcare professional before starting
                  any new supplement.
                </p>
              </div>
            </div>
          </Inner>
        </MotionSection>
      </FullBleed>

      <FullBleed bgClassName="bg-pink-pale">
        <motion.section
          className="relative py-20 md:py-20"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <BeeDecoration className="pointer-events-none absolute bottom-[18%] left-[5%] size-12 opacity-45 md:size-14" />
          <Inner>
            <div className="mx-auto mb-10 max-w-5xl space-y-4 text-center">
              <h2 className="font-display text-3xl text-plum md:text-4xl">
                Explore the Collection
              </h2>
              <p className="text-lg text-muted md:text-xl">
                Three carefully selected products to support your everyday
                wellbeing
              </p>
            </div>
            <motion.div
              className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.12, delayChildren: 0.06 },
                },
              }}
            >
              {[
                {
                  href: "/wellbeing/feel-calm",
                  title: "MYNuDay360 Feel Calm",
                  description:
                    "Support for mood balance and a healthy stress response",
                  src: IMAGES.wellbeing.myndTestimonial,
                  alt: "MYNuDay360 Feel Calm",
                },
                {
                  href: "/wellbeing/night-time",
                  title: "MYNuDay360 Night Time",
                  description:
                    "Support for restful sleep and a healthy sleep-wake cycle",
                  src: IMAGES.wellbeing.nightTimeProduct,
                  alt: "MYNuDay360 Night Time",
                },
                {
                  href: "/wellbeing/y-span",
                  title: "ageLOC Y-Span",
                  description:
                    "Advanced support for healthy ageing, energy, and cellular wellbeing",
                  src: IMAGES.wellbeing.ySpanProduct,
                  alt: "ageLOC Y-Span",
                },
              ].map((card) => (
                <motion.article
                  key={card.href}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-pink-soft bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <CldImage
                      src={card.src}
                      alt={card.alt}
                      width={640}
                      height={480}
                      className="h-full w-full rounded-t-2xl object-cover"
                      sizes="(max-width: 768px) 92vw, 320px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl text-plum md:text-2xl">
                      {card.title}
                    </h3>
                    <p className="mt-2 flex-1 text-muted">{card.description}</p>
                    <Link
                      href={card.href}
                      className="mt-4 inline-flex w-full justify-center rounded-full bg-pink-hot px-6 py-3 text-center text-sm font-semibold text-white shadow-md shadow-pink-hot/20 transition hover:bg-[#cf3f6f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>
            <p className="text-center text-sm italic text-muted mt-8 max-w-2xl mx-auto">
              Always consult with your healthcare professional before starting
              any new supplement.
            </p>
          </Inner>
        </motion.section>
      </FullBleed>

      <FullBleed bgClassName="bg-pink-pale">
        <MotionSection className="relative py-20 md:py-28">
          <HeartFloat className="pointer-events-none absolute right-[6%] top-[15%] size-8 opacity-50" />
          <Inner>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="relative overflow-hidden rounded-2xl shadow-lg ring-2 ring-white">
                <CldImage
                  src={IMAGES.wellbeing.feelCalmProduct}
                  alt="MYNuDay360 Feel Calm product"
                  width={640}
                  height={640}
                  className="aspect-square w-full object-cover"
                  sizes="(max-width: 1024px) 92vw, 40vw"
                />
              </div>
              <div className="space-y-5">
                <span className="inline-block rounded-full bg-gold/10 px-4 py-1 text-sm font-semibold text-gold">
                  My #1 Top Recommendation
                </span>
                <h2 className="font-display text-3xl text-plum md:text-4xl">
                  MYNuDay360 Feel Calm
                </h2>
                <p className="text-lg font-medium text-pink-hot md:text-xl">
                  Support for mood balance and stress response.
                </p>
                <p className="text-lg text-muted">
                  Designed to support healthy adults experiencing everyday
                  stress.
                </p>
                <p className="font-bold text-plum">Formulated to:</p>
                <ul className="space-y-3 text-muted">
                  {[
                    "Support mood balance",
                    "Enhance mind relaxation",
                    "Support a healthy stress response",
                    "Help reduce feelings of stress",
                  ].map((line) => (
                    <li key={line} className="flex gap-3">
                      <Check
                        className="mt-0.5 size-5 shrink-0 text-pink-hot"
                        strokeWidth={2.25}
                        aria-hidden
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-bold text-plum">Key Ingredients:</p>
                <ul className="list-disc space-y-2 pl-5 text-muted">
                  <li>Lemon Balm Extract - studied for supporting calmness</li>
                  <li>L-Theanine - supports relaxed alertness</li>
                  <li>
                    Magnolia Bark Extract - studied for its effects on mood
                  </li>
                </ul>
                <p className="text-sm italic text-muted">
                  In a 30-day clinical study, participants reported
                  improvements in measures related to stress and mood.*
                </p>
                <p className="text-xs italic text-muted">
                  *Not intended to diagnose, treat, cure, or prevent any
                  disease.
                </p>
                <div className="space-y-3 pt-2">
                  <Link
                    href="/wellbeing/feel-calm"
                    className="inline-flex justify-center rounded-full bg-pink-hot px-8 py-3 text-center text-sm font-semibold text-white shadow-md shadow-pink-hot/25 transition hover:bg-[#cf3f6f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot focus-visible:ring-offset-2 focus-visible:ring-offset-pink-pale"
                  >
                    Learn More
                  </Link>
                  <PurchaseCountryLinks />
                </div>
              </div>
            </div>
          </Inner>
        </MotionSection>
      </FullBleed>

      <FullBleed bgClassName="bg-white">
        <MotionSection className="relative py-20 md:py-28">
          <BeeDecoration className="pointer-events-none absolute bottom-[15%] left-[4%] size-12 opacity-50 md:size-14" />
          <Inner>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-5 lg:order-1">
                <span className="inline-block rounded-full bg-gold/10 px-4 py-1 text-sm font-semibold text-gold">
                  My Evening Support Recommendation
                </span>
                <h2 className="font-display text-3xl text-plum md:text-4xl">
                  MYNuDay360 Night Time
                </h2>
                <p className="text-lg font-medium text-pink-hot md:text-xl">
                  Gentle sleep support for rest, recovery and healthy sleep
                  cycles.
                </p>
                <p className="text-lg text-muted">
                  Designed to support healthy adults wanting additional support
                  for sleep quality and a balanced sleep-wake rhythm.
                </p>
                <p className="font-bold text-plum">Formulated to:</p>
                <ul className="list-disc space-y-2 pl-5 text-muted">
                  <li>Support improved sleep quality</li>
                  <li>
                    Help you fall asleep faster and restore a healthy
                    sleep-wake cycle
                  </li>
                  <li>Support a healthy circadian rhythm</li>
                  <li>Help you wake feeling refreshed and less groggy</li>
                </ul>
                <p className="font-bold text-plum">Why many people love it:</p>
                <ul className="list-disc space-y-2 pl-5 text-muted">
                  <li>Safe, gentle, non-habit-forming sleep support</li>
                  <li>Formulated with scientifically supported ingredients</li>
                  <li>Supports a more restful night&apos;s sleep</li>
                  <li>Helps you feel more positive as you wake in the morning</li>
                  <li>Suitable for vegetarians</li>
                </ul>
                <p className="text-lg text-muted">
                  Night Time contains magnesium carbonate and citric acid which
                  transform into magnesium citrate when mixed with warm water,
                  creating a gentle fizzing drink. Along with the main ingredient
                  of Saffron this drink is designed to support relaxation as part
                  of your evening routine.
                </p>
                <p className="text-xs italic text-muted">
                  *Not intended to diagnose, treat, cure, or prevent any
                  disease.
                </p>
                <div className="space-y-3 pt-2">
                  <Link
                    href="/wellbeing/night-time"
                    className="inline-flex justify-center rounded-full bg-pink-hot px-8 py-3 text-center text-sm font-semibold text-white shadow-md shadow-pink-hot/25 transition hover:bg-[#cf3f6f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    Learn More
                  </Link>
                  <PurchaseCountryLinks />
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-lg ring-2 ring-pink-soft/40 lg:order-2">
                <CldImage
                  src={IMAGES.wellbeing.nightTimeProduct}
                  alt="MYNuDay360 Night Time product"
                  width={640}
                  height={640}
                  className="aspect-square w-full object-cover"
                  sizes="(max-width: 1024px) 92vw, 40vw"
                />
              </div>
            </div>
          </Inner>
        </MotionSection>
      </FullBleed>

      <FullBleed bgClassName="bg-pink-pale">
        <MotionSection className="relative py-20 md:py-28">
          <DottedTrail className="pointer-events-none absolute right-[10%] top-[25%] w-36 -rotate-6 opacity-45" />
          <Inner>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="relative overflow-hidden rounded-2xl shadow-lg ring-2 ring-white">
                <CldImage
                  src={IMAGES.wellbeing.ySpanProduct}
                  alt="ageLOC Y-Span product"
                  width={640}
                  height={640}
                  className="aspect-square w-full object-cover"
                  sizes="(max-width: 1024px) 92vw, 40vw"
                />
              </div>
              <div className="space-y-5">
                <span className="inline-block rounded-full bg-gold/10 px-4 py-1 text-sm font-semibold text-gold">
                  My Cellular Vitality &amp; Healthy Ageing Recommendation
                </span>
                <h2 className="font-display text-3xl text-plum md:text-4xl">
                  ageLOC Y-Span
                </h2>
                <p className="text-lg font-medium text-pink-hot md:text-xl">
                  Advanced nutritional support for healthy ageing and cellular
                  wellbeing.
                </p>
                <p className="text-lg text-muted">
                  Designed for healthy adults who want to support long-term
                  vitality, energy, and healthy ageing as they move through
                  life.
                </p>
                <p className="font-bold text-plum">Formulated to:</p>
                <ul className="list-disc space-y-2 pl-5 text-muted">
                  <li>Support healthy ageing defence mechanisms</li>
                  <li>Support cellular health and antioxidant protection</li>
                  <li>
                    Promote healthy gene expression related to ageing processes
                  </li>
                  <li>Support energy production and metabolic function</li>
                </ul>
                <p className="font-bold text-plum">Why many people choose it:</p>
                <ul className="list-disc space-y-2 pl-5 text-muted">
                  <li>
                    A unique blend of nutrients not easily obtained from diet
                    alone
                  </li>
                  <li>
                    Developed from more than 30 years of gene expression research
                  </li>
                  <li>
                    Supports antioxidant protection against daily cellular stress
                  </li>
                  <li>
                    Provides broad-spectrum nutritional support for healthy
                    ageing
                  </li>
                </ul>
                <p className="text-lg text-muted">
                  Y-Span combines advanced nutritional science with
                  phytonutrients researched for their potential role in
                  supporting healthy ageing defence mechanisms and cellular
                  protection. The formula delivers concentrated extracts that can
                  be difficult to obtain consistently from diet alone.
                </p>
                <p className="text-xs italic text-muted">
                  *Not intended to diagnose, treat, cure, or prevent any
                  disease.
                </p>
                <div className="space-y-3 pt-2">
                  <Link
                    href="/wellbeing/y-span"
                    className="inline-flex justify-center rounded-full bg-pink-hot px-8 py-3 text-center text-sm font-semibold text-white shadow-md shadow-pink-hot/25 transition hover:bg-[#cf3f6f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot focus-visible:ring-offset-2 focus-visible:ring-offset-pink-pale"
                  >
                    Learn More
                  </Link>
                  <PurchaseCountryLinks />
                </div>
              </div>
            </div>
          </Inner>
        </MotionSection>
      </FullBleed>

      <FullBleed bgClassName="bg-white">
        <MotionSection className="relative py-16 md:py-20">
          <Inner>
            <h3 className="text-center font-display text-2xl text-plum md:text-3xl">
              More Wellbeing Recommendations To Come
            </h3>
          </Inner>
        </MotionSection>
      </FullBleed>

      <FullBleed bgClassName="bg-blush">
        <MotionSection className="relative py-20 md:py-28">
          <HeartFloat className="pointer-events-none absolute left-[8%] bottom-[20%] size-10 opacity-45" />
          <Inner>
            <div className="mx-auto max-w-3xl space-y-8 text-center">
              <p className="font-display text-xl italic leading-relaxed text-plum md:text-2xl lg:text-[1.65rem]">
                If you&apos;re looking for someone who&apos;ll meet you where
                you&apos;re at, hold space without judgment, and offer support
                that actually makes a difference - you&apos;re in the right
                place.
              </p>
              <p className="font-display text-lg font-bold text-plum md:text-xl">
                Welcome to Mumma Chelle&apos;s.
              </p>
              <Link
                href="/contact"
                className="inline-flex justify-center rounded-full bg-pink-hot px-10 py-3 text-sm font-semibold text-white shadow-md shadow-pink-hot/25 transition hover:bg-[#cf3f6f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot focus-visible:ring-offset-2 focus-visible:ring-offset-blush"
              >
                Contact to Learn More
              </Link>
            </div>
          </Inner>
        </MotionSection>
      </FullBleed>
    </div>
  );
}
