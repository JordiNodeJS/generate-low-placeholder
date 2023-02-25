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
          primary: '#f7bd94',
          secondary: '#e539e2',
          accent: '#f9eba2',
          neutral: '#222B30',
          'base-100': '#FAF9FA',
          info: '#A4D3EA',
          success: '#82E3A7',
          warning: '#F6A23C',
          error: '#F42A34'
        }
      }
    ]
  },
  plugins: [require('daisyui')]
}
