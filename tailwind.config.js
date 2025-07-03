/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
     colors: {
      'custom-gray1': '#2c2c2c',
      'custom-gray-light': '#545454',
     }
    },
  },
  plugins: [],
}

