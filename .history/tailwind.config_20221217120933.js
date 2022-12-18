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
        'bg-3': "url('/images/bg-3.jpg')",
        'bg-4': "url('/images/bg-4.jpg')",
        'bg-5': "url('/images/bg-5.jpg')",
      },
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
      },
    },
  },
  plugins: [],
}
