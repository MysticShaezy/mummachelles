export const SITE_NAME = "Mumma Chelles";

/** Site URL used for canonical links and structured data when env is absent. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mummachelles.com.au";

export const SITE_DESCRIPTION =
  "Curated reads, purposeful play ideas, sensory friendly tips, and trusted affiliate picks for carers, educators, and families.";

export const SITE_TAGLINE =
  "Books to Cherish. Toys to Love. Resources to Nourish.";

export const WP_ORIGIN = "https://wp.mummachelles.com.au";

export const NEXT_PUBLIC_WP_API_URL =
  process.env.NEXT_PUBLIC_WP_API_URL ?? `${WP_ORIGIN}/wp-json/wp/v2`;

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
  /** Hub label uses `href`; chevron opens dropdown on hover (desktop). */
  splitDropdown?: boolean;
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Books", href: "/books" },
  { label: "Toys", href: "/toys" },
  { label: "Resources", href: "/resources" },
  {
    label: "Wellbeing",
    href: "/wellbeing",
    splitDropdown: true,
    children: [
      { label: "Wellbeing Overview", href: "/wellbeing" },
      { label: "Feel Calm", href: "/wellbeing/feel-calm" },
      { label: "Night Time", href: "/wellbeing/night-time" },
      { label: "Y-Span", href: "/wellbeing/y-span" },
    ],
  },
  { label: "Sensory insights", href: "/sensory-insights" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerColumns: {
  title: string;
  links: { label: string; href: string }[];
}[] = [
  {
    title: "Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Books", href: "/books" },
      { label: "Toys", href: "/toys" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Blogs", href: "/blog" },
      { label: "Resources", href: "/resources" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];
