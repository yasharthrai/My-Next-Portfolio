/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#ffffff',
        'darker': '#f5f5f5',
        'accent': '#dc2626',
        'accent-light': '#ef4444',
      },
      fontFamily: {
        'mono': ['IBM Plex Mono', 'monospace'],
        'serif': ['EB Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}
