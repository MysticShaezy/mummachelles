"use client";

import { motion } from "framer-motion";
import { Home, Mail } from "lucide-react";
import { DottedTrail, HeartFloat } from "@/components/home/decorative";
import { ContactForm } from "@/components/forms/ContactForm";
import { SiteSocialIconButtons } from "@/components/icons/SocialIcons";
import { InViewSection } from "@/components/sections/InViewSection";

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        fill="#25D366"
        d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.93 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.93a9.87 9.87 0 0 0-2.92-7.03 9.87 9.87 0 0 0-7-2.87Zm0 18.07h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.42 5.83c0 4.54-3.7 8.24-8.25 8.24Zm4.52-6.16c-.25-.12-1.47-.73-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.07-.1-.23-.16-.48-.27Z"
      />
    </svg>
  );
}

export function ContactPageContent() {
  return (
    <div className="-mx-4 overflow-x-hidden pb-16 sm:-mx-6 lg:-mx-10">
      <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen bg-blush">
        <InViewSection className="relative overflow-hidden py-16 md:py-24">
          <div
            className="pointer-events-none absolute -right-32 top-24 z-0 h-72 w-72 rounded-full bg-pink-pale/60"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-20 z-0 h-56 w-56 rounded-full bg-plum/[0.04]"
            aria-hidden
          />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-2 lg:gap-16 lg:items-start">
              <div className="relative space-y-8">
                <motion.div
                  className="pointer-events-none absolute -top-8 left-0 md:-top-10"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                >
                  <HeartFloat className="size-9 opacity-70 md:size-11" />
                </motion.div>

                <div className="pt-4">
                  <h1 className="font-body text-3xl font-bold tracking-tight text-plum md:text-4xl">
                    Contact Us
                  </h1>

                  <div className="relative mt-8 flex gap-5 md:gap-6">
                    <div className="relative shrink-0 pt-1">
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.6,
                        }}
                      >
                        <Home
                          className="size-7 text-pink-hot/45 md:size-8"
                          strokeWidth={1.25}
                          aria-hidden
                        />
                      </motion.div>
                      <DottedTrail className="pointer-events-none absolute left-1/2 top-full mt-1 w-16 -translate-x-1/2 rotate-6 opacity-50 md:w-20" />
                    </div>
                    <p
                      id="contact-intro"
                      className="max-w-lg text-base leading-relaxed text-muted md:text-lg"
                    >
                      We&apos;d love to hear from you! Whether you&apos;re after
                      recommendations, training options, or simply want to
                      connect, just fill out the form.
                    </p>
                  </div>

                  <div className="mt-10 space-y-5 text-muted">
                    <a
                      href="https://wa.me/61422292414"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-plum transition hover:text-pink-hot focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot focus-visible:ring-offset-2 focus-visible:ring-offset-blush"
                    >
                      <WhatsAppGlyph className="size-6 shrink-0" aria-hidden />
                      <span className="text-base md:text-lg">
                        <span className="font-semibold text-plum">Phone:</span>{" "}
                        0422 292 414
                      </span>
                    </a>
                    <a
                      href="mailto:michelle@mummachelles.com.au"
                      className="flex items-center gap-3 text-plum transition hover:text-pink-hot focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot focus-visible:ring-offset-2 focus-visible:ring-offset-blush"
                    >
                      <Mail
                        className="size-6 shrink-0 text-pink-hot"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                      <span className="text-base md:text-lg">
                        <span className="font-semibold text-plum">Email:</span>{" "}
                        michelle@mummachelles.com.au
                      </span>
                    </a>
                  </div>

                  <div className="mt-10">
                    <SiteSocialIconButtons />
                  </div>
                </div>
              </div>

              <div className="relative">
                <DottedTrail className="pointer-events-none absolute -right-4 top-16 z-0 w-36 rotate-[18deg] opacity-55 md:right-8 md:top-24 md:w-44" />

                <ContactForm />
              </div>
            </div>
          </div>
        </InViewSection>
      </div>
    </div>
  );
}
