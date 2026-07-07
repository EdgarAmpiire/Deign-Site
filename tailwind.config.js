/** @type {import('tailwindcss').Config} */
export default {
  content: [
   
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ], 
  
  theme: {
    extend: {
      colors: {
        'primary': '#37b767',
        'secondary': '#042c3f',
        'navy': {
          DEFAULT: '#0a2e3f',
          950: '#061d28',
          900: '#0a2e3f',
          800: '#0f3a4e',
          700: '#154a62',
        },
        'accent': {
          DEFAULT: '#3cb54a',
          dim: '#2c8a38',
          light: '#6bd478',
        },
        'bone': {
          DEFAULT: '#f4efe2',
          dim: '#d9d3c4',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'expo-in-out': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
      backgroundImage: {
        'circuit-grid': 'linear-gradient(rgba(60,181,74,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(60,181,74,0.08) 1px, transparent 1px)',
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("tw-elements-react/dist/plugin.cjs"),
  ],
};
