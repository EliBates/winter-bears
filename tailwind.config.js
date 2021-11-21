module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gold: '#ffd400',
        light: '#d4f0f0',
        dark: '#2b4570',
        aurora: '#5dfdcb',
        avalanche: '#b388eb',
        blizzard: '#5999ff',
        frost: '#72ddf7',
        snow: '#f1dede',
      },
      fontFamily: {
        choco: ['ChocoRomance', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
