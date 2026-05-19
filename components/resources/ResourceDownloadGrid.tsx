"use client";

import { CldImage } from "@/components/ui/cloudinary";
import { motion } from "framer-motion";

export type ResourceDownloadItem = {
  title: string;
  description: string;
  href: string;
  buttonText: string;
  /** Cloudinary public ID (same as CldImage `src`) */
  imageSrc?: string;
};

const cardSurface =
  "flex h-full flex-col overflow-hidden rounded-2xl border border-pink-soft bg-white shadow-md shadow-pink-soft/10 transition duration-300 hover:-translate-y-1 hover:shadow-lg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function ResourceDownloadGrid({ items }: { items: ResourceDownloadItem[] }) {
  return (
    <motion.ul
      className="mx-auto grid max-w-6xl list-none gap-6 md:grid-cols-2 xl:grid-cols-3"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8% 0px" }}
    >
      {items.map((item) => (
        <motion.li key={item.href} variants={itemVariants} className="h-full">
          <article className={cardSurface}>
            {item.imageSrc ? (
              <div className="relative aspect-[4/3] overflow-hidden bg-pink-pale">
                <CldImage
                  src={item.imageSrc}
                  alt={item.title}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 768px) 92vw, 400px"
                />
              </div>
            ) : (
              <div className="aspect-[4/3] bg-pink-pale" aria-hidden />
            )}
            <div className="flex flex-1 flex-col gap-4 p-6">
              <h3 className="font-display text-xl text-plum">{item.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-muted md:text-base">
                {item.description}
              </p>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-pink-hot py-3 text-center text-sm font-semibold text-white shadow-md shadow-pink-hot/20 transition hover:bg-[#cf3f6f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                {item.buttonText}
              </a>
            </div>
          </article>
        </motion.li>
      ))}
    </motion.ul>
  );
}
