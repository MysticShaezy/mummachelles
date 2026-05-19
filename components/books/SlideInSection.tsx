"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SlideInSection({
  children,
  from,
  className = "",
}: {
  children: ReactNode;
  from: "left" | "right";
  className?: string;
}) {
  const x = from === "left" ? -48 : 48;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
