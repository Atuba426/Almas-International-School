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
      
      {/* This utility class wrapper forces any child image to stay proportional */}
      <div className="[&_img]:object-contain [&_img]:w-auto [&_img]:mx-auto">
        <PageHero
          title="Admissions — Vikarabad, Telangana"
          description="Join a community where academic excellence meets character building..."
          image="/other/admission-almas (2).webp"
          imageAlt="Students and parents at Almas International School admissions office, Vikarabad"
          breadcrumbs={[{ label: "Admissions", href: "/admissions" }]}
        />
      </div>

      <AdmissionProcess />
      <Requirements />
      <FAQSection />
      <ApplyBanner />
    </>
  );
}
