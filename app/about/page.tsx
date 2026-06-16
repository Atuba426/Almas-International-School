import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import OurStory from "@/components/about/OurStory";
import CoreValues from "@/components/about/CoreValues";
import Timeline from "@/components/about/Timeline";
import Faculty from "@/components/about/Faculty";
import AdmissionsCTA from "@/components/home/AdmissionsCTA";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Almas International School's history, values, and dedicated leadership team — combining Islamic values with modern CBSE education on a nature-surrounded campus.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
  },
  openGraph: {
    title: `About Us | ${SITE_CONFIG.name}`,
    description:
      "Learn about Almas International School's history, values, and dedicated leadership team.",
    url: `${SITE_CONFIG.url}/about`,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Almas International School"
        description="Where Islamic values and modern education come together to shape confident,compassionate leaders of tomorrow."
        image="/gallery/almas-international-school-campus-sourrounded-greenery.webp?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Almas International School campus surrounded by greenery"
        breadcrumbs={[{ label: "About", href: "/about" }]}
      />
      <OurStory />
      <CoreValues />
      <Timeline />
      <Faculty />
      <AdmissionsCTA />
    </>
  );
}
