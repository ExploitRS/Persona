/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/layouts/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cy': {
          'red': {
            light: 'var(--cy-red-light)',
          },
          'blue': {
            light: 'var(--cy-blue-light)',
            mid: 'var(--cy-blue-mid)',
            dark: 'var(--cy-blue-dark)',
            border: 'var(--cy-blue-border)',
          },
        },
        'wild-kingdom': {
          'front': {
            green: 'var(--wild-kingdom-front-green)',
          },
          'bg': {
            'green': {
              light: 'var(--wild-kingdom-bg-green-light)',
              dark: 'var(--wild-kingdom-bg-green-dark)',
            'gradation': 'var(--wild-kingdom-bg-gradation)',
            },
          },
          'text': {
            green: 'var(--wild-kingdom-text-green)',
            white: 'var(--wild-kingdom-text-white)',
            fade: {
              green: 'var(--wild-kingdom-text-fade-green)',
            },
          },
          'gradation': {
            green: 'var(--wild-kingdom-gradation-green)',
            purple: 'var(--wild-kingdom-gradation-purple)',
          },
          shadow: {
            purple: 'var(--wild-kingdom-shadow-purple)',
          },
          icon: {
            red: 'var(--wild-kingdom-icon-red)',
            pumpkin: 'var(--wild-kingdom-icon-pumpkin)',
          },
        },
        // MidNightBlue: '0a0c2e',
      },
    },
  },
  plugins: [],
}
