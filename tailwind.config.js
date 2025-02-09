/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bounce : 'bounce 1s infinite',
        'bounce-delayed': 'bounce 1s infinite 0.5s',
        pulse: 'pulse 1s infinite',
        'pulse-delayed': 'pulse 1s infinite 0.5s',

      },
      screens:{
        '3xl': '1920px',
      }
    },
  },
  plugins: [],
}

