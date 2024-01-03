/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing:{
        'h100%': '100vh',
        'w100%': '100vw',
      }
    },
  },
  plugins: [
  ],
}

