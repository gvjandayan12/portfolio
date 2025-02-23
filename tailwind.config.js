/** @type {import('tailwindcss').Config} */
export default {
  content: [
    
    "./index.html",          // Include index.html
    "./src/**/*.{js,ts,jsx,tsx}"  // Include JSX & TSX files
    
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        adamina: ["Adamina", "sans-serif"]
      },
      colors: {
        navBar: "#000C1B",
        'color-footer': "#132130"
      }
    },
  },
  plugins: [],
}

