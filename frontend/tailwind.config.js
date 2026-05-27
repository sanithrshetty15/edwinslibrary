/** @type {import('tailwindcss').Config} */

export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {

    extend: {

      colors: {

        primary: "#9be931",

        dark: "#0a0a0a",

        "gray-soft": "#f5f5f7",

        "gray-medium": "#86868b",
      },

      fontFamily: {

        orbitron: ["Orbitron", "sans-serif"],

        poppins: ["Poppins", "sans-serif"],
      },
    },
  },

  plugins: [],
}