import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { GALLERY_ITEMS } from "@/lib/constants";

// UPDATED: Added precise mobile spans & heights so they don't break on 2 columns
const sizeClasses: Record<string, string> = {
  large: "col-span-2 row-span-2",                // Mobile: Large square block | Desktop: Massive feature item
  wide: "col-span-2 row-span-1",                 // Mobile: Wide rectangle span | Desktop: Horizontal wide card
  tall: "col-span-1 row-span-2",                 // Mobile: Tall vertical card  | Desktop: Dual vertical rows
  medium: "col-span-1 row-span-1",               // Mobile: Perfect standard block | Desktop: Square block
  small: "col-span-1 row-span-1",                // Mobile: Perfect standard block | Desktop: Square block
};

/**
 * Bento/masonry-style gallery grid with hover zoom and gradient
 * overlays revealing a short label for each image.
 * Now fully responsive with crisp, aligned grid blocks on mobile viewports.
 */
export default function BentoGallery() {
  return (
    <section className="bg-beige py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Campus Life"
          title="Moments from Almas International"
          description="A glimpse into daily life on campus — learning, growing, and celebrating together."
        />

        {/* UPDATED GRID UTILITIES:
          - Added 'auto-rows-[140px] sm:auto-rows-[180px] md:auto-rows-[200px]'
          This forces the mobile layout into rigid 140px height increments per grid row,
          which completely stops image aspect ratios from causing gaps or layout shifts.
        */}
        <div className="mt-12 grid grid-cols-2 gap-3 auto-rows-[140px] sm:grid-cols-4 sm:gap-5 sm:auto-rows-[180px] md:auto-rows-[200px]">
          {GALLERY_ITEMS.map((item, index) => (
            <Reveal 
              key={item.id} 
              delay={index * 0.05} 
             
              className={`${sizeClasses[item.size]} h-full w-full`}
            >
              <div className="group relative h-full w-full overflow-hidden rounded-3xl shadow-soft transition-shadow duration-300 hover:shadow-card">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                
                {/* Clean, premium dark overlay gradient to pop text clearly on small devices */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/30 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />
                
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="font-heading text-xs font-semibold text-white sm:text-sm md:text-base tracking-wide">
                    {item.label}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/gallery" variant="outline">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
}