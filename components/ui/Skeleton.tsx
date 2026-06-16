interface SkeletonProps {
  className?: string;
}

/**
 * Generic loading skeleton block. Combine with Tailwind sizing utilities
 * via `className` to match the shape of the content being loaded.
 */
export default function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div
      className={`skeleton rounded-3xl ${className}`}
      role="status"
      aria-label="Loading"
    />
  );
}
