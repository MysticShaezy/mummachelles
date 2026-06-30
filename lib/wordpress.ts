const WP_STAGING_ORIGIN = "https://wp.mummachelles.com.au";

export const WP_STAGING_POSTS_URL = `${WP_STAGING_ORIGIN}/wp-json/wp/v2/posts`;

/** Staging category IDs — adjust after confirming in WordPress. */
export const WP_CATEGORY_IDS = {
  blog: 22,
  books: 21,
  toys: 3,
} as const;

export type WpPost = {
  id: number;
  slug: string;
  link: string;
  title: { rendered: string };
  excerpt?: { rendered?: string };
  content?: { rendered?: string };
  categories?: number[];
  tags?: number[];
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url?: string; alt_text?: string }>;
    "wp:term"?: Array<
      Array<{
        id: number;
        slug: string;
        name: string;
        taxonomy: string;
      }>
    >;
  };
};

export type BookSectionKey =
  | "childrens-literature"
  | "teenager-reads"
  | "health-and-wellbeing"
  | "parenting";

export const BOOK_SECTION_TAG_SLUGS: Record<BookSectionKey, string> = {
  "childrens-literature": "childrens-literature",
  "teenager-reads": "teenager-reads",
  "health-and-wellbeing": "health-and-wellbeing",
  parenting: "parenting",
};

/** Legacy category paths in post HTML when tags are not yet assigned in WordPress. */
const BOOK_SECTION_CONTENT_MARKERS: Record<BookSectionKey, string[]> = {
  "childrens-literature": [
    "Children's-Literature",
    "Childrens-Literature",
    "childrens-literature",
  ],
  "teenager-reads": ["TeenagerReads", "Teenager-Reads", "teenager-reads"],
  "health-and-wellbeing": [
    "Books-Health-Wellbeing",
    "Health-Wellbeing",
    "health-and-wellbeing",
  ],
  parenting: ["Parenting", "parenting"],
};

export function getPostTagSlugs(post: WpPost): string[] {
  const terms = post._embedded?.["wp:term"] ?? [];
  return terms
    .flat()
    .filter((term) => term.taxonomy === "post_tag")
    .map((term) => term.slug);
}

export function getBookSectionForPost(post: WpPost): BookSectionKey | null {
  const tagSlugs = getPostTagSlugs(post);

  for (const [section, slug] of Object.entries(BOOK_SECTION_TAG_SLUGS) as [
    BookSectionKey,
    string,
  ][]) {
    if (tagSlugs.includes(slug)) return section;
  }

  const content = post.content?.rendered ?? "";
  const categoryMatch = content.match(/category\/([^"'>\s]+)/i);
  const marker = categoryMatch?.[1];
  if (!marker) return null;

  for (const [section, markers] of Object.entries(
    BOOK_SECTION_CONTENT_MARKERS,
  ) as [BookSectionKey, string[]][]) {
    if (markers.some((m) => m.toLowerCase() === marker.toLowerCase())) {
      return section;
    }
  }

  return null;
}

export function groupBooksBySection(
  posts: WpPost[],
): Record<BookSectionKey, WpPost[]> {
  const grouped: Record<BookSectionKey, WpPost[]> = {
    "childrens-literature": [],
    "teenager-reads": [],
    "health-and-wellbeing": [],
    parenting: [],
  };

  for (const post of posts) {
    const section = getBookSectionForPost(post);
    if (section) grouped[section].push(post);
  }

  return grouped;
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

export function truncateExcerpt(html: string | undefined, max = 140): string {
  const plain = stripHtml(html ?? "");
  if (plain.length <= max) return plain;
  return `${plain.slice(0, max)}...`;
}

export async function getWpPosts(categoryId?: number): Promise<WpPost[]> {
  try {
    const url = new URL(WP_STAGING_POSTS_URL);
    url.searchParams.set("_embed", "");
    url.searchParams.set("per_page", "50");
    if (categoryId != null) {
      url.searchParams.set("categories", String(categoryId));
    }

    const res = await fetch(url.toString(), { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export function getFeaturedImage(post: WpPost): {
  src: string;
  alt: string;
} | null {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  if (!media?.source_url) return null;
  return {
    src: media.source_url,
    alt: media.alt_text || stripHtml(post.title.rendered),
  };
}
