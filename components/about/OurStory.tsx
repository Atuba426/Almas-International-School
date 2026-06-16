import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

/**
 * "Our Story" intro section: narrative content on the left,
 * supporting image on the right.
 */
export default function OurStory() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal direction="right">
          <div>
            <span className="mb-3 inline-block rounded-full bg-gold/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gold-600">
              Our Story
            </span>
            <h2 className="font-heading text-3xl font-bold leading-tight text-primary-800 sm:text-4xl md:text-5xl">
              Building Futures with Faith and Knowledge
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-gray-600 md:text-lg">
              <p>
                Almas International School was founded on a simple belief:
                that academic excellence and strong moral character are not
                separate goals, but two halves of the same mission. Today,
                that belief continues to shape everything we do.
              </p>
              <p>
                Set within a peaceful, nature-surrounded campus, our school
                provides an environment where students can focus, grow, and
                thrive. Supported by experienced educators, modern
                facilities, and a caring residential community for our
                boarding students.
              </p>
              <p>
                With a consistent record of 100% CBSE results over five
                consecutive years, we are proud of what our students achieve
                — and even prouder of the character they build along the way.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.1}>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-card">
            <Image
              src="/gallery/almas-international-school-student-learning.webp?q=80&w=1200&auto=format&fit=crop"
              alt="Students and teachers at Almas International School campus"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
