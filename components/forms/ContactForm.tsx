"use client";

import { Mail } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      access_key: "71d49c63-c46f-4138-92a1-ebafcd73945a",
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form
      className="relative z-10 space-y-6 rounded-2xl border border-pink-soft/80 bg-white p-8 shadow-lg shadow-plum/10 md:p-10"
      aria-describedby="contact-intro"
      noValidate={false}
      onSubmit={handleSubmit}
    >
      <label className="grid gap-2 text-sm font-semibold text-plum">
        Full Name
        <input
          name="name"
          required
          placeholder="Full Name"
          autoComplete="name"
          className="rounded-xl border border-neutral-200 bg-white px-4 py-3 text-base text-plum placeholder:text-muted focus-visible:border-pink-hot focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot/35"
        />
      </label>

      <label className="grid gap-2 text-sm font-semibold text-plum">
        Email <span className="text-pink-hot">*</span>
        <span className="relative">
          <Mail
            className="pointer-events-none absolute left-4 top-1/2 size-[1.125rem] -translate-y-1/2 text-muted"
            strokeWidth={1.75}
            aria-hidden
          />
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            placeholder="Email"
            className="w-full rounded-xl border border-neutral-200 bg-white py-3 pl-11 pr-4 text-base text-plum placeholder:text-muted focus-visible:border-pink-hot focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot/35"
          />
        </span>
      </label>

      <label className="grid gap-2 text-sm font-semibold text-plum">
        Message
        <textarea
          name="message"
          rows={6}
          required
          className="resize-y rounded-xl border border-neutral-200 bg-white px-4 py-3 text-base text-plum placeholder:text-muted focus-visible:border-pink-hot focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot/35"
        />
      </label>

      <label className="flex cursor-pointer gap-3 text-sm leading-snug text-muted">
        <input
          name="marketingConsent"
          type="checkbox"
          className="mt-1 size-4 shrink-0 rounded border-neutral-300 text-pink-hot focus-visible:ring-2 focus-visible:ring-pink-hot focus-visible:ring-offset-2"
        />
        <span>
          I consent to receive value packed, informational marketing from
          Mummachelles.com.au.
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-xl bg-pink-hot px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white shadow-md shadow-pink-hot/25 transition hover:bg-[#cf3f6f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "SENDING..." : "SEND"}
      </button>

      {status === "success" ? (
        <p className="rounded-xl bg-pink-pale px-4 py-3 text-center text-sm text-plum">
          Thanks for reaching out! Michelle will get back to you soon.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="rounded-xl bg-pink-pale px-4 py-3 text-center text-sm text-plum">
          Something went wrong. Please email michelle@mummachelles.com.au directly.
        </p>
      ) : null}
    </form>
  );
}
