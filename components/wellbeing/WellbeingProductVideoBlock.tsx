"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { CldVideoPlayer } from "next-cloudinary";
import type { WellbeingProductVideoSection } from "@/lib/wellbeing-products";

import "next-cloudinary/dist/cld-video-player.css";

function VideoInner({
  children,
  embedded,
}: {
  children: ReactNode;
  embedded: boolean;
}) {
  return (
    <motion.section
      className={
        embedded
          ? "relative mt-12 border-t border-pink-soft/50 pt-12 md:mt-16 md:pt-16"
          : "relative py-20 md:py-28"
      }
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </motion.section>
  );
}

export function WellbeingProductVideoBlock({
  section,
  embedded = false,
}: {
  section: WellbeingProductVideoSection;
  embedded?: boolean;
}) {
  return (
    <VideoInner embedded={embedded}>
      <h2 className="text-center font-display text-3xl text-plum md:text-4xl">
        {section.heading}
      </h2>
      {section.provider === "cloudinary" ? (
        <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-2xl shadow-xl">
          <CldVideoPlayer
            width="1920"
            height="1080"
            src={section.src}
            className="w-full"
          />
        </div>
      ) : (
        <div className="mx-auto mt-8 aspect-video max-w-3xl overflow-hidden rounded-2xl shadow-xl">
          <iframe
            src={section.embedSrc}
            title={section.iframeTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="h-full w-full"
          />
        </div>
      )}
    </VideoInner>
  );
}
