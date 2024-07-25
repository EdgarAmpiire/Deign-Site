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
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("tw-elements-react/dist/plugin.cjs"),
  ],
};
