/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#171717",
        grey: "#6D6D6D",
        greyLight: "#C7C7C7",
      },
      fontFamily: {
        main: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
