import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--ink) / <alpha-value>)",
        graphite: "rgb(var(--graphite) / <alpha-value>)",
        steel: "rgb(var(--steel) / <alpha-value>)",
        silver: "rgb(var(--silver) / <alpha-value>)",
        paper: "rgb(var(--paper) / <alpha-value>)",
        red: "rgb(var(--red) / <alpha-value>)",
        yellow: "rgb(var(--yellow) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial Narrow", "sans-serif"],
        body: ["var(--font-body)", "ui-sans-serif", "sans-serif"],
      },
      boxShadow: {
        red: "8px 8px 0 rgb(var(--red) / 0.55)",
        steel: "0 24px 70px rgb(0 0 0 / 0.42)",
      },
      maxWidth: {
        page: "1280px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
