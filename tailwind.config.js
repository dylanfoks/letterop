module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    debugScreens: {
      position: ['bottom', 'left'],
    },
    boxShadow: {
      '2': '0px 4px 8px 0px rgba(0, 0, 0, 0.1)',
    },

    extend: {
      colors: {
        primary:'#1E4BB4',
        secondary:'#EEE5D6'
      },
      fontFamily: {
        headline: ['OpenSans', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },

  variants: {
    extend: {},
  },

  plugins: [
    require('tailwindcss-debug-screens'),
  ]
}

