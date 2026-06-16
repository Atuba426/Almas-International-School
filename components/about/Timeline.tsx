import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { SCHOOL_TIMELINE } from "@/lib/constants";

/**
 * Vertical timeline showcasing key milestones in the school's history.
 */
export default function Timeline() {
  return (
    <section className="bg-beige py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Journey"
          title="Milestones Along the Way"
          description="From our founding to today, every step has been guided by a commitment to our students and community."
        />

        <div className="relative mt-12">
          {/* Vertical line */}
          <div
            className="absolute left-4 top-2 h-full w-0.5 bg-primary-100 sm:left-1/2"
            aria-hidden="true"
          />

          <ol className="space-y-10">
            {SCHOOL_TIMELINE.map((milestone, index) => (
              <li key={milestone.id} className="relative">
                <Reveal direction={index % 2 === 0 ? "right" : "left"}>
                  <div
                    className={`relative flex flex-col gap-4 sm:flex-row sm:items-center ${
                      index % 2 === 0 ? "" : "sm:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div
                      className="absolute left-4 top-1 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-white bg-gold shadow-soft sm:left-1/2"
                      aria-hidden="true"
                    />

                    <div className="ml-10 sm:ml-0 sm:w-1/2 sm:px-8">
                      <div className="rounded-3xl bg-white p-6 shadow-soft">
                        <span className="font-heading text-2xl font-bold text-gold-600">
                          {milestone.year}
                        </span>
                        <h3 className="mt-1 font-heading text-lg font-semibold text-primary-800">
                          {milestone.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-gray-600">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    <div className="hidden sm:block sm:w-1/2" />
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
