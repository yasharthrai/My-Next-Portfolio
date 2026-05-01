/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1a1f2e',
        'primary-light': '#243447',
        'accent': '#d4af37',
        'accent-light': '#e8c547',
        'text-primary': '#f0f1f3',
        'text-secondary': '#b0b5bf',
        'border': '#3a4556',
      },
      fontFamily: {
        'mono': ['IBM Plex Mono', 'monospace'],
        'serif': ['EB Garamond', 'serif'],
        'sans': ['Poppins', 'sans-serif'],
      },
      backgroundColor: {
        'dark': '#1a1f2e',
        'darker': '#0f1319',
      },
    },
  },
  plugins: [],
}
