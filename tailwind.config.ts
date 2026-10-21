import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        background: "#f3f0e8",
        surface: "#e9e5db",
        border: "#d7d1c5",
        card: "#fffdf7",
        cardHover: "#f7f2e8",
        muted: "#716d65",
        accent: {
          blue: "#f06432",
          purple: "#8b5cf6",
          emerald: "#10b981",
          cyan: "#06b6d4",
          rose: "#f43f5e",
        },
      },
      backgroundImage: {
        "radial-hero": "radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.18) 0%, rgba(139, 92, 246, 0.09) 35%, transparent 70%)",
        "radial-card": "radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.06) 0%, transparent 65%)",
        "gradient-card-blue": "linear-gradient(180deg, rgba(59, 130, 246, 0.08) 0%, rgba(17, 19, 28, 0.95) 30%)",
        "gradient-card-purple": "linear-gradient(180deg, rgba(168, 85, 247, 0.08) 0%, rgba(17, 19, 28, 0.95) 30%)",
        "gradient-card-emerald": "linear-gradient(180deg, rgba(16, 185, 129, 0.08) 0%, rgba(17, 19, 28, 0.95) 30%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
