import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Highlights from "@/components/home/Highlights";
import AboutPreview from "@/components/home/AboutPreview";
import Facilities from "@/components/home/Facilities";
import Results from "@/components/home/Results";
import BentoGallery from "@/components/home/BentoGallery";
import AdmissionsCTA from "@/components/home/AdmissionsCTA";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} | Excellence in Islamic & Modern Education`,
  description: SITE_CONFIG.description,
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    title: `${SITE_CONFIG.name} | Excellence in Islamic & Modern Education`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <AboutPreview />
      <Facilities />
      <Results />
      <BentoGallery />
      <AdmissionsCTA />
    </>
  );
}
