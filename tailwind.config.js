/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        amatic: ["Amatic", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        dmDisplay: ["DM Serif Display", "sans-serif"],
        dancingScript: ["Dancing Script", "sans-serif"],
        bree: ["Bree Serif", "sans-serif"],
      },
      colors: {
        primary: "#e0e0e0",
        secondary: "#e4c341",
        black: "#141414",
        bgContainer: "#091f36",
        bgMobileNavMenu: "#1d1e22",
      },
      screens: {
        sm: { max: "768px" },
        md: { max: "1250px" },
      },

      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
      },
    },
  },
  plugins: [],
};
