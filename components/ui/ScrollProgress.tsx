"use client";

import { useEffect, useState } from "react";

/**
 * Thin progress bar fixed to the top of the viewport that fills
 * based on how far the user has scrolled down the page using high-performance GPU transforms.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? scrollTop / docHeight : 0; // Keeping it as a 0 to 1 value for scaleX
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="scroll-progress"
      style={{ 
        transform: `scaleX(${progress})`, 
        transformOrigin: "left" 
      }}
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
}