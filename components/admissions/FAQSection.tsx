import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import FAQAccordion from "@/components/admissions/FAQAccordion";
import { ADMISSION_FAQS } from "@/lib/constants";

/**
 * Frequently asked questions section for the Admissions page.
 */
export default function FAQSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQs"
          title="Frequently Asked Questions"
          description="Answers to common questions about the admission process at Almas International School."
        />

        <Reveal delay={0.1} className="mt-12">
          <FAQAccordion items={ADMISSION_FAQS} />
        </Reveal>
      </div>
    </section>
  );
}
