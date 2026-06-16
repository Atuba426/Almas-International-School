import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

/**
 * Global site footer: deep green background, gold top border,
 * logo, quick links, contact card, social icons, and school motto.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-gold bg-primary-800 text-primary-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo & description */}
          <div>
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="flex items-center gap-3"
                aria-label="Home"
              >
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5 border-4 border-white" >
                  {/* Left - Logo */}
                  <Image
                    src="/images/almas-international-school-logo.webp"
                    alt="Almas Logo"
                    width={180}
                    height={70}
                    className="h-16 w-auto"
                    priority 
                  />
                </div>
              </Link>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-primary-100/90">
              {SITE_CONFIG.description}
            </p>
            <p className="mt-4 font-heading text-sm font-semibold tracking-wide text-gold">
              {SITE_CONFIG.motto}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading text-base font-semibold text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-100/90 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact card */}
          <div>
            <h3 className="font-heading text-base font-semibold text-white">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-100/90">
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold"
                  aria-hidden="true"
                />
                <span>{SITE_CONFIG.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  className="h-4 w-4 flex-shrink-0 text-gold"
                  aria-hidden="true"
                />
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-gold"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  className="h-4 w-4 flex-shrink-0 text-gold"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="transition-colors hover:text-gold"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-heading text-base font-semibold text-white">
              Follow Us
            </h3>
            <div className="mt-4 flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gold hover:text-primary-800"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
            <p className="mt-6 text-sm text-primary-100/90">
              Admissions open for the upcoming academic year. Reach out to learn
              more.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-primary-100/70">
          <p>
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p> <br />
          <p className="text-gray-500 text-sm">
              Designed By{" "}
              <Link 
                href="https://www.velcodex.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium text-yellow-400 hover:underline underline-offset-4 decoration-yellow-400 transition-all"
              >
                Velcodex
              </Link>
            </p>
        </div>
      </div>
    </footer>
  );
}
