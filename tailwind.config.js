module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    'width':{
        '9xl':'95%'
    },
    extend: {},
  },
  variants: {
    boxShadow: ['responsive', 'hover', 'focus'],  
 },
  plugins: [],
}