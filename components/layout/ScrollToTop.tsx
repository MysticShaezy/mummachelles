"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        zIndex: 50,
        width: "52px",
        height: "52px",
        borderRadius: "14px",
        background: "rgba(61,26,46,0.45)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(232,180,200,0.25)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 0 12px 2px rgba(201,105,154,0.2)",
        transition:
          "transform 0.25s, box-shadow 0.25s, background 0.25s, border-color 0.25s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.background = "rgba(61,26,46,0.65)";
        e.currentTarget.style.boxShadow =
          "0 0 28px 10px rgba(201,105,154,0.5), 0 0 60px 20px rgba(201,105,154,0.2)";
        e.currentTarget.style.borderColor = "rgba(201,105,154,0.6)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.background = "rgba(61,26,46,0.45)";
        e.currentTarget.style.boxShadow = "0 0 12px 2px rgba(201,105,154,0.2)";
        e.currentTarget.style.borderColor = "rgba(232,180,200,0.25)";
      }}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M3 15L11 7L19 15"
          stroke="#c9699a"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
