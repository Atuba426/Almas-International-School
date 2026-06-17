"use client";

import { ArrowRight, Award, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import HeroSlider from "@/components/home/hero-slider";
import Link from "next/link";

/**
 * Combined Hero Component
 * Layout & Sizing constraints: Clean, compact max-widths from File 1
 * Typography & Content styling: Aesthetic typography, badges, and <Reveal> animations from File 2
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-beige py-16">
      {/* Decorative background shapes */}
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-100/50 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-gold-100/60 blur-3xl"
        aria-hidden="true"
      />

      {/* Main Row: Justifies space between cleanly without stretching */}
      <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* LEFT CONTENT CONTAINER (Perfectly constrained to max-w-xl from File 1) */}
        <Reveal direction="right">
          <div className="max-w-xl">
            {/* Premium Trust Badge Kicker */}
            <span className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-600 mb-6">
              <Award className="h-3.5 w-3.5" aria-hidden="true" />
              100% CBSE Results — 5 Consecutive Years
            </span>

            {/* Typography Styles from File 2 */}
            <h1 className="font-heading text-4xl font-bold leading-tight text-primary-800 sm:text-5xl md:text-6xl">
              Where <span className="text-gold-600">Knowledge</span> Meets{" "}
              <span className="text-primary-600">Character</span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-gray-600 md:text-lg">
              Almas International School offers a premium CBSE education rooted
              in Islamic values, set within a nature-surrounded campus with
              dedicated boys hostel facilities — nurturing confident,
              well-rounded learners for tomorrow.
            </p>

            {/* Buttons Stack */}
            <div className="mt-8 flex flex-row flex-wrap items-center gap-3 w-full">
              <Button
                href="/admissions"
                size="lg"
                icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
                className="flex-1 sm:flex-none justify-center whitespace-nowrap"
              >
                Apply for Admission
              </Button>

              <Button
                href="/contact"
                variant="outline"
                size="lg"
                icon={<Phone className="h-4 w-4" aria-hidden="true" />}
                className="flex-1 sm:flex-none justify-center whitespace-nowrap"
              >
                Contact Us
              </Button>
            </div>

            
          </div>
        </Reveal>

        {/* RIGHT SIDE CONTAINER (Little smaller size constraint directly from File 1) */}
        <div className="mt-10 md:mt-0 w-full md:w-[550px]">
          <Reveal direction="left" delay={0.1}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl sm:aspect-[5/4] lg:aspect-[4/3]">
              <HeroSlider />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
