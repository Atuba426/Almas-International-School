import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { ADMISSION_STEPS } from "@/lib/constants";

/**
 * Step-by-step admission process displayed as a numbered,
 * connected sequence of cards.
 */
export default function AdmissionProcess() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="Our Admission Process"
          description="A simple, transparent process designed to make joining Almas International School as smooth as possible."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {ADMISSION_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.id} delay={index * 0.1}>
                <div className="relative h-full rounded-3xl border border-primary-50 bg-beige p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-700 text-white">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <span className="font-heading text-3xl font-bold text-gold/40">
                      {String(step.step).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-primary-800">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {step.description}
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
