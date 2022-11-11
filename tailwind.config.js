/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textFaint: "#878D9D",
        darkBlue: "#2A3047",
        lightBlue: "#4D5363",
      },
    },
  },
  plugins: [],
};
