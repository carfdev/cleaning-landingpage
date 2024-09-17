/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "port-gore": {
          50: "#eef2ff",
          100: "#e0e8ff",
          200: "#c8d3fd",
          300: "#a6b7fb",
          400: "#8290f7",
          500: "#646af0",
          600: "#4c48e3",
          700: "#403ac8",
          800: "#3531a2",
          900: "#302f80",
          950: "#211f54",
        },
        "azure-radiance": {
          50: "#edfbff",
          100: "#d6f4ff",
          200: "#b5eeff",
          300: "#83e6ff",
          400: "#48d5ff",
          500: "#1eb8ff",
          600: "#069cff",
          700: "#0082f3",
          800: "#0868c5",
          900: "#0d599b",
          950: "#0e365d",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
