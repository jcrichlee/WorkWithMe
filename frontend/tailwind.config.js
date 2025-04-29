/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 👈 THIS enables class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',
        'primary-dark': '#1E40AF',
        secondary: '#9333ea',
        'secondary-dark': '#7e22ce',
        accent: '#f59e0b',
      },
    },
  },
  plugins: [],
}
