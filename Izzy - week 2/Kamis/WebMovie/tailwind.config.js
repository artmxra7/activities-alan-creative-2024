/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '6xl': '3.5rem',
        '7xl': '5rem',
      },
    },
  },
  plugins: [],
}