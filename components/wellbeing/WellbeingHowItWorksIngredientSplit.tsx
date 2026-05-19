"use client";

import { motion } from "framer-motion";
import { CldImage } from "@/components/ui/cloudinary";

const columnMotion = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

export function WellbeingHowItWorksIngredientSplit({
  heading,
  intro,
  cards,
  imageSrc,
  productName,
  introAboveImage = false,
}: {
  heading: string;
  intro: string;
  cards: readonly { title: string; body: string }[];
  imageSrc: string;
  productName: string;
  /** Intro paragraph above the left-column image; right column shows cards only */
  introAboveImage?: boolean;
}) {
  return (
    <>
      <h2 className="font-display text-3xl text-plum md:text-4xl">
        {heading}
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 lg:items-start">
        <motion.div {...columnMotion} className="order-1">
          {introAboveImage ? (
            <>
              <p className="text-lg text-gray-700 mb-6">{intro}</p>
              <div className="mt-6">
                <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl lg:mx-0">
                  <CldImage
                    src={imageSrc}
                    alt={`${productName} ingredients`}
                    width={500}
                    height={500}
                    crop="fill"
                    gravity="center"
                    className="rounded-2xl object-cover w-full h-full"
                    sizes="(max-width: 1024px) 92vw, 500px"
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl lg:mx-0">
              <CldImage
                src={imageSrc}
                alt={`${productName} ingredients`}
                width={500}
                height={500}
                crop="fill"
                gravity="center"
                className="rounded-2xl object-cover w-full h-full"
                sizes="(max-width: 1024px) 92vw, 500px"
              />
            </div>
          )}
        </motion.div>
        <motion.div
          {...columnMotion}
          className={introAboveImage ? "order-2" : "order-2 space-y-6"}
        >
          {!introAboveImage ? (
            <p className="text-lg text-muted">{intro}</p>
          ) : null}
          <div className="space-y-4">
            {cards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-pink-soft bg-white p-6"
              >
                <h3 className="font-display text-xl text-plum">{card.title}</h3>
                <p className="mt-3 text-muted">{card.body}</p>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
