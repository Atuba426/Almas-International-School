import Reveal from "@/components/ui/Reveal";
import { CONTACT_INFO } from "@/lib/constants";

/**
 * Grid of contact info cards: address, phone, email, office hours.
 */
export default function ContactInfo() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {CONTACT_INFO.map((item, index) => {
        const Icon = item.icon;
        const isLink = item.href !== "#";
        const content = (
          <div className="flex h-full items-start gap-4 rounded-3xl border border-primary-50 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary-700 text-white">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gold-600">
                {item.label}
              </p>
              <p className="mt-1 text-sm font-medium text-primary-800 md:text-base">
                {item.value}
              </p>
            </div>
          </div>
        );

        return (
          <Reveal key={item.id} delay={index * 0.05}>
            {isLink ? (
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block h-full"
              >
                {content}
              </a>
            ) : (
              content
            )}
          </Reveal>
        );
      })}
    </div>
  );
}
