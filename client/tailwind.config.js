/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        "primary": "0px 20px 40px rgba(0, 0, 0, 0.16)"
      }
    },
    colors: {
      sub_info: '#474747',
      main: '#2D3748',
      alert: '#E74A3B',
      un_modified: '#8B8B8B',
      orange_main: '#D55B13',
      female: '#FF7568',
      green_main: '#2F913F',
      blue_main: '#285D9A',
      box: '#F1F1F1',
    },
  },
  plugins: [],
};
