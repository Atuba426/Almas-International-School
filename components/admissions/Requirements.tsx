import Image from "next/image";
import { Phone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { ADMISSION_REQUIREMENTS, CHECK_ICON, SITE_CONFIG } from "@/lib/constants";

/**
 * Document requirements checklist alongside a campus image and
 * a quick call-to-action for admissions enquiries.
 */
export default function Requirements() {
  const CheckIcon = CHECK_ICON;

  return (
    <section className="bg-beige py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal direction="right">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-card">
            <Image
              src="/other/almas-international-school-hyderabad-admission.webp?q=80&w=1200&auto=format&fit=crop"
              alt="Parents and students visiting Almas International School campus"
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
              Documents Needed
            </span>
            <h2 className="font-heading text-3xl font-bold leading-tight text-primary-800 sm:text-4xl md:text-5xl">
              Admission Requirements
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
              Please keep the following documents ready when submitting your
              application. Our admissions team is happy to guide you through
              any specific requirements for your child&apos;s grade.
            </p>

            <ul className="mt-6 space-y-3">
              {ADMISSION_REQUIREMENTS.map((req) => (
                <li key={req.id} className="flex items-start gap-3">
                  <CheckIcon
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-700 md:text-base">
                    {req.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                icon={<Phone className="h-5 w-5" aria-hidden="true" />}
              >
                Call Admissions Office
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
