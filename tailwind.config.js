/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "6.5rem",
      },
    },
    extend: {
      backgroundImage: {
        contact: "url('src/assets/images/contact.png')",
      },

      fontFamily: {
        IntegralBold: ["Integral", "sans-serif"],
        satoshi: ["satoshi", "sans-serif"],
        satoshiMedium: ["satoshi-medium", "sans-serif"],
        satoshiBold: ["satoshi-bold", "sans-serif"],
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
          700: "#000000",
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
