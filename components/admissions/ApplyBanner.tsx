import { ArrowRight, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { SITE_CONFIG } from "@/lib/constants";

/**
 * Final call-to-action banner on the Admissions page, directing
 * visitors to the contact form to begin their application.
 */
export default function ApplyBanner() {
  return (
    <section className="bg-beige py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary-700 px-6 py-12 text-center shadow-card sm:px-12 md:py-16">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/20 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative">
              <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                Ready to Join Almas International?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary-50/90 md:text-lg">
                Fill out our enquiry form and our admissions team will get
                back to you with the next steps, fee details, and a campus
                visit invitation.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button
                  href="/contact"
                  variant="secondary"
                  size="lg"
                  icon={<ArrowRight className="h-5 w-5" aria-hidden="true" />}
                >
                  Start Your Application
                </Button>
                <Button
                  href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                  size="lg"
                  className="border-2 border-white/30 bg-transparent text-white hover:bg-white hover:text-primary-800"
                  icon={<Phone className="h-5 w-5" aria-hidden="true" />}
                >
                  Call Us Now
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
