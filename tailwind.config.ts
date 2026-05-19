import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: "#3d1a2e",
        blush: "#fdf5f5",
        "pink-pale": "#fceef3",
        "pink-hot": "#e34d7c",
        "pink-soft": "#f3c2d4",
        gold: "#c6a23a",
        muted: "#6b5a62",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "ui-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        logo: ["var(--font-logo)", "cursive"],
      },
    },
  },
  plugins: [],
} satisfies Config;
