"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY_CATEGORIES, EXTENDED_GALLERY_ITEMS } from "@/lib/constants";

// UPDATED: Standardized mobile + desktop bento rules without aspect conflict string bugs
const sizeClasses: Record<string, string> = {
  large: "col-span-2 row-span-2",   // Mobile: Boxy large block | Desktop: Feature anchor item
  wide: "col-span-2 row-span-1",    // Mobile: Landscape banner | Desktop: Horizontal display card
  tall: "col-span-1 row-span-2",    // Mobile: Slender tower block | Desktop: Twin height element
  medium: "col-span-1 row-span-1",  // Mobile: Clean square unit | Desktop: Basic building tile
  small: "col-span-1 row-span-1",   // Mobile: Clean square unit | Desktop: Basic building tile
};

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? EXTENDED_GALLERY_ITEMS
      : EXTENDED_GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* Category filter pills */}
      <div
        className="flex flex-wrap items-center justify-center gap-3"
        role="group"
        aria-label="Filter gallery by category"
      >
        {GALLERY_CATEGORIES.map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              aria-pressed={isActive}
              className={`rounded-full px-5 py-2 text-sm font-medium shadow-soft transition-all duration-300 ${
                isActive
                  ? "bg-primary-700 text-white"
                  : "bg-white text-primary-700 hover:-translate-y-0.5 hover:bg-primary-50"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      {/* Image grid 
        UPDATED TRACK LOGIC:
        - Added auto-rows-[140px] for consistent increments on mobile devices.
        - Scales seamlessly into multi-column rows via sm:auto-rows-[180px] and md:auto-rows-[200px].
      */}
      <div className="mt-10 grid grid-cols-2 gap-3 auto-rows-[140px] sm:grid-cols-4 sm:gap-5 sm:auto-rows-[180px] md:auto-rows-[200px]">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={`group relative overflow-hidden rounded-3xl shadow-soft transition-shadow duration-300 hover:shadow-card w-full h-full ${sizeClasses[item.size]}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              loading="lazy"
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            {/* Added rich deep gradient to retain readability for labels */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/30 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />
            
            <div className="absolute inset-x-0 bottom-0 p-4">
              <p className="font-heading text-xs font-semibold text-white sm:text-sm md:text-base tracking-wide">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <p className="mt-10 text-center text-sm text-gray-500">
          No images found in this category yet.
        </p>
      )}
    </div>
  );
}