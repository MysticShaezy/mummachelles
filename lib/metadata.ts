import type { Metadata } from "next";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./site";

export function resolveSiteUrl(pathname: string): string {
  const base = SITE_URL.replace(/\/$/, "");
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${base}${path}`;
}

export function createPageMetadata(options: {
  title: string;
  description?: string;
  pathname: string;
}): Metadata {  const canonical = resolveSiteUrl(options.pathname);
  const headline = `${options.title} | ${SITE_NAME}`;
  const description = options.description ?? SITE_DESCRIPTION;

  return {
    title: options.title,
    alternates: { canonical },
    description,
    openGraph: {
      title: headline,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: headline,
      description,
    },
  };
}