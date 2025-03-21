/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,jsx,ts,js}","./app/**/*.{tsx,jsx,ts,js}","./components/**/*.{tsx,jsx,ts,js}"],
  theme: {
    extend: {
      colors:{
        faded:{
          200:"#f0f3f9",
          500:"#696E76"
        },
        primary:{
          200:"#00cde5",
          500:"#0b2f81"
        }
      }
    },
  },
  plugins: [],
}

