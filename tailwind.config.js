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
          800: '#282538'
        },
        blue: {
          100: '#1E86FF'
        },
        gray: {
          100: '#B9BDCF'
        }
      },
      boxShadow: {
        'search': '0px 2px 8px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
