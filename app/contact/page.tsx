import { ContactPageContent } from "@/components/contact/ContactPageContent";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact Us",
  pathname: "/contact",
  description:
    "Get in touch with Mumma Chelles for recommendations, training, or general enquiries. Phone, email, and contact form.",
});

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <ContactPageContent />
    </>
  );
}
