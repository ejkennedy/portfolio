/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./src/**/*.ts"],
  theme: {
    extend: {
      colors: {
        'background': '#0A192F',
        'turquoise': '#64FFDB',
      },
    },
  },
  plugins: [require('daisyui')],
}

