/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './demo/**/*.{html,js}',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('./plugin/index.js'),
  ],
};
