import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F3EDE4",
        sand: {
          DEFAULT: "#E9DFD2",
          deep: "#DFD2C0",
        },
        latte: "#D7C5AE",
        taupe: "#A98E74",
        mocha: "#7C6453",
        espresso: "#231B15",
        cocoa: "#372B22",
      },
      fontFamily: {
        display: ["Montserrat", "system-ui", "sans-serif"],
        script: ["Allura", "cursive"],
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
      },
      animation: {
        marquee: "marquee 26s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
