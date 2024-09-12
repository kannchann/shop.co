/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F2F7FF",
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
      fontFamily: {
        main: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
