/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#ef4444',
        'brand-red-dark': '#dc2626',
        'brand-light': '#f9fafb',
      }
    }
  },
  plugins: [],
}