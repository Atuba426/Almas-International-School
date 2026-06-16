"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { CHECK_ICON, FACILITY_DETAILS } from "@/lib/constants";

// 1. Create a specialized Scroll-to-Play Video Component
function FacilityVideo({ src, poster, alt }: { src: string; poster: string; alt: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Play automatically on scroll (works because it starts muted)
          videoElement.play().catch((err) => console.log("Playback blocked:", err));
        } else {
          // Pause when scrolled off-screen to optimize performance
          videoElement.pause();
        }
      },
      { threshold: 0.3 } // Triggers when 30% of the video block is on screen
    );

    observer.observe(videoElement);
    return () => {
      if (videoElement) observer.unobserve(videoElement);
    };
  }, [src]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="relative h-full w-full bg-black">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        loop
        muted
        playsInline
        preload="none" // CRITICAL: Forces 0 bytes download on initial website load
        className="h-full w-full object-cover"
        aria-label={alt}
      />
      
      {/* Dynamic Sound Button Control Badge */}
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md transition-all hover:bg-black/90"
      >
        {isMuted ? (
          <><span>🔇</span><span>Tap for Voiceover</span></>
        ) : (
          <><span>🔊</span><span>Mute Audio</span></>
        )}
      </button>
    </div>
  );
}

/**
 * Alternating image/content blocks for each facility, with an
 * icon badge, description, and a checklist of key features.
 * Supports Cloudinary scroll-to-play video formats out-of-the-box.
 */
export default function FacilityShowcase() {
  const CheckIcon = CHECK_ICON;

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 sm:px-6 lg:px-8 lg:gap-24">
        {FACILITY_DETAILS.map((facility) => {
          const Icon = facility.icon;
          return (
            <div
              key={facility.id}
              id={facility.id}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              {/* Media Block Left/Right Side */}
              <Reveal
                direction={facility.reverse ? "left" : "right"}
                className={facility.reverse ? "lg:order-2" : "lg:order-1"}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-card">
                  {/* Highlight: Check if facility has a video, otherwise use default image */}
                  {facility.video ? (
                    <FacilityVideo 
                      src={facility.video} 
                      poster={facility.image} 
                      alt={`${facility.title} tour`} 
                    />
                  ) : (
                    <Image
                      src={facility.image}
                      alt={`${facility.title} at Almas International School`}
                      fill
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  )}
                </div>
              </Reveal>

              {/* Text Information Description Panel */}
              <Reveal
                direction={facility.reverse ? "right" : "left"}
                delay={0.1}
                className={facility.reverse ? "lg:order-1" : "lg:order-2"}
              >
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-700 text-white">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 font-heading text-2xl font-bold leading-tight text-primary-800 sm:text-3xl md:text-4xl">
                    {facility.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
                    {facility.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {facility.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckIcon
                          className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-500"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-gray-700 md:text-base">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}