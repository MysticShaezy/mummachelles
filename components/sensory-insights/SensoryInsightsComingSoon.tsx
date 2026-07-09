"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Link from "next/link";
import {
  BeeDecoration,
  DottedTrail,
  HeartFloat,
} from "@/components/home/decorative";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={fadeUp.initial}
      animate={fadeUp.animate}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

function PulsingLiveDot() {
  return (
    <span className="relative flex h-4 w-4 shrink-0 items-center justify-center">
      {[0, 0.75].map((rippleDelay) => (
        <motion.span
          key={rippleDelay}
          aria-hidden
          className="absolute box-border inline-flex h-3 w-3 rounded-full border-2 border-pink-hot bg-transparent"
          animate={{ scale: [1, 2], opacity: [0.6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut",
            delay: rippleDelay,
          }}
        />
      ))}
      <motion.span
        aria-hidden
        className="relative z-10 h-3 w-3 rounded-full bg-pink-hot"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </span>
  );
}

const floatingHeartConfigs = [
  { className: "left-[12%] top-[22%] size-7 md:size-9", duration: 4.2, delay: 0 },
  { className: "right-[18%] top-[28%] size-6 md:size-8", duration: 3.6, delay: 0.4 },
  { className: "left-[20%] bottom-[30%] size-5 md:size-7", duration: 5, delay: 0.8 },
  { className: "right-[10%] bottom-[22%] size-8 md:size-10", duration: 4.5, delay: 1.1 },
] as const;

export function SensoryInsightsComingSoon() {
  return (
    <div className="relative -mx-4 min-h-screen overflow-hidden bg-blush sm:-mx-6 lg:-mx-10">
      {/* Background decorations */}
      <div
        className="pointer-events-none absolute -right-24 top-0 z-0 h-96 w-96 rounded-full bg-pink-pale opacity-40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 z-0 h-64 w-64 rounded-full bg-plum opacity-[0.05]"
        aria-hidden
      />
      <BeeDecoration className="pointer-events-none absolute left-[4%] top-24 z-0 size-14 opacity-70 md:left-[6%] md:size-16" />
      {floatingHeartConfigs.map(({ className, duration, delay }) => (
        <motion.div
          key={className}
          className={`pointer-events-none absolute z-0 ${className}`}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
        >
          <HeartFloat className="size-full" />
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 md:py-20 lg:px-8">
        <FadeIn delay={0}>
          <div className="inline-flex items-center gap-3 rounded-full bg-plum px-6 py-2 shadow-md shadow-plum/20">
            <PulsingLiveDot />
            <span className="text-sm font-medium tracking-widest text-white">
              COMING SOON
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-10">
          <h1 className="font-display text-5xl text-plum md:text-7xl">
            Sensory{" "}
            <span className="italic text-pink-hot">Insights</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.4} className="mt-6">
          <h2 className="font-display text-2xl font-normal text-plum md:text-3xl">
            Courses for Parents & Carers
          </h2>
        </FadeIn>

        <FadeIn delay={0.5} className="mt-10 w-full max-w-md px-4">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-pink-soft" aria-hidden />
            <Heart
              className="size-[18px] shrink-0 text-pink-soft"
              strokeWidth={1.5}
              aria-hidden
            />
            <div className="h-px flex-1 bg-pink-soft" aria-hidden />
          </div>
        </FadeIn>

        <FadeIn delay={0.6} className="mt-10 max-w-2xl space-y-6">
          <p className="text-lg text-muted">
            Deeper Learning & Practical Support for Parents & Carers
          </p>
          <p className="mx-auto max-w-xl text-muted">
            Learn from our tailored courses, designed to empower parents,
            educators and carers to better support diverse learners.
          </p>
        </FadeIn>

        <FadeIn delay={0.8} className="mt-12 w-full max-w-lg space-y-4">
          <p className="text-sm tracking-wider text-gold">
            Be the first to know when we launch
          </p>
          {/* TODO: Connect to email service (Resend/Kit) when ready */}
          <form
            className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <label htmlFor="sensory-notify-email" className="sr-only">
              Email address
            </label>
            <input
              id="sensory-notify-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email address"
              className="min-w-0 flex-1 rounded-full border border-pink-soft bg-white/90 px-6 py-3 text-plum shadow-sm outline-none ring-pink-hot/30 placeholder:text-muted focus:border-pink-hot focus:ring-2 sm:min-w-[300px]"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-pink-hot px-8 py-3 font-semibold text-white shadow-md shadow-pink-hot/25 transition hover:bg-[#cf3f6f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot focus-visible:ring-offset-2 focus-visible:ring-offset-blush"
            >
              Notify Me
            </button>
          </form>
        </FadeIn>

        <FadeIn delay={1} className="relative mt-16 max-w-2xl">
          <p
            className="pointer-events-none absolute -left-1 -top-2 font-serif text-6xl leading-none text-pink-soft select-none md:left-2 md:-top-4"
            aria-hidden
          >
            &ldquo;
          </p>
          <DottedTrail className="pointer-events-none absolute -right-8 bottom-0 z-0 w-24 rotate-12 opacity-35 md:-right-16 md:w-32" />
          <blockquote className="relative space-y-4 pt-6">
            <p className="font-display text-xl italic leading-relaxed text-plum">
              If you're looking for someone who'll meet you where you're at,
              hold space without judgment, and offer support that actually makes
              a difference, you're in the right place.
            </p>
            <p className="font-display text-lg font-bold text-plum">
              Welcome to Mumma Chelle's.
            </p>
          </blockquote>
        </FadeIn>

        <FadeIn delay={1.2} className="mt-8">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-pink-hot px-8 py-4 font-semibold text-white shadow-md shadow-pink-hot/25 transition hover:bg-[#cf3f6f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot focus-visible:ring-offset-2 focus-visible:ring-offset-blush"
          >
            Contact to Learn More
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}
