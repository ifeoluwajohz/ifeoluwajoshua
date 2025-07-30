/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/App.jsx",
    "./src/components/Home.jsx",
    "./src/components/Projects.jsx"




  ],
  theme: {
    extend: {
      fontFamily: {
      josefin: ['"Josefin Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

