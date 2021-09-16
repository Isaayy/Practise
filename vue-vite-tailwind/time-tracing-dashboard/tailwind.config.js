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
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
