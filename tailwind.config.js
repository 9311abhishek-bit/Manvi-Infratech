/** EDIT COLORS & FONTS HERE */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy:  { DEFAULT: '#0B2A6B', dark: '#071B47', light: '#1B3F8F' }, // from logo
        brand: { red: '#D01F26' },                                        // from logo
        cream: '#F8F4EC',
        sand:  '#EDE5D6',
        wood:  { DEFAULT: '#8A5A3B', light: '#B88A64' },
        ink:   '#14171F',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
