import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import { SITE_CONFIG } from "@/lib/constants";

/**
 * Main contact section: validated form on one side, contact info
 * cards and an embedded map on the other.
 */
export default function ContactSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="We'd Love to Hear From You"
          description="Have a question about admissions, academics, or our hostel facility? Send us a message and our team will respond promptly."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="right">
            <div className="rounded-3xl border border-primary-50 bg-beige p-6 shadow-soft sm:p-8">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <div className="space-y-6">
              <ContactInfo />

              <div className="overflow-hidden rounded-3xl shadow-soft">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.071353554813!2d77.54055317498349!3d17.312106083562274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc93f9767c96e49%3A0x18ec0b314c23d6f9!2sAlmas%20High%20School!5e0!3m2!1sen!2sin!4v1781580892049!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
