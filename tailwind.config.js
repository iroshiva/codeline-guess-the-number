/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./assets/**/*.{js,ts,jsx,tsx}"],
  theme: {
    /**
     * add custom family
     * Falmily font in assets/font
     * @include in assets/sass/base/_fonts.scss
     * */
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
