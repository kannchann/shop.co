/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        custom1: ["Integral", "sans-serif"],
        custom2: ["satoshi", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      colors: {
        primary: {
          100: "#F2F0F1",
          200: "#F0F0F0",
          300: "#F0EEED",
          700: "#0165FF",
        },
        black: {
          100: "#171717",
        },
        grey: {
          100: "#C7C7C7",
          200: "#6D6D6D",
        },
      },
    },
  },
  plugins: [],
};
