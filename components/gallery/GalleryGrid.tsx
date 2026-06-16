"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY_CATEGORIES, EXTENDED_GALLERY_ITEMS } from "@/lib/constants";

const sizeClasses: Record<string, string> = {
  large: "sm:col-span-2 sm:row-span-2 aspect-square sm:aspect-auto",
  wide: "sm:col-span-2 aspect-[16/9]",
  tall: "sm:row-span-2 aspect-[3/4] sm:aspect-auto",
  medium: "aspect-square",
  small: "aspect-square",
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

      {/* Image grid */}
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={`group relative overflow-hidden rounded-3xl shadow-soft transition-shadow duration-300 hover:shadow-card ${sizeClasses[item.size]}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              loading="lazy"
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <p className="font-heading text-sm font-semibold text-white md:text-base">
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
