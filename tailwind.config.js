/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        dmDisplay: ["DM Serif Display", "sans-serif"],
        dancingScript: ["Dancing Script", "sans-serif"],
        bree: ["Bree Serif", "sans-serif"],
      },
      colors: {
        primary: "#e0e0e0",
        secondary: "#e4c341",
        background: "#141414",
        bgMobileNavMenu: "#1d1e22",
      },
      screens: {
        sm: { max: "640px" },
      },
    },
  },
  plugins: [],
};
