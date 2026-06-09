"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const items = [
  {
    id: "schedule",
    title: "Printable Daily Visual Schedule",
    intro: "A simple tool to bring structure and calm.",
    body: "This easy-to-customise visual schedule helps children understand what's next, easing anxiety and encouraging independence at home, in class or during care routines.",
    cta: {
      label: "Download Your Daily Visual Schedule",
      href: "/resources",
    },
    status: null as string | null,
  },
  {
    id: "sensory-cards",
    title: "Sensory Break Activity Cards",
    intro: "Quick ideas to reset and refocus.",
    body: "A set of colourful cards with short sensory activities from calming breathing exercises to movement games, designed for use by educators, carers or parents throughout the day.",
    cta: null,
    status: "Coming Soon",
  },
  {
    id: "reading-pack",
    title: "Inclusive Reading List Starter Pack",
    intro: "Books that celebrate every learner.",
    body: "A hand-picked PDF list of picture books, chapter books and YA titles that highlight diversity, neurodiversity and inclusive themes, perfect for building or refreshing your classroom or home library.",
    cta: null,
    status: "Coming Soon",
  },
] as const;

export function FreeResourcesAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const open = openId === item.id;
        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-2xl border border-pink-soft bg-white shadow-sm transition hover:shadow-md"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-plum focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot"
              aria-expanded={open}
              onClick={() => setOpenId(open ? null : item.id)}
            >
              <span>{item.title}</span>
              <ChevronDown
                className={`size-5 shrink-0 text-pink-hot transition ${open ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
            {open ? (
              <div className="space-y-4 border-t border-pink-soft bg-blush/40 px-5 pb-5 pt-4 text-sm text-muted">
                {item.intro ? (
                  <p>
                    <strong className="font-semibold text-plum">
                      {item.intro}
                    </strong>
                  </p>
                ) : null}
                {item.body ? <p>{item.body}</p> : null}
                {item.status ? (
                  <p className="font-semibold text-plum">{item.status}</p>
                ) : null}
                {item.cta ? (
                  <Link
                    href={item.cta.href}
                    className="inline-flex rounded-full bg-pink-hot px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#cf3f6f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot"
                  >
                    {item.cta.label}
                  </Link>
                ) : null}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
