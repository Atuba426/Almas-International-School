import { ArrowRight, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

/**
 * Premium call-to-action banner inviting visitors to apply
 * for admission or get in touch with the school.
 */
export default function AdmissionsCTA() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary-700 px-6 py-12 text-center shadow-card sm:px-12 md:py-16">
            {/* Decorative gold blob */}
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/20 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary-500/30 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative">
              <span className="mb-4 inline-block rounded-full bg-gold/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
                Admissions Open
              </span>
              <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                Begin Your Child&apos;s Journey of Excellence Today
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary-50/90 md:text-lg">
                Limited seats available for the upcoming academic year. Give
                your child the foundation they deserve — apply now or reach
                out to our admissions team for guidance.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button
                  href="/admissions"
                  variant="secondary"
                  size="lg"
                  icon={<ArrowRight className="h-5 w-5" aria-hidden="true" />}
                >
                  Apply Now
                </Button>
                <Button
                  href="/contact"
                  size="lg"
                  className="border-2 border-white/30 bg-transparent text-white hover:bg-white hover:text-primary-800"
                  icon={<Phone className="h-5 w-5" aria-hidden="true" />}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
