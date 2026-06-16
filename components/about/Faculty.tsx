import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { FACULTY_MEMBERS } from "@/lib/constants";

/**
 * Grid of leadership/faculty member cards with photo, name, and role.
 */
export default function Faculty() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Leadership"
          title="Meet the People Behind Almas"
          description="A dedicated team of educators and administrators committed to every student's success."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FACULTY_MEMBERS.map((member, index) => (
            <Reveal key={member.id} delay={index * 0.1}>
              <div className="group overflow-hidden rounded-3xl bg-beige shadow-soft transition-shadow duration-300 hover:shadow-card">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role} at Almas International School`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-heading text-base font-semibold text-primary-800">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-gold-600">{member.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
