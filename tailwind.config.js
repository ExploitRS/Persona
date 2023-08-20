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
        'glass': {
          'card': {
            border: 'var(--glass-card-border)',
          }
        },
        'language': {
          'rust': {
            normal: 'rgb(var(--language-rust))',
            transparent: 'rgb(var(--language-rust) / 2)',
          },
          'nim': {
            normal: 'rgb(var(--language-nim))',
            transparent: 'rgb(var(--language-nim) / 2)',
          },
          'elm': {
            normal: 'rgb(var(--language-elm))',
            transparent: 'rgb(var(--language-elm) / .2)',
          },
          'go': {
            normal: 'rgb(var(--language-go))',
            transparent: 'rgb(var(--language-go) / 2)',
          },
          'typescript': {
            normal: 'rgb(var(--language-typescript))',
            transparent: 'rgb(var(--language-typescript) / 2)',
          },
        },
        'brand': {
          hackerone: 'rgb(var(--brand-hackerone))',
          malware: 'rgb(var(--brand-malware))',
        },
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
    backdropBlur: {
      ios: '75px'
    },
  },
  plugins: [],
}
