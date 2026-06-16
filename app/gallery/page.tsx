import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import GallerySection from "@/components/gallery/GallerySection";
import AdmissionsCTA from "@/components/home/AdmissionsCTA";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gallery | Campus & Boys Hostel Life - Almas International, Vikarabad",
  description:
    "Explore photos of campus life, academics, events, sports, and boys hostel life at Almas International School, Vikarabad, Telangana — one of the best CBSE schools near Hyderabad.",
  keywords: [
    "Almas International School gallery",
    "Vikarabad school photos",
    "boys hostel life Telangana",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/gallery`,
  },
  openGraph: {
    title: `Gallery | ${SITE_CONFIG.name} - Vikarabad, Telangana`,
    description:
      "Explore photos of campus life, academics, events, sports, and hostel life at Almas International School, Vikarabad.",
    url: `${SITE_CONFIG.url}/gallery`,
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        description="A visual journey through life at Almas International School — from classrooms to playgrounds to celebrations."
        image="/gallery/almas-international-school-teachers.webp?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Students Studying at Almas International School"
        breadcrumbs={[{ label: "Gallery", href: "/gallery" }]}
      />
      <GallerySection />
      <AdmissionsCTA />
    </>
  );
}
