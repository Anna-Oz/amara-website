/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'soft-cream': '#F8F1ED',
        'dusty-rose': '#D4B5A3',
        'warm-brown': '#8B7355',
        'text-dark': '#2C2C2C',
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
};