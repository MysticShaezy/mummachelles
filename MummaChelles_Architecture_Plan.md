# Mumma Chelles - Complete Architecture & Build Plan
**Developer:** LIMITLESS CREATIONS AI
**Client:** Michelle Thomas
**Domain:** mummachelles.com.au
**Created:** 18 May 2026
**Launch Deadline:** 4 June 2026

---

## TABLE OF CONTENTS

1. [Architecture Overview](#1-architecture-overview)
2. [Tech Stack](#2-tech-stack)
3. [Design System](#3-design-system)
4. [Site Map & Page Inventory](#4-site-map--page-inventory)
5. [Component Library](#5-component-library)
6. [Page-by-Page Build Spec](#6-page-by-page-build-spec)
7. [WordPress / AAWP Setup](#7-wordpress--aawp-setup)
8. [Email / Newsletter Strategy](#8-email--newsletter-strategy)
9. [SEO & Compliance](#9-seo--compliance)
10. [Deployment & DNS](#10-deployment--dns)
11. [Build Tracker](#11-build-tracker)
12. [Open Items](#12-open-items)

---

## 1. ARCHITECTURE OVERVIEW

```
mummachelles.com.au (Vercel - primary)
│
├── / .......................... Next.js (Home)
├── /about .................... Next.js (About Michelle)
├── /contact .................. Next.js (Contact form)
├── /resources ................ Next.js (Free downloadables)
├── /wellbeing ................ Next.js (Nu Skin products)
│   ├── /wellbeing/feel-calm
│   ├── /wellbeing/night-time
│   └── /wellbeing/y-span
├── /sensory-insights ......... Next.js (Coming soon)
├── /terms .................... Next.js (Legal)
├── /privacy .................. Next.js (Legal)
│
├── /toys ..................... WordPress via Vercel Rewrite
├── /books .................... WordPress via Vercel Rewrite
└── /blog/* ................... WordPress via Vercel Rewrite

WordPress (Hostinger - wp.mummachelles.com.au)
├── Handles ALL Amazon affiliate content via AAWP plugin
├── Handles all blog posts (35+)
├── AAWP proxy API bypasses 10-sale Creators API requirement
└── Never visible to visitors (proxied through Vercel rewrites)
```

**WHY this architecture:**
- AAWP's proxy API (WordPress-only) is the ONLY way to display Amazon product images without 10 sales/month
- Next.js gives full design control, speed, and SEO on non-Amazon pages
- Vercel rewrites make both platforms appear as one seamless site
- Monthly cost drops from $297 (Brandsuite) to ~$73

---

## 2. TECH STACK

### Next.js (Custom Site)
- **Framework:** Next.js 14+ with App Router
- **Styling:** Tailwind CSS v3
- **Fonts:** Google Fonts (Playfair Display, Lato, Dancing Script)
- **Icons:** Lucide React
- **Forms:** React Hook Form + server action or API route
- **Animations:** Framer Motion for scroll reveals, hover states, page transitions
- **Deployment:** Vercel Pro (~$30 AUD/month)
- **Image handling:** Next.js Image component with placeholder blur

### WordPress (Affiliate Content)
- **Host:** Hostinger (~$20 AUD/month)
- **URL:** wp.mummachelles.com.au (subdomain)
- **Theme:** Lightweight theme (GeneratePress or Flavor) styled to match brand
- **Plugin:** AAWP v5.0.7 + paid proxy API (~$23 AUD/month total)
- **Content:** Toys (5 posts), Books (29+ posts), Blog (35+ posts)

### Integrations
- **Email:** TBD - see Section 8 for options (Resend recommended)
- **Analytics:** Google Analytics 4
- **Search Console:** Google Search Console
- **Affiliate:** Amazon Associates AU (mummachelles2-22)
- **Wellbeing affiliate:** Nu Skin (separate from Amazon)
- **Social:** Facebook, Instagram, LinkedIn, Spotify

---

## 3. DESIGN SYSTEM

### Brand Colours (CSS Variables)
```css
:root {
  --bg: #fdf5f5;           /* Blush background - page base */
  --plum: #3d1a2e;         /* Primary - headings, nav, footer */
  --pink-hot: #c9699a;     /* Accent - buttons, links, highlights */
  --pink-soft: #e8b4c8;    /* Borders, subtle accents, hover states */
  --pink-pale: #f9edf3;    /* Light background sections (alternating) */
  --gold: #a07850;          /* Tags, labels, category badges */
  --text: #1a1a1a;          /* Body text */
  --text-muted: #666666;   /* Secondary/caption text */
  --white: #ffffff;         /* Cards, overlays */
}
```

### Typography
| Role | Font | Weight | Usage |
|---|---|---|---|
| Logo | Dancing Script | 700 | Logo text only |
| Headings | Playfair Display | 400, 700 | H1-H4, section titles |
| Body | Lato | 300, 400, 700 | Paragraphs, nav, buttons, labels |

### Tailwind Config Extensions
```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      plum: '#3d1a2e',
      'pink-hot': '#c9699a',
      'pink-soft': '#e8b4c8',
      'pink-pale': '#f9edf3',
      blush: '#fdf5f5',
      gold: '#a07850',
    },
    fontFamily: {
      display: ['Playfair Display', 'serif'],
      body: ['Lato', 'sans-serif'],
      logo: ['Dancing Script', 'cursive'],
    },
  },
}
```

### Design Direction
**Tone:** Warm, nurturing, professional. Think "curated boutique" not "corporate education."

**UI Improvements Over Current Site:**
- Smooth scroll-triggered fade-in animations on sections
- Card hover effects with subtle lift + shadow transitions
- Improved responsive grid layouts (current site breaks on some viewports)
- Consistent spacing and visual hierarchy
- Modern card-based product displays with soft rounded corners
- Sticky header with transparent-to-solid scroll transition
- Parallax-lite hero sections
- Micro-interactions on buttons (scale on hover, gentle pulse on CTAs)
- Better mobile navigation (slide-out drawer vs current dropdown)

### Spacing Scale
- Section padding: `py-16 md:py-24`
- Card padding: `p-6 md:p-8`
- Component gap: `gap-6 md:gap-8`
- Max content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

---

## 4. SITE MAP & PAGE INVENTORY

### Next.js Pages (8 routes)

| Route | Page | Content Source | Priority |
|---|---|---|---|
| `/` | Home | Recreate from live site | P1 |
| `/about` | About Michelle | Recreate from live site + new photography | P1 |
| `/contact` | Contact | Form + social links + Spotify | P1 |
| `/resources` | Free Resources | Downloadable guides (GHL form links need migration) | P2 |
| `/wellbeing` | Wellbeing Hub | Nu Skin overview + links to sub-pages | P2 |
| `/wellbeing/feel-calm` | MYNuDay360 Feel Calm | Product info + Nu Skin affiliate link | P2 |
| `/wellbeing/night-time` | MYNuDay360 Night Time | Product info + Nu Skin affiliate link | P2 |
| `/wellbeing/y-span` | ageLOC Y-Span | Product info + Nu Skin affiliate link | P2 |
| `/sensory-insights` | Sensory Insights | "Coming Soon" placeholder | P3 |
| `/terms` | Terms & Conditions | Legal text | P3 |
| `/privacy` | Privacy Policy | Legal text | P3 |
| `/members` | Members Login | "Coming Soon" placeholder | P3 |

### WordPress Pages (proxied via Vercel rewrites)

| Route | Page | Content | Posts |
|---|---|---|---|
| `/toys` | Toy Recommendations | AAWP product grid | 5 products |
| `/books` | Book Recommendations | AAWP product grid by category | 29 products |
| `/blog` | Blog Listing | All blog posts | 35+ posts |
| `/blog/[slug]` | Individual Blog Post | Full post content | 35+ posts |

### Book Inventory (29 posts across 4 categories)

| Category | Count | Examples |
|---|---|---|
| Children's Literature | 10 | A Kids Book About Boredom, The Last Bear, Nevermoor |
| Teenager Reads | 8 | The ADHD Teen Brain Organiser for School, etc. |
| Health & Wellbeing | 6 | TBC from Brandsuite audit |
| Parenting | 5 | TBC from Brandsuite audit |

### Toy Inventory (5 posts)

| Product | ASIN | Tags |
|---|---|---|
| Montessori Wooden Busy Truck | TBC | Fine Motor, Hand Eye Coordination, Problem Solving |
| Wooden Colour Sorting Toys | B0DLTWNXFK | Fine Motor, Hand Eye Coordination, Problem Solving |
| Wobble Boards | TBC | Balance and Coordination |
| Balance Bikes | TBC | Gross Motor Skills and Balance |
| Wheelie Bugs | TBC | Gross Motor Skills |

---

## 5. COMPONENT LIBRARY

### Shared Components (used across all Next.js pages)

```
components/
├── layout/
│   ├── Header.tsx          # Sticky nav, logo, mobile drawer
│   ├── Footer.tsx          # Links, social icons, newsletter CTA, Limitless credit
│   ├── MobileNav.tsx       # Slide-out mobile menu with sub-menus
│   └── PageWrapper.tsx     # Fade-in animation wrapper
│
├── ui/
│   ├── Button.tsx          # Primary (pink-hot), Secondary (plum outline), Ghost
│   ├── Card.tsx            # Rounded, shadow, hover lift effect
│   ├── CategoryCard.tsx    # Image + title + description + CTA link
│   ├── Badge.tsx           # Gold tag badges (skills, categories)
│   ├── SectionHeading.tsx  # Eyebrow + H2 + optional subtext
│   ├── HeroBanner.tsx      # Full-width hero with image + text overlay
│   ├── TestimonialCard.tsx # If needed for future
│   ├── ResourceCard.tsx    # Download card with description + CTA button
│   └── ProductCard.tsx     # For wellbeing products (non-Amazon)
│
├── forms/
│   ├── ContactForm.tsx     # Name, email, message + consent checkbox
│   └── NewsletterForm.tsx  # Email input + subscribe button (footer)
│
├── sections/
│   ├── BookCategories.tsx  # 4-card grid linking to /books categories
│   ├── ToyShowcase.tsx     # 3-column toy category preview
│   ├── FreeResources.tsx   # Resource cards with download links
│   ├── SensoryInsights.tsx # Coming soon promo block
│   ├── ContactCTA.tsx      # Contact section with form + social links
│   └── NewsletterBanner.tsx # Full-width newsletter subscribe section
│
├── icons/
│   ├── SocialIcons.tsx     # Facebook, Instagram, LinkedIn, Spotify
│   └── SpotifyIcon.tsx     # Custom Spotify favicon-style icon
│
└── seo/
    ├── JsonLd.tsx          # Structured data component
    └── MetaTags.tsx        # Dynamic meta tags per page
```

### Header Component Spec
- **Desktop:** Logo left, nav links center, Members Login button right
- **Mobile:** Logo left, hamburger right, slide-out drawer
- **Scroll behaviour:** Transparent background at top, solid plum on scroll
- **Nav items:** HOME, ABOUT, BOOKS, TOYS, RESOURCES, WELLBEING (dropdown: Feel Calm, Night Time, Y-Span), SENSORY INSIGHTS, BLOG, CONTACT
- **Members Login:** Styled as ghost button, links to /members (coming soon page)

### Footer Component Spec
- **4-column layout** (desktop) / stacked (mobile):
  - Column 1: Logo + tagline
  - Column 2: Quick Links (Home, About, Books, Toys)
  - Column 3: Support Links (Blog, Resources, Contact, Privacy)
  - Column 4: Newsletter signup form
- **Social icons row:** Facebook, Instagram, LinkedIn, Spotify (as favicon-sized icons with brand colours)
- **Bottom bar:** "Books to Cherish. Toys to Love. Resources to Nourish." + copyright + "Web Design by Limitless Creations AI" (linked to your site) + Terms | Privacy links

---

## 6. PAGE-BY-PAGE BUILD SPEC

### PAGE 1: HOME (`/`)

**Sections in order:**

1. **Hero Banner**
   - Full-width background image (placeholder for now, Michelle's photography later)
   - Eyebrow: "Books to Cherish - Toys to Love - Resources to Nourish"
   - H1: "Curating Books, Resources & Training to Inspire Educators, Carers and Readers Alike."
   - Subtext: "At Mumma Chelle's, we believe the true measure of society is how we care for its most vulnerable."
   - CTA button: "Explore Book Recommendations" -> /books

2. **Welcome Section**
   - H2: "Welcome to Mumma Chelles' Place"
   - H3: "A Space Built on Connection, Compassion & Inspiration"
   - 3 paragraphs of welcome text
   - 2 icon cards: Empowerment + Inclusivity (with icons and descriptions)
   - CTA: "Learn More About Our Mission" -> /about

3. **Book Recommendations Section**
   - Section heading: "Book Recommendations" / "Thoughtfully Chosen Books for Every Journey"
   - 4 category cards in 2x2 grid:
     - Children's Literature (10 books)
     - Teenager Reads (8 books)
     - Health & Wellbeing (6 books)
     - Parenting (5 books)
   - Each card: category image + title + description + "View Selections" link -> /books

4. **Toy Recommendations Section**
   - Section heading: "Playful Learning Through Quality Toys"
   - 3 category preview cards:
     - Creative & Imaginative Play
     - Tactile & Fidget Tools
     - Gross & Fine Motor & Learning Tools
   - CTA: "Visit Our Toys Page" -> /toys

5. **Free Resources Section**
   - 3 resource cards:
     - Printable Daily Visual Schedule (download link)
     - Sensory Break Activity Cards (Coming Soon)
     - Inclusive Reading List Starter Pack (Coming Soon)

6. **Sensory Insights Promo**
   - "COMING SOON" badge
   - "Sensory Insights - Courses for Parents & Carers"
   - Description text
   - CTA: "Courses - Coming Soon!"

7. **Contact CTA Section**
   - "Get in Touch with Mumma Chelles"
   - Contact form (Name, Email, Message, Consent checkbox, Send button)
   - Social media icons
   - Spotify playlist link

### PAGE 2: ABOUT (`/about`)

**Sections:**
1. Hero with "About Mumma Chelles" heading
2. Introduction: Michelle's bio, headshot image, 35+ years experience
3. "What I Do" section: Workshops, Book Recommendations, Professional Development, Mentoring
4. "Why I Do It" section: Mission statement with image
5. "Explore My Recommendations" section: 3 cards (Books, Toys, Resources)
6. CTA: "Contact to Learn More"

### PAGE 3: CONTACT (`/contact`)

**Sections:**
1. Page heading
2. Contact form (same as homepage contact section)
3. Social links with Spotify favicon
4. Optional: Google Maps embed or address (if Michelle provides)

### PAGE 4: RESOURCES (`/resources`)

**Sections:**
1. Page hero with heading + intro text
2. Resource cards grid:
   - Co-Regulation Guide (download)
   - Fine Motor Skills Checklist (download)
   - Play Dough Recipe (download)
   - Sing, Move, Grow Guide (download)
   - Printable Blank Visual Schedule (download)
   - More resources as Michelle adds them
3. **NOTE:** Download links currently point to GHL form URLs. These need migration to either Resend email capture or direct download links on new platform.

### PAGE 5: WELLBEING (`/wellbeing`)

**Sections:**
1. Hero: "Wellbeing Recommendations By Mumma Chelle"
2. Intro: "Gentle Support for Busy Minds & Overloaded Nervous Systems"
3. Disclaimer block: Supplements are not replacements for medical care
4. Product card: MYNuDay360 Feel Calm (link to /wellbeing/feel-calm)
5. Product card: MYNuDay360 Night Time (link to /wellbeing/night-time)
6. Product card: ageLOC Y-Span (link to /wellbeing/y-span)
7. **NOTE:** These are Nu Skin affiliate products, NOT Amazon. Handle with standard product cards and external affiliate links.

### PAGES 6-8: WELLBEING SUB-PAGES

Each sub-page:
1. Product hero image
2. Product name + description
3. Key ingredients list
4. Clinical study reference (if applicable)
5. "Learn More" / "Shop Now" CTA button (external Nu Skin link)
6. Disclaimer

### PAGE 9: SENSORY INSIGHTS (`/sensory-insights`)

- Coming Soon page
- Heading + description of future courses
- Email capture form: "Get notified when courses launch"

### PAGE 10: MEMBERS (`/members`)

- Coming Soon placeholder
- "Member login is coming soon. Stay tuned!"
- Link back to homepage

### PAGES 11-12: LEGAL (`/terms`, `/privacy`)

- Standard legal text pages
- Migrate existing content from Brandsuite

---

## 7. WORDPRESS / AAWP SETUP

### WordPress Configuration
- **Permalink structure:** Post name (`/sample-post/`)
- **Categories:** Toys, Books (sub-categories: Children's Literature, Teenager Reads, Health & Wellbeing, Parenting), Blog
- **Theme:** Lightweight theme styled to match brand colours
- **AAWP settings:** Country: amazon.com.au, Tracking ID: mummachelles2-22, Proxy API: Connected

### Content Creation Workflow
For each product (Toy or Book):
1. Create new WordPress post
2. Set category (Toys or appropriate Books sub-category)
3. Write product description
4. Add AAWP shortcode in a dedicated **Shortcode block**: `[aawp box="ASIN_HERE"]`
5. Set featured image (decorative/generic, NOT Amazon product image)
6. Add affiliate disclosure at bottom
7. Publish

### Blog Post Migration
- Copy title, body text, images, date, tags from Brandsuite
- Do NOT add AAWP shortcodes to general blog posts
- Set category to "Blog"
- Preserve original publish date

### WordPress REST API Endpoints
```
GET /wp-json/wp/v2/posts?_embed&per_page=20&categories={id}
GET /wp-json/wp/v2/posts?_embed&slug={slug}
GET /wp-json/wp/v2/categories
```

### Vercel Rewrite Config
```typescript
// next.config.ts
async rewrites() {
  return [
    { source: '/toys', destination: 'https://wp.mummachelles.com.au/toys' },
    { source: '/toys/:path*', destination: 'https://wp.mummachelles.com.au/toys/:path*' },
    { source: '/books', destination: 'https://wp.mummachelles.com.au/books' },
    { source: '/books/:path*', destination: 'https://wp.mummachelles.com.au/books/:path*' },
    { source: '/blog', destination: 'https://wp.mummachelles.com.au/blog' },
    { source: '/blog/:path*', destination: 'https://wp.mummachelles.com.au/blog/:path*' },
  ];
},
```

---

## 8. EMAIL / NEWSLETTER STRATEGY

Michelle needs to decide on an email platform. Here are the options ranked by fit:

### OPTION A: Resend (RECOMMENDED)
**Cost:** Free tier = 3,000 emails/month, 1 domain. Paid = $20/month for 50,000 emails.
**Why it fits:**
- Developer-friendly API that integrates natively with Next.js
- Simple transactional + marketing email from one platform
- React Email templates (matches our tech stack perfectly)
- Custom domain sending (newsletter@mummachelles.com.au)
- Contact form submissions can route through Resend too
- No bloated dashboard Michelle won't use
**Limitation:** No built-in landing page builder or complex automation sequences. Michelle would need a separate tool for complex drip campaigns.

### OPTION B: ConvertKit (Kit)
**Cost:** Free up to 10,000 subscribers. Paid from $29/month.
**Why it fits:**
- Built for creators and educators (Michelle's exact profile)
- Visual automation builder for welcome sequences
- Landing pages and forms included
- Subscriber tagging and segmentation
- Good for growing an audience over time
**Limitation:** More complex than needed if Michelle just wants a simple newsletter. Heavier integration with Next.js.

### OPTION C: Mailchimp
**Cost:** Free up to 500 subscribers. Paid from $20/month.
**Why it fits:** Michelle may already know it. Widely used.
**Limitation:** Free tier is very limited now. Interface is bloated. Overkill for this use case.

### RECOMMENDATION
**Start with Resend** for the technical integration (contact forms, resource downloads, newsletter subscribe). If Michelle wants advanced automation later (drip sequences, tagging, landing pages), migrate to ConvertKit. Both are easy to switch between.

### Resource Download Flow
Current setup uses GHL form links for resource downloads. New flow:
1. User clicks "Download" on resource card
2. Modal or inline form captures email (Resend or ConvertKit)
3. Email sent with download link
4. User added to newsletter list with appropriate tag

---

## 9. SEO & COMPLIANCE

### SEO Checklist
- [ ] Unique title tags per page (max 60 chars)
- [ ] Unique meta descriptions per page (max 155 chars)
- [ ] Open Graph tags (title, description, image) per page
- [ ] JSON-LD structured data:
  - Organisation (site-wide)
  - Article (blog posts)
  - Product (toys, books, wellbeing products)
  - BreadcrumbList (all pages)
  - WebSite with SearchAction
- [ ] XML sitemap (auto-generated by Next.js + WordPress)
- [ ] robots.txt
- [ ] Canonical URLs
- [ ] 301 redirect mapping (Brandsuite URLs -> new URLs)
- [ ] Google Analytics 4 setup
- [ ] Google Search Console verification
- [ ] Core Web Vitals target: 90+ on all Lighthouse categories

### Amazon Compliance
- All Amazon product images rendered via AAWP shortcodes ONLY
- Affiliate disclosure on every page with Amazon links
- Disclosure text: "As an Amazon Associate I earn from qualifying purchases. This helps me to continue to create resources and content."
- No self-hosted Amazon product images without written Amazon confirmation
- Tracking ID verified on all links: mummachelles2-22

### 301 Redirect Map (Known)
| Old Brandsuite URL | New URL |
|---|---|
| /home | / |
| /post/new-blog-post-6777-8989 | /blog/wooden-colour-sorting-toys |
| /post/new-blog-post-6777-8989-8974 | /blog/montessori-truck |
| /post/new-blog-post-6777-9367 | /blog/wobble-boards |
| /post/new-blog-post-6777 | /blog/balance-bikes |
| /post/new-blog-post | /blog/wheelie-bugs |
| /wellbeing-support | /wellbeing |
| /feel-calm | /wellbeing/feel-calm |
| /mynuday360-night-time | /wellbeing/night-time |
| /ageloc-y-span | /wellbeing/y-span |
| /blogs | /blog |
| /terms-conditions | /terms |
| /privacy-policy | /privacy |
| /products-resources | /resources |
| /book-recommendations/category/* | /books |
| /our-bookshop/pre-loved-books | /books (or dedicated page if keeping) |

Additional redirects to be mapped after Brandsuite URL crawl with Screaming Frog.

---

## 10. DEPLOYMENT & DNS

### Deployment Steps
1. Push Next.js project to GitHub
2. Connect GitHub repo to Vercel
3. Add environment variables to Vercel:
   - `NEXT_PUBLIC_WP_API_URL=https://wp.mummachelles.com.au/wp-json/wp/v2`
   - `RESEND_API_KEY=re_xxxx` (or chosen email platform key)
4. Configure Vercel rewrite rules in next.config.ts
5. Set up WordPress subdomain: wp.mummachelles.com.au on Hostinger
6. SSL certificates on both platforms
7. Test all rewrites on Vercel preview URL
8. Cross-browser testing (Chrome, Safari, Firefox, Mobile Safari, Samsung Internet)
9. DNS cutover: Point mummachelles.com.au to Vercel
10. Verify site live
11. Submit sitemap to Google Search Console
12. Request re-indexing

### DNS Records (at launch)
```
A     @    76.76.21.21 (Vercel)
CNAME www  cname.vercel-dns.com
CNAME wp   [Hostinger IP or CNAME]
```

---

## 11. BUILD TRACKER

### PHASE 1: Foundation (Days 1-3)
- [ ] **1.1** Set up Next.js project with Tailwind + brand tokens
- [ ] **1.2** Build Header component (desktop + mobile nav)
- [ ] **1.3** Build Footer component (links, social icons, Spotify, Limitless credit)
- [ ] **1.4** Build shared UI components (Button, Card, Badge, SectionHeading)
- [ ] **1.5** Build PageWrapper with scroll-triggered fade-in animations
- [ ] **1.6** Set up Google Fonts (Playfair Display, Lato, Dancing Script)
- [ ] **1.7** Create placeholder logo (recreated from live site)

### PHASE 2: Core Pages (Days 4-7)
- [ ] **2.1** Build Home page (all 7 sections)
- [ ] **2.2** Build About page
- [ ] **2.3** Build Contact page with form
- [ ] **2.4** Build Resources page with download cards
- [ ] **2.5** Build Wellbeing hub + 3 sub-pages
- [ ] **2.6** Build Sensory Insights (coming soon)
- [ ] **2.7** Build Members Login (coming soon placeholder)
- [ ] **2.8** Build Terms & Privacy pages

### PHASE 3: WordPress Content (Days 5-10)
- [ ] **3.1** Source all missing ASINs from Brandsuite
- [ ] **3.2** Create 5 toy product posts with AAWP shortcodes
- [ ] **3.3** Create 29 book product posts with AAWP shortcodes
- [ ] **3.4** Migrate 35+ blog posts from Brandsuite to WordPress
- [ ] **3.5** Style WordPress theme to match brand
- [ ] **3.6** Set up WordPress categories and permalinks
- [ ] **3.7** Verify all AAWP shortcodes render correctly

### PHASE 4: Integration (Days 8-12)
- [ ] **4.1** Set up Vercel rewrite proxy
- [ ] **4.2** Set up wp.mummachelles.com.au subdomain on Hostinger
- [ ] **4.3** Set up email platform (Resend or chosen alternative)
- [ ] **4.4** Connect contact form to email platform
- [ ] **4.5** Connect newsletter form to email platform
- [ ] **4.6** Migrate resource download forms
- [ ] **4.7** Test all integrations on Vercel preview URL

### PHASE 5: SEO & Polish (Days 10-14)
- [ ] **5.1** Add meta tags and JSON-LD to all pages
- [ ] **5.2** Generate XML sitemap
- [ ] **5.3** Create robots.txt
- [ ] **5.4** Set up 301 redirects
- [ ] **5.5** Set up Google Analytics 4
- [ ] **5.6** Set up Google Search Console
- [ ] **5.7** Lighthouse audit - target 90+ all categories
- [ ] **5.8** Cross-browser testing
- [ ] **5.9** Replace placeholder images with Michelle's assets (when received)

### PHASE 6: Launch (Days 14-17)
- [ ] **6.1** Final review with Michelle
- [ ] **6.2** DNS cutover
- [ ] **6.3** Verify live site
- [ ] **6.4** Submit sitemap to Google Search Console
- [ ] **6.5** WordPress training session with Michelle
- [ ] **6.6** Handover document (logins, how to add posts, AAWP reference)
- [ ] **6.7** Final invoice INV-MC-002 ($1,500)
- [ ] **6.8** Confirm Brandsuite cancellation

---

## 12. OPEN ITEMS

| # | Item | Status | Owner | Notes |
|---|---|---|---|---|
| 1 | Logo files (SVG/PNG) | Awaiting | Michelle | Sending today |
| 2 | Photography assets | Awaiting | Michelle | Sending today |
| 3 | Brandsuite admin login | Awaiting | Michelle | Needed for content migration |
| 4 | Book ASINs (full audit) | Awaiting | Developer | Need Brandsuite access |
| 5 | Toy ASINs (4 missing) | Awaiting | Developer | Need Brandsuite access |
| 6 | Email platform decision | Awaiting | Michelle | Resend recommended |
| 7 | Nu Skin affiliate links | Awaiting | Michelle | For wellbeing pages |
| 8 | Google Analytics login | Awaiting | Michelle | Chasing GBP login |
| 9 | Domain registrar access | Awaiting | Michelle | For DNS cutover |
| 10 | Amazon compliance email | Awaiting | Amazon | Re self-hosted images |
| 11 | Pre-loved Books page | Decision needed | Michelle | Keep or remove? |
| 12 | Resource download migration | Blocked by #6 | Developer | GHL form URLs need replacing |
| 13 | Newsletter subscriber export | Blocked by #3 | Developer | Export before Brandsuite cancel |

---

## APPENDIX: SOCIAL MEDIA LINKS

| Platform | URL | Icon Style |
|---|---|---|
| Facebook | facebook.com/MummaChelles | Brand icon (plum colour) |
| Instagram | instagram.com/mummachelles | Brand icon (plum colour) |
| LinkedIn | linkedin.com/in/michellethomas-mummachelles | Brand icon (plum colour) |
| Spotify | open.spotify.com/playlist/1Rno9tY5Ib76MZ71xXk04r | Spotify green favicon |

## APPENDIX: FOOTER CREDIT

```
Web Design by Limitless Creations AI
```
Linked to: [your-site-url]

---

*This document is the single source of truth for the Mumma Chelles build. Update the Build Tracker checkboxes as tasks complete.*
