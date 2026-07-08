"use client";

import { Mail } from "lucide-react";
import { useEffect, useState } from "react";
import {
  ResourceDownloadGrid,
  type ResourceDownloadItem,
} from "@/components/resources/ResourceDownloadGrid";

const STORAGE_KEY = "resourcesUnlocked";

type ResourceUnlockGateProps = {
  onUnlock: () => void;
};

function ResourceUnlockGate({ onUnlock }: ResourceUnlockGateProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!consent) {
      setStatus("error");
      setErrorMessage("Please agree to receive updates before unlocking.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/resource-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      localStorage.setItem(STORAGE_KEY, "true");
      onUnlock();
    } catch {
      setStatus("error");
      setErrorMessage("Unable to connect. Please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mb-12 max-w-2xl space-y-5 rounded-2xl border border-pink-soft bg-white p-6 shadow-md shadow-pink-soft/10 md:p-8"
    >
      <div className="space-y-2 text-center">
        <h3 className="font-display text-2xl text-plum md:text-3xl">
          Unlock All <span className="text-pink-hot">Resources</span>
        </h3>
        <p className="text-sm text-muted md:text-base">
          Enter your details once to access every free download below.
        </p>
      </div>

      <label className="grid gap-2 text-sm font-semibold text-plum">
        First Name
        <input
          name="name"
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="First Name"
          autoComplete="given-name"
          className="rounded-xl border border-neutral-200 bg-white px-4 py-3 text-base font-normal text-plum placeholder:text-muted focus-visible:border-pink-hot focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot/35"
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
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            placeholder="Email"
            className="w-full rounded-xl border border-neutral-200 bg-white py-3 pl-11 pr-4 text-base font-normal text-plum placeholder:text-muted focus-visible:border-pink-hot focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot/35"
          />
        </span>
      </label>

      <label className="flex cursor-pointer gap-3 text-sm leading-snug text-muted">
        <input
          name="consent"
          type="checkbox"
          required
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
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
        className="w-full rounded-full bg-pink-hot px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white shadow-md shadow-pink-hot/25 transition hover:bg-[#cf3f6f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-wait disabled:opacity-70"
      >
        {status === "loading" ? "Unlocking..." : "Unlock All Resources"}
      </button>

      {status === "error" && errorMessage ? (
        <p className="rounded-xl bg-pink-pale px-4 py-3 text-center text-sm text-plum">
          {errorMessage}
        </p>
      ) : null}
    </form>
  );
}

export function ResourcesDownloadsSection({
  items,
}: {
  items: ResourceDownloadItem[];
}) {
  const [unlocked, setUnlocked] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setUnlocked(localStorage.getItem(STORAGE_KEY) === "true");
    setReady(true);
  }, []);

  if (!ready) {
    return null;
  }

  return (
    <>
      {!unlocked ? <ResourceUnlockGate onUnlock={() => setUnlocked(true)} /> : null}
      <ResourceDownloadGrid items={items} unlocked={unlocked} />
    </>
  );
}
