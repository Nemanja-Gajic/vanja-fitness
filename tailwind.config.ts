import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mist: {
          DEFAULT: "#ECEDE7",
          deep: "#E3E4DC",
        },
        ink: "#131313",
        charcoal: "#292D32",
        lilac: {
          DEFAULT: "#FBDBFC",
          deep: "#EFC9F2",
        },
        peach: "#FDCD93",
        mint: "#A1EAE6",
        blush: "#FFDEDE",
        cream: "#F4F1EA",
      },
      fontFamily: {
        serif: ["Arapey", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      maxWidth: {
        wrap: "1180px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 26s linear infinite",
        "fade-up": "fade-up 0.6s ease both",
      },
    },
  },
  plugins: [],
};

export default config;
