/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'cyan-clouds': '#4FC8F3',
        'cyan-clouds-light': '#79CAF9',
        'cyan-deep-sky': '#0CB7F2',
        'cyan-very-light': '#B6FFFF',
        'orange-sun': '#FF9800',
      },
      fontFamily:{
        'rubik-doodle': ['Rubik Doodle Shadow', 'cursive'],
        'Bungee':['Bungee Spice', 'sans-serif']
      },
      spacing:{
       
      }
    },
  },
  plugins: [
  ],
}

