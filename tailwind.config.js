/** @type {import('tailwindcss').Config} */
// import Constants from './src/utils/Constants'
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F3460",
        secondary: "#E94560",
        'light-gray': "#6b7280"
      }
    },
  },
  plugins: [],
}
