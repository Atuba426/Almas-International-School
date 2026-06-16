import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { CO_CURRICULAR_ACTIVITIES } from "@/lib/constants";

/**
 * Showcase of co-curricular and extracurricular activities that
 * complement the academic curriculum.
 */
export default function CoCurricular() {
  return (
    <section className="bg-beige py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Beyond the Classroom"
          title="Co-Curricular Activities"
          description="We believe in nurturing talents beyond textbooks — sports, arts, music, and clubs that build confidence and well-rounded personalities."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CO_CURRICULAR_ACTIVITIES.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <Reveal key={activity.id} delay={index * 0.1}>
                <div className="group flex flex-col items-center gap-4 rounded-3xl bg-white p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-700 text-white transition-colors duration-300 group-hover:bg-gold group-hover:text-primary-800">
                    <Icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-primary-800">
                    {activity.title}
                  </h3>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
