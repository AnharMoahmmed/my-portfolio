// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./resources/**/*.blade.php",
      "./resources/**/*.js",
      "./resources/**/*.ts", // Make sure this is present
      "./resources/**/*.jsx",
      "./resources/**/*.tsx", // <--- THIS IS CRUCIAL FOR YOUR REACT COMPONENTS
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }