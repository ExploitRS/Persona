/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
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
          },
        },
        // MidNightBlue: '0a0c2e',
      }
    },
  },
  plugins: [],
}
