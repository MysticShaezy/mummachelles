import type { MetadataRoute } from "next";

import { ROUTES } from "@/lib/routes";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL.replace(/\/$/, "");

  return ROUTES.map((path) => {
    const depth = path.split("/").filter(Boolean).length;
    const priority = path === "/" ? 1 : depth >= 2 ? 0.55 : 0.75;

    const urlSuffix = path === "/" ? "/" : path;

    return {
      url: `${base}${urlSuffix}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority,
    };
  });
}
