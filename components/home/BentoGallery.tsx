import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { GALLERY_ITEMS } from "@/lib/constants";

const sizeClasses: Record<string, string> = {
  large: "sm:col-span-2 sm:row-span-2 aspect-square sm:aspect-auto",
  wide: "sm:col-span-2 aspect-[16/9]",
  tall: "sm:row-span-2 aspect-[3/4] sm:aspect-auto",
  medium: "aspect-square",
  small: "aspect-square",
};

/**
 * Bento/masonry-style gallery grid with hover zoom and gradient
 * overlays revealing a short label for each image.
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

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
          {GALLERY_ITEMS.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.05} className={sizeClasses[item.size]}>
              <div className="group relative h-full w-full overflow-hidden rounded-3xl shadow-soft transition-shadow duration-300 hover:shadow-card">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="font-heading text-sm font-semibold text-white md:text-base">
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
