/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        semiBlack: 'rgba(0, 0, 0, 0.5)',
        dark: '#181e1e',
        red: '#e63946',
        brightRed: '#ff6864',
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
