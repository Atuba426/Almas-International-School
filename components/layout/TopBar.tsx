import { Mail, MapPin, Phone, PartyPopper } from "lucide-react";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import { FaWhatsapp } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="hidden bg-primary-800 text-primary-50 md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 text-xs sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 hover:text-gold">
            <PartyPopper className="h-3.5 w-3.5" aria-hidden="true" />
            Welcome to Almas International School
          </span>
        </div>

        <div className="flex items-center gap-4">
          {/* Email */}
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="
      hidden md:flex
      items-center gap-2
      text-sm
      hover:text-gold
      transition-colors
    "
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            <span>{SITE_CONFIG.email}</span>
          </a>
          <a
            href="https://wa.me/918500571786"
            target="_blank"
            rel="noopener noreferrer"
            className="
      flex items-center gap-2
      bg-[#25D366]
      text-white
      px-3 py-2
      rounded-full
      text-sm
      font-medium
      hover:scale-105
      transition-all duration-300
    "
          >
            <FaWhatsapp className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp Now</span>
          </a>
        </div>
      </div>
    </div>
  );
}
