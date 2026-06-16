import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { ACADEMIC_PROGRAMS } from "@/lib/constants";

/**
 * Cards outlining each academic level offered, with grade range,
 * description, and a list of core subjects taught.
 */
export default function AcademicPrograms() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <SectionHeading
          eyebrow="Curriculum"
          title="Our Academic Programs"
          description="A structured, CBSE-aligned curriculum designed to build strong foundations and progressively deepen knowledge at every stage."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ACADEMIC_PROGRAMS.map((program, index) => {
            const Icon = program.icon;
            return (
              <Reveal key={program.id} delay={index * 0.1}>
                <div className="flex h-full flex-col rounded-3xl border border-primary-50 bg-beige p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-700 text-white">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-primary-800">
                    {program.level}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-gold-600">
                    {program.grades}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {program.description}
                  </p>
                  <div className="mt-4 flex flex-1 flex-wrap items-end gap-2">
                    {program.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="rounded-full bg-white px-3 py-1 text-xs font-medium text-primary-700 shadow-soft"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
