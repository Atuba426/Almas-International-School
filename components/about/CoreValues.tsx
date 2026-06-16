import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { CORE_VALUES } from "@/lib/constants";

/**
 * Grid of core value cards reflecting the school motto:
 * Knowledge, Character, Excellence — plus supporting values.
 */
export default function CoreValues() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Values"
          title="The Principles That Guide Us"
          description="Every decision, lesson, and interaction at Almas International is shaped by these core values."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CORE_VALUES.map((value, index) => {
            const Icon = value.icon;
            return (
              <Reveal key={value.id} delay={(index % 3) * 0.1}>
                <div className="group h-full rounded-3xl border border-primary-50 bg-beige p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-700 text-white transition-colors duration-300 group-hover:bg-gold group-hover:text-primary-800">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-primary-800">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
