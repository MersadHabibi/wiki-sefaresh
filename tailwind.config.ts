import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem",
      },
      screens: {
        "2xl": "1440px",
        xl: "1280px",
        lg: "1024px",
        md: "768px",
        sm: "640px",
        xs: "480px",
      },
      boxShadow: {
        primary: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },

  plugins: [],
};
export default config;
