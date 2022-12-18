/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg_2': "url('/images/bg_2.jpg')",
      },
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
      },
    },
  },
  plugins: [],
}
