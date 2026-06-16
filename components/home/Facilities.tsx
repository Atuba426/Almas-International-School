import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { FACILITIES } from "@/lib/constants";

/**
 * Premium facility image cards with a hover zoom effect and
 * gradient overlay revealing the facility name and description.
 */
export default function Facilities() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Campus"
          title="World-Class Facilities"
          description="Purpose-built spaces designed to support every aspect of a student's growth — academic, physical, and personal."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FACILITIES.map((facility, index) => (
            <Reveal key={facility.id} delay={index * 0.1}>
              <Link
                href="/facilities"
                className="group relative block aspect-[3/4] overflow-hidden rounded-3xl shadow-soft transition-shadow duration-300 hover:shadow-card"
              >
                <Image
                  src={facility.image}
                  alt={`${facility.title} at Almas International School`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/85 via-primary-900/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-heading text-lg font-semibold text-white">
                    {facility.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-xs text-primary-50/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {facility.description}
                  </p>
                </div>
                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
