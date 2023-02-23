/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#1637c9',
          secondary: '#2f378c',
          accent: '#ed78c8',
          neutral: '#191D24',
          'base-100': '#41365E',
          info: '#84C7DB',
          success: '#186D41',
          warning: '#CA9A16',
          error: '#ED1216'
        }
      }
    ]
  },
  plugins: [require('daisyui')]
}
