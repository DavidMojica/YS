/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'cyan-clouds': '#4FC8F3',
        'cyan-clouds-light': '#79CAF9',
      },
      fontFamily:{
        'rubik-doodle': ['Rubik Doodle Shadow', 'cursive'],
      },
      spacing:{
       
      }
    },
  },
  plugins: [
  ],
}

