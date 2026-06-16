import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_CONFIG.name} - Vikarabad, Telangana`,
    short_name: SITE_CONFIG.shortName,
    description: SITE_CONFIG.description,
    start_url: "/",
    display: "standalone",
    background_color: "#faf8f3",
    theme_color: "#14532D",
    icons: [
      {
        src: "/images/almas-international-school-logo.webp",
        sizes: "512x512",
       type: "image/webp",
        purpose: "any",
      },
    ],
  };
}
