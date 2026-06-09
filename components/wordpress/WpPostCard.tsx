import type { ReactNode } from "react";
import type { WpPost } from "@/lib/wordpress";
import { getFeaturedImage, truncateExcerpt } from "@/lib/wordpress";

type WpPostCardProps = {
  post: WpPost;
  ctaLabel?: string;
  children?: ReactNode;
};

export function WpPostCard({
  post,
  ctaLabel = "Read more",
  children,
}: WpPostCardProps) {
  const image = getFeaturedImage(post);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-pink-soft bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {image && (
        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block shrink-0"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="h-48 w-full object-cover"
          />
        </a>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h2 className="mb-2 font-display text-lg font-semibold text-plum">
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-pink-hot"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
        </h2>
        {children ?? (
          <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
            {truncateExcerpt(post.excerpt?.rendered)}
          </p>
        )}
        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-pink-hot hover:underline"
        >
          {ctaLabel} →
        </a>
      </div>
    </article>
  );
}
