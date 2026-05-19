"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const items = [
  {
    id: "schedule",
    title: "Printable Daily Visual Schedule",
    body: null as string | null,
    cta: { label: "Download", href: "/resources" },
  },
  {
    id: "sensory-cards",
    title: "Sensory Break Activity Cards",
    body: "Coming Soon",
    cta: null,
  },
  {
    id: "reading-pack",
    title: "Inclusive Reading List Starter Pack",
    body: "Coming Soon",
    cta: null,
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
                {item.body ? <p>{item.body}</p> : null}
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
