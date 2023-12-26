/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      'sm': { 'min': '320px', 'max': '480px' },
      // => @media (min-width: 320px and max-width: 480px) { ... }

      'md': { 'min': '481px', 'max': '768px' },
      // => @media (min-width: 481px and max-width: 768px) { ... }

      'lg': { 'min': '769px', 'max': '1024px' },
      // => @media (min-width: 769px and max-width: 1024px) { ... }

      'xl': { 'min': '1025px', 'max': '1200px' },
      // => @media (min-width: 1025px and max-width: 1200px) { ... }

      '2xl': { 'max': '1400px' },
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      'dark-peach': '#D87D4A',
      'peach': '#FBAF85',
      'dark-black': '#101010',
      'black': '#000000',
      'black-bg': '#0E0E0E',
      'dark-white': '#F1F1F1',
      'light-white': '#FAFAFA',
      'white': '#FFFFFF',
    },

    extend: {
    },
  },
  plugins: [require("tailwindcss-animate")],
}