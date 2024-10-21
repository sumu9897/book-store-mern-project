/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' :'#FFCE1A',
        'secondary' :'#OD0842',
        'backBG' : '#F3F3F3',
        'favorite' : '#FF5841',
      },
      fontFamily :{
        'primary' : ["Montserrat", "sans-serif"],
        'secondary' : ["Nunito Sans", "sans-serif"],

      }
    },
  },
  plugins: [],
}

