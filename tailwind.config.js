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
          50: "#fff9eb",
          100: "#feeec7",
          200: "#fddc8a",
          300: "#fbc44e",
          400: "#faa81a",
          500: "#f48a0c",
          600: "#d86507",
          700: "#b3440a",
          800: "#92350e",
          900: "#782c0f",
          950: "#451403",
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
        "3xlGray": "0 2px 4px rgb(209, 213, 219, 0.2)",
        hardWhite: "0px 2px 4px rgba(240, 245, 252,1)",
        hardDark: "0px 2px 4px rgba(240, 245, 252, 0.322)",
      },
    },
  },
  plugins: [require("daisyui")],
};
