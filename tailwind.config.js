/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        axiformathin: "Axiforma-Thin", 
        axiformaregular: "Axiforma-Regular", 
        axiformamedium: "Axiforma-Medium", 
        axiformalight: "Axiforma-Light", 
        axiformablack: "Axiforma-Black", 
        axiformaheavy: "Axiforma-Heavy"
      },
      colors: {
        primary: "#37137F",
        secondary: "#F0F2FF",
        orangecolor: "#DF6951"
      }
    },
  },
  plugins: [],
}

