/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        darkMode:{
          100: "hsl(209, 23%, 22%)",
          200: "hsl(207, 26%, 17%)"
        },
        lightMode:{
          100: "hsl(0, 0%, 100%)",
          200: "hsl(0, 0%, 98%)",
          300: "hsl(0, 0%, 52%)",
          400: "hsl(200, 15%, 8%)"
        }
     },
     fontFamily: {
        body: "Nunito Sans"
     }
    },
  },
  plugins: [],
}
