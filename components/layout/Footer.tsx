"use client";

import Link from "next/link";
import Image from "next/image";
import { SiteSocialIconButtons } from "@/components/icons/SocialIcons";
import { SITE_NAME, SITE_TAGLINE, footerColumns } from "@/lib/site";

const linkColumnClass =
  "text-sm text-white/70 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-plum";

const headingClass =
  "mb-4 text-sm font-semibold uppercase tracking-widest text-gold";

export function Footer() {
  const [linksColumn, supportColumn] = footerColumns;

  return (
    <footer className="mt-auto bg-plum text-blush">
      <div className="mx-auto max-w-7xl px-8 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush focus-visible:ring-offset-2 focus-visible:ring-offset-plum"
            >
              <Image
                src="/images/mumma-chelles-logo-plum.png"
                alt="Mumma Chelles"
                width={360}
                height={120}
                className="h-24 w-auto object-contain"
              />
              <span className="sr-only">{SITE_NAME}, home</span>
            </Link>
            <p className="text-sm leading-relaxed text-pink-soft">{SITE_TAGLINE}</p>
            <div className="flex flex-wrap gap-3 pt-1">
              <SiteSocialIconButtons />
            </div>
          </div>

          <div>
            <p className={headingClass}>Links</p>
            <ul className="flex flex-col gap-3">
              {linksColumn.links.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={linkColumnClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={headingClass}>Support</p>
            <ul className="flex flex-col gap-3">
              {supportColumn.links.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={linkColumnClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={headingClass}>Newsletter</p>
            <p className="text-sm leading-relaxed text-white/70">
              Be part of our community and never miss an update! Get access to new courses,
              curated resources, and thoughtful content delivered straight to your inbox.
            </p>
            <p className="mt-3 text-sm text-white/50">
              Newsletter coming soon. Follow us on social media to stay 
              connected in the meantime.
            </p>
          </div>
        </div>

        <p className="mt-8 text-center text-xs leading-relaxed text-white/50">
          As an Amazon Associate I earn from qualifying purchases.
        </p>

        <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:flex-wrap md:items-center md:justify-between">
          <p className="text-xs text-white/50">
            © 2026 MUMMA CHELLES. ALL RIGHTS RESERVED.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-xs text-white/50">
            <Link
              href="https://limitlesscreations.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-plum"
            >
              WEB DESIGN BY LIMITLESS CREATIONS AI
            </Link>
            <Link
              href="/terms"
              className="underline-offset-4 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-plum"
            >
              TERMS
            </Link>
            <Link
              href="/privacy"
              className="underline-offset-4 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-plum"
            >
              PRIVACY
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
