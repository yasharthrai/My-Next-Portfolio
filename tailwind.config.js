/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#0a0e27',
        'darker': '#050811',
        'accent': '#7c3aed',
        'accent-light': '#a78bfa',
      },
      fontFamily: {
        'mono': ['IBM Plex Mono', 'monospace'],
        'serif': ['EB Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}
