module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    'width':{
        '9xl':'95%',
        '8xl':'75%'
    },
    extend: {},
  },
  variants: {
    boxShadow: ['responsive', 'hover', 'focus'],  
 },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}