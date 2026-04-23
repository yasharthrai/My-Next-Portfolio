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
        'accent': '#ff0000',
        'accent-light': '#ffffff',
      },
      fontFamily: {
        'mono': ['IBM Plex Mono', 'monospace'],
        'serif': ['EB Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}
