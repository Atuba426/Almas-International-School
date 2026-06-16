import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import AcademicPrograms from "@/components/academics/AcademicPrograms";
import TeachingApproach from "@/components/academics/TeachingApproach";
import CoCurricular from "@/components/academics/CoCurricular";
import Results from "@/components/home/Results";
import AdmissionsCTA from "@/components/home/AdmissionsCTA";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Explore the CBSE-aligned academic programs at Almas International School, from Pre-Primary to Secondary, along with our teaching approach and co-curricular activities.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/academics`,
  },
  openGraph: {
    title: `Academics | ${SITE_CONFIG.name}`,
    description:
      "Explore the CBSE-aligned academic programs at Almas International School, from Pre-Primary to Secondary.",
    url: `${SITE_CONFIG.url}/academics`,
    type: "website",
  },
};

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        title="Academics at Almas International"
        description="A structured CBSE curriculum from Pre-Primary to Secondary, designed to nurture knowledge, character, and excellence."
        image="/gallery/almas-international-school-academics1.webp?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Students engaged in classroom learning at Almas International School"
        breadcrumbs={[{ label: "Academics", href: "/academics" }]}
      />
      <AcademicPrograms />
      <TeachingApproach />
      <CoCurricular />
      <Results />
      <AdmissionsCTA />
    </>
  );
}
