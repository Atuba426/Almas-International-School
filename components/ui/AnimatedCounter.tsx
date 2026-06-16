"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  suffix?: string;
  duration?: number;
}

/**
 * Animates a numeric value counting up from 0 to its target once
 * it scrolls into view. Falls back gracefully for non-numeric values.
 */
export default function AnimatedCounter({
  value,
  suffix = "",
  duration = 1500,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  const target = parseInt(value, 10);
  const isNumeric = !Number.isNaN(target);

  useEffect(() => {
    if (!isInView || !isNumeric) return;

    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setDisplay(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplay(target);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, isNumeric, target, duration]);

  return (
    <span ref={ref}>
      {isNumeric ? display : value}
      {suffix}
    </span>
  );
}
