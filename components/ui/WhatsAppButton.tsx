import { FaWhatsapp } from "react-icons/fa";
import { SITE_CONFIG } from "@/lib/constants";

/**
 * Floating WhatsApp contact button, fixed to the bottom-right corner.
 * Pure presentational link — no client interactivity needed.
 */
export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello! I would like to know more about admissions at Almas International School."
  );

  return (
    <a
      href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card transition-transform duration-300 hover:scale-110 animate-float"
    >
      <FaWhatsapp className="h-7 w-7" aria-hidden="true" />
      <span className="sr-only">Chat on WhatsApp</span>
    </a>
  );
}
