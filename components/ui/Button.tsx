import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  className?: string;
  external?: boolean;
  /** Optional click handler — useful for closing a mobile menu on tap */
  onClickClose?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-600 shadow-card hover:shadow-lg",
  secondary:
    "bg-gold text-primary-800 hover:bg-gold-300 shadow-gold hover:shadow-lg",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  ghost: "text-primary hover:bg-primary-50",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-base md:text-lg",
};

/**
 * Shared call-to-action button styled as a Link.
 * Renders an external anchor tag when `external` is true.
 */
export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon,
  className = "",
  external = false,
  onClickClose,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-3xl font-semibold transition-all duration-300 hover:-translate-y-0.5 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={onClickClose}
      >
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClickClose}>
      {children}
      {icon}
    </Link>
  );
}
