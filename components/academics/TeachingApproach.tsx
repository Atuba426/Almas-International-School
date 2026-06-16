import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { CHECK_ICON } from "@/lib/constants";

const APPROACH_POINTS = [
  "Activity-based and experiential learning methods",
  "Small class sizes for personalized attention",
  "Regular assessments with constructive feedback",
  "Integration of technology in everyday teaching",
  "Dedicated remedial and enrichment sessions",
];

/**
 * Teaching approach section: image on the left, methodology
 * description and checklist on the right.
 */
export default function TeachingApproach() {
  const CheckIcon = CHECK_ICON;

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal direction="right">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-card">
            <Image
              src="/gallery/almas-international-school-achivements.webp?q=80&w=1200&auto=format&fit=crop"
              alt="Teacher guiding students through a hands-on science activity"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.1}>
          <div>
            <span className="mb-3 inline-block rounded-full bg-gold/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gold-600">
              Our Approach
            </span>
            <h2 className="font-heading text-3xl font-bold leading-tight text-primary-800 sm:text-4xl md:text-5xl">
              Teaching That Inspires Understanding
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
              Our educators go beyond rote learning, focusing on conceptual
              clarity, critical thinking, and real-world application —
              ensuring students are not just exam-ready, but life-ready.
            </p>

            <ul className="mt-6 space-y-3">
              {APPROACH_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckIcon
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-700 md:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
