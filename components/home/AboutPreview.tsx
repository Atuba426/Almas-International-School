import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { ABOUT_BULLET_POINTS, CHECK_ICON } from "@/lib/constants";

export default function AboutPreview() {
  const CheckIcon = CHECK_ICON;

  return (
    <section className="bg-beige py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Image */}
        <Reveal direction="right">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-card">
            <Image
              src="/images/almas-international-school-achivements.webp"
              alt="Aerial view of the nature-surrounded Almas International School campus"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* Content */}
        <Reveal direction="left" delay={0.1}>
          <div>
            <span className="mb-3 inline-block rounded-full bg-gold/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gold-600">
              About Our School
            </span>
            <h2 className="font-heading text-3xl font-bold leading-tight text-primary-800 sm:text-4xl md:text-5xl">
              A Legacy of Excellence in Education
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
              Founded with a vision to nurture confident, compassionate, and
              capable individuals, Almas International School combines a
              rigorous CBSE curriculum with Islamic values in a safe,
              nature-rich campus environment that feels like a second home.
            </p>

            <ul className="mt-6 space-y-3">
              {ABOUT_BULLET_POINTS.map((point) => (
                <li key={point.id} className="flex items-start gap-3">
                  <CheckIcon
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-700 md:text-base">
                    {point.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button href="/about" icon={<ArrowRight className="h-5 w-5" aria-hidden="true" />}>
                Read More
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
