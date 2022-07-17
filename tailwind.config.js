/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors: {
      "lightgray" : "#d6d6d6",
      "lightyellow" : "#ffee32",
      "yellow" : "#ffd100",
      "black" : "#202020",
      "lightblack" : "#333533",
      "white" : "#FFFFFF",
      "green": "#4BB543"
    },
    extend: {
      gridTemplateColumns: {
        'foodmenu': 'repeat(auto-fill, minmax(320px, 1fr))',
      },
    },
  },
  
  plugins: [],
}