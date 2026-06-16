import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ContactSection from "@/components/contact/ContactSection";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Almas International School, Vikarabad, Telangana",
  description:
    "Get in touch with Almas International School, Vikarabad, Telangana for admissions enquiries, boys hostel information, campus visits, or general questions. Find our address, phone, email, and office hours.",
  keywords: [
    "contact Almas International School Vikarabad",
    "school address Vikarabad Telangana",
    "school near Hyderabad contact",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
  },
  openGraph: {
    title: `Contact Us | ${SITE_CONFIG.name} - Vikarabad, Telangana`,
    description:
      "Get in touch with Almas International School, Vikarabad for admissions enquiries, campus visits, or general questions.",
    url: `${SITE_CONFIG.url}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="We're here to help. Reach out for admissions, boys hostel enquiries, campus tours, or any questions — serving families across Vikarabad, Hyderabad, and Telangana."
        image="/other/almas-international-contactus.webp"
        imageAlt="Reception area at Almas International School, Vikarabad"
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />
      <ContactSection />
    </>
  );
}
