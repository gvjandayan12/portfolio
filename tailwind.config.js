/** @type {import('tailwindcss').Config} */
export default {
  content: [

    "./index.html",          // Include index.html
    "./src/**/*.{js,ts,jsx,tsx}"  // Include JSX & TSX files

  ],
  theme: {
    extend: {
      colors: {
        navbar : "#000C1B"
      }
    },
  },
  plugins: [],
}

