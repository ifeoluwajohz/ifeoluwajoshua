/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/App.jsx",
    "./src/components/Navbar.jsx",
    "./src/components/Intro.jsx",
    "./src/components/About.jsx",
    "./src/components/Approach.jsx",
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

