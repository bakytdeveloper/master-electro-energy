/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          50: "#fffaf0",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#0541f5",
          600: "#bdf1fa",
        },
        beige: "#f5f5dc",
        sand: "#fdf6e3",

        // Добавленные фоновые цвета
        background: {
          light: "#ffffff",
          dark: "#1a1a1a",
          primary: "#f8fafc",
          secondary: "#e2e8f0",
          accent: "#0ea5e9",
        },
      },

      backgroundImage: {
        'accent-gradient': 'linear-gradient(to bottom, #0ea5e9, #f5f5dc)',
        'sand-gradient': 'linear-gradient(to bottom, #fdf6e3, #0ea5e9)',

      },

      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
