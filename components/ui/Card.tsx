import type { ComponentPropsWithoutRef } from "react";

export function Card({
  children,
  className = "",
  ...rest
}: { children: React.ReactNode; className?: string } &
  ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={`rounded-2xl border border-pink-soft bg-white shadow-sm shadow-pink-soft/60 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
