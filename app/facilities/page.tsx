import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import FacilitiesOverview from "@/components/facilities/FacilitiesOverview";
import FacilityShowcase from "@/components/facilities/FacilityShowcase";
import AdmissionsCTA from "@/components/home/AdmissionsCTA";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Facilities",
  description:
    "Discover the world-class facilities at Almas International School — boys hostel, library, science labs, computer lab, sports grounds, and a nature-surrounded campus.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/facilities`,
  },
  openGraph: {
    title: `Facilities | ${SITE_CONFIG.name}`,
    description:
      "Discover the world-class facilities at Almas International School — boys hostel, library, science labs, computer lab, and more.",
    url: `${SITE_CONFIG.url}/facilities`,
    type: "website",
  },
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        title="Our Facilities"
        description="Purpose-built spaces and resources that support academic, physical, and personal growth for every student."
        image="/gallery/almas-international-school-facilities.webp"
        imageAlt="Library facility at Almas International School"
        breadcrumbs={[{ label: "Facilities", href: "/facilities" }]}
      />
      <FacilitiesOverview />
      <FacilityShowcase />
      <AdmissionsCTA />
    </>
  );
}
