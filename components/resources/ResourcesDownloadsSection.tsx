"use client";

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
  return (
    <div className="mx-auto mb-12 max-w-2xl space-y-4 rounded-2xl border border-pink-soft bg-white p-6 shadow-md shadow-pink-soft/10 md:p-8">
      <div className="space-y-2 text-center">
        <h3 className="font-display text-2xl text-plum md:text-3xl">
          Free <span className="text-pink-hot">Resources</span>
        </h3>
        <p className="text-sm text-muted md:text-base">
          Download access coming soon. Check back shortly for instant access to all resources below.
        </p>
      </div>
    </div>
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
