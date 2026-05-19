"use client";

import { motion } from "framer-motion";
import { CldImage } from "@/components/ui/cloudinary";

const columnMotion = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

export function WellbeingClinicalGuideSplit({
  imageSrc,
  productName,
  clinicalTitle,
  clinicalBody,
  guideHref,
}: {
  imageSrc: string;
  productName: string;
  clinicalTitle: string;
  clinicalBody: string;
  guideHref: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 lg:items-start">
      <motion.div {...columnMotion} className="order-1">
        <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl lg:mx-0">
          <CldImage
            src={imageSrc}
            alt={`Why ${productName}`}
            width={500}
            height={500}
            crop="fill"
            gravity="center"
            className="rounded-2xl object-cover w-full h-full"
            sizes="(max-width: 1024px) 92vw, 500px"
          />
        </div>
      </motion.div>
      <motion.div {...columnMotion} className="order-2 space-y-6">
        <p className="font-bold text-plum">{clinicalTitle}</p>
        <p className="text-lg text-muted">{clinicalBody}</p>
        <a
          href={guideHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-hot underline hover:text-plum transition-colors font-medium"
        >
          Download Product Information PDF
        </a>
      </motion.div>
    </div>
  );
}
