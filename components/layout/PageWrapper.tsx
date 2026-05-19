import type { ReactNode } from "react";

export function PageWrapper({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-4 pb-14 pt-4 sm:px-6 md:pb-16 md:pt-6 lg:px-10 lg:pb-20 ${className}`.trim()}
    >
      {children}
    </div>
  );
}
