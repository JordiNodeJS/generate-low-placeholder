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
          primary: '#7e22ce',
          secondary: '#db2777',
          accent: '#854d0e',
          neutral: '#222B30',
          'base-100': '#FAF9FA',
          info: '#0ea5e9',
          success: '#14b8a6',
          warning: '#facc15',
          error: '#f43f5e'
        }
      }
    ]
  },
  plugins: [require('daisyui')]
}
