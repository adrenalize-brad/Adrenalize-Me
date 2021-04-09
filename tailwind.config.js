module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'headers': ['Rajdhani', 'sans-serif'],
      'content': ['Open Sans', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#0E9BF9',
      secondary:"#0E69FF",
      white:"#EEEEEE",
      black:"#111111",
      gray:"#101010",
      }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
  