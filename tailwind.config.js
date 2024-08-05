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
      }, 
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1400px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1920px',
        // => @media (min-width: 1280px) { ... }
      }
    },
  },
  plugins: [],
}

