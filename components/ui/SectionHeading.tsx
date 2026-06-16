import Reveal from "@/components/ui/Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

/**
 * Consistent heading block used at the top of homepage and inner-page
 * sections: small gold eyebrow label, large heading, optional description.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = light ? "text-white" : "text-primary-800";
  const descColor = light ? "text-primary-100" : "text-primary-600/80";

  return (
    <Reveal className={`max-w-2xl ${alignment}`}>
      <div className={`max-w-2xl ${alignment}`}>
        {eyebrow && (
          <span className="mb-3 inline-block rounded-full bg-gold/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gold-600">
            {eyebrow}
          </span>
        )}
        <h2
          className={`font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl ${titleColor}`}
        >
          {title}
        </h2>
        {description && (
          <p className={`mt-4 text-base leading-relaxed md:text-lg ${descColor}`}>
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
