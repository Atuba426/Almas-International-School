import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#14532D",
          50: "#E8F0EA",
          100: "#C9DCCE",
          200: "#9FC2A8",
          300: "#6FA17E",
          400: "#3F7E54",
          500: "#235E37",
          600: "#1B4E2C",
          700: "#14532D",
          800: "#0F3D22",
          900: "#0A2917",
        },
        gold: {
          DEFAULT: "#FACC15",
          50: "#FFFCE8",
          100: "#FFF8C5",
          200: "#FFEF8A",
          300: "#FEE34D",
          400: "#FACC15",
          500: "#E0AE0A",
          600: "#B8880A",
          700: "#92660D",
        },
        beige: {
          DEFAULT: "#faf8f3",
          dark: "#f0ebe0",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-poppins)", "sans-serif"],
      },
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.7s ease-out forwards",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(20, 83, 45, 0.08)",
        card: "0 8px 30px -4px rgba(20, 83, 45, 0.12)",
        gold: "0 8px 30px -4px rgba(250, 204, 21, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
