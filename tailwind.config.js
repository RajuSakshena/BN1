/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F4F6EF',
        forest: '#1E382D',
        sage: '#6F9079',
        mint: '#E2EBDF',
        line: '#DCE4D9',
        clay: '#D58A69',
      },
      fontFamily: {
        editorial: ['Newsreader', 'Georgia', 'serif'],
        sans: ['DM Sans', 'Arial', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
