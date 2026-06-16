type ClassValue = string | number | boolean | undefined | null;

/**
 * Lightweight class-name combiner (no external dependency needed).
 * Filters out falsy values and joins the rest with a space.
 */
export function cn(...inputs: ClassValue[]): string {
  return inputs.filter(Boolean).join(" ");
}
