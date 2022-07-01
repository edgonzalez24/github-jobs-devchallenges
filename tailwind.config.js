/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['poppins'],
        'roboto': ['Roboto', 'sans-serif']
      },
      colors: {
        dark: {
          500: '#334680',
          800: '#282538',
        },
        blue: {
          100: '#1E86FF'
        },
        gray: {
          50: ' #BDBDBD',
          100: '#B9BDCF'
        },
        'white-smoke': {
          100: '#F2F2F2'
        }
      },
      boxShadow: {
        'search': '0px 2px 8px rgba(0, 0, 0, 0.1)',
        'card': '0px 2px 4px rgba(0, 0, 0, 0.05)'
      },
      width: {
        'brand': '5.625rem'
      },
      height: {
        'brand': '5.625rem'
      }
    },
  },
  plugins: [],
}
