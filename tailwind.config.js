/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/87842-beautiful-forest-wallpaper-beautiful-forest-forest-wallpaper.jpg')"
      }
    },
  },
  plugins: [],
}