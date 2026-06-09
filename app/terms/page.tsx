import Link from "next/link";

import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Terms & Conditions",
  pathname: "/terms",
  description:
    "Terms and conditions for using mummachelles.com.au, including liability, consumer rights, delivery, returns, and acceptable use.",
});

const sectionHeadingClass = "mt-10 mb-4 font-display text-xl text-plum";

const subheadingClass = "mb-4 font-body font-semibold text-plum";

const bodyClass = "mb-4 font-body leading-relaxed text-gray-700";

const listClass =
  "mb-4 list-disc space-y-2 pl-6 font-body leading-relaxed text-gray-700";

export default function TermsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]}
      />

      <section className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 bg-blush pt-24 pb-12 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl text-plum md:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm italic text-muted">
            Please read these terms and conditions carefully before using this
            website.
          </p>
        </div>
      </section>

      <section className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className={bodyClass}>
            Welcome to our website. If you continue to browse and use this
            website, you are agreeing to comply with and be bound by the
            following terms and conditions of use. These, together with our
            Privacy Policy and Website Disclaimer, govern
            mummachelles.com.au&apos;s relationship with you in relation to
            your use of this website.
          </p>

          <p className={bodyClass}>
            By using this website, you signify your acceptance of these terms
            and conditions of use. For the purposes of these terms and
            conditions:
          </p>

          <p className={bodyClass}>
            &apos;Us&apos;, &apos;Our&apos; and &apos;We&apos; refers to
            mummachelles.com.au.
          </p>
          <p className={bodyClass}>
            &apos;You&apos; and &apos;Your&apos; refers to the client, visitor,
            website user, or person using our website.
          </p>

          <h2 className={sectionHeadingClass}>Amendment of Terms</h2>
          <p className={bodyClass}>
            We reserve the right to change, modify, add, or remove portions of
            these terms at any time. Please check these terms regularly to
            ensure you are aware of any updates. We will endeavour to highlight
            any significant or substantive changes where possible. Your
            continued use of this website will be taken as conclusive evidence
            of your acceptance that these terms govern your rights and
            obligations with mummachelles.com.au.
          </p>

          <h2 className={sectionHeadingClass}>Limitation of Liability</h2>
          <p className={bodyClass}>
            It is an essential precondition to using our website that you agree
            and accept that mummachelles.com.au is not legally responsible for
            any loss or damage you may suffer related to your use of the
            website. This includes errors or omissions in documents or
            information, goods or services we may offer, or third-party content,
            links, comments, or advertisements.
          </p>
          <p className={bodyClass}>
            Your use of information or materials on this website is entirely at
            your own risk. It is your responsibility to ensure that any
            products, services, or information available meet your specific
            requirements.
          </p>

          <h2 className={sectionHeadingClass}>Competition and Consumer Act</h2>
          <p className={bodyClass}>
            Our goods and services come with guarantees that cannot be excluded,
            modified, or restricted under the Australian Consumer Law. For
            breaches under the Competition and Consumer Act 2010 (Cth), our
            liability is limited to:
          </p>
          <ul className={listClass}>
            <li>the supply of goods or services again,</li>
            <li>replacement of goods, or</li>
            <li>
              payment of the cost of having the goods or services supplied
              again.
            </li>
          </ul>
          <p className={bodyClass}>
            You must be over 18 years of age to use this website or purchase
            goods and services.
          </p>

          <h2 className={sectionHeadingClass}>Delivery of Goods</h2>
          <p className={subheadingClass}>Physical Goods:</p>
          <p className={bodyClass}>
            Delivered via Australia Post or other reputable couriers. Delivery
            is processed promptly upon full payment. Delivery typically takes
            2-14 days depending on the option chosen. We are not responsible for
            goods damaged in transit or not received. Claims should be directed
            to the courier. Replacements are at our discretion.
          </p>
          <p className={subheadingClass}>Digital Goods:</p>
          <p className={bodyClass}>
            Delivered immediately. We are not responsible for risks associated
            with downloading. If you experience technical issues, please
            contact us for assistance.
          </p>

          <h2 className={sectionHeadingClass}>Returns and Refunds</h2>
          <p className={bodyClass}>
            We handle returns and refunds in accordance with Australian Consumer
            Protection legislation.
          </p>
          <ul className={listClass}>
            <li>
              Notify us within 14 days of purchase with a valid reason for
              return.
            </li>
            <li>Unopened goods will be refunded in full.</li>
            <li>Refunds will be processed promptly by the same payment method.</li>
            <li>All refunds are at our discretion.</li>
          </ul>

          <h2 className={sectionHeadingClass}>Links to Other Websites</h2>
          <p className={bodyClass}>
            From time to time, we may provide links to external websites for your
            convenience. This does not imply sponsorship, endorsement, or
            approval. We take no responsibility for content on linked websites.
            Any advice or information from third parties is not endorsed by us.
          </p>

          <h2 className={sectionHeadingClass}>Disclaimer</h2>
          <p className={bodyClass}>
            To the fullest extent permitted by law, mummachelles.com.au
            disclaims all warranties, expressed or implied, including
            merchantability and fitness for purpose.
          </p>
          <p className={bodyClass}>
            We do not warrant that documents, goods, or services will be
            error-free, virus-free, or that defects will be corrected. While we
            aim to provide accurate and up-to-date information, we make no
            guarantees regarding accuracy, suitability, or reliability.
          </p>
          <p className={bodyClass}>
            Applicable law may not allow some exclusions, so some provisions may
            not apply to you.
          </p>

          <h2 className={sectionHeadingClass}>Your Privacy</h2>
          <p className={bodyClass}>
            We are committed to protecting your privacy in line with the
            Australian Privacy Principles. Please see our{" "}
            <Link
              href="/privacy"
              className="font-semibold text-pink-hot underline underline-offset-2 hover:text-plum"
            >
              Privacy Policy
            </Link>
            .
          </p>
          <ul className={listClass}>
            <li>
              You may update your details at any time by contacting us in
              writing.
            </li>
            <li>All customer information is protected by secure servers.</li>
            <li>Credit card details are not stored by us.</li>
          </ul>

          <h2 className={sectionHeadingClass}>Third Parties</h2>
          <p className={bodyClass}>
            We will not sell or deal in personal or customer information.
            Information may be used in a general, non-identifiable sense for
            marketing statistics, user trends, or service improvements.
          </p>

          <h2 className={sectionHeadingClass}>Disclosure of Information</h2>
          <p className={bodyClass}>
            We may be required to disclose information in good faith:
          </p>
          <ul className={listClass}>
            <li>when required by law or court order,</li>
            <li>to enforce customer agreements, or</li>
            <li>
              to protect rights, property, or safety of customers or third
              parties.
            </li>
          </ul>

          <h2 className={sectionHeadingClass}>Exclusion of Competitors</h2>
          <p className={bodyClass}>
            Competitors are strictly prohibited from using or accessing our
            website, including downloading materials. Breaches will make you
            fully liable for any loss or profit derived from such actions. We
            reserve the right to deny access at our discretion.
          </p>

          <h2 className={sectionHeadingClass}>
            Copyright, Trademark and Restrictions of Use
          </h2>
          <p className={bodyClass}>
            This website contains material owned or licensed to us, including
            design, layout, trademarks, and graphics.
          </p>
          <p className={bodyClass}>
            You may not reproduce, republish, distribute, or exploit material
            for commercial purposes without our written permission. You may:
          </p>
          <ul className={listClass}>
            <li>
              print or download extracts for personal, non-commercial use, or
            </li>
            <li>
              copy content for personal use with proper acknowledgment.
            </li>
          </ul>

          <h2 className={sectionHeadingClass}>Whole Agreement</h2>
          <p className={bodyClass}>
            These terms and conditions represent the full agreement between you
            and mummachelles.com.au. No other terms apply unless expressly agreed
            to in writing.
          </p>
        </div>
      </section>

      <section className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 bg-blush py-16 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex rounded-full bg-pink-hot px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#cf3f6f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot focus-visible:ring-offset-2 focus-visible:ring-offset-blush"
          >
            Back to Home
          </Link>
          <p className="mt-6 text-sm text-muted">
            Questions? Contact us at michelle@mummachelles.au
          </p>
        </div>
      </section>
    </>
  );
}
