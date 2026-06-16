import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { HIGHLIGHT_FEATURES } from "@/lib/constants";

/**
 * Feature highlight cards: icon on the left, title and description
 * on the right. Showcases the school's four defining features.
 */
export default function Highlights() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="What Makes Almas International Special"
          description="A nurturing environment where modern academics and timeless values come together to shape future leaders."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHT_FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.id} delay={index * 0.1}>
                <div className="group h-full rounded-3xl border border-primary-50 bg-beige p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-700 text-white transition-colors duration-300 group-hover:bg-gold group-hover:text-primary-800">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-primary-800">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {feature.description}
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
