"use client";

import { createLucideIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/** Lucide brand glyphs (historical paths; package no longer ships named exports). */
const Facebook = createLucideIcon("Facebook", [
  [
    "path",
    {
      d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
      key: "1jg4f8",
    },
  ],
]);

const Instagram = createLucideIcon("Instagram", [
  [
    "rect",
    {
      width: "20",
      height: "20",
      x: "2",
      y: "2",
      rx: "5",
      ry: "5",
      key: "2e1cvw",
    },
  ],
  [
    "path",
    { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
  ],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
]);

const Linkedin = createLucideIcon("Linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f",
    },
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
]);

const SOCIAL_BUTTON_CLASS =
  "w-10 h-10 rounded-full bg-pink-soft/30 hover:bg-pink-hot hover:text-white transition-all duration-200 flex items-center justify-center text-plum cursor-pointer";

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

const EXTERNAL_LINKS: {
  label: string;
  href: string;
  Icon: LucideIcon;
}[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/mummachelles",
    Icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mummachelles",
    Icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/michellethomas-mummachelles/",
    Icon: Linkedin,
  },
];

/** Four social circle buttons: Facebook, Instagram, LinkedIn (Lucide), Spotify (inline SVG). */
export function SiteSocialIconButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      {EXTERNAL_LINKS.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={SOCIAL_BUTTON_CLASS}
          aria-label={label}
        >
          <Icon className="size-5" strokeWidth={1.75} aria-hidden />
        </a>
      ))}
      <a
        href="https://open.spotify.com/playlist/1Rno9tY5Ib76MZ71xXk04r"
        target="_blank"
        rel="noopener noreferrer"
        className={SOCIAL_BUTTON_CLASS}
        aria-label="Spotify"
      >
        <SpotifyIcon className="size-5" />
      </a>
    </div>
  );
}
