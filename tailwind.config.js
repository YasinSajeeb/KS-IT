/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      padding: '4rem',
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false
  },
}