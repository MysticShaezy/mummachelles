"use client";

import { Mail } from "lucide-react";

export function HomeContactForm() {
  return (
    <form
      className="relative z-[1] space-y-5 rounded-2xl border border-pink-soft bg-white p-6 shadow-lg shadow-pink-soft/20 md:p-8"
      noValidate={false}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label className="grid gap-2 text-sm font-medium text-plum">
        Full Name
        <input
          name="fullName"
          required
          autoComplete="name"
          className="rounded-xl border border-pink-soft bg-blush px-4 py-3 text-base text-plum focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot"
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-plum">
        Email
        <span className="relative">
          <Mail
            className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-pink-hot opacity-70"
            aria-hidden
          />
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            className="w-full rounded-xl border border-pink-soft bg-blush py-3 pl-11 pr-4 text-base text-plum focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot"
          />
        </span>
      </label>
      <label className="grid gap-2 text-sm font-medium text-plum">
        Message
        <textarea
          name="message"
          rows={5}
          required
          className="rounded-xl border border-pink-soft bg-blush px-4 py-3 text-base text-plum focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot"
        />
      </label>
      <label className="flex cursor-pointer items-start gap-3 text-sm text-muted">
        <input
          type="checkbox"
          name="marketingConsent"
          required
          className="mt-1 size-4 shrink-0 rounded border-pink-soft text-pink-hot focus-visible:ring-pink-hot"
        />
        <span>
          I consent to receive value packed, informational marketing from Mummachelles.com.au.
        </span>
      </label>
      <button
        type="submit"
        className="w-full rounded-full bg-pink-hot px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#cf3f6f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      >
        SEND
      </button>
    </form>
  );
}
