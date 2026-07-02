/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], 
      },
      colors: {
        brand: {
          dark: '#1a2740',
          blue: '#1f5fa8',
          red: '#c0392b',
          yellow: '#d99a1c'
        }
      }
    },
  },
  plugins: [],
}