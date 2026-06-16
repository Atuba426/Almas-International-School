import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import GalleryGrid from "@/components/gallery/GalleryGrid";

/**
 * Gallery section: heading plus the interactive, filterable
 * image grid.
 */
export default function GallerySection() {
  return (
    <section className="bg-beige py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Campus Life"
          title="Photo Gallery"
          description="Browse moments from academics, events, sports, and hostel life at Almas International School."
        />

        <Reveal delay={0.1} className="mt-12">
          <GalleryGrid />
        </Reveal>
      </div>
    </section>
  );
}
