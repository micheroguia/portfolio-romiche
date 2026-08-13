/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        charbon: '#0F0F13',
        or: '#D4A843',
        creme: '#F5F3EE',
        ardoise: '#1E1E26'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace']
      },
      borderRadius: {
        xl2: '2rem',
        xl3: '3rem'
      }
    }
  },
  plugins: []
};