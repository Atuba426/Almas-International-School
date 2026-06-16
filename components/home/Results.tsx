import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { RESULT_STATS } from "@/lib/constants";

/**
 * Dark green results section with gold accents and glassmorphism
 * stat cards highlighting the school's CBSE track record.
 */
export default function Results() {
  return (
    <section className="relative overflow-hidden bg-primary-800 py-16 md:py-24">
      {/* Decorative gold glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Achievements"
          title="A Proven Record of Excellence"
          description="Consistent results that reflect the dedication of our students, teachers, and the strength of our academic foundation."
          light
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {RESULT_STATS.map((stat, index) => (
            <Reveal key={stat.id} delay={index * 0.1}>
              <div className="glass-card rounded-3xl p-8 text-center">
                <p className="font-heading text-4xl font-bold text-gold md:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-primary-50 md:text-base">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
