import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import type { BreadcrumbItem } from "@/types";

interface PageHeroProps {
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  breadcrumbs: BreadcrumbItem[];
}

/**
 * Shared hero banner for inner pages: full-width image with a
 * dark green gradient overlay, page title, description, and breadcrumbs.
 */
export default function PageHero({
  title,
  description,
  image,
  imageAlt,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative h-[280px] w-full sm:h-[340px] md:h-[400px]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/60 to-primary-900/40" />
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-primary-50/90">
                <li className="flex items-center gap-2">
                  <Link
                    href="/"
                    className="flex items-center gap-1.5 transition-colors hover:text-gold"
                  >
                    <Home className="h-3.5 w-3.5" aria-hidden="true" />
                    Home
                  </Link>
                </li>
                {breadcrumbs.map((item, index) => (
                  <li key={item.href} className="flex items-center gap-2">
                    <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                    {index === breadcrumbs.length - 1 ? (
                      <span className="font-medium text-gold" aria-current="page">
                        {item.label}
                      </span>
                    ) : (
                      <Link
                        href={item.href}
                        className="transition-colors hover:text-gold"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            <h1 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              {title}
            </h1>
            {description && (
              <p className="mt-3 max-w-2xl text-sm text-primary-50/90 sm:text-base md:text-lg">
                {description}
              </p>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
