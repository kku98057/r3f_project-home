/** @type {import('tailwindcss').Config} */
const defaultThema = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      serif: ["Playfair Display", ...defaultThema.fontFamily.sans],
      sans: ["Poppins", ...defaultThema.fontFamily.sans],
    },
  },
  plugins: [],
};
