/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans"],
        poppinsBold: ["Poppins-Bold", "sans"],
        poppinsItalic: ["Poppins-Italic", "sans"],
        poppinsBoldItalic: ["Poppins-BoldItalic", "sans"],
        poppinsExtraBold: ["Poppins-ExtraBold", "sans"],
        poppinsExtraBoldItalic: ["Poppins-ExtraBoldItalic", "sans"],
      },
    },
  },
  plugins: [],
};
