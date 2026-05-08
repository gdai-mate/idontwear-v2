import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        idw: {
          black: "#0C0C0C",
          white: "#F7F6F3",
          accent: "#C46B39",
          "accent-light": "#D4845A",
          linen: "#E8DFD0",
          graphite: "#4A4A48",
          stone: "#A09B93",
          denim: "#2C3E5A",
          indigo: "#3D4F7C",
          clay: "#8B6F47",
          sand: "#C4B9A8",
        },
      },
      fontFamily: {
        serif: ['"EB Garamond"', "Georgia", "serif"],
        sans: [
          '"Helvetica Neue"',
          "Inter",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      fontSize: {
        display: [
          "clamp(3rem, 8vw, 7rem)",
          { lineHeight: "1.05", letterSpacing: "-0.02em" },
        ],
        heading: [
          "clamp(1.75rem, 4vw, 3rem)",
          { lineHeight: "1.15", letterSpacing: "-0.01em" },
        ],
        subheading: [
          "0.75rem",
          { lineHeight: "1.4", letterSpacing: "0.12em" },
        ],
      },
      spacing: {
        gutter: "clamp(24px, 5vw, 80px)",
        section: "clamp(60px, 10vw, 140px)",
      },
      maxWidth: {
        content: "1440px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
