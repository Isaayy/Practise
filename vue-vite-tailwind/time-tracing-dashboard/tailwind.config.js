module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      veryDarkBlue: 'hsl(224, 46%, 9%)',
      darkBlue: 'hsl(235, 46%, 20%)',
      desaturatedBlue: 'hsl(235, 45%, 61%)',
      paleBlue: 'hsl(236, 100%, 87%)',

      blue: 'hsl(246, 80%, 60%)',
      orange: 'hsl(15, 100%, 70%)',
      softBlue: 'hsl(195, 74%, 62%)',
      lightRed: 'hsl(348, 100%, 68%)',
      limeGreen: 'hsl(145, 58%, 55%)',
      violet: 'hsl(264, 64%, 52%)',
      yellow: 'hsl(43, 84%, 65%)',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
