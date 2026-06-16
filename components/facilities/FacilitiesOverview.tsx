import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { FACILITY_DETAILS } from "@/lib/constants";

/**
 * Quick-jump pill navigation linking to each facility's
 * detailed section further down the page.
 */
export default function FacilitiesOverview() {
  return (
    <section className="bg-beige py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {FACILITY_DETAILS.map((facility) => (
              <Link
                key={facility.id}
                href={`#${facility.id}`}
                className="rounded-full border border-primary-100 bg-white px-5 py-2 text-sm font-medium text-primary-700 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-700 hover:text-white"
              >
                {facility.title}
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
