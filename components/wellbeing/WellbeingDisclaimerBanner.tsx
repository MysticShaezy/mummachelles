"use client";

export function WellbeingDisclaimerBanner() {
  return (
    <aside className="sticky top-14 z-40 border-b border-pink-soft/80 bg-pink-pale px-4 py-3 text-center shadow-sm md:top-16">
      <p className="text-xs italic text-muted md:text-sm">
        Always consult with your healthcare professional before starting any new
        supplement.
      </p>
    </aside>
  );
}
