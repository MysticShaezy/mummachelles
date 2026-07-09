import Link from "next/link";
import { CldImage } from "@/components/ui/cloudinary";
import { Check, Circle, ShoppingCart } from "lucide-react";
import type { ReactNode } from "react";
import {
  BeeDecoration,
  DottedTrail,
  HeartFloat,
} from "@/components/home/decorative";
import { InViewSection } from "@/components/sections/InViewSection";
import { WellbeingClinicalGuideSplit } from "@/components/wellbeing/WellbeingClinicalGuideSplit";
import { WellbeingDisclaimerBanner } from "@/components/wellbeing/WellbeingDisclaimerBanner";
import { WellbeingHowItWorksIngredientSplit } from "@/components/wellbeing/WellbeingHowItWorksIngredientSplit";
import { WellbeingProductVideoBlock } from "@/components/wellbeing/WellbeingProductVideoBlock";
import type { WellbeingProductContent } from "@/lib/wellbeing-products";

const wellbeingPdfLinkClass =
  "text-pink-hot underline hover:text-plum transition-colors font-medium";

const ingredientCard =
  "rounded-2xl border border-pink-soft bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8";

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

function IngredientGrid({
  cards,
}: {
  cards: readonly { title: string; body: string }[];
}) {
  const cols =
    cards.length >= 4
      ? "md:grid-cols-2"
      : cards.length === 3
        ? "md:grid-cols-3"
        : "md:grid-cols-2";

  return (
    <div className={`grid gap-6 md:gap-8 ${cols}`}>
      {cards.map((card) => (
        <article key={card.title} className={ingredientCard}>
          <h3 className="font-display text-xl text-plum">{card.title}</h3>
          <p className="mt-3 text-muted">{card.body}</p>
        </article>
      ))}
    </div>
  );
}

export function WellbeingProductLayout({
  content,
}: {
  content: WellbeingProductContent;
}) {
  const img = content.images;
  const heroPrimary = img?.hero ?? img?.product;
  const heroSecondary =
    img?.hero && img?.product && img.hero !== img.product
      ? img.product
      : null;

  const heroSymptoms =
    content.hero.symptoms && content.hero.symptoms.length > 0
      ? content.hero.symptoms
      : null;
  const heroNotice = content.hero.noticeItems?.length
    ? content.hero.noticeItems
    : null;

  return (
    <div className="-mx-4 overflow-x-hidden pb-16 sm:-mx-6 lg:-mx-10">
      <FullBleed bgClassName="bg-blush">
        <InViewSection className="relative pt-24 pb-16 md:pt-28 md:pb-20">
          <BeeDecoration className="pointer-events-none absolute bottom-8 left-[5%] size-14 opacity-60 md:size-16" />
          <HeartFloat className="pointer-events-none absolute right-[8%] top-16 size-8 opacity-40 md:size-10" />
          <DottedTrail className="pointer-events-none absolute right-[12%] top-[40%] w-28 rotate-12 opacity-45" />
          <Inner>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div className="relative mx-auto w-full max-w-md space-y-4 lg:mx-0">
                {heroPrimary ? (
                  <CldImage
                    src={heroPrimary}
                    alt={content.productName}
                    width={600}
                    height={750}
                    className="aspect-[4/5] w-full rounded-2xl object-cover ring-2 ring-pink-soft/50"
                    sizes="(max-width: 1024px) 90vw, 28rem"
                    priority
                  />
                ) : (
                  <div
                    className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl bg-pink-pale ring-2 ring-pink-soft/50 lg:mx-0"
                    aria-hidden
                  />
                )}
                {heroSecondary ? (
                  <CldImage
                    src={heroSecondary}
                    alt={`${content.productName} product`}
                    width={600}
                    height={600}
                    className="aspect-square w-full max-h-64 rounded-2xl object-cover ring-2 ring-pink-soft/50"
                    sizes="(max-width: 1024px) 90vw, 16rem"
                  />
                ) : null}
              </div>
              <div className="relative z-[1] space-y-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold md:text-sm">
                  Wellbeing Recommendations
                </p>
                <h1 className="font-display text-4xl text-plum md:text-5xl">
                  {content.productName}
                </h1>
                <p className="text-xl font-medium text-pink-hot md:text-2xl">
                  {content.hero.subheading}
                </p>
                {content.hero.introParagraphs.map((p, i) => (
                  <p key={`intro-${i}`} className="text-lg text-muted">
                    {p}
                  </p>
                ))}
                {content.hero.symptomsHeading && heroSymptoms ? (
                  <>
                    <p className="font-bold text-plum">
                      {content.hero.symptomsHeading}
                    </p>
                    <ul className="space-y-3">
                      {heroSymptoms.map((s) => (
                        <li key={s} className="flex gap-3 text-muted">
                          <Circle
                            className="mt-1.5 size-2 shrink-0 fill-pink-hot text-pink-hot"
                            aria-hidden
                          />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}
                {content.hero.noticeHeading && heroNotice ? (
                  <>
                    <p className="font-bold text-plum">
                      {content.hero.noticeHeading}
                    </p>
                    <ul className="space-y-3">
                      {heroNotice.map((s) => (
                        <li key={s} className="flex gap-3 text-muted">
                          <Circle
                            className="mt-1.5 size-2 shrink-0 fill-pink-hot text-pink-hot"
                            aria-hidden
                          />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}
                {content.hero.symptomsClosing ? (
                  <p className="text-lg text-muted">
                    {content.hero.symptomsClosing}
                  </p>
                ) : null}
                {content.hero.closingParagraph ? (
                  <p className="text-lg text-muted">
                    {content.hero.closingParagraph}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-6 text-center mt-12 md:mt-16">
              <div className="rounded-lg border border-gold/30 bg-gold/10 px-4 py-2 text-center">
                <p className="text-sm font-semibold text-plum">
                  🎁 Special Offer: Save{" "}
                  <span className="text-pink-hot">20% Today!</span>
                </p>
              </div>
              <div className="flex flex-col flex-wrap items-stretch justify-center gap-4 sm:flex-row sm:justify-center">
                {content.purchase.buttons.map((b) => (
                  <a
                    key={b.label}
                    href={b.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center gap-2 justify-center rounded-full bg-pink-hot px-8 py-3 text-center text-sm font-semibold text-white shadow-md shadow-pink-hot/25 transition hover:bg-[#cf3f6f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot focus-visible:ring-offset-2 focus-visible:ring-offset-blush sm:min-w-[200px] sm:flex-none"
                  >
                    <ShoppingCart className="size-4" aria-hidden="true" />
                    {b.label}
                  </a>
                ))}
              </div>
            </div>
          </Inner>
        </InViewSection>
      </FullBleed>

      <FullBleed bgClassName="bg-pink-pale">
        <InViewSection className="relative py-20 md:py-28">
          <Inner>
            <div
              className={`mx-auto space-y-6 lg:mx-0 ${img?.benefits ? "max-w-6xl lg:grid lg:grid-cols-2 lg:items-start lg:gap-12" : "max-w-3xl"}`}
            >
              <div className="space-y-6">
                <h2 className="font-display text-3xl text-plum md:text-4xl">
                  {content.supporting.h2}
                </h2>
                <p className="text-lg text-muted">
                  {content.supporting.paragraphs[0]}
                </p>
                <p className="text-lg text-muted">
                  {content.supporting.paragraphs[1]}
                </p>
                <p className="font-bold text-plum">
                  {content.supporting.formulatedLabel}
                </p>
                <ul className="space-y-3">
                  {content.supporting.formulatedItems.map((item) => (
                    <li key={item} className="flex gap-3 text-muted">
                      <Check
                        className="mt-0.5 size-5 shrink-0 text-pink-hot"
                        strokeWidth={2.25}
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-lg text-muted">{content.supporting.closing}</p>
                <a
                  href={content.supporting.pdfHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={wellbeingPdfLinkClass}
                >
                  Download Product Information PDF
                </a>
              </div>
              {img?.benefits ? (
                <div className="overflow-hidden rounded-2xl ring-2 ring-pink-soft/40 shadow-md">
                  <CldImage
                    src={img.benefits}
                    alt={`${content.productName} benefits`}
                    width={900}
                    height={675}
                    className="h-auto w-full object-cover"
                    sizes="(max-width: 1024px) 92vw, 400px"
                  />
                </div>
              ) : null}
            </div>
          </Inner>
        </InViewSection>
      </FullBleed>

      <FullBleed bgClassName="bg-white">
        <InViewSection
          className={
            content.howItWorks.howItWorksSplitIngredientColumns
              ? "relative py-20"
              : "relative py-20 md:py-28"
          }
        >
          <Inner>
            <div className="space-y-10">
              {content.howItWorks.howItWorksSplitIngredientColumns &&
              img?.ingredients ? (
                <WellbeingHowItWorksIngredientSplit
                  heading={content.howItWorks.h2}
                  intro={content.howItWorks.intro}
                  cards={content.howItWorks.cards}
                  imageSrc={img.ingredients}
                  productName={content.productName}
                  introAboveImage={
                    content.howItWorks.howItWorksIntroAboveIngredientImage ??
                    false
                  }
                />
              ) : (
                <>
                  <div className="mx-auto max-w-3xl space-y-4 lg:mx-0">
                    <h2 className="font-display text-3xl text-plum md:text-4xl">
                      {content.howItWorks.h2}
                    </h2>
                    <p className="text-lg text-muted">
                      {content.howItWorks.intro}
                    </p>
                  </div>
                  {img?.ingredients ? (
                    content.howItWorks.ingredientImageContainedSquare ? (
                      <CldImage
                        src={img.ingredients}
                        alt={`${content.productName} product`}
                        width={500}
                        height={500}
                        crop="fill"
                        gravity="center"
                        className="rounded-2xl object-cover max-w-sm mx-auto"
                        sizes="(max-width: 640px) 92vw, 384px"
                      />
                    ) : (
                      <div className="overflow-hidden rounded-2xl ring-2 ring-pink-soft/30 shadow-sm">
                        <CldImage
                          src={img.ingredients}
                          alt={`${content.productName} ingredients`}
                          width={1200}
                          height={675}
                          className="h-auto w-full object-cover"
                          sizes="(max-width: 1024px) 92vw, 56rem"
                        />
                      </div>
                    )
                  ) : null}
                  <IngredientGrid cards={content.howItWorks.cards} />
                </>
              )}
              {content.videoSection?.placement === "afterIngredientCards" ? (
                <WellbeingProductVideoBlock
                  section={content.videoSection}
                  embedded
                />
              ) : null}
              {(() => {
                const whyImage = img?.why;
                const clinicalSecondarySplit =
                  Boolean(
                    content.howItWorks.howItWorksClinicalSecondarySplit &&
                      whyImage,
                  );

                return (
                  <>
                    {!clinicalSecondarySplit && whyImage ? (
                      content.howItWorks.whyImageContainedSquare ? (
                        <CldImage
                          src={whyImage}
                          alt={`Why ${content.productName}`}
                          width={500}
                          height={500}
                          crop="fill"
                          gravity="center"
                          className="rounded-2xl object-cover max-w-sm mx-auto"
                          sizes="(max-width: 640px) 92vw, 384px"
                        />
                      ) : (
                        <div className="overflow-hidden rounded-2xl ring-2 ring-pink-soft/30 shadow-sm">
                          <CldImage
                            src={whyImage}
                            alt={`Why ${content.productName}`}
                            width={1200}
                            height={675}
                            className="h-auto w-full object-cover"
                            sizes="(max-width: 1024px) 92vw, 56rem"
                          />
                        </div>
                      )
                    ) : null}

                    {clinicalSecondarySplit && whyImage ? (
                      <>
                        <div className="mx-auto max-w-3xl space-y-4 lg:mx-0">
                          <p className="text-lg text-muted">
                            {content.howItWorks.together}
                          </p>
                        </div>
                        <WellbeingClinicalGuideSplit
                          imageSrc={whyImage}
                          productName={content.productName}
                          clinicalTitle={content.howItWorks.clinicalTitle}
                          clinicalBody={content.howItWorks.clinicalBody}
                          guideHref={content.howItWorks.guideHref}
                        />
                      </>
                    ) : (
                      <div className="mx-auto max-w-3xl space-y-4 lg:mx-0">
                        <p className="text-lg text-muted">
                          {content.howItWorks.together}
                        </p>
                        <p className="font-bold text-plum">
                          {content.howItWorks.clinicalTitle}
                        </p>
                        <p className="text-lg text-muted">
                          {content.howItWorks.clinicalBody}
                        </p>
                        <a
                          href={content.howItWorks.guideHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={wellbeingPdfLinkClass}
                        >
                          Download Product Information PDF
                        </a>
                      </div>
                    )}
                  </>
                );
              })()}
            </div>
          </Inner>
        </InViewSection>
      </FullBleed>

      <FullBleed bgClassName="bg-plum">
        <InViewSection className="relative py-16 md:py-20">
          <Inner>
            {content.midSection.type === "stats" ? (
              <>
                {content.images?.stats ? (
                  <div className="mx-auto mb-10 max-w-3xl overflow-hidden rounded-2xl border border-white/15 shadow-lg">
                    <CldImage
                      src={content.images.stats}
                      alt={`${content.productName} clinical study highlights`}
                      width={900}
                      height={520}
                      className="h-auto w-full object-cover"
                      sizes="(max-width: 1024px) 92vw, 48rem"
                    />
                  </div>
                ) : null}
                <h2 className="mb-12 text-center font-display text-3xl text-white md:text-4xl">
                  Clinical Study Results
                </h2>
                <div
                  className={`grid gap-8 ${content.midSection.stats.length >= 4 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : "grid-cols-1 md:grid-cols-3"}`}
                >
                  {content.midSection.stats.map((s) => (
                    <div
                      key={`${s.value}-${s.label.slice(0, 24)}`}
                      className="rounded-2xl border border-white/15 bg-white/5 px-6 py-8 text-center"
                    >
                      <p className="font-display text-5xl text-white md:text-6xl">
                        {s.value}
                      </p>
                      <p className="mt-3 text-sm leading-snug text-pink-pale">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mx-auto mt-10 max-w-3xl text-center text-xs italic text-pink-soft md:text-sm">
                  {content.midSection.footnote}
                </p>
              </>
            ) : (
              <>
                {content.images?.stats ? (
                  <div className="mx-auto mb-10 max-w-3xl overflow-hidden rounded-2xl border border-white/15">
                    <CldImage
                      src={content.images.stats}
                      alt={`${content.productName} highlights`}
                      width={900}
                      height={520}
                      className="h-auto w-full object-cover"
                      sizes="(max-width: 1024px) 92vw, 48rem"
                    />
                  </div>
                ) : null}
                <blockquote className="mx-auto max-w-3xl text-center font-display text-xl leading-relaxed text-blush md:text-2xl">
                  {content.midSection.quote}
                </blockquote>
              </>
            )}
          </Inner>
        </InViewSection>
      </FullBleed>

      {content.videoSection?.placement === "afterStats" ? (
        <FullBleed bgClassName="bg-white">
          <WellbeingProductVideoBlock section={content.videoSection} />
        </FullBleed>
      ) : null}

      <FullBleed bgClassName="bg-pink-pale">
        <InViewSection className="relative py-20 md:py-28">
          <Inner>
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <div className="rounded-lg border border-gold/30 bg-gold/10 px-4 py-2 text-center">
                <p className="text-sm font-semibold text-plum">
                  🎁 Special Offer: Save{" "}
                  <span className="text-pink-hot">20% Today!</span>
                </p>
              </div>
              <div className="flex flex-col flex-wrap items-stretch justify-center gap-4 sm:flex-row sm:justify-center">
                {content.purchase.buttons.map((b) => (
                  <a
                    key={b.label}
                    href={b.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center gap-2 justify-center rounded-full bg-pink-hot px-8 py-3 text-center text-sm font-semibold text-white shadow-md shadow-pink-hot/25 transition hover:bg-[#cf3f6f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot focus-visible:ring-offset-2 focus-visible:ring-offset-pink-pale sm:min-w-[200px] sm:flex-none"
                  >
                    <ShoppingCart className="size-4" aria-hidden="true" />
                    {b.label}
                  </a>
                ))}
              </div>
            </div>
          </Inner>
        </InViewSection>
      </FullBleed>

      <FullBleed bgClassName="bg-white">
        <InViewSection className="relative py-20 md:py-28">
          <Inner>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-5">
                <h2 className="font-display text-3xl text-plum md:text-4xl">
                  {content.howToUse.left.h2}
                </h2>
                {content.howToUse.left.paragraphs.map((p, i) => (
                  <p key={`how-${i}`} className="text-lg text-muted">
                    {p}
                  </p>
                ))}
              </div>
              <div className="space-y-6">
                <h2 className="font-display text-3xl text-plum md:text-4xl">
                  {content.howToUse.right.h2}
                </h2>
                {content.howToUse.right.paragraphs?.map((p, i) => (
                  <p key={`who-intro-${i}`} className="text-lg text-muted">
                    {p}
                  </p>
                ))}
                {content.howToUse.right.listIntro ? (
                  <p className="text-lg font-medium text-plum">
                    {content.howToUse.right.listIntro}
                  </p>
                ) : null}
                {content.howToUse.right.listItems?.length ? (
                  <ul className="space-y-2 text-muted">
                    {content.howToUse.right.listItems.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-pink-hot" aria-hidden>
                          -
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {content.howToUse.right.closingParagraphs?.map((p, i) => (
                  <p key={`who-close-${i}`} className="text-lg text-muted">
                    {p}
                  </p>
                ))}
                {content.howToUse.right.quoteBox ? (
                  <div className="rounded-2xl bg-pink-pale p-6 text-muted md:p-8">
                    {content.howToUse.right.quoteBox}
                  </div>
                ) : null}
                {content.howToUse.right.importantBox ? (
                  <div className="rounded-2xl border-l-4 border-pink-hot bg-pink-pale p-6 md:p-8">
                    <p className="font-bold text-plum">
                      {content.howToUse.right.importantBox.title}
                    </p>
                    <p className="mt-3 text-muted">
                      {content.howToUse.right.importantBox.body}
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          </Inner>
        </InViewSection>
      </FullBleed>

      <FullBleed bgClassName="bg-white">
        <Inner>
          <p className="text-center text-xs italic text-muted py-6 border-t border-pink-soft max-w-2xl mx-auto">
            Always consult with your healthcare professional before starting any
            new supplement.
          </p>
        </Inner>
      </FullBleed>

      <FullBleed bgClassName="bg-blush">
        <InViewSection className="relative py-20 md:py-28">
          <Inner>
            <div className="mx-auto max-w-3xl space-y-8 text-center">
              <p className="font-display text-xl italic leading-relaxed text-plum md:text-2xl">
                If you're looking for someone who'll meet you where you're at,
                hold space without judgment, and offer support that actually
                makes a difference, you're in the right place.
              </p>
              <p className="text-lg font-bold text-plum">
                Welcome to Mumma Chelle's.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex w-full justify-center rounded-full bg-pink-hot px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#cf3f6f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot focus-visible:ring-offset-2 focus-visible:ring-offset-blush sm:w-auto"
                >
                  Contact to Learn More
                </Link>
                <Link
                  href="/wellbeing"
                  className="inline-flex w-full justify-center rounded-full border-2 border-plum bg-transparent px-8 py-3 text-sm font-semibold text-plum transition hover:bg-pink-pale focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum focus-visible:ring-offset-2 focus-visible:ring-offset-blush sm:w-auto"
                >
                  View All Wellbeing Products
                </Link>
              </div>
            </div>
          </Inner>
        </InViewSection>
      </FullBleed>
      <WellbeingDisclaimerBanner />
    </div>
  );
}
