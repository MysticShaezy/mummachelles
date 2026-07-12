"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import type { WpPost } from "@/lib/wordpress";
import { WpPostCard } from "@/components/wordpress/WpPostCard";
import { stripHtml } from "@/lib/wordpress";

type BlogPostsSectionProps = {
  posts: WpPost[];
};

export function BlogPostsSection({ posts }: BlogPostsSectionProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts.filter((post) => {
    if (!searchTerm.trim()) return true;

    const searchLower = searchTerm.toLowerCase();
    const title = stripHtml(post.title.rendered).toLowerCase();
    const excerpt = stripHtml(post.excerpt?.rendered || "").toLowerCase();

    return title.includes(searchLower) || excerpt.includes(searchLower);
  });

  return (
    <div className="space-y-8">
      <div className="mx-auto max-w-2xl">
        <div className="relative">
          <Search
            className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted"
            aria-hidden
          />
          <input
            type="search"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-full border border-pink-soft bg-white py-3 pl-12 pr-4 text-plum placeholder:text-muted focus:border-pink-hot focus:outline-none focus:ring-2 focus:ring-pink-hot/20"
          />
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <WpPostCard key={post.id} post={post} ctaLabel="Read article" />
          ))
        ) : searchTerm.trim() ? (
          <p className="col-span-full text-center text-muted">
            No articles found matching "{searchTerm}".
          </p>
        ) : (
          <p className="col-span-full text-center text-muted">
            Blog posts coming soon.
          </p>
        )}
      </div>
    </div>
  );
}
