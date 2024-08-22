/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IRANSans", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#feeed1",
          200: "#fddca3",
          300: "#fccb76",
          400: "#fbb948",
          500: "#faa81a",
          600: "#c88615",
          700: "#966510",
          800: "#64430a",
          900: "#322205",
        },
        dark: "#1d232a",
        darkCharcoal: "#2D2D2D",
        coralRed: "#FF5733",
        brightBlue: "#0073E6",
        goldenYellow: "#FFD700",
      },
      boxShadow: {
        navbox: "4px 4px 32px #b2b5ba, -4px -4px 32px #f0f5fc",
      },
      dropShadow: {
        "3xlRed": "0 2px 4px rgb(255, 87, 51, 0.2)",
        "3xlgray": "0 2px 4px rgb(209, 213, 219, 0.2)",
      },
    },
  },
  plugins: [require("daisyui")],
};
