import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0b1f3a",
          900: "#0f2a4d",
          800: "#153a63",
        },
        brand: {
          50: "#eef4fb",
          100: "#d9e7f5",
          200: "#b3cfeb",
          300: "#82afdb",
          400: "#5089c4",
          500: "#2f6aa8",
          600: "#245588",
          700: "#1f456f",
          800: "#1c3a5c",
          900: "#19314c",
          950: "#0f1e30",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
