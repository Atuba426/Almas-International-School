"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Direction the element animates in from */
  direction?: "up" | "left" | "right" | "none";
}

const directionOffsets: Record<string, { x: number; y: number }> = {
  up: { x: 0, y: 24 },
  left: { x: -24, y: 0 },
  right: { x: 24, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * Lightweight scroll-reveal wrapper. Animates children into view
 * once when they enter the viewport. Used sparingly for subtle,
 * premium-feeling section transitions.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  direction = "up",
}: RevealProps) {
  const offset = directionOffsets[direction];

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
