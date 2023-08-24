/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#181e1e',
        red: '#e63946',
        pink: '#ff6864',
        yellow: '#ffca28',
      },

      fontFamily: {
        alegreya: ['Alegreya', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
