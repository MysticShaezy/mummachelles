"use client";

import type React from "react";

import { MeshGradient } from "@paper-design/shaders-react";

interface ShaderBackgroundProps {
  children: React.ReactNode;
}

export function ShaderBackground({ children }: ShaderBackgroundProps) {
  return (
    <div className="relative w-full">
      <svg className="absolute inset-0 h-0 w-0">
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
      <div className="relative z-10">{children}</div>
    </div>
  );
}
