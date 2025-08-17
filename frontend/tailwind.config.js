/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        'auto':'repeat(auto-fill, minmax(200px, 1fr))'
      },
      colors:{
        'primary':'#FF6B35',
        'secondary':'#F7931E',
        'accent':'#138808',
        'warm':'#FFF8DC',
        'earth':'#8B4513'
      }
    },
  },
  plugins: [],
}