import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#e6efe6",
          100: "#b3cfb3",
          200: "#80af80",
          300: "#4d8f4d",
          400: "#266f26",
          500: "#013220",
          600: "#012b1b",
          700: "#012416",
          800: "#001d11",
          900: "#00160c",
        },
        gold: {
          50: "#fdf8eb",
          100: "#f9ebc2",
          200: "#f0d98a",
          300: "#e7c752",
          400: "#D4AF37",
          500: "#c09b2d",
          600: "#a68425",
          700: "#8c6d1e",
          800: "#725617",
          900: "#584010",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "badge-pop": {
          "0%": { transform: "scale(0) rotateY(0deg)" },
          "50%": { transform: "scale(1.2) rotateY(180deg)" },
          "100%": { transform: "scale(1) rotateY(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "badge-pop": "badge-pop 0.8s ease-out",
        shimmer: "shimmer 2s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
