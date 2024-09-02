import type { Config } from "tailwindcss";
import daisyui from "daisyui";

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
        first: "0 10px 30px -15px rgba(0, 0, 0, 0.2)",
      },
      colors: {
        primary: "#1d4ed8",
        "primary-dark": "#3d80ff",
        second: "#FF4500",
        "font-color": "#111827",
        "font-color-dark": "#ffff",
        red: {
          "0": "#FF0000",
        },
      },
    },
  },

  plugins: [daisyui],
};
export default config;
