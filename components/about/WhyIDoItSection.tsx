"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CldImage } from "@/components/ui/cloudinary";
import { IMAGES } from "@/lib/images";

const viewTransition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function WhyIDoItSection() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
      <motion.div
        className="order-2 lg:order-1"
        initial={{ opacity: 0, x: -48 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={viewTransition}
      >
        <div className="relative aspect-[6/7] w-full overflow-hidden rounded-2xl">
          <CldImage
            src={IMAGES.photography.whyIDoIt}
            alt="Warm moment representing care, connection, and support for children and families"
            width={600}
            height={700}
            crop="fill"
            gravity="center"
            sizes="(max-width: 1024px) 92vw, 42rem"
            className="rounded-2xl w-full h-full object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        className="order-1 space-y-6 lg:order-2"
        initial={{ opacity: 0, x: 48 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={viewTransition}
      >
        <h2 className="font-display text-3xl text-plum md:text-4xl">Why I Do It</h2>
        <div className="space-y-5 text-lg leading-relaxed text-muted md:text-xl">
          <p>
            Because I believe every child deserves to be seen, heard, and held - and every adult
            deserves the tools and support to do that well.
          </p>
          <p>
            My work is grounded in empathy, built on research, and guided by lived experience.
            I&apos;ve walked beside families through their hardest moments, celebrated their wins,
            and reminded them that they&apos;re never alone.
          </p>
          <p>
            I&apos;m here to offer practical tools, honest insights, and a calm voice in the chaos -
            all wrapped up in a healthy dose of Mumma Chelle realness.
          </p>
          <p>
            If you&apos;re looking for someone who&apos;ll meet you where you&apos;re at, hold space
            without judgment, and offer support that actually makes a difference - you&apos;re in the
            right place.
          </p>
          <p className="font-bold text-plum">Welcome to Mumma Chelle&apos;s.</p>
        </div>
        <Link
          href="/contact"
          className="inline-flex rounded-full bg-pink-hot px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-md shadow-pink-hot/25 transition hover:-translate-y-0.5 hover:bg-[#cf3f6f] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot focus-visible:ring-offset-2 focus-visible:ring-offset-pink-pale"
        >
          Contact to Learn More
        </Link>
      </motion.div>
    </div>
  );
}
