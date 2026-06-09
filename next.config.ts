import type { NextConfig } from "next";

const WP_ORIGIN = "https://wp.mummachelles.com.au";
const WP_STAGING = "https://mediumturquoise-heron-953818.hostingersite.com";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dlakvczje/**",
      },
      {
        protocol: "https",
        hostname: "mediumturquoise-heron-953818.hostingersite.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      // ---- TOYS ----
      { source: "/post/new-blog-post-6777-8989", destination: "/toys/wooden-colour-sorting-toys", permanent: true },
      { source: "/post/new-blog-post-6777-8989-8974", destination: "/toys/montessori-busy-truck", permanent: true },
      { source: "/post/new-blog-post-6777-9367", destination: "/toys/wobble-boards", permanent: true },
      { source: "/post/new-blog-post-6777", destination: "/toys/balance-bikes", permanent: true },
      { source: "/post/new-blog-post", destination: "/toys/wheelie-bugs", permanent: true },

      // ---- BOOKS: Children's Literature ----
      { source: "/post/new-blog-post-7988", destination: "/books/jetty-jumping", permanent: true },
      { source: "/post/new-blog-post-7988-8898", destination: "/books/the-very-hungry-caterpillar", permanent: true },
      { source: "/post/new-blog-post-7988-8898-4505", destination: "/books/the-truck-cat", permanent: true },
      { source: "/post/new-blog-post-7988-8898-4505-2664", destination: "/books/the-wobbly-bike", permanent: true },
      { source: "/post/new-blog-post-7988-8898-4505-2664-5334", destination: "/books/always-was-always-will-be", permanent: true },
      { source: "/post/new-blog-post-7988-8898-4505-2664-5334-5553", destination: "/books/guess-how-much-i-love-you", permanent: true },
      { source: "/post/new-blog-post-7988-8898-4505-2664-5334-5553-1094", destination: "/books/the-magic-faraway-tree", permanent: true },
      { source: "/post/new-blog-post-7988-8898-4505-2664-5334-5553-1094-1697", destination: "/books/nevermoor-the-first-three-books", permanent: true },
      { source: "/post/new-blog-post-7988-8898-4505-2664-5334-5553-1094-1697-7972", destination: "/books/the-last-bear", permanent: true },
      { source: "/post/new-blog-post-7988-8898-4505-2664-5334-5553-1094-1697-7972-7472-1123", destination: "/books/a-kids-book-about-boredom", permanent: true },
      { source: "/post/new-blog-post-7988-8898-4505-2664-5334-5553-1094-1697-7972-7472-1123-7217", destination: "/books/im-not-really-here", permanent: true },

      // ---- BOOKS: Teenager Reads ----
      { source: "/post/new-blog-post-7988-8898-4505-2664-5334-5553-1094-1697-7972-7472-1123-7217-3724", destination: "/books/anxiety-workbook-for-teens", permanent: true },
      { source: "/post/new-blog-post-7988-8898-4505-2664-5334-5553-1094-1697-7972-7472-1123-7217-3724-7917", destination: "/books/eragon", permanent: true },
      { source: "/post/new-blog-post-7988-8898-4505-2664-5334-5553-1094-1697-7972-7472-1123-7217-3724-7917-8501", destination: "/books/the-extremely-embarrassing-life-of-lotte-brooks", permanent: true },
      { source: "/post/new-blog-post-7988-8898-4505-2664-5334-5553-1094-1697-7972-7472-1123-7217-7390", destination: "/books/the-wildest-dreams-bookshop", permanent: true },
      { source: "/post/new-blog-post-7988-8898-4505-2664-5334-5553-1094-1697-7972-7472-1123-7217-7390-2628", destination: "/books/the-mushroom-in-the-sky", permanent: true },
      { source: "/post/new-blog-post-7988-8898-4505-2664-5334-5553-1094-1697-7972-7472-1123-7217-7390-2628-4848", destination: "/books/the-adhd-teen-survival-guide", permanent: true },
      { source: "/post/new-blog-post-7988-8898-4505-2664-5334-5553-1094-1697-7972-7472-1123-7217-7390-2628-4848-2907", destination: "/books/the-adhd-teen-brain-organiser-for-school", permanent: true },

      // ---- BOOKS: Health & Wellbeing ----
      { source: "/post/new-blog-post-7988-8898-4505-2664-5334-5553-1094-1697-7972-7472-1123-7217-7390-2628-4848-2907-5533-9260", destination: "/books/atomic-habits", permanent: true },
      { source: "/post/new-blog-post-7988-8898-4505-2664-5334-5553-1094-1697-7972-7472-1123-7217-7390-2628-4848-2907-5533-9260-1941", destination: "/books/becoming-supernatural", permanent: true },
      { source: "/post/new-blog-post-7988-8898-4505-2664-5334-5553-1094-1697-7972-7472-1123-7217-7390-2628-4848-2907-5533-9260-1941-9953", destination: "/books/fast-like-a-girl", permanent: true },
      { source: "/post/new-blog-post-7988-8898-4505-2664-5334-5553-1094-1697-7972-7472-1123-7217-7390-2628-4848-2907-5533-9260-1941-9953-2466", destination: "/books/eat-like-a-girl", permanent: true },
      { source: "/post/new-blog-post-7988-8898-4505-2664-5334-5553-1094-1697-7972-7472-1123-7217-7390-2628-4848-2907-5533-9260-1941-9953-2466-6318", destination: "/books/the-myth-of-normal", permanent: true },
      { source: "/post/new-blog-post-7988-8898-4505-2664-5334-5553-1094-1697-7972-7472-1123-7217-7390-2628-4848-2907-5533-9260-1941-9953-2730", destination: "/books/the-menopause-reset", permanent: true },

      // ---- BOOKS: Parenting ----
      { source: "/post/new-blog-post-7988-8898-4505-2664-5334-5553-1094-1697-7972-7472-1123-7217-7390-2628-4848-2907-5533-9260-1941-9953-2466-6318-8582", destination: "/books/the-whole-brain-child", permanent: true },
      { source: "/post/new-blog-post-7988-8898-4505-2664-5334-5553-1094-1697-7972-7472-1123-7217-7390-2628-4848-2907-5533-9260-1941-9953-2466-6318-8582-3945", destination: "/books/building-resilience-in-children-and-teens", permanent: true },
      { source: "/post/new-blog-post-7988-8898-4505-2664-5334-5553-1094-1697-7972-7472-1123-7217-7390-2628-4848-2907-5533-9260-1941-9953-2466-6318-8582-3945-4238", destination: "/books/the-power-of-showing-up", permanent: true },
      { source: "/post/new-blog-post-7988-8898-4505-2664-5334-5553-1094-1697-7972-7472-1123-7217-7390-2628-4848-2907-5533-9260-1941-9953-2466-6318-8582-3945-4238-4121", destination: "/books/a-growth-mindset-coach", permanent: true },
      { source: "/post/new-blog-post-7988-8898-4505-2664-5334-5553-1094-1697-7972-7472-1123-7217-7390-2628-4848-2907-5533-9260-1941-9953-2466-6318-8582-3945-4238-4121-8497", destination: "/books/hold-on-to-your-kids", permanent: true },

      // ---- BLOG POSTS ----
      { source: "/post/an-ode-to-learning-7383", destination: "/blog/an-ode-to-learning", permanent: true },
      { source: "/post/beyond-the-report-card-celebrating-effort-over-outcomes-6848", destination: "/blog/beyond-the-report-card-celebrating-effort-over-outcomes", permanent: true },
      { source: "/post/calm-your-farm-10-strategies-for-managing-a-busy-workload", destination: "/blog/calm-your-farm-10-strategies-for-managing-a-busy-workload", permanent: true },
      { source: "/post/celebrating-imperfect-motherhood-8276", destination: "/blog/celebrating-imperfect-motherhood", permanent: true },
      { source: "/post/deck-the-halls-with-10-affordable-stocking-fillers", destination: "/blog/deck-the-halls-with-10-meaningful-stocking-fillers", permanent: true },
      { source: "/post/embracing-change-preparing-our-children-for-an-ai-driven-future-2264", destination: "/blog/embracing-change-preparing-our-children-for-an-ai-driven-future", permanent: true },
      { source: "/post/embracing-the-true-spirit-of-christmas-more-than-just-presents", destination: "/blog/embracing-the-true-spirit-of-christmas", permanent: true },
      { source: "/post/find-your-calm-this-christmas-a-guide-for-mums-and-dads", destination: "/blog/find-your-calm-this-christmas", permanent: true },
      { source: "/post/love-jobs", destination: "/blog/love-jobs-and-pocket-money", permanent: true },
      { source: "/post/navigating-separation-anxiety", destination: "/blog/navigating-separation-anxiety", permanent: true },
      { source: "/post/new-blog-post-1594", destination: "/blog/the-truth-about-the-terrible-twos", permanent: true },
      { source: "/post/new-blog-post-3260", destination: "/blog/wishing-you-a-beautiful-and-meaningful-easter", permanent: true },
      { source: "/post/new-blog-post-3904", destination: "/blog/mindful-parenting-finding-calm-in-the-beautiful-chaos", permanent: true },
      { source: "/post/new-blog-post-4482", destination: "/blog/breaking-the-loop-adhd-brain-needs-to-experience-finishing", permanent: true },
      { source: "/post/new-blog-post-4513", destination: "/blog/riding-the-wave-helping-kids-navigate-big-feelings", permanent: true },
      { source: "/post/new-blog-post-4880", destination: "/blog/the-rescue-trap-why-saving-our-kids-now-may-cost-them-later", permanent: true },
      { source: "/post/new-blog-post-6317", destination: "/blog/the-fine-line-raising-kids-with-healthy-self-worth", permanent: true },
      { source: "/post/nourishing-our-next-generation", destination: "/blog/nourishing-our-kids-3-simple-truths-about-food-and-family", permanent: true },
      { source: "/post/overcoming-mum-guilt-why-youre-doing-better-than-you-think", destination: "/blog/overcoming-mum-guilt", permanent: true },
      { source: "/post/parenting-through-grief-how-to-support-children-while-navigating-your-own-loss", destination: "/blog/parenting-through-grief", permanent: true },
      { source: "/post/reflecting-on-australia-day-gratitude-awareness-and-hope", destination: "/blog/reflecting-on-australia-day", permanent: true },
      { source: "/post/restful-night-the-science-of-sleep-and-co-sleeping-for-babies-and-toddlers", destination: "/blog/restful-nights-the-science-of-sleep-and-co-sleeping", permanent: true },
      { source: "/post/saying-goodbye-supporting-children-through-pet-loss", destination: "/blog/saying-goodbye-supporting-children-through-pet-loss", permanent: true },
      { source: "/post/the-10-best-sensory-toystools-for-calm-focus-and-joy", destination: "/blog/the-10-best-sensory-toys-tools-for-calm-focus-and-joy", permanent: true },
      { source: "/post/the-power-of-one-good-book-a-secret-to-growth-and-joy", destination: "/blog/the-power-of-one-good-book", permanent: true },
      { source: "/post/the-selfless-strength-of-boundaries-a-gentle-parenting-perspective", destination: "/blog/the-selfless-strength-of-boundaries", permanent: true },
      { source: "/post/you-cant-pour-from-an-empty-cup", destination: "/blog/you-cant-pour-from-an-empty-cup", permanent: true },

      // ---- STATIC PAGES ----
      { source: "/blogs", destination: "/blog", permanent: true },
      { source: "/stories", destination: "/blog", permanent: true },
      { source: "/book-recommendations", destination: "/books", permanent: true },
      { source: "/book-recommendations/category/Children's-Literature", destination: "/books", permanent: true },
      { source: "/book-recommendations/category/TeenagerReads", destination: "/books", permanent: true },
      { source: "/book-recommendations/category/Books-Health-Wellbeing", destination: "/books", permanent: true },
      { source: "/book-recommendations/category/Parenting", destination: "/books", permanent: true },
      { source: "/terms-conditions", destination: "/terms", permanent: true },
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
      { source: "/wellbeing-support", destination: "/wellbeing", permanent: true },
      { source: "/feel-calm", destination: "/wellbeing/feel-calm", permanent: true },
      { source: "/mynuday360-night-time", destination: "/wellbeing/night-time", permanent: true },
      { source: "/ageloc-y-span", destination: "/wellbeing/y-span", permanent: true },
      { source: "/home", destination: "/", permanent: true },
    ];
  },
  async rewrites() {
    return [
      { source: "/wp-admin/:path*", destination: `${WP_ORIGIN}/wp-admin/:path*` },
      { source: "/wp-content/:path*", destination: `${WP_ORIGIN}/wp-content/:path*` },
      { source: "/wp-includes/:path*", destination: `${WP_ORIGIN}/wp-includes/:path*` },
      { source: "/product/:path*", destination: `${WP_ORIGIN}/product/:path*` },
      { source: "/shop/:path*", destination: `${WP_ORIGIN}/shop/:path*` },
      {
        source: "/books/:path*",
        destination: `${WP_STAGING}/books/:path*`,
      },
      { source: "/blog/:path*", destination: `${WP_STAGING}/blog/:path*` },
      { source: "/toys", destination: `${WP_STAGING}/toys` },
      { source: "/toys/:path*", destination: `${WP_STAGING}/toys/:path*` },
    ];
  },
};

export default nextConfig;
