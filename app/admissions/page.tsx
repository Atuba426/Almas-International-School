import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import AdmissionProcess from "@/components/admissions/AdmissionProcess";
import Requirements from "@/components/admissions/Requirements";
import FAQSection from "@/components/admissions/FAQSection";
import ApplyBanner from "@/components/admissions/ApplyBanner";
import { ADMISSION_FAQS, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Admissions | Boys Hostel & CBSE Admission - Vikarabad, Telangana",
  description:
    "Learn about the admission process, requirements, and FAQs for joining Almas International School, Vikarabad — including boys hostel admissions for students from Hyderabad, Telangana, and nearby areas, plus CBSE curriculum details.",
  keywords: [
    "admissions Almas International School Vikarabad",
    "boys hostel admission Telangana",
    "CBSE school admission Hyderabad",
    "school admission Vikarabad Telangana",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/admissions`,
  },
  openGraph: {
    title: `Admissions | ${SITE_CONFIG.name} - Vikarabad, Telangana`,
    description:
      "Learn about the admission process, requirements, and FAQs for joining Almas International School, Vikarabad — including boys hostel admissions.",
    url: `${SITE_CONFIG.url}/admissions`,
    type: "website",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ADMISSION_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function AdmissionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        title="Admissions — Vikarabad, Telangana"
        description="Join a community where academic excellence meets character building. Boys hostel seats and CBSE admissions are open for students from Vikarabad, Hyderabad, and across Telangana."
        image="/other/almas-admission.webp"
        imageAlt="Students and parents at Almas International School admissions office, Vikarabad"
        breadcrumbs={[{ label: "Admissions", href: "/admissions" }]}
      />
      <AdmissionProcess />
      <Requirements />
      <FAQSection />
      <ApplyBanner />
    </>
  );
}
