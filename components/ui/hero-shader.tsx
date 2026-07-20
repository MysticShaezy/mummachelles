"use client";

import type React from "react";
import { useEffect, useState, type ComponentType } from "react";

interface ShaderBackgroundProps {
  children: React.ReactNode;
}

type MeshGradientProps = {
  className?: string;
  colors: string[];
  speed?: number;
  style?: React.CSSProperties;
};

/**
 * Defers WebGL mesh gradients until after first paint so they don't compete
 * with LCP image/font work. Static blush fallback matches brand until ready.
 */
export function ShaderBackground({ children }: ShaderBackgroundProps) {
  const [MeshGradient, setMeshGradient] = useState<ComponentType<MeshGradientProps> | null>(
    null,
  );

  useEffect(() => {
    let cancelled = false;

    const mount = () => {
      void import("@paper-design/shaders-react").then((mod) => {
        if (!cancelled) {
          setMeshGradient(() => mod.MeshGradient as ComponentType<MeshGradientProps>);
        }
      });
    };

    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(mount, { timeout: 1200 });
    } else {
      timeoutId = setTimeout(mount, 1);
    }

    return () => {
      cancelled = true;
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="relative w-full">
      <div
        className="fixed inset-0 -z-20 h-full w-full bg-blush"
        aria-hidden
      />
      {MeshGradient ? (
        <>
          <svg className="absolute inset-0 h-0 w-0" aria-hidden>
            <defs>
              <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
                <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
                <feColorMatrix
                  type="matrix"
                  values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
                  result="tint"
                />
              </filter>
              <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                  result="gooey"
                />
                <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
              </filter>
            </defs>
          </svg>
          <MeshGradient
            className="fixed inset-0 -z-20 h-full w-full"
            colors={["#fdf5f5", "#c9699a", "#fdf5f5", "#3d1a2e", "#e8b4c8"]}
            speed={0.15}
            style={{ backgroundColor: "#fdf5f5" }}
          />
          <MeshGradient
            className="fixed inset-0 -z-10 h-full w-full opacity-30"
            colors={["#fdf5f5", "#f9edf3", "#c9699a", "#fdf5f5"]}
            speed={0.1}
            style={{ backgroundColor: "transparent" }}
          />
        </>
      ) : null}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
