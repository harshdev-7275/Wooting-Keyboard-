/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screen: {
      sm:'480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        yellow: '#FFBD00',
        darkYellow: '#E0A500',
        darkBlack: '#080705',
        tGray: '#B5BAB7',
        veryLightPurple: '#CCCCE0',
        purple: '#6457A6',
        veryLightOrange: '#FEC09A',
        veryLightGray: '#F5F5F5',
        blue: '#4B57D2',
        seaGreen: '#1AEFC4',
        raisinBlack: '#221D23',

      },
    },
  },
  plugins: [],
}
