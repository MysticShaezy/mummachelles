# MASTER BUILD PROMPT - Mumma Chelles Website

## CONTEXT
You are building a Next.js website for Mumma Chelles (mummachelles.com.au), a curated resource hub for book, toy, and educational recommendations. The .cursorrules file in this project contains ALL brand tokens, tech stack, design direction, component naming, file structure, and architecture decisions. Reference it for every decision.

## WHAT TO BUILD
A complete Next.js 14+ App Router site with TypeScript and Tailwind CSS. This is a hybrid architecture where Next.js handles static pages and WordPress (on a separate server) handles Amazon affiliate content. The WordPress pages are proxied through Vercel rewrites, so you only need to build the Next.js pages listed below.

## STEP 1: PROJECT SCAFFOLD
Create a new Next.js project with these exact specifications:

```bash
npx create-next-app@latest mumma-chelles --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"
```

Install dependencies:
```bash
npm install framer-motion lucide-react
```

Configure tailwind.config.ts with the brand colours and fonts from .cursorrules.

Configure next.config.ts with the Vercel rewrite rules from .cursorrules.

Set up Google Fonts in app/layout.tsx:
- Playfair Display (weights 400, 700) as font-display
- Lato (weights 300, 400, 700) as font-body
- Dancing Script (weight 700) as font-logo
Apply font-body as the default body class. Background colour: bg-blush (#fdf5f5).

Create .env.local with:
```
NEXT_PUBLIC_WP_API_URL=https://wp.mummachelles.com.au/wp-json/wp/v2
```

## STEP 2: SHARED COMPONENTS

Build these components FIRST. Every page uses them.

### Header (components/layout/Header.tsx)
- Sticky positioned, full width
- **Scroll behaviour:** Background starts transparent, transitions to solid plum (#3d1a2e) with a subtle shadow after 50px scroll. Text starts plum, transitions to white on scroll.
- Logo: "Mumma Chelles" in Dancing Script font, text-2xl. On the left. Links to /.
- Desktop nav: Centre-aligned horizontal links. Items: HOME, ABOUT, BOOKS, TOYS, RESOURCES, WELLBEING (has dropdown submenu: Feel Calm, Night Time, Y-Span), SENSORY INSIGHTS, BLOG, CONTACT. Font: Lato, uppercase, tracking-wider, text-sm. Hover: pink-hot colour.
- WELLBEING dropdown: appears on hover, styled card with pink-pale background, rounded corners, subtle shadow.
- Members Login: Right side, ghost button style (border plum, text plum, on scroll: border white, text white). Links to /members.
- Mobile: Logo left, hamburger icon right. Opens slide-out drawer from right side. Full height, plum background, white text. Includes all nav items with WELLBEING as expandable accordion.
- Use Framer Motion for mobile drawer animation (slide in/out) and header background transition.

### Footer (components/layout/Footer.tsx)
- Background: plum (#3d1a2e). Text: white/pink-soft.
- 4-column grid on desktop, stacked on mobile:
  - Column 1: Logo text ("Mumma Chelles" in Dancing Script, white) + tagline "Books to Cherish. Toys to Love. Resources to Nourish." in pink-soft, italic.
  - Column 2: "Quick Links" heading. Links: Home, About, Books, Toys. Lato, text-sm, pink-soft colour, hover white.
  - Column 3: "Support" heading. Links: Blog, Resources, Contact, Privacy Policy. Same style.
  - Column 4: "Newsletter" heading. Email input + "Subscribe" button. Input: rounded-full, bg-white/10, placeholder "Enter your email". Button: bg-pink-hot, rounded-full, hover brightness.
- Social icons row below columns: Facebook, Instagram, LinkedIn icons using Lucide React. Spotify icon as a custom SVG (the green Spotify circle icon, sized to match the other icons). All icons in pink-soft, hover white. Spotify stays Spotify green (#1DB954).
- Bottom bar: Thin border-t border-white/10. Left: copyright "© 2026 MUMMA CHELLES. All Rights Reserved." Right: "Web Design by Limitless Creations AI" linked to https://limitlesscreations.ai + "Terms & Conditions" and "Privacy Policy" links.

### PageWrapper (components/layout/PageWrapper.tsx)
- Wraps page content with Framer Motion
- Fade-in + slight upward slide on mount (opacity 0 to 1, y 20 to 0, duration 0.6s)
- Use this on every page's main content area

### Button (components/ui/Button.tsx)
- Variants: "primary" (bg-pink-hot, text-white, hover: brightness-110), "secondary" (border-2 border-plum, text-plum, hover: bg-plum text-white), "ghost" (text-pink-hot, hover: underline)
- Sizes: "sm", "md", "lg"
- Rounded-full on all variants
- Hover scale effect: scale-[1.02] transition-transform
- Can render as <a> or <button> via "as" prop or href prop

### SectionHeading (components/ui/SectionHeading.tsx)
- Props: eyebrow (optional, small uppercase gold text), title (H2, Playfair Display), subtitle (optional, Lato, text-muted)
- Centered by default, with optional align="left"
- Fade-in animation using Framer Motion whileInView

### Card (components/ui/Card.tsx)
- White background, rounded-2xl, shadow-sm
- Hover: shadow-lg, translate-y-[-2px] transition
- Padding: p-6 md:p-8
- Optional image slot at top (rounded-t-2xl, overflow-hidden)

### CategoryCard (components/ui/CategoryCard.tsx)
- Used for book categories and toy categories on homepage
- Image (aspect-[4/3], object-cover), title (Playfair Display), description (Lato), CTA link
- Hover: image scales slightly (scale-105), card lifts

### Badge (components/ui/Badge.tsx)
- Small pill badge for tags/categories
- Background: gold/10, text: gold, rounded-full, px-3 py-1, text-xs, uppercase

### ResourceCard (components/ui/ResourceCard.tsx)
- For downloadable resources
- Image, title, description, CTA button
- If resource is "Coming Soon", show disabled button with "Coming Soon" text

## STEP 3: BUILD PAGES

### HOME PAGE (app/page.tsx)
Build 7 sections in order. Use alternating backgrounds (blush and pink-pale). Each section animates in on scroll using Framer Motion whileInView.

**Section 1 - Hero:**
- Full viewport height (min-h-[80vh])
- Background: placeholder gradient for now (from pink-pale to blush) with a subtle pattern or decorative element. This will be replaced with Michelle's photography later.
- Centred content:
  - Eyebrow text: "Books to Cherish - Toys to Love - Resources to Nourish" in gold, uppercase, tracking-widest
  - H1: "Curating Books, Resources & Training to Inspire Educators, Carers and Readers Alike." in Playfair Display, text-4xl md:text-6xl, text-plum
  - Subtext: "At Mumma Chelle's, we believe the true measure of society is how we care for its most vulnerable." in Lato, text-lg, text-muted
  - CTA Button (primary): "Explore Book Recommendations" linking to /books

**Section 2 - Welcome:**
- bg-white
- Two-column layout (text left, image placeholder right on desktop, stacked on mobile)
- SectionHeading: eyebrow "Welcome to Mumma Chelles' Place", title "A Space Built on Connection, Compassion & Inspiration for those Passionate about Lifelong Learning"
- 3 paragraphs:
  1. "Mumma Chelles is dedicated to supporting educators, homeschoolers, care workers in disability and aged care, and all passionate learners."
  2. "Discover carefully curated educational resources, inspiring books, thoughtful toys, and practical training - all chosen to enrich lives and empower those who care."
  3. "Mumma Chelles is also a welcoming home for readers of all ages who seek wisdom, warmth and community."
- Two small feature cards below text:
  - Card 1: Icon (Heart or Shield from Lucide), title "Empowerment", description "Providing knowledge and tools for confident decision-making."
  - Card 2: Icon (Users or HandHeart from Lucide), title "Inclusivity", description "Supporting all individuals with diverse needs and abilities."
- CTA: "Learn More About Our Mission" linking to /about

**Section 3 - Book Recommendations:**
- bg-pink-pale
- SectionHeading: eyebrow "Book Recommendations", title "Thoughtfully Chosen Books for Every Journey"
- 4 CategoryCards in a 2x2 grid (md:grid-cols-2, gap-8):
  1. Children's Literature - "Our carefully chosen children's books celebrate diversity, emotional growth and imagination helping young readers see themselves and others through inclusive, engaging stories" - Link: /books
  2. Teenager Reads - "From coming-of-age journeys to mental health guides, these books support teens in understanding themselves and the world around them, encouraging confidence, empathy and critical thinking." - Link: /books
  3. Health & Wellbeing - "Explore titles that help educators, carers and families understand mental health, sensory needs, trauma-informed care and holistic wellbeing - bringing insight and compassion into daily practice." - Link: /books
  4. Parenting - "Guidance for every parenting journey. Thoughtful, research-backed books offering practical tools and heartfelt perspectives, supporting parents to raise children with connection, respect and understanding." - Link: /books
- Each card uses a placeholder image (soft gradient or illustrated placeholder)

**Section 4 - Toy Recommendations:**
- bg-blush
- SectionHeading: eyebrow "Toy Recommendations", title "Playful Learning Through Quality Toys"
- 3 cards in a row (md:grid-cols-3):
  1. "Creative & Imaginative Play" - "Encouraging expression and connection" - Link: /toys
  2. "Tactile & Fidget Tools" - "For calm focus, self-regulation, and sensory input" - Link: /toys
  3. "Gross & Fine Motor & Learning Tools" - "Building skills through playful practice" - Link: /toys
- CTA: "Visit Our Toys Page" linking to /toys

**Section 5 - Free Resources:**
- bg-white
- SectionHeading: eyebrow "Free Resources", title "Support at Your Fingertips"
- 3 ResourceCards:
  1. "Printable Daily Visual Schedule" - "A simple tool to bring structure and calm. This easy-to-customise visual schedule helps children understand what's next, easing anxiety and encouraging independence at home, in class or during care routines." - CTA: "Download Your Daily Visual Schedule" (link TBD)
  2. "Sensory Break Activity Cards" - "Quick ideas to reset and refocus. A set of colourful cards with short sensory activities - from calming breathing exercises to movement games - designed for use by educators, carers or parents throughout the day." - CTA: "Coming Soon" (disabled)
  3. "Inclusive Reading List Starter Pack" - "Books that celebrate every learner. A hand-picked PDF list of picture books, chapter books and YA titles that highlight diversity, neurodiversity and inclusive themes - perfect for building or refreshing your classroom or home library." - CTA: "Coming Soon" (disabled)

**Section 6 - Sensory Insights Promo:**
- bg-pink-pale
- Large centred block
- "COMING SOON" badge at top
- Title: "Sensory Insights - Courses for Parents & Carers"
- Description: "Deeper Learning & Practical Support for Parents & Carers. Learn from our tailored courses, designed to empower parents, educators and carers to better support diverse learners."
- Subtle "Courses - Coming Soon!" text

**Section 7 - Contact CTA:**
- bg-plum, text white
- Two-column: left side has heading + description + social icons, right side has contact form
- Heading: "Get in Touch with Mumma Chelles"
- Subheading: "We'd Love to Hear from You!"
- Description: "Whether you're looking for curated resources, training, or need support on your learning journey - Mumma Chelle's Place is here for you."
- Social icons: Facebook, Instagram, LinkedIn, Spotify (same style as footer)
- Contact form: Name (text input), Email (email input), Message (textarea), Consent checkbox ("I consent to receive value packed, informational marketing from Mummachelles.com.au."), Submit button (primary, "SEND")
- Form action: console.log for now (email platform TBD)

### ABOUT PAGE (app/about/page.tsx)
Wrap in PageWrapper.

**Section 1 - Hero:**
- bg-pink-pale
- SectionHeading: eyebrow "About Mumma Chelles"
- H1: "Hi, I'm Michelle Thomas - but most people know me simply as Mumma Chelle"
- Subtext: "I'm an educator, mentor, and advocate for children, families, and educators. With over 35 years' experience in special education, family support, and complex care supports. I've built a career around connection, compassion, and community."
- Placeholder image (circle crop, will be replaced with Michelle's headshot)

**Section 2 - Support with Heart:**
- Two-column (image left, text right)
- Title: "Support with Heart and Experience"
- Text: "Mumma Chelle began as a nickname, but it quickly became something more - a reflection of how I work and who I am. I'm passionate about creating a warm approach with practical tools that make a difference - whether that's a carefully chosen children's book, a resource for educators, or a course that helps carers feel more confident. My mission is to grow Mumma Chelles into a trusted space where families and professionals can find what they need to help children flourish."

**Section 3 - What I Do:**
- SectionHeading: eyebrow "What I Do", title "I support families, educators, and organisations to raise emotionally resilient children through:"
- 4 feature cards:
  1. Workshops & Keynote Speaking
  2. Book Recommendations
  3. Professional Development
  4. Mentoring & Support
- Each with icon + title + description

**Section 4 - Why I Do It:**
- bg-pink-pale
- Large quote-style block
- Title: "Because I believe every child deserves to be seen, heard, and held - and every adult deserves the tools and support to do that well."
- Supporting text paragraphs
- Placeholder image

**Section 5 - Recommendations CTA:**
- 3 cards: Books to Cherish, Toys to Love, Resources to Nourish
- Each links to respective page

### CONTACT PAGE (app/contact/page.tsx)
- PageWrapper
- Simple layout: heading + description + form + social links
- Reuse the contact form and social icons from the homepage Section 7
- Extract ContactForm and SocialIcons as reusable components

### RESOURCES PAGE (app/resources/page.tsx)
- PageWrapper
- Hero with heading + intro text (copy from current site)
- Grid of ResourceCards (same data as homepage Section 5, but expanded with all resources):
  - Co-Regulation Guide (download)
  - Fine Motor Skills Checklist (download)
  - Play Dough Recipe (download)
  - Sing, Move, Grow Guide (download)
  - Printable Blank Visual Schedule (download)
- Download links: placeholder "#" for now, will be connected to email capture later

### WELLBEING HUB (app/wellbeing/page.tsx)
- PageWrapper
- Hero: "Wellbeing Recommendations By Mumma Chelle" / "Gentle Support for Busy Minds & Overloaded Nervous Systems"
- Intro paragraph about supplements being complementary
- Disclaimer block (styled as a soft warning card): "Supplements are not a replacement for therapy, medication, or medical care..."
- 3 ProductCards linking to sub-pages:
  1. MYNuDay360 Feel Calm -> /wellbeing/feel-calm
  2. MYNuDay360 Night Time -> /wellbeing/night-time
  3. ageLOC Y-Span -> /wellbeing/y-span

### WELLBEING SUB-PAGES (app/wellbeing/feel-calm/page.tsx, night-time/page.tsx, y-span/page.tsx)
- PageWrapper
- Product hero image placeholder
- Product name + description
- Key ingredients list (use the content from the live site)
- CTA button: "Learn More" (external link, placeholder "#" for Nu Skin affiliate URL)
- Disclaimer at bottom

### SENSORY INSIGHTS (app/sensory-insights/page.tsx)
- Coming Soon page
- Centred layout with "Coming Soon" badge
- Title + description about future courses
- Optional email capture: "Get notified when courses launch"

### MEMBERS (app/members/page.tsx)
- Coming Soon placeholder
- Centred layout
- "Members area coming soon" message
- Link back to homepage

### TERMS (app/terms/page.tsx) & PRIVACY (app/privacy/page.tsx)
- Simple prose pages
- Placeholder legal text (will be migrated from Brandsuite)

## STEP 4: SEO SETUP
- Add unique metadata to each page using Next.js generateMetadata
- Create a reusable JsonLd component for structured data
- Add Organisation JSON-LD to the root layout
- Add BreadcrumbList JSON-LD to all pages
- Create robots.ts and sitemap.ts files

## QUALITY REQUIREMENTS
- All text content must NOT contain em dashes. Use hyphens, commas, or colons instead.
- Every interactive element needs hover/focus states
- Fully responsive: test at 375px, 768px, 1024px, 1440px
- Accessible: proper heading hierarchy, alt text on images, focus rings, aria labels on nav
- Performance: lazy load images below fold, minimal JS bundle
- Consistent spacing using the spacing scale from .cursorrules
