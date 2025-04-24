/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gabarito', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#5173F0',
        dark: '#222',
      },
    },
  },
  plugins: [],
};