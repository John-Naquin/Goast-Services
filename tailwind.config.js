/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brandGold: '#B99669',
        brandDark: '#3C4150',
      },
    },
  },
  plugins: [],
}